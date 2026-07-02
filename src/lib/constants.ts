export const siteMetadata = {
  home: {
    title: 'Digital Futurity | Digital Product & Engineering Consultancy',
    description: 'Senior digital product and engineering consultancy helping organisations design, build, modernise, and scale software platforms — Middle East & Asia.',
    og: { title: 'Digital Futurity', description: 'Build the future with a senior digital product and engineering team.' }
  },
  about: {
    title: 'About | Digital Futurity',
    description: '15-18+ years of experience in product innovation, enterprise architecture, and cloud delivery across the Middle East and Asia.',
    og: { title: 'About Digital Futurity', description: 'Technology leadership with delivery depth.' }
  },
  services: {
    title: 'Services | Digital Futurity',
    description: 'Four stages, one senior team: launch your product, productionise a fragile MVP, build the features that drive growth, and scale securely — on AWS, GCP, or Azure.',
    og: { title: 'Services | Digital Futurity', description: 'Launch, productionise, grow, and scale — a senior team for the whole founder journey.' }
  },
  whatWeBuild: {
    title: 'What We Build | Digital Futurity',
    description: 'The systems founders actually need — growth, lead management, bookings & payments, dashboards, AI features, and the reliability and security to scale.',
    og: { title: 'What We Build | Digital Futurity', description: 'Growth, leads, bookings, dashboards, AI, and reliability — built for founders.' }
  },
  engagement: {
    title: 'Engagement Models | Digital Futurity',
    description: 'Flexible engagement models — strategic advisory, embedded leadership, end-to-end product build, modernisation partnership, and delivery acceleration.',
    og: { title: 'How to Work With Us | Digital Futurity', description: 'Find the right engagement model for your needs.' }
  },
  proofPoints: {
    title: 'Proof Points | Digital Futurity',
    description: 'Selected proof points across product launches, platform development, architecture modernisation, and enterprise program delivery.',
    og: { title: 'What We\'ve Delivered | Digital Futurity', description: 'Real delivery outcomes across product, architecture, and engineering.' }
  },
  contact: {
    title: 'Contact | Digital Futurity',
    description: 'Start a conversation with Digital Futurity. Product builds, platform modernisation, embedded leadership — we respond within 1 business day.',
    og: { title: 'Contact Digital Futurity', description: 'Reach out to start your product journey.' }
  }
};

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'What We Build', href: '/what-we-build' },
  { label: 'Engagement', href: '/engagement' },
  { label: 'Proof Points', href: '/proof-points' },
  { label: 'Contact', href: '/contact' },
];

export const trustStats = [
  { value: 15, suffix: '+', label: 'Years Experience Each' },
  { value: 50, suffix: '+', label: 'Startups Mentored — Misk Launchpad' },
  { value: 6, suffix: '+', label: 'Products Designed & Shipped' },
];

export const whyUsCards = [
  {
    title: 'End-to-End Ownership',
    description: 'From product discovery through cloud delivery and optimisation — one senior team accountable for the full lifecycle.',
  },
  {
    title: 'Business-First Engineering',
    description: 'We align technical decisions directly to commercial outcomes, ensuring every build decision serves a measurable business objective.',
  },
  {
    title: 'Startup Speed, Enterprise Discipline',
    description: 'Agile delivery velocity combined with the governance rigor that complex organisations require.',
  },
  {
    title: 'Cloud-Native by Default',
    description: 'Cloud-first, automation-first architecture for platforms that scale reliably and cost-efficiently from day one.',
  },
];

export const deliveryStages = [
  {
    title: 'Strategy',
    items: ['Product discovery', 'Roadmaps', 'Stakeholder alignment'],
  },
  {
    title: 'Architecture',
    items: ['Solution design', 'Cloud arch', 'Security-by-design', 'API patterns'],
  },
  {
    title: 'Build',
    items: ['Full-stack eng', 'Platform dev', 'UX/UI impl', 'Test automation'],
  },
  {
    title: 'Operate',
    items: ['CI/CD pipelines', 'Observability', 'Reliability', 'Perf & cost opt'],
  },
  {
    title: 'Scale & Govern',
    items: ['Program delivery', 'Governance', 'Platform modernisation', 'PMO'],
  },
];

export const coreStrengths = [
  'Product Innovation & 0-1',
  'Enterprise Program Leadership',
  'Architecture & Engineering',
  'Cloud & DevOps Expertise',
];

