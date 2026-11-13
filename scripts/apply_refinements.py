with open('frontend/src/components/blog/ArticleApaItuGeo.tsx', 'r', encoding='utf-8') as f:
    content = f.read()

# 1. Refine Section 7F (Structured Data)
old_7f = '''        {/* 7F: Structured Data */}
        <div id="structured-data" className="p-6 rounded-2xl bg-[#140E0B] border border-white/10 space-y-4">
          <div className="flex items-center gap-2 text-[#F45B1A] font-geom font-bold text-sm uppercase tracking-wider">
            <span>F. Gunakan Structured Data (Schema Markup) Secara Jujur</span>
          </div>
          <h3 className="font-geom font-bold text-xl text-[#F7F1EB]">
            Beri Mesin Label Baku Melalui Format JSON-LD
          </h3>
          <p className="font-outfit text-sm text-[#A99A90] leading-relaxed">
            Structured data (Schema.org) adalah kode terstandarisasi yang disematkan di balik halaman web untuk memberitahukan mesin pencari makna eksplisit dari isi halaman: apakah ini entitas perusahaan (<em>Organization</em>), profil usaha lokal (<em>LocalBusiness</em>), artikel edukasi (<em>BlogPosting</em>), atau daftar pertanyaan umum (<em>FAQPage</em>).
          </p>
          <div className="p-4 rounded-xl bg-[#0B0807] border border-white/10 space-y-2">
            <div className="flex items-center justify-between text-xs text-[#A99A90] font-mono">
              <span>Contoh Format Schema Organization (JSON-LD):</span>
              <span className="text-[#F45B1A]">schema.org</span>
            </div>
            <pre className="p-3 rounded-lg bg-[#17100D] text-xs font-mono text-[#D5CBC3] overflow-x-auto leading-relaxed">
{`{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Paham Digital Agency",
  "url": "https://pahamdigital.online",
  "logo": "https://pahamdigital.online/paham-logo-512.png",
  "description": "Partner transformasi digital untuk pembuatan website profesional, aplikasi web, dan AI Customer Service di Aceh.",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Meulaboh, Aceh Barat",
    "addressRegion": "Aceh",
    "addressCountry": "ID"
  }
}`}
            </pre>
          </div>
          <div className="p-3 rounded-lg bg-red-950/30 border border-red-500/20 text-xs font-outfit text-red-300">
            <strong>Peringatan Etika:</strong> Jangan memalsukan rating bintang, review fiktif, atau alamat rekayasa di structured data. Mesin pencari modern menerapkan sistem pendeteksi spam yang ketat; manipulasi schema dapat berujung sanksi penurunan visibilitas.
          </div>
        </div>'''

new_7f = '''        {/* 7F: Structured Data */}
        <div id="structured-data" className="p-6 rounded-2xl bg-[#140E0B] border border-white/10 space-y-4">
          <div className="flex items-center gap-2 text-[#F45B1A] font-geom font-bold text-sm uppercase tracking-wider">
            <span>F. Gunakan Structured Data (Schema Markup) Secara Jujur</span>
          </div>
          <h3 className="font-geom font-bold text-xl text-[#F7F1EB]">
            Beri Mesin Label Baku Melalui Format JSON-LD
          </h3>
          <p className="font-outfit text-sm text-[#A99A90] leading-relaxed">
            Structured data (Schema.org) adalah format standar untuk memberikan petunjuk eksplisit kepada mesin penelusur mengenai identitas halaman. Tipe skema <code className="text-[#F45B1A]">Organization</code> mendeskripsikan entitas bisnis secara menyeluruh (seperti identitas resmi brand, domain utama, logo terverifikasi, dan fokus layanan). Sementara itu, tipe <code className="text-[#F45B1A]">LocalBusiness</code> sebaiknya hanya digunakan apabila bisnismu memiliki lokasi fisik nyata yang jelas dan jenis usaha setempat yang memenuhi kriteria.
          </p>
          <div className="p-4 rounded-xl bg-[#0B0807] border border-white/10 space-y-2 max-w-full">
            <div className="flex items-center justify-between text-xs text-[#A99A90] font-mono">
              <span>Contoh Format Skema Organization Edukatif (JSON-LD):</span>
              <span className="text-[#F45B1A]">schema.org</span>
            </div>
            <pre className="p-3 rounded-lg bg-[#17100D] text-xs font-mono text-[#D5CBC3] overflow-x-auto leading-relaxed max-w-full">
{`{
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://pahamdigital.online/#organization",
  "name": "Paham Digital Agency",
  "url": "https://pahamdigital.online/",
  "logo": "https://pahamdigital.online/paham-logo-512.png",
  "description": "Agensi digital yang menyediakan layanan website profesional, web application, AI Customer Service, serta optimasi SEO dan GEO."
}`}
            </pre>
            <p className="text-[11px] font-outfit text-[#A99A90] italic">
              *Catatan Edukatif: Kode di atas adalah contoh referensi penulisan skema entitas, bukan instruksi untuk menyalin ulang skema ke halaman artikel ini. Implementasi skema situs yang sesungguhnya dipasang terpusat pada halaman yang sesuai tanpa menduplikasi atau membuat entitas yang saling bertentangan.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-[#17100D] border-l-4 border-amber-500 border-y border-r border-white/10 space-y-2 text-xs font-outfit text-[#D5CBC3] leading-relaxed">
            <p className="font-semibold text-[#F7F1EB] flex items-center gap-1.5">
              <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />
              Peringatan Etika &amp; Batasan Structured Data:
            </p>
            <ul className="list-disc list-inside space-y-1 text-[#A99A90]">
              <li>Structured data membantu mesin pencari menginterpretasikan konteks informasi halaman dengan lebih akurat, namun <strong>tidak memberikan jaminan otomatis</strong> bahwa bisnis akan direkomendasikan AI atau mendapatkan rich snippet di hasil pencarian.</li>
              <li>Jangan pernah mengarang alamat kantor fiktif, nomor telepon rekayasa, profil sosial buatan, atau rating ulasan bintang palsu. Masukkan data alamat hanya bila alamat fisik tersebut terverifikasi dan konsisten ditampilkan ke pengunjung publik.</li>
            </ul>
          </div>
        </div>'''

