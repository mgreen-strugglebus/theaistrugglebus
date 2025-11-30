#!/usr/bin/env python3
"""
Batch generate images for The AI Struggle Bus website.
"""

import os
import warnings
from pathlib import Path

# Suppress urllib3 OpenSSL warning (doesn't affect functionality)
warnings.filterwarnings("ignore", message="urllib3 v2 only supports OpenSSL")

from google import genai
from google.genai import types
from PIL import Image
import time

# Load environment variables from .env.local
SCRIPT_DIR = Path(__file__).parent
PROJECT_ROOT = SCRIPT_DIR.parent
ENV_FILE = PROJECT_ROOT / ".env.local"

if ENV_FILE.exists():
    with open(ENV_FILE) as f:
        for line in f:
            line = line.strip()
            if line and not line.startswith('#') and '=' in line:
                key, value = line.split('=', 1)
                os.environ.setdefault(key.strip(), value.strip())

IMAGES_DIR = PROJECT_ROOT / "public" / "images"
INPUT_BUS_IMAGE = IMAGES_DIR / "hero-bus-front.png"
INPUT_LOGO_IMAGE = IMAGES_DIR / "logo.png"

# Image definitions: (filename, aspect_ratio, prompt)
IMAGES_TO_GENERATE = [
    # Solutions Page
    ("solution-customer-service.png", "1:1", """Create an illustration of this cartoon bus with a customer service theme, maintaining the exact same art style, line weight, and color palette.

Requirements:
- Show the bus in 3/4 front view with customer service elements around it
- Keep the same cartoon aesthetic - NO eyes, faces, or people anywhere
- The bus should be blue (Van Blue #2872A6) lower panels, cream upper, blue roof
- Place the logo (second image) on the FRONT of the bus in BLUE
- A large headset floating above or near the bus
- Chat bubbles and speech bubbles floating around
- 24/7 clock or always-on indicator
- Welcoming "service station" vibe
- Background should be cream (#F5F0D7)
- Accent colors: Mustard (#E0C06A) and Coral (#E07A5F) for the floating elements
- Maintain consistent black outlines around all elements
"""),

    ("solution-operations.png", "1:1", """Create an illustration of this cartoon bus with an operations/finance theme, maintaining the exact same art style, line weight, and color palette.

Requirements:
- Show the bus in 3/4 front view with operations elements around it
- Keep the same cartoon aesthetic - NO eyes, faces, or people anywhere
- The bus should be blue (Van Blue #2872A6) lower panels, cream upper, blue roof
- Place the logo (second image) on the FRONT of the bus in BLUE
- Charts, graphs, and dashboards floating around the bus
- Data/gauge imagery suggesting metrics and analytics
- The bus being "fueled" by data concept
- Organized, systematic feel
- Background should be cream (#F5F0D7)
- Accent colors: Mustard (#E0C06A) and Sage (#81B29A) for the charts
- Maintain consistent black outlines around all elements
"""),

    ("solution-knowledge.png", "1:1", """Create an illustration of this cartoon bus as a mobile library/knowledge center, maintaining the exact same art style, line weight, and color palette.

Requirements:
- Show the bus in 3/4 front view with knowledge/library elements around it
- Keep the same cartoon aesthetic - NO eyes, faces, or people anywhere
- The bus should be blue (Van Blue #2872A6) lower panels, cream upper, blue roof
- Place the logo (second image) on the FRONT of the bus in BLUE
- Books, documents, and files floating around or stacked near the bus
- Filing cabinet or bookshelf aesthetic elements
- Knowledge flowing/accessible vibe
- Light bulb or brain icon suggesting intelligence
- Background should be cream (#F5F0D7)
- Accent colors: Mustard (#E0C06A) and Paper Beige (#E3CD9E) for documents
- Maintain consistent black outlines around all elements
"""),

    ("solution-product.png", "1:1", """Create an illustration of this cartoon bus with a product development/innovation theme, maintaining the exact same art style, line weight, and color palette.

Requirements:
- Show the bus in 3/4 front view with innovation elements around it
- Keep the same cartoon aesthetic - NO eyes, faces, or people anywhere
- The bus should be blue (Van Blue #2872A6) lower panels, cream upper, blue roof
- Place the logo (second image) on the FRONT of the bus in BLUE
- Rocket boosters or speed lines suggesting acceleration
- Blueprint/sketch papers floating around
- Gears, prototypes, or launch pad imagery
- Forward momentum, innovation, and speed
- Background should be cream (#F5F0D7)
- Accent colors: Coral (#E07A5F) for rocket elements, Mustard (#E0C06A)
- Maintain consistent black outlines around all elements
"""),

    # Assessment Page
    ("assessment-map.png", "1:1", """Create an illustration of this cartoon bus with a navigation/assessment theme, maintaining the exact same art style, line weight, and color palette.

Requirements:
- Show the bus parked next to a large unfolded map
- Keep the same cartoon aesthetic - NO eyes, faces, or people anywhere
- The bus should be blue (Van Blue #2872A6) lower panels, cream upper, blue roof
- Place the logo (second image) on the FRONT of the bus in BLUE
- Large unfolded map spread out next to the bus
- Map in Paper Beige (#E3CD9E) with Van Blue route lines
- Destinations marked with stars or pins
- Compass or magnifying glass nearby
- Background should be cream (#F5F0D7)
- Discovery and planning feel
- Maintain consistent black outlines around all elements
"""),

    ("quiz-compass.png", "16:9", """Create an illustration of this cartoon bus with a large compass, helping find direction, maintaining the exact same art style, line weight, and color palette.

Requirements:
- Show the bus in side view with an oversized compass attached or floating nearby
- Keep the same cartoon aesthetic - NO eyes, faces, or people anywhere
- The bus should be blue (Van Blue #2872A6) lower panels, cream upper, blue roof
- Place the logo (second image) on the FRONT of the bus in BLUE
- Large compass with needle pointing confidently
- Question marks transforming into arrows or direction indicators
- Sense of finding the right direction
- Background should be cream (#F5F0D7)
- Maintain consistent black outlines around all elements
"""),

    # Sprint Page
    ("sprint-speedometer.png", "1:1", """Create an illustration of this cartoon bus with a speed/progress theme, maintaining the exact same art style, line weight, and color palette.

Requirements:
- Show the bus in 3/4 view with speed elements around it
- Keep the same cartoon aesthetic - NO eyes, faces, or people anywhere
- The bus should be blue (Van Blue #2872A6) lower panels, cream upper, blue roof
- Place the logo (second image) on the FRONT of the bus in BLUE
- Large speedometer showing high speed/progress in Mustard/Van Blue
- Speed lines or motion blur effect
- 30-day calendar or clock imagery nearby
- Urgency without stress - exciting momentum
- Background should be cream (#F5F0D7)
- Maintain consistent black outlines around all elements
"""),

    ("sprint-finish.png", "16:9", """Create an illustration of this cartoon bus crossing a finish line with celebration, maintaining the exact same art style, line weight, and color palette.

Requirements:
- Show the bus crossing a checkered finish line
- Keep the same cartoon aesthetic - NO eyes, faces, or people anywhere
- The bus should be blue (Van Blue #2872A6) lower panels, cream upper, blue roof
- Place the logo (second image) on the FRONT of the bus in BLUE
- Checkered finish line banner
- Confetti and celebration elements in brand colors (Mustard, Coral, Sage)
- Trophy or medal imagery nearby
- Sense of accomplishment and victory
- Background should be cream (#F5F0D7)
- Maintain consistent black outlines around all elements
"""),

    # Results Page
    ("results-postcards.png", "16:9", """Create an illustration showing a collection of postcards featuring the cartoon bus in different success scenarios, maintaining the exact same art style, line weight, and color palette.

Requirements:
- Show 3-4 polaroid or postcard style frames arranged attractively
- Each postcard shows the bus in a different success scene
- Keep the same cartoon aesthetic - NO eyes, faces, or people anywhere
- The bus should be blue (Van Blue #2872A6) in each postcard
- Stamps or travel aesthetic elements
- "Stories from the road" feel
- Background should be cream (#F5F0D7)
- Postcards in Paper Beige (#E3CD9E) with slight shadows
- Maintain consistent black outlines around all elements
"""),

    ("case-study-retailer.png", "16:9", """Create an illustration of this cartoon bus at a boutique retail shop, maintaining the exact same art style, line weight, and color palette.

Requirements:
- Show the bus parked at or near a small boutique shop storefront
- Keep the same cartoon aesthetic - NO eyes, faces, or people anywhere
- The bus should be blue (Van Blue #2872A6) lower panels, cream upper, blue roof
- Place the logo (second image) on the side of the bus in WHITE
- Shopping bags around the bus
- Small shop with awning in brand colors
- Retail/shopping success story feel
- Background should be cream (#F5F0D7)
- Maintain consistent black outlines around all elements
"""),

    ("case-study-consultant.png", "16:9", """Create an illustration of this cartoon bus in a consulting/business context, maintaining the exact same art style, line weight, and color palette.

Requirements:
- Show the bus with business/consulting elements around it
- Keep the same cartoon aesthetic - NO eyes, faces, or people anywhere
- The bus should be blue (Van Blue #2872A6) lower panels, cream upper, blue roof
- Place the logo (second image) on the side of the bus in WHITE
- Briefcase, presentation board, or meeting imagery
- Professional business success feel
- Charts or strategy documents floating nearby
- Background should be cream (#F5F0D7)
- Maintain consistent black outlines around all elements
"""),

    ("case-study-ecommerce.png", "16:9", """Create an illustration of this cartoon bus with e-commerce elements, maintaining the exact same art style, line weight, and color palette.

Requirements:
- Show the bus surrounded by e-commerce elements
- Keep the same cartoon aesthetic - NO eyes, faces, or people anywhere
- The bus should be blue (Van Blue #2872A6) lower panels, cream upper, blue roof
- Place the logo (second image) on the side of the bus in WHITE
- Packages, boxes, and shipping elements around the bus
- Shopping cart icon floating nearby
- 5-star rating or review stars
- Online shopping success feel
- Background should be cream (#F5F0D7)
- Maintain consistent black outlines around all elements
"""),

    ("case-study-agency.png", "16:9", """Create an illustration of this cartoon bus with creative agency elements, maintaining the exact same art style, line weight, and color palette.

Requirements:
- Show the bus surrounded by creative agency elements
- Keep the same cartoon aesthetic - NO eyes, faces, or people anywhere
- The bus should be blue (Van Blue #2872A6) lower panels, cream upper, blue roof
- Place the logo (second image) on the side of the bus in WHITE
- Multiple content pieces, designs, or creative tools floating around
- Paint brush, color palette, or design elements
- Creative energy and multiple projects feel
- Background should be cream (#F5F0D7)
- Accent colors: Mustard, Coral, Sage for creative elements
- Maintain consistent black outlines around all elements
"""),

    # About Page
    ("about-team-bus.png", "16:9", """Create an illustration showing multiple buses together representing a team, maintaining the exact same art style, line weight, and color palette.

Requirements:
- Show 3-4 buses grouped together as a team/fleet
- Keep the same cartoon aesthetic - NO eyes, faces, or people anywhere
- All buses should be blue (Van Blue #2872A6) lower panels, cream upper, blue roof
- Place the logo (second image) on the FRONT of the lead bus in BLUE
- Warm, approachable team imagery
- Buses arranged in a friendly group formation
- Trust and credibility vibes
- Background should be cream (#F5F0D7)
- Maintain consistent black outlines around all elements
"""),

    ("about-origin.png", "1:1", """Create a vintage-style illustration of this cartoon bus at a starting point, maintaining the exact same art style, line weight, and color palette.

Requirements:
- Show the bus at a garage or starting line
- Keep the same cartoon aesthetic - NO eyes, faces, or people anywhere
- The bus should be blue (Van Blue #2872A6) lower panels, cream upper, blue roof
- Place the logo (second image) on the FRONT of the bus in BLUE
- Nostalgic, origin story feel
- Maybe slight sepia or vintage tint
- Starting point imagery - garage, "START" sign
- Promise of the journey ahead
- Background should be cream (#F5F0D7)
- Maintain consistent black outlines around all elements
"""),

    ("about-different.png", "16:9", """Create an illustration of this cartoon bus taking a scenic route while other vehicles are stuck in traffic, maintaining the exact same art style, line weight, and color palette.

Requirements:
- Show the bus on a clear, open scenic path
- Keep the same cartoon aesthetic - NO eyes, faces, or people anywhere
- The bus should be blue (Van Blue #2872A6) lower panels, cream upper, blue roof
- Place the logo (second image) on the side of the bus in WHITE
- Other generic vehicles (simple shapes) stuck in gridlock on a different road
- Clever routing, thinking differently
- Freedom vs. conventional approach
- Beautiful scenic route with trees or hills
- Background should be cream (#F5F0D7)
- Maintain consistent black outlines around all elements
"""),

    # Book/Contact Page
    ("book-phone.png", "1:1", """Create an illustration of this cartoon bus with its door open in a welcoming gesture, maintaining the exact same art style, line weight, and color palette.

Requirements:
- Show the bus with its side door open, welcoming
- Keep the same cartoon aesthetic - NO eyes, faces, or people anywhere
- The bus should be blue (Van Blue #2872A6) lower panels, cream upper, blue roof
- Place the logo (second image) on the FRONT of the bus in BLUE
- Open door clearly visible
- "Welcome" or "Hop On" sign or gesture
- Inviting, no-pressure feel
- Maybe a small welcome mat or steps
- Background should be cream (#F5F0D7)
- Maintain consistent black outlines around all elements
"""),

    # Resources Page
    ("resource-quiz.png", "1:1", """Create an illustration of this cartoon bus with a quiz/assessment theme, maintaining the exact same art style, line weight, and color palette.

Requirements:
- Show the bus with checklist and compass elements
- Keep the same cartoon aesthetic - NO eyes, faces, or people anywhere
- The bus should be blue (Van Blue #2872A6) lower panels, cream upper, blue roof
- Place the logo (second image) on the FRONT of the bus in BLUE
- Checklist with checkmarks floating nearby
- Compass or direction elements
- Question mark becoming an answer/checkmark
- Discovery and insight feel
- Background should be cream (#F5F0D7)
- Maintain consistent black outlines around all elements
"""),

    ("quiz-result.png", "16:9", """Create an illustration of this cartoon bus reaching a destination with a flag or milestone marker, maintaining the exact same art style, line weight, and color palette.

Requirements:
- Show the bus arriving at a destination flag or milestone
- Keep the same cartoon aesthetic - NO eyes, faces, or people anywhere
- The bus should be blue (Van Blue #2872A6) lower panels, cream upper, blue roof
- Place the logo (second image) on the FRONT of the bus in BLUE
- Destination flag or milestone marker
- Sense of achievement - "you made it"
- "Your result" reveal moment feel
- Arrows or signs pointing to next steps
- Background should be cream (#F5F0D7)
- Maintain consistent black outlines around all elements
"""),

    # Governance Page
    ("governance-shield.png", "1:1", """Create an illustration of this cartoon bus with security/protection imagery, maintaining the exact same art style, line weight, and color palette.

Requirements:
- Show the bus with a protective shield or bubble around it
- Keep the same cartoon aesthetic - NO eyes, faces, or people anywhere
- The bus should be blue (Van Blue #2872A6) lower panels, cream upper, blue roof
- Place the logo (second image) on the FRONT of the bus in BLUE
- Shield or protective bubble/dome around the bus
- Lock or security iconography
- Trust and protection feel
- Reassuring, not scary
- Background should be cream (#F5F0D7)
- Maintain consistent black outlines around all elements
"""),

    ("governance-data.png", "16:9", """Create an illustration of a secure vault with data flowing safely, maintaining the exact same art style and color palette.

Requirements:
- Show a vault or safe with data streams flowing through it orderly
- Keep the same cartoon aesthetic - NO eyes, faces, or people anywhere
- The bus can be nearby or data flowing to/from it
- Vault or safe imagery as the central element
- Data streams in orderly, secure fashion
- Privacy and control feel
- Professional security aesthetic
- Colors: Van Blue (#2872A6), Cream (#F5F0D7), accents in Sage (#81B29A)
- Maintain consistent black outlines around all elements
"""),

    # Integrations Page
    ("integrations-connected.png", "1:1", """Create an illustration of this cartoon bus as a central hub with connections to various tools, maintaining the exact same art style, line weight, and color palette.

Requirements:
- Show the bus at the center with connection lines radiating out
- Keep the same cartoon aesthetic - NO eyes, faces, or people anywhere
- The bus should be blue (Van Blue #2872A6) lower panels, cream upper, blue roof
- Place the logo (second image) on the FRONT of the bus in BLUE
- Connection lines (dotted or solid) to generic tool/app shapes around the bus
- Plug-in or API aesthetic
- "Everything connects" feel
- Various simple icons representing different tools around the perimeter
- Background should be cream (#F5F0D7)
- Maintain consistent black outlines around all elements
"""),

    ("integrations-flow.png", "16:9", """Create an illustration showing data flowing between tools through the bus as a processing center, maintaining the exact same art style, line weight, and color palette.

Requirements:
- Show a flow chart/diagram style illustration
- Keep the same cartoon aesthetic - NO eyes, faces, or people anywhere
- The bus at the center as the processing hub
- The bus should be blue (Van Blue #2872A6) lower panels, cream upper, blue roof
- Tool icons on either side of the bus
- Arrows showing data movement through the bus
- Flow chart/diagram aesthetic
- Data transformation happening through the bus
- Background should be cream (#F5F0D7)
- Maintain consistent black outlines around all elements
"""),
]


