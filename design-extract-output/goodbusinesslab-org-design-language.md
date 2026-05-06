# Design Language: Good Business Lab

> Extracted from `https://goodbusinesslab.org` on May 6, 2026
> 1920 elements analyzed across 6 pages

This document describes the complete design language of the website. It is structured for AI/LLM consumption — use it to faithfully recreate the visual design in any framework.

## Color Palette

### Primary Colors

| Role | Hex | RGB | HSL | Usage Count |
|------|-----|-----|-----|-------------|
| Primary | `#f9f58c` | rgb(249, 245, 140) | hsl(58, 90%, 76%) | 21 |
| Secondary | `#0000ee` | rgb(0, 0, 238) | hsl(240, 100%, 47%) | 258 |
| Accent | `#149d6c` | rgb(20, 157, 108) | hsl(159, 77%, 35%) | 3 |

### Neutral Colors

| Hex | HSL | Usage Count |
|-----|-----|-------------|
| `#000000` | hsl(0, 0%, 0%) | 2805 |
| `#1a1a1a` | hsl(0, 0%, 10%) | 352 |
| `#6b6b6b` | hsl(0, 0%, 42%) | 282 |
| `#ffffff` | hsl(0, 0%, 100%) | 88 |
| `#fffbed` | hsl(47, 100%, 96%) | 80 |
| `#767676` | hsl(0, 0%, 46%) | 66 |
| `#555555` | hsl(0, 0%, 33%) | 28 |
| `#adadad` | hsl(0, 0%, 68%) | 21 |
| `#999999` | hsl(0, 0%, 60%) | 12 |

### Background Colors

Used on large-area elements: `#fffbed`, `#f9f58c`, `#e3efda`

### Text Colors

Text color palette: `#000000`, `#0000ee`, `#fffbed`, `#ffffff`, `#555555`, `#1a1a1a`, `#222222`, `#202020`, `#6b6b6b`, `#999999`

### Gradients

```css
background-image: linear-gradient(rgb(237, 241, 183) 0%, rgb(229, 239, 208) 100%);
```

```css
background-image: linear-gradient(90deg, rgb(20, 157, 108) 0%, rgb(255, 255, 255) 100%);
```

```css
background-image: linear-gradient(0deg, rgb(237, 241, 183) 0%, rgb(229, 239, 208) 100%);
```

### Full Color Inventory

| Hex | Contexts | Count |
|-----|----------|-------|
| `#000000` | text, border, background | 2805 |
| `#1a1a1a` | text, border | 352 |
| `#6b6b6b` | text, border | 282 |
| `#0000ee` | text, border | 258 |
| `#ffffff` | text, border, background | 88 |
| `#fffbed` | background, text, border | 80 |
| `#767676` | border | 66 |
| `#555555` | text, border | 28 |
| `#f9f58c` | background | 21 |
| `#adadad` | background | 21 |
| `#999999` | text, border | 12 |
| `#e3efda` | background | 6 |
| `#149d6c` | background | 3 |

## Typography

### Font Families

- **sans-serif** — used for all (1358 elements)
- **Urbanist** — used for all (315 elements)
- **Times New Roman** — used for body (158 elements)
- **Times** — used for body (32 elements)
- **EB Garamond** — used for all (29 elements)
- **urbanist** — used for body (24 elements)
- **Inter** — used for body (4 elements)

### Type Scale

| Size (px) | Size (rem) | Weight | Line Height | Letter Spacing | Used On |
|-----------|------------|--------|-------------|----------------|---------|
| 56px | 3.5rem | 400 | 70px | normal | h1 |
| 40px | 2.5rem | 400 | 48px | normal | p |
| 38.4px | 2.4rem | 400 | 51.84px | normal | p |
| 32px | 2rem | 400 | 38.4px | normal | p, h2 |
| 24px | 1.5rem | 400 | 33.6px | normal | p, h2 |
| 20px | 1.25rem | 400 | 32px | normal | p, h3 |
| 18px | 1.125rem | 400 | 21.6px | normal | p |
| 16px | 1rem | 400 | normal | normal | html, head, meta, script |
| 14px | 0.875rem | 400 | 16.8px | normal | input, p |
| 13px | 0.8125rem | 400 | normal | normal | div, svg, circle, span |
| 12px | 0.75rem | 400 | normal | normal | body, script, div, style |

