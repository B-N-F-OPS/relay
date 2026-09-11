import { google } from 'googleapis';

export const oauth2Client = new google.auth.OAuth2(
    process.env.NEXT_GOOGLE_CLIENT_ID,
    process.env.NEXT_GOOGLE_CLIENT_SECRET,
    process.env.NEXT_GOOGLE_REDIRECT_URI
);