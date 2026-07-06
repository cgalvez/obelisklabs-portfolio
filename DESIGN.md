---
name: Obsidian Precision
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c1c6d7'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8b90a0'
  outline-variant: '#414755'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e69'
  primary-container: '#4b8eff'
  on-primary-container: '#00285c'
  inverse-primary: '#005bc1'
  secondary: '#4edea3'
  on-secondary: '#003824'
  secondary-container: '#00a572'
  on-secondary-container: '#00311f'
  tertiary: '#c5c7c8'
  on-tertiary: '#2e3132'
  tertiary-container: '#8f9192'
  on-tertiary-container: '#272a2b'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a41'
  on-primary-fixed-variant: '#004493'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#e1e3e4'
  tertiary-fixed-dim: '#c5c7c8'
  on-tertiary-fixed: '#191c1d'
  on-tertiary-fixed-variant: '#454748'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Geist
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1200px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
  section-gap: 128px
---

## Brand & Style

The brand identity focuses on technical mastery and architectural integrity. Targeting high-end engineering recruiters and CTOs, the aesthetic balances the "backend" depth of midnight tones with the "mobile" vibrancy of neon accents. 

The design style is **Apple-inspired Minimalism infused with subtle Glassmorphism**. It prioritizes extreme legibility, intentional white space (or "dark space"), and a sense of physical layering. The emotional response should be one of calm authority, precision, and sophisticated technological craft. Elements appear to float over a deep, infinite canvas, suggesting a robust foundation and high-performance execution.

## Colors

The palette is anchored in a sophisticated dark spectrum to reduce eye strain and emphasize premium quality.

- **Primary (Electric Blue):** Used for primary actions, active states, and highlighting key Android-related achievements.
- **Secondary (Emerald):** Used for backend logic indicators, success states, and "system-healthy" metaphors.
- **Neutral/Background:** The base is a deep `#0A0A0A`, with surface layers utilizing slightly lighter charcoal tones (`#171717`) to create depth.
- **Accents:** High-contrast white (`#F9FAFB`) is reserved for primary text to ensure maximum readability against the dark canvas.

## Typography

This design system utilizes **Inter** for its neutral, systematic clarity, paired with **Geist** for technical labels to lean into a "developer-centric" aesthetic.

- **Scale:** Large display type is used sparingly for impact, while body text maintains generous line-height for long-form technical case studies.
- **Weight:** Use Semi-Bold (600) for section headers and Medium (500) for interactive labels.
- **Micro-copy:** Use Geist for monospaced-style labels (e.g., tags, version numbers, or code snippets) to provide a subtle nod to the backend nature of the work.

## Layout & Spacing

The layout follows a **Fixed Grid** philosophy for desktop to maintain a premium "gallery" feel, transitioning to a fluid model for mobile devices.

- **Grid:** A 12-column grid is used for desktop. Skill cards and project previews should span 4 or 6 columns to maintain breathing room.
- **Rhythm:** An 8px linear scale governs all spacing. Section gaps are intentionally large (128px+) to force focus on one narrative block at a time.
- **Mobile:** Margins shrink to 20px, and column spans typically collapse to a single-column stack for readability.

## Elevation & Depth

Depth is communicated through **Glassmorphism** and **Tonal Layering** rather than traditional heavy shadows.

- **Surface Levels:** 
  - Level 0: Pure dark background (`#0A0A0A`).
  - Level 1: Translucent cards with a `backdrop-filter: blur(12px)` and a subtle 1px border (`rgba(255,255,255,0.08)`).
- **Interactive Depth:** On hover, cards should subtly "lift" by increasing the border opacity and adding a faint, colored glow (Electric Blue or Emerald) at 10% opacity behind the card.
- **Transitions:** Use CSS cubic-bezier(0.4, 0, 0.2, 1) for all movement to mimic the smooth, heavy feel of high-end hardware interfaces.

## Shapes

The design system uses **Rounded** corners to soften the technical edge and align with modern OS standards (iOS/Android).

- **Standard Elements:** Buttons and input fields use `0.5rem` (rounded).
- **Containers:** Project and Skill cards use `1rem` (rounded-lg) to create a distinct frame for content.
- **Interactive Tabs:** Pill shapes (`3rem`) are reserved for filter chips and status indicators to differentiate them from structural cards.

## Components

- **Interactive Timeline:** A vertical 2px line in a muted grey, with "nodes" that glow Emerald when scrolled into view. Dates should use the Geist label style.
- **Skill Cards:** A grid of cards with subtle 1px borders. Icons should be monochrome, turning to the accent color (Blue/Emerald) only on hover.
- **Primary Buttons:** Solid Electric Blue with white text. No gradients; use flat color for a modern, digital-first look.
- **Input Fields:** Darker than the background, with a 1px border that illuminates in Electric Blue on focus.
- **Glass Cards:** High-level project containers using background blurs. Content inside must maintain high contrast for accessibility against the blurred background.
- **Status Badges:** Small, pill-shaped chips with low-opacity backgrounds (e.g., `rgba(16, 185, 129, 0.1)`) and solid text for "Available for Work" or "Senior" designations.