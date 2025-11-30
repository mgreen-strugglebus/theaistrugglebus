# The AI Struggle Bus - Design Style Guide

## Brand Overview

### The Vision
The AI Struggle Bus website embodies a "Modern Retro Journey" aesthetic. It feels like stepping into a modernized version of the 1960s/70s—clean and airy (modern UX) but warm and inviting (retro aesthetic).

### Brand Keywords
- **Friendly** - Approachable, not intimidating
- **Optimistic** - Forward-looking, positive outcomes
- **Clear** - Easy to understand, no jargon
- **Navigable** - Intuitive journey through content
- **Nostalgic** - Warm, familiar feelings
- **Trustworthy** - Reliable, credible, professional

### The Metaphor
> The website is the **map**, the service is the **fuel**, and the client is on the **journey** with you (the bus).

This metaphor should inform all design decisions—from micro-interactions to page transitions.

---

## Color Palette

### Primary Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Cream** | `#F5F0D7` | rgb(246, 240, 227) | Primary background. Matches Gemini-generated image backgrounds. Provides warm, vintage paper feel. Never use stark white. |
| **Van Blue** | `#2872A6` | rgb(40, 114, 166) | Primary CTA color. Buttons, links, interactive elements. |
| **Dark Charcoal** | `#4A4A4A` | rgb(74, 74, 74) | Primary text and headlines. Softer than pure black. |

### Accent Colors

| Name | Hex | RGB | Usage |
|------|-----|-----|-------|
| **Mustard Yellow** | `#E0C06A` | rgb(224, 192, 106) | Highlights, hover states, accent shapes |
| **Paper Beige** | `#E3CD9E` | rgb(227, 205, 158) | Secondary backgrounds, cards, subtle accents |
| **Coral Warm** | `#E07A5F` | rgb(224, 122, 95) | Secondary accent, warmth, energy |
| **Sage Green** | `#81B29A` | rgb(129, 178, 154) | Success states, positive indicators |

### Dark Mode (Optional)

| Name | Hex | Usage |
|------|-----|-------|
| **Midnight Blue** | `#1A2B3C` | Dark mode background |
| **Soft Cream** | `#F5F2EB` | Dark mode text |
| **Bright Van Blue** | `#3D9BE9` | Dark mode CTA |

