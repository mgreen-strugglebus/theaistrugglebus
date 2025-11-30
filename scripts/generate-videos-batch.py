#!/usr/bin/env python3
"""
Batch generate videos for The AI Struggle Bus using Veo 3.1.

Requirements:
    pip install -U "google-genai>=1.44.0" Pillow

Usage:
    python scripts/generate-videos-batch.py
"""

import os
import time
import warnings
import io
from pathlib import Path

# Suppress urllib3 OpenSSL warning
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

# Directories
IMAGES_DIR = PROJECT_ROOT / "public" / "images"
VIDEOS_DIR = PROJECT_ROOT / "public" / "videos"

# Common negative prompt for all videos
NEGATIVE_PROMPT = "realistic, photorealistic, 3D, eyes on bus, faces, people inside bus, cartoon eyes, low quality, blurry, VW logo, Volkswagen"

# Style guide for prompts
STYLE_GUIDE = """Maintain the exact flat vector illustration style with thick black outlines (2-3px).
Keep the Van Blue (#2872A6) and Cream (#F5F0D7) color scheme.
Accent colors: Mustard (#E0C06A), Coral (#E07A5F), Sage (#81B29A).
Professional, clean aesthetic - no cartoon faces or eyes on the bus.
The bus has a blue AI logo on the front."""

