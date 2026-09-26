import { Link } from "@tanstack/react-router";
import { Building2, MapPin, MessageCircle, ShieldCheck } from "lucide-react";

export function SiteFooter() {
  const branches = [
    {
      city: "Depo Cikarang (Jawa Barat)",
      badge: "Kawasan Industri Jabodetabek",
      address: "Kawasan Industri MM2100, Jl. Selayar Blok D, Cikarang Barat, Kab. Bekasi 17530",
      desc: "Live testing lab, terima satuan & lelang komputer kantor.",
      waText: "Halo PIC Depo Cikarang, saya mau jual/taksir hardware bekas",
    },
    {
      city: "Depo Gunungkidul (Yogyakarta)",
      badge: "Hub DIY & Jawa Tengah",
      address: "Jl. KH Agus Salim, Ledoksari, Kepek, Wonosari, Kab. Gunungkidul 55813",
      desc: "Pusat timbang e-waste & PC matot, COD jemput wilayah Jogja.",
      waText: "Halo PIC Depo Gunungkidul, saya mau jual/taksir hardware bekas",
    },
    {
      city: "Depo Lampung (Sumatera)",
      badge: "Pusat Layanan Regional",
      address: "Jl. Sultan Agung No. 88, Way Halim Permai, Kota Bandar Lampung 35141",
      desc: "Hub buyback & kanibal part Sumatera, drop-in & ekspedisi.",
      waText: "Halo PIC Depo Lampung, saya mau jual/taksir hardware bekas",
    },
  ];

  return (
    <footer
      id="kontak"
      className="border-t border-surface-container bg-surface-container-lowest text-on-surface"
    >
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Top Summary & Navigation */}
        <div className="grid gap-10 lg:grid-cols-12 pb-12 border-b border-surface-container">
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-white p-1.5 shadow-sm inline-flex items-center">
                <img
                  src="/gudangkomputer-logo.png"
                  alt="Gudang Komputer Logo"
                  className="h-8 w-auto object-contain"
                  loading="lazy"
                />
              </div>
              <span className="font-heading text-lg font-extrabold uppercase tracking-tight text-white">
                GUDANG KOMPUTER
              </span>
            </div>

            <p className="max-w-md text-xs sm:text-sm leading-relaxed text-on-surface-variant">
              Pusat pertukaran &amp; buyback resmi hardware komputer, laptop mati/normal, GPU
              artefak, dan lelang komputer kantor dengan sistem diagnosa terbuka dan pencairan dana
              instan.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <span className="font-monotech inline-flex items-center gap-1.5 text-[11px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded">
                <ShieldCheck size={13} />
                ISO 14001:2015 Data Wipe Certified
              </span>
            </div>
          </div>

          <div className="lg:col-span-7 grid gap-8 sm:grid-cols-3">
            <div className="text-sm">
              <h4 className="font-monotech text-xs font-bold uppercase tracking-widest text-primary-fixed mb-3">
                Layanan Kami
              </h4>
              <ul className="space-y-2 text-xs text-on-surface-variant font-heading font-medium">
                <li>
                  <Link to="/jual" className="hover:text-primary-container transition-colors">
                    Katalog Kategori
                  </Link>
                </li>
                <li>
                  <Link to="/jual/form" className="hover:text-primary-container transition-colors">
                    Form Taksiran Online
                  </Link>
                </li>
                <li>
                  <Link to="/berita" className="hover:text-primary-container transition-colors">
                    Berita Acara Transaksi
                  </Link>
                </li>
                <li>
                  <a
                    href="https://service.gudangkomputer.web.id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary-container transition-colors"
                  >
                    Layanan Servis Lab
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-sm">
              <h4 className="font-monotech text-xs font-bold uppercase tracking-widest text-primary-fixed mb-3">
                Jam Operasional
              </h4>
              <ul className="space-y-2 text-xs text-on-surface-variant font-monotech">
                <li>
                  <strong className="text-white">Senin – Sabtu:</strong>
                  <br />
                  08.30 – 17.00 WIB
                </li>
                <li>
                  <strong className="text-white">Minggu:</strong>
                  <br />
                  Janjian Online via WA
                </li>
                <li className="pt-1 text-[11px] text-emerald-400">Konsultasi WA: 24 Jam</li>
              </ul>
            </div>

            <div className="text-sm">
              <h4 className="font-monotech text-xs font-bold uppercase tracking-widest text-primary-fixed mb-3">
                Hotline &amp; B2B
              </h4>
              <ul className="space-y-2 text-xs text-on-surface-variant font-heading font-medium">
                <li>
                  <a
                    href="https://wa.me/6285979220599"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-primary-container transition-colors"
                  >
                    WA: 0859-7922-0599
                  </a>
                </li>
                <li>
                  <a
                    href="/jual#b2b-liquidation"
                    className="hover:text-primary-container transition-colors"
                  >
                    Lelang Aset Kantor B2B
                  </a>
                </li>
                <li>
                  <a
                    href="https://gudangkomputer.web.id/about"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-primary-container transition-colors"
                  >
                    Keamanan Data Sanitasi
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3 Regional Depo Locations Grid */}
        <div className="py-10 border-b border-surface-container">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="font-monotech text-[10px] font-bold uppercase tracking-widest text-primary-container">
                JARINGAN DEPO RESMI
              </span>
              <h3 className="font-heading text-lg font-bold text-white sm:text-xl uppercase">
                3 Lokasi Depo &amp; Lab Gudang Komputer
              </h3>
            </div>
            <span className="font-monotech rounded-full bg-surface-container px-3 py-1 text-[11px] text-primary-fixed border border-surface-container-high">
              Siap Layani Satuan &amp; Borongan Kantor
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {branches.map((b) => (
              <div
                key={b.city}
                className="flex flex-col justify-between rounded-xl border border-surface-container-high bg-surface-container p-4 sm:p-5 transition-all hover:border-primary-container/40"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-monotech inline-flex items-center gap-1 rounded bg-primary-container/20 px-2 py-0.5 text-[10px] font-bold text-primary-fixed">
                      <Building2 size={12} />
                      {b.badge}
                    </span>
                    <span className="flex items-center gap-1 text-[10px] text-emerald-400 font-monotech">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Aktif Melayani
                    </span>
                  </div>
                  <h4 className="font-heading text-sm font-bold text-white uppercase">{b.city}</h4>
                  <p className="flex items-start gap-1.5 text-xs text-on-surface-variant">
                    <MapPin size={13} className="shrink-0 text-primary-container mt-0.5" />
                    <span>{b.address}</span>
                  </p>
                  <p className="text-xs text-on-surface-variant/80 leading-relaxed">{b.desc}</p>
                </div>

                <div className="pt-3 mt-3 border-t border-surface-container-high">
                  <a
                    href={`https://wa.me/6285979220599?text=${encodeURIComponent(b.waText)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="font-monotech inline-flex w-full items-center justify-center gap-1.5 rounded bg-surface-container-low hover:bg-primary-container hover:text-white border border-surface-container-high py-2 text-xs font-bold text-on-surface transition-colors"
                  >
                    <MessageCircle size={13} />
                    <span>Hubungi {b.city.split(" ")[1]}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 flex flex-col gap-2 text-xs text-on-surface-variant sm:flex-row sm:items-center sm:justify-between font-monotech">
          <p>
            © {new Date().getFullYear()} PT Gudang Komputer Nusantara. Seluruh Hak Cipta Dilindungi.
          </p>
          <div className="flex gap-4">
            <a
              href="https://gudangkomputer.web.id/about"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-container transition-colors"
            >
              Syarat Layanan
            </a>
            <a
              href="https://gudangkomputer.web.id/about"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-container transition-colors"
            >
              Kebijakan Privasi
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