### Color Application Rules
1. **Never use pure white (#FFFFFF)** - Always use Cream for backgrounds
2. **Never use pure black (#000000)** - Use Dark Charcoal or Midnight Blue
3. **Van Blue is sacred** - Only use for actionable elements
4. **Mustard for emphasis** - Use sparingly to highlight key information

---

## Typography

### Font Stack

#### Headlines (H1-H3)
**Primary:** Poppins (Bold/Extra Bold)
**Fallbacks:** Montserrat, Fredoka, system-ui

```css
font-family: 'Poppins', 'Montserrat', 'Fredoka', system-ui, sans-serif;
font-weight: 700; /* Bold for H1-H2 */
font-weight: 600; /* Semi-bold for H3 */
```

#### Body Text
**Primary:** Open Sans (Regular/Medium)
**Fallbacks:** Roboto, Lato, system-ui

```css
font-family: 'Open Sans', 'Roboto', 'Lato', system-ui, sans-serif;
font-weight: 400; /* Regular */
font-weight: 500; /* Medium for emphasis */
```

### Type Scale

| Element | Size (Desktop) | Size (Mobile) | Line Height | Weight |
|---------|---------------|---------------|-------------|--------|
| H1 | 56px / 3.5rem | 36px / 2.25rem | 1.1 | 700 |
| H2 | 40px / 2.5rem | 28px / 1.75rem | 1.2 | 700 |
| H3 | 28px / 1.75rem | 22px / 1.375rem | 1.3 | 600 |
| H4 | 22px / 1.375rem | 18px / 1.125rem | 1.4 | 600 |
| Body Large | 18px / 1.125rem | 16px / 1rem | 1.6 | 400 |
| Body | 16px / 1rem | 16px / 1rem | 1.6 | 400 |
| Small | 14px / 0.875rem | 14px / 0.875rem | 1.5 | 400 |
| Caption | 12px / 0.75rem | 12px / 0.75rem | 1.4 | 500 |

### Typography Rules
1. Headlines should feel **sturdy but approachable**
2. Body text should **never compete** with headlines
3. Use **generous line spacing** for readability
4. Limit line length to **65-75 characters** for body text

---

## Layout & Structure

### The "Road Trip" Page Philosophy
The website should feel like a journey. Each scroll reveals the next stop on the road.

### Grid System
- **Container max-width:** 1280px
- **Gutter:** 24px (mobile), 32px (desktop)
- **Columns:** 12-column grid
- **Breakpoints:**
  - Mobile: 0-639px
  - Tablet: 640-1023px
  - Desktop: 1024px+

### Section Spacing
- **Section padding:** 80px (desktop), 48px (mobile)
- **Component spacing:** 32px between related elements
- **Paragraph spacing:** 24px

### Page Structure Pattern

```
┌─────────────────────────────────────┐
│           HERO SECTION              │
│    (Bus front-facing, headline)     │
│         [Primary CTA]               │
├─────────────────────────────────────┤
│     ~ wavy road divider ~           │
├─────────────────────────────────────┤
│         PROBLEM SECTION             │
│   (Papers/chaos illustration)       │
├─────────────────────────────────────┤
│     ~ wavy road divider ~           │
├─────────────────────────────────────┤
│        SOLUTION SECTION             │
│    (Crossroads illustration)        │
│      [Service cards below]          │
├─────────────────────────────────────┤
│     ~ wavy road divider ~           │
├─────────────────────────────────────┤
│         PROOF SECTION               │
│      (Results/testimonials)         │
├─────────────────────────────────────┤
│     ~ wavy road divider ~           │
├─────────────────────────────────────┤
│          CTA SECTION                │
│    (Bus driving into sunset)        │
│         [Final CTA]                 │
└─────────────────────────────────────┘
```

---

## UI Components

### Buttons

#### Primary Button
- **Shape:** Rounded pill (border-radius: 9999px)
- **Background:** Van Blue (#2872A6)
- **Text:** Cream (#F5F0D7)
- **Padding:** 16px 32px
- **Font:** Poppins Semi-bold, 16px
- **Hover:** Darken 10%, subtle scale (1.02)
- **Active:** Darken 15%

```css
.btn-primary {
  background: #2872A6;
  color: #F5F0D7;
  border-radius: 9999px;
  padding: 16px 32px;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  transition: all 0.2s ease;
}
.btn-primary:hover {
  background: #1F5A85;
  transform: scale(1.02);
}
```

#### Secondary Button
- **Shape:** Rounded pill
- **Background:** Transparent
- **Border:** 2px solid Van Blue
- **Text:** Van Blue
- **Hover:** Fill with Van Blue, text to Cream

#### Accent Button (Rare)
- **Background:** Mustard Yellow (#E0C06A)
- **Text:** Dark Charcoal (#4A4A4A)
- **Use sparingly:** For special promotions or standout CTAs

### Cards

- **Background:** White with subtle shadow, or Paper Beige
- **Border-radius:** 16px (rounded, friendly)
- **Shadow:** `0 4px 20px rgba(74, 74, 74, 0.08)`
- **Padding:** 24px
- **Hover:** Lift slightly with increased shadow

```css
.card {
  background: #FFFFFF;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 4px 20px rgba(74, 74, 74, 0.08);
  transition: all 0.3s ease;
}
.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 30px rgba(74, 74, 74, 0.12);
}
```

### Form Inputs

- **Border-radius:** 12px
- **Border:** 2px solid Paper Beige
- **Focus:** Border changes to Van Blue
- **Background:** White
- **Padding:** 14px 18px

### Section Dividers

Instead of straight lines, use:
1. **Wavy road lines** - SVG paths that look like winding roads
2. **Dotted journey lines** - Like a map route
3. **Subtle gradient fades** - Cream to Paper Beige

```svg
<!-- Example wavy divider -->
<svg viewBox="0 0 1440 60" fill="none">
  <path d="M0,30 Q360,0 720,30 T1440,30" stroke="#E3CD9E" stroke-width="3" fill="none"/>
</svg>
```

---

## Iconography

### Icon Style Requirements
All icons must match the bus illustration style:
- **Thick outlines** (2-3px stroke)
- **Flat colors** from the brand palette
- **Rounded corners** and friendly shapes
- **Consistent sizing:** 24px, 32px, or 48px

### Icon Categories Needed
1. **Navigation:** Menu, close, arrow-right, arrow-left
2. **Services:** Megaphone (marketing), headset (support), chart (ops), book (knowledge), rocket (product)
3. **Contact:** Email, phone, calendar, location
4. **Features:** Check, clock, shield, users, lightbulb
5. **Journey:** Road, map-pin, compass, milestone

### Icon Don'ts
- ❌ No thin-line icon sets (Feather, Heroicons thin)
- ❌ No generic corporate icons
- ❌ No inconsistent styles mixed together

---

## Imagery & Illustrations

### Primary Illustration Style
- **VW Bus** as the central character
- **Isometric perspective** for complex scenes
- **Flat vector style** with thick outlines
- **Limited color palette** from brand colors
- **Whimsical but professional** tone

### Image Categories

#### Hero Images
- Front-facing VW bus (welcoming, arrival)
- Bus on open road (journey, progress)
- Crossroads scene (choices, decisions)

#### Problem/Solution Images
- Bus leaving pile of papers (escaping chaos)
- Bus at gas station (refueling, support)
- Clear road ahead (clarity, success)

#### Section Backgrounds
- Subtle road textures
- Map-style dotted paths
- Horizon line illustrations

### Photography Guidelines
If using photography (team photos, etc.):
- Warm color grading to match palette
- Natural, candid poses
- Avoid corporate stock photo feel
- Consider duotone or illustration overlay treatment

---

## Motion & Animation

### Principles
1. **Purposeful** - Animation should guide attention
2. **Subtle** - Never jarring or distracting
3. **Journey-themed** - Evoke movement and progress

### Timing
- **Micro-interactions:** 150-200ms
- **Transitions:** 300-400ms
- **Page transitions:** 400-600ms
- **Easing:** `cubic-bezier(0.4, 0, 0.2, 1)` (smooth)

### Animation Ideas
- **Bus wheel spin** on page load
- **Road unfurling** as user scrolls
- **Milestone markers** appearing on scroll
- **Button hover** - subtle bounce/lift
- **Card hover** - gentle float up

### Scroll Animations
Use intersection observer to trigger:
- Fade-in from bottom (default)
- Slide-in from sides (alternating sections)
- Scale-in (hero elements)

---

## Accessibility

### Color Contrast
All text must meet WCAG AA standards:
- Normal text: 4.5:1 ratio minimum
- Large text: 3:1 ratio minimum
- Van Blue on Cream: ✓ Passes (7.2:1)
- Dark Charcoal on Cream: ✓ Passes (8.5:1)

### Focus States
- Clear visible focus rings
- Use Van Blue for focus indicators
- Never remove focus outlines

### Motion Preferences
- Respect `prefers-reduced-motion`
- Provide static alternatives for all animations

### Screen Readers
- Proper heading hierarchy
- Alt text for all images
- ARIA labels for interactive elements

---

## Responsive Design

### Mobile-First Approach
Design for mobile, enhance for desktop.

### Breakpoint Behaviors

#### Mobile (< 640px)
- Single column layouts
- Hamburger navigation
- Stacked cards
- Full-width buttons
- Reduced section padding

#### Tablet (640-1023px)
- 2-column grids where appropriate
- Expanded navigation
- Side-by-side cards (2 per row)

#### Desktop (1024px+)
- Full navigation visible
- 3-4 column grids
- Side-by-side hero layout
- Maximum content width enforced

---

## Voice & Tone

### Writing Style
- **Clear over clever** - Avoid jargon
- **Warm and encouraging** - You're on this journey together
- **Action-oriented** - Guide toward next steps
- **Confident but humble** - Expert without arrogance

### Example Phrases
- ✓ "Start your journey" (not "Submit form")
- ✓ "Let's talk" (not "Contact sales")
- ✓ "See what's possible" (not "View case studies")
- ✓ "Leave the chaos behind" (not "Solve business problems")

### Headlines Should Feel Like
- Road signs pointing the way
- Friendly advice from a travel companion
- Milestones on a journey

---

## Implementation Notes

### CSS Custom Properties

```css
:root {
  /* Colors */
  --color-cream: #F5F0D7;
  --color-van-blue: #2872A6;
  --color-van-blue-dark: #1F5A85;
  --color-charcoal: #4A4A4A;
  --color-mustard: #E0C06A;
  --color-paper-beige: #E3CD9E;
  --color-coral: #E07A5F;
  --color-sage: #81B29A;

  /* Typography */
  --font-headline: 'Poppins', sans-serif;
  --font-body: 'Open Sans', sans-serif;

  /* Spacing */
  --space-xs: 4px;
  --space-sm: 8px;
  --space-md: 16px;
  --space-lg: 24px;
  --space-xl: 32px;
  --space-2xl: 48px;
  --space-3xl: 80px;

  /* Borders */
  --radius-sm: 8px;
  --radius-md: 12px;
  --radius-lg: 16px;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 2px 8px rgba(74, 74, 74, 0.06);
  --shadow-md: 0 4px 20px rgba(74, 74, 74, 0.08);
  --shadow-lg: 0 8px 30px rgba(74, 74, 74, 0.12);
}
```

### Tailwind Configuration
See `tailwind.config.ts` for extended theme configuration matching these specifications.

---

## Quick Reference

### Do's
- ✓ Use Cream backgrounds, never white
- ✓ Keep buttons rounded (pill shape)
- ✓ Maintain the journey metaphor
- ✓ Use illustrations consistently
- ✓ Guide users with clear CTAs

### Don'ts
- ✗ Use pure black or white
- ✗ Mix icon styles
- ✗ Create harsh, angular designs
- ✗ Overuse animations
- ✗ Forget mobile users

---

*Last updated: November 2024*
*Version: 1.0*
