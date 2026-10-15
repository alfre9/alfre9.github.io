/*
 * Single source of truth for everything the site says.
 *
 * Every block is tagged with where its claims come from:
 *   [résumé]        — supported by "Alfred (KarKen) Chang_Product Manager.pdf"
 *   [self-reported] — Alfred's own figure or description, not independently verified
 *   [draft]         — proposed copy written for this site; needs Alfred's approval
 *   [hypothesis]    — an independent product hypothesis, not a validated result
 *
 * See CONTENT_NOTES.md for the approval checklist. Optional URLs set to `null`
 * are omitted from the page entirely (no dead "#" links).
 */

export type Accent = 'sky' | 'lime' | 'coral' | 'blue' | 'paper' | 'purple' | 'turquoise' | 'yellow' | 'orange';

/* ------------------------------------------------------------------ */
/* Identity + links                                                     */
/* ------------------------------------------------------------------ */

export const site = {
  name: 'Alfred Chang',
  role: 'Staff Product Manager', // [résumé]
  company: 'Shutterfly', // [résumé]
  email: 'Alfred_chang@outlook.com',
  /** `null` hides every LinkedIn link. */
  linkedinUrl: 'https://www.linkedin.com/in/alfred-karken-chang/' as string | null,
  linkedinHandle: 'in/alfred-karken-chang',
  /**
   * Public résumé file, e.g. '/Alfred-Chang-Resume.pdf' placed in /public.
   * The current PDF includes a phone number — export a copy without it first.
   * `null` hides the header and contact résumé links.
   */
  resumeUrl: null as string | null,
  /**
   * Bolt Visual Design prototype. '/prototype/index.html' serves the copy built by
   * `npm run bundle-prototype`. Swap for an external URL if you host it elsewhere,
   * or set `null` to hide the "Open the prototype" button.
   */
  prototypeUrl: '/prototype/index.html' as string | null,
};

export const nav = [
  { id: 'journey', label: 'My journey' },
  { id: 'beyond-work', label: 'Beyond work' },
  { id: 'how-i-think', label: 'How I think' },
  { id: 'work', label: 'Work' },
  { id: 'contact', label: 'Contact' },
] as const;

/* ------------------------------------------------------------------ */
/* Hero                                                                 */
/* ------------------------------------------------------------------ */

export const hero = {
  /** The hello. `highlight` gets the lime marker. */
  hello: ['Hi, I’m', 'Alfred.'],
  highlight: 'Alfred.',
  // Alfred's own intro (2026-10-15), kept word for word
  lead: 'Staff Product Manager driving AI-powered product growth and platform modernization for Creation, Photos.',
  /**
   * Alfred's top three, shown as stat tiles. `detail` shows on hover, keyboard focus, or tap.
   * Figures and details from Alfred (2026-10-15), lightly copy-edited. [self-reported]
   */
  wins: [
    {
      value: '$20M',
      unit: 'ARR',
      label: 'AI commerce',
      icon: 'chat',
      accent: 'lime',
      detail: 'Conversational AI that helps customers find products, get answers, and manage their orders.',
    },
    {
      value: '$40M',
      unit: 'ARR',
      label: 'AI photo augmentation',
      icon: 'wand',
      accent: 'sky',
      detail: 'Integrated Google Gemini tools for photo expansion, filters, and magic eraser.',
    },
    {
      value: '$146M',
      unit: 'ARR',
      label: 'Replatforming',
      icon: 'blocks',
      accent: 'coral',
      detail: 'Rebuilt a 20-year-old platform that drives $2B in revenue. A/B testing at launch showed a 13.9% revenue lift.',
    },
  ] as { value: string; unit: string; label: string; icon: 'chat' | 'wand' | 'blocks'; accent: Accent; detail: string }[],
  /** Cropped from "profile picture.jpeg" (head and shoulders), served from /public. */
  photo: {
    src: '/alfred-chang.jpg',
    alt: 'Alfred Chang, smiling, wearing glasses and a dark patterned shirt',
    width: 640,
    height: 800,
  },
  current: 'Currently building at Shutterfly',
  tagline: 'Problem-first. Prioritize. Built for impact.',
  primaryCta: { label: 'Explore my journey', href: '#journey' },
  secondaryCta: { label: 'See what I’m building', href: '#work' },
};