if old_7f in content:
    content = content.replace(old_7f, new_7f)
    print("Successfully replaced Section 7F (Structured Data)")
else:
    print("Error: old_7f not found")

# 2. Refine Section 7A (robots.txt warning)
old_robots = '''          <div className="p-4 rounded-xl bg-[#0B0807] border border-white/10 space-y-2">
            <div className="flex items-center justify-between text-xs text-[#A99A90] font-mono">
              <span>Contoh Konseptual robots.txt Ramah AI Search:</span>
              <span className="text-[#16A34A]">200 OK</span>
            </div>
            <pre className="p-3 rounded-lg bg-[#17100D] text-xs font-mono text-[#D5CBC3] overflow-x-auto leading-relaxed">
{`User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

# Mengizinkan penelusuran fitur ChatGPT Search
User-agent: OAI-SearchBot
Allow: /

Sitemap: https://pahamdigital.online/sitemap.xml`}
            </pre>
            <p className="text-[11px] font-outfit text-[#A99A90] italic">
              *Contoh ini adalah panduan konseptual. Jangan menimpa aturan keamanan khusus situs Anda tanpa memeriksa konfigurasi lingkungan produksi Anda terlebih dahulu.
            </p>
          </div>'''

new_robots = '''          <div className="p-4 rounded-xl bg-[#0B0807] border border-white/10 space-y-3 max-w-full">
            <div className="flex items-center justify-between text-xs text-[#A99A90] font-mono">
              <span>Contoh Konseptual robots.txt Ramah AI Search:</span>
              <span className="text-[#16A34A]">200 OK</span>
            </div>
            <pre className="p-3 rounded-lg bg-[#17100D] text-xs font-mono text-[#D5CBC3] overflow-x-auto leading-relaxed max-w-full">
{`User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

# Mengizinkan penelusuran fitur ChatGPT Search
User-agent: OAI-SearchBot
Allow: /

Sitemap: https://pahamdigital.online/sitemap.xml`}
            </pre>
            <div className="p-3.5 rounded-lg bg-[#17100D] border border-amber-500/30 text-xs font-outfit text-[#D5CBC3] space-y-2 leading-relaxed">
              <p className="font-semibold text-amber-400 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4 shrink-0 text-amber-400" />
                Panduan Keamanan Konfigurasi robots.txt:
              </p>
              <ul className="list-disc list-inside space-y-1 text-[#A99A90]">
                <li>Contoh di atas adalah <strong>ilustrasi edukatif</strong>, bukan pengganti langsung untuk seluruh file <code className="text-[#F7F1EB]">robots.txt</code> produksi Anda saat ini.</li>
                <li>Pemilik website wajib memeriksa aturan izin perayapan yang sedang berjalan, kebijakan keamanan situs, serta direktif sitemap sebelum melakukan modifikasi file.</li>
                <li>User-agent <code className="text-[#F45B1A]">OAI-SearchBot</code> secara khusus mengatur perayapan untuk fitur penemuan dan sitasi web pada ChatGPT Search.</li>
                <li>User-agent <code className="text-[#F45B1A]">GPTBot</code> memiliki tujuan terpisah yang berkaitan dengan pengumpulan korpus data untuk pelatihan model AI.</li>
                <li>Mengizinkan akses bagi <code className="text-[#F45B1A]">OAI-SearchBot</code> tidak mewajibkan Anda untuk mengizinkan <code className="text-[#F45B1A]">GPTBot</code>; keduanya dapat dikonfigurasi secara independen.</li>
                <li>Direktif <code className="text-[#F7F1EB]">robots.txt</code> hanya berfungsi sebagai pedoman perayap bagi bot yang patuh dan <strong>tidak dapat menembus atau membatalkan pemblokiran pada level firewall, CDN, WAF, atau server hosting</strong>.</li>
              </ul>
            </div>
          </div>'''

