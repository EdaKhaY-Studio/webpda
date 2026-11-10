import urllib.request
import re

urls = [
    'https://pahamdigital.online/',
    'https://pahamdigital.online/tentang-kami/',
    'https://pahamdigital.online/blog/',
    'https://pahamdigital.online/blog/domain-vs-hosting/',
    'https://pahamdigital.online/blog/apa-itu-seo-website-sepi-pengunjung/',
    'https://pahamdigital.online/blog/kenapa-bisnis-perlu-website/'
]

for url in urls:
    req = urllib.request.Request(url, headers={
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
    })
    try:
        with urllib.request.urlopen(req, timeout=10) as res:
            headers = dict(res.headers)
            body = res.read().decode('utf-8', errors='ignore')
            title_m = re.search(r'<title>(.*?)</title>', body)
            title = title_m.group(1) if title_m else 'NO TITLE'
            
            # Check script chunk hashes
            chunks = re.findall(r'/_next/static/chunks/([a-zA-Z0-9_-]+)\.js', body)
            
            print(f'=== {url} ===')
            print(f'HTTP {res.status} | Server: {headers.get("Server")} | Date: {headers.get("Date")}')
            print(f'Cache-Control: {headers.get("Cache-Control")} | ETag: {headers.get("ETag")} | Last-Modified: {headers.get("Last-Modified")}')
            print(f'Title: {title[:70]}')
            print(f'Favicon: {"rel=\"shortcut icon\"" in body} | Chunks count: {len(chunks)}')
            if 'blog' in url and url != 'https://pahamdigital.online/blog/':
                # Check article content
                img_m = re.search(r'<img[^>]+src=["\']([^"\']+)["\']', body)
                print(f'First image: {img_m.group(1) if img_m else "NO IMG"}')
    except Exception as e:
        print(f'ERR {url}: {e}')
