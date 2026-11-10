import urllib.request

req = urllib.request.Request('https://pahamdigital.online/', headers={
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache'
})
html = urllib.request.urlopen(req, timeout=10).read().decode('utf-8', errors='ignore')

phrases = [
    'Paham Digital Agency Aceh | Website, AI &amp; Automasi Bisnis',
    'Paham Digital Agency membantu bisnis dan UMKM di Aceh',
    'Kami membantu bisnis dan UMKM di Aceh berkembang',
    'AI customer service humanis yang dikonfigurasi dengan knowledge base',
    'rel="shortcut icon" href="/favicon.ico"'
]

for p in phrases:
    print(f'"{p[:40]}..." in live HTML -> {p in html}')
