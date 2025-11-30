# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server on port 3737
npm run build    # Production build
npm run lint     # Run ESLint
npm run start    # Start production server
```

## Architecture

This is a Next.js 16 marketing site for "The AI Struggle Bus" - an AI consulting business for SMBs. Uses React 19, TypeScript, Tailwind CSS 4, and the Next.js App Router.

### Route Structure

- `src/app/layout.tsx` - Root layout with fonts (Poppins, Open Sans) and metadata
- `src/app/(marketing)/` - Marketing pages with shared Header/Footer layout
  - `page.tsx` - Homepage
  - `solutions/`, `assessment/`, `sprint/`, `about/`, `resources/`, `book/` - Service pages
  - `results/`, `integrations/`, `governance/` - Additional service pages
  - `privacy/`, `terms/`, `faq/` - Legal/info pages
  - `resources/quiz/` - AI Readiness Quiz
- `src/app/api/contact/` - Contact form submission endpoint

### Key Integrations

- **Contentful CMS** (`src/lib/contentful/`) - Content types: `caseStudy`, `resource`, `faq`, `page`
- **Vercel Postgres** (`src/lib/db/`) - Tables: `contacts`, `quiz_responses` (see `src/types/index.ts` for schema)
- **Resend** (`src/lib/email/`) - Transactional emails from `hello@theaistrugglebus.com`
- **Vercel Analytics** - Included in root layout

### UI Components

Uses shadcn/ui (new-york style) with components in `src/components/ui/`. Import path alias `@/*` maps to `./src/*`.

## Design System

See `docs/design-style-guide.md` for complete brand guidelines. Key points:

### Colors
- **Cream** (#F5F0D7) - Primary background, never use pure white
- **Van Blue** (#2872A6) - CTAs and interactive elements only
- **Dark Charcoal** (#4A4A4A) - Text, never use pure black
- **Mustard** (#E0C06A), **Paper Beige** (#E3CD9E), **Coral** (#E07A5F), **Sage** (#81B29A) - Accents

### Typography
- Headlines: Poppins (--font-poppins)
- Body: Open Sans (--font-open-sans)

### Components
- Buttons: Rounded pill shape (border-radius: 9999px)
- Cards: 16px border-radius, subtle shadows
- Section dividers: Wavy road lines, not straight

## Environment Variables

Required in `.env.local` (see `.env.local.example`):
- `POSTGRES_*` - Vercel Postgres connection
- `RESEND_API_KEY` - Email sending
- `CONTENTFUL_SPACE_ID`, `CONTENTFUL_ACCESS_TOKEN`, `CONTENTFUL_PREVIEW_TOKEN` - CMS
- `NEXT_PUBLIC_SITE_URL` - Site URL for metadata/OG images
- `GEMINI_API_KEY` - Google Gemini API for image generation

## Image Generation

Uses Gemini's native image generation (nano-banana) to create brand illustrations.

### Files
- **Single Image:** `scripts/generate-image.py` - Generate one image at a time
- **Batch Generation:** `scripts/generate-batch.py` - Generate multiple images
- **Output:** `public/images/`
- **Documentation:** `docs/site-images.md` (image specs), `docs/aisb-content.md` (prompts)

### How to Generate Images

1. Edit the script to set output file and prompt:
   ```python
   OUTPUT_IMAGE = IMAGES_DIR / "your-image-name.png"
   prompt = """Your prompt here..."""
   aspect_ratio = "1:1"  # or "16:9"
   ```

2. Run the script:
   ```bash
   python3 scripts/generate-image.py
   ```

### Bus Design Pattern
- **Colors:** Van Blue (#2872A6) lower panels + roof, Cream (#F5F0D7) upper/window area
- **Logo:** White on blue surfaces, blue on light surfaces
- **Style:** Flat vector, thick black outlines, no eyes/faces
- **Background:** Cream (#F5F0D7)

### Current Images (33 total)

**Core Bus Views:**
- `logo.png`, `hero-bus-front.png`, `hero-bus-side-view.png`, `hero-bus-back.png`

**Home Page:**
- `chaos-papers.png`, `open-road.png`, `crossroads.png`, `co-pilot.png`, `sunset-road.png`

**Solutions Page:**
- `solution-marketing.png`, `solution-customer-service.png`, `solution-operations.png`, `solution-knowledge.png`, `solution-product.png`

**Assessment/Quiz:**
- `assessment-map.png`, `quiz-compass.png`, `resource-quiz.png`, `quiz-result.png`

**Sprint Page:**
- `sprint-speedometer.png`, `sprint-finish.png`

**Results/Case Studies:**
- `results-postcards.png`, `case-study-retailer.png`, `case-study-consultant.png`, `case-study-ecommerce.png`, `case-study-agency.png`

**About Page:**
- `about-team-bus.png`, `about-origin.png`, `about-different.png`

**Other Pages:**
- `book-phone.png`, `governance-shield.png`, `governance-data.png`, `integrations-connected.png`, `integrations-flow.png`
