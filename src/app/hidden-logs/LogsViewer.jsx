'use client';

import { useState, useMemo } from 'react';

export default function LogsViewer({ initialVisitors, incomingIp, totalUniqueAllTime }) {
  const [dateFilter, setDateFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter visitors based on selected date range and search query
  const filteredVisitors = useMemo(() => {
    const now = new Date();

    // Start of today 00:00:00
    const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
    // Start of yesterday 00:00:00
    const startOfYesterday = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1).getTime();
    // End of yesterday is startOfToday
    const endOfYesterday = startOfToday;

    // 7 days ago
    const sevenDaysAgo = now.getTime() - 7 * 24 * 60 * 60 * 1000;
    // 15 days ago
    const fifteenDaysAgo = now.getTime() - 15 * 24 * 60 * 60 * 1000;
    // 1 month ago (30 days)
    const oneMonthAgo = now.getTime() - 30 * 24 * 60 * 60 * 1000;

    return initialVisitors.filter((visitor) => {
      const vTime = new Date(visitor.timestamp).getTime();

      // 1. Date Range Check
      let matchesDate = true;
      if (dateFilter === 'today') {
        matchesDate = vTime >= startOfToday;
      } else if (dateFilter === 'yesterday') {
        matchesDate = vTime >= startOfYesterday && vTime < endOfYesterday;
      } else if (dateFilter === '7days') {
        matchesDate = vTime >= sevenDaysAgo;
      } else if (dateFilter === '15days') {
        matchesDate = vTime >= fifteenDaysAgo;
      } else if (dateFilter === '1month') {
        matchesDate = vTime >= oneMonthAgo;
      }

      if (!matchesDate) return false;

      // 2. Search Query Check
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const ipMatch = visitor.ipAddress.toLowerCase().includes(query);
        const pageMatch = (visitor.pageVisited || '').toLowerCase().includes(query);
        return ipMatch || pageMatch;
      }

      return true;
    });
  }, [initialVisitors, dateFilter, searchQuery]);

  // Calculate unique IPs in current view
  const currentUniqueIPs = useMemo(() => {
    const set = new Set(filteredVisitors.map((v) => v.ipAddress));
    return set.size;
  }, [filteredVisitors]);

  // Find top visitor in current view
  const currentTopVisitor = useMemo(() => {
    if (filteredVisitors.length === 0) return null;
    const countMap = {};
    filteredVisitors.forEach((v) => {
      countMap[v.ipAddress] = (countMap[v.ipAddress] || 0) + 1;
    });
    let maxIp = null;
    let maxCount = 0;
    Object.entries(countMap).forEach(([ip, count]) => {
      if (count > maxCount) {
        maxCount = count;
        maxIp = ip;
      }
    });
    return maxIp ? { ip: maxIp, count: maxCount } : null;
  }, [filteredVisitors]);

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f8fafc',
      color: '#0f172a',
      padding: '40px 20px',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div style={{ maxWidth: '1150px', margin: '0 auto' }}>

        {/* Top Header */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '24px',
          paddingBottom: '20px',
          borderBottom: '1.5px solid #e2e8f0'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: '#10b981',
                boxShadow: '0 0 8px rgba(16, 185, 129, 0.4)',
                display: 'inline-block'
              }} />
              <h1 style={{ fontSize: '24px', fontWeight: 700, margin: 0, color: '#0f172a', letterSpacing: '-0.02em' }}>
                Visitor Activity Logs
              </h1>
            </div>
            <p style={{ margin: '6px 0 0 0', fontSize: '13px', color: '#64748b' }}>
              Authorized Admin View &bull; Client IP:{' '}
              <code style={{
                backgroundColor: '#f1f5f9',
                color: '#0284c7',
                padding: '2px 8px',
                borderRadius: '4px',
                border: '1px solid #cbd5e1',
                fontFamily: 'monospace',
                fontWeight: 600
              }}>
                {incomingIp === '127.0.0.1' ? '127.0.0.1 (Localhost)' : incomingIp}
              </code>
            </p>
          </div>

          {/* Quick Info Badges */}
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <div style={{
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              padding: '6px 14px',
              borderRadius: '8px',
              fontSize: '13px',
              color: '#475569',
              boxShadow: '0 1px 2px rgba(0,0,0,0.04)'
            }}>
              Records in View: <strong style={{ color: '#0284c7' }}>{filteredVisitors.length}</strong>
              {filteredVisitors.length !== initialVisitors.length && (
                <span style={{ color: '#94a3b8', fontSize: '12px' }}> (of {initialVisitors.length})</span>
              )}
            </div>

            <div style={{
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              padding: '6px 14px',
              borderRadius: '8px',
              fontSize: '13px',
              color: '#475569',
              boxShadow: '0 1px 2px rgba(0,0,0,0.04)'
            }}>
              Unique IPs: <strong style={{ color: '#16a34a' }}>{currentUniqueIPs}</strong>
            </div>

            {currentTopVisitor && (
              <div style={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                padding: '6px 14px',
                borderRadius: '8px',
                fontSize: '13px',
                color: '#475569',
                boxShadow: '0 1px 2px rgba(0,0,0,0.04)'
              }}>
                Most Active:{' '}
                <strong style={{ color: '#d97706', fontFamily: 'monospace' }}>
                  {currentTopVisitor.ip} ({currentTopVisitor.count}x)
                </strong>
              </div>
            )}
          </div>
        </div>

        {/* Filter Toolbar Card */}
        <div style={{
          backgroundColor: '#ffffff',
          border: '1px solid #e2e8f0',
          borderRadius: '12px',
          padding: '16px 20px',
          marginBottom: '20px',
          boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px'
        }}>
          {/* Date Filter Dropdown */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
            <label htmlFor="dateFilterSelect" style={{
              fontSize: '13px',
              fontWeight: 600,
              color: '#334155',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}>
              <span>📅</span> Filter by Date:
            </label>
            <select
              id="dateFilterSelect"
              value={dateFilter}
              onChange={(e) => setDateFilter(e.target.value)}
              style={{
                backgroundColor: '#ffffff',
                color: '#0f172a',
                border: '1.5px solid #cbd5e1',
                padding: '8px 14px',
                borderRadius: '8px',
                fontSize: '13px',
                fontWeight: 600,
                outline: 'none',
                cursor: 'pointer',
                boxShadow: '0 1px 2px rgba(0,0,0,0.04)'
              }}
            >
              <option value="all"> All Time</option>
              <option value="today"> Today</option>
              <option value="yesterday"> Yesterday</option>
              <option value="7days"> Last 7 Days</option>
              <option value="15days"> Last 15 Days</option>
              <option value="1month"> Last 1 Month</option>
            </select>
          </div>

          {/* Search by IP or Page */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flex: '1', maxWidth: '340px' }}>
            <input
              type="text"
              placeholder="Search by IP or Page..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: '100%',
                backgroundColor: '#f8fafc',
                color: '#0f172a',
                border: '1.5px solid #cbd5e1',
                padding: '8px 14px',
                borderRadius: '8px',
                fontSize: '13px',
                outline: 'none'
              }}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#64748b',
                  cursor: 'pointer',
                  fontSize: '14px'
                }}
              >
                ✕
              </button>
            )}
          </div>
        </div>

        {/* Table Container in Clean Light Theme */}
        <div style={{
          backgroundColor: '#ffffff',
          border: '1px solid #e2e8f0',
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)'
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
                  backgroundColor: '#f8fafc',
                  borderBottom: '1.5px solid #e2e8f0',
                  color: '#475569',
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
                {filteredVisitors.length === 0 ? (
                  <tr>
                    <td colSpan={5} style={{ padding: '48px 20px', textAlign: 'center', color: '#64748b' }}>
                      <div style={{ fontSize: '28px', marginBottom: '8px' }}>🔍</div>
                      <strong style={{ display: 'block', color: '#334155', marginBottom: '4px' }}>
                        No records match the selected filter
                      </strong>
                      <span style={{ fontSize: '13px' }}>
                        Try changing the date filter or clearing your search term.
                      </span>
                    </td>
                  </tr>
                ) : (
                  filteredVisitors.map((visitor, idx) => {
                    const totalVisits = visitor.visitCount || 1;
                    const isFrequent = totalVisits >= 3;
                    const isSuperFrequent = totalVisits >= 5;

                    return (
                      <tr
                        key={visitor._id || idx}
                        style={{
                          borderBottom: '1px solid #f1f5f9',
                          backgroundColor: idx % 2 === 0 ? '#ffffff' : '#fafbfc',
                          transition: 'background-color 0.15s ease',
                        }}
                      >
                        <td style={{ padding: '14px 20px', color: '#94a3b8', fontSize: '13px', fontWeight: 500 }}>
                          {idx + 1}
                        </td>
                        <td style={{ padding: '14px 20px' }}>
                          <span style={{
                            fontFamily: 'monospace',
                            color: '#065f46',
                            backgroundColor: '#ecfdf5',
                            padding: '4px 9px',
                            borderRadius: '5px',
                            border: '1px solid #a7f3d0',
                            fontSize: '13px',
                            fontWeight: 600
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
                            borderRadius: '20px',
                            fontSize: '12px',
                            fontWeight: 600,
                            backgroundColor: isSuperFrequent
                              ? '#fef2f2'
                              : isFrequent
                                ? '#fffbeb'
                                : '#f0f9ff',
                            color: isSuperFrequent
                              ? '#b91c1c'
                              : isFrequent
                                ? '#b45309'
                                : '#0369a1',
                            border: isSuperFrequent
                              ? '1px solid #fecaca'
                              : isFrequent
                                ? '1px solid #fde68a'
                                : '1px solid #bae6fd',
                          }}>
                            {isSuperFrequent ? '🔥' : isFrequent ? '⚡' : '👤'}
                            {totalVisits} {totalVisits === 1 ? 'visit' : 'visits'}
                          </span>
                        </td>
                        <td style={{ padding: '14px 20px' }}>
                          <span style={{
                            color: '#4338ca',
                            backgroundColor: '#eef2ff',
                            padding: '4px 9px',
                            borderRadius: '5px',
                            border: '1px solid #e0e7ff',
                            fontFamily: 'monospace',
                            fontSize: '13px',
                            fontWeight: 500
                          }}>
                            {visitor.pageVisited || '/'}
                          </span>
                        </td>
                        <td style={{ padding: '14px 20px', color: '#64748b', whiteSpace: 'nowrap', fontSize: '13px' }}>
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