export const bestFitEngagements = [
  'MVP to Production',
  '0→1 Product Builds',
  'Fractional CTO',
  'Growth & Feature Delivery',
  'Bookings & Payments',
  'AI Features',
  'Cloud & Scaling',
];

// What founders actually ask us to build — organised by outcome, not industry.
export const whatWeBuild = [
  {
    icon: 'TrendingUp',
    title: 'Growth & Acquisition',
    description: 'Turn visitors into signups. Landing pages, SEO, analytics, and conversion funnels wired into your product — so growth is engineered, not hoped for.',
    examples: ['Marketing site & landing pages', 'SEO & performance', 'Analytics & funnels', 'A/B testing'],
  },
  {
    icon: 'Users',
    title: 'Lead Management & CRM',
    description: 'Stop losing leads in inboxes and spreadsheets. Capture, track, and follow up automatically — a custom pipeline or a clean integration with the CRM you already use.',
    examples: ['Lead capture & routing', 'Pipelines & automation', 'CRM integrations', 'Custom admin'],
  },
  {
    icon: 'CalendarCheck',
    title: 'Bookings & Payments',
    description: 'Let customers book and pay without you in the loop. Scheduling, calendars, checkout, subscriptions, and invoicing — done securely.',
    examples: ['Scheduling & calendars', 'Stripe & payments', 'Subscriptions & billing', 'Invoicing'],
  },
  {
    icon: 'LayoutDashboard',
    title: 'Dashboards & Internal Tools',
    description: "See what's happening and run the business. Admin panels, analytics dashboards, and internal tools that replace the manual work slowing you down.",
    examples: ['Admin & ops panels', 'Analytics dashboards', 'Reporting', 'Internal automation'],
  },
  {
    icon: 'Sparkles',
    title: 'AI Features & Automation',
    description: 'Put AI to work where it actually helps. Chatbots, assistants, document and RAG workflows, and automations — built responsibly and integrated into your product.',
    examples: ['Chatbots & assistants', 'RAG & document AI', 'Workflow automation', 'AI integrations'],
  },
  {
    icon: 'ShieldCheck',
    title: 'Reliability, Security & Scale',
    description: 'The unglamorous foundation that keeps you out of trouble. Real auth, data protection, uptime, and cloud that scales — on AWS, GCP, or Azure.',
    examples: ['Auth & access control', 'Security & data protection', 'Performance & uptime', 'Cloud & scaling'],
  },
];

// The founder journey — four stages, one senior team.
export const services = [
  {
    id: 'launch',
    stage: '01',
    title: 'Launch',
    tagline: 'Get off the ground',
    intro: "You've got an idea — or a rough prototype — and need it built properly the first time. We take you from concept to a launched product, making the architecture calls that won't come back to bite you in six months.",
    outcomes: [
      'A launched product real users can actually use',
      "Clean architecture that won't need redoing",
      'Clear scope, timeline, and cost up front',
      'A codebase your future team can build on',
    ],
    includes: [
      'Product shaping & scope',
      'Solution architecture',
      'Full-stack build',
      'Launch & handover',
    ],
    idealFor: 'Non-technical founders with an idea. Founders with a no-code or AI prototype that needs to become real. Teams spinning up a new product.',
  },
  {
    id: 'productionize',
    stage: '02',
    title: 'Productionise',
    tagline: 'Make your MVP real',
    intro: "Your thing works in a demo but isn't ready for real users, investors, or scale. We harden it — security, reliability, performance, and a codebase anyone can extend — and we'll tell you straight if it needs a targeted rebuild instead.",
    outcomes: [
      'A secure, reliable, production-grade product',
      'Investor- and due-diligence-ready',
      'Tech debt cleared where it actually matters',
      "Confidence it won't fall over as you grow",
    ],
    includes: [
      'Codebase & architecture review',
      'Security & data hardening',
      'Test automation & observability',
      'CI/CD & cloud setup',
    ],
    idealFor: 'Founders with a fragile MVP. AI or no-code builds that hit their limits. Anyone with real users on shaky foundations.',
  },
  {
    id: 'grow',
    stage: '03',
    title: 'Grow',
    tagline: 'Build what drives the business',
    intro: "Once it's real, it needs to move the numbers. We build the growth machinery into your product — acquisition, lead capture, bookings, payments, dashboards, and AI features that actually help.",
    outcomes: [
      'Features that drive signups and revenue',
      'Manual work replaced with automation',
      "Data to see what's working",
      'A product that keeps shipping',
    ],
    includes: [
      'Growth & acquisition features',
      'Lead management, bookings, payments',
      'Dashboards & internal tools',
      'AI features & automation',
    ],
    idealFor: 'Founders with a live product needing traction. Teams drowning in manual ops. Products ready to add revenue features.',
  },
  {
    id: 'scale',
    stage: '04',
    title: 'Scale & Secure',
    tagline: 'Hold up under growth',
    intro: "Growth breaks things. We make sure it doesn't break you — cloud that scales cost-efficiently, reliability practices, security done right, and the senior engineering leadership to steer it. On AWS, GCP, or Azure.",
    outcomes: [
      'Infrastructure that scales without surprises',
      'Uptime and performance under load',
      'Security and data protection done right',
      'Costs that still make sense as you grow',
    ],
    includes: [
      'Cloud architecture & DevOps',
      'Reliability & observability',
      'Security & compliance readiness',
      'Fractional senior engineering leadership',
    ],
    idealFor: 'Funded startups scaling fast. Products with growing user load. Teams needing senior technical leadership without a full-time hire.',
  },
];

