# Galaxy Barbershop — QA/UX Defect Report
Reviewer: senior QA/UX pass (source-level, dark-theme flip + booking/team removal audit).
Date: 2026-08-22. Files: index.html (497 l), styles.css (2536 l), script.js (2113 l).

Contrast ratios computed from actual hex values (WCAG 2.x relative luminance):
ink #ece7dd on #0f0e0c = 15.66 · muted #a89f90 on #161310 = 7.07 · gold #d4a24a on #161310 = 7.99 · #14110c on gold = 8.13 · #1a73e8 on #161310 = **4.11 (AA fail)** · #db4437 on #161310 = 4.31 · footer .56-white = 6.46 · border #2a251e vs #161310 = 1.22.

---

## BLOCKERS

1. **[blocker] Every phone click path dials an invalid number.** `index.html:172,184,419,473,486` use `href="tel:+417****0255"` — literal asterisks in the tel: URI. Tapping "Anrufen" anywhere (hero, quickbar, contact, footer, mobile bar) fails or dials garbage, while WhatsApp uses the real 41766820255. Fix: replace all tel: hrefs with `tel:+41766820255`.

2. **[blocker] JSON-LD `telephone` is also masked.** `index.html:59` `"telephone": "+417****0255"` — Google will read a broken phone number for the business. Fix: use the real E.164 number.

3. **[blocker] Auth gate blocks the public site with plaintext credentials.** `script.js:1-7` ships `username: "bucur", password: "bucurtest1234"` in a public JS file; `index.html:25` `galaxyAuthEnabled = true`. Anyone can read the password via view-source or bypass with `localStorage.setItem('galaxyAccessUntil', '9e15')`. For launch this must be `false`; for staging use real HTTP auth (server-side). Fix: disable the gate or move protection to the host (Basic Auth / Cloudflare Access).

4. **[blocker] No-JS = permanently blank page.** `index.html:33` adds `auth-pending`, and `styles.css:85-89` hides every body child; the gate itself is only injected by JS (`script.js:42-63`). With JS blocked/failing, the visitor gets an empty black screen with no message. Fix: add a `<noscript>` fallback that removes the hiding class or shows contact info.

5. **[blocker] Reviews section overflows/clips between ~920–1060px.** `styles.css:1180` `.reviews` demands `minmax(280px,0.62fr) minmax(680px,1.38fr)` + gap ≥28px = ≥988px minimum, but the container at a 1000px viewport is only 964px; `html,body overflow-x:hidden` (styles.css:69-74) silently clips the carousel/map instead of showing a scrollbar. Fix: drop the 680px floor (e.g. `minmax(0,1.38fr)`) or collapse to one column below ~1080px.

## MAJOR

6. **[major] ~40% of script.js is dead booking/team code executed on every language change.** `script.js:109-113` (bookingForm/bookingStatus/calendar/mail queries → all null), `:126-137` (servicePrices/shopEmail/barberEmails), booking+team translation blocks ×5 languages (`:191-199, 239-259, 345-352, 389-407, 493-500, 537-554, 641-648, 685-702, 789-796, 833-850`), team/booking DOM writes in applyLanguage (`:1024-1043, 1097-1141`), calendar builders + submit handler (`:1781-1977, 1993-2113`). ~30KB of the 88KB file is unreachable; applyLanguage runs dozens of no-op querySelectorAll calls per switch. Fix: delete all booking/team code and translation keys.

7. **[major] Orphaned booking CSS (~200 lines dead).** `styles.css:49` (`#booking`), `:751` (`.booking` scroll-margin), `:777-813` (`.booking-form` in shared selectors), `:1192-1206` (`.booking::before`), `:1540-1647` (`.booking`, `.booking-copy`, `.booking-status`, `.booking-form`, `.form-wide`, `.form-actions`, `.privacy-note`), `:1989, 2054, 2198, 2207, 2390-2411, 2493`. Fix: purge every `booking`/`form-wide`/`form-actions`/`privacy-note` rule.

