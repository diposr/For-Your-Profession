/**
 * Content data for FYP — realistic, hand-crafted content per career track.
 * Feeds contain a mix of short-form videos (real YouTube IDs), articles, and skill cards.
 * Quests are structured as a 7-day learning streak with 3-4 daily tasks.
 * Badges reflect skills earned from completed quests.
 */

export type ContentType = "video" | "article" | "skill"

export interface FeedItem {
  id: string
  type: ContentType
  title: string
  creator: string
  description: string
  duration: string
  skillTag: string
  youtubeId?: string
  articleUrl?: string
  isVerified?: boolean
  isSponsored?: boolean
  xpReward: number
}

export interface QuestTask {
  id: string
  title: string
  description: string
  xpReward: number
  type: "watch" | "read" | "quiz" | "build" | "share"
}

export interface DayQuest {
  day: number
  dayLabel: string
  title: string
  tasks: QuestTask[]
}

export interface SkillBadge {
  id: string
  name: string
  icon: string
  earned: boolean
  date?: string
}

export interface CareerContent {
  feed: FeedItem[]
  weeklyQuest: {
    title: string
    description: string
    days: DayQuest[]
  }
  badges: SkillBadge[]
  topSkills: string[]
  levelTitle: string
}

// ============================================================
// DATA ANALYST
// ============================================================
const dataAnalystContent: CareerContent = {
  levelTitle: "Data Analyst",
  topSkills: ["SQL", "Python", "Tableau", "Statistics", "Excel"],
  feed: [
    {
      id: "da-1",
      type: "video",
      title: "SQL JOIN Explained in 60 Seconds",
      creator: "Tokopedia Data Team",
      description: "Master INNER, LEFT, RIGHT, and FULL OUTER joins with real e-commerce examples",
      duration: "1:23",
      skillTag: "SQL",
      youtubeId: "9yeOJ0wuQQQ",
      isVerified: true,
      xpReward: 30,
    },
    {
      id: "da-2",
      type: "skill",
      title: "Skill of the Day: Data Visualization",
      creator: "FYP Learning",
      description: "Learn the 5 principles of effective charts: choose the right chart type, remove chartjunk, use color purposefully, label clearly, and tell a story",
      duration: "5 min",
      skillTag: "Visualization",
      xpReward: 50,
    },
    {
      id: "da-3",
      type: "video",
      title: "How Gojek Analyzes 10M+ Rides/Day",
      creator: "Gojek Engineering",
      description: "Behind the scenes of real-time data pipelines and dashboards",
      duration: "8:42",
      skillTag: "Big Data",
      youtubeId: "kUMe2jT0Uos",
      isVerified: true,
      isSponsored: true,
      xpReward: 75,
    },
    {
      id: "da-4",
      type: "article",
      title: "A/B Testing 101: From Hypothesis to Decision",
      creator: "Bukalapak Analytics",
      description: "Statistical significance, p-values, and how to avoid common pitfalls in product experiments",
      duration: "6 min read",
      skillTag: "Statistics",
      articleUrl: "https://medium.com/bukalapak-data",
      isVerified: true,
      xpReward: 60,
    },
    {
      id: "da-5",
      type: "video",
      title: "Python Pandas Tutorial for Beginners",
      creator: "Shopee Data Science",
      description: "DataFrames, groupby, and merge operations explained with real marketplace data",
      duration: "12:18",
      skillTag: "Python",
      youtubeId: "vmEHCJofslg",
      isVerified: true,
      xpReward: 100,
    },
    {
      id: "da-6",
      type: "article",
      title: "The Art of the Data Storytelling",
      creator: "Blibli Insights",
      description: "How to turn a 50-slide dashboard into a 3-slide executive narrative that drives action",
      duration: "8 min read",
      skillTag: "Communication",
      articleUrl: "https://medium.com/blibli-engineering",
      isVerified: true,
      xpReward: 70,
    },
    {
      id: "da-7",
      type: "video",
      title: "Build Your First Tableau Dashboard",
      creator: "Traveloka BI Team",
      description: "From raw CSV to interactive dashboard in 15 minutes. No prior experience needed",
      duration: "15:30",
      skillTag: "Tableau",
      youtubeId: "T3T1eBNqTQo",
      isVerified: true,
      xpReward: 90,
    },
  ],
  weeklyQuest: {
    title: "Master SQL Fundamentals in 7 Days",
    description: "Build a strong SQL foundation through daily hands-on practice",
    days: [
      {
        day: 1,
        dayLabel: "Day 1",
        title: "SELECT & WHERE",
        tasks: [
          { id: "da-d1-t1", title: "Watch 5-min SQL basics tutorial", description: "Learn SELECT, FROM, and WHERE clauses", xpReward: 50, type: "watch" },
          { id: "da-d1-t2", title: "Read article on data types", description: "Understand strings, numbers, and dates in SQL", xpReward: 40, type: "read" },
          { id: "da-d1-t3", title: "Complete basic SELECT quiz", description: "5 questions on filtering and sorting", xpReward: 60, type: "quiz" },
        ],
      },
      {
        day: 2,
        dayLabel: "Day 2",
        title: "JOINs & Relationships",
        tasks: [
          { id: "da-d2-t1", title: "Watch JOINs in 60 seconds", description: "Master INNER, LEFT, RIGHT joins", xpReward: 50, type: "watch" },
          { id: "da-d2-t2", title: "Read article on data modeling", description: "Star schema vs snowflake schema", xpReward: 50, type: "read" },
          { id: "da-d2-t3", title: "Solve 3 JOIN challenges", description: "Hands-on practice with real e-commerce data", xpReward: 80, type: "build" },
        ],
      },
      {
        day: 3,
        dayLabel: "Day 3",
        title: "GROUP BY & Aggregates",
        tasks: [
          { id: "da-d3-t1", title: "Watch aggregation tutorial", description: "COUNT, SUM, AVG, MIN, MAX", xpReward: 50, type: "watch" },
          { id: "da-d3-t2", title: "Complete GROUP BY quiz", description: "Test your understanding of HAVING vs WHERE", xpReward: 60, type: "quiz" },
        ],
      },
      {
        day: 4,
        dayLabel: "Day 4",
        title: "Subqueries & CTEs",
        tasks: [
          { id: "da-d4-t1", title: "Read article on CTEs", description: "Common Table Expressions explained", xpReward: 60, type: "read" },
          { id: "da-d4-t2", title: "Refactor 3 queries with CTEs", description: "Make your SQL more readable", xpReward: 100, type: "build" },
        ],
      },
      {
        day: 5,
        dayLabel: "Day 5",
        title: "Window Functions",
        tasks: [
          { id: "da-d5-t1", title: "Watch window functions tutorial", description: "ROW_NUMBER, RANK, LAG, LEAD", xpReward: 70, type: "watch" },
          { id: "da-d5-t2", title: "Solve ranking challenge", description: "Find top 3 products per category", xpReward: 90, type: "build" },
        ],
      },
      {
        day: 6,
        dayLabel: "Day 6",
        title: "Data Visualization",
        tasks: [
          { id: "da-d6-t1", title: "Read visualization best practices", description: "The 5 principles of effective charts", xpReward: 50, type: "read" },
          { id: "da-d6-t2", title: "Build a Tableau dashboard", description: "From raw data to interactive viz", xpReward: 120, type: "build" },
        ],
      },
      {
        day: 7,
        dayLabel: "Day 7",
        title: "Capstone Project",
        tasks: [
          { id: "da-d7-t1", title: "Analyze e-commerce dataset", description: "Write 5 SQL queries to answer business questions", xpReward: 150, type: "build" },
          { id: "da-d7-t2", title: "Share insights on LinkedIn", description: "Post your findings with #FYPChallenge", xpReward: 100, type: "share" },
        ],
      },
    ],
  },
  badges: [
    { id: "da-b1", name: "SQL Novice", icon: "🎯", earned: true, date: "2026-05-28" },
    { id: "da-b2", name: "Data Storyteller", icon: "📊", earned: true, date: "2026-05-30" },
    { id: "da-b3", name: "Query Master", icon: "⚡", earned: true, date: "2026-06-01" },
    { id: "da-b4", name: "Insight Hunter", icon: "🔍", earned: false },
    { id: "da-b5", name: "Pipeline Builder", icon: "🏗️", earned: false },
  ],
}

