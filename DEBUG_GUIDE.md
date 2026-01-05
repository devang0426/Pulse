# PULSE Stock App - Debug Guide & Architecture

## 🔍 Overview

**PULSE** is a Next.js stock market tracking application that integrates:
- **Better Auth** for authentication
- **Finnhub API** for real-time stock data
- **Inngest** for background job processing
- **Google Gemini AI** for personalized content generation
- **Nodemailer** for email notifications
- **MongoDB** for data persistence

---

## 🐛 Issues Fixed

### 1. ✅ Nodemailer Environment Variable Mismatch

**Problem**: The code referenced `NODEMAILER_EMAIL` but `.env` defined `NODE_MAILER_EMAIL`

**Location**: `lib/nodemailer/index.ts` line 7

**Fixed**: Updated code to use correct variable name `NODE_MAILER_EMAIL`

### 2. ✅ Hardcoded Email Address

**Problem**: Sender email was hardcoded as `devang262004@gmail.com` instead of using env variable

**Location**: `lib/nodemailer/index.ts` lines 19, 43

**Fixed**: Changed to dynamic `${process.env.NODE_MAILER_EMAIL}`

### 3. ✅ Missing Error Handling

**Problem**: Email functions had no try-catch blocks, errors would crash Inngest jobs

**Location**: `lib/nodemailer/index.ts` - both email functions

**Fixed**: Added comprehensive error handling with console logging

### 4. ✅ Missing FINNHUB_API_KEY

**Problem**: Code expected `FINNHUB_API_KEY` but it wasn't in `.env`

**Location**: `.env` file

**Fixed**: Added placeholder - **YOU NEED TO ADD YOUR ACTUAL KEY**

### 5. ✅ Improved API Key Naming

**Problem**: Generic `API_KEY` name was confusing

**Location**: `lib/inngest/client.ts`, `.env`

**Fixed**: Added `GEMINI_API_KEY` with fallback to `API_KEY`

---

## 📋 Environment Variables Checklist

Update your `.env` file with real values:

```env
# MongoDB
MONGODB_URI=mongodb+srv://... ✅

# App Config
NODE_ENV="development" ✅
NODE_PUBLIC_BASE_URL=http://localhost:3000 ✅

# Authentication
BETTER_AUTH_SECRET=... ✅
BETTER_AUTH_URL=http://localhost:3000 ✅

# Google Gemini AI (for email personalization & news summaries)
GEMINI_API_KEY=AIzaSy... ✅
API_KEY=AIzaSy... ✅ (legacy fallback)

# Finnhub Stock Data API
FINNHUB_API_KEY=your_finnhub_api_key_here ⚠️ NEEDS YOUR KEY
NEXT_PUBLIC_FINNHUB_API_KEY=your_finnhub_api_key_here ⚠️ NEEDS YOUR KEY

# Email (Gmail SMTP)
NODE_MAILER_EMAIL=devang262004@gmail.com ✅
NODEMAILER_PASSWORD=dxpcarqsynvzwyks ✅
```

### ⚠️ Action Required

1. **Get Finnhub API Key**: 
   - Visit https://finnhub.io/
   - Sign up for free tier
   - Copy your API key
   - Replace `your_finnhub_api_key_here` in `.env`

2. **Verify Gmail App Password**:
   - Ensure `NODEMAILER_PASSWORD` is a Google App Password (not regular password)
   - If emails fail, regenerate at: https://myaccount.google.com/apppasswords

---

## 🏗️ Architecture

### Email Flow

```
┌─────────────────────────────────────────────────────────────┐
│                     User Signs Up                           │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│  Better Auth creates user in MongoDB "user" collection      │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│  Inngest event triggered: "app/user.created"                │
│  Data: { email, name, country, investmentGoals, etc. }      │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│  sendSignUpEmail function (lib/inngest/functions.ts)        │
│  - Formats user profile data                                │
│  - Sends to Gemini AI with prompt                           │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│  Gemini AI (gemini-2.5-flash-lite)                          │
│  - Generates personalized welcome message                   │
│  - Returns HTML paragraph                                   │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│  sendWelcomeEmail (lib/nodemailer/index.ts)                 │
│  - Replaces {{name}} and {{intro}} in template              │
│  - Sends via Gmail SMTP                                     │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│  User receives beautiful welcome email                      │
└─────────────────────────────────────────────────────────────┘
```

### Daily News Summary Flow

```
┌─────────────────────────────────────────────────────────────┐
│  CRON: Daily at 12:00 UTC (or manual trigger)               │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│  sendDailyNewsSummary (lib/inngest/functions.ts)            │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│  getAllUsersForNewsEmail                                    │
│  - Fetches all users from MongoDB                           │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│  For Each User:                                             │
│  1. Get user's watchlist symbols                            │
│  2. Fetch news from Finnhub for those symbols               │
│  3. If no watchlist, use general market news                │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│  Finnhub API: getNews()                                     │
│  - Fetches company news OR general market news              │
│  - Filters last 5 days, max 6 articles                      │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│  For Each User:                                             │
│  - Send articles to Gemini AI                               │
│  - AI formats as HTML with sections, bullets, insights      │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│  sendNewsSummaryEmail (lib/nodemailer/index.ts)             │
│  - Injects AI-generated HTML into template                  │
│  - Sends via Gmail SMTP to user                             │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│  User receives personalized daily news digest               │
└─────────────────────────────────────────────────────────────┘
```

---

## 🧪 Testing

### Test Welcome Email