/* ------------------------------------------------------------------ */
/* How I think                                                          */
/* ------------------------------------------------------------------ */

export type LensRegion = 'person' | 'experience' | 'system' | 'test';

export const thinking = {
  heading: 'Before the solution, find the real problem.',
  body: [
    'A feature request is a starting point—not a diagnosis. I want to understand what someone is trying to accomplish, where the experience breaks down, and why that friction exists before deciding what to build.',
    'Problem-first doesn’t mean slow. It means reducing the chance that we move quickly in the wrong direction. I use prototypes and experiments to test the framing as well as the solution.',
  ],
  // [draft] gist is always visible; detail appears when a question is selected
  lens: [
    {
      region: 'person',
      question: 'What is the person trying to do?',
      gist: 'The outcome behind the request.',
      detail:
        'A request often arrives already shaped as a solution. I try to name the outcome underneath it—what “done” looks like for the person—so we can judge any solution against that.',
    },
    {
      region: 'experience',
      question: 'Where does the experience break?',
      gist: 'The exact step where people struggle.',
      detail:
        'I look for the moment people hesitate, drop off, or work around the product. Funnel data shows where it happens; talking with customers and watching real usage helps explain why.',
    },
    {
      region: 'system',
      question: 'What is causing it across the system?',
      gist: 'The cause, not just the symptom.',
      detail:
        'The visible problem is often produced somewhere else—a platform constraint, a data gap, a handoff between teams, or a policy. Fixing only the surface tends to bring the problem back.',
    },
    {
      region: 'test',
      question: 'What is the smallest useful thing we can test?',
      gist: 'A fast, honest check before a big bet.',
      detail:
        'Before committing a roadmap, I look for the cheapest way to learn whether the framing is right—an experiment, a prototype, or a narrow release—and decide up front what result would change my mind.',
    },
  ] as { region: LensRegion; question: string; gist: string; detail: string }[],
  principles: [
    { label: 'Evidence', text: 'Evidence tells me what is happening.', accent: 'sky' },
    { label: 'Judgment', text: 'Judgment helps me choose what to do next.', accent: 'lime' },
    { label: 'Building', text: 'Building helps me find out whether I’m right.', accent: 'coral' },
  ] as { label: string; text: string; accent: Accent }[],
};

/* ------------------------------------------------------------------ */
/* Career journey — résumé dates, plus Paradox AI (Alfred, not on résumé) */
/* ------------------------------------------------------------------ */

export interface Role {
  title: string;
  /** Short title for the overview chart, e.g. 'Associate PM'. */
  short?: string;
  /** 'YYYY-MM' */
  start: string;
  /** 'YYYY-MM', or null for Present */
  end: string | null;
  highlights: string[]; // [résumé]
}

export interface Milestone {
  id: string;
  company: string;
  short: string;
  accent: Accent;
  roles: Role[];
  context: string; // company description
  theme: string; // [draft] narrative theme
  workedOn: string; // [résumé], condensed
  /** One line on what the role taught me. Shown first on the card. */
  perspective: string;
  /** The headline result or two. Kept short on purpose. */
  accomplishments: string[];
}