# =============================================================================
# VIDEO CONFIGURATIONS
# =============================================================================
VIDEOS = [
    # Priority 1: Hero + Core Value Prop
    {
        "name": "hero-bus-animated",
        "start_frame": "hero-bus-front.png",
        "aspect_ratio": "16:9",
        "duration": 6,
        "prompt": f"""Animate this illustration of the AI Struggle Bus on a pure white background.

The bus gently rocks as if idling, then the front door smoothly opens in a welcoming gesture. Subtle motion - the bus appears alive and ready to welcome visitors.

IMPORTANT: Keep the background pure white (#FFFFFF). Do not add any scenery, gradients, or colors to the background.

{STYLE_GUIDE}
Subtle engine hum sound. Friendly door-opening sound effect."""
    },
    {
        "name": "chaos-to-clarity",
        "start_frame": "chaos-papers.png",
        "aspect_ratio": "16:9",
        "duration": 8,
        "prompt": f"""Animate this illustration of the bus leaving chaos behind.

The bus drives forward and to the right, leaving behind a swirling mess of papers, spreadsheets, and tangled cables. Papers fly up chaotically behind the bus. As the bus moves forward, the road ahead becomes clear and organized. The contrast between chaos (behind) and clarity (ahead) is emphasized.

{STYLE_GUIDE}
Sound: papers rustling, then peaceful road sounds as bus moves forward."""
    },
    {
        "name": "sprint-countdown",
        "start_frame": "sprint-speedometer.png",
        "aspect_ratio": "16:9",
        "duration": 8,
        "prompt": f"""Animate this illustration of the sprint speedometer.

The speedometer needle climbs steadily from low to high. Calendar pages or day numbers (1, 7, 14, 21, 30) flip by quickly. At the end, confetti bursts and a checkmark or trophy appears. Creates urgency and excitement for the 30-day sprint.

{STYLE_GUIDE}
Sound: ticking clock accelerating, then celebration sound with confetti."""
    },
    {
        "name": "sunset-journey",
        "start_frame": "sunset-road.png",
        "aspect_ratio": "16:9",
        "duration": 8,
        "prompt": f"""Animate this illustration of the bus driving into the sunset.

The bus drives slowly toward the horizon into a beautiful sunset. Sun rays gently pulse and shimmer. The road stretches into the distance. Warm, optimistic mood. The AI logo on the back of the bus (license plate area) is visible.

{STYLE_GUIDE}
Sound: gentle engine hum, peaceful ambient sounds, inspiring subtle music."""
    },

    # Priority 2: Service Explainers
    {
        "name": "crossroads-choice",
        "start_frame": "crossroads.png",
        "aspect_ratio": "16:9",
        "duration": 8,
        "prompt": f"""Animate this illustration of the bus at a crossroads.

The bus sits at the center of an intersection. One by one, each branching road lights up briefly, showing icons for different solutions (megaphone for marketing, headset for customer service, chart for operations, book for knowledge, rocket for product). The signpost arrows gently sway.

{STYLE_GUIDE}
Sound: subtle whoosh as each path lights up, contemplative ambient tone."""
    },
    {
        "name": "co-pilot-convoy",
        "start_frame": "co-pilot.png",
        "aspect_ratio": "16:9",
        "duration": 8,
        "prompt": f"""Animate this illustration of two buses traveling together.

Two buses drive together in convoy formation, perfectly synchronized. The compass nearby spins gently then points forward confidently. Both buses have the blue AI logo on their fronts. Emphasizes partnership and teamwork.

{STYLE_GUIDE}
Sound: two engines in harmony, wind sounds, confident forward momentum."""
    },
    {
        "name": "integrations-pulse",
        "start_frame": "integrations-connected.png",
        "aspect_ratio": "16:9",
        "duration": 8,
        "prompt": f"""Animate this illustration of the bus as an integration hub.

The bus sits at the center. Connection lines pulse with flowing data particles traveling to and from various tool icons around the bus. Data flows in from one side, gets processed, and flows out organized on the other side. The hub feels alive and connected.

{STYLE_GUIDE}
Sound: subtle digital pulses, data flow sounds, connected ecosystem ambiance."""
    },

    # Priority 3: Case Studies
    {
        "name": "case-retailer",
        "start_frame": "case-study-retailer.png",
        "aspect_ratio": "16:9",
        "duration": 6,
        "prompt": f"""Animate this illustration of the bus at a retail boutique.

The bus is parked at a boutique shop. Shopping bags multiply and organize themselves neatly. Product tags update automatically. The scene shows retail automation success with items flowing smoothly.

{STYLE_GUIDE}
Sound: cash register ding, organizing sounds, happy retail ambiance."""
    },
    {
        "name": "case-ecommerce",
        "start_frame": "case-study-ecommerce.png",
        "aspect_ratio": "16:9",
        "duration": 6,
        "prompt": f"""Animate this illustration of the e-commerce bus.

Packages flow efficiently around the bus. A shopping cart fills up smoothly. 5-star ratings pop up one by one. Order confirmations fly out organized. Shows e-commerce automation success.

{STYLE_GUIDE}
Sound: package handling, notification dings, successful order sounds."""
    },
    {
        "name": "case-agency",
        "start_frame": "case-study-agency.png",
        "aspect_ratio": "16:9",
        "duration": 6,
        "prompt": f"""Animate this illustration of the creative agency bus.

Content pieces (documents, images, social posts) swirl around the bus, then organize themselves into neat rows. Creative tools (paintbrush, palette) add color accents. Multiple projects get completed simultaneously.

{STYLE_GUIDE}
Sound: creative whooshes, organizing clicks, productive agency ambiance."""
    },
    {
        "name": "case-consultant",
        "start_frame": "case-study-consultant.png",
        "aspect_ratio": "16:9",
        "duration": 6,
        "prompt": f"""Animate this illustration of the consultant bus.

The bus with briefcase imagery. Presentation slides or charts appear and organize. Meeting notes transform into action items. Professional, efficient consulting workflow automation.

{STYLE_GUIDE}
Sound: professional ambiance, paper organizing, productive meeting sounds."""
    },
]


