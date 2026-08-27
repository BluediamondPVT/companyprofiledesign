export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      {
        // Explicitly granting full access to major AI Crawlers & LLM Bots
        userAgent: ['GPTBot', 'ChatGPT-User', 'OAI-SearchBot', 'ClaudeBot', 'Claude-Web', 'PerplexityBot', 'Google-Extended'],
        allow: '/',
      },
    ],
    sitemap: 'https://www.companyprofiledesign.in/sitemap.xml',
    host: 'https://www.companyprofiledesign.in',
  };
}
