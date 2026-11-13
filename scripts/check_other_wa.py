with open('frontend/src/components/blog/ArticleKenapaBisnisPerluWebsite.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

idx = text.find('Bagikan ke WhatsApp')
print(text[idx-300:idx+250])
