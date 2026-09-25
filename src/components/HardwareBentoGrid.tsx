import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";

const bentoItems = [
  {
    id: "laptop",
    title: "Laptop Bekas, Rusak & Mati Total",
    category: "Laptop & Notebook",
    subtitle: "Terima Segala Kondisi (Mulus / Engsel Patah / Matot)",
    priceRange: "Rp 500.000 - Rp 4.500.000",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&q=80",
    badge: "Paling Banyak Dicari",
    badgeColor: "bg-blue-600 text-white",
    cols: "lg:col-span-8",
    aspect: "aspect-[16/9] sm:aspect-[21/9]",
    tags: ["ThinkPad", "ASUS ROG", "Acer Nitro", "HP", "MacBook"],
  },
  {
    id: "vga",
    title: "VGA Card Artefak & No Display",
    category: "Graphics Processing Unit",
    subtitle: "GDDR6 & Heatsink Jadi Bahan Donor Lab",
    priceRange: "Rp 450.000 - Rp 2.500.000",
    image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&q=80",
    badge: "Kanibal IC & VRAM",
    badgeColor: "bg-teal-600 text-white",
    cols: "lg:col-span-4",
    aspect: "aspect-[4/3]",
    tags: ["RTX 3070", "GTX 1660", "RX 6600", "RX 580"],
  },
  {
    id: "mobo",
    title: "Motherboard Konslet / Mati Total",
    category: "Mainboard & IC Donor",
    subtitle: "Chipset LGA1700, AM4, AM5, H61, B450",
    priceRange: "Rp 70.000 - Rp 850.000",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    badge: "Donor MOSFET & VRM",
    badgeColor: "bg-indigo-600 text-white",
    cols: "lg:col-span-4",
    aspect: "aspect-[4/3]",
    tags: ["B450M", "B550", "H61", "H110", "Z390"],
  },
  {
    id: "borongan",
    title: "Lelang Borongan PC & Aset Kantor",
    category: "Peremajaan Perusahaan & Lab",
    subtitle: "Terima 5 hingga 100+ unit, jemput armada",
    priceRange: "Rp 3.000.000 - Rp 50.000.000+",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800&q=80",
    badge: "Invoice & BAST Resmi",
    badgeColor: "bg-emerald-600 text-white",
    cols: "lg:col-span-4",
    aspect: "aspect-[4/3]",
    tags: ["PC Kantor", "Monitor LED", "Server", "All-in-One"],
  },
  {
    id: "proc-ram",
    title: "RAM, SSD NVMe & Processor",
    category: "Memory & Processing Unit",
    subtitle: "Intel Core i3–i9, Ryzen 3000/5000/7000",
    priceRange: "Rp 100.000 - Rp 2.200.000",
    image: "https://images.unsplash.com/photo-1562976540-1502c2145186?w=800&q=80",
    badge: "Military Data Wipe",
    badgeColor: "bg-blue-700 text-white",
    cols: "lg:col-span-4",
    aspect: "aspect-[4/3]",
    tags: ["DDR4 16GB", "NVMe 1TB", "Core i7", "Ryzen 7"],
  },
];

export function HardwareBentoGrid() {
  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:py-20">
      <Reveal from="bottom">
        <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div className="space-y-2.5 max-w-2xl">
            <div className="font-monotech inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-700">
              <Sparkles size={14} />
              Kategori Komponen Yang Kami Terima
            </div>
            <h2 className="font-heading text-2xl font-extrabold text-slate-900 sm:text-4xl">
              Spesialisasi Buyback Hardware &amp; Kanibal Donor
            </h2>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              Mulai dari unit gaming mulus hingga komponen gosong kena petir. Semua dinilai
              berdasarkan fungsionalitas sirkuit dan kebutuhan donor lab kami di 3 cabang.
            </p>
          </div>

          <Link
            to="/jual/form"
            className="font-heading inline-flex items-center gap-2 self-start rounded-xl bg-slate-900 px-5 py-2.5 text-xs sm:text-sm font-bold text-white transition-all hover:bg-blue-600 hover:shadow-md"
          >
            <span>Taksir Unit Anda Sekarang</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </Reveal>

      {/* Bento Grid 21st.dev style */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-12">
        {bentoItems.map((item, idx) => (
          <Reveal key={item.id} from="bottom" delay={idx * 60} className={`${item.cols} group`}>
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-xs transition-all duration-500 hover:border-blue-400 hover:shadow-xl hover:-translate-y-1">
              {/* Background Image with Dark Gradient Overlay */}
              <div
                className={`relative mb-5 w-full overflow-hidden rounded-2xl bg-slate-900 ${item.aspect}`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108 opacity-85 group-hover:opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Floating Badge */}
                <div className="absolute top-3 left-3">
                  <span
                    className={`font-monotech inline-flex items-center gap-1 rounded-lg px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider shadow-sm ${item.badgeColor}`}
                  >
                    {item.badge}
                  </span>
                </div>

                {/* Price pill inside photo */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <div>
                    <span className="font-monotech text-[10px] text-slate-300 block uppercase tracking-wider">
                      Rentang Taksiran
                    </span>
                    <span className="font-heading text-sm sm:text-base font-extrabold text-white drop-shadow-sm">
                      {item.priceRange}
                    </span>
                  </div>
                  <span className="font-monotech rounded-full bg-white/20 backdrop-blur-md px-2.5 py-1 text-[11px] font-semibold text-white">
                    {item.category.split(" ")[0]}
                  </span>
                </div>
              </div>

              {/* Text Info */}
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-1.5 font-monotech text-[10px] text-slate-500">
                  {item.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-slate-100 px-2 py-0.5 font-medium text-slate-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <h3 className="font-heading text-base sm:text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">{item.subtitle}</p>
              </div>

              {/* Action Button */}
              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                <Link
                  to="/jual/form"
                  search={{ category: item.id }}
                  className="font-heading inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700"
                >
                  <span>Ajukan Kategori Ini</span>
                  <ArrowRight size={13} />
                </Link>
                <span className="font-monotech text-[10px] text-slate-400">Cek Lab 15 Mnt</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
