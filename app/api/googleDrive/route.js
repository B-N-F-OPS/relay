import { listFiles } from '@/lib/g_drive';

export async function GET() {
    try {
        const files = await listFiles();

        console.log('Google Drive files:', files);

        return Response.json({
            files
        });

    } catch (error) {
        console.error('Google Drive error:', error);

        return Response.json(
            {
                error: error.message
            },
            {
                status: 500
            }
        );
    }
}