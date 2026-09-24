import { z } from "zod";
import beritaAcaraData from "./beritaAcara.json";
import { BeritaAcaraDataSchema, type BeritaEntrySchema } from "@/lib/schemas";

export type BeritaEntry = z.infer<typeof BeritaEntrySchema>;
export type BeritaPhoto = BeritaEntry["photos"][number];
export type BeritaItem = BeritaEntry["items"][number];

// Throws saat startup/build bila beritaAcara.json malformed.
const parsed = BeritaAcaraDataSchema.parse(beritaAcaraData);

export const beritaEntries: BeritaEntry[] = [...parsed.entries].sort((a, b) =>
  b.date.localeCompare(a.date),
);

const rupiah = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
});

export const formatRp = (value: number) => rupiah.format(value);

const dateFmt = new Intl.DateTimeFormat("id-ID", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "Asia/Jakarta",
});

export const formatDate = (iso: string) => dateFmt.format(new Date(`${iso}T00:00:00+07:00`));

export const formatDateShort = (iso: string) =>
  new Intl.DateTimeFormat("id-ID", { day: "2-digit", month: "short", year: "numeric" }).format(
    new Date(`${iso}T00:00:00+07:00`),
  );

export const beritaStats = {
  totalEntries: beritaEntries.length,
  totalPayout: beritaEntries.reduce((sum, e) => sum + e.total, 0),
  totalItems: beritaEntries.reduce((sum, e) => sum + e.items.length, 0),
  latestDate: beritaEntries[0]?.date ?? "",
};
