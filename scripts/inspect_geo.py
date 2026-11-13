import re

text = open('frontend/src/components/blog/ArticleApaItuGeo.tsx', encoding='utf-8').read()
sections = re.findall(r'<section id="([^"]+)"', text)
print("Sections found:", sections)

subsections = re.findall(r'<div id="([^"]+)"', text)
print("Subsections found:", subsections)

keywords = [
    'apa itu geo',
    'generative engine optimization',
    'cara agar bisnis direkomendasikan ai',
    'cara agar bisnis muncul di chatgpt',
    'optimasi website untuk ai',
    'geo untuk bisnis',
    'perbedaan seo dan geo',
    'cara ai menemukan informasi bisnis',
    'website mudah dibaca ai',
    'strategi geo untuk umkm'
]

print("\nKeyword counts:")
for kw in keywords:
    print(f"  {kw}: {text.lower().count(kw)}")