### Heading Scale

```css
h1 { font-size: 56px; font-weight: 400; line-height: 70px; }
h2 { font-size: 32px; font-weight: 400; line-height: 38.4px; }
h2 { font-size: 24px; font-weight: 400; line-height: 33.6px; }
h3 { font-size: 20px; font-weight: 400; line-height: 32px; }
```

### Body Text

```css
body { font-size: 16px; font-weight: 400; line-height: normal; }
```

### Font Weights in Use

`400` (1911x), `500` (8x), `600` (1x)

## Spacing

**Base unit:** 2px

| Token | Value | Rem |
|-------|-------|-----|
| spacing-1 | 1px | 0.0625rem |
| spacing-24 | 24px | 1.5rem |
| spacing-30 | 30px | 1.875rem |
| spacing-45 | 45px | 2.8125rem |
| spacing-60 | 60px | 3.75rem |
| spacing-64 | 64px | 4rem |
| spacing-80 | 80px | 5rem |
| spacing-120 | 120px | 7.5rem |

## Border Radii

| Label | Value | Count |
|-------|-------|-------|
| md | 10px | 12 |
| lg | 16px | 23 |
| xl | 20px | 2 |
| full | 50px | 29 |
| full | 999px | 4 |

## Box Shadows

**sm** — blur: 3px
```css
box-shadow: rgba(0, 0, 0, 0.15) 0px 1px 3px 0px;
```

## CSS Custom Properties

### Other

```css
--one-if-corner-shape-supported: 1;
```

### Semantic

```css
success: [object Object];
warning: [object Object];
error: [object Object];
info: [object Object];
```

## Breakpoints

| Name | Value | Type |
|------|-------|------|
| md | 810px | min-width |
| 1680px | 1680px | min-width |
| 1920px | 1920px | max-width |
| 2048px | 2048px | max-width |

## Transitions & Animations

### Common Transitions

```css
transition: all;
transition: background, box-shadow;
```

### Keyframe Animations

**__framer-blink-input**
```css
@keyframes __framer-blink-input {
  0% { opacity: 0; }
  100% { opacity: 1; }
}
```

**__framer-loading-spin**
```css
@keyframes __framer-loading-spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```

## Component Patterns

Detected UI component patterns and their most common styles:

### Buttons (28 instances)

```css
.button {
  background-color: rgb(249, 245, 140);
  color: rgb(0, 0, 0);
  font-size: 12px;
  font-weight: 400;
  padding-top: 0px;
  padding-right: 0px;
  border-radius: 50px;
}
```

### Inputs (72 instances)

```css
.input {
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  border-color: rgb(118, 118, 118);
  border-radius: 0px;
  font-size: 12px;
  padding-top: 1px;
  padding-right: 2px;
}
```

### Links (108 instances)

```css
.link {
  color: rgb(0, 0, 238);
  font-size: 12px;
  font-weight: 400;
}
```

## Component Clusters

Reusable component instances grouped by DOM structure and style similarity:

### Button — 3 instances, 2 variants

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(0, 0, 0);
  padding: 0px 0px 0px 0px;
  border-radius: 10px;
  border: 0px none rgb(0, 0, 0);
  font-size: 12px;
  font-weight: 400;
```

**Variant 2** (2 instances)

```css
  background: rgb(255, 255, 255);
  color: rgb(34, 34, 34);
  padding: 15px 18px 15px 18px;
  border-radius: 999px;
  border: 0px none rgb(34, 34, 34);
  font-size: 13px;
  font-weight: 400;
