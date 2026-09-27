import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { FloatingWa } from "@/components/FloatingWa";
import { Reveal } from "@/components/Reveal";

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

const SHOWCASE_IMG =
  "https://lh3.googleusercontent.com/aida/AEtjO1Wc7mrgO28jINYhAENDm2FOg1qnmexVSMZNbQS5aV2aiH68dXwf3yoXchx-PY7WzuZNEq52Zt3CmrpubcxkixgaJGbhAbC9NbHPOpEBBttS9cKZH4vosBAlUvTbps6qbPBBWM32ShUQIJ08FpM1srlaKswP-16jBOOq--7S3pAbdJTD7kbmSWMI9HKVvAPYWn_FeYOu5OhfqVgCL_wSmP0gx5vTWNRY23gAkZv2Q2nBrVKeq3CqvosB340j";

const TILES = [
  {
    span: "md:col-span-5 lg:col-span-4 md:row-span-2 h-full",
    tag: "NOTEBOOK & MACBOOK",
    title: "Laptop & MacBook",
    price: "s/d Rp 18,5 Jt",
    priceOnImage: true,
    tall: true,
    wa: "https://wa.me/6285979220599?text=Halo%20Gudang%20Komputer,%20saya%20mau%20jual%20Laptop%20MacBook",
    img: "https://lh3.googleusercontent.com/aida/AEtjO1WGYoemnXceGxHRG3U7J46agNDt8yxEZJGsuDY0Fk6YMmMhcwfF3Nq-H93MEIB1r2GvmSoy6i2GQHiHfTKj9E7e5ZwJR1iGsniLOCD9nYgQyQqf5Aai2ogH48f39fO7Yvhl35WEbRX03C-dISDDoGPtvVKzPXfhWz3i5E-FZw1QqH4CTtZvDTyEtHmoo1ZIreAThaVcQLdOWAkNEb38CJ2JNIiaGWqsmxVorIEile5hp3aOrI2lkQT9d_JS",
  },
  {
    span: "md:col-span-7 lg:col-span-5 h-full",
    tag: "SERIES RTX & RX",
    title: "VGA / Kartu Grafis",
    price: "s/d Rp 14,0 Jt",
    priceOnImage: true,
    tall: false,
    wa: "https://wa.me/6285979220599?text=Halo%20Gudang%20Komputer,%20saya%20mau%20jual%20VGA%20GPU",
    img: "https://lh3.googleusercontent.com/aida/AEtjO1VFYTJ66IZcoaOtGNFIRXDslEH1CLVSrJbNbDn61bMqnRsbAQhm7lfPgDT4Dy63vpBfOI2qD9XP1cdCNi_w977aPZRAZYQhMwIxfPl1CpC3WoELDy-78xBg3jCTEi7cm41-elrnm-F3JmbyKv_FLsLnRzDF_reQdMS2j4mQvf8uv8atXgdNNzs4-Mb708C2GK_hZkXzM7__gkZ82yiVyPb96MPMnkCe-Z8irRIWHSx1R-rk9xqvIRqvEGt7",
  },
  {
    span: "md:col-span-6 lg:col-span-3 h-full",
    tag: "CUSTOM RIG & AIO",
    title: "PC Desktop & Rig",
    price: "s/d Rp 22,0 Jt",
    priceOnImage: false,
    tall: false,
    wa: "https://wa.me/6285979220599?text=Halo%20Gudang%20Komputer,%20saya%20mau%20jual%20PC%20Desktop",
    img: "https://lh3.googleusercontent.com/aida/AEtjO1V2Vw_faD54FK9_gfV3LuMhk2___EXozZjUCuVZ5AOM5KBtMXga8c0_XPlBUPDtKKTPxQL7MHbmeR26yFbEWyITLmxAfSFZjy2xMGRbhuU36gA6LcYVQClLZfXJtdeGWO77N3rErQzw3A9Q6ANMIKHM4L1VkR8Mziz9T1qmf-LfmdRP_g0WSQPuTAJv88QGR8EcZkNQfpGgEXlABx-BPsY2IWGJGRdBa-SKLPLINW5zbflHc-k30UvCgY",
  },
  {
    span: "md:col-span-6 lg:col-span-4 h-full",
    tag: "RACKMOUNT & STORAGE",
    title: "Server & Enterprise",
    price: "s/d Rp 85,0 Jt",
    priceOnImage: false,
    tall: false,
    wa: "https://wa.me/6285979220599?text=Halo%20Gudang%20Komputer,%20saya%20mau%20jual%20Server%20Enterprise",
    img: "https://lh3.googleusercontent.com/aida/AEtjO1X0-wlf0EoJrAR84kLu2l31wLEyVPbjKXRtwLjhrz59rOyGQKI4UfQjWgGRUI2z4RKu_EuvchHXUa5WHwJ27wc40ihynT6TNSoNm8cBalVVhD62lknhuE67cIRsvtb1xMs3PZCS16tnV4sor6o7oWj79dWuEdSBQP3aLQdVOzj2APdeHOFnf1obY6f1scaah_UDC0ATU95teep_AfXSx6ANk9L1cIGoOCRULWCh_gLEhEro-dkHTAoG6cIA",
  },
  {
    span: "md:col-span-6 lg:col-span-2 h-full",
    tag: "CPU & MOBO",
    title: "Motherboard",
    price: "s/d Rp 7,5 Jt",
    priceOnImage: false,
    tall: false,
    wa: "https://wa.me/6285979220599?text=Halo%20Gudang%20Komputer,%20saya%20mau%20jual%20Motherboard%20CPU",
    img: "https://lh3.googleusercontent.com/aida/AEtjO1XpJ4-8x5qTfwLW8IDiew6MeY0QkbKQRQpRAg11jYCPLwIFPjGj7pBDrGF3SY5VhdNEsqs2QTdPgq7C7GpuV9lB3Vv55ZSH2zRJv45-fXSqOfMbuTC-eT06e7W_vGPwNt1yvsxg9bcaKAwdWWSQBWKn60PrYViAtykcxJ5N3c9fjBZWFn-NPHG8lGyLXrv6sYUGXGB5LxW7lzh0S2nPey-ePFzTbuMTAWVZ-SJ4Cvjba5OkHle9eMJpido6",
  },
  {
    span: "md:col-span-6 lg:col-span-2 h-full",
    tag: "PART MATI & KANIBAL",
    title: "E-Waste",
    price: "Rp 350rb/Kg",
    priceOnImage: true,
    tall: false,
    wa: "https://wa.me/6285979220599?text=Halo%20Gudang%20Komputer,%20saya%20mau%20jual%20Limbah%20E-Waste",
    img: "https://lh3.googleusercontent.com/aida/AEtjO1Uzez8G6LJablXLTLJAFTpXIV4tJQbjyKlo8EUZx4WVzh5COoE3GM_qQl9UBibfvGFIyyKFOdt0PL-g0w-btajpJUEd3JrdzsnMipGJu8ntEWh70o0syNsOoSeFDylCqhUg5OlGfWD9zLCegdhm84OlBfvkhLs8u9LpgaIeMxYbs2nRzx3a9Zmy_iYrno3OBDzafKZIelje2GdQLScDaCIEFrv4OZmhd43AhXwUeRHuX-EfL5fXxWsrU9pw",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Kirim Foto & Spek",
    desc: "Foto unit via WhatsApp. Tim langsung berikan estimasi harga dalam 15 menit.",
    foot: "Respons < 5 Menit",
  },
  {
    n: "02",
    title: "Jemput / Drop Unit",
    desc: "Kurir kami jemput gratis ke alamat Anda (Jabodetabek, DIY, Lampung) atau antar ke depo terdekat.",
    foot: "Gratis Ongkir & Kurir",
  },
  {
    n: "03",
    title: "Tes Terbuka Live",
    desc: "Uji fungsi benchmark transparan disaksikan Anda tanpa manipulasi minus.",
    foot: "Software Standar ISO",
  },
  {
    n: "04",
    title: "Dana Cair Instan",
    desc: "Transfer detik itu juga ke rekening/QRIS + sanitasi penghapusan data permanen.",
    foot: "Data Wipe Aman 100%",
  },
];

