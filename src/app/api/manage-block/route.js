import { NextResponse } from 'next/server';
import { headers } from 'next/headers';
import connectToDatabase from '@/lib/mongodb';
import BlockedIP from '@/models/BlockedIP';

export async function POST(req) {
  try {
    // 1. Verify Admin Access
    const headersList = headers();
    const forwardedFor = headersList.get('x-forwarded-for');
    const vercelForwarded = headersList.get('x-vercel-forwarded-for');
    const cloudflareIp = headersList.get('cf-connecting-ip');
    const realIp = headersList.get('x-real-ip');
    
    let incomingIp =
      (forwardedFor ? forwardedFor.split(',')[0].trim() : null) ||
      (vercelForwarded ? vercelForwarded.split(',')[0].trim() : null) ||
      cloudflareIp ||
      realIp ||
      '127.0.0.1';

    if (incomingIp === '::1') {
      incomingIp = '127.0.0.1';
    }

    const rawAllowedIps = process.env.MY_ALLOWED_IP || '';
    const allowedIps = rawAllowedIps
      .split(',')
      .map((ip) => ip.trim())
      .filter(Boolean);

    const isLocalhost = incomingIp === '::1' || incomingIp === '127.0.0.1';
    const isAdmin =
      allowedIps.includes(incomingIp) ||
      (isLocalhost && (allowedIps.includes('127.0.0.1') || allowedIps.includes('::1')));

    if (!isAdmin) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 403 });
    }

    // 2. Parse request body
    const body = await req.json();
    const { targetIp, action } = body;

    if (!targetIp || (action !== 'block' && action !== 'unblock')) {
      return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
    }

    // Protect admin from blocking themselves
    if (targetIp === incomingIp || allowedIps.includes(targetIp)) {
      return NextResponse.json({ error: 'Cannot block an admin IP' }, { status: 400 });
    }

    // 3. Connect to DB and apply action
    await connectToDatabase();

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
