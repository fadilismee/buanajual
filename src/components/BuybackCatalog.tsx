import { useState } from "react";
import {
  CircuitBoard,
  Cpu,
  Info,
  Laptop,
  MessageCircle,
  Search,
  Sparkles,
  X,
  Zap,
  type LucideIcon,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { buybackCategoryMeta, buybackItems, type BuybackCategory } from "@/data/sellPrices";
import { skuPrefix } from "@/components/JualHero.utils";
import { BuybackCard } from "./BuybackCard";

const catalogFilters: { id: BuybackCategory | "all"; label: string; icon: LucideIcon }[] = [
  { id: "all", label: "Semua Part", icon: Sparkles },
  { id: "laptop", label: "Laptop & Notebook", icon: Laptop },
  { id: "vga", label: "VGA Card", icon: Zap },
  { id: "mobo", label: "Motherboard", icon: CircuitBoard },
  { id: "proc-ram", label: "CPU, RAM & SSD", icon: Cpu },
];

const groupIcons: Record<BuybackCategory, LucideIcon> = {
  mobo: CircuitBoard,
  vga: Zap,
  laptop: Laptop,
  "proc-ram": Cpu,
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
    <section id="tabel-harga" className="mx-auto w-full max-w-7xl scroll-mt-24 px-4 py-12 sm:py-16">
      <Reveal from="bottom">
        {/* Section Header */}
        <div className="mb-8 space-y-2 text-center max-w-2xl mx-auto">
          <div className="font-monotech inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-blue-700">
            <Info size={13} />
            Price List Transparan
          </div>
          <h2 className="font-heading text-2xl font-bold text-slate-900 sm:text-4xl">
            Daftar Estimasi Harga Terima Hardware
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Pilih kategori atau cari model hardware Anda untuk melihat kisaran harga beli kami.
          </p>
        </div>

        {/* Search & Category Filter Toolbar */}
        <div className="space-y-4 rounded-2xl border border-slate-200 bg-white p-4 sm:p-5 shadow-xs">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            {/* Search Box */}
            <div className="relative w-full md:w-80 lg:w-96">
              <Search
                size={16}
                className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                value={query}
                onChange={(e) => onQueryChange(e.target.value)}
                placeholder="Cari model: RTX 3060, H61 Matot, Ryzen, ThinkPad..."
                aria-label="Cari hardware"
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-9 text-xs sm:text-sm text-slate-900 outline-none placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-500/20 transition-all"
              />
              {query && (
                <button
                  type="button"
                  onClick={() => onQueryChange("")}
                  aria-label="Hapus kata kunci pencarian"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-700"
                >
                  <X size={15} />
                </button>
              )}
            </div>

            <div className="flex items-center gap-2 font-monotech text-[11px] text-slate-500">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span>{flat.length} model terdaftar di price list</span>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {catalogFilters.map((f) => {
              const active = filter === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFilter(f.id)}
                  className={`font-monotech flex shrink-0 items-center gap-1.5 rounded-xl px-3.5 py-2 text-xs font-semibold transition-all ${
                    active
                      ? "bg-blue-600 text-white shadow-xs"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                  }`}
                >
                  <f.icon size={14} />
                  <span>{f.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="space-y-10 pt-8">
          {flat.length === 0 && (
            <div className="rounded-2xl border border-slate-200 bg-white p-10 text-center shadow-xs">
              <p className="font-heading text-base font-bold text-slate-900">
                Hardware tidak ditemukan di daftar
              </p>
              <p className="mx-auto mt-1 max-w-md text-xs sm:text-sm text-slate-500">
                Tidak ada hasil untuk "{query.trim()}". Namun kami tetap menerima hampir semua jenis
                hardware bekas/rusak lainnya.
              </p>
              <a
                href={`https://wa.me/6285979220599?text=${encodeURIComponent(`Halo Gudang Komputer, saya mau tanya harga beli untuk hardware: ${query.trim() || "unit saya"}`)}`}
                target="_blank"
                rel="noreferrer"
                className="font-heading mt-4 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-xs sm:text-sm font-bold text-white shadow-xs transition-colors hover:bg-blue-500"
              >
                <MessageCircle size={16} />
                <span>Tanyakan Taksiran via WhatsApp</span>
              </a>
            </div>
          )}

          {filter === "all" ? (
            <div className="grid grid-cols-2 gap-3.5 sm:gap-5 md:grid-cols-3 xl:grid-cols-4">
              {flat.map(({ it, sku }) => (
                <BuybackCard
                  key={`${it.category}-${it.title}`}
                  item={it}
                  sku={sku}
                  onAjukan={onAjukan}
                />
              ))}
            </div>
          ) : (
            cats.map((c) => {
              const Icon = groupIcons[c];
              const meta = buybackCategoryMeta[c];
              const rows = flat.filter(({ it }) => it.category === c);
              if (rows.length === 0) return null;
              return (
                <div key={c} className="space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                        <Icon size={18} />
                      </div>
                      <div>
                        <h3 className="font-heading text-base sm:text-lg font-bold text-slate-900">
                          {meta.title}
                        </h3>
                        <p className="text-xs text-slate-500">{meta.desc}</p>
                      </div>
                    </div>
                    <span className="font-monotech text-[11px] font-semibold text-slate-400">
                      {meta.count}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3.5 sm:gap-5 md:grid-cols-3 xl:grid-cols-4">
                    {rows.map(({ it, sku }) => (
                      <BuybackCard key={it.title} item={it} sku={sku} onAjukan={onAjukan} />
                    ))}
                  </div>
                </div>
              );
            })
          )}
        </div>
      </Reveal>
    </section>
  );
}
