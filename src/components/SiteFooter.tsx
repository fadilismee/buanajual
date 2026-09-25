import { Link } from "@tanstack/react-router";
import { Building2, MapPin, MessageCircle } from "lucide-react";

export function SiteFooter() {
  const branches = [
    {
      city: "Gunungkidul (Yogyakarta)",
      badge: "Cabang DIY",
      address: "Gunungkidul, D.I. Yogyakarta",
      desc: "Pengecekan lab transparan, COD jemput Jogja & sekitarnya, terima borongan kantor.",
      waText: "Halo Gudang Komputer Cabang Gunungkidul, saya mau jual/taksir hardware bekas",
    },
    {
      city: "Lampung (Sumatera)",
      badge: "Cabang Sumatera",
      address: "Lampung (Pusat Layanan Regional)",
      desc: "Pusat buyback & kanibal part hardware Sumatera, drop-in lab & kirim paket.",
      waText: "Halo Gudang Komputer Cabang Lampung, saya mau jual/taksir hardware bekas",
    },
    {
      city: "Cikarang (Jawa Barat)",
      badge: "Cabang Jabodetabek",
      address: "Cikarang, Kab. Bekasi, Jawa Barat",
      desc: "Layanan buyback area industri & perumahan Jabodetabek, terima lelang & satuan.",
      waText: "Halo Gudang Komputer Cabang Cikarang, saya mau jual/taksir hardware bekas",
    },
  ];

  return (
    <footer id="kontak" className="border-t border-white/10 bg-[#0f0f0f] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
        {/* Top summary & navigation grid */}
        <div className="grid gap-10 lg:grid-cols-12 pb-12 border-b border-white/10">
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <img
                src="/Buanacomputer-logo.png"
                alt="Gudang Komputer"
                className="h-8 w-auto object-contain brightness-0 invert"
                loading="lazy"
              />
              <span className="text-base font-bold tracking-tight">GUDANG KOMPUTER</span>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-white/70">
              Pusat buyback dan tukar tambah laptop bekas, laptop rusak, motherboard, VGA artefak,
              dan lelang komputer kantor. Taksiran akurat, cek lab 15 menit, dan pembayaran instan
              di 3 lokasi cabang resmi.
            </p>
            <div className="pt-2 flex flex-wrap gap-2">
              <a
                href="https://wa.me/6285979220599?text=Halo%20Gudang%20Komputer"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-pri px-4 py-2.5 text-xs font-bold text-white transition-colors hover:bg-pri-container"
              >
                <MessageCircle size={15} />
                <span>WhatsApp Hotline 0859-7922-0599</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-7 grid gap-8 sm:grid-cols-3">
            <div className="text-sm">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white/90">
                Layanan Kami
              </h4>
              <ul className="mt-4 space-y-2 text-white/75">
                <li>
                  <Link to="/jual" className="hover:text-white hover:underline">
                    Jual Hardware Bekas
                  </Link>
                </li>
                <li>
                  <Link to="/jual/form" className="hover:text-white hover:underline">
                    Form Taksiran Online
                  </Link>
                </li>
                <li>
                  <Link to="/berita" className="hover:text-white hover:underline">
                    Berita Acara Transaksi
                  </Link>
                </li>
                <li>
                  <a
                    href="https://service.gudangkomputer.web.id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white hover:underline"
                  >
                    Layanan Servis Lab
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-sm">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white/90">
                Jam Operasional
              </h4>
              <ul className="mt-4 space-y-2 text-white/75 text-xs">
                <li>
                  <strong className="text-white">Senin – Sabtu:</strong>
                  <br />
                  09.00 – 20.00 WIB
                </li>
                <li>
                  <strong className="text-white">Minggu:</strong>
                  <br />
                  10.00 – 17.00 WIB (Janjian WA)
                </li>
                <li className="pt-1 text-white/50">Konsultasi online via WhatsApp 24 jam.</li>
              </ul>
            </div>

            <div className="text-sm">
              <h4 className="text-xs font-semibold uppercase tracking-widest text-white/90">
                Informasi & Panduan
              </h4>
              <ul className="mt-4 space-y-2 text-white/75">
                <li>
                  <a
                    href="https://gudangkomputer.web.id/blog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white hover:underline"
                  >
                    Blog &amp; Tips Hardware
                  </a>
                </li>
                <li>
                  <a
                    href="https://gudangkomputer.web.id/about"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white hover:underline"
                  >
                    Tentang Laboratorium
                  </a>
                </li>
                <li>
                  <a
                    href="https://gudangkomputer.web.id/about"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white hover:underline"
                  >
                    Keamanan Data Wipe
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 3 Location Branches Grid */}
        <div className="py-10 border-b border-white/10">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="font-monotech text-[10px] font-bold uppercase tracking-widest text-pri-fixed">
                Jaringan Cabang Resmi
              </span>
              <h3 className="font-heading text-lg font-bold text-white sm:text-xl">
                3 Lokasi Workshop &amp; Lab Gudang Komputer
              </h3>
            </div>
            <span className="font-monotech rounded-full bg-white/10 px-3 py-1 text-[11px] text-white/75">
              Siap Melayani Satuan &amp; Borongan
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {branches.map((b) => (
              <div
                key={b.city}
                className="flex flex-col justify-between rounded-xl border border-white/10 bg-white/5 p-4 sm:p-5 transition-all hover:border-white/20 hover:bg-white/[0.07]"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="font-monotech inline-flex items-center gap-1 rounded bg-pri/30 px-2 py-0.5 text-[10px] font-bold text-pri-fixed">
                      <Building2 size={12} />
                      {b.badge}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-monotech">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Aktif Melayani
                    </span>
                  </div>
                  <h4 className="font-heading text-base font-bold text-white">{b.city}</h4>
                  <p className="flex items-start gap-1.5 text-xs text-white/70">
                    <MapPin size={14} className="shrink-0 text-white/40 mt-0.5" />
                    <span>{b.address}</span>
                  </p>
                  <p className="text-xs text-white/60 leading-relaxed">{b.desc}</p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/10">
                  <a
                    href={`https://wa.me/6285979220599?text=${encodeURIComponent(b.waText)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="font-monotech inline-flex w-full items-center justify-center gap-1.5 rounded-lg border border-white/15 bg-white/5 py-2 text-xs font-semibold text-white transition-colors hover:bg-pri hover:border-pri"
                  >
                    <MessageCircle size={13} />
                    <span>Hubungi Cabang {b.city.split(" ")[0]}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col gap-2 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Gudang Komputer. Semua hak dilindungi.</p>
          <div className="flex gap-4">
            <a
              href="https://gudangkomputer.web.id/about"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Syarat Layanan
            </a>
            <a
              href="https://gudangkomputer.web.id/about"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Kebijakan Privasi
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
