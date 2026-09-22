'use server'

import { oauth2Client } from "@/lib/oauthClient";
import { cookies } from "next/headers";
import { google } from "googleapis";

export default async function googleDriveFiles() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("google_access_token")?.value;
  oauth2Client.setCredentials({ access_token: accessToken });
  let files;

  const drive = google.drive("v3");

  try {
    const result = await drive.files.list({
      auth: oauth2Client,
      pageSize: 20,
      fields: "nextPageToken, files(id, name)",
    });
    files = result.data.files;

  } catch (error) {
    console.log(error)
  } 

  return files
}

//   return (
//     <div className="justify-center w-full flex text-center pt-10 flex-col items-center">
//       <h1 className="text-lg font-bold">Google Drive Files</h1>
//       <ul>
//         {files?.map((file) => (
//           <li key={file.id}>{file.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }