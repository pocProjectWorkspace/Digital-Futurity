# Digital Futurity — Website Build Specification
# Claude Code Project Instructions

> **How to use:** Place this file as `CLAUDE.md` in the root of your project directory.
> When you open Claude Code in that directory, it will automatically read these instructions.
> Then simply say: **"Build the Digital Futurity website."**

---

## PROJECT OVERVIEW

Build a complete, production-quality marketing website for **Digital Futurity** — a senior digital product and engineering consultancy. The site must feel cinematic, premium, and conversion-focused, combining consulting credibility with modern 3D visual storytelling.

**Core message:**
> Digital Futurity helps organisations design, build, modernise, and scale software products with the speed of a startup and the discipline of an enterprise delivery team.

---

## TECH STACK — USE EXACTLY THIS

```
Framework:     Next.js 14 (App Router)
Language:      TypeScript
Styling:       Tailwind CSS v3
Animation:     Framer Motion
3D:            Three.js + @react-three/fiber + @react-three/drei
Icons:         Lucide React
Fonts:         next/font — Inter (body) + Space Grotesk (headings)
Forms:         React Hook Form
Linting:       ESLint + Prettier
```

**Initialise the project with:**
```bash
npx create-next-app@latest digital-futurity --typescript --tailwind --eslint --app --src-dir
cd digital-futurity
npm install framer-motion three @react-three/fiber @react-three/drei lucide-react react-hook-form
```

---

## FILE & FOLDER STRUCTURE

```
src/
├── app/
│   ├── layout.tsx              # Root layout — fonts, metadata, navbar, footer
│   ├── page.tsx                # Home
│   ├── about/page.tsx
│   ├── capabilities/page.tsx
│   ├── industries/page.tsx
│   ├── engagement/page.tsx
│   ├── proof-points/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── SectionHeader.tsx
│   │   ├── GlowDivider.tsx
│   │   └── AnimatedReveal.tsx
│   ├── three/
│   │   ├── HeroScene.tsx       # Home hero 3D
│   │   ├── ParticleField.tsx   # Reusable particle background
│   │   ├── FloatingGrid.tsx    # Architectural grid mesh
│   │   └── OrbitalRings.tsx    # About/capabilities accent
│   └── sections/
│       ├── home/
│       │   ├── Hero.tsx
│       │   ├── TrustStrip.tsx
│       │   ├── WhyUs.tsx
│       │   ├── CapabilitiesSnapshot.tsx
│       │   ├── DeliveryLifecycle.tsx
│       │   ├── BestFitEngagements.tsx
│       │   ├── IndustriesStrip.tsx
│       │   └── HomeCTA.tsx
│       ├── about/
│       ├── capabilities/
│       ├── industries/
│       ├── engagement/
│       ├── proof-points/
│       └── contact/
└── lib/
    ├── constants.ts            # All copy, data, metadata
    └── utils.ts
```

---

## DESIGN SYSTEM

### Colour Palette — Dark Premium Theme

```typescript
// tailwind.config.ts — extend with:
colors: {
  background: '#050508',
  surface: '#0d0d14',
  'surface-2': '#13131f',
  border: '#1e1e2e',
  'border-bright': '#2a2a40',
  cyan: {
    DEFAULT: '#00d4ff',
    dim: '#00d4ff33',
    glow: '#00d4ff15',
  },
  violet: {
    DEFAULT: '#7c3aed',
    soft: '#a78bfa',
    glow: '#7c3aed20',
  },
  silver: '#94a3b8',
  white: '#f8fafc',
}
```

### Typography Scale

```
Display:   Space Grotesk, 700, tracking-tight
H1:        4xl–7xl responsive
H2:        3xl–5xl
H3:        xl–3xl
Body:      Inter, 400/500, text-silver, leading-relaxed
Caption:   sm, uppercase, tracking-widest, text-cyan
```

### Global CSS Rules

```css
/* In globals.css */
html { scroll-behavior: smooth; }
body { background: #050508; color: #f8fafc; }

/* Glow utility classes */
.glow-cyan  { box-shadow: 0 0 40px #00d4ff20, 0 0 80px #00d4ff08; }
.glow-violet { box-shadow: 0 0 40px #7c3aed20, 0 0 80px #7c3aed08; }
.text-glow  { text-shadow: 0 0 30px #00d4ff60; }

/* Glass card */
.glass {
  background: rgba(13,13,20,0.6);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.06);
}
```

### Reusable Component Specs

**Button.tsx** — two variants:
- `primary`: bg-cyan, text-black, hover scale-up with glow pulse
- `ghost`: border-cyan/30, text-cyan, hover bg-cyan/10

**AnimatedReveal.tsx** — Framer Motion wrapper:
- `initial: { opacity: 0, y: 30 }`
- `whileInView: { opacity: 1, y: 0 }`
- `viewport: { once: true, margin: '-80px' }`
- `transition: { duration: 0.7, ease: 'easeOut' }`

**SectionHeader.tsx** — props: `eyebrow`, `heading`, `subheading`, `align`

**GlowDivider.tsx** — thin horizontal line with radial cyan gradient centre

---

## NAVBAR

**File:** `src/components/layout/Navbar.tsx`

- Sticky, `position: fixed`, full-width
- On scroll > 20px: add `backdrop-blur-xl bg-background/80 border-b border-border`
- Logo: `DIGITAL FUTURITY` — Space Grotesk, bold, with a small cyan accent dot or glyph
- Nav links: Home · About · Capabilities · Industries · Engagement · Proof Points · Contact
- Primary CTA button: `Book a Consultation` → `/contact`
- Mobile: hamburger menu with slide-down drawer, same links
- Framer Motion: fade-in on mount, subtle underline on hover

---

## FOOTER

**File:** `src/components/layout/Footer.tsx`

- Background: `surface` with top border glow
- Logo + tagline: *Digital product & engineering for the future*
- Column 1 — Quick Links (all pages)
- Column 2 — Capabilities (Strategy · Architecture · Build · Operate · Scale & Govern)
- Column 3 — Contact:
  - Email: cpsutharsan@gmail.com
  - Phone: +971 56 282 9428
- Bottom bar: `© 2026 Digital Futurity. All rights reserved.`
- Subtle particle or grid background texture

---

## PAGE-BY-PAGE BUILD SPECIFICATION

### 1. HOME — `app/page.tsx`

#### Section: Hero

**3D Scene (`components/three/HeroScene.tsx`):**
- Full-screen canvas, `position: absolute`, behind content
- Scene: floating geometric cluster — mix of icosahedron, torus knot, and octahedron wireframes
- Animate with slow rotation on all axes + gentle drift
- Add `<fog>` for depth
- Ambient + point lights in cyan and violet
- `PointMaterial` particle field in background — 3000 particles, small, cyan-tinted
- Reduce geometry complexity on mobile (`useThree` to check viewport)

**Copy:**
```
EYEBROW: Senior Digital Product & Engineering Consultancy

HEADLINE: Design, Build, and Scale
          Digital Products for What's Next

SUBHEADLINE: Digital Futurity helps organisations turn ambitious ideas into
             scalable digital platforms — through strategy, architecture,
             engineering, cloud delivery, and operational excellence.

CTA 1: Book a Consultation  →  /contact
CTA 2: Explore Capabilities →  /capabilities
```

**Layout:** Two-column on desktop (copy left, 3D right) → stacked on mobile

#### Section: TrustStrip

Three stats in a glassmorphism horizontal bar:
```
[ 15–18+ Years Experience Each ] | [ 50+ Startups Mentored ] | [ Middle East & Asia ]
```
Animated number count-up on scroll entry (Framer Motion + counter logic).

#### Section: WhyUs

Heading: `Why Clients Choose Digital Futurity`

Four cards in a 2×2 grid. Each card: icon + heading + 2-sentence description.

```
1. End-to-End Ownership
   From product discovery through cloud delivery and optimisation — one
   senior team accountable for the full lifecycle.

2. Business-First Engineering
   We align technical decisions directly to commercial outcomes, ensuring
   every build decision serves a measurable business objective.

3. Startup Speed, Enterprise Discipline
   Agile delivery velocity combined with the governance rigor that
   complex organisations require.

4. Cloud-Native by Default
   Cloud-first, automation-first architecture for platforms that scale
   reliably and cost-efficiently from day one.
```

#### Section: DeliveryLifecycle

Heading: `End-to-End Across the Delivery Lifecycle`

Animated horizontal pipeline (desktop) / vertical accordion (mobile).
Five stages with icons and bullet points:

```
Strategy        → Architecture    → Build           → Operate         → Scale & Govern
Product         Solution design   Full-stack eng    CI/CD pipelines   Program delivery
discovery       Cloud arch        Platform dev      Observability     Governance
Roadmaps        Security-by-      UX/UI impl        Reliability       Platform
Stakeholder     design            Test automation   Perf & cost opt   modernisation
alignment       API patterns                                          PMO
```

On desktop: arrow connectors between stages, subtle cyan glow on hover.

#### Section: CapabilitiesSnapshot

Heading: `Core Strengths`

Four capability pills / badge cards:
- Product Innovation & 0–1
- Enterprise Program Leadership
- Architecture & Engineering
- Cloud & DevOps Expertise

#### Section: BestFitEngagements

Heading: `Best Fit Engagements`

Tag-cloud style grid of engagement types:
```
Product Builds from 0–1  ·  Platform Modernisation  ·  Cloud Transformation
Architecture Advisory    ·  Process Redesign         ·  Embedded Leadership Support
AI Governance & Architecture
```

#### Section: IndustriesStrip

Heading: `Sectors We Serve`

Horizontal strip of four industry cards with icon + name:
- Telecom
- Banking & Financial Services
- Education
- Enterprise Transformation

#### Section: HomeCTA

Full-width dark section with subtle 3D particle background:
```
HEADING: Let's Build the Future Together

COPY: Whether you're launching a new product, modernising a platform, or
      scaling an existing system — Digital Futurity brings the seniority,
      architecture, and delivery capability to make it happen.

CTA: Start the Conversation → /contact
```

---

### 2. ABOUT — `app/about/page.tsx`

**Hero:** Page hero with `FloatingGrid.tsx` 3D background (slow-moving wireframe grid landscape).

#### Section: Intro
```
EYEBROW: Who We Are

HEADING: Technology Leadership with Delivery Depth

BODY: Digital Futurity is a senior digital product and engineering team
      with 15–18+ years of experience each across product innovation,
      enterprise architecture, and cloud delivery. We operate across
      the Middle East and Asia, partnering with enterprises, founders,
      and transformation leaders who need more than execution — they
      need seniority, judgement, and accountability at every level of
      the engagement.
```

#### Section: WhyWeExist
```
HEADING: Built for Complex Transformation

BODY: We exist because complex organisations often choose between strategic
      advisors who can't build, or engineering teams that can't think
      strategically. Digital Futurity bridges that gap — combining product
      vision, architectural rigour, and hands-on delivery capability in a
      single senior team.
```

#### Section: Philosophy
```
HEADING: Our Delivery Philosophy

QUOTE: "Transformative products are built at the intersection of clarity,
        architectural discipline, and execution rigour."

BODY: We combine strategic product thinking, strong engineering foundations,
      agile delivery practices, and a cloud-first operating mindset. This
      means our clients get platforms that are not only delivered — they
      are designed to last and built to scale.
```

#### Section: Values

Five value cards:
```
1. Clarity Before Complexity
   We design solutions that reduce ambiguity, not add to it.

2. Architecture That Scales
   Foundations built for growth from the first line of architecture.

3. Delivery With Accountability
   We take full ownership — outcomes, not activity.

4. Business Outcomes Over Activity
   Everything we build maps to a measurable business objective.

5. Modern Engineering by Default
   Cloud-native, automated, and observable — by design.
```

#### Section: Experience
```
HEADING: Where We've Delivered

Three regional/sector badges:
- Middle East  [ Telecom · Banking · Education · Enterprise ]
- Asia         [ Product Builds · Platform Modernisation ]
- Cross-sector [ Architecture · Cloud · DevOps · Governance ]
```

#### Section: CTA
`Ready to work with a senior team that delivers?` → `Book a Consultation`

---

### 3. CAPABILITIES — `app/capabilities/page.tsx`

