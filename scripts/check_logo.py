import os
import re

print("Public logo files:")
for f in os.listdir("frontend/public"):
    if "logo" in f.lower() or "icon" in f.lower() or "favicon" in f.lower():
        print(f"  {f}")

with open("frontend/src/lib/site-config.ts", "r", encoding="utf-8") as f:
    text = f.read()
    logos = re.findall(r'logo[^\n]*', text, re.IGNORECASE)
    print("\nLogos in site-config.ts:")
    for l in logos:
        print(f"  {l}")

with open("frontend/src/app/blog/[slug]/page.tsx", "r", encoding="utf-8") as f:
    text = f.read()
    logos = re.findall(r'logo[^\n]*', text, re.IGNORECASE)
    print("\nLogos in blog [slug] page.tsx:")
    for l in logos:
        print(f"  {l}")
