# Google Sheets Waitlist Integration Setup

This guide will help you set up Google Sheets integration for the Echo Landing Page waitlist functionality.

## Prerequisites

- Google account
- Access to Google Cloud Console
- A Google Spreadsheet

## Step-by-Step Setup

### 1. Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project or select an existing one
3. Note down your project ID

### 2. Enable Google Sheets API

1. In Google Cloud Console, go to "APIs & Services" > "Library"
2. Search for "Google Sheets API"
3. Click on it and press "Enable"

### 3. Create Service Account

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "Service Account"
3. Fill in the service account details:
   - Name: `echo-waitlist-service`
   - Description: `Service account for Echo waitlist integration`
4. Click "Create and Continue"
5. Skip the optional steps and click "Done"

### 4. Generate Service Account Key

1. Find your newly created service account in the credentials list
2. Click on the service account email
3. Go to the "Keys" tab
4. Click "Add Key" > "Create New Key"
5. Select "JSON" format
6. Click "Create" - this will download a JSON file

### 5. Extract Credentials

Open the downloaded JSON file and extract these values:
- `client_email` - This is your `GOOGLE_CLIENT_EMAIL`
- `private_key` - This is your `GOOGLE_PRIVATE_KEY`

### 6. Create Google Spreadsheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it something like "Echo Waitlist"
4. Copy the spreadsheet ID from the URL:
   ```
   https://docs.google.com/spreadsheets/d/SPREADSHEET_ID_HERE/edit
   ```

### 7. Share Spreadsheet with Service Account

1. In your Google Spreadsheet, click "Share"
2. Add your service account email (`client_email` from the JSON)
3. Give it "Editor" permissions
4. Click "Send"

### 8. Configure Environment Variables

1. Copy `.env.local.example` to `.env.local`
2. Fill in the values:
   ```env
   GOOGLE_CLIENT_EMAIL=your-service-account-email@your-project.iam.gserviceaccount.com
   GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour_Private_Key_Here\n-----END PRIVATE KEY-----"
   GOOGLE_SPREADSHEET_ID=your-google-spreadsheet-id
   ```

**Important Notes:**
- Keep the quotes around `GOOGLE_PRIVATE_KEY`
- Don't remove the `\n` characters in the private key
- Never commit `.env.local` to version control

### 9. Test the Integration

1. Start your development server: `pnpm dev`
2. Try submitting an email through the waitlist form
3. Check your Google Spreadsheet - a new sheet called "EchoWaitList" should be created with your email entry

## Troubleshooting

- **"Invalid credentials"**: Double-check your service account email and private key
- **"Permission denied"**: Ensure the spreadsheet is shared with your service account email
- **"Spreadsheet not found"**: Verify the spreadsheet ID is correct
- **"Sheet not found"**: The API will automatically create the "EchoWaitList" sheet on first use

## Sheet Structure

The "EchoWaitList" sheet will have the following columns:
- **Email**: The submitted email address
- **Timestamp**: When the email was submitted (ISO format)
- **Status**: Always set to "Active" for new submissions