8. **[major] Orphaned team CSS (~80 lines dead).** `styles.css:756-764, 772-813` (`.team-grid` in shared selectors), `:823-848`, `:1013-1067` (`.team`, `.team-grid`, `.team-tags`), `:1998-1999, 2273-2287, 2496, 2527`. Fix: purge all `.team*` rules.

9. **[major] More dead selectors surviving the redesign:** `.button.neon` (`styles.css:520-524, 2186, 2485` + `script.js:994`), `.button.ghost.dark` (`:515-518`), `.button.is-disabled` (`:526-530`, only used by dead booking JS), `.cosmic-grid`/`.starfield` (`:361, 385-391, 2131-2135`) which also exist as pointless empty divs in `index.html:157-158`, `.review-controls button[aria-pressed]` (`:1289` — JS never sets aria-pressed). Fix: delete rules and the two empty hero divs.

10. **[major] Mobile above-the-fold has no phone or hours at all.** At ≤620px the quickbar is `display:none` (`styles.css:2225-2227`), hero Call/Route buttons are hidden (`:2185-2192`), and the mobile action bar only fades in after scrolling past the hero (`script.js:1444-1451`). A walk-in customer on mobile can't see the phone number or today's hours without scrolling to the very bottom. Fix: keep a compact hours/phone line under the hero on mobile, or show the action bar immediately.

11. **[major] The live open/closed status is hidden exactly where it matters.** `data-open-status` lives only in the quickbar (`index.html:185`), which is desktop-only. The dynamic "Jetzt offen bis 19:00" (script.js:1895-1924) never reaches mobile users. Fix: move/duplicate the status into the hero price area or contact section.

12. **[major] Four consecutive info strips repeat the same three facts.** hero-proof (`index.html:175-179`, rating), quickbar (`:183-187`, phone/hours/maps), proof-strip (`:189-202`, walk-ins/rating/address), conversion-strip (`:204-214`, price/walk-ins/WhatsApp) — rating appears 2×, walk-ins 3×, WhatsApp CTA 2× before the first real section. This reads as filler and buries the intro. Fix: merge proof-strip + conversion-strip into one bar (price · walk-ins · rating · CTA) and delete the other.

13. **[major] Hero is overloaded: 6 content blocks + 4 interactive elements.** eyebrow, h1, copy, price badge, 3 buttons, proof row with a 4th link (`index.html:159-180`). The price badge competes with 3 CTAs and the rating line. Fix: cut to 2 buttons (WhatsApp primary + Call secondary), fold "4.8 · 119 Reviews" into one small line, keep the price badge.

14. **[major] H1 wastes the headline on the shop name.** `index.html:161` `<h1>Galaxy Barbershop</h1>` at 7rem duplicates the header brand 100px above it and communicates zero value. The actual pitch (CHF 20, walk-ins, Schwamendingen) is demoted to body copy and a badge. Fix: h1 = benefit ("Frischer Cut. CHF 20. Ohne Termin.") and let the logo carry the name.

15. **[major] Static German HTML and JS translations diverge → text flashes and swaps on load.** e.g. reviews body: `index.html:363-366` "Kundenstimmen sind ein starker Vertrauensbeweis…" vs `script.js:226` "Ausgewählte öffentliche Stimmen zeigen schnell…" — applyLanguage rewrites German with *different* German on every load. Fix: make the HTML strings identical to `translations.de`.

16. **[major] 5-language site is invisible to search engines.** All translations are client-side JS with no `hreflang`, no per-language URLs (`?lang=` never reflected on switch), no canonical (`index.html` head). Only German gets indexed; FR/IT/ES/EN pages don't exist for Google. Fix: at minimum add canonical + `?lang=` link alternates and push `?lang=` into the URL on switch.

