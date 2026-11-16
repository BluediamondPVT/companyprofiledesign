import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';

export const dynamic = 'force-dynamic';

export async function POST(req) {
  try {
    // 1. Verify Admin Access
    const forwardedFor = req.headers.get('x-forwarded-for');
    const vercelForwarded = req.headers.get('x-vercel-forwarded-for');
    const cloudflareIp = req.headers.get('cf-connecting-ip');
    const realIp = req.headers.get('x-real-ip');
    
    let incomingIp =
      (forwardedFor ? forwardedFor.split(',')[0].trim() : null) ||
      (vercelForwarded ? vercelForwarded.split(',')[0].trim() : null) ||
      cloudflareIp ||
      realIp ||
      '127.0.0.1';

    if (incomingIp === '::1' || incomingIp === '::ffff:127.0.0.1') {
      incomingIp = '127.0.0.1';
    }

    const rawAllowedIps = process.env.MY_ALLOWED_IP || '';
    const allowedIps = rawAllowedIps
      .split(',')
      .map((ip) => ip.trim())
      .filter(Boolean);

    const isLocalhost =
      incomingIp === '::1' ||
      incomingIp === '127.0.0.1' ||
      incomingIp === 'localhost' ||
      incomingIp.includes('127.0.0.1');

    const isAdmin = isLocalhost || allowedIps.includes(incomingIp);

    if (!isAdmin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    // 2. Parse request body
    const body = await req.json();
    const { targetIp, action } = body;

    if (!targetIp || (action !== 'block' && action !== 'unblock')) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }

    // Protect localhost and admin IPs from being blocked
    const isTargetLocalhost =
      targetIp === '127.0.0.1' ||
      targetIp === '::1' ||
      targetIp === 'localhost' ||
      targetIp.includes('127.0.0.1');

    if (action === 'block' && (isTargetLocalhost || targetIp === incomingIp || allowedIps.includes(targetIp))) {
      return NextResponse.json({ error: 'Cannot block localhost or admin IP' }, { status: 400 });
    }

    // 3. Connect to DB and apply action
    await connectToDatabase();
    const BlockedIP = (await import('@/models/BlockedIP')).default;

    if (action === 'block') {
      await BlockedIP.findOneAndUpdate(
        { ipAddress: targetIp },
        { ipAddress: targetIp, blockedAt: new Date() },
        { upsert: true, new: true }
      );
      return NextResponse.json({ message: 'IP blocked successfully' }, { status: 200 });
    } else {
      await BlockedIP.findOneAndDelete({ ipAddress: targetIp });
      return NextResponse.json({ message: 'IP unblocked successfully' }, { status: 200 });
    }

  } catch (error) {
    console.error('Manage block API error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