export const journey = {
  heading: 'The path that shaped my product judgment.',
  intro: '7+ years of identifying problems.', // [draft]
  milestones: [
    {
      // [self-reported] Alfred, 2026-10-14. Not on the résumé.
      id: 'paradox',
      company: 'Paradox AI',
      short: 'Paradox AI',
      accent: 'sky',
      roles: [
        {
          title: 'Product Management Intern',
          short: 'Intern',
          start: '2019-03',
          end: '2019-09',
          highlights: [],
        },
      ],
      context: 'Paradox builds an AI assistant for recruiters. In 2019, NLP was the main technology behind conversational AI.',
      theme: 'AI assistant for Recruiters, before LLM',
      workedOn:
        'Decision-mapping trees and reinforcement learning for the assistant, and client onboarding for McHire, McDonald’s AI hiring assistant, so hiring managers could ask any HR-related question.',
      perspective: 'I fell in love with building. AI is cool.',
      accomplishments: ['Enabled 13k McDonald’s locations to hire with an AI solution, and onboarded those users with AI too.'],
    },
    {
      id: 'benq',
      company: 'BenQ America Corp.',
      short: 'BenQ',
      accent: 'purple',
      roles: [
        {
          title: 'Associate Product Manager – Google Jamboard',
          short: 'Associate PM',
          start: '2019-09',
          end: '2020-09',
          highlights: [
            'Managed a high-profile partnership product with Google, contributing to $5M in hardware revenue and more than $1M in ARR.',
            'Executed go-to-market and localization strategy for 9 new products in the North American market.',
          ],
        },
      ],
      context: 'BenQ’s B2B team partners with Google’s Jamboard to provide a digital whiteboard experience for corporate offices.',
      theme: 'Google Jamboard - Meeting room solutions',
      workedOn: 'The Jamboard partnership product with Google, plus go-to-market and localization for 9 new products in North America.',
      // [draft]
      perspective: 'Gathering Feedback through sales, fulfillment and support channels.',
      // [self-reported] Alfred, 2026-10-14
      accomplishments: ['Executed the go-to-market and localization strategy for 9 new product launches in North America, opening new segments of the business.'],
    },
    {
      id: 'eyesbox',
      company: 'Eyesbox AI',
      short: 'Eyesbox AI',
      accent: 'coral',
      roles: [
        {
          title: 'Founder/CEO',
          short: 'Founder',
          start: '2020-03',
          end: '2021-08',
          highlights: [
            'Took a smart IoT camera for refrigerators from concept to a launched mobile app on the Apple App Store and Google Play.',
            'Led a cross-functional team of 8 engineers across mobile, hardware, and AI.',
            'Pitched to more than 50 investors and secured a $10,000 grant.',
          ],
        },
      ],
      context: 'Eyesbox AI built a smart IoT camera for refrigerators, designed to reduce food waste by improving everyday refrigerator use.',
      theme: 'Smart Camera for Refrigerator',
      workedOn: 'Founded the company and took it from concept to a launched app across hardware, AI, and mobile.',
      // [draft]
      perspective: 'Startups are hardwork, talent makes or breaks your journey.',
      // [self-reported] Alfred, 2026-10-14
      accomplishments: ['Led and mentored a team of 8 engineers across app development, hardware, and AI image recognition.'],
    },
    {
      id: 'smartrent',
      company: 'SmartRent',
      short: 'SmartRent',
      accent: 'turquoise',
      roles: [
        {
          title: 'Associate Product Manager II – Self-guided tour',
          short: 'Associate PM II',
          start: '2021-08',
          end: '2022-12',
          highlights: [
            'Drove a 400% increase in user engagement for the Self-Guided Tour product, scaling it to more than 1 million users within 6 months.',
            'Generated $1.5M in new revenue with a scalable API service integrated with key industry platforms, adding 100,000+ new properties in six months.',
            'Turned features built for rapid growth into scalable solutions, resulting in $500,000 in monthly operational savings.',
          ],
        },
      ],
      context: 'SmartRent provides smart home automation, enabling remote control of IoT devices in homes and buildings.',
      theme: 'Self-guided Tour, Smart Home as a Service Platform',
      workedOn: 'The Self-Guided Tour product: new-market adaptation features, an API service for industry platforms, and hardening growth-era features.',
      // [draft]
      perspective: 'Good product solves a problem. Product led growth happens when the solution you provided is wanted by others.',
      // [self-reported] Alfred, 2026-10-14
      accomplishments: ['Grew from 250k to 1 million users within 6 months.', 'Launched an API-as-a-service business yielding $1.5M in ARR.'],
    },
    {
      id: 'brightfi',
      company: 'BrightFi',
      short: 'BrightFi',
      accent: 'yellow',
      roles: [
        {
          title: 'Founding Product Manager',
          short: '1st PM Hired',
          start: '2022-12',
          end: '2023-03',
          highlights: [
            'Grew product adoption by 300% with a strategy focused on product-market fit for an Employee Retention Credit (ERC) tax product.',
            'Identified a critical usability bottleneck in form intake through a targeted product experiment; the solution was projected to accelerate customer adoption by 4 weeks.',
            'Partnered daily with the COO and CRO to keep product vision and execution aligned with business and revenue goals.',
          ],
        },
      ],
      context: 'BrightFi provides fintech solutions to community banks and credit unions.',
      theme: 'BaaS for Community bank and Credit union',
      workedOn: 'Product strategy for an Employee Retention Credit (ERC) tax product, working daily with the COO and CRO.',
      // [self-reported] Alfred, 2026-10-14
      perspective: 'How to do more with less? By solving the right problems.',
      accomplishments: ['300% growth in product adoption and lead generation.'],
    },
    {
      id: 'shutterfly',
      company: 'Shutterfly',
      short: 'Shutterfly',
      accent: 'orange',
      roles: [
        {
          title: 'Staff Product Manager - Creation, Photo, AI Commerce',
          short: 'Staff PM',
          start: '2026-02',
          end: null,
          highlights: [
            'Built and released specialized AI agents for shopping personalization, promotions, help, and order management in the conversational chat experience, delivering $20M in incremental ARR with responsible AI guardrails developed alongside Security and Legal.',
            'Launched AI photo augmentation and editing (Google Nano Banana) that enables prints of AI-generated products: a $40M ARR increase and a 4% improvement in cart conversion.',
            'Grew an in-house AI product team of 2 PMs, 2 principal engineers, and 3 engineers across Desktop, mWeb, iOS, and Android.',
            'Improved CSAT by 21% through user-centric AI solutions across the design ecosystem.',
            'Built internal AI agents for release notes and design-to-story breakdowns, accelerating feature-to-release timelines by 10 days for quarter-long initiatives.',
            'Partnered with BCG X on the 2026–2027 product roadmap and AI product strategy.',
          ],
        },
        {
          title: 'Senior Product Manager II - Creation, Photo',
          short: 'Senior PM II',
          start: '2023-08',
          end: '2026-01',
          highlights: [
            'Led the 2-year, end-to-end replatforming of core design and photo tooling: 400+ strategic initiatives and $400M in incremental ARR.',
            'Aligned a cross-functional organization of 80+ people across design, engineering, and data science on a multi-year replatforming of a $2B platform.',
            'Seeded and executed the roadmap for an AI-powered photobook creator: a $4M ARR increase and creation time reduced from hours to seconds.',
            'Architected a new data-tracking funnel with 12 A/B-testable user touchpoints.',
            'Mentored a team of 4 product managers.',
          ],
        },
      ],
      context: 'Shutterfly brings memories to life by printing photos on physical products. I’m the product lead for Shutterfly’s design tools.',
      theme: 'CREATION tool to help customize anything with your photo',
      workedOn:
        'A two-year replatforming of core design and photo tooling, an AI photobook creator, and now AI shopping agents and photo editing across Desktop, mWeb, iOS, and Android.',
      // [draft]
      perspective: 'AB testing streamlines decision making. AI can do a lot, builder needs to spend more time understanding the problems.',
      // [self-reported] Alfred, 2026-10-14. Note: the résumé line above says $400M incremental ARR for the same replatforming.
      accomplishments: [
        'Replatformed a $2B business across 400 initiatives: a 10.9% AOV lift and a 2.03% total sales lift, adding $146M in revenue.',
        'Launched an AI commerce service for our users: $20M in incremental ARR.',
      ],
    },
  ] as Milestone[],
};

