with open('frontend/src/components/blog/ArticleApaItuGeo.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

idx_7f = text.find('id="structured-data"')
print('=== SECTION 7F ===')
print(text[idx_7f:idx_7f+1700])

idx_robots = text.find('robots.txt Ramah AI Search')
print('\n=== ROBOTS.TXT ===')
print(text[idx_robots:idx_robots+800])

idx_13 = text.find('BAGIAN 13')
print('\n=== SECTION 13 ===')
print(text[idx_13-100:idx_13+300])

idx_wa = text.find('Bagikan ke WhatsApp')
print('\n=== WA SHARE BUTTON ===')
print(text[idx_wa-300:idx_wa+200])
