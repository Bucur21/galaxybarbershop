# Galaxy Barbershop Redesign Plan — Techniques from the IG Reel's 5 Design Repos

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task.

**Goal:** Apply the techniques from the five design repos featured in the Instagram reel (baptisteodonovan, DcRhD2Nto7M) to lift galaxybarbershop from a template-looking build to a coherent dark-premium local-business site — without rewriting the stack or breaking SEO/i18n.

**Architecture:** Static vanilla HTML/CSS/JS (index.html 594 / styles.css 2515 / script.js 2099 lines). All changes are token-driven CSS + surgical HTML/JS edits. DOM anchors, slugs, nav labels, and form field names stay frozen.

**Tech Stack:** No new dependencies. Google Fonts (Outfit + Geist), CSS custom properties, IntersectionObserver.

**Source repos (from the reel):**
1. nextlevelbuilder/ui-ux-pro-max-skill [U] — design intelligence DB (styles, palettes, UX rules)
2. Leonxlnx/taste-skill (+ redesign-skill) [T]/[R] — anti-slop bans, VARIANCE/MOTION/DENSITY dials, redesign protocol
3. VoltAgent/awesome-claude-design — 68 DESIGN.md design systems (Lamborghini/BMW/Bugatti/Nike validate the direction)
4. bergside/design-md-chrome — DESIGN.md format for codifying the design system
5. kylezantos/design-motion-principles [M] — purposeful motion, easing, anti-slop motion audit

**Supporting artifacts (already in repo):**
- `.hermes/analysis/synthesis-matrix.md` — full 20-row prioritized matrix with citations (the master reference)
- `design-research-brief.txt` — 33 attributed rules extracted from the repos

---

## Key decision (needs your sign-off before Phase 2)

**Theme direction: DARK-PREMIUM "Black and Tan"** — off-black `#0f0e0c` surfaces + single warm gold accent `#d4a24a`; drop BOTH the neon-cyan sci-fi layer and the cream-paper vintage layer.

Why: the current beige+brass "premium" family and neon glows are both on taste-skill's ban list; the page violates Theme Lock (dark hero on light body); the gold-on-cream 2.3:1 contrast bug self-fixes on dark; catalog systems (Lamborghini, Nike) validate dark + monumental type + full-bleed photography for this positioning.

Alternative if rejected: refined light-vintage (keep paper, delete neon only) — still fixes rows 1-3, 5-13, 17-20 below, but keeps a banned palette family and requires darkening the gold for contrast.

**Second sign-off item:** removal (or server-side move) of the client-side password gate — plaintext credentials ship in script.js:1-7 and the page is invisible without JS.

---

## Dials (taste-skill): VARIANCE 6 / MOTION 4 / DENSITY 3
Trust-first local business: asymmetric layouts allowed (collapse to 1-col <768px), restrained fluid motion, airy spacing.

## Phases (from redesign-skill fix-priority: fonts → color → motion → spacing → components → states → polish)

### Phase 1 — Typography (S effort, highest leverage)
- Task 1.1: Add Google Fonts preconnect + link for Outfit 500/600/700 and Geist 400/500/600 (`display=swap`) in index.html head; update `--font-display`/`--font-body` (styles.css:17-18). Verify: DevTools Network shows font requests; computed style on h1 = Outfit.
- Task 1.2: Sweep phantom weights 860/820/780/760/740/680 → 700/600/500; headlines: tracking -0.02em, line-height ~1.05, `text-wrap: balance`.
- Task 1.3: Delete numbered 01/02/03 eyebrows (services index.html:216-243, proof-cards 325-341); cap kickers at 1 per 3 sections; survivors get positive letter-spacing (currently 0).