/* ------------------------------------------------------------------ */
/* Selected work                                                        */
/* ------------------------------------------------------------------ */

export interface CaseStudy {
  id: string;
  letter: string;
  kicker: string;
  title: string;
  summary: string;
  accent: Accent;
  problem: string; // [draft] framing
  role: string; // [résumé]
  complexity: string; // [résumé]
  changed: string[]; // [résumé]
  shows: string; // [draft]
  tags: string[];
}

export const work = {
  heading: 'Where the thinking becomes tangible.',
  cases: [
    {
      id: 'creation',
      letter: 'A',
      kicker: 'Shutterfly · 2023 – present',
      title: 'Creation experiences at Shutterfly',
      summary: 'Helping customers turn their photos into books, prints, and gifts they’re proud of.',
      accent: 'lime',
      problem:
        'People arrive with a camera roll and an occasion. Getting from those photos to a finished book or gift could take hours of placing, cropping, and arranging.',
      role: 'Senior Product Manager II, then Staff Product Manager and product lead for Shutterfly’s design tools.',
      complexity:
        'A 2-year replatforming of core design and photo tooling on a $2B platform: 400+ initiatives, with an 80+ person organization across design, engineering, and data science.',
      changed: [
        '$400M in incremental ARR from the replatforming.',
        'AI photobook creator: creation time from hours to seconds, and a $4M ARR increase.',
        'A new tracking funnel with 12 A/B-testable touchpoints to guide decisions.',
      ],
      shows:
        'Automation should take on the tedious work without taking creative decisions away from the customer, and a platform rebuild earns its cost by making improvements like that easier to ship.',
      tags: ['Customer control + automation', 'Creation UX', 'Platform modernization', 'Experimentation', 'Cross-functional alignment'],
    },
    {
      id: 'ai',
      letter: 'B',
      kicker: 'Shutterfly · 2026 – present',
      title: 'AI customer experiences',
      summary: 'Conversational shopping help and AI photo enhancement across Desktop, mWeb, iOS, and Android.',
      accent: 'sky',
      problem:
        'Customers want help finding the right product, deal, or order, and they want their photos to look their best. AI can help with both, but only if it is relevant, accurate, and safe.',
      role: 'Staff Product Manager leading the AI Product team, which I grew to 2 PMs, 2 principal engineers, and 3 engineers.',
      complexity:
        'Specialized agents for shopping personalization, promotions, help, and order management, orchestrated with Amazon Bedrock, across four surfaces, with guardrails defined alongside Security and Legal.',
      changed: [
        '$20M in incremental ARR from the conversational chat experience.',
        'AI photo augmentation and editing: a $40M ARR increase and a 4% lift in cart conversion.',
        'CSAT up 21% through user-centric AI across the design ecosystem.',
      ],
      shows:
        'A capability becomes customer value when the experience sets the right expectations and earns trust. Guardrails and quality after the demo are product work, not a launch checklist.',
      tags: ['Capability → customer value', 'Expectations + trust', 'Responsible AI', 'Cross-surface'],
    },
  ] as CaseStudy[],

  builder: {
    letter: 'C',
    kicker: 'Founder → hands-on builder',
    title: 'I like to make ideas tangible.',
    then: {
      label: 'Then · 2020 – 2021',
      title: 'Founder/CEO, Eyesbox AI',
      // [résumé]
      text: 'Took a smart refrigerator camera from concept to a launched app on the App Store and Google Play, across hardware, AI, and mobile, with a team of 8 engineers. Pitched 50+ investors and secured a $10,000 grant.',
    },
    atWork: {
      label: 'At work · now',
      title: 'Prototypes and internal agents',
      // [résumé]
      text: 'I use AI-assisted prototyping to align leadership on high-fidelity experiences and give engineering precise requirements. I also built internal AI agents, one that drafts release notes from Jira and one that turns designs into epics and stories.',
    },
    now: {
      label: 'Now · personal projects',
      title: 'Building in my own time',
      // [draft] — confirm these projects and descriptions before publishing
      text: 'Outside work, I design and build small web and mobile products to keep my instincts sharp.',
      projects: [
        {
          name: 'OurFamilyBook',
          text: 'Invite the people who love your child to answer a few questions; their words and photos become a book your family can keep.',
          url: 'https://www.ourfamilybook.org' as string | null,
        },
        {
          name: 'Rumbly',
          text: 'An AI kitchen companion that turns recipes, videos, and receipts into meal plans and a smart pantry.',
          url: 'https://rumbly.ai' as string | null,
        },
      ],
      tools: ['React Native', 'Supabase', 'Stripe', 'Claude Code'],
    },
    // [draft]
    shows: 'Building things myself keeps me honest about what’s hard, and makes conversations with design and engineering more concrete.',
  },

  featured: {
    label: 'Independent product exploration',
    title: 'Making the next edit feel as good as the first build.',
    description:
      'After building with Bolt, I explored how visual refinement could feel more direct, predictable, and trustworthy.',
    insight: 'Precise visual changes should not feel like starting the conversation again.',
    // [draft] steps 1 & 4, [hypothesis] step 2
    steps: [
      {
        label: 'Noticed friction',
        text: 'Small visual changes, like a color, a label, or some spacing, meant describing them in words and hoping the next generation got them right.',
      },
      {
        label: 'Framed a hypothesis',
        text: 'If people can select what they see and change it directly, refinement will feel more predictable, and the code should still reflect those edits.',
      },
      {
        label: 'Built a prototype',
        text: 'A clickable Visual Design mode: select any element, edit text in place, adjust it in an inspector, and review how edits map back to code.',
      },
      {
        label: 'Still to validate',
        text: 'Which changes people prefer to make directly versus by prompt, whether direct edits stay trustworthy when code is regenerated, and how it holds up on real projects.',
      },
    ],
    // What the prototype actually does vs. what it fakes (verified against the prototype source)
    implemented: [
      'Selecting any element on a live page, with breadcrumbs and a layers panel',
      'Editing text in place and adjusting layout, fill, stroke, and shadow in an inspector',
      'Undo/redo, plus desktop, tablet, and mobile widths',
      'Edits saved in your browser so they survive a reload',
    ],
    simulated: [
      'The AI box in the toolbar: prompts are matched to a few keywords, and no model is called',
      'The chat history and version entries',
      'The “visual edits → code” view, which generates illustrative code and doesn’t write to real source files',
    ],
    disclosure: 'Independent concept. Not affiliated with Bolt. Some prototype behaviors are simulated.',
    /** Optional screenshot in /public, e.g. '/prototype-visual-design.png'. `null` uses the built-in illustration. */
    screenshot: null as string | null,
  },
};