1. Start dev server: `npm run dev`
2. Visit Inngest dashboard at: http://localhost:3000/api/inngest
3. Trigger event manually:

```bash
# Using curl (PowerShell)
$body = @{
    name = "app/user.created"
    data = @{
        email = "test@example.com"
        name = "John Doe"
        country = "US"
        investmentGoals = "Long-term growth"
        riskTolerance = "Moderate"
        preferredIndustry = "Technology"
    }
} | ConvertTo-Json

Invoke-WebRequest -Uri "http://localhost:3000/api/inngest" -Method POST -Body $body -ContentType "application/json"
```

### Test Daily News Summary

Trigger manually via Inngest dashboard or:

```bash
$body = @{
    name = "app/send.daily.news"
    data = @{}
} | ConvertTo-Json

Invoke-WebRequest -Uri "http://localhost:3000/api/inngest" -Method POST -Body $body -ContentType "application/json"
```

### Check Email Logs

Watch your terminal for logs:
- ✅ `Welcome email sent successfully to ...`
- ✅ `News summary email sent successfully to ...`
- ❌ `Failed to send welcome email to ...: [error details]`

---

## 🔧 Common Issues & Solutions

### Issue: "Authentication failed" in email logs

**Cause**: Gmail App Password is invalid or not set

**Solution**:
1. Go to Google Account → Security → 2-Step Verification
2. Generate new App Password
3. Update `NODEMAILER_PASSWORD` in `.env`
4. Restart dev server

---

### Issue: "FINNHUB API key is not configured"

**Cause**: Missing or invalid Finnhub API key

**Solution**:
1. Sign up at https://finnhub.io/register
2. Copy API key from dashboard
3. Add to `.env`:
   ```env
   FINNHUB_API_KEY=your_actual_key
   NEXT_PUBLIC_FINNHUB_API_KEY=your_actual_key
   ```
4. Restart dev server

---

### Issue: Inngest functions not triggering

**Cause**: Inngest endpoint not registered or dev server not running

**Solution**:
1. Ensure dev server is running: `npm run dev`
2. Visit http://localhost:3000/api/inngest
3. Should see Inngest dashboard
4. Check registered functions: `sendSignUpEmail`, `sendDailyNewsSummary`

---

### Issue: MongoDB connection errors

**Cause**: Invalid connection string or network issues

**Solution**:
1. Verify `MONGODB_URI` is correct
2. Check MongoDB Atlas whitelist (allow all IPs: `0.0.0.0/0` for dev)
3. Test connection manually:
   ```bash
   mongosh "mongodb+srv://..."
   ```

---

### Issue: AI-generated content is malformed

**Cause**: Gemini API key invalid or rate limit exceeded

**Solution**:
1. Verify `GEMINI_API_KEY` is valid
2. Check Google AI Studio quota: https://aistudio.google.com/
3. Review Inngest logs for AI inference errors
4. Ensure prompts in `lib/inngest/prompts.ts` are valid

---

## 📂 Key Files Reference

| File | Purpose |
|------|---------|
| `lib/nodemailer/index.ts` | Email transporter & send functions |
| `lib/nodemailer/templates.ts` | HTML email templates (6 types) |
| `lib/inngest/client.ts` | Inngest client with Gemini AI config |
| `lib/inngest/functions.ts` | Background job definitions |
| `lib/inngest/prompts.ts` | AI prompts for content generation |
| `lib/actions/finnhub.actions.ts` | Finnhub API integration |
| `lib/actions/user.actions.ts` | User database queries |
| `lib/actions/watchlist.actions.ts` | Watchlist database queries |
| `app/api/inngest/route.ts` | Inngest HTTP endpoint |
| `.env` | Environment configuration |

---

## 🚀 Deployment Checklist

Before deploying to production:

- [ ] Replace all API keys with production values
- [ ] Update `BETTER_AUTH_URL` and `NODE_PUBLIC_BASE_URL` to production domain
- [ ] Verify Gmail SMTP credentials work from production server
- [ ] Test Inngest webhook endpoint is publicly accessible
- [ ] Register Inngest production app at https://app.inngest.com/
- [ ] Update MongoDB whitelist to include production server IPs
- [ ] Set `NODE_ENV="production"`
- [ ] Test CRON schedule for daily news (12:00 UTC)
- [ ] Monitor email delivery rates and logs

---

## 📊 Monitoring

### Email Success Metrics

Check these in production:
- Welcome email sent rate (should be ~100% of signups)
- Daily news sent rate (should be 1 per user per day)
- Bounce rate (should be <5%)
- SMTP errors (should be near 0%)

### Inngest Job Monitoring

Access at: https://app.inngest.com/env/production/functions

- `sendSignUpEmail` should have ~100% success rate
- `sendDailyNewsSummary` should run once per day
- Check for AI inference failures
- Monitor execution time (should be <30s per user)

---

## 🆘 Support

If issues persist:
1. Check all environment variables are set correctly
2. Review server logs for detailed error messages
3. Test each component individually (DB → API → Email)
4. Verify external service status (Gmail, Finnhub, Gemini, Inngest)

---

## ✅ Current Status

**All critical bugs fixed!** ✨

The application should now:
- ✅ Send welcome emails correctly
- ✅ Send daily news summaries
- ✅ Use proper environment variables
- ✅ Handle errors gracefully
- ✅ Log useful debugging information

**Next steps**:
1. Add your actual Finnhub API key to `.env`
2. Test the email flows
3. Monitor logs for any issues
