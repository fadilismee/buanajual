import type { BuybackItem } from "@/data/sellPrices";

interface BuybackCardProps {
  item: BuybackItem;
  sku: string;
  onAjukan: (title: string, category: BuybackItem["category"]) => void;
}

export function BuybackCard({ item, sku, onAjukan }: BuybackCardProps) {
  const gradeBadge =
    item.gradeTone === "pri" ? "bg-pri/10 text-pri" : "bg-tertiary/10 text-tertiary";

  const categoryImages: Record<string, string> = {
    mobo: "https://picsum.photos/seed/buana-sku-mobo/640/400",
    vga: "https://picsum.photos/seed/buana-sku-vga/640/400",
    laptop: "https://picsum.photos/seed/buana-sku-laptop/640/400",
    "proc-ram": "https://picsum.photos/seed/buana-sku-cpuram/640/400",
  };

  return (
    <div className="group flex flex-col justify-between gap-2 rounded-xl border border-outline-variant/40 bg-surface-lowest p-3 shadow-sm transition-all hover:border-pri/30 hover:shadow-md">
      <div className="space-y-2">
        <div className="flex items-center justify-between gap-2">
          <span
            className={`font-monotech rounded px-1.5 py-0.5 text-[10px] font-semibold uppercase ${gradeBadge}`}
          >
            {item.grade}
          </span>
          <span className="font-monotech text-[10px] text-outline">{sku}</span>
        </div>
        <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-surface-container">
          <img
            src={
              categoryImages[item.category] ?? "https://picsum.photos/seed/buana-sku-mobo/640/400"
            }
            alt={item.title}
            loading="lazy"
            className="h-full w-full object-cover object-center transition-all duration-300 group-hover:scale-105"
          />
        </div>
        <div>
          <h4 className="font-heading text-sm font-semibold leading-snug text-on-surface">
            {item.title}
          </h4>
        </div>
      </div>
      <div className="flex flex-col gap-0.5 rounded-lg bg-surface-low p-2.5">
        <span className="font-monotech text-[10px] uppercase tracking-wider text-outline">
          Estimasi Penawaran
        </span>
        <span
          className={`font-heading text-base font-bold ${item.priceTone === "pri" ? "text-pri" : "text-tertiary"}`}
        >
          {item.price}
        </span>
        <button
          type="button"
          onClick={() => onAjukan(item.title, item.category)}
          className="font-heading mt-1 inline-flex w-full items-center justify-center gap-1 rounded-lg bg-pri px-3 py-1.5 text-xs font-semibold text-on-pri transition-colors hover:bg-pri-container"
        >
          Ajukan Jual <span aria-hidden>→</span>
        </button>
      </div>
    </div>
  );
}
