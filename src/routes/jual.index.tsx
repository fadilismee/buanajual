import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { FloatingWa } from "@/components/FloatingWa";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";

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

// (hero simple black — tanpa foto background/orang)

const WA_ESTIMASI =
  "https://wa.me/6285979220599?text=Halo%20Gudang%20Komputer,%20saya%20mau%20cek%20estimasi%20harga%20hardware";

// ============================================================
// ASET PROMO — foto orang gaya idwebhost (cut-out + kartu melayang).
// Ganti tiap URL dengan foto asli (mis. "/img/teknisi.png" kalau file
// sudah ditaruh di public/img — PNG transparan hasilnya paling rapi).
// Placeholder unsplash di bawah hanya sementara.
// ============================================================
const PROMO_ASSETS = {
  steps: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=480&q=80&auto=format&fit=crop",
  faq: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=480&q=80&auto=format&fit=crop",
  footer: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format&fit=crop",
};

const STEPS = [
  {
    n: "01",
    icon: "photo_camera",
    title: "Kirim Foto & Spek",
    desc: "Foto unit via WhatsApp. Estimasi harga keluar dalam 15 menit.",
  },
  {
    n: "02",
    icon: "local_shipping",
    title: "Jemput / Drop Unit",
    desc: "Kurir jemput gratis (Jabodetabek, DIY, Lampung) atau antar ke depo.",
  },
  {
    n: "03",
    icon: "biotech",
    title: "Tes Terbuka Live",
    desc: "Benchmark transparan, disaksikan langsung tanpa manipulasi.",
  },
  {
    n: "04",
    icon: "payments",
    title: "Dana Cair Instan",
    desc: "Transfer detik itu juga + sanitasi data permanen.",
  },
];

// ============================================================
// GALERI BARANG — GANTI FOTO ASLI DI SINI.
// Nanti tinggal timpa tiap `img` dengan URL foto barang bekas
// (mis. "/img/laptop-matot-1.jpg" kalau sudah taruh di public/img).
// Placeholder picsum di bawah hanya sementara.
// `span` mengatur bentangan bento-grid (jangan diubah kalau
// tidak perlu). `price` = estimasi tertinggi per kategori.
// ============================================================
const GALERI = [
  {
    no: "01",
    icon: "laptop_mac",
    tag: "LAPTOP & MACBOOK",
    title: "Laptop & MacBook",
    desc: "Mati total, layar pecah, atau normal — semua seri dari Celeron sampai M3.",
    chip: "MATI / MINUS / NORMAL",
    price: "s/d Rp 18,5 Jt",
    span: "sm:col-span-2 lg:col-span-2",
    img: "https://picsum.photos/seed/gudang-laptop/1000/700",
    wa: "https://wa.me/6285979220599?text=Halo%20Gudang%20Komputer,%20saya%20mau%20jual%20Laptop%20MacBook",
  },
  {
    no: "02",
    icon: "memory",
    tag: "VGA / KARTU GRAFIS",
    title: "VGA / GPU",
    desc: "Artefak, no display, ex-mining — GTX sampai RTX 40 series.",
    chip: "ARTEFAK / NO DISPLAY",
    price: "s/d Rp 9,2 Jt",
    span: "",
    img: "https://picsum.photos/seed/gudang-vga/800/600",
    wa: "https://wa.me/6285979220599?text=Halo%20Gudang%20Komputer,%20saya%20mau%20jual%20VGA%20GPU",
  },
  {
    no: "03",
    icon: "dns",
    tag: "PC & SERVER KANTOR",
    title: "PC & Server",
    desc: "Satuan sampai borongan — ex-kantor, warnet, studio.",
    chip: "SATUAN / BORONGAN",
    price: "s/d Rp 25 Jt",
    span: "",
    img: "https://picsum.photos/seed/gudang-pc/800/600",
    wa: "https://wa.me/6285979220599?text=Halo%20Gudang%20Komputer,%20saya%20mau%20jual%20PC%20Server%20kantor",
  },
  {
    no: "04",
    icon: "developer_board",
    tag: "MOTHERBOARD & CPU",
    title: "Motherboard & CPU",
    desc: "Konslet, korosi, socket patah — tetap ada nilainya.",
    chip: "KONSLET / MATI",
    price: "s/d Rp 7,5 Jt",
    span: "",
    img: "https://picsum.photos/seed/gudang-mobo/800/600",
    wa: "https://wa.me/6285979220599?text=Halo%20Gudang%20Komputer,%20saya%20mau%20jual%20Motherboard%20CPU",
  },
  {
    no: "05",
    icon: "sd_card",
    tag: "STORAGE & RAM",
    title: "SSD, HDD & RAM",
    desc: "Bad sector & normal — wipe data standar militer.",
    chip: "BAD SECTOR / NORMAL",
    price: "s/d Rp 3,1 Jt",
    span: "",
    img: "https://picsum.photos/seed/gudang-storage/800/600",
    wa: "https://wa.me/6285979220599?text=Halo%20Gudang%20Komputer,%20saya%20mau%20jual%20SSD%20RAM%20storage",
  },
  {
    no: "06",
    icon: "recycling",
    tag: "E-WASTE KILOAN",
    title: "E-Waste Kiloan",
    desc: "PCB, kabel, PSU jebol, part kanibal — ditimbang fair di depan Anda, cocok untuk bersih-bersih gudang kantor.",
    chip: "DITIMBANG FAIR",
    price: "s/d Rp 185 Rb/Kg",
    span: "sm:col-span-2 lg:col-span-3",
    img: "https://picsum.photos/seed/gudang-ewaste/1400/500",
    wa: "https://wa.me/6285979220599?text=Halo%20Gudang%20Komputer,%20saya%20mau%20jual%20Limbah%20E-Waste",
  },
];

