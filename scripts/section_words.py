import re

text = open('frontend/src/components/blog/ArticleApaItuGeo.tsx', encoding='utf-8').read()

sections = text.split('<section id=')
for sec in sections[1:]:
    sec_id = sec.split('"')[1]
    cleaned = re.sub(r'<[^>]+>', ' ', sec)
    cleaned = re.sub(r'\{`.*?`\}', '', cleaned, flags=re.DOTALL)
    words = cleaned.split()
    print(f"Section {sec_id}: {len(words)} words")
