import urllib.request
import re

articles = [
    'https://pahamdigital.online/blog/domain-vs-hosting/',
    'https://pahamdigital.online/blog/apa-itu-seo-website-sepi-pengunjung/',
    'https://pahamdigital.online/blog/kenapa-bisnis-perlu-website/'
]

for a in articles:
    req = urllib.request.Request(a, headers={'User-Agent': 'Mozilla/5.0'})
    html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8', errors='ignore')
    t = re.search(r'<title>(.*?)</title>', html)
    h1 = re.search(r'<h1[^>]*>(.*?)</h1>', html)
    cover_check = (
        'kenapa-bisnis-perlu-website-cover.webp' in html if 'kenapa' in a 
        else ('domain-vs-hosting-cover.jpg' in html if 'domain' in a else 'apa-itu-seo-website-sepi-pengunjung-cover.jpg' in html)
    )
    print(f'=== {a} ===')
    print('Title:', t.group(1) if t else 'NONE')
    print('H1:', h1.group(1) if h1 else 'NONE')
    print('Cover image in live HTML:', cover_check)
