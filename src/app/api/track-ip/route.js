import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Visitor from '@/models/Visitor';

export async function POST(req) {
  try {
    // 1. Extract IP address from request headers
    const forwardedFor = req.headers.get('x-forwarded-for');
    const realIp = req.headers.get('x-real-ip');
    
    let clientIp = forwardedFor ? forwardedFor.split(',')[0].trim() : realIp || '127.0.0.1';

    // Normalize IPv6 localhost
    if (clientIp === '::1') {
      clientIp = '127.0.0.1';
    }

    // 2. Extract visited path from request body
    const body = await req.json().catch(() => ({}));
    const pageVisited = body.pageVisited || body.path || '/';

    // 3. Connect to database and save record
    await connectToDatabase();
    await Visitor.create({
      ipAddress: clientIp,
      pageVisited,
      timestamp: new Date(),
    });

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error('Track IP Error:', error);
    return NextResponse.json(
      { error: 'Failed to record tracking info' },
      { status: 500 }
    );
  }
}