// ============================================================
// UI/UX DESIGNER
// ============================================================
const uiUxDesignerContent: CareerContent = {
  levelTitle: "UI/UX Designer",
  topSkills: ["Figma", "User Research", "Prototyping", "Design Systems", "Accessibility"],
  feed: [
    {
      id: "ux-1",
      type: "video",
      title: "Figma Auto Layout Masterclass",
      creator: "Bukalapak Design",
      description: "Build responsive components in half the time with auto layout",
      duration: "9:15",
      skillTag: "Figma",
      youtubeId: "TyaVTosNHqo",
      isVerified: true,
      xpReward: 80,
    },
    {
      id: "ux-2",
      type: "skill",
      title: "Skill of the Day: Color Theory",
      creator: "FYP Learning",
      description: "Master the 60-30-10 rule, understand complementary vs analogous palettes, and learn when to use warm vs cool colors",
      duration: "5 min",
      skillTag: "Color Theory",
      xpReward: 50,
    },
    {
      id: "ux-3",
      type: "video",
      title: "How Tokopedia Redesigned Their Checkout",
      creator: "Tokopedia Design",
      description: "User research, wireframes, prototypes, and the 23% conversion lift that followed",
      duration: "14:22",
      skillTag: "Case Study",
      youtubeId: "kUMe2jT0Uos",
      isVerified: true,
      isSponsored: true,
      xpReward: 100,
    },
    {
      id: "ux-4",
      type: "article",
      title: "The 10 Usability Heuristics You Must Know",
      creator: "Gojek Design",
      description: "Nielsen's heuristics applied to mobile-first design in Southeast Asia",
      duration: "7 min read",
      skillTag: "UX Principles",
      articleUrl: "https://medium.com/gojek-design",
      isVerified: true,
      xpReward: 60,
    },
    {
      id: "ux-5",
      type: "video",
      title: "Build a Design System from Scratch",
      creator: "Shopee Design",
      description: "Tokens, components, documentation — the full workflow in 20 minutes",
      duration: "20:05",
      skillTag: "Design Systems",
      youtubeId: "kUMe2jT0Uos",
      isVerified: true,
      xpReward: 120,
    },
    {
      id: "ux-6",
      type: "article",
      title: "Accessibility is Not a Checklist",
      creator: "Traveloka Design",
      description: "Designing for screen readers, color blindness, and motor impairments from day one",
      duration: "9 min read",
      skillTag: "Accessibility",
      articleUrl: "https://medium.com/traveloka-engineering",
      isVerified: true,
      xpReward: 70,
    },
    {
      id: "ux-7",
      type: "video",
      title: "Micro-interactions That Delight Users",
      creator: "Blibli Design",
      description: "Animation principles, timing curves, and when less is more",
      duration: "11:48",
      skillTag: "Animation",
      youtubeId: "kUMe2jT0Uos",
      isVerified: true,
      xpReward: 90,
    },
  ],
  weeklyQuest: {
    title: "Design Your First Mobile App in 7 Days",
    description: "From research to high-fidelity prototype in one week",
    days: [
      {
        day: 1,
        dayLabel: "Day 1",
        title: "User Research",
        tasks: [
          { id: "ux-d1-t1", title: "Watch research methods overview", description: "Interviews, surveys, and usability tests", xpReward: 50, type: "watch" },
          { id: "ux-d1-t2", title: "Read article on user personas", description: "How to create personas that actually help", xpReward: 40, type: "read" },
          { id: "ux-d1-t3", title: "Conduct 1 user interview", description: "Find someone in your target market and ask 5 questions", xpReward: 100, type: "build" },
        ],
      },
      {
        day: 2,
        dayLabel: "Day 2",
        title: "Information Architecture",
        tasks: [
          { id: "ux-d2-t1", title: "Watch IA fundamentals", description: "Card sorting and tree testing", xpReward: 50, type: "watch" },
          { id: "ux-d2-t2", title: "Create user flow diagram", description: "Map out the core task flow for your app", xpReward: 80, type: "build" },
        ],
      },
      {
        day: 3,
        dayLabel: "Day 3",
        title: "Wireframing",
        tasks: [
          { id: "ux-d3-t1", title: "Read low-fidelity best practices", description: "Why you should start with paper sketches", xpReward: 40, type: "read" },
          { id: "ux-d3-t2", title: "Sketch 5 key screens", description: "Hand-drawn wireframes for core flows", xpReward: 60, type: "build" },
          { id: "ux-d3-t3", title: "Get feedback from 1 peer", description: "Share your wireframes and iterate", xpReward: 50, type: "share" },
        ],
      },
      {
        day: 4,
        dayLabel: "Day 4",
        title: "Visual Design",
        tasks: [
          { id: "ux-d4-t1", title: "Watch Figma auto layout", description: "Build responsive components faster", xpReward: 60, type: "watch" },
          { id: "ux-d4-t2", title: "Create a color palette", description: "Apply the 60-30-10 rule to your design", xpReward: 50, type: "build" },
        ],
      },
      {
        day: 5,
        dayLabel: "Day 5",
        title: "High-Fidelity Mockups",
        tasks: [
          { id: "ux-d5-t1", title: "Design 3 key screens in Figma", description: "Home, detail, and checkout flows", xpReward: 120, type: "build" },
          { id: "ux-d5-t2", title: "Apply design system tokens", description: "Use variables for colors and spacing", xpReward: 60, type: "build" },
        ],
      },
      {
        day: 6,
        dayLabel: "Day 6",
        title: "Prototyping",
        tasks: [
          { id: "ux-d6-t1", title: "Watch prototyping tutorial", description: "Interactions, transitions, and overlays", xpReward: 50, type: "watch" },
          { id: "ux-d6-t2", title: "Build interactive prototype", description: "Connect all screens with realistic flow", xpReward: 100, type: "build" },
        ],
      },
      {
        day: 7,
        dayLabel: "Day 7",
        title: "Testing & Polish",
        tasks: [
          { id: "ux-d7-t1", title: "Conduct usability test", description: "Watch 1 person use your prototype", xpReward: 100, type: "build" },
          { id: "ux-d7-t2", title: "Share on Dribbble or LinkedIn", description: "Post your case study with #FYPChallenge", xpReward: 80, type: "share" },
        ],
      },
    ],
  },
  badges: [
    { id: "ux-b1", name: "Figma Wizard", icon: "🎨", earned: true, date: "2026-05-29" },
    { id: "ux-b2", name: "User Advocate", icon: "👥", earned: true, date: "2026-05-31" },
    { id: "ux-b3", name: "Wireframe Pro", icon: "📐", earned: true, date: "2026-06-02" },
    { id: "ux-b4", name: "System Builder", icon: "🧩", earned: false },
    { id: "ux-b5", name: "Pixel Perfect", icon: "✨", earned: false },
  ],
}

