# Gemini API Reference

Quick reference for Gemini API capabilities used in this project.

## SDK Installation

```bash
pip install -U "google-genai>=1.44.0" Pillow
```

## Client Setup

```python
from google import genai
from google.genai import types

client = genai.Client(api_key=GOOGLE_API_KEY)
# Or set GEMINI_API_KEY environment variable
```

---

## Image Generation (Nano-Banana)

**Model:** `gemini-2.5-flash-image`

Used for generating brand illustrations. See `scripts/generate-image.py`.

### Basic Usage

```python
response = client.models.generate_content(
    model="gemini-2.5-flash-image",
    contents=[prompt, reference_image],
    config=types.GenerateContentConfig(
        response_modalities=["Image"],
        image_config=types.ImageConfig(
            aspect_ratio="16:9",
        )
    )
)

# Save image
for part in response.parts:
    if image := part.as_image():
        image.save("output.png")
```

### Aspect Ratios

| Ratio | Resolution |
|-------|------------|
| 1:1 | 1024x1024 |
| 16:9 | 1344x768 |
| 9:16 | 768x1344 |

### Pro Model

For complex requests: `gemini-3-pro-image-preview`
- Supports up to 14 reference images
- 2K/4K resolution
- Thinking mode
- Google Search grounding

---

## Video Generation (Veo 3.1)

**Models:**

| Model | Best For |
|-------|----------|
| `veo-3.1-generate-preview` | Highest quality, all features |
| `veo-3.1-fast-generate-preview` | Faster generation, good quality |
| `veo-3.0-generate-001` | Stable, proven |
| `veo-3.0-fast-generate-001` | Fast, stable |
| `veo-2.0-generate-001` | Legacy (no audio) |

### Key Capabilities

- **Native audio generation** - Veo 3+ generates synchronized audio automatically
- **Dialogue support** - Include speech in quotes for character dialogue
- **Sound effects** - Describe ambient sounds and SFX in prompts
- **Camera control** - Supports cinematic terms (dolly, pan, tracking, aerial)
- **Lighting control** - Fine-grained lighting and atmosphere
- **720p and 1080p** - Multiple resolution options
- **4, 6, or 8 second** - Variable duration

### Text-to-Video

```python
import time

operation = client.models.generate_videos(
    model="veo-3.1-generate-preview",
    prompt="A golden retriever playing in a field of sunflowers",
    config=types.GenerateVideosConfig(
        aspect_ratio="16:9",      # or "9:16" for portrait
        resolution="1080p",       # or "720p"
        negative_prompt="low quality, blurry",
        duration_seconds=8,       # 4, 6, or 8
    ),
)

# Poll until complete (takes ~1-2 minutes)
while not operation.done:
    time.sleep(20)
    operation = client.operations.get(operation)

# Download and save
for generated_video in operation.result.generated_videos:
    client.files.download(file=generated_video.video)
    generated_video.video.save("output.mp4")
```

### Image-to-Video

Animate a starting image:

```python
from PIL import Image

start_image = Image.open("start_frame.png")

operation = client.models.generate_videos(
    model="veo-3.1-generate-preview",
    prompt="The scene comes to life with gentle motion",
    image=types.Image(
        image_bytes=image_bytes,
        mime_type="image/png"
    ),
    config=types.GenerateVideosConfig(
        aspect_ratio="16:9",
        resolution="1080p",
    ),
)
```

### First and Last Frame (Interpolation)

Control both start and end frames:

```python
operation = client.models.generate_videos(
    model="veo-3.1-generate-preview",
    prompt="Smooth transition between the two scenes",
    image=start_image,
    config=types.GenerateVideosConfig(
        last_frame=end_image,  # End frame
        aspect_ratio="16:9",
        resolution="1080p",
    ),
)
```

### Reference Images (Veo 3.1 only)

Use up to 3 reference images for characters, objects, or style:

```python
character_ref = types.VideoGenerationReferenceImage(
    image=character_image,
    reference_type="asset"
)

product_ref = types.VideoGenerationReferenceImage(
    image=product_image,
    reference_type="asset"
)

operation = client.models.generate_videos(
    model="veo-3.1-generate-preview",  # Must use 3.1 for references
    prompt="The character showcases the product",
    config=types.GenerateVideosConfig(
        reference_images=[character_ref, product_ref],
        aspect_ratio="16:9",
        resolution="720p",  # Only 720p for references
    ),
)
```