**Hero:** Animated pipeline diagram (SVG or CSS, no heavy 3D needed — keep it subtle).

Six service categories. Each rendered as a full-width expandable or tabbed card.

**Layout:** Left sidebar tab navigation (desktop) → accordion (mobile)

```
SERVICE 1: Product Strategy & 0–1 Innovation
─────────────────────────────────────────────
Intro:
From the first whiteboard to market launch, we help you define what to build,
why it matters, and how to bring it to life with the right architecture and
delivery approach.

Key Outcomes:
· Validated product concept with clear commercial framing
· Prioritised roadmap aligned to business objectives
· Stakeholder-aligned product vision and scope
· 0–1 launch delivery with speed and engineering discipline

Sample Deliverables:
· Product discovery workshops
· Opportunity and market framing
· Product roadmap and release planning
· MVP definition and launch strategy

Ideal For:
Founders launching a new product · Enterprise teams spinning out
a new capability · Innovation leads validating a platform idea

────────────────────────────────────────────────────────────────

SERVICE 2: Enterprise Architecture & Solution Design
─────────────────────────────────────────────────────
Intro:
Great products are built on great architecture. We design systems that are
secure, scalable, and integration-ready — giving your engineering teams a
clear technical blueprint to build against.

Key Outcomes:
· Future-proof architecture aligned to business scale
· Security-by-design embedded from the ground up
· Integration patterns that reduce complexity and coupling
· Clear architectural decision records and documentation

Sample Deliverables:
· Solution architecture documents
· Cloud architecture blueprints
· API and integration design patterns
· Security architecture review

Ideal For:
Organisations modernising legacy platforms · Teams preparing
for scale · CTOs needing senior architecture leadership

────────────────────────────────────────────────────────────────

SERVICE 3: Full-Stack Platform Engineering
──────────────────────────────────────────
Intro:
We don't just design it — we build it. Our engineering team delivers
full-stack platform development with production-grade quality, test
automation, and UX implementation aligned to the product vision.

Key Outcomes:
· Production-ready platform delivered with engineering rigour
· Test-automated, observable, and maintainable codebase
· UX implementation aligned to design intent
· Agile delivery with consistent sprint cadence

Sample Deliverables:
· Full-stack application development
· Platform and backend services
· UX/UI implementation
· Test automation suite

Ideal For:
Product teams needing a senior engineering partner ·
Organisations without an in-house build capability ·
Founders moving from MVP to production

────────────────────────────────────────────────────────────────

SERVICE 4: Cloud, DevOps & Reliability
───────────────────────────────────────
Intro:
Modern platforms require modern operations. We design and implement
cloud-native delivery pipelines, observability stacks, and reliability
practices that keep your platform resilient, fast, and cost-efficient.

Key Outcomes:
· Automated CI/CD reducing release risk and cycle time
· Observable systems with meaningful alerting and dashboards
· Reliability practices reducing unplanned downtime
· Infrastructure costs optimised without compromising performance

Sample Deliverables:
· CI/CD pipeline design and implementation
· Observability and monitoring stack
· Cloud infrastructure architecture
· Cost optimisation review

Ideal For:
Engineering teams scaling their delivery · Organisations
moving to cloud-native · Platforms needing reliability uplift

────────────────────────────────────────────────────────────────

SERVICE 5: Program Delivery, Governance & Modernisation
─────────────────────────────────────────────────────────
Intro:
Complex digital programs need more than a project manager. We bring
senior delivery leadership, governance frameworks, and platform
modernisation expertise to programs that require both rigour and momentum.

Key Outcomes:
· Program delivered on time with clear governance and reporting
· Stakeholder confidence through structured communication
· Legacy platform modernised with minimal disruption
· Documentation and enablement enabling long-term ownership

Sample Deliverables:
· Program governance framework
· Executive reporting and dashboards
· Platform modernisation roadmap and delivery
· Knowledge transfer and enablement

Ideal For:
Enterprises running complex transformation programs ·
CIOs managing multi-workstream digital programs ·
Teams modernising ERP, CRM, or custom platforms

────────────────────────────────────────────────────────────────

SERVICE 6: AI Governance & Architecture
────────────────────────────────────────
Intro:
AI adoption is accelerating — and so is the risk of getting it wrong.
We help organisations design AI systems responsibly, with architecture
that is explainable, governed, and integrated into enterprise workflows.

Key Outcomes:
· AI use cases assessed, prioritised, and governed
· Architecture that supports responsible AI deployment
· Integration patterns connecting AI to existing systems
· Governance frameworks aligned to regulatory expectations

Sample Deliverables:
· AI opportunity and readiness assessment
· AI solution architecture
· Governance and risk framework for AI
· Integration design for AI-enabled workflows

Ideal For:
Enterprise leaders exploring AI at scale ·
Organisations needing a structured AI governance layer ·
CTOs designing AI into core platform strategy
```

