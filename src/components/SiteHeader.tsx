import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, Search, X, Zap } from "lucide-react";

type SiteHeaderProps = {
  query?: string;
  onQueryChange?: (value: string) => void;
};

const WA_LINK =
  "https://wa.me/6285979220599?text=" +
  encodeURIComponent("Halo Gudang Komputer, saya mau cek estimasi harga hardware");

export function SiteHeader({ query: propQuery, onQueryChange }: SiteHeaderProps) {
  const navigate = useNavigate();
  const routerState = useRouterState();
  const pathname = routerState.location.pathname;
  const isJual = pathname === "/jual" || pathname === "/";
  const [localQuery, setLocalQuery] = useState("");
  const query = propQuery ?? localQuery;

  const handleQueryChange = (value: string) => {
    onQueryChange?.(value);
    setLocalQuery(value);
  };

  const handleSearchSubmit = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (isJual) {
      onQueryChange?.(query);
      const el = document.getElementById("katalog-buyback");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      const q = query.trim();
      navigate({ to: "/jual", search: q ? { q } : {} });
    }
  };

  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = (active: boolean) =>
    `rounded px-3 py-1.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
      active
        ? "bg-primary-container text-on-primary-container font-bold"
        : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container"
    }`;

  const marqueeItems = [
    "ESTIMASI < 15 MENIT • DANA CAIR INSTAN",
    "3 DEPO CABANG: CIKARANG (JABAR) • GUNUNGKIDUL (DIY) • LAMPUNG",
    "TERIMA SEGALA KONDISI: NORMAL, RUSAK, MINUS & MATOT",
    "SANITASI MILITER (MILITARY DATA WIPE) 100% AMAN AUDIT ISO",
    "LELANG & LIKUIDASI PC KANTOR / INSTANSI SE-INDONESIA",
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-surface-container bg-surface/95 backdrop-blur-md">
      {/* Top Ticker Bar */}
      <div className="overflow-hidden bg-surface-container-lowest border-b border-surface-container py-1.5 text-on-surface-variant text-[11px] font-monotech">
        <div className="flex w-max animate-marquee items-center gap-10">
          {[...marqueeItems, ...marqueeItems].map((txt, i) => (
            <span key={i} className="inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-primary-container" />
              <span>{txt}</span>
            </span>
          ))}
        </div>
      </div>

      {/* Main Navbar */}
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link to="/jual" className="flex shrink-0 items-center gap-2" aria-label="Gudang Komputer">
          <div className="rounded-lg bg-white p-1 shadow-sm">
            <img
              src="/gudangkomputer-logo.png"
              alt="Gudang Komputer Logo"
              className="h-8 w-auto object-contain"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigasi Utama">
          <Link to="/jual" className={navLinkClass(isJual)}>
            Beranda
          </Link>
          <a href="/jual#katalog-buyback" className={navLinkClass(false)}>
            Kategori
          </a>
          <a href="/jual#cara-kerja" className={navLinkClass(false)}>
            Cara Kerja
          </a>
          <a href="/jual#lokasi-depo" className={navLinkClass(false)}>
            3 Depo Cabang
          </a>
          <Link to="/berita" className={navLinkClass(pathname.startsWith("/berita"))}>
            Berita Acara
          </Link>
          <Link to="/jual/form" className={navLinkClass(pathname.startsWith("/jual/form"))}>
            Form Taksiran
          </Link>
        </nav>

        {/* Search Bar & Actions */}
        <div className="flex items-center gap-2.5">
          {/* Desktop Search */}
          <form onSubmit={handleSearchSubmit} className="relative hidden md:block w-48 lg:w-64">
            <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" />
            <input
              value={query}
              onChange={(e) => handleQueryChange(e.target.value)}
              placeholder="Cari hardware..."
              className="w-full rounded-md border border-surface-container-high bg-surface-container-low py-1.5 pl-8 pr-3 text-xs text-on-surface placeholder:text-outline outline-none focus:border-primary-container"
            />
          </form>

          {/* Mobile Search Toggle */}
          <button
            type="button"
            onClick={() => {
              setSearchOpen((v) => !v);
              setMenuOpen(false);
            }}
            className="flex h-9 w-9 items-center justify-center rounded border border-surface-container-high bg-surface-container text-on-surface md:hidden"
            aria-label="Cari hardware"
          >
            {searchOpen ? <X size={16} /> : <Search size={16} />}
          </button>

          {/* Primary CTA Button */}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded bg-primary-container px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-secondary-container hover:shadow-[0_0_15px_rgba(255,94,20,0.4)]"
          >
            <Zap size={14} />
            <span className="hidden sm:inline">Cek Harga Instan</span>
            <span className="sm:hidden">Cek Harga</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => {
              setMenuOpen((v) => !v);
              setSearchOpen(false);
            }}
            className="flex h-9 w-9 items-center justify-center rounded border border-surface-container-high bg-surface-container text-on-surface lg:hidden"
            aria-label="Menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {searchOpen && (
        <div className="border-t border-surface-container bg-surface-container-low px-4 py-3 md:hidden">
          <form onSubmit={handleSearchSubmit} className="flex gap-2">
            <input
              value={query}
              onChange={(e) => handleQueryChange(e.target.value)}
              placeholder="Cari tipe laptop, VGA, mobo..."
              className="w-full rounded border border-surface-container-high bg-surface-container py-2 pl-3 pr-3 text-xs text-on-surface outline-none focus:border-primary-container"
            />
            <button
              type="submit"
              className="shrink-0 rounded bg-primary-container px-4 text-xs font-bold text-white uppercase"
            >
              Cari
            </button>
          </form>
        </div>
      )}

      {/* Mobile Drawer Navigation */}
      {menuOpen && (
        <nav className="border-t border-surface-container bg-surface-container-lowest px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-1.5 text-xs font-semibold uppercase tracking-wider">
            <Link
              to="/jual"
              onClick={() => setMenuOpen(false)}
              className="rounded p-2.5 text-on-surface hover:bg-surface-container"
            >
              Beranda
            </Link>
            <a
              href="/jual#katalog-buyback"
              onClick={() => setMenuOpen(false)}
              className="rounded p-2.5 text-on-surface hover:bg-surface-container"
            >
              Kategori Diterima
            </a>
            <a
              href="/jual#cara-kerja"
              onClick={() => setMenuOpen(false)}
              className="rounded p-2.5 text-on-surface hover:bg-surface-container"
            >
              Cara Kerja Transparan
            </a>
            <a
              href="/jual#lokasi-depo"
              onClick={() => setMenuOpen(false)}
              className="rounded p-2.5 text-on-surface hover:bg-surface-container"
            >
              3 Depo Cabang (Cikarang, GK, Lampung)
            </a>
            <Link
              to="/berita"
              onClick={() => setMenuOpen(false)}
              className="rounded p-2.5 text-on-surface hover:bg-surface-container"
            >
              Berita Acara Transaksi
            </Link>
            <Link
              to="/jual/form"
              onClick={() => setMenuOpen(false)}
              className="rounded p-2.5 text-primary-container bg-primary-container/10 font-bold"
            >
              Form Pengajuan Taksiran →
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
