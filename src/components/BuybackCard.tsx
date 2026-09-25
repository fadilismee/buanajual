import { ArrowRight, Tag } from "lucide-react";
import type { BuybackItem } from "@/data/sellPrices";

interface BuybackCardProps {
  item: BuybackItem;
  sku: string;
  onAjukan: (title: string, category: BuybackItem["category"]) => void;
}

export function BuybackCard({ item, sku, onAjukan }: BuybackCardProps) {
  const isTopGrade = item.gradeTone === "pri";

  const categoryImages: Record<string, string> = {
    mobo: "https://picsum.photos/seed/buana-sku-mobo/640/400",
    vga: "https://picsum.photos/seed/buana-sku-vga/640/400",
    laptop: "https://picsum.photos/seed/buana-sku-laptop/640/400",
    "proc-ram": "https://picsum.photos/seed/buana-sku-cpuram/640/400",
  };

  return (
    <div className="group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-3.5 shadow-2xs transition-all duration-300 hover:border-blue-400 hover:shadow-lg hover:-translate-y-1">
      <div className="space-y-2.5">
        {/* Top bar with SKU & Grade */}
        <div className="flex items-center justify-between gap-2">
          <span
            className={`font-monotech rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
              isTopGrade
                ? "bg-blue-50 text-blue-700 border border-blue-200"
                : "bg-rose-50 text-rose-700 border border-rose-200"
            }`}
          >
            {item.grade}
          </span>
          <span className="font-monotech text-[10px] font-semibold text-slate-400">{sku}</span>
        </div>

        {/* Product photo */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100">
          <img
            src={
              categoryImages[item.category] ?? "https://picsum.photos/seed/buana-sku-mobo/640/400"
            }
            alt={item.title}
            loading="lazy"
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Title */}
        <div>
          <h4 className="font-heading text-xs sm:text-sm font-bold leading-snug text-slate-900 line-clamp-2">
            {item.title}
          </h4>
        </div>
      </div>

      {/* Price & CTA Action */}
      <div className="mt-3.5 space-y-2 rounded-xl bg-slate-50 p-2.5 border border-slate-100">
        <div className="flex items-center justify-between">
          <span className="font-monotech text-[10px] uppercase tracking-wider text-slate-500">
            Estimasi Terima
          </span>
          <Tag size={12} className="text-blue-600" />
        </div>
        <p className="font-heading text-sm sm:text-base font-extrabold text-blue-700 tracking-tight">
          {item.price}
        </p>
        <button
          type="button"
          onClick={() => onAjukan(item.title, item.category)}
          className="font-heading flex w-full items-center justify-center gap-1.5 rounded-lg bg-blue-600 py-2 text-xs font-bold text-white shadow-2xs transition-all hover:bg-blue-500 active:scale-98"
        >
          <span>Ajukan Jual</span>
          <ArrowRight size={13} />
        </button>
      </div>
    </div>
  );
}
