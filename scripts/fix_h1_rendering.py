with open('frontend/src/app/blog/[slug]/page.tsx', 'r', encoding='utf-8') as f:
    text = f.read()

target = '''            {/* Title (H1 in Geom) */}
            {isArticle03 ? ('''

replacement = '''            {/* Title (H1 in Geom) */}
            {isArticle04 ? (
              <h1 className="font-geom font-bold text-[30px] sm:text-[42px] lg:text-[50px] text-[#F7F1EB] leading-[1.14] tracking-tight mb-5">
                Apa Itu GEO?{" "}
                <span className="text-[#F45B1A]">
                  Cara Agar Bisnis Lebih Mudah Dikenal dan Direkomendasikan oleh AI
                </span>
              </h1>
            ) : isArticle03 ? ('''

if target in text:
    text = text.replace(target, replacement)
    with open('frontend/src/app/blog/[slug]/page.tsx', 'w', encoding='utf-8') as f:
        f.write(text)
    print("Successfully added isArticle04 H1 block to page.tsx")
else:
    print("Error: target not found in page.tsx")
