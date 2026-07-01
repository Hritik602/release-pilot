---
name: ReleasePilot
colors:
  surface: '#fcf8fa'
  surface-dim: '#dcd9db'
  surface-bright: '#fcf8fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f5'
  surface-container: '#f0edef'
  surface-container-high: '#eae7e9'
  surface-container-highest: '#e4e2e4'
  on-surface: '#1b1b1d'
  on-surface-variant: '#45464d'
  inverse-surface: '#303032'
  inverse-on-surface: '#f3f0f2'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#515f74'
  on-secondary: '#ffffff'
  secondary-container: '#d5e3fd'
  on-secondary-container: '#57657b'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#271901'
  on-tertiary-container: '#98805d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#d5e3fd'
  secondary-fixed-dim: '#b9c7e0'
  on-secondary-fixed: '#0d1c2f'
  on-secondary-fixed-variant: '#3a485c'
  tertiary-fixed: '#fcdeb5'
  tertiary-fixed-dim: '#dec29a'
  on-tertiary-fixed: '#271901'
  on-tertiary-fixed-variant: '#574425'
  background: '#fcf8fa'
  on-background: '#1b1b1d'
  surface-variant: '#e4e2e4'
typography:
  display:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
  label-md:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Geist
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 4px
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  sidebar_width: 240px
  container_max_width: 1440px
  gutter: 16px
---

## Brand & Style
The design system is engineered for high-stakes engineering environments where clarity and speed are paramount. The brand personality is **authoritative, analytical, and precise**. It targets DevOps leads and Engineering Managers who require a high-density, "at-a-glance" overview of mobile deployment readiness.

The aesthetic follows a **refined Corporate Minimalism**. It eschews decorative flourishes in favor of utility and information architecture. The interface acts as a transparent window into complex data, using structure and semantic color rather than visual effects to guide the user. The emotional goal is to evoke a sense of **ordered calm and reliability** during the pressure of a release cycle.

## Colors
This design system utilizes a sophisticated palette of deep slates and functional sematics. 
- **Primary (Deep Navy):** Used for navigation backgrounds, primary actions, and high-level headings to establish authority.
- **Neutral/Background:** A cool-toned off-white (#F8FAFC) minimizes glare during long working sessions, while pure white is reserved for interactive surfaces.
- **Borders:** A consistent light slate (#E2E8F0) replaces shadows to define boundaries.
- **Semantic Status:** 
    - **Success (Green):** "Ship" ready status.
    - **Warning (Amber):** "Wait" or "Review" status.
    - **Error (Red):** "Fix" or "Blocker" status.

## Typography
Typography is the primary tool for hierarchy. **Inter** provides exceptional legibility for high-density data, while **Geist** is introduced for labels and mono-style data points to evoke a technical, developer-friendly feel.

- **Scale:** Sizes are kept small to support high information density (13px/14px for standard body text).
- **Weight:** Semi-bold (600) and Bold (700) are used sparingly for section headers and primary data points.
- **Monospace usage:** Use the label-sm/md (Geist) for build numbers, commit hashes, and version strings.

## Layout & Spacing
The layout uses a **Fixed-Fluid hybrid grid**. A persistent left sidebar (240px) provides global navigation, while the main content area utilizes a fluid grid that caps at 1440px to maintain line-length readability.

- **Rhythm:** A strict 4px baseline grid ensures alignment across dense data tables and forms.
- **Density:** Compact spacing is preferred. Gutters are set to 16px to maximize horizontal space for complex tables.
- **Mobile:** On small screens, the sidebar collapses into a bottom navigation bar or a hamburger menu, and internal padding reduces from 24px to 16px.

## Elevation & Depth
In alignment with the minimalist style, this design system rejects heavy shadows. Depth is communicated through **Tonal Layering and Borders**.

- **Level 0 (Background):** #F8FAFC - The base canvas.
- **Level 1 (Surface):** #FFFFFF - Card containers and input fields, defined by a 1px solid #E2E8F0 border.
- **Level 2 (Interaction):** On hover, surfaces may use a subtle 1px Primary border or an extremely soft, low-blur shadow (0px 2px 4px rgba(0,0,0,0.05)) to indicate interactivity.
- **Modals:** Use a slightly more pronounced border and a semi-transparent slate backdrop blur to maintain focus.

## Shapes
The shape language is **functional and restrained**. 
- **Standard Radius:** 4px (0.25rem) for buttons, inputs, and small cards. This creates a crisp, professional look that feels structured but not aggressive.
- **Container Radius:** 8px (0.5rem) for large dashboard cards.
- **Full Radius:** Reserved only for status badges/chips to distinguish them clearly from interactive buttons.

## Components
- **Buttons:** Primary buttons use Deep Navy (#0F172A) with white text. Secondary buttons use a white background with a Slate border. All buttons use 14px Medium weight text and 4px corner radius.
- **Data Tables:** The core of the system. Rows have a fixed height of 48px, 1px bottom borders, and subtle zebra striping on hover. Headers are Geist (label-sm) in Slate-500.
- **Status Badges:** Compact pills with low-opacity backgrounds and high-contrast text. Example: "Ship" uses a light green background with dark green text.
- **Input Fields:** 36px height, 1px Slate-200 border, 4px radius. Focus state uses a 1px Navy border—no "glow" or heavy outer ring.
- **Cards:** White background, 1px border, no shadow. Card headers should be separated by a subtle 1px horizontal rule.
- **Sidebar:** Deep Navy (#0F172A) background with Slate-400 text. Active states use a solid white indicator on the left edge and white text.