if old_robots in content:
    content = content.replace(old_robots, new_robots)
    print("Successfully replaced Section 7A (robots.txt warning)")
else:
    print("Error: old_robots not found")

# 3. Refine Section 13 (Remove decorative Sparkles icon)
old_13 = '''      {/* ── BAGIAN 13: KESIMPULAN ───────────────────────── */}
      <section id="kesimpulan" className="scroll-mt-28 space-y-6 border-t border-white/10 pt-10">
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
            <Sparkles className="w-4 h-4" />
            <span>BAGIAN 13 · PESAN PENUTUP</span>
          </div>
          <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] leading-tight">
            Kesimpulan: Membangun Kehadiran Digital yang Nyata di Era AI
          </h2>
        </div>'''

new_13 = '''      {/* ── BAGIAN 13: KESIMPULAN ───────────────────────── */}
      <section id="kesimpulan" className="scroll-mt-28 space-y-6 border-t border-white/10 pt-10">
        <div className="space-y-3">
          <div className="text-xs font-geom uppercase tracking-widest text-[#F45B1A] font-bold">
            <span>BAGIAN 13 · PESAN PENUTUP</span>
          </div>
          <h2 className="font-geom font-bold text-2xl sm:text-3xl text-[#F7F1EB] leading-tight">
            Kesimpulan: Membangun Kehadiran Digital yang Nyata di Era AI
          </h2>
        </div>'''

if old_13 in content:
    content = content.replace(old_13, new_13)
    print("Successfully replaced Section 13 (Removed Sparkles icon)")
else:
    print("Error: old_13 not found")

# 4. Refine WhatsApp Share Button
old_wa = '''      {/* ── SHARE BUTTON ────────────────────────────────── */}
      <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10">
        <span className="text-sm font-geom text-[#F7F1EB]">
          Merasa artikel edukasi GEO ini bermanfaat untuk bisnismu atau rekan pengusaha lainnya?
        </span>
        <a
          href={waShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#16A34A] hover:bg-[#15803d] text-white text-xs font-bold font-outfit transition-all shadow-md shadow-[#16A34A]/25"
        >
          <Share2 className="w-3.5 h-3.5" />
          <span>Bagikan ke WhatsApp</span>
        </a>
      </div>'''

new_wa = '''      {/* ── SHARE BUTTON ────────────────────────────────── */}
      <div className="pt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/10">
        <span className="text-sm font-geom text-[#F7F1EB]">
          Merasa artikel edukasi GEO ini bermanfaat untuk bisnismu atau rekan pengusaha lainnya?
        </span>
        <a
          href={waShareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-row items-center justify-center flex-nowrap whitespace-nowrap gap-2 px-5 py-2.5 rounded-full bg-[#16A34A] hover:bg-[#15803d] text-white text-xs font-bold font-outfit transition-all shadow-md shadow-[#16A34A]/25 shrink-0 w-fit max-w-full"
        >
          <svg
            className="w-4 h-4 shrink-0"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          <span className="whitespace-nowrap">Bagikan ke WhatsApp</span>
        </a>
      </div>'''

if old_wa in content:
    content = content.replace(old_wa, new_wa)
    print("Successfully replaced WhatsApp Share Button")
else:
    print("Error: old_wa not found")

with open('frontend/src/components/blog/ArticleApaItuGeo.tsx', 'w', encoding='utf-8') as f:
    f.write(content)

print("Saved updated frontend/src/components/blog/ArticleApaItuGeo.tsx")
