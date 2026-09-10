// app/actions/drive.ts
'use server';

import { listFiles } from '@/lib/g_drive';

export async function listDriveFiles() {
  try {
    const driveFiles = await listFiles();
    const response = await driveFiles.json()

    console.log(response)
    return response
  } catch (error) {
    console.error('Drive API Error:', error);
    return { success: false, error: error.message };
  }
}