const TESTIMONIALS = [
  [
    '"5 unit RTX 3070 bekas mining langsung ditest suhu dan display live. Dalam 30 menit transfer BCA masuk penuh tanpa potongan aneh-aneh."',
    "Rian P. • Tangerang",
    "GPU BUYBACK",
  ],
  [
    '"Lelang 38 laptop kantor eks-karyawan lancar. Tim datang ke kantor dengan sertifikat data wipe lengkap. Sangat profesional."',
    "Bambang S. • Jakarta",
    "B2B CORPORATE",
  ],
  [
    '"Laptop Lenovo Legion kena tumpahan air dan matot. Tempat lain menolak, di Gudang Komputer tetap dihargai layarnya dan part yang hidup."',
    "Nadya A. • Depok",
    "UNIT RUSAK/MATOT",
  ],
  [
    '"Decommission 6 unit Dell PowerEdge Rackmount R730 server data center. Eksekusi tim rapi, penimbangan transparan, langsung pelunasan tunai transfer bank."',
    "Hendra K. • Bekasi",
    "SERVER & DATA CENTER",
  ],
  [
    '"Jual borongan 420 kg rongsokan PCB motherboard jadul & power supply rusak dari bengkel servis. Timbangan akurat sistem timbang digital, harga per kilo fair."',
    "Fajar M. • Yogyakarta",
    "E-WASTE BULK",
  ],
  [
    '"MacBook Pro M1 layar blank akibat retak engsel. Toko offline biasa nawar sadis, di Gudang Komputer dihargai wajar komponen logic board & baterainya."',
    "Clara V. • Jakarta Selatan",
    "MACBOOK PARTIAL",
  ],
  [
    '"Tutup warnet e-sports 24 PC full set i5 + GTX 1660 Ti. Tim jemput langsung pakai armada blind van dalam 1 hari tuntas di-appraise dan dicairkan."',
    "Eko Prasetyo • Bandar Lampung",
    "WARNET LIQUIDATION",
  ],
  [
    '"Upgrade rig kerja kreator 3D, jual RTX 4080 lama. Proses drop langsung ke Depo Cikarang cuma 20 menit tes FurMark & TimeSpy langsung deal."',
    "Dennis A. • Cikarang",
    "CREATOR PC UPGRADE",
  ],
  [
    '"Penggantian berkala 50 unit SSD & RAM server kantor. Yang paling berharga adalah adanya Berita Acara & jaminan sertifikat DoD wipe 100% aman audit ISO."',
    "Arif Wicaksono • Bogor",
    "IT ASSET AUDIT",
  ],
];

