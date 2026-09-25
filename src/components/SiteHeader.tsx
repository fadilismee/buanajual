import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, MessageCircle, Search, X } from "lucide-react";

type SiteHeaderProps = {
  query?: string;
  onQueryChange?: (value: string) => void;
};

const WA_LINK =
  "https://wa.me/6285979220599?text=" +
  encodeURIComponent("Halo Gudang Komputer, saya ingin tanya-tanya soal jual hardware bekas");

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
    } else {
      const q = query.trim();
      navigate({ to: "/jual", search: q ? { q } : {} });
    }
  };

  const [searchOpen, setSearchOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = (active: boolean) =>
    `rounded-lg px-3 py-2 text-[13px] font-medium transition-colors ${
      active ? "bg-pri/10 text-pri" : "text-black/70 hover:bg-black/5 hover:text-black"
    }`;

  const marqueeItems = [
    "Konsultasi Gratis — Chat WA 0859-7922-0599 →",
    "Jual Rusak? Laptop 500rb–2,5jt • VGA • Mobo — Estimasi Cepat Via WA →",
    "3 Lokasi Cabang: Gunungkidul (DIY) • Lampung • Cikarang (Jabar) →",
    "Harga Terbaik & Transparan — Cek Price List Sekarang →",
  ];

  const searchInput = (
    <div className="relative w-full">
      <Search
        size={16}
        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-black/40"
      />
      <input
        value={query}
        onChange={(e) => handleQueryChange(e.target.value)}
        placeholder="Cari seri: RTX 3060, H61 Matot, ThinkPad..."
        aria-label="Cari hardware"
        className="h-10 w-full rounded-full border border-black/10 bg-muted/50 pl-9 pr-4 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-pri/40 focus:bg-white focus:ring-2 focus:ring-pri/20"
      />
    </div>
  );

  return (
    <header className="sticky top-0 z-40 w-full">
      {/* Top bar — running text CTA, hover pause */}
      <div className="overflow-hidden bg-[#0f0f0f] text-white">
        <div className="group flex items-center whitespace-nowrap py-1.5 text-[11px] tracking-wide sm:py-2 sm:text-xs">
          <div className="flex w-max animate-marquee items-center gap-8 group-hover:[animation-play-state:paused] sm:gap-10 [animation-duration:28s]">
            {[...marqueeItems, ...marqueeItems].map((txt, i) => (
              <span key={`${txt}-${i}`} className="px-2 text-white/80">
                {txt}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="border-b border-black/10 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 lg:gap-5">
          <Link
            to="/jual"
            className="flex shrink-0 items-center gap-2"
            aria-label="Gudang Komputer — beranda"
          >
            <img
              src="/Buanacomputer-logo.png"
              alt="Gudang Komputer"
              className="h-8 w-auto object-contain"
              loading="eager"
            />
            <span className="hidden text-[15px] font-bold tracking-tight text-black sm:block">
              GUDANG<span className="font-light"> KOMPUTER</span>
            </span>
          </Link>

          <nav
            className="hidden items-center gap-1 text-[13px] lg:flex"
            aria-label="Navigasi utama"
          >
            <Link to="/jual" className={navLinkClass(isJual)}>
              Beranda
            </Link>
            <Link to="/jual/form" className={navLinkClass(pathname.startsWith("/jual/form"))}>
              Ajukan Jual
            </Link>
            <Link to="/berita" className={navLinkClass(pathname.startsWith("/berita"))}>
              Berita Acara
            </Link>
            <a href="#kontak" className={navLinkClass(false)}>
              Kontak
            </a>
          </nav>

          {/* Desktop Search */}
          <form onSubmit={handleSearchSubmit} className="mx-2 hidden max-w-md flex-1 lg:flex">
            {searchInput}
          </form>

          {/* Mobile Spacer */}
          <div className="flex-1 lg:hidden" />

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => {
                setSearchOpen((v) => !v);
                setMenuOpen(false);
              }}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-black/70 transition-colors hover:bg-black hover:text-white lg:hidden"
              aria-label={searchOpen ? "Tutup pencarian" : "Buka pencarian"}
              aria-expanded={searchOpen}
            >
              {searchOpen ? <X size={18} /> : <Search size={18} />}
            </button>

            <a
              href={WA_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-pri px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-pri-container sm:px-4"
            >
              <MessageCircle size={15} />
              <span className="hidden sm:inline">Chat WA</span>
            </a>

            {/* Mobile menu button */}
            <button
              type="button"
              onClick={() => {
                setMenuOpen((v) => !v);
                setSearchOpen(false);
              }}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-black/70 transition-colors hover:bg-black hover:text-white lg:hidden"
              aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile slide-down navigation drawer */}
        {menuOpen && (
          <div className="border-t border-black/10 bg-white px-4 py-4 shadow-lg lg:hidden">
            <nav
              className="flex flex-col gap-1 text-sm font-medium text-black/80"
              aria-label="Navigasi mobile"
            >
              <Link
                to="/jual"
                onClick={() => setMenuOpen(false)}
                className={`flex items-center justify-between rounded-lg px-3 py-2.5 transition-colors ${
                  isJual ? "bg-pri/10 text-pri" : "hover:bg-black/5 hover:text-black"
                }`}
              >
                <span>Beranda</span>
                <span className="text-xs text-muted-foreground">Buyback →</span>
              </Link>
              <Link
                to="/jual/form"
                onClick={() => setMenuOpen(false)}
                className={`flex items-center justify-between rounded-lg px-3 py-2.5 transition-colors ${
                  pathname.startsWith("/jual/form")
                    ? "bg-pri/10 text-pri"
                    : "hover:bg-black/5 hover:text-black"
                }`}
              >
                <span>Ajukan Jual</span>
                <span className="text-xs text-muted-foreground">Form →</span>
              </Link>
              <Link
                to="/berita"
                onClick={() => setMenuOpen(false)}
                className={`flex items-center justify-between rounded-lg px-3 py-2.5 transition-colors ${
                  pathname.startsWith("/berita")
                    ? "bg-pri/10 text-pri"
                    : "hover:bg-black/5 hover:text-black"
                }`}
              >
                <span>Berita Acara</span>
                <span className="text-xs text-muted-foreground">Arsip →</span>
              </Link>
              <a
                href="#kontak"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between rounded-lg px-3 py-2.5 hover:bg-black/5 hover:text-black"
              >
                <span>3 Lokasi Cabang</span>
                <span className="text-xs text-muted-foreground">
                  Gunungkidul • Lampung • Cikarang →
                </span>
              </a>
            </nav>
          </div>
        )}
      </div>

      {/* Mobile search drawer */}
      {searchOpen && (
        <div className="border-b border-black/10 bg-white px-4 py-3 shadow-sm lg:hidden">
          <form onSubmit={handleSearchSubmit} className="flex gap-2">
            {searchInput}
            <button
              type="submit"
              className="shrink-0 rounded-full bg-pri px-4 text-sm font-semibold text-white transition-colors hover:bg-pri-container"
            >
              Cari
            </button>
          </form>
        </div>
      )}
    </header>
  );
}
