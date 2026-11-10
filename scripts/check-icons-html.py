import re

for path in ['out/index.html', 'out/tentang-kami/index.html', 'out/layanan/index.html', 'out/blog/index.html']:
    with open(path, 'r', encoding='utf-8') as f:
        html = f.read()
    icons = re.findall(r'<link[^>]*rel=["\'](?:icon|shortcut icon|apple-touch-icon)["\'][^>]*>', html)
    print(f'=== {path} ===')
    for icon in icons:
        print(' ', icon)
