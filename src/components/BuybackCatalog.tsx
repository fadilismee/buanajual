import { useState } from "react";
import {
  CircuitBoard,
  Info,
  Laptop,
  MemoryStick,
  MessageCircle,
  Search,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { buybackCategoryMeta, buybackItems, type BuybackCategory } from "@/data/sellPrices";
import { skuPrefix } from "@/components/JualHero.utils";
import { BuybackCard } from "./BuybackCard";

const catalogFilters: { id: BuybackCategory | "all"; label: string }[] = [
  { id: "all", label: "Semua Komponen" },
  { id: "laptop", label: "Laptop Bekas / Mati" },
  { id: "mobo", label: "Motherboard & IC" },
  { id: "vga", label: "VGA Card Bekas/Rusak" },
  { id: "proc-ram", label: "Processor, RAM & SSD" },
];

const groupIcons: Record<BuybackCategory, LucideIcon> = {
  mobo: CircuitBoard,
  vga: Zap,
  laptop: Laptop,
  "proc-ram": MemoryStick,
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
                <MessageCircle size={16} />
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