17. **[major] All images lack width/height → CLS.** `index.html:154, 274-276, 294, 306-355` — no intrinsic dimensions on hero, band, location, proof, gallery images; the page reflows as each loads. Fix: add `width`/`height` attributes matching each asset.

18. **[major] Review carousel is not swipeable on mobile.** `script.js:1625-1779` moves the track via `transform` with prev/next buttons only; `overflow:hidden` on the wrap (`styles.css:1301-1304`) means touch-drag does nothing on the primary mobile pattern. Fix: use scroll-snap (like `.gallery` already does at ≤620) or add pointer-drag handling.

19. **[major] Touch targets fail the 44px minimum.** Review dots are 32×10px / 46×10px (`styles.css:1471-1485`), carousel arrows 38×38 mobile (`:2380-2383`), lang select 38px (`:2096-2100`). Fix: give dots a ≥44px padded hit area; bump arrows to 44px.

20. **[major] `.review-read-more` color #1a73e8 fails AA on dark (4.11:1).** `styles.css:1451` — Google's *light-theme* link blue survived the dark flip. Fix: use Google dark-mode blue `#8ab4f8` (contrast ~9:1).

21. **[major] Light Google Maps iframe is a giant white slab in a dark page.** `index.html:394-399` — the default embed renders a bright light-mode map inside `.map-wrap` (bg `--coal`, styles.css:1491). This is the single biggest surviving light-theme block. Fix: wrap in a dark treatment (`filter: invert(0.9) hue-rotate(180deg)` on the iframe, or a static dark map image linking out).

22. **[major] `theme-color` #101111 is the old palette.** `index.html:11` — the rgba(16,17,17) grey from the pre-flip theme; browser chrome tint won't match bg `#0f0e0c`. Fix: `<meta name="theme-color" content="#0f0e0c">`.

23. **[major] `og:image` is a relative path.** `index.html:18` `content="assets/hero.webp"` — Open Graph requires an absolute URL; shares will show no image. Same for JSON-LD `image`/`logo` (`:50-51`). Fix: absolute URLs.

## MINOR

24. **[minor] Old light-theme shadow strengths are invisible on dark.** `styles.css:974` `rgba(15,14,12,0.2)`, `:1570` `0.08`, `:1582` `0.16`, `:1852` `0.32` — near-black shadows at cream-era alphas do nothing on `#0f0e0c`; other components use the tuned `rgba(10,8,5,0.4+)`. Fix: normalize all shadows to the `rgba(10,8,5,…)` scale (or delete with dead booking rules).

25. **[minor] `--red` and `--teal` are both aliased to gold.** `styles.css:13-14` — semantic role names from the old palette now lie; `.service-card span` uses `var(--red)` (`:830`), `.contact-label` uses `var(--teal)` (`:1686`). Fix: delete both vars, use `--gold`.

26. **[minor] Booking select `:invalid` still uses the old crimson.** `styles.css:1616` `rgba(157,47,42,0.54)` — a leftover of the pre-gold error color (dead rule anyway). Fix: delete with booking CSS.

27. **[minor] Two competing "white" systems.** `--white` is warm `#ece7dd` (`styles.css:8`) but ~30 rules use pure `rgba(255,255,255,…)` (e.g. `:107, 230, 316, 511, 569, 1003, 1706, 1759, 1832, 1849, 1959`) while others use `rgba(236,231,221,…)` (`:516, 1511, 1600-1602`). Borders and scrims mix cool and warm white unpredictably. Fix: standardize on the warm ink tone.

28. **[minor] Dead anchors in JS loops.** `script.js:986` iterates `["services","location","team","gallery","reviews","booking","contact"]` and `:1156-1167` writes footer links for `#team`/`#booking` — neither exists in the DOM; `t.nav` still has 7 entries for a 5-link nav (`:150`). Works only because index order happens to line up. Fix: trim id lists and `nav` arrays to the 5 real sections.