---

### 4. INDUSTRIES — `app/industries/page.tsx`

Four industry sections, each with: eyebrow label, heading, contextual paragraph, how we help, relevant services list.

```
TELECOM
───────
Context: Telecom organisations face mounting pressure to modernise
legacy infrastructure, launch new digital products, and compete with
agile challengers — while maintaining the reliability their customers
depend on. Transformation requires both technical depth and program
delivery discipline.

How We Help: We support telecom clients with architecture modernisation,
new product builds on cloud-native platforms, DevOps capability uplift,
and governance of complex multi-vendor programs.

Services: Platform Modernisation · Cloud Architecture · Program Delivery
          · Full-Stack Engineering · DevOps & Reliability

BANKING & FINANCIAL SERVICES
──────────────────────────────
Context: Financial services organisations need to innovate faster without
compromising on compliance, security, or resilience. Whether building new
digital products or modernising core systems, the margin for error is low
and the expectations from both regulators and customers are high.

How We Help: We bring security-by-design architecture, regulated environment
delivery experience, and product engineering rigour to financial services
transformation — from digital product launches to platform overhaul.

Services: Solution Architecture · Security-by-Design · Product Builds
          · Governance Frameworks · AI Governance & Architecture

EDUCATION
──────────
Context: Education organisations are navigating rapid digitalisation —
from student experience platforms to administrative system modernisation
and data-driven operations. The challenge is building modern platforms
that serve diverse user needs while managing budget constraints and
legacy complexity.

How We Help: We help education institutions design and build modern digital
products — from student portals to data platforms — with a focus on
usability, integration, and cost-efficient cloud delivery.

Services: Product Strategy · Full-Stack Engineering · UX/UI Delivery
          · Cloud & DevOps · Platform Modernisation

ENTERPRISE TRANSFORMATION
───────────────────────────
Context: Large enterprises undergoing digital transformation need more than
a strategy — they need delivery. Complex programs spanning multiple
business units, vendors, and platforms require senior program leadership,
clear governance, and the engineering capability to execute.

How We Help: We embed with enterprise transformation programs as a senior
delivery partner — bringing architecture leadership, engineering capability,
and program governance to complex, multi-stakeholder transformations.

Services: Enterprise Program Delivery · Architecture Advisory
          · Embedded Leadership · Platform Modernisation · AI Governance
```

---

### 5. ENGAGEMENT MODELS — `app/engagement/page.tsx`

Five models as interactive cards. On hover/click, expand to show full detail.

