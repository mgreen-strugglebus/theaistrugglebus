#!/usr/bin/env python3
"""
Generate videos for The AI Struggle Bus using Veo 3.1.

Requirements:
    pip install -U "google-genai>=1.44.0" Pillow

Usage:
    python scripts/generate-video.py
"""

import os
import time
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
VIDEOS_DIR = PROJECT_ROOT / "public" / "videos"

# =============================================================================
# CONFIGURATION - Edit these values for each video
# =============================================================================
OUTPUT_VIDEO = VIDEOS_DIR / "integrations-pulse.mp4"

# Reference images for style consistency
REFERENCE_BUS = IMAGES_DIR / "hero-bus-side-view.png"
REFERENCE_LOGO = IMAGES_DIR / "logo.png"

# Starting frame (optional - set to None to use text-to-video only)
START_FRAME = IMAGES_DIR / "integrations-connected.png"

PROMPT = """Animate this illustration of the bus as an integration hub.

The bus sits at the center. Connection lines pulse with flowing data particles traveling to and from various tool icons around the bus. Data flows in from one side, gets processed, and flows out organized on the other side. The hub feels alive and connected.

CRITICAL REQUIREMENTS:
- NO TEXT whatsoever - no words, no letters, no writing, no labels
- NO readable text anywhere in the scene
- Only use simple ICONS and SYMBOLS, never text
- Maintain the exact flat vector illustration style with thick black outlines
- Keep the Van Blue (#2872A6) and Cream (#F5F0D7) color scheme
- Smooth, gentle pulsing motion on the connection lines
- Data particles in Mustard (#E0C06A), Coral (#E07A5F), and Sage (#81B29A)
- Subtle digital pulse sounds, connected ecosystem ambiance
- Professional, clean aesthetic - no cartoon faces or eyes on the bus
"""

ASPECT_RATIO = "16:9"
RESOLUTION = "720p"  # 720p or 1080p
DURATION = 8  # 4, 6, or 8 seconds
# =============================================================================


def main():
    # Check for API key
    api_key = os.environ.get("GEMINI_API_KEY") or os.environ.get("GOOGLE_API_KEY")
    if not api_key:
        print("Error: Please set GEMINI_API_KEY or GOOGLE_API_KEY environment variable")
        print("Get your API key at: https://aistudio.google.com/apikey")
        return 1

    # Create videos directory if it doesn't exist
    VIDEOS_DIR.mkdir(parents=True, exist_ok=True)

    # Initialize Gemini client
    client = genai.Client(api_key=api_key)

    print(f"Output: {OUTPUT_VIDEO.name}")
    print(f"Aspect ratio: {ASPECT_RATIO}")
    print(f"Resolution: {RESOLUTION}")
    print(f"Duration: {DURATION}s")

    # Prepare the generation config
    config = types.GenerateVideosConfig(
        aspect_ratio=ASPECT_RATIO,
        resolution=RESOLUTION,
        duration_seconds=DURATION,
        negative_prompt="text, words, letters, writing, signs with text, readable text, realistic, photorealistic, 3D, eyes on bus, faces, people inside bus, cartoon eyes, low quality, blurry, VW logo",
    )

    # Load starting frame if specified
    start_image = None
    if START_FRAME and START_FRAME.exists():
        print(f"\nUsing starting frame: {START_FRAME.name}")
        start_image = Image.open(START_FRAME)

    print(f"\nGenerating video with Veo 3.1...")
    print(f"This may take 1-3 minutes...\n")

    try:
        # Generate video
        if start_image:
            # Image-to-video generation
            import io
            image_bytes_io = io.BytesIO()
            start_image.save(image_bytes_io, format="PNG")
            image_bytes = image_bytes_io.getvalue()

            operation = client.models.generate_videos(
                model="veo-3.1-generate-preview",
                prompt=PROMPT,
                image=types.Image(image_bytes=image_bytes, mime_type="image/png"),
                config=config,
            )
        else:
            # Text-to-video generation
            operation = client.models.generate_videos(
                model="veo-3.1-generate-preview",
                prompt=PROMPT,
                config=config,
            )

        # Poll until complete
        poll_count = 0
        while not operation.done:
            poll_count += 1
            print(f"  Waiting... ({poll_count * 20}s)")
            time.sleep(20)
            operation = client.operations.get(operation)

        # Check for errors
        if not operation.result or not operation.result.generated_videos:
            print("Error: No video was generated")
            if hasattr(operation, 'error') and operation.error:
                print(f"Error details: {operation.error}")
            return 1

        # Download and save the video
        for generated_video in operation.result.generated_videos:
            client.files.download(file=generated_video.video)
            generated_video.video.save(str(OUTPUT_VIDEO))
            print(f"\nSuccess! Video saved to: {OUTPUT_VIDEO}")
            return 0

    except Exception as e:
        print(f"Error generating video: {e}")
        return 1


if __name__ == "__main__":
    exit(main())