def generate_video(client, video_config, max_retries=5):
    """Generate a single video with rate limit retry logic."""
    name = video_config["name"]
    start_frame_name = video_config.get("start_frame")
    aspect_ratio = video_config.get("aspect_ratio", "16:9")
    duration = video_config.get("duration", 8)
    prompt = video_config["prompt"]

    output_path = VIDEOS_DIR / f"{name}.mp4"

    # Skip if already exists
    if output_path.exists():
        print(f"  Skipping {name} - already exists")
        return True, False  # (success, was_rate_limited)

    print(f"\n{'='*60}")
    print(f"Generating: {name}.mp4")
    print(f"  Aspect: {aspect_ratio}, Duration: {duration}s")

    # Load starting frame
    start_image = None
    if start_frame_name:
        start_frame_path = IMAGES_DIR / start_frame_name
        if start_frame_path.exists():
            print(f"  Start frame: {start_frame_name}")
            start_image = Image.open(start_frame_path)
        else:
            print(f"  Warning: Start frame not found: {start_frame_name}")

    config = types.GenerateVideosConfig(
        aspect_ratio=aspect_ratio,
        resolution="720p",
        duration_seconds=duration,
        negative_prompt=NEGATIVE_PROMPT,
    )

    # Retry logic with exponential backoff for rate limits
    for attempt in range(max_retries):
        try:
            if start_image:
                # Image-to-video
                image_bytes_io = io.BytesIO()
                start_image.save(image_bytes_io, format="PNG")
                image_bytes = image_bytes_io.getvalue()

                operation = client.models.generate_videos(
                    model="veo-3.1-generate-preview",
                    prompt=prompt,
                    image=types.Image(image_bytes=image_bytes, mime_type="image/png"),
                    config=config,
                )
            else:
                # Text-to-video
                operation = client.models.generate_videos(
                    model="veo-3.1-generate-preview",
                    prompt=prompt,
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
                print(f"  ERROR: No video generated for {name}")
                return False, False

            # Save video
            for generated_video in operation.result.generated_videos:
                client.files.download(file=generated_video.video)
                generated_video.video.save(str(output_path))
                print(f"  SUCCESS: {output_path}")
                return True, False

        except Exception as e:
            error_str = str(e)
            if "429" in error_str or "RESOURCE_EXHAUSTED" in error_str:
                # Rate limited - use exponential backoff
                wait_time = 60 * (2 ** attempt)  # 60s, 120s, 240s, 480s, 960s
                print(f"  Rate limited (attempt {attempt + 1}/{max_retries}). Waiting {wait_time}s...")
                time.sleep(wait_time)
                continue
            else:
                print(f"  ERROR: {e}")
                return False, False

    print(f"  ERROR: Max retries exceeded for {name}")
    return False, True  # (failed, was_rate_limited)


def main():
    # Check for API key
    api_key = os.environ.get("GEMINI_API_KEY") or os.environ.get("GOOGLE_API_KEY")
    if not api_key:
        print("Error: Please set GEMINI_API_KEY or GOOGLE_API_KEY environment variable")
        return 1

    # Create videos directory
    VIDEOS_DIR.mkdir(parents=True, exist_ok=True)

    # Initialize client
    client = genai.Client(api_key=api_key)

    print(f"Batch Video Generation")
    print(f"Total videos to generate: {len(VIDEOS)}")
    print(f"Output directory: {VIDEOS_DIR}")

    # Track results
    success_count = 0
    fail_count = 0
    skip_count = 0

    for i, video_config in enumerate(VIDEOS, 1):
        print(f"\n[{i}/{len(VIDEOS)}] {video_config['name']}")

        output_path = VIDEOS_DIR / f"{video_config['name']}.mp4"
        if output_path.exists():
            print(f"  Skipping - already exists")
            skip_count += 1
            continue

        success, _ = generate_video(client, video_config)
        if success:
            success_count += 1
        else:
            fail_count += 1

        # Small delay between requests
        if i < len(VIDEOS):
            time.sleep(5)

    # Summary
    print(f"\n{'='*60}")
    print(f"BATCH COMPLETE")
    print(f"  Success: {success_count}")
    print(f"  Skipped: {skip_count}")
    print(f"  Failed:  {fail_count}")
    print(f"{'='*60}")

    return 0 if fail_count == 0 else 1


if __name__ == "__main__":
    exit(main())
