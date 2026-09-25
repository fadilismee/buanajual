import { createFileRoute, Link } from "@tanstack/react-router";
import type { RefObject } from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft,
  Banknote,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Cpu,
  FileText,
  History,
  Image as ImageIcon,
  Laptop,
  MapPin,
  MessageCircle,
  Receipt,
  Search,
  ShieldCheck,
  Truck,
  X,
  Zap,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { FloatingWa } from "@/components/FloatingWa";
import { CountUp, Reveal } from "@/components/Reveal";
import {
  archiveLogs,
  beritaEntries,
  beritaStats,
  formatDate,
  formatDateShort,
  formatRp,
  type ArchiveLog,
  type BeritaEntry,
  type BeritaPhoto,
} from "@/data/beritaAcara";

export const Route = createFileRoute("/berita/")({
  head: () => ({
    meta: [
      { title: "Berita Acara Transaksi — Gudang Komputer Bantul" },
      {
        name: "description",
        content:
          "Daftar berita acara buyback Gudang Komputer: siapa yang menjual, barang apa yang laris, bukti transfer, dan rincian dana yang sudah cair. Transparan & bisa diverifikasi.",
      },
      { property: "og:title", content: "Berita Acara Transaksi — Gudang Komputer" },
      {
        property: "og:description",
        content:
          "Riwayat transparan transaksi buyback: penjual, barang, foto bukti transfer, dan total dana yang sudah dicairkan.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://gudangkomputer.web.id/berita" },
    ],
    links: [{ rel: "canonical", href: "https://gudangkomputer.web.id/berita" }],
  }),
  component: BeritaAcaraPage,
});

const WA_LINK =
  "https://wa.me/6285979220599?text=" +
  encodeURIComponent("Halo Gudang Komputer, saya mau lihat contoh berita acara jual hardware");

const photoKindMeta: Record<
  BeritaPhoto["kind"],
  { label: string; icon: typeof ImageIcon; chipClass: string }
> = {
  unit: {
    label: "Foto Unit",
    icon: ImageIcon,
    chipClass: "bg-pri/10 text-pri",
  },
  transfer: {
    label: "Bukti Transfer",
    icon: Receipt,
    chipClass: "bg-emerald-50 text-emerald-700",
  },
  doc: {
    label: "Dokumen",
    icon: FileText,
    chipClass: "bg-sec/10 text-sec",
  },
};