const DEPOTS = [
  {
    name: "Cikarang",
    badge: "PUSAT INDUSTRI JABODETABEK",
    status: "Live Testing",
    addr: "Kawasan Industri MM2100, Jl. Selayar Blok D, Cikarang Barat, Kabupaten Bekasi, Jawa Barat 17530",
    map: "https://maps.google.com/?q=Kawasan+Industri+MM2100+Cikarang+Barat",
    embed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63456.88330752538!2d107.0733834!3d-6.3023812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699b0c79e6cf61%3A0x6b4db9228fb8bf5a!2sKawasan%20Industri%20MM2100%2C%20Cikarang%20Barat%2C%20Bekasi%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1700000000001",
    wa: "https://wa.me/6285979220599?text=Halo%20PIC%20Depo%20Cikarang,%20saya%20mau%20jadwalkan%20drop-off%20hardware",
  },
  {
    name: "Gunungkidul",
    badge: "DEPO DIY & JAWA TENGAH",
    status: "E-Waste & PC",
    addr: "Jl. KH Agus Salim, Ledoksari, Kepek, Kec. Wonosari, Kabupaten Gunungkidul, D.I. Yogyakarta 55813",
    map: "https://maps.google.com/?q=Wonosari+Gunungkidul+Yogyakarta",
    embed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63234.34141671981!2d110.5694205!3d-7.9654714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7bca9c1b3f7215%3A0x4027a76e3531b20!2sWonosari%2C%20Kabupaten%20Gunung%20Kidul%2C%20Daerah%20Istimewa%20Yogyakarta!5e0!3m2!1sid!2sid!4v1700000000002",
    wa: "https://wa.me/6285979220599?text=Halo%20PIC%20Depo%20Gunungkidul,%20saya%20mau%20drop-off%20komputer%20dan%20limbah%20hardware",
  },
  {
    name: "Lampung",
    badge: "DEPO SUMATERA & LAMPUNG",
    status: "Hub Sumatera",
    addr: "Jl. Sultan Agung No. 88, Way Halim Permai, Kec. Way Halim, Kota Bandar Lampung, Lampung 35141",
    map: "https://maps.google.com/?q=Way+Halim+Bandar+Lampung",
    embed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63550.04696152146!2d105.2418342!3d-5.3991206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40db0366eb4b21%3A0xa193dfeb6ec6e0bf!2sWay%20Halim%2C%20Kota%20Bandar%20Lampung%2C%20Lampung!5e0!3m2!1sid!2sid!4v1700000000003",
    wa: "https://wa.me/6285979220599?text=Halo%20PIC%20Depo%20Lampung,%20saya%20mau%20appraisal%20laptop%20dan%20hardware",
  },
];

