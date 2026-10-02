import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Zap } from "lucide-react";

const WA_LINK =
  "https://wa.me/6285979220599?text=" +
  encodeURIComponent("Halo Gudang Komputer, saya mau cek estimasi harga hardware");

const NAV = [
  { label: "Galeri", href: "/jual#galeri" },
  { label: "Cara Kerja", href: "/jual#cara-kerja" },
  { label: "Testimoni", href: "/jual#testimoni" },
  { label: "Depo", href: "/jual#lokasi-depo" },
  { label: "FAQ", href: "/jual#faq" },
];

export function SiteHeader() {
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;
  const isJual = pathname === "/jual" || pathname === "/";
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-[1080px] items-center justify-between gap-4 px-5 py-3 md:px-8">
        <Link to="/jual" className="flex shrink-0 items-center gap-2.5" aria-label="Gudang Komputer">
          <img
            src="/gudangkomputer-logo.png"
            alt="Gudang Komputer Logo"
            className="h-8 w-8 rounded-lg bg-white object-contain p-0.5"
          />
          <span className="flex flex-col leading-none">
            <span className="text-sm font-extrabold uppercase tracking-tight text-white">
              Gudang Komputer
            </span>
            <span className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.18em] text-primary-container">
              Buyback Hardware
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigasi Utama">
          <Link
            to="/jual"
            className={`rounded-md px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
              isJual ? "text-white" : "text-white/60 hover:text-white"
            }`}
          >
            Beranda
          </Link>
          {NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="rounded-md px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white/60 transition-colors hover:text-white"
            >
              {item.label}
            </a>
          ))}
          <Link
            to="/berita"
            className={`rounded-md px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
              pathname.startsWith("/berita") ? "text-white" : "text-white/60 hover:text-white"
            }`}
          >
            Berita
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-primary-container px-4 py-2 text-xs font-bold uppercase tracking-wider text-white transition-colors hover:bg-secondary-container"
          >
            <Zap size={14} />
            <span className="hidden sm:inline">Cek Harga</span>
            <span className="sm:hidden">Cek</span>
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 text-white lg:hidden"
            aria-label="Menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-white/10 px-5 py-3 lg:hidden">
          <div className="flex flex-col text-xs font-semibold uppercase tracking-wider">
            <Link
              to="/jual"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2.5 text-white hover:bg-white/5"
            >
              Beranda
            </Link>
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-3 py-2.5 text-white/70 hover:bg-white/5 hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <Link
              to="/berita"
              onClick={() => setMenuOpen(false)}
              className="rounded-lg px-3 py-2.5 text-white/70 hover:bg-white/5 hover:text-white"
            >
              Berita Acara
            </Link>
            <Link
              to="/jual/form"
              onClick={() => setMenuOpen(false)}
              className="mt-1 rounded-lg bg-primary-container px-3 py-2.5 text-center font-bold text-white"
            >
              Form Taksiran →
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