/* ------------------------------------------------------------------ */
/* Lightbox fullscreen dengan animasi fade+scale & navigasi keyboard   */
/* ------------------------------------------------------------------ */
function Lightbox({
  photos,
  index,
  onClose,
  onNavigate,
}: {
  photos: BeritaPhoto[];
  index: number;
  onClose: () => void;
  onNavigate: (i: number) => void;
}) {
  const current = photos[index];

  const prev = useCallback(() => {
    onNavigate((index - 1 + photos.length) % photos.length);
  }, [index, photos.length, onNavigate]);

  const next = useCallback(() => {
    onNavigate((index + 1) % photos.length);
  }, [index, photos.length, onNavigate]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  if (!current) return null;
  const meta = photoKindMeta[current.kind];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Foto: ${current.caption}`}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Tutup"
        className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25"
      >
        <X size={20} />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        aria-label="Foto sebelumnya"
        className="absolute left-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 sm:left-6"
      >
        <ChevronLeft size={22} />
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        aria-label="Foto berikutnya"
        className="absolute right-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/25 sm:right-6"
      >
        <ChevronRight size={22} />
      </button>

      <figure
        className="max-h-[85vh] w-full max-w-3xl animate-in zoom-in-95 fade-in duration-250"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={current.url}
          alt={current.caption}
          className="mx-auto max-h-[70vh] w-auto rounded-xl object-contain shadow-2xl"
        />
        <figcaption className="mt-4 text-center">
          <span
            className={`font-monotech inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider ${meta.chipClass}`}
          >
            <meta.icon size={12} />
            {meta.label} · {index + 1}/{photos.length}
          </span>
          <p className="mt-2 text-sm font-medium text-white">{current.caption}</p>
        </figcaption>
      </figure>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Kartu galeri foto per entri                                         */
/* ------------------------------------------------------------------ */
function EntryPhotos({ photos, onOpen }: { photos: BeritaPhoto[]; onOpen: (i: number) => void }) {
  if (photos.length === 0) return null;

  return (
    <div className="space-y-2">
      <div className="font-monotech flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-outline">
        <ImageIcon size={13} />
        Lampiran Foto ({photos.length})
      </div>
      <div className="grid grid-cols-3 gap-2">
        {photos.map((p, i) => {
          const meta = photoKindMeta[p.kind];
          return (
            <button
              key={`${p.url}-${i}`}
              type="button"
              onClick={() => onOpen(i)}
              aria-label={`Buka foto: ${p.caption}`}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg border border-outline-variant/40 bg-surface-container transition-all hover:border-pri/40 hover:shadow-md focus-visible:outline-2 focus-visible:outline-pri"
            >
              <img
                src={p.url}
                alt={p.caption}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* overlay gelap saat hover */}
              <span className="absolute inset-0 flex flex-col items-center justify-center gap-1 bg-black/0 opacity-0 transition-all duration-300 group-hover:bg-black/45 group-hover:opacity-100">
                <meta.icon size={18} className="text-white" />
                <span className="font-monotech px-1 text-center text-[9px] font-semibold uppercase tracking-wider text-white">
                  {meta.label}
                </span>
              </span>
              {/* chip kecil di pojok */}
              <span
                className={`font-monotech absolute top-1 left-1 rounded px-1 py-px text-[8px] font-bold uppercase tracking-wider ${meta.chipClass}`}
              >
                {meta.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Satu kartu berita acara (konten tanpa animasi reveal — reveal di     */
/* break sticky bila dipakai sebagai pembungkus position:sticky).       */
/* ------------------------------------------------------------------ */
function BeritaCard({
  entry,
  index,
  onOpenPhoto,
}: {
  entry: BeritaEntry;
  index: number;
  onOpenPhoto: (entryIndex: number, photoIndex: number) => void;
}) {
  return (
    <article className="rounded-2xl border border-outline-variant/40 bg-surface-lowest shadow-sm transition-colors duration-300 hover:border-pri/30">
      {/* Header kartu */}
      <header className="flex flex-wrap items-start justify-between gap-3 border-b border-surface-container p-4 sm:p-5">
        <div className="space-y-1">
          <div className="font-monotech flex flex-wrap items-center gap-2 text-[11px] text-on-surface-variant">
            <span className="inline-flex items-center gap-1 rounded bg-pri/10 px-1.5 py-0.5 font-semibold text-pri">
              <CalendarDays size={11} />
              {formatDate(entry.date)}
            </span>
            <span className="text-outline">•</span>
            <span className="font-mono">{entry.id.toUpperCase()}</span>
          </div>
          <h3 className="font-heading text-lg font-bold text-on-surface sm:text-xl">
            {entry.seller}
          </h3>
          <p className="font-monotech flex items-center gap-1 text-[11px] text-on-surface-variant">
            <MapPin size={12} className="text-sec" />
            {entry.origin}
          </p>
        </div>

        <div className="flex flex-col items-end gap-1.5">
          <span className="font-monotech inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-700">
            <CheckCircle2 size={12} />
            LUNAS
          </span>
          <span className="font-monotech rounded bg-surface-high px-2 py-0.5 text-[10px] text-on-surface-variant">
            {entry.channel}
          </span>
        </div>
      </header>

      {/* Daftar barang */}
      <div className="space-y-2 p-4 sm:p-5">
        <div className="font-monotech flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-outline">
          <ClipboardList size={13} />
          Barang yang Diserahkan
        </div>
        <ul className="space-y-2">
          {entry.items.map((item, i) => (
            <li
              key={`${entry.id}-item-${i}`}
              className="flex items-start justify-between gap-3 rounded-lg bg-surface-low p-3 transition-colors hover:bg-surface-container/60"
            >
              <div className="min-w-0">
                <p className="text-sm font-semibold text-on-surface">{item.name}</p>
                <span className="font-monotech mt-0.5 inline-block rounded bg-surface-highest px-1.5 py-px text-[10px] font-semibold text-on-surface-variant">
                  {item.grade}
                </span>
              </div>
              <span className="font-heading shrink-0 text-sm font-bold text-pri">
                {formatRp(item.price)}
              </span>
            </li>
          ))}
        </ul>

        {/* Total + payout */}
        <div className="mt-3 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-pri/20 bg-pri/5 p-3">
          <div>
            <span className="font-monotech text-[10px] uppercase tracking-wider text-on-surface-variant">
              Total Dana Dicairkan
            </span>
            <p className="font-heading text-xl font-extrabold tracking-tight text-pri sm:text-2xl">
              {formatRp(entry.total)}
            </p>
          </div>
          <span className="font-monotech inline-flex items-center gap-1.5 rounded-lg bg-surface-lowest px-2.5 py-1.5 text-[11px] font-semibold text-on-surface shadow-sm">
            <Banknote size={14} className="text-emerald-600" />
            {entry.payout}
          </span>
        </div>

        {entry.note && (
          <p className="mt-2 border-l-2 border-sec/40 pl-3 text-[13px] leading-relaxed text-on-surface-variant italic">
            “{entry.note}”
          </p>
        )}

        <div className="pt-2">
          <EntryPhotos photos={entry.photos} onOpen={(pi) => onOpenPhoto(index, pi)} />
        </div>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* Sticky stacking card — LUXURY: layered physical cards               */
/* ------------------------------------------------------------------ */
const STACK_BASE = "6.5rem"; // di bawah sticky header (marquee + navbar)
const LAYER_GAP_PX = 16; // offset per lapis — tepi kartu bawah tetap terlihat

// Spring easing curves untuk feel premium
const SPRING_EASE = "cubic-bezier(0.16, 1, 0.3, 1)";
const SPRING_EASE_OUT = "cubic-bezier(0.05, 0.9, 0.1, 1)";

function StackedCard({
  entry,
  index,
  total,
  depth,
  stackRefs,
  onOpenPhoto,
}: {
  entry: BeritaEntry;
  index: number;
  total: number;
  /** Berapa kartu yang sedang menumpuk di atas kartu ini (0 = paling atas). */
  depth: number;
  stackRefs: RefObject<(HTMLDivElement | null)[]>;
  onOpenPhoto: (entryIndex: number, photoIndex: number) => void;
}) {
  /* Stable ref callback — inline arrow akan di-resolve React tiap render & null-kan ref */
  const bindRef = useCallback(
    (el: HTMLDivElement | null) => {
      stackRefs.current[index] = el;
    },
    [stackRefs, index],
  );

  // Kartu terakhir runway pas agar tidak menabrak / tumpang tindih dengan section berikutnya
  const runway = index === total - 1 ? "40px" : "min(40vh, 360px)";

  // Depth-based visual values
  const isTop = depth === 0;
  const scale = depth > 0 ? Math.max(0.95, 1 - depth * 0.018) : 1;
  const brightness = depth > 0 ? Math.max(0.96, 1 - depth * 0.015) : 1;
  const opacity = depth > 0 ? Math.max(0.92, 1 - depth * 0.02) : 1;

  // Multi-layer shadow system: soft depth shadow for physical deck feel
  const shadowAmbient =
    depth > 0
      ? `0 ${8 + depth * 4}px ${20 + depth * 6}px rgba(16, 24, 40, ${0.06 + depth * 0.015})`
      : "0 4px 16px rgba(16, 24, 40, 0.05)";
  const shadowRim = isTop
    ? "0 0 0 1.5px rgba(0, 80, 203, 0.15), 0 0 24px rgba(0, 80, 203, 0.04)"
    : "0 0 0 1px rgba(16, 24, 40, 0.06)";

  return (
    <div
      ref={bindRef}
      className="sticky will-change-transform group"
      style={{
        top: `calc(${STACK_BASE} + ${index * LAYER_GAP_PX}px)`,
        zIndex: index + 1, // later cards stack on top of earlier cards
        marginBottom: runway,
        transform: `scale(${scale})`,
        transformOrigin: "top center",
        transition: `transform 320ms ${SPRING_EASE}, filter 280ms ${SPRING_EASE_OUT}, opacity 280ms ${SPRING_EASE_OUT}`,
        filter: `brightness(${brightness})`,
        opacity,
      }}
    >
      {/* Badge nomor urut lapis — di atas kartu */}
      <div className="flex items-center justify-between px-1 pb-1.5">
        <span className="font-monotech inline-flex items-center gap-1.5 rounded-full border border-outline-variant/60 bg-surface-lowest px-2.5 py-0.5 text-[10px] font-bold text-on-surface-variant shadow-xs">
          <span className="text-pri">#{String(index + 1).padStart(2, "0")}</span>
          <span className="text-outline">/</span>
          <span>{total}</span>
        </span>
        <span className="font-monotech text-[10px] text-outline">{entry.id.toUpperCase()}</span>
      </div>

      {/* Physical layered card wrapper */}
      <article
        className="relative rounded-2xl overflow-hidden bg-surface-lowest transition-shadow duration-300"
        style={{
          boxShadow: `${shadowAmbient}, ${shadowRim}`,
        }}
      >
        <BeritaCard entry={entry} index={index} onOpenPhoto={onOpenPhoto} />
      </article>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Hero stats                                                          */
/* ------------------------------------------------------------------ */
function BeritaStats() {
  const cards = [
    {
      icon: ClipboardList,
      iconClass: "bg-pri/10 text-pri",
      label: "Berita Acara Terbit",
      value: beritaStats.totalEntries,
      format: (n: number) => `${n.toLocaleString("id-ID")}+`,
      suffix: "dokumen resmi",
    },
    {
      icon: Truck,
      iconClass: "bg-sec/10 text-sec",
      label: "Barang Diterima",
      value: beritaStats.totalItems,
      format: (n: number) => `${n.toLocaleString("id-ID")}+`,
      suffix: "unit & part",
    },
    {
      icon: Zap,
      iconClass: "bg-tertiary/10 text-tertiary",
      label: "Total Nilai Dicairkan",
      value: beritaStats.totalPayout,
      format: (n: number) => formatRp(n),
      suffix: "sejak 2023",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
      {cards.map((c, i) => (
        <Reveal key={c.label} delay={i * 120} from="scale">
          <div className="flex items-center gap-3 rounded-xl border border-outline-variant/40 bg-surface-lowest p-4 shadow-sm transition-all hover:border-pri/30 hover:shadow-md">
            <div
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${c.iconClass}`}
            >
              <c.icon size={22} />
            </div>
            <div className="min-w-0">
              <p className="font-monotech text-[10px] font-semibold uppercase tracking-wider text-on-surface-variant">
                {c.label}
              </p>
              <p className="font-heading truncate text-lg font-extrabold tracking-tight text-on-surface sm:text-xl">
                <CountUp value={c.value} format={c.format} />
              </p>
              <p className="text-[11px] text-outline font-monotech mt-0.5">{c.suffix}</p>
            </div>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Running Ticker Transaksi Live                                       */
/* ------------------------------------------------------------------ */
function LiveTransactionTicker() {
  const recentSnippets = [
    { text: "ASUS Vivobook 14 A412 (Short IC)", price: "Rp 950.000", loc: "Kasihan, Bantul" },
    { text: "VGA Palit GTX 1660 Ti (Artefak)", price: "Rp 750.000", loc: "Potorono" },
    { text: "Lenovo ThinkPad T480 (Lecet Normal)", price: "Rp 2.400.000", loc: "Kota Jogja" },
    { text: "10x PC Kantor Core i5 Gen 8", price: "Rp 10.000.000", loc: "Banguntapan" },
    { text: "Mobo B450M + Ryzen 5 3600", price: "Rp 1.750.000", loc: "Kotagede" },
    { text: "MSI RTX 3070 8GB (No Display)", price: "Rp 1.800.000", loc: "Gamping, Sleman" },
    { text: "Acer Nitro 5 Core i7 (Layar Pecah)", price: "Rp 2.850.000", loc: "Sewon, Bantul" },
  ];

  return (
    <div className="overflow-hidden rounded-xl border border-emerald-200/70 bg-emerald-50/60 p-2.5 sm:p-3 text-emerald-950">
      <div className="flex items-center gap-3">
        <span className="font-monotech inline-flex items-center gap-1.5 shrink-0 rounded-full bg-emerald-600 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-200 animate-pulse" />
          Live Log
        </span>
        <div className="flex w-max animate-marquee items-center gap-8 text-[12px] font-medium group-hover:[animation-play-state:paused] [animation-duration:32s]">
          {[...recentSnippets, ...recentSnippets].map((item, idx) => (
            <span key={idx} className="inline-flex items-center gap-2 whitespace-nowrap">
              <CheckCircle2 size={13} className="text-emerald-600" />
              <span>{item.text}</span>
              <span className="font-heading font-bold text-emerald-800">{item.price}</span>
              <span className="text-emerald-700/70 text-[11px]">({item.loc})</span>
              <span className="text-emerald-400">•</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Database Log 1.200+ Transaksi Lainnya (Search & Filter)             */
/* ------------------------------------------------------------------ */
const categoryTabs: { id: "all" | ArchiveLog["category"]; label: string; icon: typeof Laptop }[] = [
  { id: "all", label: "Semua Kategori (1.240+)", icon: History },
  { id: "laptop", label: "Laptop (520+)", icon: Laptop },
  { id: "vga", label: "VGA Card (310+)", icon: Zap },
  { id: "mobo", label: "Motherboard & CPU (280+)", icon: Cpu },
  { id: "borongan", label: "Borongan Kantor (130+)", icon: Building2 },
];

function ArchiveDatabaseSection() {
  const [selectedCat, setSelectedCat] = useState<"all" | ArchiveLog["category"]>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [showAll, setShowAll] = useState(false);

  const filteredLogs = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return archiveLogs.filter((log) => {
      const matchCat = selectedCat === "all" || log.category === selectedCat;
      const matchQuery =
        !q ||
        log.id.toLowerCase().includes(q) ||
        log.seller.toLowerCase().includes(q) ||
        log.origin.toLowerCase().includes(q) ||
        log.itemsSummary.toLowerCase().includes(q) ||
        log.condition.toLowerCase().includes(q) ||
        log.payoutMethod.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }, [selectedCat, searchQuery]);

  const displayedLogs = showAll ? filteredLogs : filteredLogs.slice(0, 8);

  return (
    <section className="mt-16 space-y-6 rounded-2xl border border-outline-variant/50 bg-surface-lowest p-5 shadow-sm sm:p-8">
      {/* Header section */}
      <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between border-b border-surface-container pb-6">
        <div>
          <div className="font-monotech inline-flex items-center gap-1.5 rounded-full bg-pri/10 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-pri">
            <ShieldCheck size={14} />
            Database Log 1.240+ Transaksi Terverifikasi
          </div>
          <h3 className="font-heading mt-2 text-2xl font-bold text-on-surface sm:text-3xl">
            Pernah Jual Hardware Serupa ke Gudang Komputer?
          </h3>
          <p className="mt-1 max-w-2xl text-sm leading-relaxed text-on-surface-variant">
            Di atas adalah 6 sampel dokumen fisik lengkap. Tabel di bawah memuat riwayat buyback
            tercatat dari total 1.200+ unit yang sudah selesai diverifikasi dan dicairkan.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-xl bg-surface-low px-3 py-2 border border-outline-variant/30 text-xs font-monotech text-on-surface">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          <span>Database Aktif: 2023 — Sekarang</span>
        </div>
      </div>

      {/* Filter Tabs & Search */}
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {categoryTabs.map((tab) => {
            const active = selectedCat === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedCat(tab.id)}
                className={`font-monotech flex shrink-0 items-center gap-1.5 rounded-xl px-3 py-2 text-xs font-semibold transition-all ${
                  active
                    ? "bg-pri text-white shadow-xs"
                    : "bg-surface-low text-on-surface-variant hover:bg-surface-container hover:text-on-surface"
                }`}
              >
                <tab.icon size={14} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        <div className="relative w-full lg:w-72">
          <Search
            size={16}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-outline"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Cari seri: RTX, i5, Matot..."
            aria-label="Cari di database arsip"
            className="w-full rounded-xl border border-outline-variant/50 bg-surface-lowest py-2 pl-9 pr-4 text-xs text-on-surface outline-none placeholder:text-outline focus:border-pri/40 focus:ring-2 focus:ring-pri/20"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              aria-label="Hapus pencarian"
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface"
            >
              <X size={14} />
            </button>
          )}
        </div>
      </div>

      {/* Log list / table */}
      <div className="overflow-hidden rounded-xl border border-outline-variant/40 bg-surface-low">
        <div className="divide-y divide-surface-container">
          {displayedLogs.map((log) => {
            const waQueryUrl =
              `https://wa.me/6285979220599?text=` +
              encodeURIComponent(
                `Halo Gudang Komputer, saya punya hardware serupa dengan arsip ${log.id} (${log.itemsSummary}). Mau tanya taksirannya.`,
              );

            return (
              <div
                key={log.id}
                className="flex flex-col gap-3 p-3.5 sm:p-4 transition-colors hover:bg-surface-lowest sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="min-w-0 space-y-1">
                  <div className="flex flex-wrap items-center gap-2 font-monotech text-[11px] text-on-surface-variant">
                    <span className="font-bold text-pri bg-pri/10 rounded px-1.5 py-0.5">
                      {log.id}
                    </span>
                    <span className="text-outline">•</span>
                    <span>{formatDateShort(log.date)}</span>
                    <span className="text-outline">•</span>
                    <span className="font-medium text-on-surface">{log.seller}</span>
                    <span className="text-outline">({log.origin})</span>
                  </div>
                  <h4 className="font-heading text-sm font-semibold text-on-surface truncate">
                    {log.itemsSummary}
                  </h4>
                  <div className="flex flex-wrap items-center gap-2 text-[11px] text-on-surface-variant">
                    <span className="rounded bg-surface-high px-2 py-0.5 font-monotech text-[10px] text-on-surface-variant">
                      {log.condition}
                    </span>
                    <span className="font-monotech text-[10px] text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded font-bold">
                      {log.payoutMethod}
                    </span>
                  </div>
                </div>

                <div className="flex shrink-0 items-center justify-between sm:flex-col sm:items-end gap-2 pt-2 sm:pt-0 border-t border-surface-container sm:border-0">
                  <span className="font-heading text-base font-bold text-pri sm:text-lg">
                    {formatRp(log.amount)}
                  </span>
                  <a
                    href={waQueryUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="font-monotech inline-flex items-center gap-1 rounded-lg border border-pri/30 bg-surface-lowest px-2.5 py-1 text-[11px] font-semibold text-pri transition-colors hover:bg-pri hover:text-white"
                  >
                    <MessageCircle size={12} />
                    <span>Taksir Serupa</span>
                  </a>
                </div>
              </div>
            );
          })}

          {displayedLogs.length === 0 && (
            <div className="p-8 text-center">
              <p className="font-heading text-sm font-semibold text-on-surface">
                Tidak ada riwayat yang cocok dengan "{searchQuery}"
              </p>
              <p className="mt-1 text-xs text-on-surface-variant">
                Coba cari dengan nama brand (Asus, Lenovo, Gigabyte, Palit) atau kondisi (Matot,
                Artefak).
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCat("all");
                }}
                className="font-monotech mt-3 inline-flex items-center gap-1 text-xs font-semibold text-pri hover:underline"
              >
                Reset Filter Pencarian
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Footer / Load More info */}
      <div className="flex flex-col items-center justify-between gap-3 sm:flex-row pt-2">
        <p className="font-monotech text-xs text-on-surface-variant text-center sm:text-left">
          Menampilkan <strong className="text-on-surface">{displayedLogs.length}</strong> dari{" "}
          <strong className="text-on-surface">{archiveLogs.length} sampel terbaru</strong> (dari
          1.240+ total arsip fisik di lab Bantul).
        </p>
        {filteredLogs.length > 8 && (
          <button
            type="button"
            onClick={() => setShowAll((v) => !v)}
            className="font-heading rounded-xl border border-outline-variant/60 bg-surface-low px-4 py-2 text-xs font-bold text-on-surface transition-colors hover:bg-surface-high"
          >
            {showAll
              ? "Tampilkan Lebih Sedikit ↑"
              : `Buka ${filteredLogs.length - 8} Riwayat Lainnya ↓`}
          </button>
        )}
      </div>

      {/* Trust guarantees bar */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 pt-4 border-t border-surface-container">
        <div className="flex items-start gap-2.5 rounded-xl bg-surface-low p-3">
          <ShieldCheck size={18} className="shrink-0 text-pri mt-0.5" />
          <div>
            <p className="font-heading text-xs font-bold text-on-surface">Pasti Cair di Tempat</p>
            <p className="text-[11px] text-on-surface-variant">
              Tanpa tempo atau ditunda. Transfer real-time saat selesai diagnosa.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-2.5 rounded-xl bg-surface-low p-3">
          <Receipt size={18} className="shrink-0 text-sec mt-0.5" />
          <div>
            <p className="font-heading text-xs font-bold text-on-surface">
              Berita Acara (BAST) Sah
            </p>
            <p className="text-[11px] text-on-surface-variant">
              Tercatat invoice resmi & dokumen serah terima fisik bermaterai.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-2.5 rounded-xl bg-surface-low p-3">
          <FileText size={18} className="shrink-0 text-emerald-600 mt-0.5" />
          <div>
            <p className="font-heading text-xs font-bold text-on-surface">Military Data Wipe</p>
            <p className="text-[11px] text-on-surface-variant">
              Format tuntas HDD/SSD tanpa sisa sebelum barang dibongkar kanibal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Stack Progress Indicator — fixed side dots, highlight kartu atas,   */
/* klik scroll ke kartu. Hanya desktop (md+).                         */
/* ------------------------------------------------------------------ */
function StackProgressIndicator({
  total,
  depths,
  scrollToIndex,
}: {
  total: number;
  depths: number[];
  scrollToIndex: (index: number) => void;
}) {
  // Cari indeks kartu yang sedang "top" (depth === 0) — jika multiple, yang teratas (index terkecil)
  const topIndex = depths.findIndex((d) => d === 0);
  const activeIndex = topIndex >= 0 ? topIndex : 0;

  return (
    <nav
      className="hidden md:block fixed right-6 top-1/2 -translate-y-1/2 z-30 flex flex-col items-center gap-1 px-2 py-4 rounded-2xl bg-surface-lowest/60 backdrop-blur-xl border border-outline-variant/30 shadow-xl"
      aria-label="Navigasi tumpukan berita acara"
      style={{
        boxShadow: "0 8px 32px rgba(16,24,40,0.12), 0 0 0 1px rgba(255,255,255,0.1) inset",
      }}
    >
      <span className="font-monotech text-[9px] font-bold uppercase tracking-widest text-on-surface-variant mb-2 px-1">
        Arsip
      </span>
      {Array.from({ length: total }, (_, i) => (
        <button
          key={i}
          type="button"
          onClick={() => scrollToIndex(i)}
          aria-label={`Lihat berita acara ${i + 1} dari ${total}`}
          aria-current={i === activeIndex ? "true" : "false"}
          className="relative group flex flex-col items-center gap-1 p-1.5 rounded-xl transition-all duration-300 hover:bg-pri/5"
          style={{
            transform: i === activeIndex ? "scale(1.15)" : "scale(1)",
          }}
        >
          <span
            className="relative z-10 block h-2.5 w-2.5 rounded-full transition-all duration-400"
            style={{
              background: i === activeIndex ? "var(--pri)" : "rgba(16,24,40,0.25)",
              boxShadow:
                i === activeIndex
                  ? "0 0 0 4px rgba(0,80,203,0.2), 0 0 16px rgba(0,80,203,0.4)"
                  : "none",
              transform: i === activeIndex ? "scale(1)" : "scale(0.85)",
            }}
          />
          <span
            className="absolute right-full mr-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap font-monotech text-[10px] font-bold text-on-surface bg-surface-lowest px-2 py-0.5 rounded shadow-lg border border-outline-variant/30"
            style={{ transform: "translateX(-8px)" }}
          >
            {beritaEntries[i]?.seller ?? `Item ${i + 1}`}
          </span>
        </button>
      ))}
      <span className="font-monotech text-[9px] font-bold uppercase tracking-widest text-on-surface-variant mt-2 px-1">
        {total} total
      </span>
    </nav>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */
function BeritaAcaraPage() {
  const [lightbox, setLightbox] = useState<{ entry: number; photo: number } | null>(null);
  const stackRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [depths, setDepths] = useState<number[]>(() => beritaEntries.map(() => 0));

  const openPhoto = (entry: number, photo: number) => setLightbox({ entry, photo });
  const closeLightbox = () => setLightbox(null);

  const activePhotos = lightbox ? (beritaEntries[lightbox.entry]?.photos ?? []) : [];

  /* Scroll ke kartu tertentu via side indicator */
  const scrollToIndex = useCallback((index: number) => {
    const el = stackRefs.current[index];
    if (el) {
      const headerHeight = 104 + index * 16; // STACK_BASE(6.5rem=104px) + LAYER_GAP_PX
      const top = el.getBoundingClientRect().top + window.scrollY - headerHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
  }, []);

  /* Hitung berapa kartu yang sedang stuck di atas kartu lain → depth visual */
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const stuck = stackRefs.current.map((el) => {
        if (!el) return false;
        const topPx = parseFloat(getComputedStyle(el).top);
        if (Number.isNaN(topPx)) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= topPx + 3 && rect.bottom > topPx;
      });
      const next = beritaEntries.map((_, i) => {
        let d = 0;
        for (let j = i + 1; j < stuck.length; j++) if (stuck[j]) d++;
        return d;
      });
      setDepths((prev) => (prev.every((v, i) => v === next[i]) ? prev : next));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="min-h-screen bg-surface">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-outline-variant/40 bg-surface-lowest">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-pri/6 via-transparent to-sec/8" />
        <div className="relative mx-auto max-w-5xl px-4 py-10 sm:py-14">
          <Reveal>
            <Link
              to="/jual"
              className="font-monotech mb-5 inline-flex items-center gap-1.5 rounded-full border border-outline-variant/50 bg-surface-low px-3 py-1 text-[12px] text-on-surface-variant transition-colors hover:border-pri/40 hover:text-pri"
            >
              <ArrowLeft size={13} />
              Kembali ke Price List
            </Link>
            <div className="font-monotech mb-2 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-pri">
              <ShieldCheck size={14} />
              Dokumentasi Transparan
            </div>
            <h1 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-on-surface sm:text-4xl lg:text-5xl">
              Berita Acara
              <span className="text-pri"> Transaksi Buyback</span>
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-on-surface-variant sm:text-lg">
              Setiap unit yang kami beli dicatat resmi:{" "}
              <strong className="text-on-surface">siapa penjualnya</strong>,{" "}
              <strong className="text-on-surface">barang apa saja</strong> yang diserahkan, foto
              bukti, hingga transfer yang sudah cair. Bisa diverifikasi — tanpa drama.
            </p>
          </Reveal>

          <div className="mt-8">
            <BeritaStats />
          </div>
        </div>
      </section>

      {/* Timeline daftar berita acara */}
      <section className="mx-auto w-full max-w-5xl px-4 py-10 sm:py-14">
        <Reveal>
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <div>
              <span className="font-monotech text-[11px] font-semibold uppercase tracking-widest text-pri">
                Arsip & Sampel Dokumen
              </span>
              <h2 className="font-heading mt-1 text-2xl font-bold text-on-surface sm:text-3xl">
                Riwayat yang Sudah Dicairkan
              </h2>
            </div>
            <span className="font-monotech rounded-full bg-surface-container px-3 py-1 text-[11px] text-on-surface-variant">
              Update Terakhir:{" "}
              {beritaStats.latestDate ? formatDateShort(beritaStats.latestDate) : "—"}
            </span>
          </div>
        </Reveal>

        {/* Live ticker bar */}
        <div className="mb-8">
          <LiveTransactionTicker />
        </div>

        {/* Tumpukan kartu sticky — scroll ke bawah menumpuk, ke atas terbuka */}
        <div className="relative">
          {/* Side progress indicator (desktop only) */}
          <StackProgressIndicator
            total={beritaEntries.length}
            depths={depths}
            scrollToIndex={scrollToIndex}
          />
          {beritaEntries.map((entry, i) => (
            <StackedCard
              key={entry.id}
              entry={entry}
              index={i}
              total={beritaEntries.length}
              depth={depths[i] ?? 0}
              stackRefs={stackRefs}
              onOpenPhoto={openPhoto}
            />
          ))}
        </div>

        {/* Database log 1.200+ transaksi lengkap & pencarian hardware serupa */}
        <ArchiveDatabaseSection />

        {/* CTA bawah */}
        <Reveal delay={100}>
          <div className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-pri via-pri-container to-sec p-6 text-center text-on-pri shadow-xl sm:p-8 lg:flex-row lg:text-left">
            <div className="max-w-xl space-y-1">
              <div className="font-monotech inline-flex items-center gap-1.5 rounded-full bg-on-pri/20 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider">
                <Receipt size={13} />
                Nama Anda Berikutnya?
              </div>
              <h3 className="font-heading text-xl font-bold sm:text-2xl">
                Serahkan hardware lama, terima berita acara & dana instan.
              </h3>
              <p className="text-sm text-on-pri/90">
                Isi form taksiran gratis — proses kurang dari 15 menit di lab Bantul.
              </p>
            </div>
            <div className="flex w-full flex-col gap-2 sm:w-auto sm:flex-row">
              <Link
                to="/jual/form"
                className="font-heading rounded-xl bg-surface-lowest px-6 py-3 text-center font-bold text-pri shadow-md transition-colors hover:bg-surface-high"
              >
                Ajukan Jual Sekarang →
              </Link>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noreferrer"
                className="font-heading rounded-xl border border-on-pri/40 bg-on-pri/10 px-6 py-3 text-center font-semibold text-on-pri transition-colors hover:bg-on-pri/20"
              >
                Tanya via WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
      <FloatingWa />

      {lightbox && (
        <Lightbox
          photos={activePhotos}
          index={lightbox.photo}
          onClose={closeLightbox}
          onNavigate={(i) => setLightbox((prev) => (prev ? { ...prev, photo: i } : prev))}
        />
      )}
    </div>
  );
}
