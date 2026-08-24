# Galaxy Barbershop - Redesign Synthesis Matrix

Synthesis of: codebase audit (agent 1), attributed design-rules brief `design-research-brief.txt` (agent 2), motion brief (agent 3), DESIGN.md format research (agent 4).
Citations: [T] taste-skill, [R] redesign-skill, [U] ui-ux-pro-max, [M] motion brief (kylezantos/design-motion-principles). Rule numbers refer to the brief.

**Design Read** (per [T §0.B, rule 5]): "Reading this as: local-business landing for walk-in + booking customers in Switzerland, dark premium masculine language, vanilla CSS, restrained motion, conversion anchored on phone + walk-in trust."

---

## 1. Theme direction decision: DARK-PREMIUM ("Black and Tan")

**Decision: commit to dark-premium - true off-black surfaces + one warm tan/gold accent. Drop the neon sci-fi layer entirely AND drop the cream-paper vintage layer.**

Justification:

1. **The current light-vintage palette is explicitly banned.** Rule 11 [T §4.2, §9.A] bans "the default premium beige+brass+espresso family" - which is exactly paper `#f7f3ec` + gold `#c79a42` + leather serif. "Refining" light-vintage means polishing a banned family. The sanctioned rotation for premium-masculine is "Black and Tan: true off-black + warm tan, sharp contrast, no beige" - a direct fit for a barbershop.
2. **The neon layer is banned twice over.** Rule 11 bans neon outer glows; rule 10 [R; T §4.2] mandates ONE accent locked page-wide - dual cyan+gold `--glow` (styles.css:16) fails it. Cyan/starfield/synthwave grid must go regardless of theme, so the "vintage vs neon" conflict resolves by deletion, not compromise.
3. **Page Theme Lock [T §4.11, rule 13] is currently violated** by the dark hero sitting on a light body. Going all-dark resolves the lock in the direction the strongest asset already points: the hero and the shop photography are dark. Section tints within family (`#0f0e0c` next to `#161310`) stay legal.
4. **The site's worst contrast bug fixes itself.** Gold `#c79a42` on cream is ~2.3:1 (audit #6); the same gold family on `#0f0e0c` clears WCAG AA 4.5:1 [U priority 2, rule 26] with no accent rebrand.
5. **Catalog validation** (agent 4): Lamborghini (true black + gold + neo-grotesk), BMW, Bugatti, Nike all confirm dark + monumental type + full-bleed photography as the proven language for this positioning; rule 14 [R] ("photography behind hero/CTA blocks") suits a photo-heavy barbershop and needs dark scrims anyway.
6. **Compatibility with "fix, never rewrite" [R, rule 1]:** the flip is token-driven. Colors live in `:root` (styles.css ~lines 10-20); the conversion is a token swap plus per-section sweep, not a rebuild. HTML structure, slugs, anchor IDs, nav labels, form fields all stay fixed [T §11.F, rule 3]. It is the largest single line-item below (effort L), but it retires two banned aesthetics in one move and unblocks every color rule downstream.

**What survives of "vintage":** the brand's warmth moves into the accent (warm tan/gold), warm-tinted dark surfaces, and photography - not into cream backgrounds or a serif display face.

---

## 2. Prioritized improvement matrix

Ordered by redesign-skill fix-priority [R, rule 4]: fonts -> color -> hover/motion -> spacing -> components -> states -> polish.

