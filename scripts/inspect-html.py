import re

with open('out/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

print("--- ICON & MANIFEST LINKS ---")
for l in re.findall(r'<link[^>]+(?:icon|manifest)[^>]*>', html):
    print(l)

print("\n--- GOOGLE SITE VERIFICATION ---")
for m in re.findall(r'<meta[^>]*google-site-verification[^>]*>', html):
    print(m)

print("\n--- SCHEMA.ORG LOGO ---")
for s in re.findall(r'"logo":\s*"[^"]+"', html):
    print(s)