```
MODEL 1: Strategic Advisory
────────────────────────────
What It Is: A structured advisory engagement where we provide senior
product, architecture, and delivery guidance — without embedding
in day-to-day execution.

When It Fits: You have an in-house team but need senior strategic
input at key decision points — architecture reviews, product direction,
technology selection, or governance design.

What Clients Get:
· Regular senior advisory sessions
· Architecture and product decision support
· Documented recommendations and options analysis
· Access to senior expertise without a full-team commitment

Expected Outcomes: Sharper decisions, reduced technical risk,
and senior-level confidence in your product and technology direction.

────────────────────────────────────────────────────────────────

MODEL 2: Embedded Leadership Support
──────────────────────────────────────
What It Is: A senior Digital Futurity practitioner embedded into
your program or product team — functioning as a fractional CTO,
Lead Architect, Delivery Director, or Product Lead.

When It Fits: You need senior leadership in a specific role but
aren't ready to hire full-time — or you need to augment an existing
team with a credible, experienced practitioner immediately.

What Clients Get:
· Full embedded senior practitioner (part-time or full-time)
· Hands-on leadership of the relevant domain
· Seamless integration with your existing team
· Knowledge transfer to your permanent team

Expected Outcomes: Senior capability delivered quickly, with
meaningful transfer of knowledge and practice to your organisation.

────────────────────────────────────────────────────────────────

MODEL 3: End-to-End Product Build
───────────────────────────────────
What It Is: A full product build engagement where Digital Futurity
takes end-to-end responsibility — from discovery through architecture,
engineering, testing, and launch.

When It Fits: You have a product to build but no in-house delivery
team, or you want a senior team fully accountable for taking the
product from concept to production.

What Clients Get:
· Complete product delivery team (strategy + arch + engineering + QA)
· Regular sprint delivery with consistent visibility
· Architecture and UX aligned from day one
· Production-ready launch with operational handover

Expected Outcomes: A market-ready digital product delivered with
engineering rigour, on a defined timeline and scope.

────────────────────────────────────────────────────────────────

MODEL 4: Modernisation Partnership
────────────────────────────────────
What It Is: A structured engagement to assess, plan, and execute
platform modernisation — replacing, re-architecting, or re-platforming
legacy systems progressively.

When It Fits: You are running a platform that is slowing you down —
difficult to change, expensive to maintain, or unable to support your
growth requirements.

What Clients Get:
· Current state assessment and modernisation options analysis
· Progressive modernisation roadmap
· Delivery of the modernisation in structured phases
· Risk management and business continuity planning

Expected Outcomes: A modernised platform that reduces operational
burden, accelerates delivery velocity, and scales with your business.

────────────────────────────────────────────────────────────────

MODEL 5: Architecture & Delivery Acceleration
───────────────────────────────────────────────
What It Is: A time-boxed engagement focused on accelerating a specific
outcome — architecture design, delivery velocity uplift, cloud migration
planning, or DevOps capability build.

When It Fits: You need a defined outcome delivered quickly by a senior
team, without committing to a long engagement.

What Clients Get:
· Clear scope, timeline, and delivery commitment
· Senior practitioner delivery
· Documented outputs ready for ongoing use
· Option to extend if further support is needed

Expected Outcomes: A specific, high-value output delivered with
speed and seniority — in weeks, not months.
```

**Best Fit Engagements section** at the bottom — same tag-cloud style as homepage.

---

### 6. PROOF POINTS — `app/proof-points/page.tsx`

**No client names required.** Use capability-led narrative proof points.

**3D accent:** `OrbitalRings.tsx` — subtle node-link constellation in background.

Five proof point cards, each: `Challenge → Approach → Outcome` structure.

```
PROOF POINT 1: From Idea to Market — 0–1 Product Launch
─────────────────────────────────────────────────────────
Challenge: A founder-led venture needed to move from an early-stage
concept to a production-ready digital product within a constrained
timeline, without a technical co-founder or in-house engineering team.

Approach: Digital Futurity led the full engagement — product discovery,
roadmap definition, solution architecture, and full-stack engineering —
delivering an MVP with clear extensibility for future phases.

Outcome: A market-ready product launched within the target timeline,
with a clean architecture and documented codebase ready for an
in-house team to take over.

────────────────────────────────────────────────────────────────

PROOF POINT 2: Full-Stack Platform Development at Enterprise Scale
────────────────────────────────────────────────────────────────────
Challenge: An enterprise organisation needed a custom platform built
to support complex operational workflows across multiple business units,
integrated with existing enterprise systems.

Approach: End-to-end platform development — from solution architecture
through full-stack engineering, integration design, and test automation —
with regular sprint delivery and stakeholder reporting.

Outcome: A production-grade platform deployed across business units,
with integrations live and a test-automated codebase enabling
ongoing feature delivery at pace.

────────────────────────────────────────────────────────────────

PROOF POINT 3: Scalable Architecture for a Growing Platform
─────────────────────────────────────────────────────────────
Challenge: A scaling business had accumulated significant technical
debt and was approaching the limits of their current architecture —
slowing delivery velocity and creating reliability risk.

Approach: A current-state architecture review followed by a progressive
re-architecture plan — introducing cloud-native patterns, API abstraction
layers, and observability without disrupting ongoing business operations.

Outcome: Platform delivery velocity improved, infrastructure costs
reduced, and a scalable architectural foundation established for
the next phase of product growth.

────────────────────────────────────────────────────────────────

PROOF POINT 4: Agile Delivery in a Startup Environment
────────────────────────────────────────────────────────
Challenge: A high-growth startup needed to accelerate delivery velocity
without sacrificing engineering quality, as their early codebase
struggled to support the pace of product iteration required.

Approach: Embedded senior engineering and delivery leadership —
introducing disciplined agile practices, CI/CD automation, and
test coverage — while continuing to deliver features at startup speed.

Outcome: Delivery cadence significantly improved, production incidents
reduced, and the engineering team uplifted in both capability and practice.

────────────────────────────────────────────────────────────────

PROOF POINT 5: Enterprise Program Governance & Modernisation
──────────────────────────────────────────────────────────────
Challenge: A large enterprise running a multi-workstream digital
transformation program lacked senior delivery governance — leading
to misaligned priorities, inconsistent reporting, and stakeholder
confidence issues.

Approach: Digital Futurity embedded as senior delivery and governance
leadership — establishing program governance frameworks, executive
reporting, and cross-workstream coordination structures.

Outcome: Program clarity restored, stakeholder confidence rebuilt,
and the transformation accelerated with consistent delivery rhythm
and measurable progress tracking.
```

