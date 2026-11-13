with open('frontend/src/components/blog/ArticleApaItuGeo.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('id="structured-data"')
print(text[idx:idx+2500])
