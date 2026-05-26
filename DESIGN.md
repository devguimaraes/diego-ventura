---
name: Premium Health & Authority
colors:
  surface: '#071325'
  surface-dim: '#071325'
  surface-bright: '#2e394d'
  surface-container-lowest: '#030e20'
  surface-container-low: '#101c2e'
  surface-container: '#142032'
  surface-container-high: '#1f2a3d'
  surface-container-highest: '#2a3548'
  on-surface: '#d7e3fc'
  on-surface-variant: '#d0c5b2'
  inverse-surface: '#d7e3fc'
  inverse-on-surface: '#253144'
  outline: '#99907e'
  outline-variant: '#4d4637'
  surface-tint: '#e6c364'
  primary: '#e6c364'
  on-primary: '#3d2e00'
  primary-container: '#c9a84c'
  on-primary-container: '#503d00'
  inverse-primary: '#755b00'
  secondary: '#95d4b3'
  on-secondary: '#003824'
  secondary-container: '#12533a'
  on-secondary-container: '#87c6a5'
  tertiary: '#cbc6bf'
  on-tertiary: '#32302b'
  tertiary-container: '#afaba4'
  on-tertiary-container: '#41403a'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffe08f'
  primary-fixed-dim: '#e6c364'
  on-primary-fixed: '#241a00'
  on-primary-fixed-variant: '#584400'
  secondary-fixed: '#b1f0ce'
  secondary-fixed-dim: '#95d4b3'
  on-secondary-fixed: '#002114'
  on-secondary-fixed-variant: '#0e5138'
  tertiary-fixed: '#e7e2da'
  tertiary-fixed-dim: '#cac6be'
  on-tertiary-fixed: '#1d1c17'
  on-tertiary-fixed-variant: '#494741'
  background: '#071325'
  on-background: '#d7e3fc'
  surface-variant: '#2a3548'
typography:
  display-lg:
    fontFamily: manrope
    fontSize: 56px
    fontWeight: '700'
    lineHeight: 64px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: manrope
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: manrope
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: manrope
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: manrope
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: manrope
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  base: 8px
  container-padding-desktop: 40px
  container-padding-mobile: 20px
  gutter: 24px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style
The brand personality of this design system is authoritative, sophisticated, and deeply rooted in a sense of premium wellness. It targets a discerning audience that values both clinical precision and a high-end, tactile experience. 

The design style is **Corporate / Modern** with a refined, luxury editorial edge. It utilizes a deep, immersive dark mode to establish an "after-hours" or "executive lounge" atmosphere, where the focus is on clarity and calm. High-quality typography and intentional whitespace prevent the dark palette from feeling heavy, instead creating a canvas that feels expansive and quiet.

## Colors
This design system utilizes a palette designed for high-contrast legibility and prestige. 

- **Primary (Navy Profundo - #0A1628):** The foundation of the system. Used for all primary surfaces, backgrounds, and structural containers. It provides the "authority" and depth of the interface.
- **Accent (Dourado - #C9A84C):** Reserved for primary actions, success states with a premium flair, and critical highlights. It represents the "premium" layer.
- **Secondary (Verde Sage - #2D6A4F):** Used for health-related indicators, nature-focused iconography, and subtle secondary actions.
- **Typography/Contrast (Off-white Quente - #F5F0E8):** The primary color for text, borders on dark backgrounds, and high-emphasis information. Its warmth prevents the harshness often found in pure white-on-black UI.

## Typography
The typography system relies exclusively on **Manrope** to maintain a modern, geometric, yet highly functional aesthetic. 

- **Display & Headlines:** Use tighter letter-spacing and heavier weights (600-700) to command attention. 
- **Body Text:** Maintained at a comfortable 16px-18px range with generous line heights to ensure long-form readability against the dark background.
- **Labels:** Small caps or increased letter-spacing should be used for metadata and utility labels to create a clear visual distinction from body copy.

## Layout & Spacing
The layout follows a **Fixed Grid** philosophy for desktop to maintain an editorial, controlled feel, transitioning to a fluid model for mobile devices. 

- **Desktop:** A 12-column grid with 24px gutters. Content is centered with a max-width of 1280px to prevent excessive line lengths.
- **Mobile:** A 4-column fluid grid with 20px side margins. 
- **Rhythm:** An 8px base unit governs all spacing. Vertical rhythm (stacking) should favor generous breathing room (48px+) between major sections to emphasize the premium nature of the content.

## Elevation & Depth
In this dark-themed system, depth is achieved through **Tonal Layers** and **Low-contrast Outlines** rather than heavy shadows.

- **Surface Levels:** The base background is Navy Profundo (#0A1628). Elevated containers (cards, modals) should use a slightly lighter tint of Navy or a 4% opacity Off-white overlay to lift them from the background.
- **Outlines:** Instead of drop shadows, use 1px borders in Off-white at 10% opacity for subtle definition.
- **Active States:** Use a soft "Glow" effect for Dourado elements—low-opacity outer shadows that match the accent color—to simulate a light source emitting from premium components.

## Shapes
The shape language is defined by **Pill-shaped** geometry. This extreme roundedness softens the authoritative Navy palette and makes the interface feel approachable and organic. 

All primary buttons and tags must use full pill radius. Cards and large containers use a 2rem (32px) radius to maintain consistency with the high-roundedness theme, creating a "smooth stone" aesthetic throughout the UI.

## Components
- **Buttons:** Primary buttons are Dourado (#C9A84C) with Navy text, using a full pill shape. Secondary buttons use an Off-white outline with no fill.
- **Input Fields:** Dark Navy backgrounds with a 1px Off-white border (15% opacity). On focus, the border transitions to Dourado.
- **Cards:** Use a 2rem corner radius. Backgrounds are a slightly lighter variant of the base Navy. Ensure 32px of internal padding to maintain the luxury feel.
- **Chips/Tags:** Used for Sage (#2D6A4F) accents. These should be small, pill-shaped, and use Sage as a subtle background with Off-white text for health-related metadata.
- **Lists:** Separated by low-opacity horizontal rules (Off-white at 5%). Iconography within lists should be Dourado to lead the eye.
- **Checkboxes/Radios:** When active, these should be filled with Dourado. The "checkmark" remains the base Navy color for maximum contrast.