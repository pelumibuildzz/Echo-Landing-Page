# Waitlist Integration Test

You can test the waitlist functionality by:

1. Setting up your environment variables in `.env.local` (see GOOGLE_SHEETS_SETUP.md)
2. Starting the development server: `pnpm dev`
3. Opening http://localhost:3000 in your browser
4. Testing the email forms in both:
   - Hero section (top of the page)
   - Join Waitlist section (bottom of the page)

## Testing without Google Sheets setup

If you haven't set up Google Sheets yet, you can still test the form validation and API endpoint:

```bash
# Test the API endpoint directly
curl -X POST http://localhost:3000/api/waitlist \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com"}'
```

Without environment variables, you'll get a 500 error, but this confirms the endpoint is working.

## API Endpoint Features

- **POST** `/api/waitlist`
- Accepts JSON with `email` field
- Validates email format
- Checks for duplicate emails
- Creates "EchoWaitList" sheet automatically
- Returns appropriate success/error messages
- Stores: Email, Timestamp, Status columns