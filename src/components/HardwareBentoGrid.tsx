import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

const categories = [
  {
    id: "laptop",
    tag: "NOTEBOOK & MACBOOK",
    title: "Laptop & MacBook",
    priceBadge: "s/d Rp 18,5 Jt",
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1WGYoemnXceGxHRG3U7J46agNDt8yxEZJGsuDY0Fk6YMmMhcwfF3Nq-H93MEIB1r2GvmSoy6i2GQHiHfTKj9E7e5ZwJR1iGsniLOCD9nYgQyQqf5Aai2ogH48f39fO7Yvhl35WEbRX03C-dISDDoGPtvVKzPXfhWz3i5E-FZw1QqH4CTtZvDTyEtHmoo1ZIreAThaVcQLdOWAkNEb38CJ2JNIiaGWqsmxVorIEile5hp3aOrI2lkQT9d_JS",
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
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1VFYTJ66IZcoaOtGNFIRXDslEH1CLVSrJbNbDn61bMqnRsbAQhm7lfPgDT4Dy63vpBfOI2qD9XP1cdCNi_w977aPZRAZYQhMwIxfPl1CpC3WoELDy-78xBg3jCTEi7cm41-elrnm-F3JmbyKv_FLsLnRzDF_reQdMS2j4mQvf8uv8atXgdNNzs4-Mb708C2GK_hZkXzM7__gkZ82yiVyPb96MPMnkCe-Z8irRIWHSx1R-rk9xqvIRqvEGt7",
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
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1V2Vw_faD54FK9_gfV3LuMhk2___EXozZjUCuVZ5AOM5KBtMXga8c0_XPlBUPDtKKTPxQL7MHbmeR26yFbEWyITLmxAfSFZjy2xMGRbhuU36gA6LcYVQClLZfXJtdeGWO77N3rErQzw3A9Q6ANMIKHM4L1VkR8Mziz9T1qmf-LfmdRP_g0WSQPuTAJv88QGR8EcZkNQfpGgEXlABx-BPsY2IWGJGRdBa-SKLPLINW5zbflHc-k30UvCgY",
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
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1X0-wlf0EoJrAR84kLu2l31wLEyVPbjKXRtwLjhrz59rOyGQKI4UfQjWgGRUI2z4RKu_EuvchHXUa5WHwJ27wc40ihynT6TNSoNm8cBalVVhD62lknhuE67cIRsvtb1xMs3PZCS16tnV4sor6o7oWj79dWuEdSBQP3aLQdVOzj2APdeHOFnf1obY6f1scaah_UDC0ATU95teep_AfXSx6ANk9L1cIGoOCRULWCh_gLEhEro-dkHTAoG6cIA",
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
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1XpJ4-8x5qTfwLW8IDiew6MeY0QkbKQRQpRAg11jYCPLwIFPjGj7pBDrGF3SY5VhdNEsqs2QTdPgq7C7GpuV9lB3Vv55ZSH2zRJv45-fXSqOfMbuTC-eT06e7W_vGPwNt1yvsxg9bcaKAwdWWSQBWKn60PrYViAtykcxJ5N3c9fjBZWFn-NPHG8lGyLXrv6sYUGXGB5LxW7lzh0S2nPey-ePFzTbuMTAWVZ-SJ4Cvjba5OkHle9eMJpido6",
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
    image:
      "https://lh3.googleusercontent.com/aida/AEtjO1Uzez8G6LJablXLTLJAFTpXIV4tJQbjyKlo8EUZx4WVzh5COoE3GM_qQl9UBibfvGFIyyKFOdt0PL-g0w-btajpJUEd3JrdzsnMipGJu8ntEWh70o0syNsOoSeFDylCqhUg5OlGfWD9zLCegdhm84OlBfvkhLs8u9LpgaIeMxYbs2nRzx3a9Zmy_iYrno3OBDzafKZIelje2GdQLScDaCIEFrv4OZmhd43AhXwUeRHuX-EfL5fXxWsrU9pw",
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
