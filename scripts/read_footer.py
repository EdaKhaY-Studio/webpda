with open("frontend/src/components/ui/Footer.tsx", "r", encoding="utf-8") as f:
    text = f.read()

idx = text.find('WhatsApp')
print(text[idx-100:idx+500])