const FAQS = [
  {
    q: "Komputer atau laptop mati total apakah tetap bernilai?",
    a: "Ya, tetap bernilai! Kami menghitung nilai komponen yang masih berfungsi (layar LCD, RAM, SSD, casing) maupun nilai lebur material motherboard.",
  },
  {
    q: "Apakah data pribadi di dalam hard disk/SSD aman?",
    a: "100% aman terjamin. Setiap drive melalui proses data sanitization permanen berstandar militer NIST 800-88 & DoD 5220.22-M sehingga file tidak dapat dipulihkan kembali.",
  },
  {
    q: "Bagaimana proses penjemputan barangnya?",
    a: "Untuk area Jabodetabek, DIY, dan Lampung kurir internal kami siap menjemput langsung ke alamat Anda secara gratis setelah estimasi disepakati via WhatsApp.",
  },
];

function JualPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="bg-background font-body-md text-on-surface antialiased tech-grid-bg min-h-screen">
      <main className="w-full bg-background min-h-screen relative overflow-hidden">
        <div className="flex flex-col w-full relative">
          {/* ==================== HERO FULL BANNER ==================== */}
          <section className="relative w-full min-h-screen overflow-hidden flex items-center justify-center bg-surface-container-lowest">
            <img
              alt="Hardware Buyback Showcase"
              className="absolute inset-0 w-full h-full object-cover object-center animate-[kenburns_18s_ease-out_infinite]"
              src={SHOWCASE_IMG}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-surface-container-lowest/95 via-surface-container-lowest/75 to-surface-container-lowest" />
            <div className="absolute inset-0 bg-gradient-to-r from-surface/80 via-transparent to-surface/40" />
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-primary-container/25 blur-[140px] pointer-events-none rounded-full" />
            <div className="absolute -top-10 right-10 w-[350px] h-[350px] bg-amber-500/20 blur-[110px] pointer-events-none rounded-full" />
            <div className="absolute bottom-0 left-10 w-[400px] h-[300px] bg-secondary-container/20 blur-[130px] pointer-events-none rounded-full" />

            <div className="relative w-full max-w-[1280px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop flex flex-col items-center text-center py-24">
              <Reveal from="scale" delay={0}>
                <div className="inline-flex items-center gap-2 bg-surface-container/90 backdrop-blur-sm px-3.5 py-1.5 rounded-full mb-5 border border-surface-container-high shadow-[0_0_15px_rgba(255,94,20,0.15)]">
                  <div className="relative flex h-2 w-2 items-center justify-center">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary-container" />
                  </div>
                  <span className="font-label-tech text-label-tech text-primary uppercase tracking-widest">
                    ESTIMASI &lt; 15 MENIT
                  </span>
                </div>
              </Reveal>

              <Reveal from="bottom" delay={100}>
                <h1 className="font-display-lg text-4xl md:text-6xl lg:text-7xl uppercase text-on-surface tracking-tight font-bold leading-tight mb-4">
                  JUAL HARDWARE.{" "}
                  <span className="bg-gradient-to-r from-primary-container via-[#ff7836] to-secondary-container bg-clip-text text-transparent">
                    CAIR SEKARANG.
                  </span>
                </h1>
              </Reveal>

              <Reveal from="bottom" delay={200}>
                <p className="font-body-md text-base md:text-xl text-on-surface-variant max-w-2xl mb-8">
                  Laptop, GPU, PC &amp; Server mati/normal dibeli langsung di 3 cabang resmi —
                  proses lab transparan, dana cair detik itu juga.
                </p>
              </Reveal>

              <Reveal from="bottom" delay={300}>
                <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
                  <a
                    className="inline-flex items-center gap-2 bg-primary-container hover:bg-secondary-container text-on-primary-container px-8 py-4 rounded font-label-lg text-label-lg uppercase tracking-wider font-bold transition-all duration-300 shadow-lg shadow-primary-container/25 hover:shadow-[0_0_30px_rgba(255,94,20,0.5)] hover:scale-[1.02]"
                    href="https://wa.me/6285979220599?text=Halo%20Gudang%20Komputer,%20saya%20mau%20cek%20estimasi%20harga%20hardware"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <span className="material-symbols-outlined text-[20px]">bolt</span>
                    <span>CEK HARGA INSTAN</span>
                  </a>
                  <a
                    className="inline-flex items-center gap-2 bg-surface-container/90 backdrop-blur-sm hover:bg-surface-container border border-surface-container-high hover:border-primary-container/40 text-on-surface px-8 py-4 rounded font-label-lg text-label-lg uppercase tracking-wider font-bold transition-all duration-300"
                    href="/berita"
                  >
                    <span className="material-symbols-outlined text-[20px]">receipt_long</span>
                    <span>Lihat Berita Acara</span>
                  </a>
                </div>
              </Reveal>

              <Reveal from="bottom" delay={420} className="w-full">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
                  {[
                    ["01", "Gunungkidul (DIY)", "Drop-off & COD Jogja"],
                    ["02", "Lampung (Sumatera)", "Hub Regional Sumatera"],
                    ["03", "Cikarang (Jabar)", "Kawasan Industri & Jabodetabek"],
                  ].map(([no, city, desc]) => (
                    <div
                      key={no}
                      className="group flex items-center gap-3 rounded-xl bg-surface-container/80 backdrop-blur-sm border border-surface-container-high px-4 py-3.5 text-left transition-all duration-300 hover:border-primary-container/50 hover:shadow-[0_8px_25px_-10px_rgba(255,94,20,0.3)] hover:-translate-y-0.5"
                    >
                      <span className="font-monotech text-primary-container text-xs font-bold flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-container/15 border border-primary-container/30">
                        {no}
                      </span>
                      <div className="min-w-0">
                        <p className="font-headline-sm text-sm uppercase text-on-surface tracking-tight font-bold truncate">
                          {city}
                        </p>
                        <p className="font-body-sm text-xs text-on-surface-variant truncate">
                          {desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce text-on-surface-variant">
              <span className="material-symbols-outlined text-[28px]">expand_more</span>
            </div>
          </section>

          {/* ==================== KATEGORI DITERIMA (BENTO GRID) ==================== */}
          <section
            className="relative w-full bg-surface/90 py-20 border-b border-surface-container"
            id="katalog-buyback"
          >
            <div className="absolute -top-32 left-1/4 w-[500px] h-[500px] bg-primary-container/10 blur-[130px] pointer-events-none rounded-full" />
            <div className="relative w-full max-w-[1280px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop py-4">
              <Reveal from="bottom">
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
              </Reveal>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-5 lg:gap-6 auto-rows-[250px] lg:auto-rows-[270px]">
                {TILES.map((tile, tileIdx) => (
                  <Reveal key={tile.title} from="bottom" delay={tileIdx * 80} className={tile.span}>
                    <a
                      className="group relative h-full rounded-2xl overflow-hidden border border-surface-container-high/80 hover:border-primary-container hover:-translate-y-1.5 hover:shadow-[0_12px_35px_-10px_rgba(255,94,20,0.3)] transition-all duration-300 ease-out flex flex-col justify-end bg-surface-container-lowest"
                      href={tile.wa}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {tile.tall ? (
                        <>
                          <div className="relative w-full h-[68%] md:h-[72%] overflow-hidden bg-surface-container-low">
                            <img
                              alt={tile.title}
                              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                              src={tile.img}
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-black/30" />
                            <div className="absolute top-4 left-4 z-10">
                              <span className="inline-block bg-primary-container text-on-primary-container font-label-tech text-xs uppercase font-bold px-3.5 py-1.5 rounded-full shadow-lg tracking-wider">
                                {tile.price}
                              </span>
                            </div>
                          </div>
                          <div className="relative z-10 p-5 lg:p-6 flex items-center justify-between bg-surface-container-lowest">
                            <div>
                              <span className="font-label-tech text-primary uppercase tracking-widest text-[10px] block mb-1">
                                {tile.tag}
                              </span>
                              <h3 className="font-headline-lg text-xl lg:text-2xl uppercase text-on-surface font-bold tracking-tight group-hover:text-primary transition-colors">
                                {tile.title}
                              </h3>
                            </div>
                            <div className="w-10 h-10 rounded-full bg-surface-container border border-surface-container-high flex items-center justify-center group-hover:bg-primary-container group-hover:border-primary-container group-hover:shadow-[0_0_15px_rgba(255,94,20,0.5)] transition-all shrink-0">
                              <span className="material-symbols-outlined text-on-surface group-hover:text-on-primary-container group-hover:translate-x-0.5 transition-all text-[20px]">
                                arrow_forward
                              </span>
                            </div>
                          </div>
                        </>
                      ) : (
                        <>
                          <img
                            alt={tile.title}
                            className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                            src={tile.img}
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-surface-container-lowest/65 to-transparent" />
                          <div className="absolute top-4 right-4 z-10">
                            <span
                              className={
                                tile.priceOnImage
                                  ? "inline-block bg-primary-container text-on-primary-container font-label-tech text-xs uppercase font-bold px-3 py-1.5 rounded-full shadow-lg tracking-wider"
                                  : "inline-block bg-surface/90 backdrop-blur-md border border-surface-container-high px-3 py-1 rounded-full text-primary font-label-tech text-xs font-bold shadow-md"
                              }
                            >
                              {tile.price}
                            </span>
                          </div>
                          <div className="relative z-10 p-5 lg:p-6 flex items-center justify-between">
                            <div>
                              <span className="font-label-tech text-primary uppercase tracking-widest text-[10px] block mb-0.5">
                                {tile.tag}
                              </span>
                              <h3 className="font-headline-md text-base lg:text-lg uppercase text-on-surface font-bold tracking-tight group-hover:text-primary transition-colors truncate">
                                {tile.title}
                              </h3>
                            </div>
                            <div className="w-9 h-9 rounded-full bg-surface/80 backdrop-blur-md border border-surface-container-high flex items-center justify-center group-hover:bg-primary-container group-hover:border-primary-container group-hover:shadow-[0_0_15px_rgba(255,94,20,0.5)] transition-all shrink-0">
                              <span className="material-symbols-outlined text-on-surface group-hover:text-on-primary-container group-hover:translate-x-0.5 transition-all text-[18px]">
                                arrow_forward
                              </span>
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

          {/* ==================== HOW IT WORKS ==================== */}
          <section
            className="relative w-full bg-surface-container-lowest/90 py-16 border-t border-surface-container"
            id="cara-kerja"
          >
            <div className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-primary-container/10 blur-[120px] pointer-events-none rounded-full" />
            <div className="relative w-full max-w-[1280px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
              <Reveal from="bottom">
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
              </Reveal>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {STEPS.map((s, i) => (
                  <Reveal key={s.n} from="bottom" delay={i * 100} className="h-full">
                    <div className="bg-surface-container p-6 rounded-lg border border-surface-container-high hover:border-[#ff5e14]/50 transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(255,94,20,0.15)] hover:-translate-y-1 flex flex-col justify-between h-full">
                      <div>
                        <span className="font-headline-sm text-primary font-bold text-xl block mb-2">
                          {s.n}
                        </span>
                        <h3 className="font-title-md text-base text-on-surface uppercase mb-2">
                          {s.title}
                        </h3>
                        <p className="font-body-sm text-on-surface-variant text-xs leading-relaxed">
                          {s.desc}
                        </p>
                      </div>
                      <span className="font-label-tech text-[10px] text-primary uppercase mt-4 block">
                        {s.foot}
                      </span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* ==================== B2B LIKUIDASI KANTOR ==================== */}
          <section className="w-full bg-surface py-12 relative" id="b2b-liquidation">
            <Reveal from="bottom">
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
            </Reveal>
          </section>

          {/* ==================== TESTIMONIALS ==================== */}
          <section
            className="relative w-full bg-surface-container-lowest/80 py-16 border-t border-surface-container"
            id="testimoni"
          >
            <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-primary-container/10 blur-[130px] pointer-events-none rounded-full" />
            <div className="relative w-full max-w-[1280px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
              <Reveal from="bottom">
                <div className="flex flex-col items-center text-center gap-2 mb-10">
                  <span className="font-label-tech text-label-tech text-primary uppercase tracking-widest">
                    BUKTI KEPUASAN PELANGGAN
                  </span>
                  <h2 className="font-headline-lg text-2xl md:text-3xl uppercase text-on-surface tracking-tight font-bold">
                    Kata Mereka yang Sudah Mencairkan
                  </h2>
                </div>
              </Reveal>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {TESTIMONIALS.map(([quote, author, tag], i) => (
                  <Reveal key={author} from="bottom" delay={i * 60} className="h-full">
                    <div className="bg-surface-container p-6 rounded-lg border border-surface-container-high flex flex-col justify-between hover:border-[#ff5e14]/50 transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(255,94,20,0.15)] hover:-translate-y-1 h-full">
                      <div>
                        <div className="flex items-center gap-1 text-primary mb-3">
                          <span className="material-symbols-outlined text-[16px]">star</span>
                          <span className="material-symbols-outlined text-[16px]">star</span>
                          <span className="material-symbols-outlined text-[16px]">star</span>
                          <span className="material-symbols-outlined text-[16px]">star</span>
                          <span className="material-symbols-outlined text-[16px]">star</span>
                        </div>
                        <p className="font-body-md text-sm text-on-surface italic leading-relaxed">
                          {quote}
                        </p>
                      </div>
                      <div className="pt-4 mt-4 border-t border-surface-container-high flex items-center justify-between">
                        <span className="font-title-md text-xs text-on-surface uppercase font-bold">
                          {author}
                        </span>
                        <span className="font-label-tech text-[10px] text-primary">{tag}</span>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* ==================== DEPOT & DROP POINT LOCATIONS ==================== */}
          <section
            className="relative w-full bg-surface-container-lowest py-20 border-t border-surface-container"
            id="lokasi-depo"
          >
            <div className="absolute top-1/2 left-1/3 -translate-x-1/2 w-[600px] h-[350px] bg-primary-container/10 blur-[140px] pointer-events-none rounded-full" />
            <div className="relative w-full max-w-[1280px] mx-auto px-margin md:px-margin-tablet lg:px-margin-desktop">
              <Reveal from="bottom">
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
                    Kunjungi depo kami untuk appraisal langsung di tempat atau jadwalkan kurir
                    jemput gratis ke lokasi Anda.
                  </p>
                </div>
              </Reveal>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {DEPOTS.map((d, i) => (
                  <Reveal key={d.name} from="bottom" delay={i * 100} className="h-full">
                    <div className="bg-surface-container rounded-xl border border-surface-container-high/80 overflow-hidden flex flex-col justify-between hover:border-[#ff5e14]/50 transition-all duration-300 hover:shadow-[0_10px_30px_-10px_rgba(255,94,20,0.15)] hover:-translate-y-1 h-full">
                      <div className="relative w-full h-48 bg-surface-container-low overflow-hidden border-b border-surface-container-high">
                        <iframe
                          className="w-full h-full border-0 grayscale invert opacity-75 hover:opacity-100 transition-opacity"
                          loading="lazy"
                          referrerPolicy="no-referrer-when-downgrade"
                          src={d.embed}
                          title={`Peta Depo ${d.name}`}
                        />
                        <div className="absolute top-3 left-3">
                          <span className="inline-flex items-center gap-1.5 bg-surface/90 backdrop-blur-md border border-surface-container-high px-2.5 py-1 rounded text-primary font-label-tech text-[10px] font-bold uppercase tracking-wider shadow-md">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse" />
                            {d.badge}
                          </span>
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-1 justify-between gap-4">
                        <div>
                          <div className="flex items-center justify-between gap-2 mb-2">
                            <h3 className="font-headline-md text-xl uppercase text-on-surface font-bold tracking-tight">
                              Depo {d.name}
                            </h3>
                            <span className="inline-flex items-center gap-1.5 font-label-tech text-[10px] bg-primary-container/10 border border-primary-container/30 text-primary px-2 py-0.5 rounded font-bold uppercase">
                              <span className="relative flex h-1.5 w-1.5 items-center justify-center">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75" />
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary-container" />
                              </span>
                              {d.status}
                            </span>
                          </div>
                          <p className="font-body-sm text-xs text-on-surface-variant mb-4 leading-relaxed">
                            {d.addr}
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
                            href={d.map}
                            rel="noopener noreferrer"
                            target="_blank"
                          >
                            <span className="material-symbols-outlined text-[16px]">map</span>
                            <span>Petunjuk Arah</span>
                          </a>
                          <a
                            className="inline-flex items-center justify-center gap-1.5 bg-primary-container hover:bg-secondary-container text-on-primary-container text-xs font-label-md font-bold py-2.5 px-3 rounded transition-all duration-300 hover:shadow-[0_0_15px_rgba(255,94,20,0.4)] text-center"
                            href={d.wa}
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
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* ==================== FAQ ==================== */}
          <section
            className="relative w-full bg-surface py-16 border-t border-surface-container"
            id="faq"
          >
            <div className="w-full max-w-[840px] mx-auto px-margin md:px-margin-tablet">
              <Reveal from="bottom">
                <div className="flex flex-col items-center text-center gap-2 mb-8">
                  <span className="font-label-tech text-label-tech text-primary uppercase tracking-widest">
                    FAQ
                  </span>
                  <h2 className="font-headline-lg text-2xl md:text-3xl uppercase text-on-surface tracking-tight font-bold">
                    Pertanyaan Sering Diajukan
                  </h2>
                </div>
              </Reveal>
              <div className="flex flex-col gap-3">
                {FAQS.map((f, i) => {
                  const isOpen = openFaq === i;
                  return (
                    <Reveal key={f.q} from="bottom" delay={i * 60}>
                      <div className="faq-item bg-surface-container rounded-lg border border-surface-container-high hover:border-[#ff5e14]/40 transition-colors overflow-hidden">
                        <button
                          className="faq-toggle w-full p-4 flex items-center justify-between text-left focus:outline-none"
                          type="button"
                          onClick={() => setOpenFaq(isOpen ? null : i)}
                        >
                          <span className="font-title-md text-sm md:text-base text-on-surface uppercase font-semibold">
                            {f.q}
                          </span>
                          <span
                            className={`material-symbols-outlined text-primary text-[20px] transition-transform duration-200 ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          >
                            expand_more
                          </span>
                        </button>
                        {isOpen && (
                          <div className="faq-content px-4 pb-4 text-on-surface-variant font-body-sm text-xs md:text-sm">
                            {f.a}
                          </div>
                        )}
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ==================== FINAL CALLOUT ==================== */}
          <section className="relative w-full bg-surface-container py-14 border-t border-surface-container-high text-center overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary-container/15 blur-[120px] pointer-events-none rounded-full" />
            <Reveal from="bottom">
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
            </Reveal>
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
