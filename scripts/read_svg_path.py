with open("frontend/src/components/ui/Footer.tsx", "r", encoding="utf-8") as f:
    text = f.read()

idx = text.find('viewBox="0 0 24 24"')
print(text[idx-50:idx+450])