export const engagementModels = [
  {
    title: 'Advisory & Architecture Review',
    commitment: 'Lightest touch',
    whatItIs: 'Senior product and engineering guidance at the moments that matter — architecture reviews, tech and stack decisions, hiring, or a second opinion before you commit — without us embedding in delivery.',
    whenItFits: 'You have a team (or a build underway) but want experienced eyes on the big calls before they get expensive to undo.',
    whatClientsGet: [
      'Senior advisory sessions on your schedule',
      'Architecture and tech-decision reviews',
      'A clear, written recommendation',
      'Senior expertise without a big commitment',
    ],
    expectedOutcomes: 'Sharper decisions and less risk — the confidence of a senior second opinion before you build.',
  },
  {
    title: 'Productionisation Sprint',
    commitment: 'Time-boxed',
    whatItIs: 'A time-boxed engagement to take a fragile MVP to production-grade — security, reliability, performance, and a codebase anyone can extend. We start with an honest assessment: harden, or targeted rebuild.',
    whenItFits: 'You have something that works, but real users, a raise, or scale are starting to expose the cracks.',
    whatClientsGet: [
      'Codebase and architecture assessment',
      'A prioritised hardening plan',
      'The fixes delivered in a fixed window',
      'A production-ready, documented product',
    ],
    expectedOutcomes: "A product that's secure, reliable, and ready for users and investors — in weeks, not months.",
  },
  {
    title: 'Fixed-Scope Build',
    commitment: 'Defined project',
    whatItIs: 'You know what you need built. We scope it, price it, and deliver it end-to-end — strategy, design, engineering, and launch — with clear milestones and no surprises.',
    whenItFits: 'You have a defined product or feature to build and want a senior team fully accountable for shipping it.',
    whatClientsGet: [
      'Clear scope, timeline, and fixed price',
      'A complete senior delivery team',
      'Regular demos and full visibility',
      'A launched, production-ready product',
    ],
    expectedOutcomes: 'A market-ready product delivered on a defined scope and timeline, built to last.',
  },
  {
    title: 'Fractional Senior Team',
    commitment: 'Part-time, ongoing',
    whatItIs: 'A senior practitioner — or a small pod — embedded into your team part-time, acting as your fractional CTO, lead architect, or engineering lead for as long as you need.',
    whenItFits: "You need senior leadership and delivery muscle now, but aren't ready — or don't need — to hire full-time.",
    whatClientsGet: [
      'Embedded senior practitioner(s)',
      'Hands-on leadership of the work',
      'Seamless work with your existing team',
      'Knowledge transfer to your people',
    ],
    expectedOutcomes: 'Senior capability from day one, with your team levelled up along the way.',
  },
  {
    title: 'Ongoing Product Partner',
    commitment: 'Full partnership',
    whatItIs: 'A continuous partnership where we act as your product and engineering team — shipping features, running growth work, and keeping the platform healthy, sprint after sprint.',
    whenItFits: 'You have a live product and want a senior team that keeps building and improving it — without the overhead of hiring and managing one.',
    whatClientsGet: [
      'A dedicated senior team on a rolling basis',
      'Consistent sprint delivery',
      'Growth, features, and reliability handled',
      'One accountable partner for the whole product',
    ],
    expectedOutcomes: 'Momentum that compounds — a product that keeps getting better without you building a full team.',
  },
];

