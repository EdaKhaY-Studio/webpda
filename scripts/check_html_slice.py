with open(r'out\blog\apa-itu-geo\index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Let's inspect Section 7F in HTML
idx_7f = html.find('id="structured-data"')
print("=== Section 7F in exported HTML ===")
print(html[idx_7f:idx_7f+1500])

# Let's inspect WhatsApp button in HTML
idx_wa = html.find('Bagikan ke WhatsApp')
print("\n=== WhatsApp button in exported HTML ===")
print(html[idx_wa-400:idx_wa+100])
