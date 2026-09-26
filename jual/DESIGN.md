---
name: Gudang Industrial Exchange
colors:
  surface: '#121416'
  surface-dim: '#121416'
  surface-bright: '#38393c'
  surface-container-lowest: '#0c0e10'
  surface-container-low: '#1a1c1e'
  surface-container: '#1e2022'
  surface-container-high: '#282a2c'
  surface-container-highest: '#333537'
  on-surface: '#e2e2e5'
  on-surface-variant: '#e4beb2'
  inverse-surface: '#e2e2e5'
  inverse-on-surface: '#2f3133'
  outline: '#aa897e'
  outline-variant: '#5b4138'
  surface-tint: '#ffb59b'
  primary: '#ffb59b'
  on-primary: '#5b1a00'
  primary-container: '#ff5e14'
  on-primary-container: '#541800'
  inverse-primary: '#a93800'
  secondary: '#ffb693'
  on-secondary: '#561f00'
  secondary-container: '#ea6b21'
  on-secondary-container: '#4c1a00'
  tertiary: '#b9c8de'
  on-tertiary: '#233143'
  tertiary-container: '#8695aa'
  on-tertiary-container: '#1f2e3e'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdbcf'
  primary-fixed-dim: '#ffb59b'
  on-primary-fixed: '#380d00'
  on-primary-fixed-variant: '#812900'
  secondary-fixed: '#ffdbcc'
  secondary-fixed-dim: '#ffb693'
  on-secondary-fixed: '#351000'
  on-secondary-fixed-variant: '#7a2f00'
  tertiary-fixed: '#d4e4fa'
  tertiary-fixed-dim: '#b9c8de'
  on-tertiary-fixed: '#0d1c2d'
  on-tertiary-fixed-variant: '#39485a'
  background: '#121416'
  on-background: '#e2e2e5'
  surface-variant: '#333537'
typography:
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.03em
  display-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  title-md:
    fontFamily: Space Grotesk
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Space Grotesk
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  label-lg:
    fontFamily: Space Grotesk
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.02em
  label-md:
    fontFamily: Space Grotesk
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.04em
  label-tech:
    fontFamily: Space Grotesk
    fontSize: 11px
    fontWeight: '700'
    lineHeight: 14px
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-desktop: 1.5rem
  margin: 1rem
  margin-tablet: 2rem
  margin-desktop: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system targets consumers, IT departments, and hardware hobbyists seeking quick, transparent trade-ins and liquidations for used, surplus, or broken tech hardware. It merges the utilitarian grit of an industrial logistics warehouse with high-precision modern fintech clarity. The interface projects immediacy, mechanical reliability, fair valuation, and structured efficiency.

The visual style is **Industrial High-Contrast Modern**:
- **Tone:** Technical, decisive, pragmatic, transparent, and robust.
- **Visual Weight:** Deep charcoal surfaces provide an anchored, darkroom substrate. Safety orange guides user attention to high-value conversion points (instant quote estimations, diagnostic checklists, and submission CTAs).
- **Metaphor:** High-density inventory manifests, circuit schematic precision, technical diagnostic readouts, and clear step-by-step processing paths.

## Colors

The palette establishes an aggressive visual hierarchy built for conversion velocity and diagnostic legibility under low or harsh lighting conditions.

- **Background & Base Layers:**
  - Base Floor (`#111315`): Deep chassis black for application grounding.
  - Surface Raised (`#1A1D20`): Panel and container card background.
  - Surface Highlight (`#22262B`): Active row selections, hover states, and input field backgrounds.
- **Accents & Conversions:**
  - Core Brand / Primary Action (`#FF5E14`): High-voltage safety orange reserved strictly for primary conversions, final values, and active progress points.
  - Secondary Accent (`#FF7A30`): Hover transitions, interactive focus markers, and high-impact notices.
- **Typography & Technical Delimiters:**
  - Primary Content (`#FFFFFF`): Hardware specs, valuations, main headings.
  - Secondary Readouts (`#94A3B8`): Subheadings, diagnostic prompts, metadata specs.
  - Muted Borders & Grids (`#64748B` at 30–50% opacity, `#2E343B`): Rulers, structural cell walls, divider lines.
  - Functional Diagnostics: Emerald (`#10B981`) for working states, Amber (`#F59E0B`) for minor flaws, Crimson (`#EF4444`) for fully bricked/broken components.

## Typography

Typography relies on **Space Grotesk** across display, body, and technical telemetry. Its geometric precision and mechanical vernacular reinforce the industrial warehouse aesthetic without compromising readability.

- **Headline Hierarchy:** Expressed in tight negative tracking (`-0.02em` to `-0.03em`) with heavy weight (`700`), delivering crisp mechanical authority across device valuation metrics.
- **Telemetry & Technical Labels:** Micro tags, serial references, and status badges use `label-tech` with uppercase transformations and loose tracking (`0.08em`) to mirror hardware specification plates and factory inventory stencils.
- **Numbers & Monetary Quotations:** Always use tabular or proportional figures with high visual contrast against dark backgrounds.

## Layout & Spacing

The structural layout utilizes a strict 12-column responsive fluid grid designed for scanning efficiency and step-by-step conversion funnels.