// Real products designed, built, and shipped by the team.
// NOTE: EduCore and Security Sentry descriptions are provisional — refine with the founder's own one-liners.
export const products = [
  {
    name: 'Upllyft',
    tagline: 'A multi-app platform for the neurodivergent community — connecting parents, therapists, educators, and organisations.',
    tags: ['Multi-app platform', 'NestJS', 'Microservices'],
  },
  {
    name: 'IntentOS',
    tagline: 'A language-first computing layer — describe what you want and it happens, without hunting for and installing apps.',
    tags: ['AI', 'Product 0→1'],
  },
  {
    name: 'Attestra',
    tagline: 'A continuous security validation platform — a multi-tenant control plane orchestrating agentic security testing, with row-level tenant isolation and human-in-the-loop workflows.',
    tags: ['Security', 'Multi-tenant SaaS'],
  },
  {
    name: 'ClearPoint',
    tagline: 'A diagnostic-to-action engine for AI-readiness consulting — structured assessments that produce traceable diagnoses, roadmaps, and business cases.',
    tags: ['B2B SaaS', 'AI'],
  },
  {
    name: 'EduCore',
    tagline: 'A cloud-native learning management platform (LMS), built on Google Cloud with Firebase and Firestore.',
    tags: ['LMS', 'GCP', 'Firebase'],
  },
  {
    name: 'Security Sentry',
    tagline: 'An agent-based security monitoring platform with a Python backend and web dashboard, packaged for production deployment.',
    tags: ['Security', 'Monitoring'],
  },
];

export const proofPoints = [
  {
    title: 'From Idea to Market — 0-1 Product Launch',
    challenge: 'A founder-led venture needed to move from an early-stage concept to a production-ready digital product within a constrained timeline, without a technical co-founder or in-house engineering team.',
    approach: 'Digital Futurity led the full engagement — product discovery, roadmap definition, solution architecture, and full-stack engineering — delivering an MVP with clear extensibility for future phases.',
    outcome: 'A market-ready product launched within the target timeline, with a clean architecture and documented codebase ready for an in-house team to take over.',
  },
  {
    title: 'Full-Stack Platform Development at Enterprise Scale',
    challenge: 'An enterprise organisation needed a custom platform built to support complex operational workflows across multiple business units, integrated with existing enterprise systems.',
    approach: 'End-to-end platform development — from solution architecture through full-stack engineering, integration design, and test automation — with regular sprint delivery and stakeholder reporting.',
    outcome: 'A production-grade platform deployed across business units, with integrations live and a test-automated codebase enabling ongoing feature delivery at pace.',
  },
  {
    title: 'Scalable Architecture for a Growing Platform',
    challenge: 'A scaling business had accumulated significant technical debt and was approaching the limits of their current architecture — slowing delivery velocity and creating reliability risk.',
    approach: 'A current-state architecture review followed by a progressive re-architecture plan — introducing cloud-native patterns, API abstraction layers, and observability without disrupting ongoing business operations.',
    outcome: 'Platform delivery velocity improved, infrastructure costs reduced, and a scalable architectural foundation established for the next phase of product growth.',
  },
  {
    title: 'Agile Delivery in a Startup Environment',
    challenge: 'A high-growth startup needed to accelerate delivery velocity without sacrificing engineering quality, as their early codebase struggled to support the pace of product iteration required.',
    approach: 'Embedded senior engineering and delivery leadership — introducing disciplined agile practices, CI/CD automation, and test coverage — while continuing to deliver features at startup speed.',
    outcome: 'Delivery cadence significantly improved, production incidents reduced, and the engineering team uplifted in both capability and practice.',
  },
  {
    title: 'Enterprise Program Governance & Modernisation',
    challenge: 'A large enterprise running a multi-workstream digital transformation program lacked senior delivery governance — leading to misaligned priorities, inconsistent reporting, and stakeholder confidence issues.',
    approach: 'Digital Futurity embedded as senior delivery and governance leadership — establishing program governance frameworks, executive reporting, and cross-workstream coordination structures.',
    outcome: 'Program clarity restored, stakeholder confidence rebuilt, and the transformation accelerated with consistent delivery rhythm and measurable progress tracking.',
  },
];

export const credibilityStats = [
  '15+ Years Experience Each',
  '50+ Startups Mentored via Misk Launchpad',
  'Idea → Production → Scale',
  'AWS · GCP · Azure',
];
