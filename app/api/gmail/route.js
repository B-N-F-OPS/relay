'use server'

import { oauth2Client } from "@/lib/oauthClient";
import { cookies } from "next/headers";
import { google } from "googleapis";

export default async function gmailFiles() {
    const cookieStore = await cookies();
    const accessToken = cookieStore.get("google_access_token")?.value;
    oauth2Client.setCredentials({ access_token: accessToken });
    let labelList;

  // Create a new Gmail API client.
  const gmail = google.gmail({version: 'v1', auth: oauth2Client});
  // Get the list of labels.
  try{
      const result = await gmail.users.messages.list({
          userId: 'me',
      });

      labelList = result.data.messages;
  } catch(error) {
    console.log(error);
  }
  console.log('Messages=>', labelList);
 
  return labelList;

}