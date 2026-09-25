import { createFileRoute, Link } from "@tanstack/react-router";
import type { RefObject } from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  Banknote,
  CalendarDays,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  FileText,
  Image as ImageIcon,
  MapPin,
  Receipt,
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
  beritaEntries,
  beritaStats,
  formatDate,
  formatDateShort,
  formatRp,
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
/* Sticky stacking card — LUXURY: glassmorphism, layered shadows,      */
/* rim light, subtle parallax, spring easing, stack progress indicator.*/
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

  // Kartu terakhir runway lebih pendek supaya CTA menyatu.
  const runway = index === total - 1 ? "12vh" : "min(52vh, 460px)";

  // Depth-based visual values
  const isTop = depth === 0;
  const scale = depth > 0 ? Math.max(0.93, 1 - depth * 0.025) : 1;
  const brightness = depth > 0 ? Math.max(0.94, 1 - depth * 0.02) : 1;
  const opacity = depth > 0 ? Math.max(0.88, 1 - depth * 0.035) : 1;
  const translateY = depth > 0 ? depth * 2 : 0;

  // Multi-layer shadow system: soft depth shadow for physical deck feel
  const shadowAmbient =
    depth > 0
      ? `0 ${8 + depth * 6}px ${24 + depth * 10}px rgba(16, 24, 40, ${0.08 + depth * 0.02})`
      : "0 4px 16px rgba(16, 24, 40, 0.06)";
  const shadowDirect =
    depth > 0
      ? `0 ${2 + depth * 2}px ${8 + depth * 4}px rgba(16, 24, 40, ${0.04 + depth * 0.01})`
      : "0 1px 3px rgba(16, 24, 40, 0.04)";
  const shadowRim = isTop
    ? "0 0 0 1px rgba(0, 80, 203, 0.1), 0 0 20px rgba(0, 80, 203, 0.06)"
    : "0 0 0 1px rgba(16, 24, 40, 0.06)";

  return (
    <div
      ref={bindRef}
      className="sticky will-change-transform group"
      style={{
        top: `calc(${STACK_BASE} + ${index * LAYER_GAP_PX}px)`,
        zIndex: index + 1, // later cards stack on top of earlier cards
        marginBottom: runway,
        transform: `translate3d(0, ${translateY}px, 0) scale(${scale})`,
        transformOrigin: "top center",
        transition: `transform 360ms ${SPRING_EASE}, filter 320ms ${SPRING_EASE_OUT}, opacity 320ms ${SPRING_EASE_OUT}`,
        filter: `brightness(${brightness})`,
        opacity,
      }}
    >
      {/* Physical layered card wrapper */}
      <article
        className="relative rounded-2xl overflow-hidden bg-surface-lowest"
        style={{
          boxShadow: `${shadowAmbient}, ${shadowDirect}, ${shadowRim}`,
        }}
      >
        {/* Subtle top rim light — hanya kartu paling atas */}
        {isTop && (
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(255,255,255,0.9) 20%, rgba(255,255,255,0.9) 80%, transparent)",
              opacity: 0.9,
            }}
            aria-hidden
          />
        )}

        {/* Subtle noise texture overlay untuk feel premium */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundSize: "256px 256px",
          }}
          aria-hidden
        />

        {/* Layer depth indicator dots di kiri kartu */}
        <div
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 flex flex-col items-center gap-1.5"
          aria-hidden
        >
          {Array.from({ length: total }, (_, i) => (
            <span
              key={i}
              className="block h-1.5 w-1.5 rounded-full transition-all duration-300"
              style={{
                background:
                  i <= index
                    ? i === index
                      ? "var(--pri)"
                      : "rgba(16,24,40,0.35)"
                    : "rgba(16,24,40,0.15)",
                transform: i === index ? "scale(1.4)" : "scale(1)",
                boxShadow: i === index ? "0 0 8px var(--pri), 0 0 16px var(--pri)" : "none",
              }}
            />
          ))}
        </div>

        {/* Badge urutan lapis di tepi atas kanan — premium style */}
        <span
          className="absolute -top-3 right-4 z-10 flex items-center gap-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-white/50 px-3 py-1 text-[10px] font-bold tracking-wider text-on-surface shadow-lg"
          style={{
            boxShadow: "0 4px 16px rgba(16,24,40,0.12), 0 0 0 1px rgba(255,255,255,0.5) inset",
          }}
          aria-hidden
        >
          <span className="font-monotech text-pri">{index + 1}</span>
          <span className="text-on-surface-variant">/</span>
          <span className="font-monotech text-on-surface-variant">{total}</span>
        </span>

        <BeritaCard entry={entry} index={index} onOpenPhoto={onOpenPhoto} />

        {/* Hover/focus lift effect — subtle */}
        <div
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-within:opacity-100"
          style={{
            boxShadow: "0 0 0 1px rgba(0,80,203,0.15), 0 12px 40px rgba(0,80,203,0.12)",
          }}
          aria-hidden
        />
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
      format: (n: number) => `${n}`,
      suffix: "dokumen",
    },
    {
      icon: Truck,
      iconClass: "bg-sec/10 text-sec",
      label: "Barang Diserahkan",
      value: beritaStats.totalItems,
      format: (n: number) => `${n}`,
      suffix: "item",
    },
    {
      icon: Zap,
      iconClass: "bg-tertiary/10 text-tertiary",
      label: "Nilai Sudah Cair",
      value: beritaStats.totalPayout,
      format: (n: number) => formatRp(n),
      suffix: "total",
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
            </div>
          </div>
        </Reveal>
      ))}
    </div>
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
        return Math.abs(el.getBoundingClientRect().top - topPx) < 2;
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
          <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
            <div>
              <span className="font-monotech text-[11px] font-semibold uppercase tracking-widest text-pri">
                Arsip Terbaru
              </span>
              <h2 className="font-heading mt-1 text-2xl font-bold text-on-surface sm:text-3xl">
                Riwayat yang Sudah Dicairkan
              </h2>
            </div>
            <span className="font-monotech rounded-full bg-surface-container px-3 py-1 text-[11px] text-on-surface-variant">
              Update: {beritaStats.latestDate ? formatDateShort(beritaStats.latestDate) : "—"}
            </span>
          </div>
        </Reveal>

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
