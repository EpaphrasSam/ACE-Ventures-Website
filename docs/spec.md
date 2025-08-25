# ACE Ventures — Landing Page Spec (v0.1)

Target: MVP by Aug 30, 2025. Outcome: a sparse, timeless landing page that filters for alignment and invites qualified conversations.

## Brand Guardrails

- Color:
  - Background: pure white (#FFFFFF) only
  - Accent: gold (#D4AF37) sparingly (max once per viewport)
  - Ocean black (#001F2D) for footer or rare emphasis
- Typography:
  - Headers: Serif (Playfair Display) — authority
  - Body: Sans-serif (Inter) — clarity
- Tone: McKinsey/BCG—serious, restrained, confident

## Messaging

- Core line: "Alignment over everything."
- Positioning: Invitation-only holding company. Efficiency is innovation.
- Company pillars:
  - Clarity — See the root; strip the noise; define the path
  - Awareness — Know your position; see the ripples; connect the dots
  - Intentional Actions — Commit completely; execute with purpose; measure and adjust
- Philosophical statements (rotating or sectional):
  - We don't chase capital. We create systems that endure.
  - I don't care about money. I care about legacy.
  - We don't accept inbound capital—but we do accept alignment.

## Page Structure (Single Page)

1. Hero
   - Big headline: Alignment over everything.
   - No nav. No fluff. Subtle fade-in only.
   - Optional one gold accent element (rule or dot).
2. About/Positioning
   - H2: Efficiency is Innovation
   - 1-2 paragraphs explaining ACE Ventures
3. Pillars (3 columns on desktop, stacked on mobile)
   - Clarity, Awareness, Intentional Actions with bullets
4. Innovation & Effects
   - Security, Efficiency, Growth triplet
5. Quote (legacy line)
6. Invitation line (alignment over inbound capital)
7. Contact form (Netlify forms)
8. Footer (ocean black)

## Interactions/Transitions

- Subtle AOS fade-ups; no parallax/heavy motion.
- Gold accent appears only once per viewport.

## Accessibility

- WCAG AA: color contrast, focus outlines, labels/aria, min tap targets (44px)

## Performance

- No build step for MVP (Tailwind CDN)
- Target <1MB, Lighthouse >90

## Tech

- Static HTML + Tailwind CDN + AOS.js
- Netlify hosting; Netlify forms

## Open Items

- Logo: TBD (placeholder text only for now)
- Domain: aceventures.ai (configure post-deploy)
- Analytics: None for MVP

## Success Criteria

- Page matches guardrails (color usage + font pairing)
- Copy present and error-free
- Form submits on Netlify (visible in dashboard) and local toast works
- Mobile/desktop polish (spacing rhythm, type scale)

## Decisions (Locked)

- Direction: Analytical Minimal (text-first, systematic spacing)
- Typography: Playfair Display for headings, Inter for body (no third quote font for MVP)
- Philosophy placement: Static sections (no rotation)
- Gold usage: Single gold accent per viewport — reserved for quote underline only; UI elements use neutral/ocean-black
- Form: Netlify Forms with honeypot and success page; add one-line privacy note
- CTA wording: "Send with intention"

---

# Lightweight Project Plan

Milestones (by Aug 30):

- Spec sign-off (v1.0) — Aug 25
- Visual pass and microcopy lock — Aug 27
- Implement & deploy to Netlify preview — Aug 28
- QA (accessibility/perf) + domain wiring — Aug 29
- Go live — Aug 30

Tasks

- [ ] Confirm spec details (logo, any video? none for MVP)
- [ ] Lock gold accent pattern and footer usage
- [ ] Implement rotating statements (optional MVP)
- [ ] Validate Netlify form submission
- [ ] Lighthouse + axe checks
- [ ] Content proofreading