```

### Button — 3 instances, 2 variants

**Variant 1** (2 instances)

```css
  background: rgb(249, 245, 140);
  color: rgb(0, 0, 0);
  padding: 0px 0px 0px 0px;
  border-radius: 50px;
  border: 0px outset rgb(0, 0, 0);
  font-size: 12px;
  font-weight: 400;
```

**Variant 2** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(0, 0, 0);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px outset rgb(0, 0, 0);
  font-size: 12px;
  font-weight: 400;
```

### Input — 1 instance, 1 variant

**Variant 1** (1 instance)

```css
  background: rgba(0, 0, 0, 0);
  color: rgb(153, 153, 153);
  padding: 0px 0px 0px 0px;
  border-radius: 0px;
  border: 0px none rgb(153, 153, 153);
  font-size: 14px;
  font-weight: 400;
```

## Layout System

**5 grid containers** and **573 flex containers** detected.

### Container Widths

| Max Width | Padding |
|-----------|---------|
| 640px | 0px |
| 500px | 0px |
| 1240px | 30px |

### Grid Column Patterns

| Columns | Usage Count |
|---------|-------------|
| 1-column | 4x |
| 2-column | 1x |

### Grid Templates

```css
grid-template-columns: 595px 595px;
gap: 30px;
grid-template-columns: 1220px;
gap: 15px;
grid-template-columns: 1220px;
gap: 30px;
grid-template-columns: 1220px;
gap: 30px;
grid-template-columns: 1220px;
gap: 30px;
```

### Flex Patterns

| Direction/Wrap | Count |
|----------------|-------|
| column/nowrap | 393x |
| row/nowrap | 153x |
| row/wrap | 24x |
| column/wrap | 3x |

**Gap values:** `10px`, `12px`, `15px`, `25px`, `30px`, `45px`, `5px`, `60px`, `6px`, `8px`

## Accessibility (WCAG 2.1)

**Overall Score: 100%** — 2 passing, 0 failing color pairs

### Passing Color Pairs

| Foreground | Background | Ratio | Level |
|------------|------------|-------|-------|
| `#222222` | `#ffffff` | 15.91:1 | AAA |

## Design System Score

**Overall: 78/100 (Grade: C)**

| Category | Score |
|----------|-------|
| Color Discipline | 92/100 |
| Typography Consistency | 50/100 |
| Spacing System | 85/100 |
| Shadow Consistency | 100/100 |
| Border Radius Consistency | 90/100 |
| Accessibility | 100/100 |
| CSS Tokenization | 50/100 |

**Strengths:** Tight, disciplined color palette, Well-defined spacing scale, Clean elevation system, Consistent border radii, Strong accessibility compliance

**Issues:**
- 7 font families — consider limiting to 2 (heading + body)
- 20 !important rules — prefer specificity over overrides
- 75% of CSS is unused — consider purging
- 1605 duplicate CSS declarations

## Gradients

**3 unique gradients** detected.

| Type | Direction | Stops | Classification |
|------|-----------|-------|----------------|
| linear | — | 2 | brand |
| linear | 90deg | 2 | brand |
| linear | 0deg | 2 | brand |

```css
background: linear-gradient(rgb(237, 241, 183) 0%, rgb(229, 239, 208) 100%);
background: linear-gradient(90deg, rgb(20, 157, 108) 0%, rgb(255, 255, 255) 100%);
background: linear-gradient(0deg, rgb(237, 241, 183) 0%, rgb(229, 239, 208) 100%);
```

## Z-Index Map

**5 unique z-index values** across 3 layers.