// ============================================================
// DIGITAL MARKETING
// ============================================================
const digitalMarketingContent: CareerContent = {
  levelTitle: "Digital Marketing",
  topSkills: ["Google Ads", "SEO", "Content Strategy", "Analytics", "Social Media"],
  feed: [
    {
      id: "dm-1",
      type: "video",
      title: "Google Ads in 2026: What's Changed",
      creator: "Tokopedia Marketing",
      description: "Performance Max, AI-powered bidding, and the death of broad match keywords",
      duration: "11:30",
      skillTag: "Google Ads",
      youtubeId: "kUMe2jT0Uos",
      isVerified: true,
      xpReward: 90,
    },
    {
      id: "dm-2",
      type: "skill",
      title: "Skill of the Day: Copywriting Hooks",
      creator: "FYP Learning",
      description: "Master 7 proven hooks: the question, the stat, the story, the contrarian take, the how-to, the list, and the secret",
      duration: "5 min",
      skillTag: "Copywriting",
      xpReward: 50,
    },
    {
      id: "dm-3",
      type: "video",
      title: "Shopee's TikTok Strategy Breakdown",
      creator: "Shopee Marketing",
      description: "How Shopee generated $2B in GMV through creator partnerships and UGC",
      duration: "13:45",
      skillTag: "Social Media",
      youtubeId: "kUMe2jT0Uos",
      isVerified: true,
      isSponsored: true,
      xpReward: 100,
    },
    {
      id: "dm-4",
      type: "article",
      title: "SEO for Indonesian Market",
      creator: "Bukalapak Growth",
      description: "Local keywords, Bahasa Indonesia search intent, and the rise of voice search",
      duration: "8 min read",
      skillTag: "SEO",
      articleUrl: "https://medium.com/bukalapak-growth",
      isVerified: true,
      xpReward: 70,
    },
    {
      id: "dm-5",
      type: "video",
      title: "Email Marketing That Converts 40%+",
      creator: "Blibli CRM",
      description: "Subject lines, segmentation, and the psychology of urgency",
      duration: "9:20",
      skillTag: "Email Marketing",
      youtubeId: "kUMe2jT0Uos",
      isVerified: true,
      xpReward: 80,
    },
    {
      id: "dm-6",
      type: "article",
      title: "The Complete Guide to GA4",
      creator: "Gojek Analytics",
      description: "Events, conversions, and how to set up tracking that actually works",
      duration: "10 min read",
      skillTag: "Analytics",
      articleUrl: "https://medium.com/gojek-engineering",
      isVerified: true,
      xpReward: 80,
    },
    {
      id: "dm-7",
      type: "video",
      title: "Content Marketing Framework for Startups",
      creator: "Traveloka Content",
      description: "From pillar pages to topic clusters — the full content strategy in 15 minutes",
      duration: "15:12",
      skillTag: "Content Strategy",
      youtubeId: "kUMe2jT0Uos",
      isVerified: true,
      xpReward: 110,
    },
  ],
  weeklyQuest: {
    title: "Launch Your First Marketing Campaign in 7 Days",
    description: "From strategy to live campaign in one week",
    days: [
      {
        day: 1,
        dayLabel: "Day 1",
        title: "Market Research",
        tasks: [
          { id: "dm-d1-t1", title: "Watch market research basics", description: "TAM, SAM, SOM, and competitor analysis", xpReward: 50, type: "watch" },
          { id: "dm-d1-t2", title: "Read article on customer avatars", description: "Beyond demographics: psychographics and behavior", xpReward: 40, type: "read" },
          { id: "dm-d1-t3", title: "Define your target audience", description: "Create 1 detailed customer persona", xpReward: 80, type: "build" },
        ],
      },
      {
        day: 2,
        dayLabel: "Day 2",
        title: "Channel Selection",
        tasks: [
          { id: "dm-d2-t1", title: "Read channel comparison guide", description: "Google Ads vs Meta vs TikTok vs SEO", xpReward: 50, type: "read" },
          { id: "dm-d2-t2", title: "Choose your primary channel", description: "Justify your choice based on audience and budget", xpReward: 60, type: "build" },
        ],
      },
      {
        day: 3,
        dayLabel: "Day 3",
        title: "Content Creation",
        tasks: [
          { id: "dm-d3-t1", title: "Watch copywriting hooks", description: "7 proven hooks for any platform", xpReward: 50, type: "watch" },
          { id: "dm-d3-t2", title: "Write 3 ad copy variations", description: "Test different angles and hooks", xpReward: 80, type: "build" },
          { id: "dm-d3-t3", title: "Create 1 visual asset", description: "Use Canva or Figma for your ad creative", xpReward: 60, type: "build" },
        ],
      },
      {
        day: 4,
        dayLabel: "Day 4",
        title: "Campaign Setup",
        tasks: [
          { id: "dm-d4-t1", title: "Watch campaign setup tutorial", description: "Budget, targeting, and bidding strategies", xpReward: 60, type: "watch" },
          { id: "dm-d4-t2", title: "Set up tracking in GA4", description: "Configure events and conversions", xpReward: 80, type: "build" },
        ],
      },
      {
        day: 5,
        dayLabel: "Day 5",
        title: "Launch & Monitor",
        tasks: [
          { id: "dm-d5-t1", title: "Launch your campaign", description: "Go live with a small budget test", xpReward: 100, type: "build" },
          { id: "dm-d5-t2", title: "Check metrics after 24h", description: "Impressions, clicks, CTR, CPC", xpReward: 50, type: "read" },
        ],
      },
      {
        day: 6,
        dayLabel: "Day 6",
        title: "Optimization",
        tasks: [
          { id: "dm-d6-t1", title: "Read A/B testing guide", description: "How to run experiments that matter", xpReward: 50, type: "read" },
          { id: "dm-d6-t2", title: "Make 1 optimization change", description: "Based on your campaign data", xpReward: 80, type: "build" },
        ],
      },
      {
        day: 7,
        dayLabel: "Day 7",
        title: "Report & Share",
        tasks: [
          { id: "dm-d7-t1", title: "Create campaign report", description: "Key metrics, insights, and next steps", xpReward: 100, type: "build" },
          { id: "dm-d7-t2", title: "Share on LinkedIn", description: "Post your campaign results with #FYPChallenge", xpReward: 80, type: "share" },
        ],
      },
    ],
  },
  badges: [
    { id: "dm-b1", name: "Ad Strategist", icon: "🎯", earned: true, date: "2026-05-27" },
    { id: "dm-b2", name: "Content Creator", icon: "✍️", earned: true, date: "2026-05-30" },
    { id: "dm-b3", name: "Analytics Pro", icon: "📈", earned: true, date: "2026-06-01" },
    { id: "dm-b4", name: "Growth Hacker", icon: "🚀", earned: false },
    { id: "dm-b5", name: "Brand Builder", icon: "💎", earned: false },
  ],
}