29. **[minor] Footer "Kapitel" links to `#proof`, header nav doesn't.** `index.html:466` vs `:142-148` — inconsistent information architecture between the two navs. Fix: align the two lists.

30. **[minor] Hardcoded German aria-labels in the carousel never translate.** `script.js:1651` `"Bewertung N von M"`, `:1709` `"Bewertung N anzeigen"` stay German in EN/FR/IT/ES. Fix: use `t.reviews` strings and refresh on language change.

31. **[minor] Auth gate is English-only on a 5-language site** and adds a second `<h1>` while locked (`script.js:48`). Fix: localize + use `<p>`/`<h2>`.

32. **[minor] "Read more" appears on short quotes.** `script.js:1700` shows the button if *any* language variant exceeds 150 chars, not the current one. Fix: check `getReviewQuote(review, currentLanguage).length`.

33. **[minor] Deep-link handling is a pile of racing timers.** `script.js:1539-1545` — hashchange handler + rAF + 180ms + load+120ms + load+520ms all calling `revealDeepLinkedSection`; combined with the head script that strips the hash (`index.html:26-30`), a `#services` visitor sees the top of the page, then a delayed jump. Fix: single scroll after `load` (or after fonts/hero decode), keep the hash.

34. **[minor] Hero h1 size jumps at the 920px breakpoint.** `styles.css:449` fixed `7rem` above 920px vs `clamp(4.3rem,10vw,5.15rem)` below (`:2047`) — a ~30% discontinuity at 921px. Fix: use one `clamp()` across all widths.

35. **[minor] Broken clamp(): min > preferred.** `styles.css:420` `clamp(1rem, 0.9vw, 1.14rem)` — 0.9vw is below 1rem until ~1780px viewport, so the middle term never applies below that. Same at `:1262`. Fix: `clamp(0.9rem, 0.5rem + 0.5vw, 1.14rem)`.

36. **[minor] Container/edge alignment is inconsistent at the top of the page.** Quickbar is full-bleed (`styles.css:586`), proof-strip and conversion-strip are 1240px-contained (`:617, 654`), with mismatched top margins 24px vs 14px (`:618, 657`). Three stacked bars, three different alignments/rhythms. Fix: pick one width and one spacing step.

37. **[minor] Mobile `.image-band` bleeds only on the right.** `styles.css:2293-2298` `width: calc(100% + 22px); margin-right:-22px` while the left stays at the container gutter — asymmetric edge with `margin:0 auto` still applied from `:890`. Fix: bleed both sides or neither.

38. **[minor] Reveal animation never actually hides anything.** `styles.css:1887-1903` — every state has `opacity:1`; "reveal" is only a 16px slide, so unrevealed sections sit visibly 16px low. Either intended fade is missing (`opacity:0` initial) or the opacity declarations are dead weight. Fix: decide — add `opacity:0` start or delete the opacity lines.

39. **[minor] Hero reveal classes are applied inconsistently.** `index.html:160-179` — eyebrow, h1, price have `.reveal`; hero-copy, hero-actions, hero-proof don't. Half the hero slides, half doesn't. Fix: all or nothing.

40. **[minor] WhatsApp links inconsistent about prefilled text.** Hero/conversion/footer-CTA/mobile-bar get localized prefill via `setWhatsAppLinks` (`script.js:944-953`), but the contact card (`index.html:426`) and footer "WhatsApp" (`:474`) are bare `wa.me` links with no text and are never re-pointed. Fix: include them in the selector list.

41. **[minor] Open-status text never refreshes.** `script.js:1895-1924` runs once per language apply; a tab open across 19:00 keeps saying "Jetzt offen". Fix: `setInterval(setOpenStatus, 60_000)`.

42. **[minor] Mobile nav doesn't lock scroll or close on outside tap/scroll.** `script.js:1548-1565` — the open dropdown floats over content while the page scrolls beneath it. Fix: close on scroll or add `lock-scroll` while open.

