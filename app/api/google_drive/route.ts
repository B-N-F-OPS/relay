import supabase from '@/lib/supabase'
import {google} from 'googleapis';

export default async function listFiles() {

const authSession = supabase.auth

const drive = google.drive('v3');
  // Get the list of files.
  const result = await drive.files.list({
    auth: authSession,
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

await listFiles();