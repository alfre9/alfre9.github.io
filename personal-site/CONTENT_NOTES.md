# Content notes & approval checklist

Editorial notes live here and in `src/content.ts` comments, never on the public page.
Tags used in `content.ts`: **[résumé]**, **[self-reported]**, **[draft]**, **[hypothesis]**.

## 1. Missing: not invented, left off the page until provided

| Item | Where to set it | Current behaviour |
|---|---|---|
| Public résumé PDF | `site.resumeUrl` + file in `/public` | Hidden. Your current PDF includes your phone number; export a copy without it first. |
| External prototype URL | `site.prototypeUrl` | Points to the bundled copy at `/prototype/index.html`. Swap if you host it elsewhere. |
| TFT tier / region / season | `beyond.tft.*` | Hidden. See the conflict in §5. |
| Prototype screenshot | `work.featured.screenshot` | Uses an original illustration instead. |

## 1b. Added 2026-10-14 from Alfred

- **LinkedIn**: `linkedin.com/in/alfred-karken-chang` is shown in the header, mobile menu, and contact.
- **Paradox AI** (Intern, Mar–Sep 2019) is **not on the résumé**. Context, "what I worked on," perspective, and accomplishment come from Alfred's description. The chart caption no longer says "as listed on my résumé."
- **Role titles on the chart**: Associate PM (BenQ), Founder (Eyesbox), Associate PM II (SmartRent), 1st PM (BrightFi; card title "First Product Manager"), Senior PM II → Staff PM (Shutterfly). BenQ's card title is now "Associate Product Manager – Google Jamboard" (résumé: "APM").
- **Perspective I gained** came from Alfred for Paradox and BrightFi. BenQ, Eyesbox, SmartRent, and Shutterfly still use my draft lines, shortened.
- **Main accomplishment** text for all six roles came from Alfred, lightly copy-edited.
- **Bolt.new page** (`forBolt`) is all draft. It's mapped to the public Staff Product Manager, Bolt.new posting (Aug 2026) and uses only figures already on the site.

- **Hero (2026-10-15)**: now "Hi, I'm Alfred." with Alfred's photo and Alfred's own intro paragraph, word for word. The old headline ("Great products start with the right problem.") and the find / build / matter loop were removed.
- **Hero stat tiles (2026-10-15)**: Alfred asked for a punchier hero. The intro paragraph was replaced with three tiles: AI commerce $20M ARR, photo augmentation $40M ARR, replatforming $146M ARR. The "Seeking to apply AI product expertise…" line and the "building high-performing product teams" phrase were cut from the hero.
- **Hero tile details (2026-10-15)**: each tile has an icon and a detail card (hover on desktop, tap on phones). Detail text from Alfred, lightly copy-edited. Tile 2 renamed "AI photo augmentation". Replatforming detail reads "$2B in revenue" from Alfred's "yielding 2B": confirm the unit.

## 1c. Added 2026-10-15: the PRD and the reworked Bolt page

- **"Where I'd fit" removed** from the Bolt page (`forBolt.fit` is gone). The role-fit rows are no longer anywhere on the site.
- **New Bolt page sections** (`forBolt.problem`, `forBolt.proposal`, `forBolt.prototype`). All condensed from Alfred's PRD, so treat them as **[draft]**. The headlines "Small changes feel like a rebuild." and "Direct edits. Saved to code. Zero tokens." are mine. The three core problems are PRD problems 1–3, and "Also in the way" holds 4–6, shortened.
- **The "Today" flow** (Select tool in chat → Adjust → Add changes → Save changes, which uses tokens → Back to chat) matches Bolt's public docs. It links to [support.bolt.new/building/visual-edits](https://support.bolt.new/building/visual-edits), checked 2026-10-15. Re-check before sending, in case Bolt changes the flow.
- **"From the PRD, in the prototype"** maps R1–R6, R11, and R14 to things the prototype actually does, checked against `../src`. "Not proven yet" calls out that edits save to the browser, not to source (R8–R10).
- **PRD (`src/prd.ts`)** is Alfred's text with light copy edits only:
  - Removed citation residue: "code work.bolt", "Select tool in chat.bolt", "limitations.reactnative+1".
  - Speed line: "Bolt.new pride ourselves in speed but agent workflow takes time, simple changes doesn't need AI changes immediately" became "Bolt.new prides itself on speed, but agent workflows take time. Simple changes don't need to go through AI."
  - Product principles section removed (Alfred, 2026-10-15). The speed line moved to the first paragraph of the Problem statement; the other six principles are no longer in the PRD. The Bolt page's shorter "Principles" card (`forBolt.proposal.principles`) is unchanged.
  - Success metrics simplified (Alfred, 2026-10-15): the north star plus three supporting metrics, one per core problem (successful refinement rate, time to durable edit, AI tokens per successful refinement). Removed from the PRD: the other six metric rows, Guardrails, Targets (the no-lifts-before-baseline line and the proposed launch gates), and the publish-rate note. The Bolt page's "Launch gates" card (`forBolt.proposal.gates`) is unchanged.
  - "Who benefits" table added to Target audience (Alfred, 2026-10-15): all eight segments from his segmentation table, names only. Checked: the PRD's primary (founder, PM, designer, marketer/operator) and secondary (developer, agency) audiences. Unchecked: product/engineering team and enterprise, whose needs (shared design systems, multiplayer, governance) are out of scope. The checks are mine, inferred from the PRD: confirm.
  - Open questions replaced with Alfred's four (2026-10-15), copy-edited: why edits are confirmed in the preview and again in chat; which elements can and can't be edited; roadmap items that could affect the goal; how to win back users' trust in visual editing. The previous 15 questions are gone. The Technical approach's 85% note now points to question 2.
  - Problem 4: "The user discovered editing incidentally…" became "In firsthand testing, editing was discovered incidentally…"
  - Objective: one em dash became a comma. "Seven-/28-day" became "7- and 28-day".
  - Added a byline (Author, Status: Proposal draft, Updated October 2026), a link to Bolt's docs, and a not-affiliated disclosure.
