#!/usr/bin/env python3
"""
Generate images for The AI Struggle Bus using Gemini's native image generation.

Requirements:
    pip install -U "google-genai>=1.40.0" Pillow

Usage:
    1. Edit OUTPUT_IMAGE, prompt, and aspect_ratio below
    2. Run: python scripts/generate-image.py
"""

import os
import warnings
from pathlib import Path

# Suppress urllib3 OpenSSL warning (doesn't affect functionality)
warnings.filterwarnings("ignore", message="urllib3 v2 only supports OpenSSL")

from google import genai
from google.genai import types
from PIL import Image

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

# Configuration
IMAGES_DIR = PROJECT_ROOT / "public" / "images"

INPUT_BUS_IMAGE = IMAGES_DIR / "hero-bus-front.png"
INPUT_LOGO_IMAGE = IMAGES_DIR / "logo.png"
# =============================================================================
# CONFIGURATION - Edit these values for each image
# =============================================================================
OUTPUT_IMAGE = IMAGES_DIR / "solution-rescue.png"
ASPECT_RATIO = "1:1"

PROMPT = """Create an illustration of this cartoon bus as a roadside rescue/tow truck helping another vehicle, maintaining the exact same art style, line weight, and color palette.

Requirements:
- Show the bus in 3/4 front view with rescue/tow truck elements
- Keep the same cartoon aesthetic - NO eyes, faces, or people anywhere
- The bus should be blue (Van Blue #2872A6) lower panels, cream upper, blue roof - EXACTLY like the reference image
- Place the logo (second image) on the FRONT of the bus in BLUE
- The bus has a tow hook, crane arm, or rescue equipment attached
- It's helping/lifting a small broken-down robot or stuck small vehicle
- Wrench, toolbox, or repair tools nearby
- Warm, helpful, supportive mood
- Background should be cream (#F5F0D7) - solid flat color, matching the website background
- Accent colors: Mustard (#E0C06A), Coral (#E07A5F), Sage (#81B29A) for tools and elements
- Maintain consistent black outlines around all elements
- Conveying help, rescue, and support
"""
# =============================================================================


def main():
    # Check for API key
    api_key = os.environ.get("GEMINI_API_KEY") or os.environ.get("GOOGLE_API_KEY")
    if not api_key:
        print("Error: Please set GEMINI_API_KEY or GOOGLE_API_KEY environment variable")
        print("Get your API key at: https://aistudio.google.com/apikey")
        return 1

    # Check for reference images
    if not INPUT_BUS_IMAGE.exists():
        print(f"Error: Reference bus image not found: {INPUT_BUS_IMAGE}")
        return 1
    if not INPUT_LOGO_IMAGE.exists():
        print(f"Error: Reference logo image not found: {INPUT_LOGO_IMAGE}")
        return 1

    # Load reference images
    print("Loading reference images...")
    bus_image = Image.open(INPUT_BUS_IMAGE)
    logo_image = Image.open(INPUT_LOGO_IMAGE)

    # Initialize Gemini client
    client = genai.Client(api_key=api_key)

    print(f"Output: {OUTPUT_IMAGE.name}")
    print(f"Aspect ratio: {ASPECT_RATIO}")
    print(f"\nGenerating image with Gemini (using reference images)...")
    print(f"This may take a moment...\n")

    try:
        # Using gemini-2.5-flash-image with reference images for consistency
        response = client.models.generate_content(
            model="gemini-2.5-flash-image",
            contents=[PROMPT, bus_image, logo_image],
            config=types.GenerateContentConfig(
                response_modalities=["Image"],
                image_config=types.ImageConfig(
                    aspect_ratio=ASPECT_RATIO,
                )
            )
        )

        # Save the generated image
        for part in response.parts:
            if image := part.as_image():
                image.save(OUTPUT_IMAGE)
                print(f"Success! Image saved to: {OUTPUT_IMAGE}")
                return 0

        print("Error: No image was generated in the response")
        if response.text:
            print(f"Response text: {response.text}")
        return 1

    except Exception as e:
        print(f"Error generating image: {e}")
        return 1


if __name__ == "__main__":
    exit(main())