| # | Phase | What to change (selectors / lines) | Rule cited | Impact | Effort | Risk |
|---|-------|-----------------------------------|------------|--------|--------|------|
| 1 | Fonts | **Actually load fonts.** Declared Cormorant Garamond + Inter (`:root` styles.css:17-18) are never loaded - visitors see Georgia/system. Replace with a loaded characterful sans pair: add Google Fonts `<link>` (preconnect + display=swap) for **Outfit** (display) + **Geist** (body); update `--font-display`/`--font-body` | [R Typography, rule 15]; [T §4.1]; audit #1 | High | S | Low - pure addition; verify FOUT with swap |
| 2 | Fonts | **Kill phantom weights.** Sweep `font-weight: 860/820/780/680` across styles.css to loaded weights 700/600/500; headlines get tight negative tracking + `line-height` near 1; add `text-wrap: balance` on headings | [R, rule 16]; [T §4.1]; audit #1 | High | S | Low |
| 3 | Fonts | **Eyebrow restraint.** Delete numbered `01/02/03` section eyebrows (banned mannerism, two sections); keep max 1 uppercase kicker per 3 sections (hero counts); give survivors positive letter-spacing (currently 0, cramped) | [T §4.7 rule 17; §9.F rule 30]; audit #3, #6 | Med | S | Low |
| 4 | Color | **Dark token flip.** In `:root`: paper `#f7f3ec` -> `#0f0e0c` base / `#161310` raised; ink -> warm off-white `#ece7dd`; no pure #000/#fff anywhere; sweep hardcoded light values outside `:root` | [R Color, rule 9]; [T §4.11 rule 13]; theme decision | High | L | Med - biggest sweep; test every section + form fields on dark |
| 5 | Color | **Single accent lock.** Delete cyan `#54d6cf` everywhere: dual `--glow` (line 16), `.button.neon`, starfield, synthwave perspective grid. One accent: warm gold `#d4a24a`, identical in nav/hero/CTA/footer | [R; T §4.2 rule 10; rule 11 neon ban]; audit #2 | High | M | Low - deletions; grep for cyan hex + glow refs |
| 6 | Color | **De-duplicate gradients.** Replace the 6 copy-pasted 135deg cyan+gold gradients (styles.css 581, 620, 757, 1295, 1517, 1628) with one token: solid accent or subtle same-hue gold ramp | [T §4.2 rule 10]; [rule 11 AI-gradient ban]; audit #2 | High | S | Low |
| 7 | Color | **Depth pass.** Tint all shadows to background hue (warm brown-black, never `rgba(0,0,0,x)`); one light direction; add fixed low-opacity grain/noise overlay (`pointer-events:none`) | [R Surfaces, rule 12]; [T §6.E] | Med | S | Low |
| 8 | Color | **Contrast audit.** Every kicker/CTA/form field vs its new dark background must pass 4.5:1; gold text only at sizes/weights that pass; scrim behind any text over photos | [U priorities 1-2, rule 26]; audit #6 | High | S | Low |
| 9 | Hover/motion | **Easing + duration tokens.** Add `--ease-out-quart: cubic-bezier(.25,1,.5,1)`, `--ease-out-expo: cubic-bezier(.16,1,.3,1)`, `--ease-in-out-strong: cubic-bezier(.77,0,.175,1)`; micro 180ms / enter 450ms / hero 650ms; replace every bare `ease`/`linear` | [M]; [T §7 rule 7]; audit #5 | High | S | Low |
| 10 | Hover/motion | **Replace whole-section fade** (styles.css 1846-1857, section-level IO) with element-level reveals: cards `opacity + translateY(16px)` 450ms, stagger 60-80ms, max 3 siblings, IO threshold .2 + unobserve; gallery `.image-band` clip-path wipes 900ms once, `--ease-in-out-strong` | [M]; [T §5.C rule 25]; audit #5 | High | M | Low - JS change in script.js observer |
| 11 | Hover/motion | **Interactive states everywhere.** Card hover: shadow-deepen + `translateY(-2px)` 180ms multi-layer shadow; all CTAs `:active` scale(.97); visible focus rings on dark; photo hover scale 1.03 inside `overflow:hidden` (gallery only). Never animate nav links/body copy/form fields; no pulsing CTAs, no parallax | [R Interactivity, rule 24]; [M must/must-not lists] | High | M | Low |
| 12 | Hover/motion | **Hero one-time entrance.** Opacity + translateY(12px) + blur(4px), stagger 80-120ms, `animation-fill-mode: backwards`, `--ease-out-expo`, ~650ms, runs once | [M]; [T §5 rule 25 - motivated: hierarchy] | Med | S | Low |
| 13 | Hover/motion | **Reduced-motion hardening.** Keep global `prefers-reduced-motion` kill; add JS gate so IO adds `.in-view` immediately when reduced (no invisible content) | [M]; [T §6.B rule 24]; preserves existing a11y | Med | S | Low |
| 14 | Spacing | **Unify spatial system.** One container width (pick 1240px; currently 1180/1360 split); spacing scale 4/8/12/16/24/32/48/64/96 replacing ad-hoc 8-22px gaps; asymmetric section padding (denser above, airier below fold) instead of uniform clamp(36-62px) | [R Layout, rule 22]; [T §3.E]; [U rule 8 density]; audit #10 | Med | M | Med - regression-check breakpoints |
| 15 | Spacing | **Radius policy: 0 everywhere.** Sharp edges fit dark-premium (Lamborghini/Nike refs); fix the one outlier (review cards 8px, css ~1349); single radius system is a pre-flight gate | [T §14 rule 33]; audit #10; agent-4 catalog | Low | S | Low |
| 16 | Components | **Break the card-grid monoculture** (shared rule styles.css 723-730 across 6 sections). Services: 2-col zigzag or asymmetric grid (ban three-equal-cards); team: photo-forward treatment distinct from services; each layout family appears once; add full-width photo band as section-break | [T §4.3, §9.C rule 19; §4.7 rule 21]; [R Layout]; audit #3 | High | L | Med - CSS-only restructure, keep DOM/anchors stable [T §11] |
| 17 | Components | **Collapse redundant trust strips.** quickbar + proof-strip + conversion-strip (index.html 164-195) repeat phone/4.8/CHF 20/walk-ins 3x in 300px. Keep ONE trust band under hero; move repeat CTA to after testimonials per local-service pattern | [U rule 23 landing pattern]; [T §4.10 rule 30]; audit #4 | High | M | Med - removes markup; keep phone number + any linked anchors alive |
| 18 | Components | **De-fake the reviews.** Strip Google-imitation styling (colored G wordmark css 1349-1365, "G" avatars, text-glyph stars); quotes <=3 lines with real name attribution; stop 6.2s auto-advance (manual controls, or pause-on-hover/interaction) | [T §4.10 rule 30; §9.D rule 29]; [M - unmotivated motion]; audit #7 | Med | M | Low - legal/trust risk actually decreases |
| 19 | States | **Booking form + gate.** Labels above inputs (never placeholder-as-label), inline errors below fields, client-side validation; flag the plaintext client-side password gate (script.js 1-7) for removal or server-side move - also fixes page-hidden-without-JS (css 69-73) | [T §4.5-4.6 rule 28]; [R]; [U priority 8]; audit #8 | Med | M | Med - gate removal needs owner sign-off |
| 20 | Polish | **Assets + copy sweep.** Add `srcset`/`width`/`height` to all images (CLS<0.1, LCP<2.5s); delete ~7MB stray WhatsApp jpegs + zip from web root; zero em/en-dashes visible; ONE CTA wording verbatim in nav/hero/footer; tabular-nums on prices; audit for AI-tell copy across all 5 locales | [T §4.8 rule 31; §9.G rule 18; §4.5 rule 27]; [R Content rule 29]; audit #9 | Med | M | Low - i18n: sweep every locale file |

