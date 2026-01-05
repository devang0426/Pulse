export const WELCOME_EMAIL_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Welcome to PULSE</title>

  <style>
    @media only screen and (max-width: 600px) {
      .container { width: 100% !important; }
      .padding { padding: 24px !important; }
      .title { font-size: 22px !important; }
    }
  </style>
</head>

<body style="margin:0;padding:0;background:#050505;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center" style="padding:48px 16px;">

        <table class="container" width="100%" cellpadding="0" cellspacing="0"
          style="max-width:620px;background:#0b0b0e;border-radius:16px;
          border:1px solid #1f2229;box-shadow:0 20px 60px rgba(0,0,0,.6);overflow:hidden;">

          <!-- GLOW STRIP -->
          <tr>
            <td style="height:4px;background:linear-gradient(90deg,#ff3232,#00ffb4);"></td>
          </tr>

          <!-- HEADER -->
          <tr>
            <td class="padding" style="padding:40px 48px 24px 48px;">
              <span style="
                font-size:32px;
                font-weight:800;
                letter-spacing:1px;
                background:linear-gradient(90deg,#ff3232,#00ffb4);
                -webkit-background-clip:text;
                background-clip:text;
                color:transparent;
                display:inline-block;">
                PULSE
              </span>
            </td>
          </tr>

          <!-- HERO -->
          <tr>
            <td class="padding" style="padding:0 48px 40px 48px;">
              <h1 class="title" style="
                margin:0 0 14px 0;
                font-size:26px;
                font-weight:600;
                color:#ffffff;">
                Welcome aboard, {{name}}
              </h1>

              <p style="
                margin:0 0 32px 0;
                font-size:16px;
                line-height:1.7;
                color:#cfd4dc;">
                {{intro}}
              </p>

              <!-- GLASS CARD -->
              <div style="
                background:linear-gradient(135deg,rgba(255,255,255,.04),rgba(255,255,255,.01));
                border:1px solid rgba(255,255,255,.08);
                border-radius:14px;
                padding:28px;
                backdrop-filter:blur(8px);
                margin-bottom:36px;">

                <p style="
                  margin:0 0 14px 0;
                  font-size:13px;
                  font-weight:600;
                  letter-spacing:.12em;
                  text-transform:uppercase;
                  color:#00ffb4;">
                  Start here
                </p>

                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding:10px 0;color:#e5e7eb;font-size:15px;">
                      ⚡ Track your favorite stocks in one place
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;color:#e5e7eb;font-size:15px;">
                      🔔 Set real-time price & volume alerts
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:10px 0;color:#e5e7eb;font-size:15px;">
                      📊 Catch trends before the market reacts
                    </td>
                  </tr>
                </table>
              </div>

              <!-- CTA -->
              <a href="https://localhost:3000"
                style="
                  display:block;
                  background:linear-gradient(90deg,#ff3232,#00ffb4);
                  padding:18px;
                  border-radius:14px;
                  text-align:center;
                  color:#000000;
                  font-size:16px;
                  font-weight:700;
                  text-decoration:none;
                  box-shadow:0 10px 30px rgba(0,255,180,.25);">
                Enter Dashboard →
              </a>

              <!-- FOOTER -->
              <p style="
                margin:40px 0 0 0;
                font-size:13px;
                line-height:1.6;
                color:#8b8f97;
                text-align:center;">
                PULSE HQ<br/>
                <a href="#" style="color:#8b8f97;text-decoration:underline;">Unsubscribe</a> ·
                <a href="" style="color:#8b8f97;text-decoration:underline;">Visit PULSE</a><br/>
                © 2025 PULSE
              </p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>
</body>
</html>
`;

export const NEWS_SUMMARY_EMAIL_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>PULSE · Market News Summary</title>

  <style>
    @media only screen and (max-width: 600px) {
      .container { width: 100% !important; }
      .padding { padding: 24px !important; }
      .title { font-size: 22px !important; }
    }
  </style>
</head>

<body style="margin:0;padding:0;background:#050505;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center" style="padding:48px 16px;">

        <table class="container" width="100%" cellpadding="0" cellspacing="0"
          style="
            max-width:620px;
            background:#0b0b0e;
            border-radius:16px;
            border:1px solid #1f2229;
            box-shadow:0 20px 60px rgba(0,0,0,.6);
            overflow:hidden;
          ">

          <!-- TOP GRADIENT STRIP -->
          <tr>
            <td style="height:4px;background:linear-gradient(90deg,#ff3232,#00ffb4);"></td>
          </tr>

          <!-- HEADER -->
          <tr>
            <td class="padding" style="padding:40px 48px 24px 48px;">
              <span
                style="
                  font-size:30px;
                  font-weight:800;
                  letter-spacing:1px;
                  background:linear-gradient(90deg,#ff3232,#00ffb4);
                  -webkit-background-clip:text;
                  background-clip:text;
                  color:transparent;
                  display:inline-block;
                ">
                PULSE
              </span>
            </td>
          </tr>

          <!-- TITLE -->
          <tr>
            <td class="padding" style="padding:0 48px 8px 48px;">
              <h1 class="title" style="
                margin:0;
                font-size:26px;
                font-weight:600;
                color:#ffffff;">
                Market News Summary
              </h1>
            </td>
          </tr>

          <!-- DATE -->
          <tr>
            <td class="padding" style="padding:0 48px 32px 48px;">
              <p style="
                margin:0;
                font-size:14px;
                color:#8b8f97;">
                {{date}}
              </p>
            </td>
          </tr>

          <!-- NEWS CONTENT CARD -->
          <tr>
            <td class="padding" style="padding:0 48px 40px 48px;">
              <div
                style="
                  background:linear-gradient(135deg,rgba(255,255,255,.04),rgba(255,255,255,.01));
                  border:1px solid rgba(255,255,255,.08);
                  border-radius:14px;
                  padding:28px;
                "
              >
                {{newsContent}}
              </div>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td class="padding" style="padding:0 48px 40px 48px;">
              <a
                href="https://PULSE.app"
                style="
                  display:block;
                  background:linear-gradient(90deg,#ff3232,#00ffb4);
                  padding:16px;
                  border-radius:14px;
                  text-align:center;
                  color:#000000;
                  font-size:16px;
                  font-weight:700;
                  text-decoration:none;
                  box-shadow:0 10px 30px rgba(0,255,180,.25);
                "
              >
                Open PULSE →
              </a>
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td class="padding" style="padding:0 48px 40px 48px;">
              <p style="
                margin:0;
                font-size:13px;
                line-height:1.6;
                color:#8b8f97;
                text-align:center;">
                You’re receiving this because you subscribed to PULSE market updates.<br/>
                <a href="#" style="color:#8b8f97;text-decoration:underline;">Unsubscribe</a> ·
                <a href="" style="color:#8b8f97;text-decoration:underline;">Visit PULSE</a><br/>
                © 2025 PULSE
              </p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>
</body>
</html>
`;

export const STOCK_ALERT_UPPER_EMAIL_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>PULSE · Price Alert</title>

  <style>
    @media only screen and (max-width: 600px) {
      .container { width: 100% !important; }
      .padding { padding: 24px !important; }
      .title { font-size: 22px !important; }
      .price { font-size: 28px !important; }
    }
  </style>
</head>

<body style="margin:0;padding:0;background:#050505;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center" style="padding:48px 16px;">

        <table class="container" width="100%" cellpadding="0" cellspacing="0"
          style="
            max-width:620px;
            background:#0b0b0e;
            border-radius:16px;
            border:1px solid #1f2229;
            box-shadow:0 20px 60px rgba(0,0,0,.6);
            overflow:hidden;
          ">

          <!-- TOP GLOW -->
          <tr>
            <td style="height:4px;background:linear-gradient(90deg,#ff3232,#00ffb4);"></td>
          </tr>

          <!-- HEADER -->
          <tr>
            <td class="padding" style="padding:40px 48px 24px 48px;">
              <span style="
                font-size:30px;
                font-weight:800;
                letter-spacing:1px;
                background:linear-gradient(90deg,#ff3232,#00ffb4);
                -webkit-background-clip:text;
                background-clip:text;
                color:transparent;
                display:inline-block;">
                PULSE
              </span>
            </td>
          </tr>

          <!-- ALERT TITLE -->
          <tr>
            <td class="padding" style="padding:0 48px 32px 48px;">
              <h1 class="title" style="
                margin:0 0 8px 0;
                font-size:26px;
                font-weight:600;
                color:#ffffff;">
                🚨 Price Alert Triggered
              </h1>
              <p style="margin:0;font-size:14px;color:#8b8f97;">
                {{timestamp}}
              </p>
            </td>
          </tr>

          <!-- STOCK CARD -->
          <tr>
            <td class="padding" style="padding:0 48px 32px 48px;">
              <div style="
                background:linear-gradient(135deg,rgba(255,255,255,.05),rgba(255,255,255,.01));
                border:1px solid rgba(255,255,255,.08);
                border-radius:16px;
                padding:28px;
                text-align:center;
              ">
                <h2 style="margin:0 0 4px 0;font-size:28px;font-weight:700;color:#ffffff;">
                  {{symbol}}
                </h2>
                <p style="margin:0 0 20px 0;font-size:14px;color:#9ca3af;">
                  {{company}}
                </p>

                <p style="
                  margin:0 0 6px 0;
                  font-size:12px;
                  letter-spacing:.12em;
                  text-transform:uppercase;
                  color:#00ffb4;">
                  Current Price
                </p>

                <p class="price" style="
                  margin:0;
                  font-size:36px;
                  font-weight:800;
                  color:#10b981;">
                  {{currentPrice}}
                </p>
              </div>
            </td>
          </tr>

          <!-- DETAILS -->
          <tr>
            <td class="padding" style="padding:0 48px 32px 48px;">
              <div style="
                background:#0f1116;
                border:1px solid #1f2229;
                border-radius:14px;
                padding:22px;
              ">
                <p style="margin:0 0 8px 0;font-size:15px;color:#cfd4dc;">
                  <strong>Target Price:</strong> {{targetPrice}}
                </p>
                <p style="margin:0;font-size:15px;color:#cfd4dc;">
                  <strong>Trigger:</strong> Price exceeded your upper threshold
                </p>
              </div>
            </td>
          </tr>

          <!-- OPPORTUNITY -->
          <tr>
            <td class="padding" style="padding:0 48px 36px 48px;">
              <div style="
                background:rgba(255,50,50,.08);
                border:1px solid rgba(255,50,50,.25);
                border-radius:14px;
                padding:22px;
              ">
                <h3 style="
                  margin:0 0 8px 0;
                  font-size:17px;
                  font-weight:600;
                  color:#ff3232;">
                  Opportunity Alert
                </h3>
                <p style="margin:0;font-size:14px;line-height:1.6;color:#e5e7eb;">
                  {{symbol}} has reached your target price. This may be a good moment
                  to reas
`;

export const STOCK_ALERT_LOWER_EMAIL_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>PULSE · Price Alert</title>

  <style>
    @media only screen and (max-width: 600px) {
      .container { width: 100% !important; }
      .padding { padding: 24px !important; }
      .title { font-size: 22px !important; }
      .price { font-size: 28px !important; }
    }
  </style>
</head>

<body style="margin:0;padding:0;background:#050505;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center" style="padding:48px 16px;">

        <table class="container" width="100%" cellpadding="0" cellspacing="0"
          style="
            max-width:620px;
            background:#0b0b0e;
            border-radius:16px;
            border:1px solid #1f2229;
            box-shadow:0 20px 60px rgba(0,0,0,.6);
            overflow:hidden;
          ">

          <!-- TOP GLOW -->
          <tr>
            <td style="height:4px;background:linear-gradient(90deg,#ff3232,#00ffb4);"></td>
          </tr>

          <!-- HEADER -->
          <tr>
            <td class="padding" style="padding:40px 48px 24px 48px;">
              <span style="
                font-size:30px;
                font-weight:800;
                letter-spacing:1px;
                background:linear-gradient(90deg,#ff3232,#00ffb4);
                -webkit-background-clip:text;
                background-clip:text;
                color:transparent;
                display:inline-block;">
                PULSE
              </span>
            </td>
          </tr>

          <!-- ALERT TITLE -->
          <tr>
            <td class="padding" style="padding:0 48px 32px 48px;">
              <h1 class="title" style="
                margin:0 0 8px 0;
                font-size:26px;
                font-weight:600;
                color:#ffffff;">
                📉 Lower Price Alert Triggered
              </h1>
              <p style="margin:0;font-size:14px;color:#8b8f97;">
                {{timestamp}}
              </p>
            </td>
          </tr>

          <!-- STOCK CARD -->
          <tr>
            <td class="padding" style="padding:0 48px 32px 48px;">
              <div style="
                background:linear-gradient(135deg,rgba(255,255,255,.05),rgba(255,255,255,.01));
                border:1px solid rgba(255,255,255,.08);
                border-radius:16px;
                padding:28px;
                text-align:center;
              ">
                <h2 style="margin:0 0 4px 0;font-size:28px;font-weight:700;color:#ffffff;">
                  {{symbol}}
                </h2>
                <p style="margin:0 0 20px 0;font-size:14px;color:#9ca3af;">
                  {{company}}
                </p>

                <p style="
                  margin:0 0 6px 0;
                  font-size:12px;
                  letter-spacing:.12em;
                  text-transform:uppercase;
                  color:#ff6b6b;">
                  Current Price
                </p>

                <p class="price" style="
                  margin:0;
                  font-size:36px;
                  font-weight:800;
                  color:#ef4444;">
                  {{currentPrice}}
                </p>
              </div>
            </td>
          </tr>

          <!-- DETAILS -->
          <tr>
            <td class="padding" style="padding:0 48px 32px 48px;">
              <div style="
                background:#0f1116;
                border:1px solid #1f2229;
                border-radius:14px;
                padding:22px;
              ">
                <p style="margin:0 0 8px 0;font-size:15px;color:#cfd4dc;">
                  <strong>Target Price:</strong> {{targetPrice}}
                </p>
                <p style="margin:0;font-size:15px;color:#cfd4dc;">
                  <strong>Trigger:</strong> Price dropped below your lower threshold
                </p>
              </div>
            </td>
          </tr>

          <!-- OPPORTUNITY -->
          <tr>
            <td class="padding" style="padding:0 48px 36px 48px;">
              <div style="
                background:rgba(239,68,68,.08);
                border:1px solid rgba(239,68,68,.25);
                border-radius:14px;
                padding:22px;
              ">
                <h3 style="
                  margin:0 0 8px 0;
                  font-size:17px;
                  font-weight:600;
                  color:#ef4444;">
                  Potential Buying Opportunity
                </h3>
                <p style="margin:0;font-size:14px;line-height:1.6;color:#e5e7eb;">
                  {{symbol}} has fallen below your target price. This could present
                  a favorable entry point if it aligns with your strategy.
                </p>
              </div>
            </td>
          </tr>

          <!-- CTA -->
          <tr>
            <td class="padding" style="padding:0 48px 40px 48px;">
              <a href="https://stock-market-dev.vercel.app/"
                style="
                  display:block;
                  background:linear-gradient(90deg,#ff3232,#00ffb4);
                  padding:16px;
                  border-radius:14px;
                  text-align:center;
                  color:#000000;
                  font-size:16px;
                  font-weight:700;
                  text-decoration:none;
                  box-shadow:0 10px 30px rgba(255,50,50,.25);
                ">
                Review in Dashboard →
              </a>
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td class="padding" style="padding:0 48px 40px 48px;">
              <p style="
                margin:0;
                font-size:13px;
                line-height:1.6;
                color:#8b8f97;
                text-align:center;">
                You’re receiving this because you enabled PULSE alerts.<br/>
                <a href="#" style="color:#8b8f97;text-decoration:underline;">Unsubscribe</a> ·
                <a href="" style="color:#8b8f97;text-decoration:underline;">Visit PULSE</a><br/>
                © 2025 PULSE
              </p>
            </td>
          </tr>

        </table>

      </td>
    </tr>
  </table>
</body>
</html>
`;

export const VOLUME_ALERT_EMAIL_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>PULSE · Volume Alert</title>

  <style>
    @media only screen and (max-width: 600px) {
      .container { width: 100% !important; }
      .pad { padding: 24px !important; }
      .title { font-size: 22px !important; }
      .volume { font-size: 28px !important; }
    }
  </style>
</head>

<body style="margin:0;padding:0;background:#050505;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0">
<tr>
<td align="center" style="padding:48px 16px;">

<table class="container" width="100%" cellpadding="0" cellspacing="0"
  style="
    max-width:620px;
    background:#0b0b0e;
    border-radius:16px;
    border:1px solid #1f2229;
    box-shadow:0 20px 60px rgba(0,0,0,.6);
    overflow:hidden;
  ">

  <!-- TOP GRADIENT -->
  <tr>
    <td style="height:4px;background:linear-gradient(90deg,#7c3aed,#00ffb4);"></td>
  </tr>

  <!-- HEADER -->
  <tr>
    <td class="pad" style="padding:40px 48px 24px 48px;">
      <span style="
        font-size:30px;
        font-weight:800;
        letter-spacing:1px;
        background:linear-gradient(90deg,#7c3aed,#00ffb4);
        -webkit-background-clip:text;
        background-clip:text;
        color:transparent;
        display:inline-block;">
        PULSE
      </span>
    </td>
  </tr>

  <!-- TITLE -->
  <tr>
    <td class="pad" style="padding:0 48px 32px 48px;">
      <h1 class="title" style="margin:0 0 8px 0;font-size:26px;font-weight:600;color:#ffffff;">
        📊 Unusual Volume Detected
      </h1>
      <p style="margin:0;font-size:14px;color:#8b8f97;">
        {{timestamp}}
      </p>
    </td>
  </tr>

  <!-- MAIN CARD -->
  <tr>
    <td class="pad" style="padding:0 48px 32px 48px;">
      <div style="
        background:linear-gradient(135deg,rgba(255,255,255,.06),rgba(255,255,255,.02));
        border:1px solid rgba(255,255,255,.08);
        border-radius:16px;
        padding:28px;
        text-align:center;
      ">
        <h2 style="margin:0 0 4px 0;font-size:28px;font-weight:700;color:#ffffff;">
          {{symbol}}
        </h2>
        <p style="margin:0 0 20px 0;font-size:14px;color:#9ca3af;">
          {{company}}
        </p>

        <p style="margin:0 0 6px 0;font-size:12px;letter-spacing:.12em;text-transform:uppercase;color:#a78bfa;">
          Current Volume
        </p>
        <p class="volume" style="margin:0;font-size:36px;font-weight:800;color:#7c3aed;">
          {{currentVolume}}M
        </p>

        <div style="margin-top:22px;padding-top:18px;border-top:1px solid rgba(255,255,255,.08);">
          <p style="margin:0 0 4px 0;font-size:12px;text-transform:uppercase;letter-spacing:.12em;color:#9ca3af;">
            Current Price
          </p>
          <p style="margin:0;font-size:18px;font-weight:600;color:{{priceColor}};">
            {{currentPrice}} ({{changeDirection}}{{changePercent}}%)
          </p>
        </div>
      </div>
    </td>
  </tr>

  <!-- DETAILS -->
  <tr>
    <td class="pad" style="padding:0 48px 28px 48px;">
      <div style="
        background:#0f1116;
        border:1px solid #1f2229;
        border-radius:14px;
        padding:22px;
      ">
        <p style="margin:0 0 8px 0;font-size:15px;color:#cfd4dc;">
          <strong>Trigger:</strong> {{alertMessage}}
        </p>
        <p style="margin:0 0 8px 0;font-size:15px;color:#cfd4dc;">
          <strong>Average Volume:</strong> {{averageVolume}}M shares
        </p>
        <p style="margin:0;font-size:15px;color:#cfd4dc;">
          <strong>Spike:</strong> {{volumeSpike}} above normal activity
        </p>
      </div>
    </td>
  </tr>

  <!-- CONTEXT -->
  <tr>
    <td class="pad" style="padding:0 48px 36px 48px;">
      <div style="
        background:rgba(124,58,237,.08);
        border:1px solid rgba(124,58,237,.25);
        border-radius:14px;
        padding:22px;
      ">
        <h3 style="margin:0 0 8px 0;font-size:17px;font-weight:600;color:#a78bfa;">
          Why This Matters
        </h3>
        <p style="margin:0;font-size:14px;line-height:1.6;color:#e5e7eb;">
          Elevated volume often precedes volatility. This activity may be driven by
          news, institutional interest, or technical breakouts worth monitoring.
        </p>
      </div>
    </td>
  </tr>

  <!-- CTA -->
  <tr>
    <td class="pad" style="padding:0 48px 40px 48px;">
      <a href="https://stock-market-dev.vercel.app/"
        style="
          display:block;
          background:linear-gradient(90deg,#7c3aed,#00ffb4);
          padding:16px;
          border-radius:14px;
          text-align:center;
          color:#000000;
          font-size:16px;
          font-weight:700;
          text-decoration:none;
          box-shadow:0 10px 30px rgba(124,58,237,.3);
        ">
        Analyze in Dashboard →
      </a>
    </td>
  </tr>

  <!-- FOOTER -->
  <tr>
    <td class="pad" style="padding:0 48px 40px 48px;text-align:center;">
      <p style="margin:0;font-size:13px;line-height:1.6;color:#8b8f97;">
        Informational alert only — not financial advice.<br/>
        <a href="#" style="color:#8b8f97;text-decoration:underline;">Unsubscribe</a> ·
        <a href="" style="color:#8b8f97;text-decoration:underline;">Visit PULSE</a><br/>
        © 2025 PULSE
      </p>
    </td>
  </tr>

</table>

</td>
</tr>
</table>
</body>
</html>
`;

export const INACTIVE_USER_REMINDER_EMAIL_TEMPLATE = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>PULSE · We Miss You</title>

  <style>
    @media only screen and (max-width: 600px) {
      .container { width: 100% !important; }
      .padding { padding: 24px !important; }
      .title { font-size: 22px !important; }
      .cta { font-size: 16px !important; }
    }
  </style>
</head>

<body style="margin:0;padding:0;background:#050505;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
<table width="100%" cellpadding="0" cellspacing="0">
<tr>
<td align="center" style="padding:48px 16px;">

<table class="container" width="100%" cellpadding="0" cellspacing="0"
  style="
    max-width:620px;
    background:#0b0b0e;
    border-radius:16px;
    border:1px solid #1f2229;
    box-shadow:0 20px 60px rgba(0,0,0,.6);
    overflow:hidden;
  ">

  <!-- TOP GLOW -->
  <tr>
    <td style="height:4px;background:linear-gradient(90deg,#ff3232,#00ffb4);"></td>
  </tr>

  <!-- HEADER -->
  <tr>
    <td class="padding" style="padding:40px 48px 24px 48px;">
      <span style="
        font-size:30px;
        font-weight:800;
        letter-spacing:1.2px;
        background:linear-gradient(90deg,#ff3232,#00ffb4);
        -webkit-background-clip:text;
        background-clip:text;
        color:transparent;
        display:inline-block;">
        PULSE
      </span>
      <div style="
        margin-top:14px;
        height:2px;
        width:56px;
        background:linear-gradient(90deg,#ff3232,#00ffb4);
        border-radius:2px;
      "></div>
    </td>
  </tr>

  <!-- TITLE -->
  <tr>
    <td class="padding" style="padding:0 48px 32px 48px;">
      <h1 class="title" style="
        margin:0 0 8px 0;
        font-size:28px;
        font-weight:700;
        color:#ffffff;">
        We Miss You, {{name}}!
      </h1>
      <p style="margin:0;font-size:14px;color:#8b8f97;">
        It’s been a while since your last visit.
      </p>
    </td>
  </tr>

  <!-- INFO CARD -->
  <tr>
    <td class="padding" style="padding:0 48px 32px 48px;">
      <div style="
        background:linear-gradient(135deg,rgba(255,255,255,.05),rgba(255,255,255,.01));
        border:1px solid rgba(255,255,255,.08);
        border-radius:16px;
        padding:28px;
      ">
        <h3 style="margin:0 0 8px 0;font-size:18px;font-weight:600;color:#ff3232;">
          Market Update
        </h3>
        <p style="margin:0;font-size:14px;line-height:1.6;color:#e5e7eb;">
          Markets have been active! Price alerts, volume spikes, and watchlist signals
          may have triggered since your last session. PULSE is designed to surface
          only what matters, so you never miss key opportunities.
        </p>
      </div>
    </td>
  </tr>

  <!-- SUPPORTING COPY -->
  <tr>
    <td class="padding" style="padding:0 48px 36px 48px;">
      <p style="margin:0;font-size:16px;line-height:1.6;color:#ccdadd;">
        Your watchlists and alerts are still active. Jump back in whenever you’re ready
        and stay aligned with the market.
      </p>
    </td>
  </tr>

  <!-- CTA -->
  <tr>
    <td class="padding" style="padding:0 48px 40px 48px;">
      <a href="{{dashboardUrl}}"
         style="
           display:block;
           background:linear-gradient(90deg,#FDD458,#E8BA40);
           padding:16px;
           border-radius:14px;
           text-align:center;
           color:#000000;
           font-size:16px;
           font-weight:700;
           text-decoration:none;
           box-shadow:0 10px 30px rgba(232,186,64,.35);
         ">
        Return to Dashboard →
      </a>
    </td>
  </tr>

  <!-- FOOTER -->
  <tr>
    <td class="padding" style="padding:0 48px 40px 48px;text-align:center;">
      <p style="margin:0;font-size:13px;line-height:1.6;color:#8b8f97;">
        You’re receiving this email because you have an account with PULSE.<br/>
        <a href="{{unsubscribeUrl}}" style="color:#8b8f97;text-decoration:underline;">Unsubscribe</a> ·
        <a href="{{dashboardUrl}}" style="color:#8b8f97;text-decoration:underline;">Visit PULSE</a><br/>
        © 2025 PULSE
      </p>
    </td>
  </tr>

</table>

</td>
</tr>
</table>
</body>
</html>
`;