import urllib.request
import urllib.error
import re

urls = [
    "https://pahamdigital.online/blog/apa-itu-geo/",
    "https://pahamdigital.online/blog/",
    "https://pahamdigital.online/sitemap.xml",
    "https://pahamdigital.online/images/blog/apa-itu-geo-cover.webp",
    "https://pahamdigital.online/images/blog/apa-itu-geo-cover.jpg",
    "https://pahamdigital.online/images/blog/apa-itu-geo-cover.svg",
]

headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
}

for url in urls:
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req, timeout=10) as resp:
            status = resp.status
            content_type = resp.headers.get("Content-Type", "")
            print(f"[PASS {status}] {url} ({content_type})")
            if "apa-itu-geo/" in url:
                html = resp.read().decode("utf-8", errors="ignore")
                title = re.search(r"<title>(.*?)</title>", html)
                h1 = re.search(r"<h1[^>]*>(.*?)</h1>", html)
                print("   Live Title:", title.group(1) if title else "NOT FOUND")
                print("   Live H1:", h1.group(1) if h1 else "NOT FOUND")
    except urllib.error.HTTPError as e:
        print(f"[FAIL {e.code}] {url}")
    except Exception as e:
        print(f"[ERROR] {url} -> {e}")
