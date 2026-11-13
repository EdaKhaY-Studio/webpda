with open("frontend/src/components/ui/Footer.tsx", "r", encoding="utf-8") as f:
    text = f.read()

idx = text.find('M17.472 14.382')
print(text[idx+500:idx+1200])