def main():
    api_key = os.environ.get("GEMINI_API_KEY") or os.environ.get("GOOGLE_API_KEY")
    if not api_key:
        print("Error: Please set GEMINI_API_KEY environment variable")
        return 1

    if not INPUT_BUS_IMAGE.exists() or not INPUT_LOGO_IMAGE.exists():
        print("Error: Input images not found")
        return 1

    print("Loading reference images...")
    bus_image = Image.open(INPUT_BUS_IMAGE)
    logo_image = Image.open(INPUT_LOGO_IMAGE)

    client = genai.Client(api_key=api_key)

    total = len(IMAGES_TO_GENERATE)
    success = 0
    failed = []

    for i, (filename, aspect_ratio, prompt) in enumerate(IMAGES_TO_GENERATE, 1):
        output_path = IMAGES_DIR / filename

        # Skip if already exists
        if output_path.exists():
            print(f"[{i}/{total}] Skipping {filename} (already exists)")
            success += 1
            continue

        print(f"\n[{i}/{total}] Generating {filename} ({aspect_ratio})...")

        try:
            response = client.models.generate_content(
                model="gemini-2.5-flash-image",
                contents=[prompt, bus_image, logo_image],
                config=types.GenerateContentConfig(
                    response_modalities=["Image"],
                    image_config=types.ImageConfig(aspect_ratio=aspect_ratio)
                )
            )

            for part in response.parts:
                if image := part.as_image():
                    image.save(output_path)
                    print(f"    ✓ Saved: {output_path}")
                    success += 1
                    break
            else:
                print(f"    ✗ No image generated")
                failed.append(filename)

            # Rate limiting - wait between requests
            time.sleep(2)

        except Exception as e:
            print(f"    ✗ Error: {e}")
            failed.append(filename)
            time.sleep(5)  # Longer wait on error

    print(f"\n{'='*50}")
    print(f"Complete: {success}/{total} images generated")
    if failed:
        print(f"Failed: {', '.join(failed)}")

    return 0 if not failed else 1


if __name__ == "__main__":
    exit(main())
