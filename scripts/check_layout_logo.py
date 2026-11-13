with open("frontend/src/app/layout.tsx", "r", encoding="utf-8") as f:
    text = f.read()

import re
matches = re.findall(r'logo[^\n]*', text, re.IGNORECASE)
for m in matches:
    print(m)