43. **[minor] Language switcher sits between brand and nav on desktop.** `index.html:132-141` + `styles.css:302-312` (`margin-left:auto`) puts "Sprache DE▾" visually before the nav links — the utility control interrupts brand→nav flow. Fix: order it after the nav (last item on the right).

44. **[minor] `scroll-margin-top` doesn't match real header heights.** `styles.css:44-52` fixed 88/104px vs a header that changes padding on scroll (`:238-245`) and shrinks at ≤620 — JS scrolling compensates but native anchor jumps (find-in-page, no-JS) misalign. Fix: compute from a `--header-h` custom property.

45. **[minor] `.hero-copy` name-drops one barber while a review praises "many barbers".** `index.html:163-164` "Khaled sorgt dafür…" vs the Zbyslaw review ("There are many barbers"). With the team section removed, the single-name promise is unverifiable and excludes the others. Fix: neutral copy ("Unser Team sorgt dafür…").

## NITS

46. **[nit] Body background grid is imperceptible.** `styles.css:59-63` — 0.02/0.014-alpha lines on near-black cost a paint layer for nothing visible. Fix: remove or raise to ~0.04.

47. **[nit] Border contrast 1.22:1.** `--line #2a251e` vs `#161310` (`styles.css:16`) — card borders barely register; the gold hover border does all the work. Fix: nudge to ~#3a332a if borders are meant to be seen.

48. **[nit] Google wordmark red #db4437 at 4.31:1** (`styles.css:1402`) — decorative, but Google's own dark-mode brand colors are brighter. Fix: use dark-theme brand palette.

49. **[nit] `.gallery img` conflicting sizing on mobile.** `styles.css:2333-2343` sets `aspect-ratio: 4/5; min-height:0` then immediately `min-height:310px` — the min-height overrides the ratio for narrow cards. Fix: keep one.

50. **[nit] Duplicate hide rules for hero buttons.** `styles.css:2185-2192` hides `.secondary,.neon` then separately `.ghost`; `:2485-2487` re-hides `.neon` (which doesn't exist). Fix: one combined rule.

51. **[nit] Two-bar hamburger icon with no open/close state change.** `index.html:128-131`, `styles.css:342-348` — unconventional glyph, no ✕ transform on open. Fix: 3 bars + animated close state.

52. **[nit] `.review-track-wrap` has left padding only** (`styles.css:1303`) — the last card clips flush against the right border while the first floats. Fix: symmetric padding + adjust translate math.

53. **[nit] `#reviews`/`#contact` ids sit on inner copy divs, not sections.** `index.html:360, 410` vs every other anchor on the `<section>` — inconsistent and makes `section[id]` scroll-margin rules (`styles.css:44-46`) miss them (they only match via the `#reviews,#contact` special-case at `:48-52`). Fix: move ids to the sections.

54. **[nit] `renderStars` builds a string with mismatched slice on non-integer ratings** (`script.js:1642-1645`) — a 4.5 rating renders 4 full stars + 1 empty (fine today, wrong the day a non-5 review is added with halves). Fix: round explicitly.

55. **[nit] `foldCalendarLine` counts UTF-16 units not octets** (`script.js:1800-1811`) — RFC 5545 folding is per-octet; umlauts can exceed 75 octets. Dead code anyway — delete with booking.

---

**Totals: 5 blockers · 18 major · 22 minor · 10 nits (55 defects).**

**5-second test verdict:** a first-time visitor sees "Zürich-Schwamendingen / Galaxy Barbershop / paragraph / CHF 20 badge". Price and location do land, but *walk-ins* only appear mid-paragraph and in strip #3, the headline says nothing, and on mobile there is no phone/hours in view. The core message "CHF 20 · ohne Termin · Dübendorfstrasse 22" should be the h1 + subline, not scattered across four strips.