### Extend Videos (Veo 3.1 only)

Add 7 seconds to existing Veo-generated videos (up to 148s total):

```python
operation = client.models.generate_videos(
    model="veo-3.1-generate-preview",
    video=previous_generated_video.video,  # Must be Veo-generated
    prompt="Continue the action",
    config=types.GenerateVideosConfig(
        resolution="720p",  # Only 720p for extensions
    ),
)
```

### Prompting Tips

**Shot composition:**
- "single shot", "two shot", "over-the-shoulder shot"

**Camera positioning/movement:**
- "eye level", "high angle", "worms eye"
- "dolly shot", "zoom shot", "pan shot", "tracking shot"
- "aerial view", "drone shot"

**Focus and lens:**
- "shallow focus", "deep focus", "soft focus"
- "macro lens", "wide-angle lens"

**Style:**
- "sci-fi", "romantic comedy", "action movie", "animation"
- "timelapse", "slow motion"

**Audio (Veo 3+):**
- Dialogue: `He says "Hello world"`
- Sound effects: `tires screeching, engine roaring`
- Ambient: `gentle breeze, distant waves`

### Parameters Reference

| Parameter | Options | Notes |
|-----------|---------|-------|
| aspect_ratio | "16:9", "9:16" | Landscape or portrait |
| resolution | "720p", "1080p" | 1080p only for 8s duration |
| duration_seconds | 4, 6, 8 | Veo 3.1 only |
| negative_prompt | string | What to avoid |
| person_generation | "allow_all", "allow_adult" | Controls person generation |

### Limitations

- **Paid feature** - No free tier for Veo
- **Generation time** - 1-6 minutes depending on load
- **Video retention** - Generated videos stored for 2 days
- **Extensions** - Only 720p, Veo-generated videos
- **References** - Only 720p, 16:9, Veo 3.1

---

## Video Understanding

**Model:** `gemini-2.5-flash`

### Upload and Analyze

```python
# Upload video
myfile = client.files.upload(file="video.mp4")

# Generate content
response = client.models.generate_content(
    model="gemini-2.5-flash",
    contents=[myfile, "Summarize this video."]
)
```

### YouTube URLs

```python
response = client.models.generate_content(
    model='gemini-2.5-flash',
    contents=types.Content(
        parts=[
            types.Part(file_data=types.FileData(
                file_uri='https://www.youtube.com/watch?v=VIDEO_ID'
            )),
            types.Part(text='Summarize this video.')
        ]
    )
)
```

---

## Workflow: Image + Video Generation

Generate an image with Nano-Banana, then animate it with Veo:

```python
# Step 1: Generate image
image_response = client.models.generate_content(
    model="gemini-2.5-flash-image",
    contents=["A cartoon bus on an open road"],
    config=types.GenerateContentConfig(
        response_modalities=["Image"],
        image_config=types.ImageConfig(aspect_ratio="16:9")
    )
)

# Extract image
for part in image_response.parts:
    if part.inline_data:
        generated_image = part.as_image()
        break

# Step 2: Animate with Veo
operation = client.models.generate_videos(
    model="veo-3.1-generate-preview",
    prompt="The bus drives along the road into the sunset",
    image=generated_image,
    config=types.GenerateVideosConfig(
        aspect_ratio="16:9",
        resolution="1080p",
    ),
)

# Poll and save
while not operation.done:
    time.sleep(20)
    operation = client.operations.get(operation)

for video in operation.result.generated_videos:
    client.files.download(file=video.video)
    video.video.save("animated_bus.mp4")
```

---

## External Documentation

- [Nano-Banana Cookbook](https://colab.research.google.com/github/google-gemini/cookbook/blob/main/quickstarts/Get_Started_Nano_Banana.ipynb)
- [Veo Getting Started](https://colab.research.google.com/github/google-gemini/cookbook/blob/main/quickstarts/Get_started_Veo.ipynb)
- [Veo Documentation](https://ai.google.dev/gemini-api/docs/video)
- [Veo Prompt Guide](https://ai.google.dev/gemini-api/docs/video#prompt-guide)
- [Video Understanding](https://ai.google.dev/gemini-api/docs/video-understanding)
- [Pricing](https://ai.google.dev/pricing)

---

*Last updated: November 29, 2024*
