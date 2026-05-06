/**
 * Centralised blog post data — shared across BlogPage, BlogCategoryPage, and BlogPostPage.
 */

export const slugify = (title) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const body = (intro, sections) => ({
  intro,
  sections,
});

export const blogPosts = [
  {
    id: 1, img: '/images/blog/thumb-seo.png', tags: ['SEO', 'Guides'],
    title: 'The Ultimate Guide to SEO in 2026: What Actually Works Now',
    excerpt: 'Search engines have evolved dramatically. Here\'s a comprehensive breakdown of the strategies that are driving real organic growth this year.',
    date: 'April 27, 2026', author: 'Ankit Vora', readTime: '12 min read',
    body: body(
      'SEO in 2026 looks nothing like it did even two years ago. With AI-generated search results, zero-click queries, and evolving core web vitals, the playbook has been completely rewritten. This guide covers every strategy that\'s actually moving the needle for our clients right now.',
      [
        { heading: 'Why Traditional SEO Is No Longer Enough', content: 'Google\'s Search Generative Experience (SGE) has fundamentally changed how users interact with search results. Over 40% of queries now receive AI-generated answers directly in the SERP, meaning fewer clicks to websites. To combat this, you need to focus on creating content that AI models want to cite — authoritative, data-rich, and uniquely insightful content that can\'t be easily synthesised from existing sources.\n\nThis means going beyond keyword targeting. Your content strategy should prioritise original research, expert interviews, proprietary data, and unique perspectives that establish your brand as a primary source rather than a content aggregator.' },
        { heading: 'Technical SEO Foundations That Still Matter', content: 'Core Web Vitals remain a ranking signal, but the thresholds have tightened. Google now expects sub-1.5 second Largest Contentful Paint (LCP), under 100ms Interaction to Next Paint (INP), and zero Cumulative Layout Shift (CLS). Mobile-first indexing is the default, and sites that don\'t pass mobile usability tests are seeing ranking drops of 15-30%.\n\nStructured data implementation has also become more critical. Schema markup helps search engines understand your content context, and pages with proper schema see 20-30% higher click-through rates on average.' },
        { heading: 'Content Strategy for the AI Era', content: 'The most effective content strategy in 2026 combines topical authority with entity-based SEO. Rather than targeting individual keywords, build comprehensive topic clusters that demonstrate deep expertise in your niche. Use semantic analysis tools to identify entity relationships and ensure your content covers topics holistically.\n\nLong-form content still performs well, but only when every section adds genuine value. AI can detect filler content, and search engines are increasingly rewarding conciseness and information density over word count.' },
        { heading: 'Link Building in 2026', content: 'Quality over quantity has never been more important. A single link from a highly relevant, authoritative source is worth more than 100 links from generic directories. Focus on digital PR, original research that naturally attracts citations, and strategic partnerships with complementary brands.\n\nGuest posting still works when done authentically — contributing genuine expertise to relevant publications rather than churning out generic articles for link placement.' },
        { heading: 'Key Takeaways', content: '1. Optimise for AI citation, not just traditional rankings\n2. Nail Core Web Vitals — the thresholds are tighter than ever\n3. Build topical authority through comprehensive content clusters\n4. Prioritise original research and unique data\n5. Focus link building on relevance and authority, not volume' },
      ]
    ),
  },
  {
    id: 2, img: '/images/blog/thumb-social.png', tags: ['Social Media', 'Strategies'],
    title: 'How to Build a Social Media Strategy That Converts in 2026',
    excerpt: 'Likes don\'t pay the bills. Learn how to craft a social media strategy focused on real business outcomes and measurable ROI.',
    date: 'April 24, 2026', author: 'Sophia Lanier', readTime: '9 min read',
    body: body(
      'Most brands are still measuring social media success by vanity metrics — likes, followers, impressions. But in 2026, the brands winning on social are the ones who\'ve shifted their entire strategy toward conversion-focused content. Here\'s exactly how to build a social strategy that drives revenue.',
      [
        { heading: 'The Conversion-First Framework', content: 'Every piece of content should map to a stage in your marketing funnel. Awareness content builds reach, consideration content builds trust, and conversion content drives action. The mistake most brands make is posting 90% awareness content and wondering why social doesn\'t generate leads.\n\nAim for a 40/40/20 split: 40% value-driven educational content, 40% social proof and trust-building content, and 20% direct conversion content with clear CTAs.' },
        { heading: 'Platform-Specific Strategies', content: 'Each platform requires a distinct approach. Instagram Reels and TikTok favour raw, authentic short-form video. LinkedIn rewards thought leadership and industry insights. X (Twitter) excels at real-time commentary and thread-based storytelling.\n\nDon\'t try to be everywhere. Pick 2-3 platforms where your audience is most active and go deep rather than spreading thin across every channel.' },
        { heading: 'Measuring What Matters', content: 'Track these metrics that actually correlate with business outcomes: click-through rate to website, lead form completions from social traffic, direct message inquiries, and attributed revenue from social campaigns. Set up proper UTM tracking and use platform-specific conversion APIs for accurate measurement.' },
      ]
    ),
  },
  {
    id: 3, img: '/images/blog/thumb-ai.png', tags: ['AI', 'Digital Marketing'],
    title: 'AI-Powered Marketing: 10 Tools Reshaping the Industry Right Now',
    excerpt: 'From predictive analytics to generative content, these AI tools are giving marketers an unprecedented edge over the competition.',
    date: 'April 22, 2026', author: 'Jelena Relic', readTime: '11 min read',
    body: body(
      'Artificial intelligence isn\'t the future of marketing — it\'s the present. The brands leveraging AI effectively are seeing 30-50% improvements in campaign performance, content production speed, and customer personalisation. Here are the 10 tools making the biggest impact.',
      [
        { heading: '1. Predictive Analytics Platforms', content: 'Tools like Pecan AI and Obviously AI are making predictive analytics accessible to marketing teams without data science backgrounds. These platforms analyse historical campaign data to predict which audiences, creatives, and channels will perform best — before you spend a single dollar.\n\nOur clients using predictive analytics have seen a 35% reduction in customer acquisition costs on average.' },
        { heading: '2-5. Content Creation & Optimisation', content: 'The content AI landscape has matured significantly. Tools like Jasper, Writer, and Copy.ai now produce genuinely useful first drafts that require minimal editing. Surfer SEO and Clearscope use AI to optimise content for search engines in real-time.\n\nThe key is using these tools as accelerators, not replacements. AI-generated content still needs human expertise, brand voice, and original insights to stand out.' },
        { heading: '6-10. Personalisation & Automation', content: 'Dynamic Yield and Optimizely are leading the charge in AI-powered personalisation, creating unique website experiences for each visitor. Klaviyo\'s AI features can predict customer lifetime value and optimal send times for email campaigns.\n\nMarketing automation platforms like HubSpot and ActiveCampaign now use AI to score leads, predict churn, and recommend next-best actions for sales teams.' },
      ]
    ),
  },
  {
    id: 4, img: '/images/blog/thumb-ppc.png', tags: ['PPC', 'Strategies'],
    title: 'Google Ads Mastery: Advanced Bidding Strategies for Maximum ROI',
    excerpt: 'Stop wasting ad spend. These advanced bidding techniques and campaign structures will transform your PPC performance.',
    date: 'April 19, 2026', author: 'Rebeka Meszaros', readTime: '14 min read',
    body: body(
      'After managing over $50M in Google Ads spend across hundreds of accounts, we\'ve identified the bidding strategies and campaign structures that consistently outperform. This guide covers the advanced techniques that separate amateur campaigns from expert-level performance.',
      [
        { heading: 'Smart Bidding: Beyond the Basics', content: 'Target ROAS and Target CPA are powerful, but they require proper setup. Feed Google at least 30 conversions per month per campaign for the algorithm to optimise effectively. Use portfolio bid strategies to share conversion data across campaigns with limited individual volume.\n\nThe biggest mistake we see is setting targets too aggressively from the start. Begin 20% above your actual target, let the algorithm learn for 2-3 weeks, then gradually tighten.' },
        { heading: 'Campaign Structure for Scale', content: 'The modern Google Ads account structure prioritises simplicity. Consolidate campaigns to maximise data density per campaign. Use broad match keywords with smart bidding — Google\'s AI needs room to find converting queries you haven\'t thought of.\n\nPerformance Max campaigns work exceptionally well for ecommerce when paired with a clean product feed and strong creative assets across all formats.' },
        { heading: 'Creative Testing Framework', content: 'Responsive Search Ads give Google flexibility, but you still need to test systematically. Pin your best-performing headlines to position 1 and test variations in positions 2-3. Refresh ad copy every 4-6 weeks to combat creative fatigue.\n\nFor display and video campaigns, test 5-10 creative variations simultaneously and let the algorithm identify winners. Cut underperformers weekly and replace with new tests.' },
      ]
    ),
  },
  {
    id: 5, img: '/images/blog/thumb-email.png', tags: ['Email', 'Guides'],
    title: 'Email Marketing Automation: Complete Playbook for 2026',
    excerpt: 'Automate your email workflows without losing the personal touch. A step-by-step guide to building sequences that nurture and convert.',
    date: 'April 16, 2026', author: 'Sophia Lanier', readTime: '10 min read',
    body: body(
      'Email remains the highest-ROI marketing channel, returning $42 for every $1 spent. But most businesses are barely scratching the surface of what\'s possible with modern automation. This playbook covers the essential sequences every business should have running.',
      [
        { heading: 'The 5 Essential Automated Sequences', content: '1. **Welcome Series** (3-5 emails): Introduce your brand, deliver a lead magnet, and present your core offer.\n2. **Abandoned Cart** (3 emails): Recover 15-25% of lost sales with timely reminders and incentives.\n3. **Post-Purchase** (4-6 emails): Onboard new customers, request reviews, and cross-sell related products.\n4. **Re-engagement** (3 emails): Win back inactive subscribers with exclusive offers before removing them.\n5. **Browse Abandonment** (2 emails): Follow up when visitors view products without adding to cart.' },
        { heading: 'Personalisation at Scale', content: 'Use dynamic content blocks to personalise emails based on purchase history, browsing behavior, and demographic data. Segment your list by engagement level and adjust send frequency accordingly — your most engaged subscribers can handle daily emails, while less engaged contacts should hear from you weekly at most.' },
        { heading: 'Deliverability Best Practices', content: 'None of your automation matters if emails land in spam. Maintain a clean list by removing hard bounces immediately and soft bounces after 3 attempts. Authenticate your domain with SPF, DKIM, and DMARC. Keep your spam complaint rate below 0.1% and your unsubscribe rate below 0.5%.' },
      ]
    ),
  },
  {
    id: 6, img: '/images/blog/thumb-design.png', tags: ['Design', 'Guides'],
    title: 'Web Design Trends 2026: The Aesthetics That Drive Conversions',
    excerpt: 'Beautiful design meets business results. Discover the visual trends that are proven to increase engagement and conversion rates.',
    date: 'April 14, 2026', author: 'Margarita Loktionova', readTime: '8 min read',
    body: body(
      'Design trends come and go, but conversion-focused design principles are timeless. Here\'s what\'s working in 2026 — and why these trends are backed by real performance data, not just aesthetics.',
      [
        { heading: 'Dark Mode as Default', content: 'Over 80% of users prefer dark mode interfaces, and sites offering dark mode see 15-20% longer session durations. The key is designing dark-first rather than treating it as an afterthought. Use deep, rich backgrounds (#0a0a0f to #12121a range) with carefully controlled contrast ratios for text readability.' },
        { heading: 'Micro-Animations & Motion Design', content: 'Subtle animations guide user attention, provide feedback, and create a sense of sophistication. Scroll-triggered animations, hover state transitions, and loading state animations all contribute to a premium feel. Keep animations under 300ms for UI elements and under 600ms for content reveals.' },
        { heading: 'Glassmorphism & Depth', content: 'Frosted glass effects with backdrop blur create visual hierarchy and depth. Use semi-transparent backgrounds with blur(20px) for cards and modals. Combine with subtle borders (1px solid rgba(255,255,255,0.08)) and box shadows for a layered, three-dimensional effect.' },
      ]
    ),
  },
  {
    id: 7, img: '/images/blog/thumb-ecommerce.png', tags: ['Ecommerce', 'Strategies'],
    title: 'Scaling Your Ecommerce Store: From $10K to $1M Monthly Revenue',
    excerpt: 'A data-driven roadmap for scaling your online store, covering paid ads, CRO, retention, and the operational systems you need.',
    date: 'April 11, 2026', author: 'Ankit Vora', readTime: '16 min read',
    body: body(
      'Scaling an ecommerce store from $10K to $1M in monthly revenue requires more than just increasing ad spend. It demands a systematic approach to acquisition, conversion, retention, and operations. Here\'s the roadmap we\'ve used to scale dozens of DTC brands.',
      [
        { heading: 'Phase 1: $10K-$50K/month', content: 'Focus on product-market fit and unit economics. Your Customer Acquisition Cost (CAC) must be below 30% of your Average Order Value (AOV). Nail your core offer, build a high-converting product page, and master one acquisition channel before diversifying.' },
        { heading: 'Phase 2: $50K-$250K/month', content: 'Introduce a second acquisition channel and build your email marketing engine. At this stage, email should drive 25-35% of revenue. Implement abandoned cart recovery, post-purchase sequences, and a VIP loyalty program.' },
        { heading: 'Phase 3: $250K-$1M/month', content: 'Scale requires operational excellence. Invest in inventory management, fulfilment optimisation, and customer service infrastructure. Expand to 3-4 acquisition channels, launch a recurring revenue or replenishment model, and build a community around your brand.' },
      ]
    ),
  },
  {
    id: 8, img: '/images/blog/thumb-content.png', tags: ['Content', 'Digital Marketing'],
    title: 'Content Marketing ROI: How to Measure What Actually Matters',
    excerpt: 'Most content metrics are vanity metrics. Learn the frameworks top marketers use to prove content\'s impact on revenue.',
    date: 'April 8, 2026', author: 'Jelena Relic', readTime: '7 min read',
    body: body(
      'Content marketing remains one of the most effective channels for long-term growth, but proving ROI has always been its Achilles heel. Here\'s how to build a measurement framework that connects content performance to business outcomes.',
      [
        { heading: 'The Content ROI Framework', content: 'Map every piece of content to a funnel stage and assign relevant KPIs. Top-of-funnel content should be measured by organic traffic growth and brand search volume. Mid-funnel content by email signups and content downloads. Bottom-funnel content by demo requests and sales-qualified leads.' },
        { heading: 'Attribution Models That Work', content: 'Multi-touch attribution gives credit to content touchpoints throughout the buyer journey. First-touch attribution helps you understand which content attracts new audiences, while last-touch shows what drives final conversions. Use both models together for a complete picture.' },
        { heading: 'Calculating True Content ROI', content: 'Content ROI = (Revenue attributed to content - Content production costs) / Content production costs × 100. Include all costs: writer fees, design, distribution, tools, and team time. Track revenue attribution over 6-12 months, as content compounds in value over time.' },
      ]
    ),
  },
  {
    id: 9, img: '/images/blog/thumb-1.png', tags: ['B2B', 'Strategies'],
    title: 'B2B Lead Generation: 15 Tactics That Outperform Cold Outreach',
    excerpt: 'Cold emails are dying. These modern B2B lead gen strategies are delivering 3-5x better conversion rates for SaaS and service businesses.',
    date: 'April 5, 2026', author: 'Rebeka Meszaros', readTime: '13 min read',
    body: body(
      'The average cold email response rate has dropped to 1.7% in 2026. Meanwhile, inbound and community-led strategies are generating leads at a fraction of the cost with much higher conversion rates. Here are 15 tactics that are actually working.',
      [
        { heading: 'Content-Led Lead Generation', content: '1. **Original Research Reports** — Publish annual industry reports with proprietary data. These generate backlinks, press coverage, and high-intent leads who download gated versions.\n2. **Interactive Tools** — Build free calculators, assessment tools, or benchmarking surveys relevant to your ICP.\n3. **Expert Webinars** — Partner with industry leaders for educational webinars that attract qualified audiences.' },
        { heading: 'Community & Partnership Strategies', content: '4. **Community Building** — Create a Slack or Discord community around your niche. Members become natural advocates and leads.\n5. **Co-Marketing** — Partner with complementary (non-competing) companies for joint content, events, and list sharing.\n6. **Influencer Partnerships** — Work with B2B micro-influencers who have engaged audiences in your target market.' },
        { heading: 'Intent-Based Strategies', content: '7. **Intent Data Platforms** — Use tools like Bombora or 6sense to identify companies actively researching solutions in your category.\n8. **LinkedIn Thought Leadership** — Consistent posting by founders and executives generates inbound inquiries.\n9. **SEO for Commercial Intent** — Target comparison, pricing, and "best X for Y" keywords that signal buying intent.' },
      ]
    ),
  },
  {
    id: 10, img: '/images/blog/thumb-2.png', tags: ['SEO', 'AI'],
    title: 'GEO vs SEO: How Generative Engine Optimization Changes Everything',
    excerpt: 'With AI search on the rise, traditional SEO isn\'t enough. Here\'s how to optimise for both Google and AI-powered search engines.',
    date: 'April 2, 2026', author: 'Ankit Vora', readTime: '10 min read',
    body: body(
      'Generative Engine Optimization (GEO) is the newest discipline in digital marketing. As AI-powered search engines like Google SGE, Perplexity, and ChatGPT Search gain market share, optimising for these platforms is becoming essential.',
      [
        { heading: 'What Is GEO?', content: 'GEO is the practice of optimising your content to be cited by AI-powered search engines in their generated responses. Unlike traditional SEO where you compete for 10 blue links, GEO is about becoming a trusted source that AI models reference when answering user queries.' },
        { heading: 'GEO vs Traditional SEO', content: 'Traditional SEO focuses on keywords, backlinks, and technical factors. GEO focuses on authority signals, content structure, factual accuracy, and citation-worthiness. The good news is that many GEO best practices overlap with good SEO — but GEO adds additional requirements around data formatting, source transparency, and expertise signals.' },
        { heading: 'How to Optimise for Both', content: 'Include clear statistics and data points that AI can extract. Use structured formats like numbered lists, tables, and clear headings. Cite your sources and demonstrate expertise through author bios and credentials. Update content regularly to maintain freshness signals.' },
      ]
    ),
  },
  {
    id: 11, img: '/images/blog/thumb-3.png', tags: ['PPC', 'Ecommerce'],
    title: 'Facebook Ads for Ecommerce: The 2026 Playbook',
    excerpt: 'Meta\'s advertising platform keeps evolving. Master the latest campaign structures, creative strategies, and audience targeting.',
    date: 'March 30, 2026', author: 'Rebeka Meszaros', readTime: '11 min read',
    body: body(
      'Meta Ads remain one of the most powerful channels for ecommerce brands, but the platform has changed dramatically. Here\'s the 2026 playbook for profitable Facebook and Instagram advertising.',
      [
        { heading: 'The Simplified Campaign Structure', content: 'Advantage+ Shopping Campaigns (ASC) are now the default for most ecommerce advertisers. These AI-driven campaigns handle audience targeting, placement, and budget allocation automatically. Feed them diverse creative assets and let the algorithm optimise.\n\nFor brands spending over $50K/month, supplement ASC with manual campaigns targeting specific audiences for new product launches or seasonal promotions.' },
        { heading: 'Creative Strategy', content: 'Creative is now the #1 lever for performance on Meta. Test UGC-style content, product demos, founder stories, and before/after content. Video ads under 15 seconds consistently outperform longer formats. Refresh creative every 2-3 weeks to combat fatigue.' },
      ]
    ),
  },
  {
    id: 12, img: '/images/blog/thumb-4.png', tags: ['Social Media', 'Content'],
    title: 'Short-Form Video Marketing: TikTok, Reels & Shorts Strategy Guide',
    excerpt: 'Short-form video dominates attention. Learn how to create scroll-stopping content that builds brand awareness and drives action.',
    date: 'March 27, 2026', author: 'Sophia Lanier', readTime: '9 min read',
    body: body(
      'Short-form video now accounts for over 60% of time spent on social media. If your brand isn\'t creating short-form content, you\'re missing the biggest organic reach opportunity available. Here\'s how to do it right.',
      [
        { heading: 'The Hook Framework', content: 'You have 1.5 seconds to capture attention. Use pattern interrupts: unexpected visuals, bold text overlays, provocative questions, or surprising statements. The best hooks create a knowledge gap that viewers feel compelled to close by watching the full video.' },
        { heading: 'Content Pillars for Brands', content: 'Build your content strategy around 4-5 repeatable formats: educational tips, behind-the-scenes, customer stories, product showcases, and trending audio content. Consistency in format helps the algorithm understand your content and match it with the right audience.' },
      ]
    ),
  },
  {
    id: 13, img: '/images/blog/thumb-5.png', tags: ['Digital Marketing', 'Guides'],
    title: 'Marketing Budget Planning: A Strategic Framework for 2026',
    excerpt: 'How much should you spend on marketing? Discover data-backed allocation frameworks used by high-growth companies.',
    date: 'March 24, 2026', author: 'Margarita Loktionova', readTime: '8 min read',
    body: body(
      'One of the most common questions we get from clients is "how much should we spend on marketing?" The answer depends on your industry, growth stage, and objectives. Here\'s a data-backed framework.',
      [
        { heading: 'Budget Benchmarks by Industry', content: 'B2B companies typically spend 2-5% of revenue on marketing. B2C companies spend 5-10%. High-growth SaaS companies often invest 20-40% of revenue in marketing to capture market share. Ecommerce brands typically allocate 10-15% with a heavy emphasis on paid acquisition.' },
        { heading: 'Channel Allocation Framework', content: 'Split your budget using the 70/20/10 rule: 70% on proven channels with predictable ROI, 20% on scaling emerging channels, and 10% on experimental tactics. Review allocation quarterly and shift budget toward what\'s working.' },
      ]
    ),
  },
  {
    id: 14, img: '/images/blog/thumb-6.png', tags: ['SEO', 'Strategies'],
    title: "Local SEO Domination: How to Own Your City's Search Results",
    excerpt: "For local businesses, ranking in the map pack is everything. Here's a proven system for dominating local search in your area.",
    date: 'March 21, 2026', author: 'Ankit Vora', readTime: '12 min read',
    body: body(
      'For local businesses, the Google Map Pack drives more phone calls and walk-ins than any other marketing channel. Here\'s the exact system we use to help local businesses dominate their city\'s search results.',
      [
        { heading: 'Google Business Profile Optimisation', content: 'Your GBP is the foundation of local SEO. Complete every field, add photos weekly, respond to every review within 24 hours, and post Google Business updates at least twice per week. Businesses with complete profiles are 70% more likely to attract visits.' },
        { heading: 'Local Citation Building', content: 'Ensure your NAP (Name, Address, Phone) is consistent across all online directories. Start with the major platforms: Yelp, Yellow Pages, Facebook, Apple Maps, and Bing Places. Then build citations on industry-specific directories relevant to your niche.' },
      ]
    ),
  },
  {
    id: 15, img: '/images/blog/thumb-seo.png', tags: ['AI', 'Strategies'],
    title: 'Prompt Engineering for Marketers: Get Better AI Outputs Every Time',
    excerpt: 'The quality of your AI output depends on your input. Master the art of prompt engineering to 10x your marketing productivity.',
    date: 'March 18, 2026', author: 'Jelena Relic', readTime: '6 min read',
    body: body(
      'The difference between mediocre and exceptional AI outputs isn\'t the model — it\'s the prompt. Marketers who master prompt engineering are producing higher-quality content in a fraction of the time.',
      [
        { heading: 'The CRAFT Framework', content: 'Use the CRAFT framework for every prompt: Context (background information), Role (who the AI should act as), Action (what you want it to do), Format (how the output should be structured), and Tone (the voice and style to use). This simple framework dramatically improves output quality.' },
        { heading: 'Advanced Techniques', content: 'Chain-of-thought prompting asks the AI to reason step-by-step before answering. Few-shot prompting provides examples of desired outputs. Role-playing prompts ask the AI to adopt a specific expert persona. Combine these techniques for complex marketing tasks like competitive analysis or campaign strategy development.' },
      ]
    ),
  },
  {
    id: 16, img: '/images/blog/thumb-content.png', tags: ['B2B', 'Email'],
    title: 'Cold Email That Actually Works: Templates & Frameworks for 2026',
    excerpt: 'Most cold emails get ignored. These battle-tested templates and personalisation techniques are getting 30%+ reply rates.',
    date: 'March 15, 2026', author: 'Sophia Lanier', readTime: '10 min read',
    body: body(
      'Despite declining response rates, cold email can still work — if you do it differently than everyone else. The key is radical personalisation, genuine value delivery, and follow-up discipline.',
      [
        { heading: 'The 3-Line Email Template', content: 'The highest-performing cold emails are shockingly short. Line 1: A personalised observation about the prospect\'s business. Line 2: A specific, relevant value proposition. Line 3: A low-friction CTA (not "book a demo" but "worth exploring?"). This format consistently delivers 25-35% reply rates when personalisation is genuine.' },
        { heading: 'Follow-Up Cadence', content: 'Send 4-5 follow-ups spaced 3-4 days apart. Each follow-up should add new value — a relevant case study, a useful resource, or a new angle on your initial message. 60% of positive replies come from follow-ups, not initial emails.' },
      ]
    ),
  },
];

export const getPostBySlug = (slug) =>
  blogPosts.find(p => slugify(p.title) === slug);

export const getRelatedPosts = (post, count = 3) =>
  blogPosts
    .filter(p => p.id !== post.id && p.tags.some(t => post.tags.includes(t)))
    .slice(0, count);

export const tagColors = {
  SEO: '#a500fd', PPC: '#f59e0b', 'Social Media': '#ec4899', AI: '#a500fd',
  Email: '#14b8a6', Design: '#f472b6', Ecommerce: '#22c55e', B2B: '#3b82f6',
  Content: '#a500fd', 'Digital Marketing': '#a500fd', Guides: '#a500fd', Strategies: '#f59e0b',
};