**Credibility Strip** — four stat/statement cards at the bottom:
```
[ 15–18+ Years Experience ]  [ End-to-End Delivery ]
[ Middle East & Asia ]       [ Product + Arch + Engineering ]
```

---

### 7. CONTACT — `app/contact/page.tsx`

**Layout:** Two-column — contact details left, form right.

**Subtle 3D:** Calm glowing sphere or soft particle ambient scene.

```
EYEBROW: Get in Touch

HEADING: Start the Conversation

BODY: Whether you are shaping a new product, modernising an existing
      platform, or looking for senior delivery leadership — Digital
      Futurity can help you move with clarity and momentum.

CONTACT DETAILS:
  Email:    cpsutharsan@gmail.com
  Phone:    +971 56 282 9428
  Response: We typically respond within 1 business day.

FORM FIELDS (React Hook Form + validation):
  · Name               [required]
  · Organisation       [optional]
  · Email              [required, email format]
  · Phone              [optional]
  · How can we help?   [textarea, required]
  · Submit: "Send Message"

POST-SUBMIT: Show inline success state — no page reload.
  "Thank you. We'll be in touch within 1 business day."
```

---

## SEO METADATA

Define all metadata in `lib/constants.ts` and apply via Next.js `generateMetadata`.

```typescript
export const metadata = {
  home: {
    title: 'Digital Futurity | Digital Product & Engineering Consultancy',
    description: 'Senior digital product and engineering consultancy helping organisations design, build, modernise, and scale software platforms — Middle East & Asia.',
    og: { title: 'Digital Futurity', description: 'Build the future with a senior digital product and engineering team.' }
  },
  about: {
    title: 'About | Digital Futurity',
    description: '15–18+ years of experience in product innovation, enterprise architecture, and cloud delivery across the Middle East and Asia.',
    og: { title: 'About Digital Futurity', description: 'Technology leadership with delivery depth.' }
  },
  capabilities: {
    title: 'Capabilities | Digital Futurity',
    description: 'End-to-end digital product and engineering capabilities — from product strategy and architecture to cloud delivery, DevOps, and AI governance.',
    og: { title: 'Capabilities | Digital Futurity', description: 'Full-lifecycle digital product and engineering services.' }
  },
  industries: {
    title: 'Industries | Digital Futurity',
    description: 'Serving telecom, banking, education, and enterprise transformation clients across the Middle East and Asia.',
    og: { title: 'Industries | Digital Futurity', description: 'Sector-relevant digital product and engineering expertise.' }
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
}
```

---

## 3D COMPONENT SPECIFICATIONS

