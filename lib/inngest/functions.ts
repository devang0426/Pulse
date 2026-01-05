import { inngest } from "@/lib/inngest/client";
import {
  NEWS_SUMMARY_EMAIL_PROMPT,
  PERSONALIZED_WELCOME_EMAIL_PROMPT,
} from "@/lib/inngest/prompts";
import {
  sendNewsSummaryEmail,
  sendWelcomeEmail,
} from "@/lib/nodemailer";
import { getAllUsersForNewsEmail } from "@/lib/actions/user.actions";
import { getWatchlistSymbolsByEmail } from "@/lib/actions/watchlist.actions";
import { getNews } from "@/lib/actions/finnhub.actions";
import { getFormattedTodayDate } from "@/lib/utils";

/* ----------------------------- SIGN UP EMAIL ----------------------------- */

export const sendSignUpEmail = inngest.createFunction(
  { id: "sign-up-email" },
  { event: "app/user.created" },
  async ({ event, step }) => {
    const userProfile = `
- Country: ${event.data.country ?? "Not specified"}
- Investment goals: ${event.data.investmentGoals ?? "Not specified"}
- Risk tolerance: ${event.data.riskTolerance ?? "Not specified"}
- Preferred industry: ${event.data.preferredIndustry ?? "Not specified"}
`.trim();

    const prompt = PERSONALIZED_WELCOME_EMAIL_PROMPT.replace(
      "{{userProfile}}",
      userProfile
    );

    const response = await step.ai.infer("generate-welcome-intro", {
      model: step.ai.models.gemini({
        model: "gemini-2.5-flash-lite",
      }),
      body: {
        contents: [{ role: "user", parts: [{ text: prompt }] }],
      },
    });

    await step.run("send-welcome-email", async () => {
      const part = response.candidates?.[0]?.content?.parts?.[0];
      const introText =
        part && "text" in part
          ? part.text
          : "Thanks for joining PULSE. You’re now set up to track the market with clarity and confidence.";

      const {
        data: { email, name },
      } = event;

      return sendWelcomeEmail({
        email,
        name,
        intro: introText,
      });
    });

    return { success: true };
  }
);

/* -------------------------- DAILY NEWS SUMMARY --------------------------- */

export const sendDailyNewsSummary = inngest.createFunction(
  { id: "daily-news-summary" },
  [{ event: "app/send.daily.news" }, { cron: "0 12 * * *" }],
  async ({ step }) => {
    const users = (await step.run(
      "get-all-users",
      getAllUsersForNewsEmail
    )) as Array<{ email: string }>;

    if (!users || users.length === 0) {
      return { success: false };
    }

    const results = await step.run("fetch-user-news", async () => {
      const perUser: Array<{
        user: { email: string };
        articles: Array<Record<string, unknown>>;
      }> = [];

      for (const user of users) {
        try {
          const symbols = await getWatchlistSymbolsByEmail(user.email);
          let articles = (await getNews(symbols)) as Array<
            Record<string, unknown>
          >;

          articles = (articles ?? []).slice(0, 6);

          if (!articles.length) {
            articles = ((await getNews()) as Array<
              Record<string, unknown>
            >)?.slice(0, 6) ?? [];
          }

          perUser.push({ user, articles });
        } catch (e) {
          console.error("daily-news error:", user.email, e);
          perUser.push({ user, articles: [] });
        }
      }

      return perUser;
    });

    const userNewsSummaries: Array<{
      user: { email: string };
      newsContent: string | null;
    }> = [];

    for (const item of results) {
      const user = item.user;
      const articles = item.articles;

      try {
        const trimmedArticles = articles.map((a) => ({
          headline: a["headline"],
          summary: a["summary"],
          source: a["source"],
          url: a["url"],
          datetime: a["datetime"],
        }));

        const prompt = NEWS_SUMMARY_EMAIL_PROMPT.replace(
          "{{newsData}}",
          JSON.stringify(trimmedArticles, null, 2)
        );

        const safeId = user.email.replace(/[^a-zA-Z0-9]/g, "-");

        const response = await step.ai.infer(
          `summarize-news-${safeId}`,
          {
            model: step.ai.models.gemini({
              model: "gemini-2.5-flash-lite",
            }),
            body: {
              contents: [{ role: "user", parts: [{ text: prompt }] }],
            },
          }
        );

        const part = response.candidates?.[0]?.content?.parts?.[0];
        const newsContent =
          part && "text" in part ? part.text : null;

        if (
          !newsContent ||
          newsContent.length < 50 ||
          !newsContent.includes("<h3") ||
          !newsContent.includes("<div")
        ) {
          throw new Error("Invalid AI news output");
        }

        userNewsSummaries.push({ user, newsContent });
      } catch (e) {
        console.error("Failed to summarize news for:", user.email, e);
        userNewsSummaries.push({ user, newsContent: null });
      }
    }

    await step.run("send-news-emails", async () => {
      await Promise.all(
        userNewsSummaries.map(({ user, newsContent }) => {
          if (!newsContent) return false;

          return sendNewsSummaryEmail({
            email: user.email,
            date: getFormattedTodayDate(),
            newsContent,
          });
        })
      );
    });

    return { success: true };
  }
);
