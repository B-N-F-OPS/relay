import path from 'node:path';
import process from 'node:process';
import {authenticate} from '@google-cloud/local-auth';
import {google} from 'googleapis';

// The scope for reading file metadata.
const SCOPES = ['https://www.googleapis.com/auth/drive.metadata.readonly'];
// The path to the credentials file.
const oauth2Client = new google.auth.OAuth2(
  process.env.NEXT_GOOGLE_CLIENT_ID,
  process.env.NEXT_GOOGLE_CLIENT_SECRET,
  process.env.NEXT_SUPABASE_CALLBACK_URL
);

/**
 * Lists the names and IDs of up to 10 files.
 */
export async function listFiles() {
  const auth = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: SCOPES,
  include_granted_scopes: true,
});


  // Create a new Drive API client.
  const drive = google.drive({version: 'v3', auth});
  // Get the list of files.
  const result = await drive.files.list({
    pageSize: 10,
    fields: 'nextPageToken, files(id, name)',
  });
  const files = result.data.files;
  if (!files || files.length === 0) {
    console.log('No files found.');
    return;
  }

  console.log('Files:');
  // Print the name and ID of each file.
  files.forEach((file) => {
    console.log(`${file.name} (${file.id})`);
  });
}

// await listFiles();