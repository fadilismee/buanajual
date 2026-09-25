import { z } from "zod";
import sellPricesData from "./sellPrices.json";
import {
  AppraisalCategorySchema,
  AppraisalConditionSchema,
  BuybackCategorySchema,
  BuybackItemSchema,
  SellPriceSchema,
  SellPricesDataSchema,
} from "@/lib/schemas";

export type SellPrice = z.infer<typeof SellPriceSchema>;
export type BuybackCategory = z.infer<typeof BuybackCategorySchema>;
export type BuybackItem = z.infer<typeof BuybackItemSchema>;
export type AppraisalCategory = z.infer<typeof AppraisalCategorySchema>;
export type AppraisalCondition = z.infer<typeof AppraisalConditionSchema>;

// Grade definitions (from JSON + local overrides)
const gradesData = [
  {
    code: "GRADE A",
    range: "70% - 85% Pasar",
    title: "Normal & Mulus",
    desc: "Kondisi siap pakai, lengkap dos/box ori, segel garansi pabrik utuh, performa benchmark stabil 100% tanpa throttle.",
    foot: "Valuasi Paling Maksimal",
    codeClass: "bg-pri text-on-pri",
    gradeTone: "pri" as const,
    priceTone: "pri" as const,
  },
  {
    code: "GRADE B",
    range: "50% - 70% Pasar",
    title: "Normal Minus Kosmetik",
    desc: "Unit berfungsi normal seluruhnya, namun tanpa box, ada lecet pemakaian wajar, baterai laptop drop tipis, atau debu heatsink tebal.",
    foot: "Paling Sering Masuk",
    codeClass: "bg-sec text-on-sec",
    gradeTone: "pri" as const,
    priceTone: "pri" as const,
  },
  {
    code: "GRADE C",
    range: "30% - 50% Pasar",
    title: "Rusak Sebagian / Minor",
    desc: "Masih menyala/POST tapi ada kendala: port USB/HDMI mati, kipas VGA macet, keyboard laptop error, atau display baret dalam.",
    foot: "Bahan Servis Lab Kami",
    codeClass: "bg-surface-variant text-on-surface",
    gradeTone: "pri" as const,
    priceTone: "tertiary" as const,
  },
  {
    code: "GRADE D",
    range: "Rp 50rb - 1.5Jt+",
    title: "Rusak Berat / Matot",
    desc: "Mati total, bekas short circuit, terkena cairan, korosi parah, atau artefak parah. Tetap berharga untuk kanibal IC, VRAM, dan mosfet!",
    foot: "Pasti Kami Bayar",
    codeClass: "bg-tertiary text-on-tertiary",
    gradeTone: "tertiary" as const,
    priceTone: "tertiary" as const,
  },
];

export type Grade = (typeof gradesData)[number];

export const grades = gradesData;

// Throws at startup/build with a clear message if sellPrices.json is malformed.
const parsed = SellPricesDataSchema.parse(sellPricesData);

export const sellPrices: SellPrice[] = parsed.sellPrices;
export const buybackItems: BuybackItem[] = parsed.buybackItems;
export const appraisalCategories: { id: AppraisalCategory; label: string }[] =
  parsed.appraisalCategories;
export const appraisalConditions: { id: AppraisalCondition; label: string }[] =
  parsed.appraisalConditions;
export const appraisalRates = parsed.appraisalRates as Record<
  AppraisalCategory,
  Record<AppraisalCondition, string>
>;

// "count" selalu dihitung dari jumlah item aktual supaya tidak drift dari data.
export const buybackCategoryMeta: Record<
  BuybackCategory,
  { title: string; desc: string; count: string }
> = (Object.keys(parsed.buybackCategoryMeta) as BuybackCategory[]).reduce(
  (acc, key) => {
    const meta = parsed.buybackCategoryMeta[key];
    if (!meta) throw new Error(`buybackCategoryMeta missing key: ${key}`);
    const n = parsed.buybackItems.filter((i) => i.category === key).length;
    acc[key] = { title: meta.title, desc: meta.desc, count: `${n} SKU Terdaftar` };
    return acc;
  },
  {} as Record<BuybackCategory, { title: string; desc: string; count: string }>,
);