- **"Technical requirements" became "Technical approach"** (still at `#prd-technical`), rewritten from a product angle using Alfred's architecture brief (2026-10-15). It opens with five assumptions about why batch-and-save exists today, then covers what changes, which edits skip AI, and a today-vs-proposed table. Left out on purpose: engineering detail (source-map attributes, AST/WASM patching, HMR), vendor and model names, and the brief's latency figures (0ms, ~30ms, 10–30s), since none of them are measured. The brief's "~85% of tweaks are deterministic" is kept but labelled an estimate and tied to open question 2 (which elements can and can't be edited).
- **Known gap between the prototype and the PRD:** the prototype shows "Saved ✓" for edits held in localStorage, and opening Code plays a "visual edits → code" sync. The PRD's R9 and R18 say Saved means saved to source and that Code never initiates syncing. Raised with Alfred on 2026-10-15; not yet decided.

## 2. Draft copy: needs your approval

All written for this site, in your voice, based on the brief and résumé. None of it states an anecdote as fact.

- **Problem lens**: the four "gist" lines and four longer explanations.
- **Journey**: the section intro, the six theme lines, and the four drafted **"Perspective I gained"** lines (see 1b).
- **Work A & B**: "Customer problem" framing and "What it shows about how I work."
- **Work C**: "Building in my own time" intro, project descriptions, and "What it shows."
- **Featured (Bolt)**: steps 1 ("Noticed friction") and 4 ("Still to validate").
- **Bolt page**: the problem, proposal, and "Building on Bolt" copy (see 1c).
- **Beyond**: "I enjoy the mix of practice, adaptation, and competition…"
- **Contact**: the body line under the heading.

## 3. Self-reported: shown with a label

- **~40M users reached** → labelled "Approximate career reach · self-reported", with a footnote saying it isn't DAU/MAU, isn't paying customers, and may count people more than once. Not broken down by company. No count-up animation. Turn it off with `reach.approvedForPublic = false`.
- **Competitive badminton player**, **TFT top 0.5%** (labelled "Self-reported competitive ranking"), **pickleball**.

## 4. Hypothesis: framed as unvalidated

- Featured step 2: "If people can select what they see and change it directly, refinement will feel more predictable…"
- The "Working in the prototype" / "Simulated" lists were checked against the prototype source (`../src`). The AI toolbar is keyword-matched, chat/versions are seeded, and the code view generates illustrative JSX. It doesn't write to real files.
- No cost, retention, or architecture claims about Bolt.

## 5. Things I noticed: please decide

0. **Shutterfly replatforming numbers.** The journey card now says "10.9% AOV lift, 2.03% total sales lift, $146M in additional revenue" (Alfred, 2026-10-14). The résumé highlights and Work case A still say "$400M in incremental ARR" for the same replatforming. Pick one framing, or explain how they differ. The hero tile detail (2026-10-15) adds a third figure for the same launch: "A/B testing at launch showed a 13.9% revenue lift."

1. **TFT rank conflict.** The brief says "top 0.5%"; the résumé says "Diamond Rank". I published only "Top 0.5%" (self-reported). Confirm which is current.
2. **AI text enhancement.** The brief mentions AI-assisted *text* enhancement; the résumé only supports photo augmentation/editing. I left text out.
3. **CSAT +21%** appears under "AI customer experiences". The résumé ties it to "user-centric AI solutions across the design ecosystem". Confirm that's the right home.
4. **The bundled prototype's sample content** still says "I build products for billions" and "1B users impacted", and links to the unverified LinkedIn URL. That's the copy this site deliberately avoids. Consider updating the sample before publishing `/prototype/`, and adding the "Not affiliated with Bolt" disclosure inside the prototype itself.
5. **Personal projects** (OurFamilyBook, Rumbly) came from the prototype's sample portfolio. Both sites are live, and the descriptions are paraphrased from their own meta descriptions. Confirm they're yours to list and that the wording is right.
6. **Résumé wording kept as-is**, except "Google Nanobanana" → "Google Nano Banana" and bullets condensed. Dates and titles match exactly; overlaps (BenQ/Eyesbox, Eyesbox/SmartRent in Aug 2021, SmartRent/BrightFi in Dec 2022) are drawn as overlaps. The Apr–Jul 2023 gap is shown without comment.
7. **Left out on purpose:** phone number, locations, education section, skills list, "Additional experience" (Boeing, onsemi; Paradox AI was added on 2026-10-14), and the "Also into" line uses only résumé interests (minus stock trading).