---

## 3. PRESERVE explicitly (do not touch / carry forward)

- **5-language localization** - all locale content and switching logic; every copy change must land in all 5 locales.
- **A11y hygiene**: skip link, aria attributes, `prefers-reduced-motion` support, `<dialog>` lightbox, safe-area insets. Extend, never regress.
- **JSON-LD schema**, meta/OG - and keep it in sync if any visible business data is edited.
- **URL structure, anchor IDs, nav labels, form field names/order, logo, legal copy** - frozen per [T §11.F, rule 3]; SEO migration is the #1 redesign risk [T §11, rule 2].
- **Hero image preload + lazy-loading** pattern.
- **Real business data**: actual prices (CHF 20 etc.), real phone, real hours - organic numbers are an anti-slop asset [rule 29].
- **`.image-band` clip-path hover** - the one distinctive move; promote it to signature (motion brief already builds on it).
- **Left-aligned section headers** - already matches variance 4-7 semantics [T §7, rule 7].
- **Real inline SVG contact icons** (one family, one stroke width - keep consistent when adding any icon).
- **Dark hero photography** - becomes the anchor of the new all-dark theme.

---

## 4. Recommended dials [T §1, rules 6-7]

**Current inferred**: VARIANCE ~3 (uniform card grids, one layout family), MOTION ~2 (single generic fade, bare `ease`), DENSITY ~4 (moderate, some cramped strips).