/* ------------------------------------------------------------------ */
/* Reach — self-reported                                                */
/* ------------------------------------------------------------------ */

export const reach = {
  /** Set false to hide the 40M figure and show only the long-term ambition. */
  approvedForPublic: true,
  reached: 40_000_000, // [self-reported]
  goal: 1_000_000_000,
  reachedLabel: '~40M',
  goalLabel: '1B',
  headingReached: '40 million reached.',
  headingGoal: 'One billion in sight.',
  body: 'Through products I’ve managed, I’ve helped reach approximately 40 million users. My long-term ambition is to help build products that reach one billion.',
  ambitionOnly: 'My long-term ambition is to help build products that reach one billion people.',
  standard: 'Scale is the ambition. Usefulness is the standard.',
  figureLabel: 'Approximate career reach · self-reported',
  /** Shown as a footnote under the figure. `null` hides it. */
  definition:
    'My own estimate across products I’ve managed over my career. Not a daily or monthly active user count, not paying customers, and people may be counted in more than one product.' as
      | string
      | null,
};

/* ------------------------------------------------------------------ */
/* Beyond work                                                          */
/* ------------------------------------------------------------------ */

export const beyond = {
  heading: ['Competitive + strategy', '= fun for me.'],
  badminton: { title: 'Badminton', line: 'Competitive badminton player.' }, // [self-reported]
  tft: {
    title: 'Teamfight Tactics',
    line: 'Top 1% of players base.', // [self-reported]
    /** Leave null until confirmed. Shown as small chips when set. */
    tier: null as string | null,
    region: null as string | null,
    season: null as string | null,
  },
  pickleball: { title: 'Pickleball', line: 'Another reason to get on a court.' }, // [self-reported]
  // [draft]
  personal:
    'I enjoy the mix of practice, strategy, and competition—and the fact that there is always another way to get better.' as
      | string
      | null,
  // [résumé] "Personal interest" — set to [] to hide
  alsoInto: ['Writing AI guides', 'Medium contributor', 'Notion template creator', 'Baldur’s Gate geek'],
};

