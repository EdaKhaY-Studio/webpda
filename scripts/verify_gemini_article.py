import os
import re
import xml.etree.ElementTree as ET
import json

html_path = os.path.join("out", "blog", "apa-itu-gemini-4-carbon", "index.html")
sitemap_path = os.path.join("out", "sitemap.xml")

print("=== 1. VERIFY FILE EXISTENCE ===")
print(f"HTML exists: {os.path.exists(html_path)}")
print(f"Sitemap exists: {os.path.exists(sitemap_path)}")

with open(html_path, "r", encoding="utf-8") as f:
    html = f.read()

print(f"\nHTML File size: {len(html)} bytes")

print("\n=== 2. TITLE & META TAGS ===")
title_match = re.search(r'<title>(.*?)</title>', html)
print(f"Title: {title_match.group(1) if title_match else 'NOT FOUND'}")

desc_match = re.search(r'<meta name="description" content="(.*?)"', html)
print(f"Meta Description: {desc_match.group(1) if desc_match else 'NOT FOUND'}")

canonical_match = re.search(r'<link rel="canonical" href="(.*?)"', html)
print(f"Canonical URL: {canonical_match.group(1) if canonical_match else 'NOT FOUND'}")

og_title = re.search(r'<meta property="og:title" content="(.*?)"', html)
print(f"OG Title: {og_title.group(1) if og_title else 'NOT FOUND'}")

og_desc = re.search(r'<meta property="og:description" content="(.*?)"', html)
print(f"OG Description: {og_desc.group(1) if og_desc else 'NOT FOUND'}")

og_image = re.search(r'<meta property="og:image" content="(.*?)"', html)
print(f"OG Image: {og_image.group(1) if og_image else 'NOT FOUND'}")

print("\n=== 3. H1 HEADING ===")
h1_match = re.search(r'<h1[^>]*>(.*?)</h1>', html, re.DOTALL)
if h1_match:
    # clean tags
    clean_h1 = re.sub(r'<[^>]+>', '', h1_match.group(1)).strip()
    clean_h1 = ' '.join(clean_h1.split())
    print(f"H1: {clean_h1}")
else:
    print("H1 NOT FOUND")

print("\n=== 4. JSON-LD STRUCTURED DATA ===")
json_ld_matches = re.findall(r'<script type="application/ld\+json">(.*?)</script>', html, re.DOTALL)
print(f"JSON-LD blocks found: {len(json_ld_matches)}")
for idx, j_str in enumerate(json_ld_matches):
    try:
        data = json.loads(j_str)
        print(f"Block {idx+1} valid JSON! Top keys: {list(data.keys())}")
        if "@graph" in data:
            for g in data["@graph"]:
                print(f"  Graph item type: {g.get('@type')}, id: {g.get('@id')}")
    except Exception as e:
        print(f"Block {idx+1} JSON parse error: {e}")

print("\n=== 5. SITEMAP VERIFICATION ===")
with open(sitemap_path, "r", encoding="utf-8") as f:
    sitemap_content = f.read()
target_url = "https://pahamdigital.online/blog/apa-itu-gemini-4-carbon/"
print(f"Target URL in sitemap: {target_url in sitemap_content}")

print("\n=== 6. CHECK ALL 18 SECTIONS & TOC ANCHORS ===")
expected_anchors = [
    "pendahuluan",
    "01-apa-itu-gemini-4-carbon",
    "02-argon-vs-carbon-satpam",
    "03-cara-kerja-tugas-kompleks",
    "04-agentic-workflow-swarm",
    "05-kemampuan-utama",
    "06-perbandingan-benchmark",
    "07-deepseek-grok-qwen",
    "08-pembuatan-3d-dan-game",
    "09-evaluasi-game-dev",
    "10-panduan-memilih-model",
    "11-cara-mengakses",
    "12-google-ai-pro-vs-ultra",
    "13-apakah-selalu-lebih-baik",
    "14-batasan-dan-risiko",
    "15-contoh-prompt",
    "16-siapa-yang-cocok",
    "17-kesimpulan",
    "18-faq",
    "referensi",
]

missing_anchors = [a for a in expected_anchors if f'id="{a}"' not in html]
print(f"All {len(expected_anchors)} expected section IDs present: {len(missing_anchors) == 0}")
if missing_anchors:
    print(f"Missing anchors: {missing_anchors}")

print("\n=== 7. CHECK REFERENCES [1] TO [11] ===")
ref_missing = []
for i in range(1, 12):
    if f'id="ref-{i}"' not in html:
        ref_missing.append(f"ref-{i}")
print(f"All 11 reference cards present: {len(ref_missing) == 0}")
if ref_missing:
    print(f"Missing references: {ref_missing}")

print("\n=== 8. CHECK TARGET KEYWORDS (EXACTLY 10) ===")
keywords = [
    "apa itu Gemini 4 Carbon",
    "Gemini 4 Carbon",
    "cara menggunakan Gemini 4 Carbon",
    "Gemini 4 Carbon Google AI Ultra",
    "perbedaan Google AI Pro dan Ultra",
    "Gemini 4 Carbon untuk coding",
    "Gemini 4 Carbon API",
    "Google Antigravity AI",
    "Gemini 4 Carbon vs Gemini 4 Argon",
    "AI untuk membuat game 3D",
]

text_lower = html.lower()
for kw in keywords:
    count = text_lower.count(kw.lower())
    print(f"'{kw}': count = {count}")

print("\n=== 9. WHATSAPP SHARE BUTTON ===")
wa_share_present = "Bagikan ke WhatsApp" in html
print(f"'Bagikan ke WhatsApp' present: {wa_share_present}")

print("\n=== 10. RELATED ARTICLES ===")
for r_slug in ["apa-itu-geo", "kenapa-bisnis-perlu-website", "apa-itu-seo-website-sepi-pengunjung"]:
    print(f"Link to /blog/{r_slug}/: {'/blog/' + r_slug in html}")
