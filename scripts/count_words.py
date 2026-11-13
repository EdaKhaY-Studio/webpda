import re

text = open('frontend/src/components/blog/ArticleApaItuGeo.tsx', encoding='utf-8').read()

# Remove JSX tags, imports, interfaces, attributes
# Strip out script-like or code snippets
cleaned = re.sub(r'import\s+.*?from\s+.*?;', '', text, flags=re.DOTALL)
cleaned = re.sub(r'interface\s+.*?{.*?}', '', cleaned, flags=re.DOTALL)
cleaned = re.sub(r'className="[^"]*"', '', cleaned)
cleaned = re.sub(r'<[^>]+>', ' ', cleaned)
cleaned = re.sub(r'\{`.*?`\}', '', cleaned, flags=re.DOTALL) # remove raw code blocks like robots.txt
cleaned = re.sub(r'\s+', ' ', cleaned)

words = cleaned.split()
print("Total words of reading content:", len(words))
