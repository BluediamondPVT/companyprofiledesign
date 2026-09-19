import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import connectToDatabase from '@/lib/mongodb';
import Visitor from '@/models/Visitor';
import LogsViewer from './LogsViewer';

// Prevent Next.js from statically optimizing or caching this page
export const dynamic = 'force-dynamic';

export const metadata = {
  title: 'Visitor Logs',
  robots: {
    index: false,
    follow: false,
  },
};

export default async function HiddenLogsPage() {
  // 1. Read incoming request IP using Next.js headers (support Vercel, Cloudflare, etc.)
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

  // 2. Allowed IPs from environment variable (supports comma-separated list)
  const rawAllowedIps = process.env.MY_ALLOWED_IP || '';
  const allowedIps = rawAllowedIps
    .split(',')
    .map((ip) => ip.trim())
    .filter(Boolean);

  // Check matching: handle localhost (::1 and 127.0.0.1) and exact matches
  const isLocalhost = incomingIp === '::1' || incomingIp === '127.0.0.1';
  const isAllowed =
    allowedIps.includes(incomingIp) ||
    (isLocalhost && (allowedIps.includes('127.0.0.1') || allowedIps.includes('::1')));

  // 3. Unauthorized access -> 404 Not Found immediately
  if (!isAllowed) {
    notFound();
  }

  // 4. Fetch visitor records, calculate visit count, and get blocked IPs
  let visitors = [];
  let ipCountsMap = {};
  let dbError = null;
  let blockedIpsList = [];

  try {
    await connectToDatabase();
    
    // Fetch visitor logs (up to 1000 latest records)
    visitors = await Visitor.find({}).sort({ timestamp: -1 }).limit(1000).lean();

    // Aggregate total visits count for every IP across the entire database
    const ipCounts = await Visitor.aggregate([
      { $group: { _id: '$ipAddress', totalVisits: { $sum: 1 } } },
    ]);

    ipCounts.forEach((item) => {
      if (item._id) {
        ipCountsMap[item._id] = item.totalVisits;
      }
    });

    // Fetch blocked IPs
    const BlockedIP = (await import('@/models/BlockedIP')).default;
    const blockedRecords = await BlockedIP.find({}, 'ipAddress').lean();
    blockedIpsList = blockedRecords.map(b => b.ipAddress);
  } catch (err) {
    console.error('Error querying visitor logs:', err);
    dbError = err.message;
  }

  // If database connection error, render error card in light theme
  if (dbError) {
    return (
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#f8fafc',
        padding: '50px 20px',
        fontFamily: 'system-ui, sans-serif'
      }}>
        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
          backgroundColor: '#ffffff',
          borderRadius: '12px',
          padding: '24px',
          border: '1px solid #fee2e2',
          boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)'
        }}>
          <h2 style={{ color: '#dc2626', margin: '0 0 12px 0', fontSize: '18px' }}>
            Database Connection Error
          </h2>
          <p style={{ color: '#4b5563', fontSize: '14px', lineHeight: 1.5, margin: 0 }}>
            {dbError}
          </p>
        </div>
      </div>
    );
  }

  // Serialize objects for client component
  const serializedVisitors = visitors.map((v) => ({
    _id: v._id ? v._id.toString() : Math.random().toString(),
    ipAddress: v.ipAddress,
    pageVisited: v.pageVisited || '/',
    timestamp: v.timestamp instanceof Date ? v.timestamp.toISOString() : new Date(v.timestamp).toISOString(),
    visitCount: ipCountsMap[v.ipAddress] || v.visitCount || 1,
  }));

  return (
    <LogsViewer
      initialVisitors={serializedVisitors}
      incomingIp={incomingIp}
      totalUniqueAllTime={Object.keys(ipCountsMap).length}
      initialBlockedIps={blockedIpsList}
    />
  );
}
