import { headers } from 'next/headers';
import { notFound } from 'next/navigation';
import connectToDatabase from '@/lib/mongodb';
import Visitor from '@/models/Visitor';

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
  // 1. Read incoming request IP using Next.js headers
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

  // 4. Fetch visitor records and calculate visit count per IP
  let visitors = [];
  let ipCountsMap = {};
  let totalUniqueIPs = 0;
  let topVisitor = null;
  let dbError = null;

  try {
    await connectToDatabase();
    
    // Fetch newest visitor logs
    visitors = await Visitor.find({}).sort({ timestamp: -1 }).limit(300).lean();

    // Aggregate total visits count for every IP across the entire database
    const ipCounts = await Visitor.aggregate([
      { $group: { _id: '$ipAddress', totalVisits: { $sum: 1 } } },
      { $sort: { totalVisits: -1 } },
    ]);

    ipCounts.forEach((item) => {
      if (item._id) {
        ipCountsMap[item._id] = item.totalVisits;
      }
    });

    totalUniqueIPs = ipCounts.length;
    topVisitor = ipCounts[0] || null;
  } catch (err) {
    console.error('Error querying visitor logs:', err);
    dbError = err.message;
  }

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#090d16',
      color: '#e2e8f0',
      padding: '40px 20px',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{ maxWidth: '1150px', margin: '0 auto' }}>
        
        {/* Top Header Card */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '24px',
          paddingBottom: '20px',
          borderBottom: '1px solid #1e293b'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: '#10b981',
                boxShadow: '0 0 10px #10b981',
                display: 'inline-block'
              }} />
              <h1 style={{ fontSize: '24px', fontWeight: 700, margin: 0, color: '#f8fafc', letterSpacing: '-0.02em' }}>
                Visitor Activity Logs
              </h1>
            </div>
            <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#94a3b8' }}>
              Authorized Access Verified &bull; Client IP:{' '}
              <code style={{
                backgroundColor: '#0f172a',
                color: '#38bdf8',
                padding: '2px 8px',
                borderRadius: '4px',
                border: '1px solid #1e293b',
                fontFamily: 'monospace'
              }}>
                {incomingIp === '127.0.0.1' ? '127.0.0.1 (Localhost)' : incomingIp}
              </code>
            </p>
          </div>

          {/* Stat Badges */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <div style={{
              backgroundColor: '#0f172a',
              border: '1px solid #1e293b',
              padding: '6px 14px',
              borderRadius: '8px',
              fontSize: '13px',
              color: '#cbd5e1'
            }}>
              Total Records: <strong style={{ color: '#38bdf8' }}>{visitors.length}</strong>
            </div>

            <div style={{
              backgroundColor: '#0f172a',
              border: '1px solid #1e293b',
              padding: '6px 14px',
              borderRadius: '8px',
              fontSize: '13px',
              color: '#cbd5e1'
            }}>
              Unique IPs: <strong style={{ color: '#10b981' }}>{totalUniqueIPs}</strong>
            </div>

            {topVisitor && (
              <div style={{
                backgroundColor: '#0f172a',
                border: '1px solid #1e293b',
                padding: '6px 14px',
                borderRadius: '8px',
                fontSize: '13px',
                color: '#cbd5e1'
              }}>
                Top Visitor:{' '}
                <strong style={{ color: '#f59e0b', fontFamily: 'monospace' }}>
                  {topVisitor._id} ({topVisitor.totalVisits}x)
                </strong>
              </div>
            )}
          </div>
        </div>

        {/* Database Error Banner */}
        {dbError && (
          <div style={{
            backgroundColor: 'rgba(239, 68, 68, 0.1)',
            border: '1px solid rgba(239, 68, 68, 0.3)',
            borderRadius: '8px',
            padding: '14px 18px',
            marginBottom: '20px',
            color: '#f87171',
            fontSize: '14px'
          }}>
            <strong>Database Connection Error:</strong> {dbError}
          </div>
        )}

        {/* Table Container */}
        <div style={{
          backgroundColor: '#0f172a',
          border: '1px solid #1e293b',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.5)'
        }}>
          <div style={{ overflowX: 'auto' }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              textAlign: 'left',
              fontSize: '14px'
            }}>
              <thead>
                <tr style={{
                  backgroundColor: '#131c2e',
                  borderBottom: '1px solid #1e293b',
                  color: '#94a3b8',
                  fontSize: '12px',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em'
                }}>
                  <th style={{ padding: '14px 20px', width: '50px' }}>#</th>
                  <th style={{ padding: '14px 20px' }}>IP Address</th>
                  <th style={{ padding: '14px 20px' }}>Total Visits</th>
                  <th style={{ padding: '14px 20px' }}>Page Visited</th>
                  <th style={{ padding: '14px 20px' }}>Date &amp; Time</th>
                </tr>
              </thead>
              <tbody>
                {visitors.length === 0 ? (
                  <tr>
                    <td colSpan={5} style={{ padding: '40px 20px', textAlign: 'center', color: '#64748b' }}>
                      No visitor records recorded yet. Visit any page on the site to trigger the tracker!
                    </td>
                  </tr>
                ) : (
                  visitors.map((visitor, idx) => {
                    const totalVisits = ipCountsMap[visitor.ipAddress] || visitor.visitCount || 1;
                    const isFrequent = totalVisits >= 3;
                    const isSuperFrequent = totalVisits >= 5;

                    return (
                      <tr
                        key={visitor._id ? visitor._id.toString() : idx}
                        style={{
                          borderBottom: '1px solid #1e293b',
                          backgroundColor: idx % 2 === 0 ? '#0f172a' : '#0b1120',
                          transition: 'background-color 0.15s ease',
                        }}
                      >
                        <td style={{ padding: '14px 20px', color: '#64748b', fontSize: '13px' }}>
                          {idx + 1}
                        </td>
                        <td style={{ padding: '14px 20px' }}>
                          <span style={{
                            fontFamily: 'monospace',
                            color: '#34d399',
                            backgroundColor: 'rgba(52, 211, 153, 0.08)',
                            padding: '4px 8px',
                            borderRadius: '4px',
                            border: '1px solid rgba(52, 211, 153, 0.2)',
                            fontSize: '13px'
                          }}>
                            {visitor.ipAddress}
                          </span>
                        </td>
                        <td style={{ padding: '14px 20px' }}>
                          <span style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '5px',
                            padding: '3px 10px',
                            borderRadius: '5px',
                            fontSize: '12px',
                            fontWeight: 600,
                            backgroundColor: isSuperFrequent
                              ? 'rgba(239, 68, 68, 0.12)'
                              : isFrequent
                              ? 'rgba(245, 158, 11, 0.12)'
                              : 'rgba(56, 189, 248, 0.1)',
                            color: isSuperFrequent
                              ? '#f87171'
                              : isFrequent
                              ? '#fbbf24'
                              : '#38bdf8',
                            border: isSuperFrequent
                              ? '1px solid rgba(239, 68, 68, 0.25)'
                              : isFrequent
                              ? '1px solid rgba(245, 158, 11, 0.25)'
                              : '1px solid rgba(56, 189, 248, 0.2)',
                          }}>
                            {isSuperFrequent ? '🔥' : isFrequent ? '⚡' : '👤'}
                            {totalVisits} {totalVisits === 1 ? 'visit' : 'visits'}
                          </span>
                        </td>
                        <td style={{ padding: '14px 20px' }}>
                          <span style={{
                            color: '#818cf8',
                            backgroundColor: 'rgba(99, 102, 241, 0.1)',
                            padding: '4px 8px',
                            borderRadius: '4px',
                            border: '1px solid rgba(99, 102, 241, 0.2)',
                            fontFamily: 'monospace',
                            fontSize: '13px'
                          }}>
                            {visitor.pageVisited || '/'}
                          </span>
                        </td>
                        <td style={{ padding: '14px 20px', color: '#94a3b8', whiteSpace: 'nowrap', fontSize: '13px' }}>
                          {new Date(visitor.timestamp).toLocaleString('en-IN', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                            second: '2-digit',
                            hour12: true,
                          })}
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