### `HeroScene.tsx` (Home)
```
- @react-three/fiber Canvas, camera position [0, 0, 5]
- Scene: 3–5 floating wireframe geometries (IcosahedronGeometry, TorusKnotGeometry, OctahedronGeometry)
- Each geometry: slow random rotation on all axes (useFrame, delta-based)
- Materials: MeshBasicMaterial wireframe: true, color: #00d4ff, opacity 0.3–0.6
- 2000–3000 background particles: Points + PointsMaterial, color #ffffff, size 0.015
- Ambient light: intensity 0.5, violet tint
- Point light: position [2, 2, 2], cyan, intensity 1.5
- Performance: useThree to reduce geometry segments on mobile

```

### `ParticleField.tsx` (Reusable)
```
- Configurable: count, color, size, speed
- Random position sphere distribution
- useFrame: gentle drift + rotation
- Used as ambient background on About, Proof Points, Contact
```

### `FloatingGrid.tsx` (About)
```
- PlaneGeometry, 20x20 segments, wireframe
- Position: [0, -2, -5], rotation: [-0.4, 0, 0]
- Animate: slow Y sine wave movement
- Color: #7c3aed (violet), opacity 0.15
```

### `OrbitalRings.tsx` (Proof Points)
```
- 3 TorusGeometry rings, different sizes, tilted at different angles
- Slow rotation on different axes
- Color: gradient from cyan to violet (use vertex colors or two separate meshes)
- Used as a subtle corner accent, not full-screen
```

---

## ANIMATION PATTERNS

All scroll-triggered animations use `AnimatedReveal.tsx` wrapper.

**Section entry:** `opacity: 0 → 1`, `y: 30 → 0`, duration 0.7s, ease out
**Card stagger:** `staggerChildren: 0.1` on container
**Navbar scroll:** Framer Motion `useScroll` to drive background opacity
**Number countup:** Custom hook using `useInView` + requestAnimationFrame
**Tab/accordion:** `AnimatePresence` + `layoutId` for smooth transitions
**Button hover:** `whileHover: { scale: 1.03 }`, glow pulse on primary
**Pipeline stages:** SVG path draw animation using `pathLength` motion value

---

## PERFORMANCE REQUIREMENTS

- Use `dynamic(() => import('./HeroScene'), { ssr: false })` for all Three.js components
- Add `Suspense` boundaries with skeleton fallbacks
- `loading="lazy"` on all images
- Use `will-change: transform` only on actively animating elements
- Three.js canvas: set `dpr={[1, 1.5]}` max pixel ratio
- On mobile: reduce particle count by 50%, remove complex geometries

---

## BUILD SEQUENCE (follow this order)

```
1.  npx create-next-app + install dependencies
2.  Configure tailwind.config.ts with design tokens
3.  Set up globals.css with base styles and utilities
4.  Build layout: Navbar.tsx + Footer.tsx
5.  Build reusable UI: Button, Card, SectionHeader, GlowDivider, AnimatedReveal
6.  Build Three.js components: ParticleField → FloatingGrid → HeroScene → OrbitalRings
7.  Build Home page section by section (Hero last — test 3D carefully)
8.  Build About page
9.  Build Capabilities page
10. Build Industries page
11. Build Engagement Models page
12. Build Proof Points page
13. Build Contact page with form
14. Set up lib/constants.ts with all metadata
15. Add generateMetadata to all pages
16. Final pass: responsive breakpoints, mobile nav, performance audit
17. Run `npm run build` — resolve all TypeScript and lint errors
```

---

## QUALITY BAR

Before considering the build complete, verify:

- [ ] `npm run build` passes with zero errors
- [ ] All pages render correctly on mobile (375px), tablet (768px), desktop (1440px)
- [ ] Navbar is sticky and scroll behaviour works
- [ ] All CTAs link to correct pages
- [ ] Contact form validates and shows success state
- [ ] 3D scenes don't block page load — Suspense boundaries in place
- [ ] All copy matches the specification above exactly
- [ ] No placeholder lorem ipsum text anywhere
- [ ] Motion is tasteful — nothing distracting or excessive
- [ ] Dark theme is consistent across all pages
- [ ] Footer renders correctly on all pages

---

*This file is the single source of truth for the Digital Futurity website build.*
*Follow the specifications precisely. Do not invent capabilities, client names, or copy not included above.*
