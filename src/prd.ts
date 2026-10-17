/*
 * The Visual Design PRD, shown at /#bolt-prd and linked from the Bolt.new page
 * and the main site's prototype case study.
 *
 * [draft] Alfred's PRD (2026-10-15), lightly copy-edited: citation residue removed
 * ("code work.bolt", "chat.bolt", "limitations.reactnative+1"), the speed line's
 * grammar fixed, and "The user discovered…" reworded as firsthand testing.
 * Product principles removed (2026-10-15); the speed line now opens the problem statement.
 * Prioritization section and the requirements' phase column added 2026-10-16 (CONTENT_NOTES.md §1d).
 * Everything else is his wording. See CONTENT_NOTES.md §1c.
 *
 * Inline `code` and **bold** in strings are rendered by <Rich> in Prd.tsx.
 */

export type Priority = 'P0' | 'P1' | 'P2';
/** 1 = strict Design mode, AI applies on exit. 2 = direct saves, after the re-architecture. */
export type Phase = 1 | 2;

export const prd = {
  /** URL hash that opens the PRD. Its section ids all start with `prd-`, which keeps this view. */
  hash: 'bolt-prd',
  documentTitle: 'Visual Design PRD · Alfred Chang',
  back: 'Back to the Bolt.new page',
  sticker: 'PRD · Proposal draft',
  kicker: 'Bolt.new',
  title: 'Non-agent building experiences',
  meta: [
    { label: 'Author', value: 'Alfred Chang' },
    { label: 'Status', value: 'Proposal draft' },
    { label: 'Updated', value: 'October 2026' },
  ],
  disclosure: 'Independent concept written by an applicant. Not affiliated with Bolt or StackBlitz. Problems come from firsthand use and Bolt’s public docs; no figures here are measured.',

  objective: [
    'Make visual refinement a first-class Bolt workflow so users can confidently continue editing an application after its initial generation.',
    'Users should be able to make supported visual changes directly, see immediate feedback, and have those changes persisted to source code without a separate chat confirmation or AI-token charge.',
    'Use AI deliberately for ambiguous, structural, or reasoning-heavy changes, not as the default persistence mechanism for every visual adjustment.',
    // [draft] added 2026-10-16 to answer "is this still agent-first?"
    'Bolt stays agent-first. The agent still builds the app and makes structural changes; Visual Design is a refinement layer for a small set of visual properties, not a general web builder.',
  ],

  problem: {
    intro: [
      'Bolt.new prides itself on speed, but agent workflows take time. Simple changes don’t need to go through AI.',
      'Bolt helps users create an application quickly, but refining that application can require users to move between visual selection, editing controls, chat, and explicit persistence steps.',
      'The current documented flow separates preview changes from code changes: users select an element, make adjustments, add those adjustments to a batch, and save the batch through a token-consuming process.',
    ],
    source: { label: 'Bolt docs: Visual edits', url: 'https://support.bolt.new/building/visual-edits' },
    items: [
      {
        title: 'Unclear persistence',
        text: [
          'A change can look complete in the preview while remaining unapplied to source code.',
          'Users doesn’t understand an why: “I changed it visually” does not necessarily mean “the application has changed.”',
        ],
        notes: [{ label: 'Observed consequence', text: 'Additional confirmation steps and uncertainty about what survives refresh, deployment, or later agent work.' }],
      },
      {
        title: 'High effort for small changes',
        text: ['A narrow task such as changing a button can involve selecting, editing, adding changes, saving, and returning to chat.'],
        notes: [
          { label: 'Observed consequence', text: 'Simple refinement feels disproportionately expensive in time and attention.' },
          { label: 'Hypothesis', text: 'This discourages iteration once the initial generation is complete.' },
        ],
      },
      {
        title: 'Cost does not match perceived task size',
        text: ['The user’s mental model is “change this button,” while Bolt’s token usage can include project context, reasoning, and code work.'],
        notes: [
          { label: 'Observed consequence', text: 'Small changes can feel like rebuilding the application.' },
          { label: 'Hypothesis', text: 'Predictable, token-free supported edits will improve perceived value and willingness to continue building.' },
        ],
      },
      {
        title: 'Editing is difficult to discover',
        text: ['The current visual-edit entry point is the Select tool in chat.'],
        notes: [
          { label: 'Observed consequence', text: 'In firsthand testing, editing was discovered incidentally rather than recognized as a primary way to refine the application.' },
          { label: 'Hypothesis', text: 'A persistent Visual Design entry point near Preview and Code will improve discovery and successful use.' },
        ],
      },
      {
        title: 'BUG: Selection can undermine trust',
        text: ['During firsthand testing, some elements appeared to change when selected.'],
        notes: [
          { label: 'Unverified cause', text: 'Selection overlays, layout measurements, temporary styles, or another implementation issue.' },
          { label: 'Requirement implication', text: 'Hovering and selecting must not mutate application appearance or source.' },
        ],
      },
      {
        title: 'Contextual AI is disconnected',
        text: ['After selecting an element, returning to a general chat surface can require users to restate context and understand whether the selection is active due to going back and forward within the two UI.'],
        notes: [{ label: 'Hypothesis', text: 'An anchored AI action with visible target and scope will reduce ambiguity and unintended changes.' }],
      },
    ],
  },

  metrics: {
    primary: {
      name: 'Weekly retained successful refiners',
      text: 'Unique users who complete a persisted visual refinement that passes applicable validation, then return the following week to continue meaningful work on the project.',
      note: 'This captures continued value better than DAU alone. Initially, track its two components separately because retention evidence takes time to mature.',
    },
    /** Three supporting metrics, one per core problem: unclear persistence, high effort, cost. */
    table: [
      { metric: 'Successful refinement rate', definition: 'Eligible attempts that persist to source, remain after reload, and pass applicable checks ÷ eligible attempts', purpose: 'Reliability' },
      { metric: 'Time to durable edit', definition: 'Time from first property manipulation to validated source persistence', purpose: 'Speed' },
      { metric: 'AI tokens per successful refinement', definition: 'Total refinement-related tokens ÷ successful refinements', purpose: 'Cost to users and Bolt' },
    ],
  },

  audience: {
    primary: {
      who: 'Nontechnical founders, PMs, designers, and marketers refining an already-generated website or web application.',
      job: 'Make this look and read the way I intend without describing every small change to an AI or worrying that unrelated work will break.',
    },
    secondary: {
      who: 'Developers and agencies making precise visual adjustments before implementation review or client handoff.',
      job: 'Make a narrow change while keeping code quality, responsive behavior, and version history intact.',
    },
    /** Bolt's customer segments from Alfred's segmentation table; checked = primary or secondary audience above. */
    segmentsLabel: 'Who benefits',
    segments: [
      { segment: 'Nontechnical founder', benefits: true },
      { segment: 'Product manager', benefits: true },
      { segment: 'Designer', benefits: true },
      { segment: 'Marketer or operator', benefits: true },
      { segment: 'Agency', benefits: true },
      { segment: 'Developer', benefits: true },
      { segment: 'Product/engineering team', benefits: false },
      { segment: 'Enterprise', benefits: false },
    ],
    eligibility: [
      'Supported generated React projects with source patterns that can be mapped and updated safely.',
      'Imported repositories, shared design systems, dynamic content, and unfamiliar styling systems may require limited support or explicit fallback.',
    ],
  },

  scope: {
    in: [
      'Persistent Visual Design mode.',
      'Non-mutating hover and selection overlays.',
      'Clear distinction between editing and interacting with the application.',
      'Minimal selected-element hierarchy.',
      'Inspector for supported properties.',
      'Static inline text editing.',
      'Immediate visual preview during manipulation.',
      'Automatic source persistence for supported edits.',
      'Truthful persistence status.',
      'Transactional undo/redo.',
      'Visible responsive scope.',
      'Contextual AI with selected target.',
      'Explicit fallback for unsupported edits.',
      'Latest saved changes available to subsequent agent actions.',
      'Basic change-history entries independent of sending a user chat prompt.',
    ],
    out: [
      'Complete Figma like replacement.',
      'Arbitrary drag-and-drop page construction.',
      'Freeform absolute positioning.',
      'Structural component refactoring.',
      'Editing business logic, auth, database rules, or API behavior.',
      'Editing database-backed or localized content as if it were static text.',
      'Full shared-design-system editing.',
      'Real-time multiplayer conflict resolution.',
      'Native mobile editing.',
      'Automatic AI execution for every unsupported interaction.',
      'Guaranteed zero tokens for AI transformations.',
      'Solving initial-generation token consumption.',
      'Guaranteeing state preservation across every hot reload.',
    ],
  },

  /*
   * `phase` is my split (2026-10-16), not Alfred's: phase 1 is everything that can ship on
   * today's AI save path with a strict Design mode; phase 2 needs the re-architecture.
   */
  requirementsNote: 'Phase 1 ships with a strict Design mode on today’s AI save path. Phase 2 needs the re-architecture. See Prioritization.',
  requirements: [
    { id: 'R1', title: 'First-class Visual Design entry', priority: 'P0', phase: 1, criteria: 'Visible near Preview/Code; current mode is clear; chat Select remains an alternate entry' },
    { id: 'R2', title: 'True visual selection, no mutate on selects', priority: 'P0', phase: 1, criteria: 'Hover/click adds editor overlays only; no source mutation, layout shift, or navigation' },
    { id: 'R3', title: 'Edit/interact toggle', priority: 'P0', phase: 2, criteria: 'User can test buttons and navigation without exiting the entire workflow' },
    { id: 'R4', title: 'Selection hierarchy', priority: 'P0', phase: 1, criteria: 'User can distinguish a button from its label and move to a parent' },
    { id: 'R5', title: 'Supported-property inspector', priority: 'P0', phase: 1, criteria: 'Available properties are explicit; unsupported properties are disabled with explanation' },
    { id: 'R6', title: 'Static text editing', priority: 'P0', phase: 1, criteria: 'Static literals persist; dynamic, localized, or bound values are identified rather than overwritten' },
    { id: 'R7', title: 'Live preview', priority: 'P0', phase: 1, criteria: 'Manipulation produces immediate-feeling feedback without source writes on every pointer movement' },
    { id: 'R8', title: 'Automatic source persistence', priority: 'P0', phase: 2, criteria: 'Supported edits commit after interaction completion; no Add changes or chat confirmation' },
    { id: 'R9', title: 'Accurate save state', priority: 'P0', phase: 1, criteria: 'Saved appears only after source persistence and applicable validation; failure offers Retry/Revert' },
    { id: 'R10', title: 'Token-free deterministic edits', priority: 'P0', phase: 2, criteria: 'Supported direct edits do not invoke an LLM or debit AI tokens' },
    { id: 'R11', title: 'Transactional undo/redo', priority: 'P0', phase: 1, criteria: 'One completed gesture is one undo action; source and preview restore together' },
    { id: 'R12', title: 'Responsive scope', priority: 'P0', phase: 1, criteria: 'Inspector shows base/current-breakpoint scope; no silent conversion to fixed desktop dimensions' },
    { id: 'R13', title: 'Latest-state agent awareness', priority: 'P0', phase: 1, criteria: 'Later prompts use persisted source; concurrent mutations are serialized or blocked' },
    { id: 'R14', title: 'Contextual AI action', priority: 'P1', phase: 1, criteria: 'Selected element and intended scope accompany the request; user sees that AI is involved' },
    { id: 'R15', title: 'Explicit unsupported fallback', priority: 'P0', phase: 1, criteria: 'No silent inference; user chooses AI edit, Code, or cancellation' },
    { id: 'R16', title: 'Repeated/shared-element scope', priority: 'P0', phase: 2, criteria: 'Repeated instances are detected; ambiguous instance-only changes are blocked or clarified' },
    { id: 'R17', title: 'Change history', priority: 'P1', phase: 1, criteria: 'Completed edits create readable, recoverable history without requiring a synthetic user prompt' },
    { id: 'R18', title: 'Code parity', priority: 'P0', phase: 1, criteria: 'Opening Code shows already-persisted changes; it does not initiate synchronization' },
    { id: 'R19', title: 'Publication parity', priority: 'P0', phase: 1, criteria: 'Export/publish uses persisted source; unsettled mutations are surfaced before publication' },
    { id: 'R20', title: 'Expanded layers panel', priority: 'P2', phase: 2, criteria: 'Hidden/shared/repeated elements have accurate labels and safe selection behavior' },
  ] as { id: string; title: string; priority: Priority; phase: Phase; criteria: string }[],

  /*
   * [draft] Product view of the technology, condensed from Alfred's architecture brief (2026-10-15).
   * Engineering detail (source-map attributes, AST/WASM, HMR, vendor models) and unmeasured
   * latency figures are left out on purpose. The ~85% figure is labelled as an estimate.
   */
  technical: {
    intro:
      'A product view of the technology, not an engineering design. It starts from assumptions about why visual editing works the way it does today. Engineering would confirm or correct them in the first spike.',
    todayLabel: 'Why it works this way today',
    today: [
      {
        title: 'The preview isn’t the code',
        text: 'What users see is rendered output; what Bolt saves is React source. Changing the preview is instant, but tracing an element back to the exact code that made it is hard, especially for repeated items, conditional content, or values passed in from elsewhere.',
      },
      {
        title: 'Clean code has needed AI',
        text: 'Turning a visual tweak into tidy, responsive code, rather than hard-coded pixel values, has relied on a model pass. So saving a visual edit goes through AI.',
      },
      {
        title: 'AI is slow and costs tokens',
        text: 'A model pass takes seconds and spends tokens. Running one on every drag or keystroke would be slow, would collide with itself, and would burn both the user’s credits and Bolt’s margin. Batching edits behind one Save avoids that.',
      },
      {
        title: 'Saving constantly disrupts the preview',
        text: 'Writing files on every movement makes the preview reload and flicker, resets what’s on screen (like an open modal), and floods undo history with tiny steps.',
      },
      {
        title: 'Chat is the version history',
        text: 'Bolt started as a chat-first builder, so versions follow chat turns. Batch-and-save fits that: many edits become one checkpoint.',
      },
    ],
    todayTakeaway:
      'Under these constraints, batch-and-save is a sensible design, and it’s common across AI app builders. The proposal changes the constraints rather than just the UI: separate predictable visual edits from work that needs AI.',
    approachLabel: 'What changes',
    approach: [
      {
        title: 'Know where every element comes from',
        text: 'Tag each element in the preview with its place in the code when the app is built. Selecting something then finds its source instantly, with no AI. Repeated items are recognized as one source with many instances, so scope is clear.',
      },
      {
        title: 'Simple edits skip AI',
        text: 'Color, spacing, type, alignment, and static text are predictable. Preview them live while the user adjusts, then write one small, clean code change when they let go. No tokens and no confirm step.',
      },
      {
        title: 'Save quietly',
        text: 'The preview already shows the change, so the save happens in the background without a visible reload. Each finished adjustment is one undo step, independent of chat.',
      },
      {
        title: 'AI for what needs judgment',
        text: 'Structural changes, like turning a layout into a responsive grid or extracting a component, still use AI. The user chooses it, it’s scoped to the selected element, and fast, focused models keep the wait short.',
      },
    ],
    splitLabel: 'Which edits go where',
    split: {
      direct: {
        label: 'Direct edit · 0 tokens',
        items: [
          'Static text.',
          'Colors and fills.',
          'Spacing: padding, margin, and gap.',
          'Typography: font, size, and weight.',
          'Corner radius, borders, and shadows.',
          'Alignment inside an existing layout.',
        ],
      },
      ai: {
        label: 'Clarify first, or hand to AI',
        items: [
          'Repeated items: confirm one or all.',
          'Shared styles used across the app.',
          'Content from a database or translations, never overwritten as static text.',
          'Restructuring a layout or making it responsive.',
          'Extracting or moving components.',
          'Third-party component internals.',
        ],
      },
    },
    splitNote:
      'Assumption to validate: most everyday visual edits fall in the first column, an estimated 85%. Open question 2 tests it before we scale.',
    compareLabel: 'Today vs. proposed',
    compare: [
      {
        dimension: 'Experience',
        today: 'Edit in the preview, add to a batch, save, then wait for an AI pass.',
        proposed: 'Instant feedback while editing; saved in the background on release.',
      },
      {
        dimension: 'History and undo',
        today: 'Tied to chat turns and checkpoints.',
        proposed: 'Each edit is its own undo step, separate from chat.',
      },
      {
        dimension: 'User credits',
        today: 'Spent on nudging margins and swapping colors.',
        proposed: 'Zero for direct edits; spent only on AI changes the user chooses.',
      },
      {
        dimension: 'Platform cost',
        today: 'A model pass for every saved batch.',
        proposed: 'No inference for direct edits; AI reserved for structural work.',
      },
    ],
  },

  /*
   * [draft] Alfred's prioritization call (2026-10-16): engineering says direct saves need a
   * re-architecture. Option 1 (invest, recommended) vs. option 2 (Preview is only a preview),
   * with option 1 shipped first as a strict Design mode whose edits AI applies in bulk on exit.
   */
  priority: {
    intro: [
      'Engineering’s feedback on this PRD: saving visual edits straight to source without AI (R8, R10) means re-architecting how the preview connects to code. It’s difficult, and it isn’t a UI change.',
      'That makes it a prioritization call. Either the re-architecture is worth it, or we remove the confusion a cheaper way.',
    ],
    options: [
      {
        tag: 'Option 1 · Recommended',
        title: 'Invest in the re-architecture',
        recommended: true,
        text: 'Commit to the platform change, and ship it in two phases so users get a clearer experience before the hard part lands.',
        points: [
          {
            label: 'Why',
            text: 'Trust is core to how people use Bolt. If builders can’t tell what’s saved, they stop relying on visual editing. Winning that trust back is open question 4.',
          },
          {
            label: 'Beyond tokens',
            text: 'Knowing where every element comes from is a foundation, not just a token fix. It also makes contextual AI precise (R14), scope clear (R16), and Code and Publish truthful (R18, R19).',
          },
          { label: 'Cost', text: 'A large engineering investment. Token-free edits arrive in phase 2, not at launch.' },
        ],
      },
      {
        tag: 'Option 2',
        title: 'Make Preview only a preview',
        recommended: false,
        text: 'Remove editing on top of the preview. The preview is for looking; changes go through chat, with Select to point at an element.',
        points: [
          { label: 'Gains', text: 'Cheap and quick. Removes the “looks saved but isn’t” confusion (problem 1).' },
          { label: 'Gives up', text: 'Direct editing. Every small change still waits on the agent and spends tokens, so problems 2 and 3 stay.' },
        ],
      },
    ],
    phasesLabel: 'How option 1 ships',
    phases: [
      {
        phase: 1,
        name: 'Phase 1 · Clear Design mode',
        when: 'Ships first, on today’s AI save path',
        tokens: 'One AI pass per Design session',
        steps: [
          'Enter Design mode: it’s strictly for designing. Every edit is a draft, marked “not in code yet.”',
          'Leave Design mode: Bolt’s AI applies every change in one pass. It takes time, and that’s okay, because the user knows exactly what’s happening.',
          '“Saved” appears only when the pass finishes and the build checks out. If it fails, Retry or Revert.',
        ],
      },
      {
        phase: 2,
        name: 'Phase 2 · Direct saves',
        when: 'When the re-architecture lands',
        tokens: 'Zero for supported edits',
        steps: [
          'Supported edits save to source when the user lets go, with no AI.',
          'Leaving Design mode is instant, so users can try the app mid-edit (R3).',
          'AI handles only the structural changes the user asks for.',
        ],
      },
    ] as { phase: Phase; name: string; when: string; tokens: string; steps: string[] }[],
    /* [draft] 2026-10-16. Shared with slide 03 (forBolt.priority in content.ts). **bold** marks the zero-token cell. */
    tokensLabel: 'Where tokens are spent',
    tokens: [
      { action: 'Prompt the agent to build or add a feature', today: 'Tokens', phase1: 'Tokens', phase2: 'Tokens' },
      {
        action: 'Simple edit: color, spacing, type, static text',
        today: 'Tokens, when you click Save changes',
        phase1: 'Tokens: one AI pass when you leave Design mode',
        phase2: '**0 tokens.** Saved directly, no AI',
      },
      { action: 'Bigger change: layout, responsive, components', today: 'Tokens', phase1: 'Tokens, when you ask AI', phase2: 'Tokens, when you ask AI' },
    ],
    tokensNote:
      '“0 tokens” means no AI model runs, so the user’s token balance isn’t touched (R10). The agent’s next prompt still reads the project, including those edits, at its normal cost. It holds only for supported edits, and only once the spike confirms Bolt can patch them safely (open question 2).',
    phaseNote:
      '**Why strict mode first:** the mode boundary becomes the save point. Users always know whether their changes are in code, and the agent never edits at the same time they do (R13). Phase 1 also shows which edits people actually make, which tells engineering where phase 2 should start.',
    changeMind:
      '**What would change this call:** if the technical spike shows that few everyday edits can be mapped and patched safely (open question 2), phase 2 won’t pay back. Then option 2 is the honest choice: stop editing on the preview and make chat-based changes better.',
  },

  risks: [
    { risk: 'Incorrect source mapping', impact: 'Wrong component changes', mitigation: 'Revision-aware IDs and explicit fallback' },
    { risk: 'Shared-component ambiguity', impact: 'One edit changes many instances', mitigation: 'Scope labels and clarification' },
    { risk: 'Responsive regression', impact: 'Desktop fix breaks mobile', mitigation: 'Breakpoint-aware controls and checks' },
    { risk: 'False saved status', impact: 'User loses trust or work', mitigation: 'Source-backed state machine' },
    { risk: 'Dynamic content overwritten', impact: 'Data behavior breaks', mitigation: 'Detect bindings and block unsafe edits' },
    { risk: 'AI/direct-edit race', impact: 'Newer work disappears', mitigation: 'Serialize writes and reject stale patches' },
    { risk: 'Refresh resets state', impact: 'User loses editing context', mitigation: 'Preserve where safe; disclose reload' },
    { risk: 'Poor generated code', impact: 'Maintenance becomes harder', mitigation: 'Pattern-specific transforms and code QA' },
    { risk: 'Too much editing UI', impact: 'Beginners feel overwhelmed', mitigation: 'Progressive disclosure' },
    { risk: 'Low deterministic coverage', impact: 'New mode still frequently invokes AI', mitigation: 'Measure task coverage before scaling' },
    { risk: 'Reduced token revenue', impact: 'Commercial concern', mitigation: 'Evaluate retained value, conversion, and contribution margin' },
    { risk: 'Scope creep', impact: 'Large builder project delays value', mitigation: 'Start with a small supported property set' },
    { risk: 'Phase 1: bulk apply goes wrong', impact: 'Many changes fail at once', mitigation: 'Per-change progress, build check, Retry/Revert' },
    { risk: 'Phase 1: apply wait feels long', impact: 'Users avoid leaving Design mode', mitigation: 'Show what’s being applied; track apply time' },
    { risk: 'Phase 2 slips', impact: 'Token-free edits never ship', mitigation: 'Staff the spike alongside phase 1' },
  ],

  dependencies: [
    'Preview runtime and instrumentation.',
    'Editor/source transformation infrastructure.',
    'Styling and component conventions.',
    'Agent orchestration.',
    'Version history.',
    'Build and validation tooling.',
    'Product design and accessibility.',
    'Analytics/data.',
    'CX feedback and issue taxonomy.',
    'Pricing/token accounting.',
    'GitHub/export/publish behavior.',
    'Security review of editor instrumentation.',
  ],

  // [draft] Alfred's four questions (2026-10-15), copy-edited.
  openQuestions: [
    'Why did we build visual edits to be confirmed in the preview and then confirmed again in chat, and does that reason still hold?',
    'Which elements can be edited visually, and which can’t?',
    'Is anything on the roadmap that could affect this initiative’s goal?',
    'How do we win back users’ trust in visual editing, so they give the simpler, more intuitive design we’re proposing a real try?',
  ],

  validation: {
    discovery: {
      intro: 'Recruit a small, deliberately varied sample of nontechnical builders, designers/PMs, and experienced developers.',
      tasksLabel: 'Ask participants to:',
      tasks: ['Change CTA text.', 'Change its color and radius.', 'Adjust spacing.', 'Inspect mobile behavior.', 'Refresh.', 'Undo.', 'Make one contextual AI request.', 'Publish or export.'],
      capture: 'Capture task completion, clicks, elapsed time, token use, unintended changes, recovery, and answers to:',
      question: 'What do you believe is saved right now?',
    },
    spike: [
      'Test a narrow mutation engine against representative cases: static JSX, repeated components, props, conditional rendering, class variants, shared tokens, and dynamic text.',
      'Measure **safe supported coverage**, not merely whether a patch can be produced.',
    ],
    rollout: ['Internal dogfood.', 'Opt-in supported projects.', 'Compare against current workflow.', 'Expand only after reliability gates are met.'],
    rolloutNote: 'Evaluate retention after sufficient observation time. Do not call a faster edit a retention win without evidence.',
  },
};