// ============================================================
// PRODUCT MANAGER
// ============================================================
const productManagerContent: CareerContent = {
  levelTitle: "Product Manager",
  topSkills: ["Strategy", "User Research", "Analytics", "Roadmapping", "Stakeholder Management"],
  feed: [
    {
      id: "pm-1",
      type: "video",
      title: "How to Write a PRD That Engineers Love",
      creator: "Gojek Product",
      description: "The anatomy of a product requirements document that actually gets read",
      duration: "12:40",
      skillTag: "Documentation",
      youtubeId: "kUMe2jT0Uos",
      isVerified: true,
      xpReward: 90,
    },
    {
      id: "pm-2",
      type: "skill",
      title: "Skill of the Day: Prioritization Frameworks",
      creator: "FYP Learning",
      description: "RICE, ICE, MoSCoW, and Kano model — when to use each one and why",
      duration: "6 min",
      skillTag: "Strategy",
      xpReward: 60,
    },
    {
      id: "pm-3",
      type: "video",
      title: "Tokopedia's Product Discovery Process",
      creator: "Tokopedia Product",
      description: "How they validate ideas before writing a single line of code",
      duration: "16:20",
      skillTag: "Discovery",
      youtubeId: "kUMe2jT0Uos",
      isVerified: true,
      isSponsored: true,
      xpReward: 120,
    },
    {
      id: "pm-4",
      type: "article",
      title: "The Art of Saying No to Stakeholders",
      creator: "Bukalapak Product",
      description: "Frameworks for prioritization conversations that don't end in politics",
      duration: "8 min read",
      skillTag: "Communication",
      articleUrl: "https://medium.com/bukalapak-product",
      isVerified: true,
      xpReward: 70,
    },
    {
      id: "pm-5",
      type: "video",
      title: "North Star Metric: Find Yours in 20 Minutes",
      creator: "Shopee Product",
      description: "The single metric that aligns your entire team and drives growth",
      duration: "19:15",
      skillTag: "Metrics",
      youtubeId: "kUMe2jT0Uos",
      isVerified: true,
      xpReward: 110,
    },
    {
      id: "pm-6",
      type: "article",
      title: "User Story Mapping Workshop Guide",
      creator: "Traveloka Product",
      description: "Run a 2-hour workshop that produces a shared understanding of your product",
      duration: "9 min read",
      skillTag: "Planning",
      articleUrl: "https://medium.com/traveloka-engineering",
      isVerified: true,
      xpReward: 80,
    },
    {
      id: "pm-7",
      type: "video",
      title: "Go-to-Market Strategy for B2B Products",
      creator: "Blibli Product",
      description: "From positioning to launch — the full GTM framework",
      duration: "14:50",
      skillTag: "GTM",
      youtubeId: "kUMe2jT0Uos",
      isVerified: true,
      xpReward: 100,
    },
  ],
  weeklyQuest: {
    title: "Ship Your First Product Feature in 7 Days",
    description: "From idea to shipped feature in one week",
    days: [
      {
        day: 1,
        dayLabel: "Day 1",
        title: "Problem Discovery",
        tasks: [
          { id: "pm-d1-t1", title: "Watch discovery methods", description: "User interviews and problem framing", xpReward: 50, type: "watch" },
          { id: "pm-d1-t2", title: "Read article on JTBD framework", description: "Jobs to be Done: understand why users hire products", xpReward: 50, type: "read" },
          { id: "pm-d1-t3", title: "Interview 3 users", description: "Identify a real pain point to solve", xpReward: 100, type: "build" },
        ],
      },
      {
        day: 2,
        dayLabel: "Day 2",
        title: "Solution Ideation",
        tasks: [
          { id: "pm-d2-t1", title: "Watch ideation techniques", description: "How Airbnb and Spotify brainstorm features", xpReward: 50, type: "watch" },
          { id: "pm-d2-t2", title: "Generate 10 solution ideas", description: "Use SCAMPER or Crazy Eights", xpReward: 80, type: "build" },
        ],
      },
      {
        day: 3,
        dayLabel: "Day 3",
        title: "Prioritization",
        tasks: [
          { id: "pm-d3-t1", title: "Read RICE prioritization guide", description: "Reach, Impact, Confidence, Effort", xpReward: 50, type: "read" },
          { id: "pm-d3-t2", title: "Score your top 3 ideas", description: "Pick the one to build this week", xpReward: 60, type: "build" },
          { id: "pm-d3-t3", title: "Get stakeholder buy-in", description: "Present your choice to 1 person", xpReward: 50, type: "share" },
        ],
      },
      {
        day: 4,
        dayLabel: "Day 4",
        title: "Write the PRD",
        tasks: [
          { id: "pm-d4-t1", title: "Watch PRD anatomy", description: "Problem, users, success metrics, scope", xpReward: 60, type: "watch" },
          { id: "pm-d4-t2", title: "Write your PRD", description: "1-page document with all key sections", xpReward: 100, type: "build" },
        ],
      },
      {
        day: 5,
        dayLabel: "Day 5",
        title: "Design & Spec",
        tasks: [
          { id: "pm-d5-t1", title: "Create wireframes", description: "Sketch the key user flow", xpReward: 80, type: "build" },
          { id: "pm-d5-t2", title: "Define success metrics", description: "How will you know it worked?", xpReward: 50, type: "build" },
        ],
      },
      {
        day: 6,
        dayLabel: "Day 6",
        title: "Build & Test",
        tasks: [
          { id: "pm-d6-t1", title: "Work with engineering", description: "Clarify requirements and unblock the team", xpReward: 80, type: "build" },
          { id: "pm-d6-t2", title: "Set up analytics tracking", description: "Events, funnels, and dashboards", xpReward: 60, type: "build" },
        ],
      },
      {
        day: 7,
        dayLabel: "Day 7",
        title: "Launch & Learn",
        tasks: [
          { id: "pm-d7-t1", title: "Ship to 10% of users", description: "Start with a small rollout", xpReward: 100, type: "build" },
          { id: "pm-d7-t2", title: "Write launch retrospective", description: "What worked, what didn't, what's next", xpReward: 80, type: "build" },
          { id: "pm-d7-t3", title: "Share on LinkedIn", description: "Post your shipping story with #FYPChallenge", xpReward: 80, type: "share" },
        ],
      },
    ],
  },
  badges: [
    { id: "pm-b1", name: "Product Strategist", icon: "🧠", earned: true, date: "2026-05-28" },
    { id: "pm-b2", name: "User Champion", icon: "❤️", earned: true, date: "2026-05-31" },
    { id: "pm-b3", name: "Shipper", icon: "🚀", earned: true, date: "2026-06-02" },
    { id: "pm-b4", name: "Data-Driven", icon: "📊", earned: false },
    { id: "pm-b5", name: "Storyteller", icon: "📖", earned: false },
  ],
}

// ============================================================
// CONTENT REGISTRY
// ============================================================
export const CAREER_CONTENT: Record<string, CareerContent> = {
  "data-analyst": dataAnalystContent,
  "ui-ux-designer": uiUxDesignerContent,
  "digital-marketing": digitalMarketingContent,
  "product-manager": productManagerContent,
}

export function getCareerContent(careerTrack: string): CareerContent {
  return CAREER_CONTENT[careerTrack] || dataAnalystContent
}

// ============================================================
// USER PROGRESS (localStorage shape)
// ============================================================
export interface UserProgress {
  completedTasks: string[] // task IDs
  currentStreak: number
  lastActiveDate: string // ISO date
  totalXP: number
}

export const DEFAULT_PROGRESS: UserProgress = {
  completedTasks: [],
  currentStreak: 7,
  lastActiveDate: new Date().toISOString().split("T")[0],
  totalXP: 847,
}
