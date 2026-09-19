import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Visitor from '@/models/Visitor';

export async function POST(req) {
  try {
    // 1. Extract IP address from request headers (support Vercel, Cloudflare, standard proxies)
    const forwardedFor = req.headers.get('x-forwarded-for');
    const vercelForwarded = req.headers.get('x-vercel-forwarded-for');
    const cloudflareIp = req.headers.get('cf-connecting-ip');
    const realIp = req.headers.get('x-real-ip');
    
    let clientIp =
      (forwardedFor ? forwardedFor.split(',')[0].trim() : null) ||
      (vercelForwarded ? vercelForwarded.split(',')[0].trim() : null) ||
      cloudflareIp ||
      realIp ||
      '127.0.0.1';

    // Normalize IPv6 localhost
    if (clientIp === '::1') {
      clientIp = '127.0.0.1';
    }

    // 2. Extract visited path from request body
    const body = await req.json().catch(() => ({}));
    const pageVisited = body.pageVisited || body.path || '/';

    // 3. Connect to database, count total visits for this IP, and save record
    await connectToDatabase();
    
    // Check if IP is blocked
    const BlockedIP = (await import('@/models/BlockedIP')).default;
    const isBlocked = await BlockedIP.findOne({ ipAddress: clientIp }).lean();
    if (isBlocked) {
      return NextResponse.json({ isBlocked: true }, { status: 200 });
    }

    const previousVisits = await Visitor.countDocuments({ ipAddress: clientIp });
    const currentVisitNumber = previousVisits + 1;

    await Visitor.create({
      ipAddress: clientIp,
      pageVisited,
      timestamp: new Date(),
      visitCount: currentVisitNumber,
    });

    return NextResponse.json({ success: true, visitNumber: currentVisitNumber }, { status: 201 });
  } catch (error) {
    console.error('Track IP Error:', error);
    return NextResponse.json(
      { error: 'Failed to record tracking info' },
      { status: 500 }
    );
  }
}
