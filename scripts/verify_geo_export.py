import os
import re

html_path = r"out\blog\apa-itu-geo\index.html"
sitemap_path = r"out\sitemap.xml"

print(f"Checking {html_path}...")
if os.path.exists(html_path):
    with open(html_path, "r", encoding="utf-8") as f:
        html = f.read()
    
    title = re.search(r"<title>(.*?)</title>", html)
    print("Title:", title.group(1) if title else "NOT FOUND")
    
    desc = re.search(r'<meta name="description" content="(.*?)"', html)
    print("Meta Description:", desc.group(1) if desc else "NOT FOUND")
    
    canon = re.search(r'<link rel="canonical" href="(.*?)"', html)
    print("Canonical:", canon.group(1) if canon else "NOT FOUND")
    
    og_title = re.search(r'<meta property="og:title" content="(.*?)"', html)
    print("OG Title:", og_title.group(1) if og_title else "NOT FOUND")
    
    og_img = re.search(r'<meta property="og:image" content="(.*?)"', html)
    print("OG Image:", og_img.group(1) if og_img else "NOT FOUND")
    
    schema = re.search(r'<script type="application/ld\+json">(.*?)</script>', html, re.DOTALL)
    print("Schema JSON-LD found:", bool(schema))
    if schema and "apa-itu-geo" in schema.group(1):
        print("Schema contains post slug: YES")
else:
    print(f"Error: {html_path} not found!")

print(f"\nChecking {sitemap_path}...")
if os.path.exists(sitemap_path):
    with open(sitemap_path, "r", encoding="utf-8") as f:
        sitemap = f.read()
    
    if "https://pahamdigital.online/blog/apa-itu-geo/" in sitemap:
        print("Sitemap contains /blog/apa-itu-geo/: YES")
    else:
        print("Sitemap contains /blog/apa-itu-geo/: NO")
else:
    print(f"Error: {sitemap_path} not found!")