**Recommended: VARIANCE 6 / MOTION 4 / DENSITY 3**

- **VARIANCE 6**: redesign-overhaul rule = existing +2 -> 5; nudged to 6 to reach the 4-7 band that unlocks zigzag/asymmetric/mixed-aspect layouts needed to break the card monoculture (row 16), while staying below the 7/6/3 premium-consumer preset - this is a trust-first local business, not a portfolio flex. Asymmetric layouts must collapse to single column <768px [rule 7].
- **MOTION 4**: existing +2 = 4 exactly. Fluid transform/opacity transitions with proper cubic-beziers, staggered reveals, one-time hero entrance - and nothing more. The motion brief's must-not list (no parallax, no pulsing, nothing >800ms) caps it here; booking conversion punishes distraction.
- **DENSITY 3**: unchanged direction per overhaul rule but formalized low: airy section gaps, 24-96px marketing spacing scale [U rule 8]. Collapsing the three redundant strips (row 17) is what actually buys the air.

---

## 5. DESIGN.md spec (to author at project root, referenced from CLAUDE.md/AGENTS.md as normative)

Format per agent 4: frontmatter, Mission, Brand, Style Foundations, component rules, do's/don'ts, testable quality gates ("must" vs "should"). Lint with `npx @google/design.md lint` (WCAG 4.5:1 check).

**Frontmatter/Mission**: Galaxy Barbershop - dark premium masculine local-service landing; conversion = phone call + walk-in trust; dials 6/4/3.

**Color tokens** (Black and Tan family, rule 11):
```
--bg-base:      #0f0e0c   (page; warm off-black - never #000)
--bg-raised:    #161310   (cards, nav, raised surfaces)
--bg-sunken:    #0b0a09   (footer, inset bands)
--ink:          #ece7dd   (primary text - never #fff)
--ink-muted:    #a89f90   (secondary text; passes 4.5:1 on --bg-base)
--accent:       #d4a24a   (single accent: warm gold/tan, sat <80%; nav=hero=CTA=footer)
--accent-strong:#e5b65f   (hover/large-type only)
--line:         #2a251e   (borders, hairlines)
--shadow-tint:  rgba(20,15,8,…)  (all shadows warm-tinted, one light direction)
```
Grain: fixed noise overlay ~3% opacity, pointer-events none. Theme lock: every section within this family; no light sections.

**Typography** (load exactly these, Google Fonts, `display=swap`):
- Display: **Outfit** - weights **500, 600, 700**. Headlines: 700, tracking -0.02em, line-height 1.05, `text-wrap: balance`.
- Body: **Geist** - weights **400, 500, 600**. 16px base, line-height 1.6, max 65ch.
- Numerals/prices: `font-variant-numeric: tabular-nums`.
- Banned: unloaded declarations, weights not in the loaded set, serif display faces, em/en-dashes in visible copy.

**Spacing scale**: 4, 8, 12, 16, 24, 32, 48, 64, 96 px (`--space-1` … `--space-9`). Container max-width 1240px. Section vertical padding from the 48-96 band, tuned asymmetrically; single-column collapse <768px mandatory.

**Radius policy**: `--radius: 0` globally (sharp, premium-dark). No exceptions; pill shapes banned.

**Motion tokens**:
```
--ease-out-quart:     cubic-bezier(0.25, 1, 0.5, 1)     (entrances)
--ease-out-expo:      cubic-bezier(0.16, 1, 0.3, 1)     (hero)
--ease-in-out-strong: cubic-bezier(0.77, 0, 0.175, 1)   (clip-path reveals)
--dur-micro: 180ms;  --dur-enter: 450ms;  --dur-hero: 650ms
```
Rules: transform/opacity/clip-path only; nothing >800ms; bare `ease`/`linear` banned; reduced-motion kill + JS `.in-view` gate mandatory.

**Quality gates (must)**: single accent; theme lock; single radius; every CTA/form field >=4.5:1; hero fits viewport (`min-height:100dvh`), headline <=2 lines, <=4 text elements; eyebrows <= ceil(sections/3); no three-equal-card rows; one CTA wording verbatim site-wide; zero em-dashes; 44x44 touch targets; all changes mirrored in 5 locales; anchors/slugs/nav labels unchanged.