| Layer | Range | Elements |
|-------|-------|----------|
| modal | 2147483647,2147483647 | iframe.s.t.a.t.u.s._.h.i.d.d.e.n, iframe.s.t.a.t.u.s._.h.i.d.d.e.n, iframe.s.t.a.t.u.s._.h.i.d.d.e.n |
| sticky | 10,10 | div.f.r.a.m.e.r.-.1.6.3.9.d.s.7.-.c.o.n.t.a.i.n.e.r, div.f.r.a.m.e.r.-.1.6.3.9.d.s.7.-.c.o.n.t.a.i.n.e.r, div.f.r.a.m.e.r.-.j.c.q.1.2.h.-.c.o.n.t.a.i.n.e.r |
| base | -1,1 | div.f.r.a.m.e.r.-.7.0.f.v.l.v, div.f.r.a.m.e.r.-.7.0.f.v.l.v, div.f.r.a.m.e.r.-.1.q.c.o.3.o.i |

**Issues:**
- [object Object]

## SVG Icons

**5 unique SVG icons** detected. Dominant style: **outlined**.

| Size Class | Count |
|------------|-------|
| xs | 2 |
| md | 2 |
| xl | 1 |

**Icon colors:** `currentColor`, `rgb(0, 0, 0)`, `rgba(0,0,0,0.15)`, `rgb(51, 51, 51)`, `rgb(34, 34, 34)`

## Font Files

| Family | Source | Weights | Styles |
|--------|--------|---------|--------|
| Fragment Mono | cdn | 400 | normal |
| EB Garamond | cdn | 400, 500, 700 | normal, italic |
| Inter | self-hosted | 400, 600, 700 | normal, italic |
| Urbanist | self-hosted | 400, 500, 600, 700, 900 | normal, italic |

## Image Style Patterns

| Pattern | Count | Key Styles |
|---------|-------|------------|
| thumbnail | 13 | objectFit: cover, borderRadius: 0px, shape: square |
| hero | 1 | objectFit: cover, borderRadius: 0px, shape: square |

**Aspect ratios:** 1:1 (12x), 8.88:1 (1x), 16:9 (1x)

## Motion Language

**Feel:** mixed · **Scroll-linked:** yes

## Component Anatomy

### button — 6 instances

**Slots:** label, icon

## Brand Voice

**Tone:** neutral · **Pronoun:** third-person · **Headings:** unknown (tight)

### Top CTA Verbs

- **get** (3)
- **see** (1)
- **all** (1)

### Button Copy Patterns

- "get in touch" (3×)
- "see more" (1×)
- "all projects" (1×)

## Page Intent

**Type:** `landing` (confidence 0.45)
**Description:** GBL is a global NGO that creates pathways out of poverty for the world’s working poor. We advance solut % ions in climate, health, livelihoods, gender, and workplace to improve worker wellbeing and bu

## Material Language

**Label:** `flat` (confidence 0)

| Metric | Value |
|--------|-------|
| Avg saturation | 0.19 |
| Shadow profile | soft |
| Avg shadow blur | 0px |
| Max radius | 999px |
| backdrop-filter in use | no |
| Gradients | 3 |

## Imagery Style

**Label:** `photography` (confidence 0.036)
**Counts:** total 14, svg 0, icon 6, screenshot-like 0, photo-like 1
**Dominant aspect:** square-ish
**Radius profile on images:** square

## Component Library

**Detected:** `vuetify` (confidence 0.56)

Evidence:
- 13 v-* classes

## Component Screenshots

4 retina crops written to `screenshots/`. Index: `*-screenshots.json`.

| Cluster | Variant | Size (px) | File |
|---------|---------|-----------|------|
| button--default | 0 | 40 × 40 | `screenshots/button-default-0.png` |
| button--default | 1 | 144 × 50 | `screenshots/button-default-1.png` |
| button--default | 2 | 107 × 45 | `screenshots/button-default-2.png` |
| input--default | 0 | 64 × 16 | `screenshots/input-default-0.png` |

Full-page: `screenshots/full-page.png`

## Quick Start

To recreate this design in a new project:

1. **Install fonts:** Add `sans-serif` from Google Fonts or your font provider
2. **Import CSS variables:** Copy `variables.css` into your project
3. **Tailwind users:** Use the generated `tailwind.config.js` to extend your theme
4. **Design tokens:** Import `design-tokens.json` for tooling integration