### Phase 2 — Color (blocked on theme sign-off)
- Task 2.1: Dark token flip in `:root` (see token table in synthesis-matrix.md §5); sweep hardcoded light values. Largest single task — verify every section + form fields.
- Task 2.2: Delete cyan `#54d6cf` everywhere: dual `--glow` (line 16), `.button.neon`, starfield, synthwave grid keyframes (gridFlow/starSlide). Grep for the hex + glow refs.
- Task 2.3: Replace 6 copy-pasted 135° cyan+gold gradients (styles.css 581, 620, 757, 1295, 1517, 1628) with one token.
- Task 2.4: Warm-tint all shadows (never rgba(0,0,0,x)); add ~3% grain overlay.
- Task 2.5: Contrast audit — every kicker/CTA/field ≥4.5:1; scrims behind text over photos. Verify with `npx @google/design.md lint` after DESIGN.md exists.

### Phase 3 — Motion (design-motion-principles)
- Task 3.1: Add easing/duration tokens (`--ease-out-quart`, `--ease-out-expo`, `--ease-in-out-strong`, 180/450/650ms); replace every bare `ease`/`linear`.
- Task 3.2: Replace whole-section fade (styles.css:1846-1857 + section-level IO in script.js) with element-level reveals: cards translateY(16px) 450ms staggered 60-80ms (≤3 siblings), image clip-path wipes 900ms, IO threshold .2 + unobserve.
- Task 3.3: Interactive states: card hover multi-layer shadow + translateY(-2px) 180ms; CTA `:active` scale(.97); gallery-only photo scale 1.03. NEVER: nav links, body copy, form fields, pulsing, parallax.
- Task 3.4: Hero one-time entrance (opacity+translateY(12px)+blur(4px), stagger, `animation-fill-mode: backwards`).
- Task 3.5: Reduced-motion hardening — JS gate adds `.in-view` immediately when `prefers-reduced-motion`.

### Phase 4 — Spacing
- Task 4.1: One container width (1240px, replacing 1180/1360 split); spacing scale 4/8/12/16/24/32/48/64/96 as `--space-*` tokens.
- Task 4.2: Radius 0 globally (fix review-card 8px outlier ~line 1349).

### Phase 5 — Components (M-L effort)
- Task 5.1: Break card-grid monoculture (shared rule 723-730): services → asymmetric/zigzag grid, team → photo-forward, each layout family used once. CSS-only; DOM/anchors stable.
- Task 5.2: Collapse quickbar + proof-strip + conversion-strip (index.html:164-195) into ONE trust band under hero; repeat CTA after reviews (local-service pattern [U]). Keep phone + linked anchors alive.
- Task 5.3: De-fake reviews: strip Google-imitation styling (css 1349-1365), real-name short quotes, kill 6.2s auto-advance (manual controls).

### Phase 6 — States & polish
- Task 6.1: Booking form: labels above inputs, inline errors, validation. Gate removal per sign-off.
- Task 6.2: Images: srcset + width/height on all (CLS <0.1); delete ~7MB stray WhatsApp jpegs + zip from web root.
- Task 6.3: Copy sweep across ALL 5 locales: one CTA wording verbatim site-wide, tabular-nums prices, no em-dashes.
- Task 6.4: Author DESIGN.md at project root per spec in synthesis-matrix.md §5; reference from CLAUDE.md as normative; lint it.

## Preserve (do not touch)
5-language localization; a11y hygiene (skip link, aria, dialog, safe-area, reduced-motion); JSON-LD + OG; URL/anchor/nav-label/form-name freeze; hero preload + lazy-loading; real business data; `.image-band` clip-path hover (promote to signature); left-aligned headers; inline SVG icon family.

## Validation
- After each phase: visual pass at 375/768/1240px; Lighthouse (target: a11y ≥95, CLS <0.1, LCP <2.5s).
- Contrast: WCAG AA 4.5:1 on all text (lint via @google/design.md).
- Reduced-motion: emulate in DevTools, confirm no invisible content.
- i18n: switch all 5 languages, confirm no untranslated or overflowing strings.
- git: commit per task; no history rewrites.

## Risks / open questions
1. Theme flip (Phase 2) is the big sweep — Med risk; do it on a branch with per-section screenshots.
2. Password gate removal needs owner decision (is the site meant to be public yet?).
3. Trust-strip collapse removes markup — verify no JS selectors/anchors reference removed nodes.
4. Font swap changes metrics — check German/long-locale strings for overflow.
