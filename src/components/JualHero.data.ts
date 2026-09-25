import { type StatItem as StatItemType } from "./JualHero.types";

export const stats: StatItemType[] = [
  {
    label: "Telah Dicairkan",
    value: "Rp 2,8 M+",
    valueClass: "text-pri",
  },
  {
    label: "Unit Diterima",
    value: "1.200+",
    valueClass: "text-sec",
  },
  {
    label: "Rating Kepuasan",
    value: "4.9/5",
    valueClass: "text-tertiary",
  },
  {
    label: "Waktu Proses",
    value: "< 15 Menit",
    valueClass: "text-on-surface",
  },
];

export type StatItem = {
  label: string;
  value: string;
  valueClass: string;
};
