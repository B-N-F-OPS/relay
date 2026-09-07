import { listFiles } from '@/lib/g_drive'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const gDrive_Data = await listFiles();
    return NextResponse.json(
      {status: 200, Data: gDrive_Data}
    )

  } catch(error) {
    return NextResponse.json({
      status: 500,
      error: error.message
    })
  }
}