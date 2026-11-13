import os
from PIL import Image

src_path = r"C:\Users\ACER\.gemini\antigravity\brain\53974bf8-52fe-41c6-a275-d9f18b0fb4ed\apa_itu_geo_cover_clean_1794549358661.jpg"
dst_jpg = r"frontend\public\images\blog\apa-itu-geo-cover.jpg"
dst_webp = r"frontend\public\images\blog\apa-itu-geo-cover.webp"

if os.path.exists(src_path):
    img = Image.open(src_path)
    print(f"Original image size: {img.size}")
    
    # Resize to exact 1200x675 with high-quality Lanczos resampling
    img_resized = img.resize((1200, 675), Image.Resampling.LANCZOS)
    
    # Save JPG
    img_resized.save(dst_jpg, "JPEG", quality=90, optimize=True)
    print(f"Saved {dst_jpg}, size: {os.path.getsize(dst_jpg)} bytes")
    
    # Save WebP
    img_resized.save(dst_webp, "WEBP", quality=88, method=6)
    print(f"Saved {dst_webp}, size: {os.path.getsize(dst_webp)} bytes")
else:
    print(f"Error: {src_path} does not exist!")
