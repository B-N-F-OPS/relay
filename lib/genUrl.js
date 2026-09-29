'use server'

import { oauth2Client } from '@/lib/oauthClient'

export async function getGoogleAuthUrl() {
  const SCOPE = ["https://www.googleapis.com/auth/drive.metadata.readonly",
                  'https://mail.google.com/',
                  'https://www.googleapis.com/auth/gmail.modify',
                  'https://www.googleapis.com/auth/gmail.readonly',
                  'https://www.googleapis.com/auth/gmail.metadata',
                ];

  const authorizationURL = oauth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPE, 
    prompt: "consent" 
  });

  return authorizationURL;
}