const TESTIMONIAL_ROWS = [
  [
    ["Laptop lama kembali jadi cash, cepat!", "Andi", "Bantul", "Laptop Core i5 Matot", "gudang-t1"],
    ["Kartu grafis artefak, 20 menit langsung cair.", "Sari", "Jogja", "RTX 2060 Rusak", "gudang-t2"],
    ["Kurir jemput gratis ke kantor, proses cepat.", "Budi", "Sleman", "PC Kantor x8", "gudang-t3"],
    ["Motherboard gosong masih dibayar fair.", "Nadya", "Depok", "B450 Konslet", "gudang-t4"],
    ["MacBook layar pecah, mainboard tetap dibeli.", "Clara", "Jakarta", "MacBook M1", "gudang-t5"],
  ],
  [
    ["Lelang kantor 38 unit, semua cair.", "Bambang", "Jakarta", "Laptop Kantor x38", "gudang-t6"],
    ["SSD & RAM server lama, wipe data aman.", "Arif", "Bogor", "SSD Server x50", "gudang-t7"],
    ["Warnet tutup, 24 PC full set laku semua.", "Eko", "Lampung", "PC Warnet x24", "gudang-t8"],
    ["Rig kreator upgrade, RTX 4080 jual smooth.", "Dennis", "Cikarang", "RTX 4080", "gudang-t9"],
    ["Server rackmount decommission, transfer cepat.", "Hendra", "Bekasi", "PowerEdge R730", "gudang-t10"],
  ],
];

const renderReviewCard = (t: string[], key: string) => {
  const [quote, name, loc, item, seed] = t;
  return (
  <div key={key} className="marquee-card group">
    <div className="relative mb-3 overflow-hidden rounded-lg bg-surface-container-low">
      <img
        alt={`Foto ${item}`}
        className="h-28 w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        src={`https://picsum.photos/seed/${seed}/400/200`}
        loading="lazy"
      />
      <span className="absolute bottom-2 left-2 inline-flex rounded bg-primary-container px-2 py-0.5 text-[10px] font-bold tracking-wider text-white">
        {item}
      </span>
    </div>
    <div className="flex items-center gap-0.5 text-primary-container">
      <span className="material-symbols-outlined text-[14px]">star</span>
      <span className="material-symbols-outlined text-[14px]">star</span>
      <span className="material-symbols-outlined text-[14px]">star</span>
      <span className="material-symbols-outlined text-[14px]">star</span>
      <span className="material-symbols-outlined text-[14px]">star</span>
      <span className="ml-2 text-[10px] font-bold tracking-wider text-on-surface-variant">
        {name} • {loc}
      </span>
    </div>
    <p className="mt-1.5 text-sm italic leading-relaxed text-on-surface">&ldquo;{quote}&rdquo;</p>
  </div>
  );
};

const STATS = [
  ["4.9/5", "Kepuasan"],
  ["1.240+", "Penjual Cair"],
  ["15 Mnt", "Estimasi"],
  ["3", "Depo Resmi"],
];

const DEPOTS = [
  {
    name: "Cikarang",
    area: "Jawa Barat • Jabodetabek",
    addr: "Kawasan Industri MM2100, Jl. Selayar Blok D, Cikarang Barat, Kab. Bekasi 17530",
    map: "https://maps.google.com/?q=Kawasan+Industri+MM2100+Cikarang+Barat",
    embed: "https://www.google.com/maps?q=Kawasan+Industri+MM2100+Cikarang+Barat&output=embed",
    wa: "https://wa.me/6285979220599?text=Halo%20PIC%20Depo%20Cikarang,%20saya%20mau%20jadwalkan%20drop-off%20hardware",
  },
  {
    name: "Gunungkidul",
    area: "DIY • Jawa Tengah",
    addr: "Jl. KH Agus Salim, Ledoksari, Kepek, Wonosari, Kab. Gunungkidul 55813",
    map: "https://maps.google.com/?q=Wonosari+Gunungkidul+Yogyakarta",
    embed: "https://www.google.com/maps?q=Wonosari+Gunungkidul+Yogyakarta&output=embed",
    wa: "https://wa.me/6285979220599?text=Halo%20PIC%20Depo%20Gunungkidul,%20saya%20mau%20drop-off%20hardware",
  },
  {
    name: "Lampung",
    area: "Sumatera",
    addr: "Jl. Sultan Agung No. 88, Way Halim Permai, Bandar Lampung 35141",
    map: "https://maps.google.com/?q=Way+Halim+Bandar+Lampung",
    embed: "https://www.google.com/maps?q=Way+Halim+Bandar+Lampung&output=embed",
    wa: "https://wa.me/6285979220599?text=Halo%20PIC%20Depo%20Lampung,%20saya%20mau%20appraisal%20hardware",
  },
];

