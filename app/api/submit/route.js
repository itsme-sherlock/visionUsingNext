// app/api/route.js

import { google } from "googleapis";
import { NextResponse } from "next/server";

// Handles GET requests to /api
export async function GET(request) {
  // ...
  return NextResponse.json({ message: "Hello World" });
}

// Handles POST requests to /api
export async function POST(request) {
    const body = await request.json()
  console.log(body);
  const { name, email, gender, phone, age, area, occupation, other } = body;
  console.log(name, email, gender, phone, age, area, occupation, other);
  try {
    // Initialize Google Sheets API
    console.log("Initializing Google Sheets API");
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g,'\n'),
      },
      scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets'
      ]
    });
    const sheets = google.sheets({ auth, version: 'v4' });

    // Write data to Google Sheet
    console.log("Writing data to Google Sheet");
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'A:A', // Append to the first available row in column A
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [[name, email, gender, age,area,phone, occupation, other]],
      },
    });
    console.log("Google Sheets API response:", response.data);

    // Check if any updates were made
    if (response.data.updates) {
      console.log("Data successfully appended to the sheet.");
    } else {
      console.log("No updates were made to the sheet.");
    }

    // Display the data sent to Google Sheets
    console.log("Data sent to Google Sheets:", { name, email, gender, age, area,phone, occupation, other });

    return new Response(200, {
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ success: true, data: response.data }),
    });
  } catch (error) {
    console.error('Error submitting form:', error);
      return new Response(500, {
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ success: false, error: error.message }),
      });
    
    
  }
  return NextResponse.json({ message: "Hello World" });
}
