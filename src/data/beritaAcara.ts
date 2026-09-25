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

export type ArchiveLog = {
  id: string;
  date: string;
  seller: string;
  origin: string;
  category: "laptop" | "mobo" | "vga" | "proc-ram" | "borongan";
  itemsSummary: string;
  condition: string;
  payoutMethod: string;
  amount: number;
};

export const archiveLogs: ArchiveLog[] = [
  {
    id: "BA-2025-042",
    date: "2025-09-21",
    seller: "Hendri P.",
    origin: "Kasihan, Bantul",
    category: "laptop",
    itemsSummary: "ASUS Vivobook 14 A412 (Core i3-8145U, RAM 8GB)",
    condition: "Mati Total (Short IC Power)",
    payoutMethod: "Transfer BCA",
    amount: 950000,
  },
  {
    id: "BA-2025-041",
    date: "2025-09-18",
    seller: "Bpk. Dani",
    origin: "Sleman",
    category: "laptop",
    itemsSummary: "Laptop Asus X441BA + Keyboard Kanibal",
    condition: "Matot 2 Tahun (PCB Utuh)",
    payoutMethod: "Tunai di Tempat",
    amount: 600000,
  },
  {
    id: "BA-2025-040",
    date: "2025-09-15",
    seller: "Mas Irfan",
    origin: "Potorono, Bantul",
    category: "vga",
    itemsSummary: "VGA Palit GTX 1660 Ti 6GB GDDR6",
    condition: "Artefak Garis Layar",
    payoutMethod: "Transfer BCA",
    amount: 750000,
  },
  {
    id: "BA-2025-039",
    date: "2025-09-11",
    seller: "Dimas K.",
    origin: "Kotagede, Yogyakarta",
    category: "mobo",
    itemsSummary: "Mobo B450M Steel Legend + Ryzen 5 3600 + 16GB RAM",
    condition: "Bekas Normal Tested",
    payoutMethod: "QRIS Instan",
    amount: 1750000,
  },
  {
    id: "BA-2025-038",
    date: "2025-09-07",
    seller: "Ibu Rina",
    origin: "Kota Yogyakarta",
    category: "laptop",
    itemsSummary: "Lenovo ThinkPad T480 + SSD NVMe 256GB",
    condition: "Bodi Lecet, Fungsi Normal",
    payoutMethod: "Transfer Mandiri",
    amount: 2400000,
  },
  {
    id: "BA-2025-037",
    date: "2025-09-02",
    seller: "Bpk. Sutrisno (PT. MMS)",
    origin: "Banguntapan, Bantul",
    category: "borongan",
    itemsSummary: '10x PC Kantor Core i5 Gen 8 + 10x Monitor 22"',
    condition: "Lelang Kantor / Upgrade Aset",
    payoutMethod: "Transfer BRI",
    amount: 10000000,
  },
  {
    id: "BA-2025-036",
    date: "2025-08-28",
    seller: "Fajar A.",
    origin: "Depok, Sleman",
    category: "vga",
    itemsSummary: "Sapphire Radeon RX 580 8GB Nitro+ & PSU 550W",
    condition: "Fan Macet, Chipset Hidup",
    payoutMethod: "Tunai di Tempat",
    amount: 800000,
  },
  {
    id: "BA-2025-035",
    date: "2025-08-24",
    seller: "Wahyu Tri",
    origin: "Gamping, Sleman",
    category: "vga",
    itemsSummary: "MSI GeForce RTX 3070 Gaming X Trio (No Display)",
    condition: "Mati Jalur PCIe 12V",
    payoutMethod: "Transfer BCA",
    amount: 1800000,
  },
  {
    id: "BA-2025-034",
    date: "2025-08-20",
    seller: "Aditya N.",
    origin: "Sewon, Bantul",
    category: "laptop",
    itemsSummary: "Acer Nitro 5 AN515 (Core i7-9750H, GTX 1650)",
    condition: "Layar Pecah, Mainboard Normal",
    payoutMethod: "Transfer BCA",
    amount: 2850000,
  },
  {
    id: "BA-2025-033",
    date: "2025-08-16",
    seller: "Bpk. Haryanto",
    origin: "Wirobrajan, Yogyakarta",
    category: "mobo",
    itemsSummary: "4x Motherboard H61 & H81 Mati Total + 4x Fan Intel",
    condition: "Kanibal Komponen",
    payoutMethod: "Tunai di Tempat",
    amount: 420000,
  },
  {
    id: "BA-2025-032",
    date: "2025-08-12",
    seller: "Rizky Pratama",
    origin: "Condongcatur, Sleman",
    category: "proc-ram",
    itemsSummary: "Intel Core i7-10700K + 2x RAM Kingston Fury 16GB DDR4",
    condition: "Bekas Gaming Mulus",
    payoutMethod: "QRIS Instan",
    amount: 2750000,
  },
  {
    id: "BA-2025-031",
    date: "2025-08-08",
    seller: "CV. Surya Digital",
    origin: "Umbulharjo, Yogyakarta",
    category: "borongan",
    itemsSummary: "6x PC Mini ITX Kantor Core i3 + 12x Keyboard Mouse",
    condition: "Peremajaan Unit Kantor",
    payoutMethod: "Transfer Mandiri",
    amount: 5400000,
  },
  {
    id: "BA-2025-030",
    date: "2025-08-03",
    seller: "Bagus Setiawan",
    origin: "Piyungan, Bantul",
    category: "laptop",
    itemsSummary: "HP Pavilion Gaming 15 (Ryzen 5 3550H, GTX 1050)",
    condition: "Engsel Patah, Mesin Normal",
    payoutMethod: "Transfer BCA",
    amount: 1950000,
  },
  {
    id: "BA-2025-029",
    date: "2025-07-29",
    seller: "Agus S.",
    origin: "Kraton, Yogyakarta",
    category: "vga",
    itemsSummary: "ZOTAC Gaming RTX 2060 6GB Twin Fan",
    condition: "Artefak VRAM Error",
    payoutMethod: "Tunai di Tempat",
    amount: 1100000,
  },
  {
    id: "BA-2025-028",
    date: "2025-07-24",
    seller: "Ibu Laksmi",
    origin: "Kalasan, Sleman",
    category: "laptop",
    itemsSummary: 'MacBook Air 13" 2017 (Core i5, 8GB, 128GB)',
    condition: "Baterai Kembung, Trackpad Macet",
    payoutMethod: "Transfer BCA",
    amount: 1650000,
  },
  {
    id: "BA-2025-027",
    date: "2025-07-19",
    seller: "Kurniawan",
    origin: "Imogiri, Bantul",
    category: "mobo",
    itemsSummary: "Mobo ASUS ROG Strix B550-F Gaming (No POST)",
    condition: "Konslet Jalur VRM",
    payoutMethod: "QRIS Instan",
    amount: 650000,
  },
  {
    id: "BA-2025-026",
    date: "2025-07-15",
    seller: "Bpk. Bambang",
    origin: "Mlati, Sleman",
    category: "borongan",
    itemsSummary: '15x Monitor 19" LED LG & Samsung (3 Bergaris)',
    condition: "Eks Lab Komputer Kursus",
    payoutMethod: "Transfer Mandiri",
    amount: 3750000,
  },
  {
    id: "BA-2025-025",
    date: "2025-07-10",
    seller: "Yusuf M.",
    origin: "Pundong, Bantul",
    category: "proc-ram",
    itemsSummary: "3x SSD NVMe 512GB Samsung 970 Evo + 4x RAM 8GB DDR4",
    condition: "Normal Health 95-100%",
    payoutMethod: "Transfer BCA",
    amount: 1450000,
  },
];

export const beritaStats = {
  totalEntries: 1240,
  totalPayout: 2840000000, // Rp 2,84 Miliar
  totalItems: 2860,
  latestDate: "2025-09-21",
};