/* ------------------------------------------------------------------ */
/* Contact                                                              */
/* ------------------------------------------------------------------ */

export const contact = {
  heading: 'Let’s find something worth solving.',
  // [draft]
  body: 'Hiring for a product role, building something ambitious, or just want to compare notes on a hard problem? I’d like to hear from you.',
};

/* ------------------------------------------------------------------ */
/* For Bolt.new — a separate view at /#bolt, linked only from the footer */
/* ------------------------------------------------------------------ */

// [draft] — mapped to the public Staff Product Manager, Bolt.new posting (Aug 2026)
export const forBolt = {
  /** URL hash that opens this view. Any other anchor (except the #main skip link) returns to the main site. */
  hash: 'bolt',
  footerLabel: 'For the Bolt.new team',
  documentTitle: 'Alfred Chang · For the Bolt.new team',
  back: 'Back to the main site',
  sticker: 'For the Bolt.new team',
  headline: ['Why Bolt.', 'Why me.'],
  highlight: 'Why me.',
  lede: 'Bolt helps people go from an idea to working software. I like building Apps and I see a future where most people building their customize apps that fit their needs. The impact and reach that tools like Bolt.new can have is far reaching to help me reach the 1 Billion users faster.',
  /** Hero button that jumps to the first "slide" (#bolt-problem). */
  proposalCta: 'See my feature proposal',
  /** Card to the right of the headline. Same projects and links as the main site's "Now · personal projects". */
  builds: {
    label: 'Recent vibe-coding projects',
    projects: work.builder.now.projects,
  },
  stats: [
    { value: '7+', label: 'years building products, now Staff PM', accent: 'lime' },
    { value: '$216M', label: 'added annual revenue from my initiatives, $60M from AI', accent: 'sky' },
    { value: '4×', label: 'users in SIX months at SmartRent, 250k to 1M', accent: 'paper' },
    { value: '400', label: 'initiatives seeded, planned, launched, within 2 years', accent: 'coral' },

  ] as { value: string; label: string; accent: Accent }[],

  /*
   * The three sections below are the interview "slides": the problem, the proposal,
   * and the prototype. They summarize the PRD in src/prd.ts (shown at /#bolt-prd).
   * [draft] condensed from Alfred's PRD; [hypothesis] where marked.
   */
  problem: {
    label: 'The problem',
    heading: 'Small changes feel like a rebuild.',
    intro:
      'Bolt gets people to a first version fast. Refining it is where momentum drops: an edit can look finished in the preview before it’s in the code, and tweaking one button takes five steps and a save that spends tokens.',
    today: {
      label: 'Today: changing one button',
      steps: [
        { text: 'Turn on the Select tool in chat' },
        { text: 'Adjust the button' },
        { text: 'Add changes to a batch' },
        { text: 'Save changes', tag: 'Uses tokens' },
        { text: 'Back to chat' },
      ] as { text: string; tag?: string }[],
      source: { label: 'Bolt docs: Visual edits', url: 'https://support.bolt.new/building/visual-edits' },
    },
    core: [
      {
        ask: 'Is it saved?',
        title: 'Unclear persistence',
        text: 'A change can look complete in the preview while it isn’t in the source code yet.',
        note: { label: 'Observed', text: 'Extra confirmation steps, and doubt about what survives a refresh, a deploy, or the next agent run.' },
        accent: 'lime',
      },
      {
        ask: 'Is it worth it?',
        title: 'High effort for small changes',
        text: 'Changing one button means selecting, editing, adding changes, saving, and going back to chat.',
        note: { label: 'Hypothesis', text: 'That friction discourages iteration once the first generation is done.' },
        accent: 'sky',
      },
      {
        ask: 'What will it cost?',
        title: 'Cost doesn’t match the task',
        text: 'The user thinks “change this button.” The tokens pay for project context, reasoning, and code work.',
        note: { label: 'Hypothesis', text: 'Predictable, token-free edits make people more willing to keep building.' },
        accent: 'coral',
      },
    ] as { ask: string; title: string; text: string; note: { label: string; text: string }; accent: Accent }[],
    more: {
      label: 'Also in the way',
      items: [
        { title: 'Hard to find', text: 'Visual editing sits behind the Select tool in chat. I found it by accident.' },
        { title: 'Selecting can shift things', text: 'In my testing, some elements seemed to change just by being selected. Cause unverified.' },
        { title: 'AI loses the context', text: 'Back in chat after selecting, you restate what you meant and guess whether the selection still applies.' },
      ],
    },
    note: 'From my own builds on Bolt and its documented edit flow. Hypotheses until tested with users.',
  },

  proposal: {
    label: 'The proposal',
    heading: 'Direct edits. Saved to code. Zero tokens.',
    intro:
      'A first-class Visual Design mode next to Preview and Code. Supported edits apply instantly, save straight to source, and use no AI tokens. AI handles changes that are ambiguous, structural, or need reasoning, and only when the user asks.',
    start: 'Select an element',
    decision: 'Can Bolt map and patch it safely?',
    paths: [
      {
        when: 'Yes · supported edit',
        tag: '0 tokens',
        accent: 'lime',
        steps: ['Edit in place or in the inspector', 'Deterministic patch to source', 'Validated, then marked Saved', 'One gesture, one undo'],
      },
      {
        when: 'No · needs AI',
        tag: 'Uses tokens, by choice',
        accent: 'sky',
        steps: ['Ask AI with the element attached', 'Review the scope and a diff', 'Keep or revert'],
      },
    ] as { when: string; tag: string; accent: Accent; steps: string[] }[],
    pathsNote: 'Never silent: an unsupported edit asks before it calls AI.',
    principlesLabel: 'Principles',
    principles: [
      { title: 'Speed', text: 'Simple changes shouldn’t wait on an agent.' },
      { title: 'Direct intent stays direct', text: 'Don’t make people describe a change they already made.' },
      { title: 'Saved means durable', text: '“Saved” means saved to source, not just the preview.' },
      { title: 'Scope is visible', text: 'One instance, a component, or a shared style. Always clear.' },
      { title: 'AI is explicit', text: 'People know when AI runs and may use tokens.' },
      { title: 'Recovery is standard', text: 'Every committed change can be undone.' },
      { title: 'One project, one truth', text: 'Visual, code, and AI work from the same current state.' },
    ],
    measureLabel: 'How we’d know',
    northStar: {
      label: 'North star',
      name: 'Weekly retained successful refiners',
      text: 'People who make an edit that persists and passes validation, then come back the next week to keep building.',
    },
    gatesLabel: 'Launch gates',
    gates: [
      'No false “Saved” states',
      'Supported edits use zero tokens',
      'Selecting never changes the app',
      'Unsupported edits never call AI silently',
      'Edits survive reload and export',
      'Undo restores code and preview together',
    ],
    prdLink: 'Requirements, technical approach, risks, and open questions are in the full PRD',
  },

  prototype: {
    label: 'Building on Bolt',
    title: 'I prototyped a Visual Design mode for Bolt.',
    text: 'To test the proposal, I built a clickable version of the Bolt workspace with Visual Design next to Preview and Code. Select any element, edit it in place or in the inspector, and see how the edits map back to code.',
    tryLabel: 'Try it in two minutes',
    tryIt: [
      'Click Visual Design, left of Preview, or press D.',
      'Select the “See my work” button. The breadcrumbs show where it sits.',
      'Change its fill or corners from the toolbar, then undo with ⌘Z.',
      'Ask the toolbar’s AI box to “make it a pill.”',
      'Switch to mobile, then open Code to see the edits as JSX.',
    ],
    coversLabel: 'From the PRD, in the prototype',
    covers: [
      { id: 'R1', text: 'Visual Design entry next to Preview and Code' },
      { id: 'R2', text: 'Hover and select add overlays only' },
      { id: 'R3', text: 'Switch between editing and using the app' },
      { id: 'R4', text: 'Breadcrumbs and layers to reach a parent' },
      { id: 'R5', text: 'Inspector for layout, fill, stroke, and shadow' },
      { id: 'R6', text: 'Static text edited in place' },
      { id: 'R11', text: 'Undo and redo' },
      { id: 'R14', text: 'AI anchored to the selected element (simulated)' },
    ],
    // What the prototype fakes, checked against ../src (2026-10-15)
    simulatedLabel: 'Not proven yet',
    simulated: [
      'Edits save to your browser, not to source files. Persisting to source without tokens (R8–R10) needs a real patch engine.',
      'The AI box matches prompts to a few keywords. No model is called.',
      'The Code view generates illustrative JSX and plays a “visual edits → code” step.',
      'The chat history and version entries are seeded.',
    ],
    cta: 'Open the prototype',
    prdCta: 'Read the full PRD',
  },

  start: {
    heading: 'How I’d start.',
    note: 'A hypothesis from the outside, not a plan. The first job is finding out what’s actually true.',
    steps: [
      {
        when: 'Days 1–30',
        title: 'Use it like a builder',
        text: 'Ship real projects on Bolt, sit in on CX and Sales conversations, and read the funnel from first prompt to deployed app to return visit. Find where people stall.',
      },
      {
        when: 'Days 31–60',
        title: 'Pick the leverage point',
        text: 'Frame one problem with the team, agree up front on what result would change our minds, and run the smallest useful test.',
      },
      {
        when: 'Days 61–90',
        title: 'Ship it, write it down',
        text: 'Ship, measure against activation and retention, and share the thinking in writing so the whole team can act on it.',
      },
    ],
  },

  disclosure: 'Written for the Bolt.new team. Independent applicant page, not affiliated with Bolt or StackBlitz.',
};