- **Breakpoints:**
  - Mobile: `< 640px` (4 columns, `margin`: `1rem`, `gutter`: `1rem`).
  - Tablet: `640px – 1023px` (8 columns, `margin-tablet`: `2rem`, `gutter`: `1rem`).
  - Desktop: `≥ 1024px` (12 columns, `margin-desktop`: `3rem`, `gutter-desktop`: `1.5rem`, max grid envelope: `1280px`).
- **Rhythm & Structure:** Dense vertical rhythm prevents sprawling dead space. Components lock together with solid, structural borders to evoke modular industrial racking units.
- **Reflow Logic:** Multi-step valuation configurations occupy sticky side rails on desktop (4 columns) while form inputs occupy the main 8-column canvas. On mobile, this converts into a fixed bottom action anchor.

## Elevation & Depth

This design system avoids soft organic drop shadows. Depth is communicated strictly through **Tonal Layering** combined with **Structural Framing Borders**:

1. **Surface 0 (Chassis Ground):** `#111315` — The deep foundation layer of the app.
2. **Surface 1 (Card & Module Shells):** `#1A1D20` with a 1px solid border (`#2E343B`). No ambient drop shadow.
3. **Surface 2 (Interactive Floating / Active Cells):** `#22262B` with a 1px border (`#3F4752`).
4. **Surface 3 (Overlays, Modals, Sticky Action Drawers):** `#1A1D20` backed by a 1px solid outline (`#FF5E14` or `#475569`) with a direct 4px directional hard offset: `box-shadow: 0 4px 0 0 #000000`.
5. **Focus / Critical Attention:** High-contrast 2px solid halo of Safety Orange (`#FF5E14`) without blur radius.

## Shapes

The shape philosophy reflects precision-milled hardware casings. Geometry stays tight, intentional, and compact:

- **Base Radius (`roundedness: 1`):** `4px` (`0.25rem`) applied to chips, input fields, spec tags, and buttons.
- **Container Radius (`rounded-lg`):** `8px` (`0.5rem`) applied to large product category panels, valuation cards, inspection grids, and modal dialogs.
- **Outer Shells (`rounded-xl`):** `12px` (`0.75rem`) reserved for top-level system floating containers.
- **Disallowed Shapes:** Full pill shapes and organic fluid bubbles are prohibited; buttons and badges must retain a tangible, squared-off industrial character.

## Components

### Buttons
- **Primary CTA:** Solid safety orange (`#FF5E14`), text in pure white (`#FFFFFF`), `font-weight: 700`, uppercase tracking, `4px` corner radius. Hover shifts to `#FF7A30` with a subtle `translateY(-1px)`.
- **Secondary Action:** Dark charcoal fill (`#22262B`), 1px structural border (`#64748B`), white text. Hover border shifts to `#94A3B8`.
- **Destructive / Reject:** Flat surface with an explicit 1px crimson border (`#EF4444`) and crimson text.

### Technical Badges & Status Chips
- Height: `22px` to `26px`.
- Layout: Monospaced/Space Grotesk uppercase `label-tech` microcopy.
- Variations:
  - Condition: "SCRAP / BROKEN" (`#EF4444` background at 10% opacity, `#EF4444` border, crimson text).
  - Condition: "OPERATIONAL" (`#10B981` background at 10% opacity, emerald text).
  - Category / Spec: `#22262B` surface, `#64748B` border, `#94A3B8` text.

### Category & Valuation Cards
- Structured as modular inventory panels: 1px border (`#2E343B`), `#1A1D20` base.
- Top section: Hardware tag + status indicator.
- Mid section: Primary hardware model name in white bold typography.
- Bottom section: Immediate "Buy-Back Up To: Rp [Value]" displayed in bright safety orange.

### Search & Diagnostic Inputs
- Background `#1A1D20`, 1px border `#2E343B`, placeholder text `#64748B`.
- Focus state: Border instantly shifts to `#FF5E14` with a 1px solid outer ring. No soft blur.
- Integrated hardware search includes immediate spec chips and device architecture tags.

### Selection Controls (Checkboxes & Radios)
- Checkboxes: `18x18px`, `2px` border radius, `#22262B` background. Active state fills with `#FF5E14` featuring an angular white checkmark.
- Radio Tiles (Condition Selector): Card-like buttons with radio dot, condition label ("Grade A: Minor Scratches", "Grade C: Dead Motherboard"), and associated price impact tag.

### Step Indicator & Progress Funnel
- Linear segmented pipeline: Segment blocks connect via solid 2px tracks.
- Completed: `#10B981` track with solid checkmark.
- Active: `#FF5E14` track with high-contrast numerical block.
- Upcoming: `#22262B` block with `#64748B` text.

### Sticky Conversion Action Bar
- Anchored to bottom on mobile, side-pinned on desktop.
- Surface `#1A1D20` with a top industrial accent border (`2px solid #FF5E14`).
- Contains instant estimated payout calculation, dynamic breakdown trigger, and a full-width high-contrast "LOCK ESTIMATE" button.

### Trust Badges & Guarantee Seals
- Framed in `#1A1D20` with micro-dotted borders (`#3F4752`).
- Displays instant data wipe verification, licensed e-waste disposal certifications, and direct payout timeline guarantees.