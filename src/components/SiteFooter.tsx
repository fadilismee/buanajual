import { Link } from "@tanstack/react-router";
import { ShieldCheck } from "lucide-react";

// GANTI FOTO ASLI: taruh file di public/img lalu ganti URL di bawah,
// mis. "/img/tim-kurir.png" (PNG transparan paling rapi).
const FOOTER_PROMO_IMG = "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80&auto=format&fit=crop";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto w-full max-w-[1080px] px-5 py-12 md:px-8">
        {/* ============ PROMO CARD (add-ons promotion, gaya idwebhost) ============ */}
        <div className="relative mb-10 overflow-hidden rounded-2xl border border-outline-variant bg-surface-container">
          <div className="grid items-center gap-6 p-6 md:grid-cols-2 md:p-8">
            <div className="relative order-2 flex min-h-[240px] items-end justify-center overflow-hidden rounded-xl bg-primary-container/10 md:order-1">
              <div className="blob-shape absolute bottom-2 left-1/2 h-52 w-60 -translate-x-1/2 bg-primary-container/25" aria-hidden="true" />
              <img
                alt="Tim kurir Gudang Komputer siap menjemput hardware"
                className="relative h-56 w-auto object-cover object-top"
                src={FOOTER_PROMO_IMG}
                loading="lazy"
                style={{ maskImage: "linear-gradient(to bottom, black 85%, transparent 100%)", WebkitMaskImage: "linear-gradient(to bottom, black 85%, transparent 100%)" }}
              />
              <span className="animate-float absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-xl bg-primary-container px-3 py-2 text-[10px] font-bold uppercase tracking-[0.12em] text-white shadow-xl">
                <span className="material-symbols-outlined text-[14px]">local_shipping</span>
                Jemput gratis
              </span>
              <span className="animate-float-slow absolute bottom-3 right-3 rounded-xl border border-white/10 bg-black/70 px-3 py-2 shadow-xl backdrop-blur-md">
                <span className="block text-[10px] font-bold uppercase tracking-[0.12em] text-white/60">
                  Hardware aman
                </span>
                <span className="block text-sm font-extrabold text-emerald-400">
                  100% diasuransikan
                </span>
              </span>
            </div>
            <div className="order-1 md:order-2">
              <p className="text-xl font-extrabold uppercase tracking-tight text-on-surface md:text-2xl">
                Mager keluar? Kami yang jemput.
              </p>
              <p className="mt-2 text-xs leading-relaxed text-on-surface-variant md:text-sm">
                Jabodetabek, DIY &amp; Lampung — gratis, barang diasuransikan
                sampai depo. Cukup chat, kurir datang.
              </p>
              <a
                href="https://wa.me/6285979220599?text=Halo%20Gudang%20Komputer,%20saya%20mau%20jadwalkan%20penjemputan%20hardware"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 rounded-lg bg-primary-container px-5 py-3 text-[11px] font-extrabold uppercase tracking-wider text-white transition-colors hover:bg-secondary-container"
              >
                Jadwalkan penjemputan
                <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
              </a>
            </div>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <img
                src="/gudangkomputer-logo.png"
                alt="Gudang Komputer Logo"
                className="h-8 w-8 rounded-lg bg-white object-contain p-0.5"
                loading="lazy"
              />
              <span className="text-sm font-extrabold uppercase tracking-tight">
                Gudang Komputer
              </span>
            </div>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/60">
              Pusat buyback hardware — laptop mati/normal, GPU artefak, dan
              lelang komputer kantor. Diagnosa terbuka, dana cair instan.
            </p>
            <p className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-bold text-emerald-400">
              <ShieldCheck size={13} />
              ISO 14001:2015 Data Wipe Certified
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary-container">
              Layanan
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-white/60">
              <li>
                <Link to="/jual" className="transition-colors hover:text-white">
                  Buyback Hardware
                </Link>
              </li>
              <li>
                <Link to="/jual/form" className="transition-colors hover:text-white">
                  Form Taksiran Online
                </Link>
              </li>
              <li>
                <Link to="/berita" className="transition-colors hover:text-white">
                  Berita Acara Transaksi
                </Link>
              </li>
              <li>
                <a href="/jual#lokasi-depo" className="transition-colors hover:text-white">
                  3 Depo Cabang
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-[11px] font-bold uppercase tracking-[0.2em] text-primary-container">
              Hubungi Kami
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-white/60">
              <li>
                <a
                  href="https://wa.me/6285979220599"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-white"
                >
                  WA: 0859-7922-0599
                </a>
              </li>
              <li>Senin – Sabtu: 08.30 – 17.00 WIB</li>
              <li>Minggu: janjian online via WA</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-5 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} PT Gudang Komputer Nusantara.</p>
          <p>Cikarang • Gunungkidul • Lampung</p>
        </div>
      </div>
    </footer>
  );
}
