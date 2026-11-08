import { MapPin, Layers, ShieldCheck, HeartHandshake, CheckCircle2 } from "lucide-react";
import { MOCK_WHY_US } from "@/data/mock-home";

export default function WhyUsSection() {
  const getIcon = (icon: string) => {
    switch (icon) {
      case "map-pin":
        return <MapPin className="h-6 w-6 text-blue-600" />;
      case "layers":
        return <Layers className="h-6 w-6 text-indigo-600" />;
      case "shield-check":
        return <ShieldCheck className="h-6 w-6 text-emerald-600" />;
      case "heart-handshake":
        return <HeartHandshake className="h-6 w-6 text-amber-500" />;
      default:
        return <CheckCircle2 className="h-6 w-6 text-blue-600" />;
    }
  };

  return (
    <section id="keunggulan" className="py-20 lg:py-28 bg-white border-y border-slate-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Heading & Value Proposition Statement */}
          <div className="lg:col-span-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1 text-xs font-semibold text-blue-700 mb-4">
              <span>Mengapa Paham Digital Agency?</span>
            </div>
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl leading-tight">
              Dibuat Khusus Memahami Kebutuhan Pengusaha Daerah
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Banyak jasa pembuatan website hanya menyerahkan kode lalu pergi. Kami di Paham Digital Agency menemani UMKM dari nol, menyusun strategi digital, hingga toko Anda aktif menerima pembeli.
            </p>

            <div className="mt-8 rounded-2xl bg-gradient-to-tr from-blue-900 to-indigo-900 p-6 text-white shadow-lg">
              <h4 className="font-bold text-lg text-white mb-2">
                Komitmen Lokal Kami
              </h4>
              <p className="text-sm text-blue-100 leading-relaxed">
                Kami berkomitmen mengangkat potensi kuliner, fashion, jasa, dan perdagangan lokal di Aceh Barat agar berdaya saing tinggi dan diakui secara nasional.
              </p>
            </div>
          </div>

          {/* Right Column: Key Benefits Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {MOCK_WHY_US.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl border border-slate-200/80 bg-slate-50/60 p-6 hover:bg-white hover:shadow-md hover:border-blue-300 transition-all"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm border border-slate-200/80 mb-4">
                  {getIcon(item.icon)}
                </div>
                <h3 className="font-bold text-base text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

