import { NextResponse } from 'next/server';
import { oauth2Client } from '@/lib/oauthClient';
import { cookies } from 'next/headers'

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const code = searchParams.get('code');
    const error = searchParams.get('error');

    if (error) {
        return NextResponse.json({ error: 'Google OAuth Error: ' + error });
      }
    
    if (!code) {
        return NextResponse.json({ error: 'Authorization code not found' });
    }

    try {
        const res = NextResponse.redirect(new URL("/Dashboard", req.url));
        const { tokens } = await oauth2Client.getToken(code);
        // const cookieStore = await cookies();
        res.cookies.set({
            name: 'google_access_token',
            value: tokens.access_token || '',  // the access token
            httpOnly: true,  // for security, the cookie is accessible only by the server
            secure: process.env.NODE_ENV === 'production',  // send cookie over HTTPS only in production
            path: '/',  // cookie is available on every route
            maxAge: 60 * 60 * 24 * 7,  // 1 week
        });

        return res
    } catch (error) {

        return NextResponse.json({ error: 'Google OAuth Error failed to exchange code: ' + error });
    }
}