const FAQS = [
  {
    q: "Komputer atau laptop mati total apakah tetap bernilai?",
    a: "Ya, tetap bernilai. Kami menghitung nilai komponen yang masih berfungsi (layar LCD, RAM, SSD, casing) maupun nilai material motherboard.",
  },
  {
    q: "Apakah data pribadi di hard disk/SSD aman?",
    a: "100% aman. Setiap drive melalui sanitasi data permanen standar militer NIST 800-88 & DoD 5220.22-M sehingga file tidak bisa dipulihkan.",
  },
  {
    q: "Bagaimana proses penjemputan barangnya?",
    a: "Untuk Jabodetabek, DIY, dan Lampung kurir kami jemput gratis ke alamat Anda setelah estimasi disepakati via WhatsApp.",
  },
  {
    q: "Berapa lama estimasi harga keluar?",
    a: "Kurang dari 15 menit via WhatsApp — cukup kirim foto unit + spek singkat, tim kami langsung balas dengan kisaran harga final.",
  },
  {
    q: "Apakah menerima borongan / lelang komputer kantor?",
    a: "Ya, ini spesialisasi kami. 20+ unit bisa appraisal on-site ke kantor Anda, lengkap dengan BAST resmi + faktur pajak untuk kebutuhan B2B.",
  },
  {
    q: "Bagaimana sistem pembayarannya?",
    a: "Transfer langsung detik itu juga setelah tes terbuka disepakati — tunai di depo atau transfer bank/e-wallet, tanpa tempo tanpa DP.",
  },
  {
    q: "VGA artefak / ex-mining masih laku?",
    a: "Laku. VGA artefak, no display, sampai ex-mining tetap kami beli sesuai kondisi chip & pasar — s/d Rp 9,2 Jt untuk seri atas.",
  },
];

function JualPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  // Urutan intro sinematik: 0 = splash logo, 1 = hook jual,
  // 2 = hook e-waste, 3 = selesai (hero normal).
  const [introAct, setIntroAct] = useState(0);
  const introDone = introAct >= 3;

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setIntroAct(3);
      return;
    }
    const timers = [
      window.setTimeout(() => setIntroAct(1), 1200),
      window.setTimeout(() => setIntroAct(2), 3000),
      window.setTimeout(() => setIntroAct(3), 4800),
    ];
    return () => timers.forEach((t) => window.clearTimeout(t));
  }, []);

  const splashDone = introAct >= 1;

  return (
    <div className="bg-surface-container-lowest font-body-md text-on-surface antialiased min-h-screen">
      {/* ===== Splash logo pembuka ===== */}
      <div className={`intro-curtain ${splashDone ? "is-done" : ""}`} aria-hidden={splashDone}>
        <div className="relative flex items-center justify-center">
          <div className="intro-ring absolute h-40 w-40 rounded-full border border-dashed border-primary-container/60 md:h-52 md:w-52" />
          <div className="intro-ring absolute h-32 w-32 rounded-full border border-white/15 md:h-40 md:w-40" />
          <img
            src="/gudangkomputer-logo.png"
            alt=""
            className="intro-logo h-24 w-24 rounded-3xl bg-white object-contain p-2 md:h-28 md:w-28"
          />
        </div>
      </div>
      <SiteHeader />
      <main className="w-full">
        {/* ===== Hook 1: kamu mau jual barang second? ===== */}
        {introAct >= 1 && introAct < 3 && (
          <section className="relative flex min-h-[calc(100svh-60px)] w-full items-center justify-center overflow-hidden bg-black px-5 text-center">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-[20vw] font-extrabold uppercase leading-none tracking-tight text-white/[0.04] md:text-[10rem]"
            >
              JUAL?
            </span>
            <div className="intro-act is-on relative max-w-2xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary-container">
                Pertanyaan simpel
              </p>
              <p className="mt-4 text-3xl font-extrabold uppercase leading-tight tracking-tight text-white md:text-5xl">
                Kamu mau jual barang second kamu?
              </p>
              <p className="mt-4 text-base text-white/60 md:text-lg">
                Laptop nganggur, VGA artefak, PC mati total —{" "}
                <span className="font-bold text-white">kami adalah solusinya.</span>
              </p>
              <button
                type="button"
                onClick={() => setIntroAct(2)}
                className="mt-8 inline-flex items-center gap-1.5 rounded-lg border border-white/20 px-5 py-2.5 text-[11px] font-bold uppercase tracking-wider text-white/70 transition-colors hover:border-primary-container hover:text-primary-container"
              >
                Lanjut
                <span className="material-symbols-outlined text-[16px]">arrow_downward</span>
              </button>
            </div>
          </section>
        )}
        {/* ===== Hook 2: sampah elektronik jadi uang ===== */}
        {introAct === 2 && (
          <section className="relative flex min-h-[calc(100svh-60px)] w-full items-center justify-center overflow-hidden bg-black px-5 text-center">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap text-[20vw] font-extrabold uppercase leading-none tracking-tight text-primary-container/10 md:text-[10rem]"
            >
              E-WASTE
            </span>
            <div className="intro-act is-on relative max-w-2xl">
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-primary-container">
                Bersama Gudang Komputer
              </p>
              <p className="mt-4 text-3xl font-extrabold uppercase leading-tight tracking-tight text-white md:text-5xl">
                Jadikan sampah elektronik{" "}
                <span className="text-primary-container">menjadi uang.</span>
              </p>
              <p className="mt-4 text-base text-white/60 md:text-lg">
                Satuan sampai borongan kantor — dites terbuka, dana cair instan.
              </p>
              <button
                type="button"
                onClick={() => setIntroAct(3)}
                className="mt-8 inline-flex items-center gap-2 rounded-lg bg-primary-container px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-secondary-container"
              >
                <span className="material-symbols-outlined text-[20px]">bolt</span>
                Masuk ke website
              </button>
            </div>
          </section>
        )}
        {/* ============ HERO (black + grid glow + marquee barang) ============ */}
        {introDone && (
        <>
        <section className="relative w-full overflow-hidden bg-black">
          {/* glow grid background */}
          <div className="pointer-events-none absolute inset-0 opacity-40" aria-hidden="true"
            style={{ backgroundImage: "linear-gradient(rgba(255,94,20,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,94,20,0.12) 1px, transparent 1px)", backgroundSize: "44px 44px", maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 75%)", WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, black 30%, transparent 75%)" }}
          />
          <div className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-primary-container/20 blur-[120px]" aria-hidden="true" />
          <div className="relative mx-auto w-full max-w-[1080px] px-5 md:px-8 flex flex-col items-center text-center pt-20 pb-16 md:pt-28 md:pb-20">
            <Reveal from="scale" delay={0}>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary-container/40 bg-primary-container/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-orange-200">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-container opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary-container" />
                </span>
                Buyback #1 • Estimasi &lt; 15 menit • Cair instan
              </p>
            </Reveal>
            <Reveal from="bottom" delay={100}>
              <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-tight leading-[1.05] text-white">
                Sampah elektronik{" "}
                <span className="bg-gradient-to-r from-primary-container to-amber-400 bg-clip-text text-transparent">jadi uang tunai.</span>
              </h1>
            </Reveal>
            <Reveal from="bottom" delay={200}>
              <p className="mt-5 max-w-xl text-base md:text-lg text-white/70">
                Laptop, GPU, PC &amp; Server — mati, minus, atau normal — dites
                terbuka di depan matamu, dana cair detik itu juga.
              </p>
            </Reveal>
            <Reveal from="bottom" delay={300}>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a
                  className="inline-flex items-center gap-2 rounded-lg bg-primary-container px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white shadow-[0_8px_32px_-8px_rgba(255,94,20,0.7)] transition-all hover:bg-secondary-container"
                  href={WA_ESTIMASI}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[20px]">bolt</span>
                  Cek Harga Instan
                </a>
                <a
                  className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-bold uppercase tracking-wider text-white backdrop-blur-sm transition-colors hover:border-primary-container hover:text-primary-container"
                  href="/jual/form"
                >
                  <span className="material-symbols-outlined text-[20px]">assignment</span>
                  Form Taksiran
                </a>
              </div>
            </Reveal>
            <Reveal from="bottom" delay={400} className="w-full">
              <div className="mx-auto mt-12 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-4">
                {STATS.map(([num, label]) => (
                  <div key={label} className="bg-black/50 px-4 py-4 text-center">
                    <p className="text-xl font-extrabold text-white">{num}</p>
                    <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.15em] text-white/50">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
          {/* marquee barang laku (!) — transisi ke galeri */}
          <div className="marquee-viewport relative border-t border-white/10 bg-black/60 py-3 backdrop-blur-sm">
            <div className="marquee-track marquee-left" style={{ animationDuration: "30s" }}>
              {[...GALERI, ...GALERI].map((g, i) => (
                <span key={`hero-m-${i}`} className="mx-5 inline-flex items-center gap-2 whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.15em] text-white/50">
                  <span className="material-symbols-outlined text-[14px] text-primary-container">{g.icon}</span>
                  {g.title} <span className="text-primary-container">{g.price}</span>
                </span>
              ))}
            </div>
          </div>
        </section>
        {/* ============ GALERI BARANG (TOP KATEGORI, ALA VISIPRO) ============ */}
        <section
          id="galeri"
          className="relative w-full overflow-hidden border-outline-variant bg-surface-container-lowest"
        >
          {/* wash numbering ala brand-corporate */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-4 left-1/2 -translate-x-1/2 select-none whitespace-nowrap text-[22vw] font-extrabold uppercase leading-none tracking-tight text-white/[0.04] md:text-[13rem]"
          >
            BUYBACK
          </span>
          <div className="relative mx-auto w-full max-w-[1080px] px-5 py-14 md:px-8 md:py-20">
            <Reveal from="bottom">
              <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div className="max-w-xl">
                  <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.2em] text-primary-container">
                    <span className="inline-block h-px w-8 bg-primary-container" />
                    Top Kategori
                  </p>
                  <h2 className="mt-2 text-2xl md:text-4xl font-extrabold uppercase tracking-tight text-on-surface">
                    Barang yang Kami Beli
                  </h2>
                  <p className="mt-2 text-sm text-on-surface-variant">
                    Semua kondisi laku — klik kartu untuk langsung jual via
                    WhatsApp, estimasi keluar &lt; 15 menit.
                  </p>
                </div>
                <a
                  href={WA_ESTIMASI}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="inline-flex shrink-0 items-center gap-1.5 self-start rounded-lg border border-outline-variant px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider text-on-surface transition-colors hover:border-primary-container hover:text-primary-container md:self-auto"
                >
                  Semua estimasi
                  <span className="material-symbols-outlined text-[16px]">
                    arrow_forward
                  </span>
                </a>
              </div>
            </Reveal>
            {/* bento: kartu 1 lebar, 2–5 standar, kartu 6 panorama */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {GALERI.map((g, i) => (
                <Reveal
                  key={g.title}
                  from="bottom"
                  delay={(i % 3) * 80}
                  className={`h-full ${g.span}`}
                >
                  <a
                    href={g.wa}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="g-card group relative flex h-full min-h-[380px] flex-col justify-end overflow-hidden rounded-2xl border border-white/10 bg-surface-container transition-all duration-300 hover:-translate-y-1 hover:border-primary-container hover:shadow-[0_24px_60px_-20px_rgba(255,94,20,0.45)]"
                  >
                    <img
                      alt={`Foto ${g.title}`}
                      className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.06]"
                      src={g.img}
                      loading="lazy"
                    />
                    <span className="g-shine" aria-hidden="true" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10" />
                    <span className="absolute right-4 top-4 text-4xl font-extrabold tracking-tight text-white/25 transition-colors group-hover:text-white/50">
                      {g.no}
                    </span>
                    <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/60 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur-sm">
                      <span className="material-symbols-outlined text-[14px] text-primary-container">
                        {g.icon}
                      </span>
                      {g.tag}
                    </span>
                    <span className="absolute left-4 top-[52px] inline-flex items-center gap-1 rounded bg-primary-container px-2.5 py-1 text-[11px] font-extrabold uppercase tracking-wider text-white shadow-lg">
                      <span className="material-symbols-outlined text-[13px]">
                        sell
                      </span>
                      {g.price}
                    </span>
                    <div className="g-content relative p-5 md:p-6">
                      <p className="mb-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-primary-container">
                        Kondisi diterima
                      </p>
                      <h3 className="text-xl font-extrabold uppercase tracking-tight text-white md:text-2xl">
                        {g.title}
                      </h3>
                      <p className="mt-1.5 max-w-md text-xs leading-relaxed text-white/70 md:text-sm">
                        {g.desc}
                      </p>
                      <span className="mt-4 flex items-center justify-between border-t border-white/15 pt-3.5">
                        <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-white/60">
                          {g.chip}
                        </span>
                        <span className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3.5 py-2 text-[11px] font-extrabold uppercase tracking-wider text-black transition-colors group-hover:bg-primary-container group-hover:text-white">
                          Jual
                          <span className="material-symbols-outlined text-[15px]">
                            arrow_forward
                          </span>
                        </span>
                      </span>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
            <Reveal from="bottom" delay={100}>
              <p className="mt-6 text-center text-[11px] uppercase tracking-[0.15em] text-on-surface-variant">
                Tak ketemu kategorimu?{" "}
                <a
                  href="/jual/form"
                  className="font-bold text-primary-container hover:underline"
                >
                  Isi form taksiran →
                </a>
              </p>
            </Reveal>
          </div>
        </section>
        {/* ============ TENTANG ============ */}
        <section className="stack-section w-full border-b border-outline-variant bg-surface-container-lowest py-16 md:py-24">
          <div className="mx-auto grid w-full max-w-[1080px] gap-8 px-5 md:px-8 lg:grid-cols-2 lg:items-center">
            <Reveal from="left">
              <div>
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary-container">
                  Tentang Gudang Komputer
                </p>
                <h2 className="mt-2 text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-on-surface">
                  Buyback transparan, bukan tebak harga.
                </h2>
                <p className="mt-3 text-sm md:text-base leading-relaxed text-on-surface-variant">
                  Kami membeli hardware mati, minus, dan normal — dari satuan
                  sampai lelang kantor — dengan diagnosa terbuka disaksikan
                  penjual, berita acara resmi, dan sanitasi data standar militer.
                </p>
              </div>
            </Reveal>
            <Reveal from="right" delay={120}>
              <ul className="space-y-3">
                {[
                  ["verified", "Diagnosa live disaksikan penjual"],
                  ["description", "BAST resmi + faktur pajak (B2B)"],
                  ["lock", "Data wipe DoD 5220.22-M"],
                ].map(([icon, text]) => (
                  <li
                    key={text}
                    className="flex items-center gap-3 rounded-xl border border-outline-variant bg-surface-container px-4 py-3.5"
                  >
                    <span className="material-symbols-outlined text-[20px] text-primary-container">
                      {icon}
                    </span>
                    <span className="text-sm font-semibold text-on-surface">{text}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>

        {/* ============ CARA KERJA ============ */}
        <section
          id="cara-kerja"
          className="stack-section w-full border-b border-outline-variant bg-surface-container-low py-16 md:py-24"
        >
          <div className="mx-auto w-full max-w-[1080px] px-5 md:px-8">
            <Reveal from="bottom">
              <div className="mb-10 text-center">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary-container">
                  Alur simpel &amp; cepat
                </p>
                <h2 className="mt-2 text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-on-surface">
                  4 Langkah Cair
                </h2>
              </div>
            </Reveal>
            <div className="grid items-stretch gap-6 lg:grid-cols-12">
              <Reveal from="left" className="h-full lg:col-span-4">
                <figure className="flex h-full flex-col overflow-hidden rounded-2xl border border-outline-variant bg-surface-container">
                  <div className="relative flex min-h-[300px] flex-1 items-end justify-center overflow-hidden bg-primary-container/10">
                    <div className="blob-shape absolute bottom-4 left-1/2 h-60 w-72 -translate-x-1/2 bg-primary-container/25" aria-hidden="true" />
                    <img
                      alt="Teknisi Gudang Komputer siap mendiagnosa hardware"
                      className="relative h-64 w-auto object-cover object-top"
                      src={PROMO_ASSETS.steps}
                      loading="lazy"
                      style={{ maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)" }}
                    />
                    <span className="animate-float absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-xl border border-white/10 bg-black/70 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-white shadow-xl backdrop-blur-md">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      </span>
                      Teknisi siaga
                    </span>
                    <span className="animate-float-slow absolute right-3 top-3 rounded-xl border border-white/10 bg-black/70 px-3 py-2 text-right shadow-xl backdrop-blur-md">
                      <span className="block text-[10px] font-bold uppercase tracking-[0.12em] text-white/60">
                        Rating teknisi
                      </span>
                      <span className="flex items-center gap-0.5 text-amber-400">
                        {Array.from({ length: 5 }).map((_, s) => (
                          <span key={s} className="material-symbols-outlined text-[13px]">star</span>
                        ))}
                      </span>
                    </span>
                    <span className="animate-float-fast absolute bottom-3 right-3 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white/20 bg-primary-container text-center leading-none text-white shadow-xl">
                      <span>
                        <span className="block text-base font-extrabold">15</span>
                        <span className="block text-[8px] font-bold uppercase tracking-wider">Mnt cair</span>
                      </span>
                    </span>
                  </div>
                  <figcaption className="p-5">
                    <p className="text-base font-extrabold uppercase leading-snug tracking-tight text-on-surface">
                      Dites di depan mata, bukan di belakang layar.
                    </p>
                    <p className="mt-1 text-xs text-on-surface-variant">
                      Datang langsung atau via video call — hasilnya sama transparannya.
                    </p>
                    <a
                      href={WA_ESTIMASI}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-primary-container px-4 py-2.5 text-[11px] font-extrabold uppercase tracking-wider text-white transition-colors hover:bg-secondary-container"
                    >
                      Mulai langkah 01
                      <span className="material-symbols-outlined text-[15px]">
                        arrow_forward
                      </span>
                    </a>
                  </figcaption>
                </figure>
              </Reveal>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-8">
              {STEPS.map((s, i) => (
                <Reveal key={s.n} from="bottom" delay={i * 80} className="h-full">
                  <div className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest p-5 transition-colors hover:border-primary-container">
                    <span className="pointer-events-none absolute -right-2 -top-4 select-none text-6xl font-extrabold tracking-tight text-white/[0.06] transition-colors group-hover:text-primary-container/20">
                      {s.n}
                    </span>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary-container/15 text-primary-container">
                      <span className="material-symbols-outlined text-[20px]">
                        {s.icon}
                      </span>
                    </span>
                    <span className="mt-3 text-xs font-bold tracking-[0.15em] text-on-surface-variant">
                      LANGKAH {s.n}
                    </span>
                    <h3 className="mt-1 text-base font-bold uppercase text-on-surface">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-on-surface-variant">
                      {s.desc}
                    </p>
                  </div>
                </Reveal>
              ))}
              </div>
            </div>
            <Reveal from="bottom" delay={100}>
              <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-xl border border-primary-container/30 bg-primary-container/10 px-6 py-5 text-center sm:flex-row sm:text-left">
                <p className="text-sm font-semibold text-on-surface">
                  Punya 20+ unit komputer kantor mau dilelang?{" "}
                  <span className="font-normal text-on-surface-variant">
                    Appraisal on-site + BAST resmi.
                  </span>
                </p>
                <a
                  className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-primary-container px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-secondary-container"
                  href="https://wa.me/6285979220599?text=Halo%20Gudang%20Komputer,%20kami%20ingin%20mengajukan%20likuidasi%20aset%20hardware%20kantor%20B2B"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[16px]">handshake</span>
                  Appraisal Kantor
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ============ TESTIMONI ============ */}
        <section
          id="testimoni"
          className="stack-section w-full border-b border-outline-variant bg-surface-container-lowest py-16 md:py-24"
        >
          <div className="mx-auto w-full max-w-[1080px] px-5 md:px-8">
            <Reveal from="bottom">
              <div className="mb-10 text-center">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary-container">
                  Bukti kepuasan
                </p>
                <h2 className="mt-2 text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-on-surface">
                  Kata Mereka yang Sudah Cair
                </h2>
                <p className="mx-auto mt-2 max-w-md text-sm text-on-surface-variant">
                  Berhenti saat disentuh. Tiap testimoni ada foto barangnya.
                </p>
              </div>
            </Reveal>
          </div>
          <div className="flex flex-col gap-6">
            <div className="marquee-viewport">
              <div className="marquee-track marquee-left">
                {[...(TESTIMONIAL_ROWS[0] ?? []), ...(TESTIMONIAL_ROWS[0] ?? [])].map((t, i) =>
                  renderReviewCard(t, `t1-${i}`),
                )}
              </div>
            </div>
            <div className="marquee-viewport">
              <div className="marquee-track marquee-right">
                {[...(TESTIMONIAL_ROWS[1] ?? []), ...(TESTIMONIAL_ROWS[1] ?? [])].map((t, i) =>
                  renderReviewCard(t, `t2-${i}`),
                )}
              </div>
            </div>
          </div>
        </section>

        {/* ============ DEPO ============ */}
        <section
          id="lokasi-depo"
          className="stack-section w-full border-b border-outline-variant bg-surface-container-low py-16 md:py-24"
        >
          <div className="mx-auto w-full max-w-[1080px] px-5 md:px-8">
            <Reveal from="bottom">
              <div className="mb-10 text-center">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary-container">
                  Jaringan resmi
                </p>
                <h2 className="mt-2 text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-on-surface">
                  3 Depo Gudang Komputer
                </h2>
                <p className="mx-auto mt-2 max-w-md text-sm text-on-surface-variant">
                  Drop-off langsung atau jadwalkan kurir jemput gratis.
                </p>
              </div>
            </Reveal>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {DEPOTS.map((d, i) => (
                <Reveal key={d.name} from="bottom" delay={i * 80} className="h-full">
                  <div className="flex h-full flex-col overflow-hidden rounded-xl border border-outline-variant bg-surface-container-lowest">
                    <div className="relative h-52 w-full overflow-hidden bg-surface-container">
                      <iframe
                        title={`Peta Depo ${d.name}`}
                        src={d.embed}
                        className="absolute inset-0 h-full w-full border-0"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary-container">
                        {d.area}
                      </p>
                      <h3 className="mt-1 text-lg font-bold uppercase text-on-surface">
                        Depo {d.name}
                      </h3>
                      <p className="mt-2 flex-1 text-xs leading-relaxed text-on-surface-variant">
                        {d.addr}
                      </p>
                      <p className="mt-3 border-t border-outline-variant pt-3 text-xs text-on-surface-variant">
                        Senin – Sabtu: 08.30 – 17.00 WIB
                      </p>
                      <div className="mt-3 grid grid-cols-2 gap-2">
                        <a
                          className="inline-flex items-center justify-center gap-1 rounded-lg border border-outline-variant px-3 py-2 text-[11px] font-bold uppercase text-on-surface transition-colors hover:border-primary-container hover:text-primary-container"
                          href={d.map}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <span className="material-symbols-outlined text-[15px]">map</span>
                          Arah
                        </a>
                        <a
                          className="inline-flex items-center justify-center gap-1 rounded-lg bg-primary-container px-3 py-2 text-[11px] font-bold uppercase text-white transition-colors hover:bg-secondary-container"
                          href={d.wa}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <span className="material-symbols-outlined text-[15px]">
                            calendar_today
                          </span>
                          Jadwalkan
                        </a>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ============ FAQ ============ */}
        <section
          id="faq"
          className="stack-section w-full border-b border-outline-variant bg-surface-container-lowest py-16 md:py-24"
        >
          <div className="mx-auto w-full max-w-[1080px] px-5 md:px-8">
            <Reveal from="bottom">
              <div className="mb-8 text-center">
                <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary-container">
                  FAQ
                </p>
                <h2 className="mt-2 text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-on-surface">
                  Sering Ditanyakan
                </h2>
              </div>
            </Reveal>
            <div className="grid items-start gap-6 lg:grid-cols-12">
              <Reveal from="left" className="lg:col-span-5">
                <figure className="flex flex-col overflow-hidden rounded-2xl border border-outline-variant bg-surface-container lg:sticky lg:top-24">
                  <div className="relative flex min-h-[280px] items-end justify-center overflow-hidden bg-emerald-500/10">
                    <div className="blob-shape absolute bottom-2 left-1/2 h-56 w-64 -translate-x-1/2 bg-emerald-500/20" aria-hidden="true" />
                    <img
                      alt="Customer support Gudang Komputer siap menjawab via WhatsApp"
                      className="relative h-60 w-auto object-cover object-top"
                      src={PROMO_ASSETS.faq}
                      loading="lazy"
                      style={{ maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)" }}
                    />
                    <span className="animate-float absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-xl bg-emerald-500 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-white shadow-xl">
                      <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
                      </span>
                      Online sekarang
                    </span>
                    <span className="animate-float-slow absolute bottom-3 right-3 rounded-xl border border-white/10 bg-black/70 px-3 py-2 text-right shadow-xl backdrop-blur-md">
                      <span className="block text-[10px] font-bold uppercase tracking-[0.12em] text-white/60">
                        Dibalas &lt; 5 mnt
                      </span>
                      <span className="flex items-center gap-0.5 text-amber-400">
                        {Array.from({ length: 5 }).map((_, s) => (
                          <span key={s} className="material-symbols-outlined text-[13px]">star</span>
                        ))}
                      </span>
                    </span>
                  </div>
                  <figcaption className="p-5">
                    <p className="text-base font-extrabold uppercase leading-snug tracking-tight text-on-surface">
                      Masih ragu? Tanya langsung, dijawab manusia.
                    </p>
                    <p className="mt-1 text-xs text-on-surface-variant">
                      Rata-rata dibalas &lt; 5 menit jam kerja.
                    </p>
                    <a
                      href={WA_ESTIMASI}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="mt-4 inline-flex items-center gap-1.5 rounded-lg bg-primary-container px-4 py-2.5 text-[11px] font-extrabold uppercase tracking-wider text-white transition-colors hover:bg-secondary-container"
                    >
                      Chat CS sekarang
                      <span className="material-symbols-outlined text-[15px]">
                        chat
                      </span>
                    </a>
                  </figcaption>
                </figure>
              </Reveal>
              <div className="flex flex-col gap-3 lg:col-span-7">
              {FAQS.map((f, i) => {
                const isOpen = openFaq === i;
                return (
                  <Reveal key={f.q} from="bottom" delay={i * 60}>
                    <div className="overflow-hidden rounded-xl border border-outline-variant bg-surface-container transition-colors">
                      <button
                        className="flex w-full items-center justify-between gap-3 p-4 text-left"
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : i)}
                      >
                        <span className="text-sm font-bold uppercase text-on-surface">
                          {f.q}
                        </span>
                        <span
                          className={`material-symbols-outlined shrink-0 text-[20px] text-primary-container transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        >
                          expand_more
                        </span>
                      </button>
                      {isOpen && (
                        <p className="px-4 pb-4 text-sm leading-relaxed text-on-surface-variant">
                          {f.a}
                        </p>
                      )}
                    </div>
                  </Reveal>
                );
              })}
              </div>
            </div>
          </div>
        </section>

        {/* ============ CTA AKHIR ============ */}
        <section className="stack-section w-full bg-surface-container-lowest py-16 text-center md:py-24">
          <Reveal from="bottom">
            <div className="mx-auto flex w-full max-w-[640px] flex-col items-center gap-4 px-5">
              <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight text-on-surface">
                Siap Ubah Hardware Jadi Uang Tunai?
              </h2>
              <p className="text-sm md:text-base text-on-surface-variant">
                Chat WhatsApp sekarang, estimasi keluar dalam 15 menit.
              </p>
              <a
                className="mt-2 inline-flex items-center gap-2 rounded-lg bg-primary-container px-8 py-3.5 text-sm font-bold uppercase tracking-wider text-white transition-colors hover:bg-secondary-container"
                href={WA_ESTIMASI}
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="material-symbols-outlined text-[20px]">send</span>
                Konsultasi via WhatsApp
              </a>
            </div>
          </Reveal>
        </section>
        </>
        )}
      </main>

      <SiteFooter />
      <FloatingWa />
    </div>
  );
}
