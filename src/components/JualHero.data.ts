import { type StatItem as StatItemType } from "./JualHero.types";

export const stats: StatItemType[] = [
  {
    label: "Komponen Di-salvage",
    value: "1.840+",
    valueClass: "text-pri",
  },
  {
    label: "Rata-rata Uji Lab",
    value: "15 Mnt",
    valueClass: "text-on-surface",
  },
];

export type StatItem = {
  label: string;
  value: string;
  valueClass: string;
};
