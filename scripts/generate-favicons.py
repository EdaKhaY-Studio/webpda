import os
import base64
from PIL import Image

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(BASE_DIR)
PUBLIC_DIR = os.path.join(PROJECT_ROOT, 'frontend', 'public')
APP_DIR = os.path.join(PROJECT_ROOT, 'frontend', 'src', 'app')

# Source logo: Gambar/logo.png or frontend/public/images/logo-paham.png
source_logo_path = os.path.join(PROJECT_ROOT, 'Gambar', 'logo.png')
if not os.path.exists(source_logo_path):
    source_logo_path = os.path.join(PUBLIC_DIR, 'images', 'logo-paham.png')

full_logo = Image.open(source_logo_path).convert('RGBA')

# 1. Extract pure emblem
# The full logo is centered in Gambar/logo.png: bbox = (466, 639, 1808, 1635)
cropped_logo = full_logo.crop(full_logo.getbbox())
w, h = cropped_logo.size

# As analyzed, the top emblem spans y from 0 to ~520, and x from ~230 to ~1070
emblem_region = cropped_logo.crop((230, 0, 1070, 520))
pure_emblem = emblem_region.crop(emblem_region.getbbox())
print(f"Extracted pure emblem: size={pure_emblem.size}")

# Helper: make square icon with emblem centered
def make_square_emblem_icon(size, padding_ratio=0.88):
    ew, eh = pure_emblem.size
    target_w = int(size * padding_ratio)
    scale = target_w / ew
    target_h = int(eh * scale)
    if target_h > int(size * padding_ratio):
        target_h = int(size * padding_ratio)
        scale = target_h / eh
        target_w = int(ew * scale)
    
    resized = pure_emblem.resize((target_w, target_h), Image.Resampling.LANCZOS)
    canvas = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    offset_x = (size - target_w) // 2
    offset_y = (size - target_h) // 2
    canvas.paste(resized, (offset_x, offset_y), resized)
    return canvas

# 2. Generate Favicon PNGs
sizes_to_generate = {
    'favicon-16x16.png': 16,
    'favicon-32x32.png': 32,
    'favicon-48x48.png': 48,
    'favicon-96x96.png': 96,
    'apple-touch-icon.png': 180,
    'icon-192.png': 192,
    'icon-512.png': 512,
}

for filename, size in sizes_to_generate.items():
    icon = make_square_emblem_icon(size)
    dest_path = os.path.join(PUBLIC_DIR, filename)
    icon.save(dest_path, 'PNG', optimize=True)
    print(f"Saved {filename}: {size}x{size}")

# 3. Generate multi-resolution favicon.ico
ico_16 = make_square_emblem_icon(16)
ico_32 = make_square_emblem_icon(32)
ico_48 = make_square_emblem_icon(48)

# Save to public/favicon.ico
public_ico_path = os.path.join(PUBLIC_DIR, 'favicon.ico')
ico_48.save(
    public_ico_path,
    format='ICO',
    sizes=[(16, 16), (32, 32), (48, 48)]
)
print(f"Saved public/favicon.ico (16x16, 32x32, 48x48)")

# Save to app/favicon.ico
app_ico_path = os.path.join(APP_DIR, 'favicon.ico')
ico_48.save(
    app_ico_path,
    format='ICO',
    sizes=[(16, 16), (32, 32), (48, 48)]
)
print(f"Saved src/app/favicon.ico (16x16, 32x32, 48x48)")

# 4. Generate paham-logo-512.png (full company logo in 512x512 square canvas)
target_w = 470
scale = target_w / w
target_h = int(h * scale)
resized_full = cropped_logo.resize((target_w, target_h), Image.Resampling.LANCZOS)
canvas_512 = Image.new('RGBA', (512, 512), (0, 0, 0, 0))
offset_x = (512 - target_w) // 2
offset_y = (512 - target_h) // 2
canvas_512.paste(resized_full, (offset_x, offset_y), resized_full)
paham_logo_512_path = os.path.join(PUBLIC_DIR, 'paham-logo-512.png')
canvas_512.save(paham_logo_512_path, 'PNG', optimize=True)
print(f"Saved public/paham-logo-512.png: 512x512")

# 5. Generate paham-logo.svg
# Embed the high-resolution official logo in clean SVG format
with open(paham_logo_512_path, 'rb') as f:
    b64_data = base64.b64encode(f.read()).decode('utf-8')

svg_content = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <title>Paham Digital Agency Official Logo</title>
  <image href="data:image/png;base64,{b64_data}" width="512" height="512"/>
</svg>
'''
svg_path = os.path.join(PUBLIC_DIR, 'paham-logo.svg')
with open(svg_path, 'w', encoding='utf-8') as f:
    f.write(svg_content)
print(f"Saved public/paham-logo.svg")

print("All official Paham Digital Agency brand icon assets successfully generated!")
