import os, re, json
from html.parser import HTMLParser

routes = [
    'out/index.html',
    'out/layanan/index.html',
    'out/layanan/website-development/index.html',
    'out/layanan/ai-customer-service/index.html',
    'out/layanan/web-application/index.html',
    'out/layanan/seo-geo/index.html',
    'out/layanan/harga-paket/index.html',
    'out/tentang-kami/index.html',
    'out/blog/index.html',
    'out/blog/domain-vs-hosting/index.html'
]

for r in routes:
    if not os.path.exists(r):
        print('MISSING:', r)
        continue
    with open(r, 'r', encoding='utf-8') as f:
        html = f.read()

    title_match = re.search(r'<title>(.*?)</title>', html)
    desc_match = re.search(r'<meta[^>]*name=["\']description["\'][^>]*content=["\'](.*?)["\']', html)
    can_match = re.search(r'<link[^>]*rel=["\']canonical["\'][^>]*href=["\'](.*?)["\']', html)
    gsc_match = re.search(r'<meta[^>]*name=["\']google-site-verification["\'][^>]*content=["\'](.*?)["\']', html)
    
    ld_matches = re.findall(r'<script[^>]*type=["\']application/ld\+json["\'][^>]*>(.*?)</script>', html, re.DOTALL)

    print(f'=== {r} ===')
    print('Title:', title_match.group(1) if title_match else 'NONE')
    print('Desc:', desc_match.group(1) if desc_match else 'NONE')
    print('Canonical:', can_match.group(1) if can_match else 'NONE')
    print('GSC:', gsc_match.group(1) if gsc_match else 'NONE')
    print('JSON-LD scripts found:', len(ld_matches))
    for i, ld_str in enumerate(ld_matches):
        try:
            data = json.loads(ld_str)
            types = []
            if '@graph' in data:
                types = [x.get('@type', 'Unknown') for x in data['@graph']]
            elif isinstance(data, list):
                types = [x.get('@type', 'Unknown') for x in data]
            else:
                types = [data.get('@type', 'Unknown')]
            print(f'  LD #{i+1} Types: {types}')
        except Exception as e:
            print(f'  LD #{i+1} Parse error: {e}')
