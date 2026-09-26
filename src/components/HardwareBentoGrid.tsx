import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const categories = [
  {
    id: "laptop",
    tag: "NOTEBOOK & MACBOOK",
    title: "Laptop & MacBook",
    priceBadge: "s/d Rp 18,5 Jt",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&q=80",
    gridClass: "md:col-span-5 lg:col-span-4 md:row-span-2",
    isTall: true,
    waLink:
      "https://wa.me/6285979220599?text=" +
      encodeURIComponent("Halo Gudang Komputer, saya mau jual Laptop / MacBook bekas atau rusak"),
  },
  {
    id: "vga",
    tag: "SERIES RTX & RX",
    title: "VGA / Kartu Grafis",
    priceBadge: "s/d Rp 14,0 Jt",
    image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&q=80",
    gridClass: "md:col-span-7 lg:col-span-5",
    isTall: false,
    waLink:
      "https://wa.me/6285979220599?text=" +
      encodeURIComponent("Halo Gudang Komputer, saya mau jual VGA / GPU bekas atau artefak"),
  },
  {
    id: "pc_rakitan",
    tag: "CUSTOM RIG & AIO",
    title: "PC Desktop & Rig",
    priceBadge: "s/d Rp 22,0 Jt",
    image: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?w=800&q=80",
    gridClass: "md:col-span-6 lg:col-span-3",
    isTall: false,
    waLink:
      "https://wa.me/6285979220599?text=" +
      encodeURIComponent("Halo Gudang Komputer, saya mau jual PC Desktop / Gaming Rig"),
  },
  {
    id: "server",
    tag: "RACKMOUNT & STORAGE",
    title: "Server & Enterprise",
    priceBadge: "s/d Rp 85,0 Jt",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    gridClass: "md:col-span-6 lg:col-span-4",
    isTall: false,
    waLink:
      "https://wa.me/6285979220599?text=" +
      encodeURIComponent("Halo Gudang Komputer, saya mau jual Server & Data Center hardware"),
  },
  {
    id: "mobo",
    tag: "CPU & MOBO",
    title: "Motherboard & CPU",
    priceBadge: "s/d Rp 7,5 Jt",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    gridClass: "md:col-span-6 lg:col-span-2",
    isTall: false,
    waLink:
      "https://wa.me/6285979220599?text=" +
      encodeURIComponent("Halo Gudang Komputer, saya mau jual Motherboard & Processor bekas/matot"),
  },
  {
    id: "ewaste",
    tag: "PART MATI & KANIBAL",
    title: "Limbah E-Waste",
    priceBadge: "Rp 350rb/Kg",
    image: "https://images.unsplash.com/photo-1562976540-1502c2145186?w=800&q=80",
    gridClass: "md:col-span-6 lg:col-span-2",
    isTall: false,
    waLink:
      "https://wa.me/6285979220599?text=" +
      encodeURIComponent("Halo Gudang Komputer, saya mau jual limbah rongsokan PCB e-waste kiloan"),
  },
];

export function HardwareBentoGrid() {
  return (
    <section
      className="relative w-full bg-surface/90 py-16 lg:py-20 border-b border-surface-container"
      id="katalog-buyback"
    >
      {/* Ambient Light Spot */}
      <div className="pointer-events-none absolute -top-32 left-1/4 w-[500px] h-[500px] bg-primary-container/10 blur-[130px] rounded-full" />

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8">
        <Reveal from="bottom">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div className="flex flex-col gap-2">
              <div className="inline-flex items-center gap-2">
                <div className="relative flex h-2 w-2 items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary-container" />
                </div>
                <span className="font-monotech text-[11px] text-primary-fixed uppercase tracking-widest font-bold">
                  KATALOG HARGA TERKINI
                </span>
              </div>
              <h2 className="font-heading text-3xl md:text-5xl uppercase text-on-surface font-bold tracking-tight">
                KATEGORI DITERIMA
              </h2>
            </div>
            <p className="text-sm text-on-surface-variant max-w-sm">
              Hardware apa saja yang bisa dicairkan hari ini di 3 cabang Gudang Komputer.
            </p>
          </div>
        </Reveal>

        {/* Magazine Editorial Interlocking Pinboard Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6 auto-rows-[250px] lg:auto-rows-[270px]">
          {categories.map((c, i) => (
            <Reveal key={c.id} from="bottom" delay={i * 60} className={`${c.gridClass} h-full`}>
              <a
                href={c.waLink}
                target="_blank"
                rel="noreferrer"
                className="group relative h-full rounded-2xl overflow-hidden border border-surface-container-high/80 hover:border-primary-container hover:-translate-y-1.5 hover:shadow-[0_12px_35px_-10px_rgba(255,94,20,0.3)] transition-all duration-300 ease-out flex flex-col justify-between bg-surface-container-lowest"
              >
                {/* Photo Container */}
                {c.isTall ? (
                  <>
                    <div className="relative w-full h-[68%] md:h-[72%] overflow-hidden bg-surface-container-low">
                      <img
                        alt={c.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                        src={c.image}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-black/30" />
                      <div className="absolute top-4 left-4 z-10">
                        <span className="inline-block bg-primary-container text-white font-monotech text-xs uppercase font-bold px-3.5 py-1.5 rounded-full shadow-lg tracking-wider">
                          {c.priceBadge}
                        </span>
                      </div>
                    </div>

                    <div className="relative z-10 p-5 lg:p-6 flex items-center justify-between bg-surface-container-lowest">
                      <div>
                        <span className="font-monotech text-primary-fixed uppercase tracking-widest text-[10px] block mb-1 font-bold">
                          {c.tag}
                        </span>
                        <h3 className="font-heading text-xl lg:text-2xl uppercase text-on-surface font-bold tracking-tight group-hover:text-primary transition-colors">
                          {c.title}
                        </h3>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-surface-container border border-surface-container-high flex items-center justify-center group-hover:bg-primary-container group-hover:border-primary-container group-hover:shadow-[0_0_15px_rgba(255,94,20,0.5)] transition-all shrink-0">
                        <ArrowRight className="text-on-surface group-hover:text-white group-hover:translate-x-0.5 transition-all w-5 h-5" />
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <img
                      alt={c.title}
                      className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                      src={c.image}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/65 to-transparent" />
                    <div className="absolute top-4 right-4 z-10">
                      <span className="inline-block bg-primary-container text-white font-monotech text-xs uppercase font-bold px-3 py-1 rounded-full shadow-md">
                        {c.priceBadge}
                      </span>
                    </div>
                    <div className="relative z-10 p-5 lg:p-6 flex items-center justify-between">
                      <div className="min-w-0 pr-2">
                        <span className="font-monotech text-primary-fixed uppercase tracking-widest text-[10px] block mb-0.5 font-bold">
                          {c.tag}
                        </span>
                        <h3 className="font-heading text-base lg:text-xl uppercase text-on-surface font-bold tracking-tight group-hover:text-primary transition-colors truncate">
                          {c.title}
                        </h3>
                      </div>
                      <div className="w-9 h-9 rounded-full bg-surface/80 backdrop-blur-md border border-surface-container-high flex items-center justify-center group-hover:bg-primary-container group-hover:border-primary-container group-hover:shadow-[0_0_15px_rgba(255,94,20,0.5)] transition-all shrink-0">
                        <ArrowRight className="text-on-surface group-hover:text-white group-hover:translate-x-0.5 transition-all w-4 h-4" />
                      </div>
                    </div>
                  </>
                )}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
