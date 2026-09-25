import { useState } from "react";
import { Search, Info } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { buybackCategoryMeta, buybackItems, type BuybackCategory } from "@/data/sellPrices";
import { skuPrefix, skuImage } from "@/components/JualHero.utils";
import { gradeBadgeClass } from "@/components/JualHero.utils";
import { BuybackCard } from "./BuybackCard";

const catalogFilters: { id: BuybackCategory | "all"; label: string }[] = [
  { id: "all", label: "Semua Komponen" },
  { id: "laptop", label: "Laptop Bekas / Mati" },
  { id: "mobo", label: "Motherboard & IC" },
  { id: "vga", label: "VGA Card Bekas/Rusak" },
  { id: "proc-ram", label: "Processor, RAM & SSD" },
];

const groupIcons: Record<BuybackCategory, React.ComponentType<{ size?: number }>> = {
  mobo: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 17h8" />
      <path d="M12 17v4" />
    </svg>
  ),
  vga: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  laptop: () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="17" x2="16" y2="17" />
    </svg>
  ),
  "proc-ram": () => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M6 17h.01" />
      <path d="M10 17h.01" />
      <path d="M14 17h.01" />
      <path d="M18 17h.01" />
    </svg>
  ),
};

interface BuybackCatalogProps {
  query: string;
  onQueryChange: (value: string) => void;
  onAjukan: (title: string, category: BuybackCategory) => void;
}

export function BuybackCatalog({ query, onQueryChange, onAjukan }: BuybackCatalogProps) {
  const [filter, setFilter] = useState<BuybackCategory | "all">("all");
  const q = query.trim().toLowerCase();
  const cats = (Object.keys(buybackCategoryMeta) as BuybackCategory[]).filter(
    (c) => filter === "all" || filter === c,
  );
  const flat = cats.flatMap((c) =>
    buybackItems
      .filter((it) => it.category === c && (!q || it.searchText.toLowerCase().includes(q)))
      .map((it, i) => ({ it, sku: `${skuPrefix[c]}-${String(i + 1).padStart(2, "0")}` })),
  );

  return (
    <Reveal from="bottom" delay={0}>
      <section id="tabel-harga" className="mx-auto w-full max-w-7xl scroll-mt-24 px-4 py-10">
        <div className="space-y-4 rounded-xl bg-surface-lowest p-4 shadow-sm">
          <div className="flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
            <div className="relative w-full md:w-96">
              <Search size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-outline" />
              <input
                value={query}
                onChange={(e) => onQueryChange(e.target.value)}
                placeholder="Cari seri: RTX 3060, H61 Matot, Ryzen, ThinkPad..."
                aria-label="Cari hardware"
                className="w-full rounded-lg border border-outline-variant/50 bg-surface-lowest py-2.5 pl-10 pr-4 text-sm text-on-surface outline-none placeholder:text-outline focus:border-pri/50 focus:ring-2 focus:ring-pri/20"
              />
            </div>
            <div className="font-monotech flex items-center gap-2 self-start text-[11px] text-on-surface-variant md:self-auto">
              <Info size={18} className="text-pri" />
              <span>Harga fluktuatif mengikuti kurs dollar & ketersediaan part kanibal</span>
            </div>
          </div>
          <div className="font-monotech flex items-center gap-2 overflow-x-auto pb-1 text-[13px]">
            {catalogFilters.map((f) => {
              const active = filter === f.id;
              return (
                <button
                  key={f.id}
                  onClick={() => setFilter(f.id)}
                  className={`shrink-0 rounded-full px-4 py-1.5 font-medium transition-all ${
                    active
                      ? "bg-on-surface text-surface"
                      : "bg-surface-container text-on-surface-variant hover:text-on-surface"
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="space-y-10 pt-8">
          {flat.length === 0 && (
            <div className="rounded-xl border border-outline-variant/40 bg-surface-lowest p-10 text-center shadow-sm">
              <p className="font-heading text-base font-semibold text-on-surface">
                Hardware tidak ditemukan
              </p>
              <p className="mx-auto mt-1 max-w-md text-sm text-on-surface-variant">
                Tidak ada yang cocok dengan pencarian "{query.trim()}". Coba kata kunci lain atau
                konsultasi langsung via WhatsApp.
              </p>
              <a
                href={`https://wa.me/6285979220599?text=${encodeURIComponent(`Halo Gudang Komputer, saya mencari ${query.trim() || "hardware"} tapi tidak ada di price list`)}`}
                target="_blank"
                rel="noreferrer"
                className="font-heading mt-4 inline-flex items-center gap-1.5 rounded-lg bg-pri px-4 py-2 text-sm font-semibold text-on-pri transition-colors hover:bg-pri-container"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                Tanya via WhatsApp
              </a>
            </div>
          )}
          {filter === "all" ? (
            <Reveal from="bottom" delay={0}>
              <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-4">
                {flat.map(({ it, sku }) => (
                  <BuybackCard
                    key={`${it.category}-${it.title}`}
                    item={it}
                    sku={sku}
                    onAjukan={onAjukan}
                  />
                ))}
              </div>
            </Reveal>
          ) : (
            <Reveal from="bottom" delay={0}>
              {cats.map((c) => {
                const Icon = groupIcons[c];
                const meta = buybackCategoryMeta[c];
                const rows = flat.filter(({ it }) => it.category === c);
                if (rows.length === 0) return null;
                return (
                  <div key={c} className="space-y-4">
                    <div className="flex items-center justify-between pb-1">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded bg-pri/10 text-pri">
                          <Icon size={20} />
                        </div>
                        <div>
                          <h3 className="font-heading text-lg sm:text-xl font-semibold text-on-surface">
                            {meta.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-on-surface-variant">{meta.desc}</p>
                        </div>
                      </div>
                      <span className="font-monotech hidden text-[11px] text-outline sm:inline-block">
                        {meta.count}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-4">
                      {rows.map(({ it, sku }) => (
                        <BuybackCard key={it.title} item={it} sku={sku} onAjukan={onAjukan} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </Reveal>
          )}
        </div>
      </section>
    </Reveal>
  );
}
