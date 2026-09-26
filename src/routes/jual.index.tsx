import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { FloatingWa } from "@/components/FloatingWa";

export const Route = createFileRoute("/jual/")({
  validateSearch: (search: Record<string, unknown>): { q?: string | undefined } => ({
    q: typeof search["q"] === "string" && search["q"].length > 0 ? search["q"] : undefined,
  }),
  head: () => ({
    meta: [
      {
        title: "Gudang Komputer — Jual Hardware Bekas, Rusak & Mati Total Cair Instan",
      },
      {
        name: "description",
        content:
          "Pusat buyback & likuidasi hardware: laptop mati total, VGA artefak, motherboard konslet, PC kantor di 3 depo cabang (Cikarang, Gunungkidul DIY, Lampung). Estimasi < 15 menit, dana cair langsung di tempat. WA 0859-7922-0599.",
      },
      {
        name: "keywords",
        content:
          "gudang komputer, jual laptop bekas, jual laptop rusak, harga beli laptop mati, jual vga artefak, jual motherboard rusak, depo cikarang, depo gunungkidul, depo lampung, lelang pc kantor",
      },
      {
        property: "og:title",
        content: "Gudang Komputer — Jual Hardware. Cair Sekarang.",
      },
      {
        property: "og:description",
        content:
          "Ubah laptop, GPU, motherboard, & PC mati total menjadi uang tunai di 3 cabang resmi Gudang Komputer. Cek lab 15 menit, dana langsung cair detik itu juga.",
      },
      { property: "og:image", content: "https://gudangkomputer.web.id/gudangkomputer-logo.png" },
      { property: "og:url", content: "https://gudangkomputer.web.id/jual" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "https://gudangkomputer.web.id/jual" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&display=swap",
      },
    ],
  }),
  component: JualPage,
});

function JualPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  return (
    <div className="bg-background font-body-md text-on-surface antialiased tech-grid-bg min-h-screen">
      {/* ==================== HEADER ==================== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.4)] border-b border-surface-container">
        <div className="h-20 w-full max-w-[1280px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop flex items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md shrink-0">
            <img
              alt="Gudang Komputer Logo"
              className="h-9 w-9 object-contain"
              src="/gudangkomputer-logo.png"
            />
            <div className="flex flex-col">
              <span className="font-headline-sm text-headline-sm uppercase text-on-surface tracking-tight font-bold">
                GUDANG KOMPUTER
              </span>
              <span className="font-label-tech text-label-tech text-primary uppercase">
                Buyback &amp; E-Waste Exchange
              </span>
            </div>
          </div>
          <nav className="hidden xl:flex items-center gap-space-sm">
            <a
              className="px-space-sm py-space-xs font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors rounded"
              href="#katalog-buyback"
            >
              Katalog Hardware
            </a>
            <a
              className="px-space-sm py-space-xs font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors rounded"
              href="#cara-kerja"
            >
              Cara Kerja
            </a>
            <a
              className="px-space-sm py-space-xs font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors rounded"
              href="#b2b-liquidation"
            >
              Layanan B2B
            </a>
            <a
              className="px-space-sm py-space-xs font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors rounded"
              href="#testimoni"
            >
              Testimoni
            </a>
            <a
              className="px-space-sm py-space-xs font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors rounded"
              href="#lokasi-depo"
            >
              Lokasi Depo
            </a>
            <a
              className="px-space-sm py-space-xs font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors rounded"
              href="/berita"
            >
              Berita Acara
            </a>
            <a
              className="px-space-sm py-space-xs font-label-md text-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors rounded"
              href="#faq"
            >
              FAQ
            </a>
          </nav>
          <div className="flex items-center gap-space-md shrink-0">
            <a
              className="inline-flex items-center gap-space-xs bg-primary-container hover:bg-secondary-container text-on-primary-container px-space-md py-space-sm rounded font-label-lg text-label-lg uppercase tracking-wider transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,94,20,0.45)] hover:scale-[1.02]"
              href="https://wa.me/6285979220599?text=Halo%20Gudang%20Komputer,%20saya%20mau%20jual%20hardware"
              rel="noopener noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-[18px]">forum</span>
              <span className="hidden sm:inline">Dapatkan Penawaran Instan</span>
              <span className="sm:hidden">Jual</span>
            </a>
          </div>
        </div>
      </header>

      {/* ==================== MAIN BODY ==================== */}
      <main className="w-full pt-20 bg-background min-h-screen relative overflow-hidden">
        <div className="flex flex-col w-full relative">
          {/* ==================== HERO SECTION (MINIMALIST & VISUAL-FIRST) ==================== */}
          <section className="relative w-full overflow-hidden bg-surface-container-lowest/80 py-16 lg:py-20 border-b border-surface-container">
            {/* Multi-layered Ambient Glows */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-primary-container/15 blur-[140px] pointer-events-none rounded-full" />
            <div className="absolute -top-10 right-10 w-[350px] h-[350px] bg-amber-500/10 blur-[110px] pointer-events-none rounded-full" />
            <div className="relative w-full max-w-[1280px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-2 bg-surface-container/90 backdrop-blur-sm px-3.5 py-1.5 rounded-full mb-4 border border-surface-container-high shadow-[0_0_15px_rgba(255,94,20,0.15)]">
                <div className="relative flex h-2 w-2 items-center justify-center">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary-container" />
                </div>
                <span className="font-label-tech text-label-tech text-primary uppercase tracking-widest">
                  ESTIMASI &lt; 15 MENIT
                </span>
              </div>
              <h1 className="font-display-lg text-3xl md:text-5xl lg:text-6xl uppercase text-on-surface tracking-tight font-bold leading-tight mb-3">
                JUAL HARDWARE.{" "}
                <span className="text-primary-container bg-gradient-to-r from-primary-container via-[#ff7836] to-secondary-container bg-clip-text text-transparent">
                  CAIR SEKARANG.
                </span>
              </h1>
              <p className="font-body-md text-base md:text-lg text-on-surface-variant max-w-xl mb-6">
                Laptop, GPU, PC &amp; Server mati/normal dibeli langsung.
              </p>
              <div className="flex items-center justify-center gap-4 mb-10">
                <a
                  className="inline-flex items-center gap-2 bg-primary-container hover:bg-secondary-container text-on-primary-container px-8 py-3.5 rounded font-label-lg text-label-lg uppercase tracking-wider font-bold transition-all duration-300 shadow-lg shadow-primary-container/25 hover:shadow-[0_0_30px_rgba(255,94,20,0.5)] hover:scale-[1.02]"
                  href="https://wa.me/6285979220599?text=Halo%20Gudang%20Komputer,%20saya%20mau%20cek%20estimasi%20harga%20hardware"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[20px]">bolt</span>
                  <span>CEK HARGA INSTAN</span>
                </a>
              </div>
              <div className="w-full relative rounded-xl overflow-hidden border border-surface-container-high/90 shadow-2xl bg-surface-container-low group hover:border-primary-container/40 transition-all duration-500">
                <img
                  alt="Hardware Buyback Showcase"
                  className="w-full h-64 md:h-[440px] lg:h-[500px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  src="https://lh3.googleusercontent.com/aida/AEtjO1Wc7mrgO28jINYhAENDm2FOg1qnmexVSMZNbQS5aV2aiH68dXwf3yoXchx-PY7WzuZNEq52Zt3CmrpubcxkixgaJGbhAbC9NbHPOpEBBttS9cKZH4vosBAlUvTbps6qbPBBWM32ShUQIJ08FpM1srlaKswP-16jBOOq--7S3pAbdJTD7kbmSWMI9HKVvAPYWn_FeYOu5OhfqVgCL_wSmP0gx5vTWNRY23gAkZv2Q2nBrVKeq3CqvosB340j"
                />
              </div>
            </div>
          </section>

          {/* ==================== SEARCHABLE HARDWARE GRID SECTION (MAGAZINE EDITORIAL INTERLOCKING PINBOARD) ==================== */}
          <section
            className="relative w-full bg-surface/90 py-20 border-b border-surface-container"
            id="katalog-buyback"
          >
            {/* Ambient Light Spot */}
            <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-primary-container/10 blur-[130px] pointer-events-none rounded-full" />
            <div className="relative w-full max-w-[1280px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-4">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
                <div className="flex flex-col gap-2">
                  <div className="inline-flex items-center gap-2">
                    <div className="relative flex h-2 w-2 items-center justify-center">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary-container" />
                    </div>
                    <span className="font-label-tech text-label-tech text-primary uppercase tracking-widest">
                      KATALOG HARGA TERKINI
                    </span>
                  </div>
                  <h2 className="font-headline-lg text-3xl md:text-5xl uppercase text-on-surface font-bold tracking-tight">
                    KATEGORI DITERIMA
                  </h2>
                </div>
                <p className="font-body-md text-on-surface-variant max-w-sm text-sm">
                  Hardware apa saja yang bisa dicairkan hari ini.
                </p>
              </div>

              {/* Magazine Editorial Pinboard & Overlapping Masonry (Interlocking Tech Tiles) */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6 auto-rows-[250px] lg:auto-rows-[270px]">
                {/* Tile 1 (Utama Kiri): LAPTOP & MACBOOK */}
                <a
                  className="group relative rounded-2xl overflow-hidden border border-surface-container-high/80 hover:border-primary-container hover:-translate-y-1.5 hover:shadow-[0_12px_35px_-10px_rgba(255,94,20,0.3)] transition-all duration-300 ease-out md:col-span-5 lg:col-span-4 md:row-span-2 flex flex-col justify-between bg-surface-container-lowest"
                  href="https://wa.me/6285979220599?text=Halo%20Gudang%20Komputer,%20saya%20mau%20jual%20Laptop%20MacBook"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <div className="relative w-full h-[68%] md:h-[72%] overflow-hidden bg-surface-container-low">
                    <img
                      alt="Laptop & MacBook"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                      src="https://lh3.googleusercontent.com/aida/AEtjO1WGYoemnXceGxHRG3U7J46agNDt8yxEZJGsuDY0Fk6YMmMhcwfF3Nq-H93MEIB1r2GvmSoy6i2GQHiHfTKj9E7e5ZwJR1iGsniLOCD9nYgQyQqf5Aai2ogH48f39fO7Yvhl35WEbRX03C-dISDDoGPtvVKzPXfhWz3i5E-FZw1QqH4CTtZvDTyEtHmoo1ZIreAThaVcQLdOWAkNEb38CJ2JNIiaGWqsmxVorIEile5hp3aOrI2lkQT9d_JS"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-black/30" />
                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-block bg-primary-container text-on-primary-container font-label-tech text-xs uppercase font-bold px-3.5 py-1.5 rounded-full shadow-lg tracking-wider">
                        s/d Rp 18,5 Jt
                      </span>
                    </div>
                  </div>
                  <div className="relative z-10 p-5 lg:p-6 flex items-center justify-between bg-surface-container-lowest">
                    <div>
                      <span className="font-label-tech text-primary uppercase tracking-widest text-[10px] block mb-1">
                        NOTEBOOK &amp; MACBOOK
                      </span>
                      <h3 className="font-headline-lg text-xl lg:text-2xl uppercase text-on-surface font-bold tracking-tight group-hover:text-primary transition-colors">
                        Laptop &amp; MacBook
                      </h3>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-surface-container border border-surface-container-high flex items-center justify-center group-hover:bg-primary-container group-hover:border-primary-container group-hover:shadow-[0_0_15px_rgba(255,94,20,0.5)] transition-all shrink-0">
                      <span className="material-symbols-outlined text-on-surface group-hover:text-on-primary-container group-hover:translate-x-0.5 transition-all text-[20px]">
                        arrow_forward
                      </span>
                    </div>
                  </div>
                </a>

                {/* Tile 2 (Tengah Atas): VGA / KARTU GRAFIS */}
                <a
                  className="group relative rounded-2xl overflow-hidden border border-surface-container-high/80 hover:border-primary-container hover:-translate-y-1.5 hover:shadow-[0_12px_35px_-10px_rgba(255,94,20,0.3)] transition-all duration-300 ease-out md:col-span-7 lg:col-span-5 flex flex-col justify-end bg-surface-container-lowest"
                  href="https://wa.me/6285979220599?text=Halo%20Gudang%20Komputer,%20saya%20mau%20jual%20VGA%20GPU"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    alt="VGA / Kartu Grafis"
                    className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    src="https://lh3.googleusercontent.com/aida/AEtjO1VFYTJ66IZcoaOtGNFIRXDslEH1CLVSrJbNbDn61bMqnRsbAQhm7lfPgDT4Dy63vpBfOI2qD9XP1cdCNi_w977aPZRAZYQhMwIxfPl1CpC3WoELDy-78xBg3jCTEi7cm41-elrnm-F3JmbyKv_FLsLnRzDF_reQdMS2j4mQvf8uv8atXgdNNzs4-Mb708C2GK_hZkXzM7__gkZ82yiVyPb96MPMnkCe-Z8irRIWHSx1R-rk9xqvIRqvEGt7"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/55 to-transparent" />
                  <div className="absolute top-4 right-4 z-10">
                    <span className="inline-block bg-primary-container text-on-primary-container font-label-tech text-xs uppercase font-bold px-3 py-1.5 rounded-full shadow-lg tracking-wider">
                      s/d Rp 14,0 Jt
                    </span>
                  </div>
                  <div className="relative z-10 p-5 lg:p-6 flex items-center justify-between">
                    <div>
                      <span className="font-label-tech text-primary uppercase tracking-widest text-[10px] block mb-0.5">
                        SERIES RTX &amp; RX
                      </span>
                      <h3 className="font-headline-md text-lg lg:text-xl uppercase text-on-surface font-bold tracking-tight group-hover:text-primary transition-colors">
                        VGA / Kartu Grafis
                      </h3>
                    </div>
                    <div className="w-9 h-9 rounded-full bg-surface/80 backdrop-blur-md border border-surface-container-high flex items-center justify-center group-hover:bg-primary-container group-hover:border-primary-container group-hover:shadow-[0_0_15px_rgba(255,94,20,0.5)] transition-all shrink-0">
                      <span className="material-symbols-outlined text-on-surface group-hover:text-on-primary-container group-hover:translate-x-0.5 transition-all text-[18px]">
                        arrow_forward
                      </span>
                    </div>
                  </div>
                </a>

                {/* Tile 3 (Kanan Atas): PC DESKTOP & RIG */}
                <a
                  className="group relative rounded-2xl overflow-hidden border border-surface-container-high/80 hover:border-primary-container hover:-translate-y-1.5 hover:shadow-[0_12px_35px_-10px_rgba(255,94,20,0.3)] transition-all duration-300 ease-out md:col-span-6 lg:col-span-3 flex flex-col justify-end bg-surface-container-lowest"
                  href="https://wa.me/6285979220599?text=Halo%20Gudang%20Komputer,%20saya%20mau%20jual%20PC%20Desktop"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    alt="PC Desktop & Rig"
                    className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    src="https://lh3.googleusercontent.com/aida/AEtjO1V2Vw_faD54FK9_gfV3LuMhk2___EXozZjUCuVZ5AOM5KBtMXga8c0_XPlBUPDtKKTPxQL7MHbmeR26yFbEWyITLmxAfSFZjy2xMGRbhuU36gA6LcYVQClLZfXJtdeGWO77N3rErQzw3A9Q6ANMIKHM4L1VkR8Mziz9T1qmf-LfmdRP_g0WSQPuTAJv88QGR8EcZkNQfpGgEXlABx-BPsY2IWGJGRdBa-SKLPLINW5zbflHc-k30UvCgY"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/60 to-transparent" />
                  <div className="absolute top-4 right-4 z-10">
                    <span className="inline-block bg-surface/90 backdrop-blur-md border border-surface-container-high px-3 py-1 rounded-full text-primary font-label-tech text-xs font-bold shadow-md">
                      s/d Rp 22,0 Jt
                    </span>
                  </div>
                  <div className="relative z-10 p-5 flex items-center justify-between">
                    <div>
                      <span className="font-label-tech text-primary uppercase tracking-widest text-[10px] block mb-0.5">
                        CUSTOM RIG &amp; AIO
                      </span>
                      <h3 className="font-headline-md text-base lg:text-lg uppercase text-on-surface font-bold tracking-tight group-hover:text-primary transition-colors">
                        PC Desktop &amp; Rig
                      </h3>
                    </div>
                    <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary group-hover:translate-x-1 transition-all text-[20px]">
                      arrow_forward
                    </span>
                  </div>
                </a>

                {/* Tile 4 (Tengah Bawah): SERVER & ENTERPRISE */}
                <a
                  className="group relative rounded-2xl overflow-hidden border border-surface-container-high/80 hover:border-primary-container hover:-translate-y-1.5 hover:shadow-[0_12px_35px_-10px_rgba(255,94,20,0.3)] transition-all duration-300 ease-out md:col-span-6 lg:col-span-4 flex flex-col justify-end bg-surface-container-lowest"
                  href="https://wa.me/6285979220599?text=Halo%20Gudang%20Komputer,%20saya%20mau%20jual%20Server%20Enterprise"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    alt="Server & Enterprise"
                    className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    src="https://lh3.googleusercontent.com/aida/AEtjO1X0-wlf0EoJrAR84kLu2l31wLEyVPbjKXRtwLjhrz59rOyGQKI4UfQjWgGRUI2z4RKu_EuvchHXUa5WHwJ27wc40ihynT6TNSoNm8cBalVVhD62lknhuE67cIRsvtb1xMs3PZCS16tnV4sor6o7oWj79dWuEdSBQP3aLQdVOzj2APdeHOFnf1obY6f1scaah_UDC0ATU95teep_AfXSx6ANk9L1cIGoOCRULWCh_gLEhEro-dkHTAoG6cIA"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/65 to-transparent" />
                  <div className="absolute top-4 right-4 z-10">
                    <span className="inline-block bg-surface/90 backdrop-blur-md border border-surface-container-high px-3 py-1 rounded-full text-primary font-label-tech text-xs font-bold shadow-md">
                      s/d Rp 85,0 Jt
                    </span>
                  </div>
                  <div className="relative z-10 p-5 flex items-center justify-between">
                    <div>
                      <span className="font-label-tech text-primary uppercase tracking-widest text-[10px] block mb-0.5">
                        RACKMOUNT &amp; STORAGE
                      </span>
                      <h3 className="font-headline-md text-base lg:text-lg uppercase text-on-surface font-bold tracking-tight group-hover:text-primary transition-colors">
                        Server &amp; Enterprise
                      </h3>
                    </div>
                    <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary group-hover:translate-x-1 transition-all text-[20px]">
                      arrow_forward
                    </span>
                  </div>
                </a>

                {/* Tile 5 (Kanan Bawah Split 1): MOTHERBOARD & CPU */}
                <a
                  className="group relative rounded-2xl overflow-hidden border border-surface-container-high/80 hover:border-primary-container hover:-translate-y-1.5 hover:shadow-[0_12px_35px_-10px_rgba(255,94,20,0.3)] transition-all duration-300 ease-out md:col-span-6 lg:col-span-2 flex flex-col justify-end bg-surface-container-lowest"
                  href="https://wa.me/6285979220599?text=Halo%20Gudang%20Komputer,%20saya%20mau%20jual%20Motherboard%20CPU"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    alt="Motherboard & CPU"
                    className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    src="https://lh3.googleusercontent.com/aida/AEtjO1XpJ4-8x5qTfwLW8IDiew6MeY0QkbKQRQpRAg11jYCPLwIFPjGj7pBDrGF3SY5VhdNEsqs2QTdPgq7C7GpuV9lB3Vv55ZSH2zRJv45-fXSqOfMbuTC-eT06e7W_vGPwNt1yvsxg9bcaKAwdWWSQBWKn60PrYViAtykcxJ5N3c9fjBZWFn-NPHG8lGyLXrv6sYUGXGB5LxW7lzh0S2nPey-ePFzTbuMTAWVZ-SJ4Cvjba5OkHle9eMJpido6"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/65 to-transparent" />
                  <div className="absolute top-3 right-3 z-10">
                    <span className="inline-block bg-surface/90 backdrop-blur-md border border-surface-container-high px-2.5 py-0.5 rounded-full text-primary font-label-tech text-[11px] font-bold shadow-md">
                      s/d Rp 7,5 Jt
                    </span>
                  </div>
                  <div className="relative z-10 p-4 flex items-center justify-between">
                    <div>
                      <span className="font-label-tech text-primary uppercase tracking-widest text-[9px] block mb-0.5">
                        CPU &amp; MOBO
                      </span>
                      <h3 className="font-headline-md text-sm lg:text-base uppercase text-on-surface font-bold tracking-tight group-hover:text-primary transition-colors truncate">
                        Motherboard
                      </h3>
                    </div>
                    <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary group-hover:translate-x-1 transition-all text-[18px]">
                      arrow_forward
                    </span>
                  </div>
                </a>

                {/* Tile 6 (Kanan Bawah Split 2): LIMBAH E-WASTE */}
                <a
                  className="group relative rounded-2xl overflow-hidden border border-surface-container-high/80 hover:border-primary-container hover:-translate-y-1.5 hover:shadow-[0_12px_35px_-10px_rgba(255,94,20,0.3)] transition-all duration-300 ease-out md:col-span-6 lg:col-span-2 flex flex-col justify-end bg-surface-container-lowest"
                  href="https://wa.me/6285979220599?text=Halo%20Gudang%20Komputer,%20saya%20mau%20jual%20Limbah%20E-Waste"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img
                    alt="Limbah E-Waste"
                    className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    src="https://lh3.googleusercontent.com/aida/AEtjO1Uzez8G6LJablXLTLJAFTpXIV4tJQbjyKlo8EUZx4WVzh5COoE3GM_qQl9UBibfvGFIyyKFOdt0PL-g0w-btajpJUEd3JrdzsnMipGJu8ntEWh70o0syNsOoSeFDylCqhUg5OlGfWD9zLCegdhm84OlBfvkhLs8u9LpgaIeMxYbs2nRzx3a9Zmy_iYrno3OBDzafKZIelje2GdQLScDaCIEFrv4OZmhd43AhXwUeRHuX-EfL5fXxWsrU9pw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/65 to-transparent" />
                  <div className="absolute top-3 right-3 z-10">
                    <span className="inline-block bg-primary-container text-on-primary-container font-label-tech text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-md">
                      Rp 350rb/Kg
                    </span>
                  </div>
                  <div className="relative z-10 p-4 flex items-center justify-between">
                    <div>
                      <span className="font-label-tech text-primary uppercase tracking-widest text-[9px] block mb-0.5">
                        PART MATI
                      </span>
                      <h3 className="font-headline-md text-sm lg:text-base uppercase text-on-surface font-bold tracking-tight group-hover:text-primary transition-colors truncate">
                        E-Waste
                      </h3>
                    </div>
                    <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary group-hover:translate-x-1 transition-all text-[18px]">
                      arrow_forward
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </section>

          {/* ==================== HOW IT WORKS (CARA KERJA RINGKAS) ==================== */}
          <section
            className="relative w-full bg-surface-container-lowest/90 py-16 border-t border-surface-container"
            id="cara-kerja"
          >
            <div className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-primary-container/10 blur-[120px] pointer-events-none rounded-full" />
            <div className="relative w-full max-w-[1280px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
              <div className="flex flex-col items-center text-center gap-2 mb-12">
                <span className="font-label-tech text-label-tech text-primary uppercase tracking-widest">
                  ALUR SIMPEL &amp; CEPAT
                </span>
                <h2 className="font-headline-lg text-2xl md:text-3xl uppercase text-on-surface tracking-tight font-bold">
                  Cara Kerja Transparan 4 Langkah
                </h2>
                <p className="font-body-md text-on-surface-variant max-w-xl text-sm md:text-base">
                  Langsung cair tanpa birokrasi berbelit. Diagnosa hardware terbuka disaksikan
                  penjual.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Step 1 */}
                <div className="bg-surface-container p-6 rounded-lg border border-surface-container-high hover:border-[#ff5e14]/50 transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(255,94,20,0.15)] hover:-translate-y-1 flex flex-col justify-between">
                  <div>
                    <span className="font-headline-sm text-primary font-bold text-xl block mb-2">
                      01
                    </span>
                    <h3 className="font-title-md text-base text-on-surface uppercase mb-2">
                      Kirim Foto &amp; Spek
                    </h3>
                    <p className="font-body-sm text-on-surface-variant text-xs leading-relaxed">
                      Foto unit via WhatsApp. Tim langsung berikan estimasi harga dalam 15 menit.
                    </p>
                  </div>
                  <span className="font-label-tech text-[10px] text-primary uppercase mt-4 block">
                    Respons &lt; 5 Menit
                  </span>
                </div>
                {/* Step 2 */}
                <div className="bg-surface-container p-6 rounded-lg border border-surface-container-high hover:border-[#ff5e14]/50 transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(255,94,20,0.15)] hover:-translate-y-1 flex flex-col justify-between">
                  <div>
                    <span className="font-headline-sm text-primary font-bold text-xl block mb-2">
                      02
                    </span>
                    <h3 className="font-title-md text-base text-on-surface uppercase mb-2">
                      Jemput / Drop Unit
                    </h3>
                    <p className="font-body-sm text-on-surface-variant text-xs leading-relaxed">
                      Kurir kami jemput gratis ke alamat Anda (Jabodetabek, DIY, Lampung) atau antar
                      ke depo terdekat.
                    </p>
                  </div>
                  <span className="font-label-tech text-[10px] text-primary uppercase mt-4 block">
                    Gratis Ongkir &amp; Kurir
                  </span>
                </div>
                {/* Step 3 */}
                <div className="bg-surface-container p-6 rounded-lg border border-surface-container-high hover:border-[#ff5e14]/50 transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(255,94,20,0.15)] hover:-translate-y-1 flex flex-col justify-between">
                  <div>
                    <span className="font-headline-sm text-primary font-bold text-xl block mb-2">
                      03
                    </span>
                    <h3 className="font-title-md text-base text-on-surface uppercase mb-2">
                      Tes Terbuka Live
                    </h3>
                    <p className="font-body-sm text-on-surface-variant text-xs leading-relaxed">
                      Uji fungsi benchmark transparan disaksikan Anda tanpa manipulasi minus.
                    </p>
                  </div>
                  <span className="font-label-tech text-[10px] text-primary uppercase mt-4 block">
                    Software Standar ISO
                  </span>
                </div>
                {/* Step 4 */}
                <div className="bg-surface-container p-6 rounded-lg border border-surface-container-high hover:border-[#ff5e14]/50 transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(255,94,20,0.15)] hover:-translate-y-1 flex flex-col justify-between">
                  <div>
                    <span className="font-headline-sm text-primary font-bold text-xl block mb-2">
                      04
                    </span>
                    <h3 className="font-title-md text-base text-on-surface uppercase mb-2">
                      Dana Cair Instan
                    </h3>
                    <p className="font-body-sm text-on-surface-variant text-xs leading-relaxed">
                      Transfer detik itu juga ke rekening/QRIS + sanitasi penghapusan data permanen.
                    </p>
                  </div>
                  <span className="font-label-tech text-[10px] text-primary uppercase mt-4 block">
                    Data Wipe Aman 100%
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* ==================== B2B LIKUIDASI KANTOR (CLEAN COMPACT) ==================== */}
          <section className="w-full bg-surface py-12 relative" id="b2b-liquidation">
            <div className="w-full max-w-[1280px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
              <div className="bg-surface-container border border-surface-container-high hover:border-[#ff5e14]/40 transition-all duration-300 rounded-xl p-6 md:p-8 flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
                <div className="flex flex-col gap-2 max-w-2xl">
                  <div className="inline-flex items-center gap-2 bg-surface-container-lowest px-2.5 py-1 rounded w-fit border border-surface-container-high/60">
                    <span className="material-symbols-outlined text-primary text-[16px]">
                      corporate_fare
                    </span>
                    <span className="font-label-tech text-label-tech text-primary uppercase">
                      LAYANAN B2B &amp; ASSET DISPOSAL
                    </span>
                  </div>
                  <h3 className="font-headline-lg text-xl md:text-2xl uppercase text-on-surface font-bold tracking-tight">
                    Punya 20+ Unit Komputer Kantor Mau Dilelang?
                  </h3>
                  <p className="font-body-md text-sm text-on-surface-variant">
                    Appraisal on-site ke kantor Anda, dokumen BAST resmi, faktur pajak, dan
                    sertifikat penghapusan data permanen DoD 5220.22-M.
                  </p>
                </div>
                <a
                  className="shrink-0 inline-flex items-center gap-2 bg-primary-container hover:bg-secondary-container text-on-primary-container px-6 py-3 rounded font-label-lg text-label-lg uppercase tracking-wider font-bold transition-all duration-300 shadow-md hover:shadow-[0_0_25px_rgba(255,94,20,0.4)] hover:scale-[1.02]"
                  href="https://wa.me/6285979220599?text=Halo%20Gudang%20Komputer,%20kami%20ingin%20mengajukan%20likuidasi%20aset%20hardware%20kantor%20B2B"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[18px]">handshake</span>
                  <span>Ajukan Appraisal Kantor</span>
                </a>
              </div>
            </div>
          </section>

          {/* ==================== TESTIMONIALS (MINIMAL 3 CARDS PER ROW x 3 ROWS) ==================== */}
          <section
            className="relative w-full bg-surface-container-lowest/80 py-16 border-t border-surface-container"
            id="testimoni"
          >
            <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-primary-container/10 blur-[130px] pointer-events-none rounded-full" />
            <div className="relative w-full max-w-[1280px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
              <div className="flex flex-col items-center text-center gap-2 mb-10">
                <span className="font-label-tech text-label-tech text-primary uppercase tracking-widest">
                  BUKTI KEPUASAN PELANGGAN
                </span>
                <h2 className="font-headline-lg text-2xl md:text-3xl uppercase text-on-surface tracking-tight font-bold">
                  Kata Mereka yang Sudah Mencairkan
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Testimonial 1 */}
                <div className="bg-surface-container p-6 rounded-lg border border-surface-container-high flex flex-col justify-between hover:border-[#ff5e14]/50 transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(255,94,20,0.15)] hover:-translate-y-1">
                  <div>
                    <div className="flex items-center gap-1 text-primary mb-3">
                      <span className="material-symbols-outlined text-[16px]">star</span>
                      <span className="material-symbols-outlined text-[16px]">star</span>
                      <span className="material-symbols-outlined text-[16px]">star</span>
                      <span className="material-symbols-outlined text-[16px]">star</span>
                      <span className="material-symbols-outlined text-[16px]">star</span>
                    </div>
                    <p className="font-body-md text-sm text-on-surface italic leading-relaxed">
                      "5 unit RTX 3070 bekas mining langsung ditest suhu dan display live. Dalam 30
                      menit transfer BCA masuk penuh tanpa potongan aneh-aneh."
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-surface-container-high flex items-center justify-between">
                    <span className="font-title-md text-xs text-on-surface uppercase font-bold">
                      Rian P. • Tangerang
                    </span>
                    <span className="font-label-tech text-[10px] text-primary">GPU BUYBACK</span>
                  </div>
                </div>

                {/* Testimonial 2 */}
                <div className="bg-surface-container p-6 rounded-lg border border-surface-container-high flex flex-col justify-between hover:border-[#ff5e14]/50 transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(255,94,20,0.15)] hover:-translate-y-1">
                  <div>
                    <div className="flex items-center gap-1 text-primary mb-3">
                      <span className="material-symbols-outlined text-[16px]">star</span>
                      <span className="material-symbols-outlined text-[16px]">star</span>
                      <span className="material-symbols-outlined text-[16px]">star</span>
                      <span className="material-symbols-outlined text-[16px]">star</span>
                      <span className="material-symbols-outlined text-[16px]">star</span>
                    </div>
                    <p className="font-body-md text-sm text-on-surface italic leading-relaxed">
                      "Lelang 38 laptop kantor eks-karyawan lancar. Tim datang ke kantor dengan
                      sertifikat data wipe lengkap. Sangat profesional."
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-surface-container-high flex items-center justify-between">
                    <span className="font-title-md text-xs text-on-surface uppercase font-bold">
                      Bambang S. • Jakarta
                    </span>
                    <span className="font-label-tech text-[10px] text-primary">B2B CORPORATE</span>
                  </div>
                </div>

                {/* Testimonial 3 */}
                <div className="bg-surface-container p-6 rounded-lg border border-surface-container-high flex flex-col justify-between hover:border-[#ff5e14]/50 transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(255,94,20,0.15)] hover:-translate-y-1">
                  <div>
                    <div className="flex items-center gap-1 text-primary mb-3">
                      <span className="material-symbols-outlined text-[16px]">star</span>
                      <span className="material-symbols-outlined text-[16px]">star</span>
                      <span className="material-symbols-outlined text-[16px]">star</span>
                      <span className="material-symbols-outlined text-[16px]">star</span>
                      <span className="material-symbols-outlined text-[16px]">star</span>
                    </div>
                    <p className="font-body-md text-sm text-on-surface italic leading-relaxed">
                      "Laptop Lenovo Legion kena tumpahan air dan matot. Tempat lain menolak, di
                      Gudang Komputer tetap dihargai layarnya dan part yang hidup."
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-surface-container-high flex items-center justify-between">
                    <span className="font-title-md text-xs text-on-surface uppercase font-bold">
                      Nadya A. • Depok
                    </span>
                    <span className="font-label-tech text-[10px] text-primary">
                      UNIT RUSAK/MATOT
                    </span>
                  </div>
                </div>

                {/* Testimonial 4 */}
                <div className="bg-surface-container p-6 rounded-lg border border-surface-container-high flex flex-col justify-between hover:border-[#ff5e14]/50 transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(255,94,20,0.15)] hover:-translate-y-1">
                  <div>
                    <div className="flex items-center gap-1 text-primary mb-3">
                      <span className="material-symbols-outlined text-[16px]">star</span>
                      <span className="material-symbols-outlined text-[16px]">star</span>
                      <span className="material-symbols-outlined text-[16px]">star</span>
                      <span className="material-symbols-outlined text-[16px]">star</span>
                      <span className="material-symbols-outlined text-[16px]">star</span>
                    </div>
                    <p className="font-body-md text-sm text-on-surface italic leading-relaxed">
                      "Decommission 6 unit Dell PowerEdge Rackmount R730 server data center.
                      Eksekusi tim rapi, penimbangan transparan, langsung pelunasan tunai transfer
                      bank."
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-surface-container-high flex items-center justify-between">
                    <span className="font-title-md text-xs text-on-surface uppercase font-bold">
                      Hendra K. • Bekasi
                    </span>
                    <span className="font-label-tech text-[10px] text-primary">
                      SERVER &amp; DATA CENTER
                    </span>
                  </div>
                </div>

                {/* Testimonial 5 */}
                <div className="bg-surface-container p-6 rounded-lg border border-surface-container-high flex flex-col justify-between hover:border-[#ff5e14]/50 transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(255,94,20,0.15)] hover:-translate-y-1">
                  <div>
                    <div className="flex items-center gap-1 text-primary mb-3">
                      <span className="material-symbols-outlined text-[16px]">star</span>
                      <span className="material-symbols-outlined text-[16px]">star</span>
                      <span className="material-symbols-outlined text-[16px]">star</span>
                      <span className="material-symbols-outlined text-[16px]">star</span>
                      <span className="material-symbols-outlined text-[16px]">star</span>
                    </div>
                    <p className="font-body-md text-sm text-on-surface italic leading-relaxed">
                      "Jual borongan 420 kg rongsokan PCB motherboard jadul &amp; power supply rusak
                      dari bengkel servis. Timbangan akurat sistem timbang digital, harga per kilo
                      fair."
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-surface-container-high flex items-center justify-between">
                    <span className="font-title-md text-xs text-on-surface uppercase font-bold">
                      Fajar M. • Yogyakarta
                    </span>
                    <span className="font-label-tech text-[10px] text-primary">E-WASTE BULK</span>
                  </div>
                </div>

                {/* Testimonial 6 */}
                <div className="bg-surface-container p-6 rounded-lg border border-surface-container-high flex flex-col justify-between hover:border-[#ff5e14]/50 transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(255,94,20,0.15)] hover:-translate-y-1">
                  <div>
                    <div className="flex items-center gap-1 text-primary mb-3">
                      <span className="material-symbols-outlined text-[16px]">star</span>
                      <span className="material-symbols-outlined text-[16px]">star</span>
                      <span className="material-symbols-outlined text-[16px]">star</span>
                      <span className="material-symbols-outlined text-[16px]">star</span>
                      <span className="material-symbols-outlined text-[16px]">star</span>
                    </div>
                    <p className="font-body-md text-sm text-on-surface italic leading-relaxed">
                      "MacBook Pro M1 layar blank akibat retak engsel. Toko offline biasa nawar
                      sadis, di Gudang Komputer dihargai wajar komponen logic board &amp;
                      baterainya."
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-surface-container-high flex items-center justify-between">
                    <span className="font-title-md text-xs text-on-surface uppercase font-bold">
                      Clara V. • Jakarta Selatan
                    </span>
                    <span className="font-label-tech text-[10px] text-primary">
                      MACBOOK PARTIAL
                    </span>
                  </div>
                </div>

                {/* Testimonial 7 */}
                <div className="bg-surface-container p-6 rounded-lg border border-surface-container-high flex flex-col justify-between hover:border-[#ff5e14]/50 transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(255,94,20,0.15)] hover:-translate-y-1">
                  <div>
                    <div className="flex items-center gap-1 text-primary mb-3">
                      <span className="material-symbols-outlined text-[16px]">star</span>
                      <span className="material-symbols-outlined text-[16px]">star</span>
                      <span className="material-symbols-outlined text-[16px]">star</span>
                      <span className="material-symbols-outlined text-[16px]">star</span>
                      <span className="material-symbols-outlined text-[16px]">star</span>
                    </div>
                    <p className="font-body-md text-sm text-on-surface italic leading-relaxed">
                      "Tutup warnet e-sports 24 PC full set i5 + GTX 1660 Ti. Tim jemput langsung
                      pakai armada blind van dalam 1 hari tuntas di-appraise dan dicairkan."
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-surface-container-high flex items-center justify-between">
                    <span className="font-title-md text-xs text-on-surface uppercase font-bold">
                      Eko Prasetyo • Bandar Lampung
                    </span>
                    <span className="font-label-tech text-[10px] text-primary">
                      WARNET LIQUIDATION
                    </span>
                  </div>
                </div>

                {/* Testimonial 8 */}
                <div className="bg-surface-container p-6 rounded-lg border border-surface-container-high flex flex-col justify-between hover:border-[#ff5e14]/50 transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(255,94,20,0.15)] hover:-translate-y-1">
                  <div>
                    <div className="flex items-center gap-1 text-primary mb-3">
                      <span className="material-symbols-outlined text-[16px]">star</span>
                      <span className="material-symbols-outlined text-[16px]">star</span>
                      <span className="material-symbols-outlined text-[16px]">star</span>
                      <span className="material-symbols-outlined text-[16px]">star</span>
                      <span className="material-symbols-outlined text-[16px]">star</span>
                    </div>
                    <p className="font-body-md text-sm text-on-surface italic leading-relaxed">
                      "Upgrade rig kerja kreator 3D, jual RTX 4080 lama. Proses drop langsung ke
                      Depo Cikarang cuma 20 menit tes FurMark &amp; TimeSpy langsung deal."
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-surface-container-high flex items-center justify-between">
                    <span className="font-title-md text-xs text-on-surface uppercase font-bold">
                      Dennis A. • Cikarang
                    </span>
                    <span className="font-label-tech text-[10px] text-primary">
                      CREATOR PC UPGRADE
                    </span>
                  </div>
                </div>

                {/* Testimonial 9 */}
                <div className="bg-surface-container p-6 rounded-lg border border-surface-container-high flex flex-col justify-between hover:border-[#ff5e14]/50 transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(255,94,20,0.15)] hover:-translate-y-1">
                  <div>
                    <div className="flex items-center gap-1 text-primary mb-3">
                      <span className="material-symbols-outlined text-[16px]">star</span>
                      <span className="material-symbols-outlined text-[16px]">star</span>
                      <span className="material-symbols-outlined text-[16px]">star</span>
                      <span className="material-symbols-outlined text-[16px]">star</span>
                      <span className="material-symbols-outlined text-[16px]">star</span>
                    </div>
                    <p className="font-body-md text-sm text-on-surface italic leading-relaxed">
                      "Penggantian berkala 50 unit SSD &amp; RAM server kantor. Yang paling berharga
                      adalah adanya Berita Acara &amp; jaminan sertifikat DoD wipe 100% aman audit
                      ISO."
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-surface-container-high flex items-center justify-between">
                    <span className="font-title-md text-xs text-on-surface uppercase font-bold">
                      Arif Wicaksono • Bogor
                    </span>
                    <span className="font-label-tech text-[10px] text-primary">IT ASSET AUDIT</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ==================== DEPOT & DROP POINT LOCATIONS (3 REGIONAL HUBS) ==================== */}
          <section
            className="relative w-full bg-surface-container-lowest py-20 border-t border-surface-container"
            id="lokasi-depo"
          >
            <div className="absolute top-1/2 left-1/3 -translate-x-1/2 w-[600px] h-[350px] bg-primary-container/10 blur-[140px] pointer-events-none rounded-full" />
            <div className="relative w-full max-w-[1280px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
                <div className="flex flex-col gap-2">
                  <div className="inline-flex items-center gap-2">
                    <div className="relative flex h-2 w-2 items-center justify-center">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary-container" />
                    </div>
                    <span className="font-label-tech text-label-tech text-primary uppercase tracking-widest">
                      JARINGAN REGIONAL RESMI
                    </span>
                  </div>
                  <h2 className="font-headline-lg text-3xl md:text-5xl uppercase text-on-surface font-bold tracking-tight">
                    LOKASI DEPO &amp; DROP POINT
                  </h2>
                </div>
                <p className="font-body-md text-on-surface-variant max-w-md text-sm">
                  Kunjungi depo kami untuk appraisal langsung di tempat atau jadwalkan kurir jemput
                  gratis ke lokasi Anda.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Depo 1: Cikarang (Bekasi & Jabodetabek Hub) */}
                <div className="bg-surface-container rounded-xl border border-surface-container-high/80 overflow-hidden flex flex-col justify-between hover:border-[#ff5e14]/50 transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(255,94,20,0.15)] hover:-translate-y-1">
                  <div className="relative w-full h-48 bg-surface-container-low overflow-hidden border-b border-surface-container-high">
                    <iframe
                      className="w-full h-full border-0 grayscale invert opacity-75 hover:opacity-100 transition-opacity"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63456.88330752538!2d107.0733834!3d-6.3023812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699b0c79e6cf61%3A0x6b4db9228fb8bf5a!2sKawasan%20Industri%20MM2100%2C%20Cikarang%20Barat%2C%20Bekasi%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1700000000001"
                      title="Peta Depo Cikarang"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1.5 bg-surface/90 backdrop-blur-md border border-surface-container-high px-2.5 py-1 rounded text-primary font-label-tech text-[10px] font-bold uppercase tracking-wider shadow-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse" />
                        PUSAT INDUSTRI JABODETABEK
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h3 className="font-headline-md text-xl uppercase text-on-surface font-bold tracking-tight">
                          Depo Cikarang
                        </h3>
                        <span className="inline-flex items-center gap-1.5 font-label-tech text-[10px] bg-primary-container/10 border border-primary-container/30 text-primary px-2 py-0.5 rounded font-bold uppercase">
                          <span className="relative flex h-1.5 w-1.5 items-center justify-center">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75" />
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary-container" />
                          </span>
                          Live Testing
                        </span>
                      </div>
                      <p className="font-body-sm text-xs text-on-surface-variant mb-4 leading-relaxed">
                        Kawasan Industri MM2100, Jl. Selayar Blok D, Cikarang Barat, Kabupaten
                        Bekasi, Jawa Barat 17530
                      </p>
                      <div className="flex flex-col gap-2 pt-3 border-t border-surface-container-high font-body-sm text-xs text-on-surface-variant">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary text-[16px]">
                            schedule
                          </span>
                          <span>Senin – Sabtu: 08:30 – 17:00 WIB</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary text-[16px]">
                            support_agent
                          </span>
                          <span>PIC Depo: +62 859-7922-0599</span>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <a
                        className="inline-flex items-center justify-center gap-1.5 bg-surface-container-high hover:bg-surface-bright text-on-surface text-xs font-label-md py-2.5 px-3 rounded border border-surface-container-high transition-colors text-center"
                        href="https://maps.google.com/?q=Kawasan+Industri+MM2100+Cikarang+Barat"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span className="material-symbols-outlined text-[16px]">map</span>
                        <span>Petunjuk Arah</span>
                      </a>
                      <a
                        className="inline-flex items-center justify-center gap-1.5 bg-primary-container hover:bg-secondary-container text-on-primary-container text-xs font-label-md font-bold py-2.5 px-3 rounded transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,94,20,0.4)] text-center"
                        href="https://wa.me/6285979220599?text=Halo%20PIC%20Depo%20Cikarang,%20saya%20mau%20jadwalkan%20drop-off%20hardware"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span className="material-symbols-outlined text-[16px]">
                          calendar_today
                        </span>
                        <span>Jadwalkan</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Depo 2: Gunungkidul (DIY & Jawa Tengah Hub) */}
                <div className="bg-surface-container rounded-xl border border-surface-container-high/80 overflow-hidden flex flex-col justify-between hover:border-[#ff5e14]/50 transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(255,94,20,0.15)] hover:-translate-y-1">
                  <div className="relative w-full h-48 bg-surface-container-low overflow-hidden border-b border-surface-container-high">
                    <iframe
                      className="w-full h-full border-0 grayscale invert opacity-75 hover:opacity-100 transition-opacity"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63234.34141671981!2d110.5694205!3d-7.9654714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7bca9c1b3f7215%3A0x4027a76e3531b20!2sWonosari%2C%20Kabupaten%20Gunung%20Kidul%2C%20Daerah%20Istimewa%20Yogyakarta!5e0!3m2!1sid!2sid!4v1700000000002"
                      title="Peta Depo Gunungkidul"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1.5 bg-surface/90 backdrop-blur-md border border-surface-container-high px-2.5 py-1 rounded text-primary font-label-tech text-[10px] font-bold uppercase tracking-wider shadow-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse" />
                        DEPO DIY &amp; JAWA TENGAH
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h3 className="font-headline-md text-xl uppercase text-on-surface font-bold tracking-tight">
                          Depo Gunungkidul
                        </h3>
                        <span className="inline-flex items-center gap-1.5 font-label-tech text-[10px] bg-primary-container/10 border border-primary-container/30 text-primary px-2 py-0.5 rounded font-bold uppercase">
                          <span className="relative flex h-1.5 w-1.5 items-center justify-center">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75" />
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary-container" />
                          </span>
                          E-Waste &amp; PC
                        </span>
                      </div>
                      <p className="font-body-sm text-xs text-on-surface-variant mb-4 leading-relaxed">
                        Jl. KH Agus Salim, Ledoksari, Kepek, Kec. Wonosari, Kabupaten Gunungkidul,
                        D.I. Yogyakarta 55813
                      </p>
                      <div className="flex flex-col gap-2 pt-3 border-t border-surface-container-high font-body-sm text-xs text-on-surface-variant">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary text-[16px]">
                            schedule
                          </span>
                          <span>Senin – Sabtu: 08:30 – 17:00 WIB</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary text-[16px]">
                            support_agent
                          </span>
                          <span>PIC Depo: +62 859-7922-0599</span>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <a
                        className="inline-flex items-center justify-center gap-1.5 bg-surface-container-high hover:bg-surface-bright text-on-surface text-xs font-label-md py-2.5 px-3 rounded border border-surface-container-high transition-colors text-center"
                        href="https://maps.google.com/?q=Wonosari+Gunungkidul+Yogyakarta"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span className="material-symbols-outlined text-[16px]">map</span>
                        <span>Petunjuk Arah</span>
                      </a>
                      <a
                        className="inline-flex items-center justify-center gap-1.5 bg-primary-container hover:bg-secondary-container text-on-primary-container text-xs font-label-md font-bold py-2.5 px-3 rounded transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,94,20,0.4)] text-center"
                        href="https://wa.me/6285979220599?text=Halo%20PIC%20Depo%20Gunungkidul,%20saya%20mau%20drop-off%20komputer%20dan%20limbah%20hardware"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span className="material-symbols-outlined text-[16px]">
                          calendar_today
                        </span>
                        <span>Jadwalkan</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Depo 3: Lampung (Sumatera Selatan & Lampung Hub) */}
                <div className="bg-surface-container rounded-xl border border-surface-container-high/80 overflow-hidden flex flex-col justify-between hover:border-[#ff5e14]/50 transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(255,94,20,0.15)] hover:-translate-y-1">
                  <div className="relative w-full h-48 bg-surface-container-low overflow-hidden border-b border-surface-container-high">
                    <iframe
                      className="w-full h-full border-0 grayscale invert opacity-75 hover:opacity-100 transition-opacity"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63550.04696152146!2d105.2418342!3d-5.3991206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40db0366eb4b21%3A0xa193dfeb6ec6e0bf!2sWay%20Halim%2C%20Kota%20Bandar%20Lampung%2C%20Lampung!5e0!3m2!1sid!2sid!4v1700000000003"
                      title="Peta Depo Lampung"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="inline-flex items-center gap-1.5 bg-surface/90 backdrop-blur-md border border-surface-container-high px-2.5 py-1 rounded text-primary font-label-tech text-[10px] font-bold uppercase tracking-wider shadow-md">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse" />
                        DEPO SUMATERA &amp; LAMPUNG
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <h3 className="font-headline-md text-xl uppercase text-on-surface font-bold tracking-tight">
                          Depo Lampung
                        </h3>
                        <span className="inline-flex items-center gap-1.5 font-label-tech text-[10px] bg-primary-container/10 border border-primary-container/30 text-primary px-2 py-0.5 rounded font-bold uppercase">
                          <span className="relative flex h-1.5 w-1.5 items-center justify-center">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75" />
                            <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary-container" />
                          </span>
                          Hub Sumatera
                        </span>
                      </div>
                      <p className="font-body-sm text-xs text-on-surface-variant mb-4 leading-relaxed">
                        Jl. Sultan Agung No. 88, Way Halim Permai, Kec. Way Halim, Kota Bandar
                        Lampung, Lampung 35141
                      </p>
                      <div className="flex flex-col gap-2 pt-3 border-t border-surface-container-high font-body-sm text-xs text-on-surface-variant">
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary text-[16px]">
                            schedule
                          </span>
                          <span>Senin – Sabtu: 08:30 – 17:00 WIB</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary text-[16px]">
                            support_agent
                          </span>
                          <span>PIC Depo: +62 859-7922-0599</span>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 pt-2">
                      <a
                        className="inline-flex items-center justify-center gap-1.5 bg-surface-container-high hover:bg-surface-bright text-on-surface text-xs font-label-md py-2.5 px-3 rounded border border-surface-container-high transition-colors text-center"
                        href="https://maps.google.com/?q=Way+Halim+Bandar+Lampung"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span className="material-symbols-outlined text-[16px]">map</span>
                        <span>Petunjuk Arah</span>
                      </a>
                      <a
                        className="inline-flex items-center justify-center gap-1.5 bg-primary-container hover:bg-secondary-container text-on-primary-container text-xs font-label-md font-bold py-2.5 px-3 rounded transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,94,20,0.4)] text-center"
                        href="https://wa.me/6285979220599?text=Halo%20PIC%20Depo%20Lampung,%20saya%20mau%20appraisal%20laptop%20dan%20hardware"
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        <span className="material-symbols-outlined text-[16px]">
                          calendar_today
                        </span>
                        <span>Jadwalkan</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ==================== FAQ ACCORDION (SIMPLE & CLEAN) ==================== */}
          <section
            className="relative w-full bg-surface py-16 border-t border-surface-container"
            id="faq"
          >
            <div className="w-full max-w-[840px] mx-auto px-margin md:px-margin-tablet">
              <div className="flex flex-col items-center text-center gap-2 mb-8">
                <span className="font-label-tech text-label-tech text-primary uppercase tracking-widest">
                  FAQ
                </span>
                <h2 className="font-headline-lg text-2xl md:text-3xl uppercase text-on-surface tracking-tight font-bold">
                  Pertanyaan Sering Diajukan
                </h2>
              </div>
              <div className="flex flex-col gap-3">
                {/* FAQ 1 */}
                <div className="faq-item bg-surface-container rounded-lg border border-surface-container-high hover:border-[#ff5e14]/40 transition-colors overflow-hidden">
                  <button
                    className="faq-toggle w-full p-4 flex items-center justify-between text-left focus:outline-none"
                    type="button"
                    onClick={() => toggleFaq(0)}
                  >
                    <span className="font-title-md text-sm md:text-base text-on-surface uppercase font-semibold">
                      Komputer atau laptop mati total apakah tetap bernilai?
                    </span>
                    <span
                      className={`material-symbols-outlined text-primary text-[20px] transition-transform duration-200 ${
                        openFaq === 0 ? "rotate-180" : ""
                      }`}
                    >
                      expand_more
                    </span>
                  </button>
                  {openFaq === 0 && (
                    <div className="faq-content px-4 pb-4 text-on-surface-variant font-body-sm text-xs md:text-sm">
                      Ya, tetap bernilai! Kami menghitung nilai komponen yang masih berfungsi (layar
                      LCD, RAM, SSD, casing) maupun nilai lebur material motherboard.
                    </div>
                  )}
                </div>

                {/* FAQ 2 */}
                <div className="faq-item bg-surface-container rounded-lg border border-surface-container-high hover:border-[#ff5e14]/40 transition-colors overflow-hidden">
                  <button
                    className="faq-toggle w-full p-4 flex items-center justify-between text-left focus:outline-none"
                    type="button"
                    onClick={() => toggleFaq(1)}
                  >
                    <span className="font-title-md text-sm md:text-base text-on-surface uppercase font-semibold">
                      Apakah data pribadi di dalam hard disk/SSD aman?
                    </span>
                    <span
                      className={`material-symbols-outlined text-primary text-[20px] transition-transform duration-200 ${
                        openFaq === 1 ? "rotate-180" : ""
                      }`}
                    >
                      expand_more
                    </span>
                  </button>
                  {openFaq === 1 && (
                    <div className="faq-content px-4 pb-4 text-on-surface-variant font-body-sm text-xs md:text-sm">
                      100% aman terjamin. Setiap drive melalui proses data sanitization permanen
                      berstandar militer NIST 800-88 &amp; DoD 5220.22-M sehingga file tidak dapat
                      dipulihkan kembali.
                    </div>
                  )}
                </div>

                {/* FAQ 3 */}
                <div className="faq-item bg-surface-container rounded-lg border border-surface-container-high hover:border-[#ff5e14]/40 transition-colors overflow-hidden">
                  <button
                    className="faq-toggle w-full p-4 flex items-center justify-between text-left focus:outline-none"
                    type="button"
                    onClick={() => toggleFaq(2)}
                  >
                    <span className="font-title-md text-sm md:text-base text-on-surface uppercase font-semibold">
                      Bagaimana proses penjemputan barangnya?
                    </span>
                    <span
                      className={`material-symbols-outlined text-primary text-[20px] transition-transform duration-200 ${
                        openFaq === 2 ? "rotate-180" : ""
                      }`}
                    >
                      expand_more
                    </span>
                  </button>
                  {openFaq === 2 && (
                    <div className="faq-content px-4 pb-4 text-on-surface-variant font-body-sm text-xs md:text-sm">
                      Untuk area Jabodetabek, DIY, dan Lampung kurir internal kami siap menjemput
                      langsung ke alamat Anda secara gratis setelah estimasi disepakati via
                      WhatsApp.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* ==================== FINAL SIMPLE CALLOUT ==================== --> */}
          <section className="relative w-full bg-surface-container py-14 border-t border-surface-container-high text-center overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary-container/15 blur-[120px] pointer-events-none rounded-full" />
            <div className="relative w-full max-w-[800px] mx-auto px-margin flex flex-col items-center gap-4">
              <h2 className="font-headline-lg text-2xl md:text-3xl uppercase text-on-surface font-bold tracking-tight">
                Siap Ubah Hardware Menjadi Uang Tunai?
              </h2>
              <p className="font-body-md text-sm md:text-base text-on-surface-variant">
                Hubungi kami via WhatsApp sekarang untuk estimasi instan dalam 15 menit.
              </p>
              <a
                className="mt-2 inline-flex items-center gap-2 bg-primary-container hover:bg-secondary-container text-on-primary-container px-8 py-3.5 rounded font-label-lg text-label-lg uppercase tracking-wider font-bold transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(255,94,20,0.5)] hover:scale-[1.02]"
                href="https://wa.me/6285979220599?text=Halo%20Gudang%20Komputer,%20saya%20mau%20jual%20hardware%20komputer"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[20px]">send</span>
                <span>Konsultasi Penjualan via WhatsApp</span>
              </a>
            </div>
          </section>
        </div>
      </main>

      {/* ==================== FOOTER ==================== */}
      <footer className="w-full bg-surface-container-lowest py-10 border-t border-surface-container-high">
        <div className="w-full max-w-[1280px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop flex flex-col md:flex-row items-center justify-between gap-4 text-on-surface-variant text-xs">
          <div className="flex items-center gap-3">
            <img
              alt="Gudang Komputer Logo"
              className="h-6 w-6 object-contain"
              src="/gudangkomputer-logo.png"
            />
            <span className="font-bold text-on-surface uppercase tracking-wide">
              GUDANG KOMPUTER
            </span>
            <span>• ISO 14001:2015 Data Wipe Certified</span>
          </div>
          <p>© 2026 PT Gudang Komputer Nusantara. Seluruh Hak Cipta Dilindungi.</p>
        </div>
      </footer>

      <FloatingWa />
    </div>
  );
}
