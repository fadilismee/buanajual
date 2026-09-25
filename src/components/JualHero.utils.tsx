import type { BuybackCategory, BuybackItem } from "@/data/sellPrices";
import { Banknote, ClipboardCheck, MessageCircle, Truck, type LucideIcon } from "lucide-react";

export const skuPrefix: Record<BuybackCategory, string> = {
  mobo: "MOBO",
  vga: "GPU",
  laptop: "LTP",
  "proc-ram": "CPU",
};

export const skuImage: Record<BuybackCategory, string> = {
  mobo: "https://picsum.photos/seed/buana-sku-mobo/640/400",
  vga: "https://picsum.photos/seed/buana-sku-vga/640/400",
  laptop: "https://picsum.photos/seed/buana-sku-laptop/640/400",
  "proc-ram": "https://picsum.photos/seed/buana-sku-cpuram/640/400",
};

export const catalogFilters: { id: BuybackCategory | "all"; label: string }[] = [
  { id: "all", label: "Semua Komponen" },
  { id: "laptop", label: "Laptop Bekas / Mati" },
  { id: "mobo", label: "Motherboard & IC" },
  { id: "vga", label: "VGA Card Bekas/Rusak" },
  { id: "proc-ram", label: "Processor, RAM & SSD" },
];

export const steps: { n: string; icon: LucideIcon; title: string; desc: string; foot: string }[] = [
  {
    n: "01",
    icon: MessageCircle,
    title: "Cek Estimasi / Foto Unit",
    desc: "Kirimkan foto barang, tipe seri lengkap, dan jelaskan kondisi apa adanya (normal, minus, atau mati total) via form web atau WA.",
    foot: "Respon Cepat < 15 Menit",
  },
  {
    n: "02",
    icon: Truck,
    title: "Drop ke Toko atau Jemput",
    desc: "Bawa hardware langsung ke lab Gudang Komputer di Bantul. Untuk unit banyak atau borongan kantor, kami sediakan kurir jemput lokasi.",
    foot: "Layanan COD DIY Tersedia",
  },
  {
    n: "03",
    icon: ClipboardCheck,
    title: "Cek Fisik & Diagnosa Lab",
    desc: "Teknisi cek tegangan multimeter, tes POST BIOS, dan benchmark kestabilan secara transparan di hadapan Anda (15-30 menit).",
    foot: "Disaksikan Langsung",
  },
  {
    n: "04",
    icon: Banknote,
    title: "Deal & Cair Tunai Instan",
    desc: "Setelah harga final disepakati, pembayaran langsung dicairkan: cash tunai di tempat atau transfer instan (BCA, Mandiri, BRI, QRIS).",
    foot: "Uang Masuk Detik Itu Juga",
  },
];

export const faqs = [
  {
    q: "Apakah benar motherboard yang sudah hangus atau kena petir tetap dibeli?",
    a: "Benar. Motherboard mati total tetap memiliki komponen donor yang sangat berharga: chip audio, MOSFET daya 12V, PWM controller, konektor PCIe, dan soket I/O. Nilai taksiran disesuaikan dengan generasi socket dan keutuhan PCB (tidak patah terbelah dua).",
  },
  {
    q: "Bagaimana keamanan data pribadi pada SSD atau Harddisk yang saya jual?",
    a: "Kami mematuhi protokol privasi ketat. Semua media penyimpanan (baik normal maupun bad sector) langsung diproses Zero Fill / Low Level Format di depan Anda jika menghendaki. Data dijamin tidak bisa di-recovery dengan software komersial manapun.",
  },
  {
    q: "Apakah menerima lelang rongsokan borongan dari kantor, sekolah, atau warnet?",
    a: "Sangat bisa! Kami melayani pembelian 10 hingga 200+ unit PC/laptop/monitor. Tim penaksir datang langsung ke lokasi Anda di Yogyakarta, Magelang, Solo, dan Klaten lengkap dengan invoice resmi serta armada pengangkut.",
  },
  {
    q: "Bagaimana jika saya berdomisili di luar Daerah Istimewa Yogyakarta?",
    a: "Kirimkan paket via ekspedisi (J&T, JNE, SiCepat) ke workshop kami di Bantul setelah estimasi awal via WhatsApp. Unboxing dan tes diagnosa lab kami videokan transparan, lalu dana ditransfer ke rekening bank Anda.",
  },
];

export function gradeBadgeClass(tone: BuybackItem["gradeTone"]): string {
  if (tone === "pri") return "bg-pri/10 text-pri";
  return "bg-tertiary/10 text-tertiary";
}
