with open("frontend/src/components/ui/Footer.tsx", "r", encoding="utf-8") as f:
    text = f.read()

idx = text.find('WhatsApp Expandable Pill')
print(text[idx:idx+1000])
