import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 }
      );
    }

    // Google Sheets configuration
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });
    const spreadsheetId = process.env.GOOGLE_SPREADSHEET_ID;

    // Check if the spreadsheet and worksheet exist
    try {
      // First, try to get the sheet to see if it exists
      await sheets.spreadsheets.values.get({
        spreadsheetId,
        range: "EchoWaitList!A1",
      });
    } catch (error) {
      // If the sheet doesn't exist, create it
      if (error.code === 400) {
        await sheets.spreadsheets.batchUpdate({
          spreadsheetId,
          requestBody: {
            requests: [
              {
                addSheet: {
                  properties: {
                    title: "EchoWaitList",
                  },
                },
              },
            ],
          },
        });

        // Add headers to the new sheet
        await sheets.spreadsheets.values.update({
          spreadsheetId,
          range: "EchoWaitList!A1:C1",
          valueInputOption: "RAW",
          requestBody: {
            values: [["Email", "Timestamp", "Status"]],
          },
        });
      } else {
        throw error;
      }
    }

    // Check if email already exists
    const existingData = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "EchoWaitList!A:A",
    });

    const existingEmails = existingData.data.values?.flat() || [];
    if (existingEmails.includes(email)) {
      return NextResponse.json(
        { message: "You are already on the waitlist!" },
        { status: 200 }
      );
    }

    // Add the email to the sheet
    const timestamp = new Date().toISOString();
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "EchoWaitList!A:C",
      valueInputOption: "RAW",
      requestBody: {
        values: [[email, timestamp, "Active"]],
      },
    });

    return NextResponse.json(
      { message: "Successfully joined the waitlist!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error adding to waitlist:", error);
    return NextResponse.json(
      { error: "Failed to join waitlist. Please try again." },
      { status: 500 }
    );
  }
}
