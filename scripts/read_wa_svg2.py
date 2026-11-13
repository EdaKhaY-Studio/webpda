with open("frontend/src/components/ui/Footer.tsx", "r", encoding="utf-8") as f:
    text = f.read()

idx = text.find('aria-label="WhatsApp')
print(text[idx+400:idx+900])
