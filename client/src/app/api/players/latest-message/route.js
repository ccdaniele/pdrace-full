import { NextResponse } from 'next/server'
import { getLatestMessage } from '@/components/players/consumerPlayers'

export async function GET() {
    const message = await getLatestMessage();
    console.log('API Route responding with message:', message);
    return NextResponse.json({ message })
}