/** Table of contents, in page order. Every id starts with `prd-`. */
export const prdSections = [
  { id: 'prd-objective', label: 'Objective' },
  { id: 'prd-problem', label: 'Problem statement' },
  { id: 'prd-metrics', label: 'Success metrics' },
  { id: 'prd-audience', label: 'Target audience' },
  { id: 'prd-scope', label: 'Scope' },
  { id: 'prd-requirements', label: 'Requirements' },
  { id: 'prd-technical', label: 'Technical approach' },
  { id: 'prd-priority', label: 'Prioritization' },
  { id: 'prd-risks', label: 'Risks' },
  { id: 'prd-dependencies', label: 'Dependencies' },
  { id: 'prd-questions', label: 'Open questions' },
  { id: 'prd-validation', label: 'Validation plan' },
] as const;

export const requirementsIn = (phase: Phase) => prd.requirements.filter((r) => r.phase === phase);

/** A phase's requirement IDs with runs collapsed, e.g. "R1–R2, R4–R7". */
export function phaseIds(phase: Phase) {
  const nums = requirementsIn(phase).map((r) => Number(r.id.slice(1)));
  const runs: string[] = [];
  for (let i = 0; i < nums.length; ) {
    let j = i;
    while (nums[j + 1] === nums[j] + 1) j++;
    runs.push(j === i ? `R${nums[i]}` : `R${nums[i]}–R${nums[j]}`);
    i = j + 1;
  }
  return runs.join(', ');
}
