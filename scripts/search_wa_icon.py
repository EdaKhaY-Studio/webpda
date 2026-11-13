import os
import re

for root, dirs, files in os.walk("frontend/src"):
    for file in files:
        if file.endswith((".tsx", ".ts")):
            p = os.path.join(root, file)
            with open(p, "r", encoding="utf-8") as f:
                c = f.read()
            if "wa.me" in c or "whatsapp" in c.lower():
                matches = re.findall(r'<[A-Z][a-zA-Z0-9]*[^>]*whatsapp[^>]*>', c, re.IGNORECASE)
                if matches:
                    print(f"{p}: {matches}")
                # check icons near wa.me
                for m in re.finditer(r'wa\.me', c):
                    start = max(0, m.start() - 200)
                    end = min(len(c), m.end() + 200)
                    # print nearby tags
                    tags = re.findall(r'<([A-Z][a-zA-Z0-9]*)\b', c[start:end])
                    print(f"{file} near wa.me tags: {tags}")
