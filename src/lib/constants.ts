export const siteMetadata = {
  home: {
    title: 'Digital Futurity | Senior Product & Engineering for Founders',
    description: 'We help founders turn a fragile MVP into a secure, scalable, production-grade product, and build it from scratch when you need us to. Big-firm engineering seniority, at startup speed and price.',
    og: { title: 'Digital Futurity', description: 'You built something. We make it real, from MVP to production-grade.' }
  },
  about: {
    title: 'About | Digital Futurity',
    description: 'A small, senior team of product and engineering practitioners with 15+ years each. We have shipped our own products and mentored 50+ startups through Misk Launchpad.',
    og: { title: 'About Digital Futurity', description: 'Big-firm seniority, without the big firm.' }
  },
  services: {
    title: 'Services: MVP to Production | Digital Futurity',
    description: 'Four stages, one senior team: launch your product, productionise a fragile MVP, build the features that drive growth, and scale securely on AWS, GCP, or Azure.',
    og: { title: 'Services | Digital Futurity', description: 'Launch, productionise, grow, and scale. A senior team for the whole founder journey.' }
  },
  whatWeBuild: {
    title: 'What We Build for Founders | Digital Futurity',
    description: 'The systems founders actually need: growth and acquisition, lead management, bookings and payments, dashboards, AI features, and the reliability and security to scale.',
    og: { title: 'What We Build | Digital Futurity', description: 'Growth, leads, bookings, dashboards, AI, and reliability, built for founders.' }
  },
  engagement: {
    title: 'Ways to Work With Us | Digital Futurity',
    description: 'Flexible ways to work with a senior team: advisory and architecture reviews, a productionisation sprint, a fixed-scope build, a fractional senior team, or an ongoing product partner.',
    og: { title: 'How to Work With Us | Digital Futurity', description: 'Find the right way to work with us, from a second opinion to a full product team.' }
  },
  proofPoints: {
    title: 'Our Work & Products | Digital Futurity',
    description: 'Real products we have designed, built, and shipped, alongside the founder engagements we take on. Client names and references are shared under NDA.',
    og: { title: 'Our Work | Digital Futurity', description: 'Products we have shipped, and how we help founders.' }
  },
  contact: {
    title: 'Contact | Digital Futurity',
    description: 'Tell us what you are building and where you are stuck, whether that is a new product, productionising an MVP, or a fractional senior team. We respond within 1 business day.',
    og: { title: 'Contact Digital Futurity', description: 'Start the conversation. We respond within 1 business day.' }
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
  { value: 50, suffix: '+', label: 'Startups Mentored at Misk Launchpad' },
  { value: 6, suffix: '+', label: 'Products Designed & Shipped' },
];

export const whyUsCards = [
  {
    title: 'Actually Senior',
    description: 'The people on your product are principal-level, with 15+ years each. Not juniors learning on your budget.',
  },
  {
    title: "We've Been There",
    description: "We've built and shipped our own products, and mentored 50+ founders through Misk Launchpad. We know exactly where it breaks.",
  },
  {
    title: 'Straight Talk',
    description: "We'll tell you whether to harden or rebuild, and what to skip. We won't quietly bill you for hours you don't need.",
  },
  {
    title: 'Built to Last',
    description: 'Everything ships production-grade: secure, tested, and ready to scale from day one. No throwaway MVPs.',
  },
];

export const deliveryStages = [
  {
    title: 'Launch',
    items: ['Product shaping', 'Architecture', 'Full-stack build', 'Launch'],
  },
  {
    title: 'Productionise',
    items: ['Security & hardening', 'Tests & observability', 'CI/CD', 'Cloud setup'],
  },
  {
    title: 'Grow',
    items: ['Growth features', 'Bookings & payments', 'Dashboards', 'AI & automation'],
  },
  {
    title: 'Scale & Secure',
    items: ['Cloud & DevOps', 'Reliability', 'Security', 'Senior leadership'],
  },
];

export const bestFitEngagements = [
  'MVP to Production',
  '0 to 1 Product Builds',
  'Fractional CTO',
  'Growth & Feature Delivery',
  'Bookings & Payments',
  'AI Features',
  'Cloud & Scaling',
];

// What founders actually ask us to build, organised by outcome rather than industry.
export const whatWeBuild = [
  {
    icon: 'TrendingUp',
    title: 'Growth & Acquisition',
    description: 'Turn visitors into signups. Landing pages, SEO, analytics, and conversion funnels wired into your product, so growth is engineered rather than hoped for.',
    examples: ['Marketing site & landing pages', 'SEO & performance', 'Analytics & funnels', 'A/B testing'],
  },
  {
    icon: 'Users',
    title: 'Lead Management & CRM',
    description: 'Stop losing leads in inboxes and spreadsheets. Capture, track, and follow up automatically, with a custom pipeline or a clean integration with the CRM you already use.',
    examples: ['Lead capture & routing', 'Pipelines & automation', 'CRM integrations', 'Custom admin'],
  },
  {
    icon: 'CalendarCheck',
    title: 'Bookings & Payments',
    description: 'Let customers book and pay without you in the loop. Scheduling, calendars, checkout, subscriptions, and invoicing, all done securely.',
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
    description: 'Put AI to work where it actually helps. Chatbots, assistants, document and RAG workflows, and automations, built responsibly and integrated into your product.',
    examples: ['Chatbots & assistants', 'RAG & document AI', 'Workflow automation', 'AI integrations'],
  },
  {
    icon: 'ShieldCheck',
    title: 'Reliability, Security & Scale',
    description: 'The unglamorous foundation that keeps you out of trouble: real auth, data protection, uptime, and cloud that scales on AWS, GCP, or Azure.',
    examples: ['Auth & access control', 'Security & data protection', 'Performance & uptime', 'Cloud & scaling'],
  },
];

// The founder journey: four stages, one senior team.
export const services = [
  {
    id: 'launch',
    stage: '01',
    title: 'Launch',
    tagline: 'Get off the ground',
    intro: "You've got an idea, or a rough prototype, and you need it built properly the first time. We take you from concept to a launched product, making the architecture calls that won't come back to bite you in six months.",
    outcomes: [
      'A launched product real users can actually use',
      "Clean architecture that won't need redoing",
      'Clear scope, timeline, and cost up front',
      'A codebase your future team can build on',
    ],
    includes: [
      'Product shaping & scope',
      'Roadmap & prioritisation',
      'Solution architecture',
      'UX/UI design',
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
    intro: "Your thing works in a demo but isn't ready for real users, investors, or scale. We harden it: security, reliability, performance, and a codebase anyone can extend. And we'll tell you straight if it needs a targeted rebuild instead.",
    outcomes: [
      'A secure, reliable, production-grade product',
      'Investor and due-diligence ready',
      'Tech debt cleared where it actually matters',
      "Confidence it won't fall over as you grow",
    ],
    includes: [
      'Codebase & architecture review',
      'Security & data hardening',
      'Test automation & observability',
      'Performance optimisation',
      'Integrations & APIs',
      'CI/CD & cloud setup',
    ],
    idealFor: 'Founders with a fragile MVP. AI or no-code builds that hit their limits. Anyone with real users on shaky foundations.',
  },
  {
    id: 'grow',
    stage: '03',
    title: 'Grow',
    tagline: 'Build what drives the business',
    intro: "Once it's real, it needs to move the numbers. We build the growth machinery into your product: acquisition, lead capture, bookings, payments, dashboards, and AI features that actually help.",
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
      'Analytics & experimentation',
      'AI features & automation',
    ],
    idealFor: 'Founders with a live product needing traction. Teams drowning in manual ops. Products ready to add revenue features.',
  },
  {
    id: 'scale',
    stage: '04',
    title: 'Scale & Secure',
    tagline: 'Hold up under growth',
    intro: "Growth breaks things. We make sure it doesn't break you: cloud that scales cost-efficiently, reliability practices, security done right, and the senior engineering leadership to steer it. On AWS, GCP, or Azure.",
    outcomes: [
      'Infrastructure that scales without surprises',
      'Uptime and performance under load',
      'Security and data protection done right',
      'Costs that still make sense as you grow',
    ],
    includes: [
      'Cloud architecture & DevOps',
      'Reliability & observability',
      'Performance & cost optimisation',
      'Security & compliance readiness',
      'Documentation & handover',
      'Fractional senior engineering leadership',
    ],
    idealFor: 'Funded startups scaling fast. Products with growing user load. Teams needing senior technical leadership without a full-time hire.',
  },
];

export const engagementModels = [
  {
    title: 'Advisory & Architecture Review',
    commitment: 'Lightest touch',
    whatItIs: 'Senior product and engineering guidance at the moments that matter: architecture reviews, tech and stack decisions, hiring, or a second opinion before you commit. We advise without embedding in delivery.',
    whenItFits: 'You have a team, or a build underway, but want experienced eyes on the big calls before they get expensive to undo.',
    whatClientsGet: [
      'Senior advisory sessions on your schedule',
      'Architecture and tech-decision reviews',
      'A clear, written recommendation',
      'Senior expertise without a big commitment',
    ],
    expectedOutcomes: 'Sharper decisions and less risk. The confidence of a senior second opinion before you build.',
  },
  {
    title: 'Productionisation Sprint',
    commitment: 'Time-boxed',
    whatItIs: 'A time-boxed engagement to take a fragile MVP to production-grade: security, reliability, performance, and a codebase anyone can extend. We start with an honest assessment: harden, or targeted rebuild.',
    whenItFits: 'You have something that works, but real users, a raise, or scale are starting to expose the cracks.',
    whatClientsGet: [
      'Codebase and architecture assessment',
      'A prioritised hardening plan',
      'The fixes delivered in a fixed window',
      'A production-ready, documented product',
    ],
    expectedOutcomes: "A product that's secure, reliable, and ready for users and investors, in weeks rather than months.",
  },
  {
    title: 'Fixed-Scope Build',
    commitment: 'Defined project',
    whatItIs: 'You know what you need built. We scope it, price it, and deliver it end-to-end: strategy, design, engineering, and launch, with clear milestones and no surprises.',
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
    whatItIs: 'A senior practitioner, or a small pod, embedded into your team part-time, acting as your fractional CTO, lead architect, or engineering lead for as long as you need.',
    whenItFits: "You need senior leadership and delivery muscle now, but you're not ready to hire full-time (or don't need to).",
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
    whatItIs: 'A continuous partnership where we act as your product and engineering team, shipping features, running growth work, and keeping the platform healthy sprint after sprint.',
    whenItFits: 'You have a live product and want a senior team that keeps building and improving it, without the overhead of hiring and managing one.',
    whatClientsGet: [
      'A dedicated senior team on a rolling basis',
      'Consistent sprint delivery',
      'Growth, features, and reliability handled',
      'One accountable partner for the whole product',
    ],
    expectedOutcomes: 'Momentum that compounds. A product that keeps getting better without you building a full team.',
  },
];

// Real products designed, built, and shipped by the team.
// NOTE: EduCore and Security Sentry descriptions are provisional; refine with the founder's own one-liners.
export const products = [
  {
    name: 'Upllyft',
    tagline: 'A multi-app platform for the neurodivergent community, connecting parents, therapists, educators, and organisations.',
    tags: ['Multi-app platform', 'NestJS', 'Microservices'],
  },
  {
    name: 'IntentOS',
    tagline: 'A language-first computing layer: describe what you want and it happens, without hunting for and installing apps.',
    tags: ['AI', 'Product 0 to 1'],
  },
  {
    name: 'Attestra',
    tagline: 'A continuous security validation platform: a multi-tenant control plane that orchestrates agentic security testing, with row-level tenant isolation and human-in-the-loop workflows.',
    tags: ['Security', 'Multi-tenant SaaS'],
  },
  {
    name: 'ClearPoint',
    tagline: 'A diagnostic-to-action engine for AI-readiness consulting: structured assessments that produce traceable diagnoses, roadmaps, and business cases.',
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
    title: 'Idea to Launched Product',
    challenge: 'A non-technical founder had validated demand but no way to build. No technical co-founder, no engineering team, and a tight window before a funding conversation.',
    approach: 'We led the full build, shaping the product, designing the architecture, and shipping a real MVP with room to grow, keeping the founder in the loop every sprint.',
    outcome: 'A launched product within the target window, on a clean, documented codebase ready to hand to an in-house team later.',
  },
  {
    title: 'A Shaky MVP, Made Real',
    challenge: "A founder's AI-assisted MVP was winning demos but breaking with real users. No proper auth, data exposed, and code no one could safely change.",
    approach: 'We assessed it honestly, hardened what was worth keeping, and rebuilt the rest, adding security, tests, observability, and a CI/CD pipeline.',
    outcome: 'A production-grade product the founder could put in front of users and investors without holding their breath.',
  },
  {
    title: 'Outgrowing the First Build',
    challenge: 'A growing startup had hit the ceiling of its original build. Every new feature shipped slower, and something broke on each release.',
    approach: 'A pragmatic re-architecture, introducing cloud-native patterns, cleaner boundaries, and observability, delivered in stages without stopping the roadmap.',
    outcome: 'Faster delivery, fewer incidents, and infrastructure costs down. A foundation ready for the next stage of growth.',
  },
  {
    title: 'Startup Speed, Without the Mess',
    challenge: 'A high-growth startup needed to ship faster, but its early codebase and lack of process meant constant regressions and firefighting.',
    approach: 'We embedded senior engineering leadership, introducing disciplined delivery, CI/CD, and test coverage, while keeping features shipping.',
    outcome: 'A faster, calmer delivery rhythm, fewer production incidents, and an in-house team levelled up in the process.',
  },
  {
    title: 'Senior Muscle, Without a Full Hire',
    challenge: 'A funded startup needed senior architecture and delivery leadership but was months away from hiring a full-time CTO.',
    approach: 'We stepped in as a fractional senior team, setting technical direction, unblocking delivery, and mentoring the existing engineers.',
    outcome: 'Momentum restored and the right technical calls made early, with knowledge transferred to the permanent team.',
  },
];

export const credibilityStats = [
  '15+ Years Experience Each',
  '50+ Startups Mentored via Misk Launchpad',
  'Idea to Production to Scale',
  'AWS · GCP · Azure',
];
