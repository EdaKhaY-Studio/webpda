with open(r'out\blog\apa-itu-geo\index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# 1. Check Organization in schema code block
print("1. Organization in code block:")
if '"@type": "Organization"' in html and 'https://pahamdigital.online/#organization' in html:
    print("   [PASS] Found @type Organization and #organization")
else:
    print("   [FAIL] Organization not found in HTML")

# 2. Check robots.txt warning
print("2. Robots.txt warning:")
if 'Panduan Keamanan Konfigurasi robots.txt' in html and 'OAI-SearchBot' in html and 'firewall, CDN, WAF' in html:
    print("   [PASS] Found complete robots.txt warning")
else:
    print("   [FAIL] robots.txt warning not found")

# 3. Check Section 13 label and absence of sparkle icon in Bagian 13
print("3. Section 13 label:")
idx_13 = html.find('BAGIAN 13')
if idx_13 != -1:
    slice_13 = html[idx_13-100:idx_13+200]
    print("   Slice:", slice_13)
    if '<svg' in html[idx_13-60:idx_13]:
        print("   [FAIL] Icon found before BAGIAN 13")
    else:
        print("   [PASS] No icon before BAGIAN 13 label")
else:
    print("   [FAIL] BAGIAN 13 not found")

# 4. Check WhatsApp button
print("4. WhatsApp share button:")
idx_wa = html.find('Bagikan ke WhatsApp')
if idx_wa != -1:
    slice_wa = html[idx_wa-250:idx_wa+100]
    print("   Slice:", slice_wa)
    if 'whitespace-nowrap' in slice_wa and 'shrink-0' in slice_wa:
        print("   [PASS] whitespace-nowrap and shrink-0 found")
    else:
        print("   [FAIL] whitespace-nowrap not found")
else:
    print("   [FAIL] WhatsApp button not found")
