import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Cpu, Flame, Laptop, Sparkles, Wrench, Zap } from "lucide-react";
import { Reveal } from "./Reveal";

const caseStudies = [
  {
    id: "laptop_matot",
    tabLabel: "Laptop Core i7 Matot",
    icon: Laptop,
    badge: "Mati Total (Short 19V)",
    badgeColor: "bg-rose-500/20 text-rose-300 border-rose-500/30",
    title: "ASUS TUF Gaming FX505 (Mati Total)",
    specs: "Core i7-9750H • GTX 1650 4GB • 16GB RAM • NVMe 512GB",
    problem: "Konslet di jalur power DC-in karena adaptor non-ori, tidak bisa menyala sama sekali.",
    salvageVerdict: "Layar IPS 120Hz mulus, RAM & NVMe 100% normal, keyboard & heatsink utuh.",
    payout: "Rp 1.450.000",
    payoutMethod: "Cair Tunai di Lab (14 Menit)",
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=800&q=80",
    customer: "Nasabah: Bpk. Fandi (Gunungkidul)",
  },
  {
    id: "vga_artefak",
    tabLabel: "VGA RTX 3070 Artefak",
    icon: Zap,
    badge: "Artefak / Error VRAM",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    title: "MSI GeForce RTX 3070 8GB Gaming X Trio",
    specs: "GDDR6 8GB • Triple Fan Torx 4.0 • Dual BIOS",
    problem:
      "Layar bergaris kotak-kotak (space invader) saat instal driver Nvidia, gagal benchmark 3D.",
    salvageVerdict:
      "Heatsink tembaga tebal, fan mulus, 6 modul IC GDDR6 lulus tes donor reballing.",
    payout: "Rp 1.800.000",
    payoutMethod: "Transfer BCA Real-time",
    image: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&q=80",
    customer: "Nasabah: Dimas S. (Lampung)",
  },
  {
    id: "mobo_konslet",
    tabLabel: "Mobo B550 Gosong",
    icon: Cpu,
    badge: "Konslet Jalur VRM",
    badgeColor: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
    title: "ASUS ROG Strix B550-F Gaming (No POST)",
    specs: "Socket AM4 • PCIe 4.0 • SupremeFX Audio • Wi-Fi 6",
    problem: "Tersengat petir via kabel LAN, IC controller ethernet & 2 MOSFET VRM gosong.",
    salvageVerdict:
      "Socket AM4 utuh tidak bengkok, heatsink chipset & slot PCIe utuh untuk kanibal.",
    payout: "Rp 450.000",
    payoutMethod: "QRIS Instan di Tempat",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    customer: "Nasabah: Mas Agung (Cikarang)",
  },
  {
    id: "thinkpad_layar",
    tabLabel: "ThinkPad Layar Pecah",
    icon: Wrench,
    badge: "Layar Retak / Mesin Normal",
    badgeColor: "bg-blue-500/20 text-blue-300 border-blue-500/30",
    title: "Lenovo ThinkPad T480s (Core i5 Gen 8)",
    specs: "Core i5-8250U • 8GB RAM • 256GB SSD • Bodi Magnesium",
    problem: "Tertindih di dalam tas hingga LCD pecah dalam, namun mesin masih menyala via HDMI.",
    salvageVerdict: "Mainboard sehat 100%, keyboard ThinkPad empuk normal, baterai health 88%.",
    payout: "Rp 2.100.000",
    payoutMethod: "Transfer Mandiri",
    image: "https://images.unsplash.com/photo-1544652478-6653e09f18a2?w=800&q=80",
    customer: "Nasabah: Ibu Laras (Sleman)",
  },
];

export function HardwareConditionStage() {
  const [activeCase, setActiveCase] = useState(0);
  const current = caseStudies[activeCase] ?? caseStudies[0]!;

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-14 sm:py-20">
      <Reveal from="bottom">
        <div className="mb-10 text-center space-y-2.5 max-w-2xl mx-auto">
          <div className="font-monotech inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-700">
            <Sparkles size={14} />
            Studi Kasus Pembelian Riil
          </div>
          <h2 className="font-heading text-2xl font-extrabold text-slate-900 sm:text-4xl">
            Rusak Seperti Apa Saja yang Tetap Kami Beli?
          </h2>
          <p className="text-sm sm:text-base text-slate-600">
            Klik contoh kerusakan di bawah ini untuk melihat bagaimana teknisi kami mendiagnosa dan
            memberikan harga beli terbaik.
          </p>
        </div>
      </Reveal>

      {/* Case Switcher Tabs */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {caseStudies.map((cs, idx) => {
          const isSelected = activeCase === idx;
          return (
            <button
              key={cs.id}
              type="button"
              onClick={() => setActiveCase(idx)}
              className={`font-monotech flex shrink-0 items-center gap-2 rounded-2xl px-4 py-3 text-xs sm:text-sm font-bold transition-all ${
                isSelected
                  ? "bg-slate-900 text-white shadow-md scale-102"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
              }`}
            >
              <cs.icon size={16} className={isSelected ? "text-blue-400" : "text-slate-400"} />
              <span>{cs.tabLabel}</span>
            </button>
          );
        })}
      </div>

      {/* Selected Case Showcase Card (Visipro Hardware Stage) */}
      <Reveal from="bottom" delay={80}>
        <div className="mt-4 overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-lg">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12 items-center">
            {/* Left: High-res Hardware Photo */}
            <div className="relative overflow-hidden rounded-2xl bg-slate-900 lg:col-span-6 aspect-[4/3] group">
              <img
                src={current.image}
                alt={current.title}
                className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

              {/* Status Badge */}
              <div className="absolute top-4 left-4">
                <span
                  className={`font-monotech inline-flex items-center gap-1.5 rounded-xl border px-3 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur-md ${current.badgeColor}`}
                >
                  <Flame size={13} />
                  {current.badge}
                </span>
              </div>

              {/* Customer verified footnote */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/80 font-monotech">
                <span>{current.customer}</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <CheckCircle2 size={13} />
                  Lunas
                </span>
              </div>
            </div>

            {/* Right: Technical Diagnosis & Value Breakdown */}
            <div className="space-y-5 lg:col-span-6">
              <div>
                <span className="font-monotech text-xs font-bold text-blue-600 uppercase tracking-widest">
                  Spesifikasi &amp; Seri Unit
                </span>
                <h3 className="font-heading mt-1 text-xl sm:text-2xl font-extrabold text-slate-900">
                  {current.title}
                </h3>
                <p className="font-monotech mt-1 text-xs text-slate-500">{current.specs}</p>
              </div>

              {/* Problem vs Salvage Breakdown */}
              <div className="space-y-3 rounded-2xl bg-slate-50 p-4 sm:p-5 border border-slate-100 text-xs sm:text-sm">
                <div className="space-y-1">
                  <span className="font-monotech text-[10px] font-bold text-rose-600 uppercase tracking-wider block">
                    Kondisi Kendala / Kerusakan:
                  </span>
                  <p className="text-slate-700 leading-relaxed">{current.problem}</p>
                </div>

                <div className="border-t border-slate-200/80 pt-3 space-y-1">
                  <span className="font-monotech text-[10px] font-bold text-emerald-600 uppercase tracking-wider block">
                    Penilaian Komponen Donor &amp; Kanibal:
                  </span>
                  <p className="text-slate-700 leading-relaxed font-medium">
                    {current.salvageVerdict}
                  </p>
                </div>
              </div>

              {/* Cash Paid Output */}
              <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-blue-50 p-4 border border-blue-100">
                <div>
                  <span className="font-monotech text-[10px] uppercase tracking-wider text-blue-700 block">
                    Total Dana Dicairkan ke Penjual
                  </span>
                  <span className="font-heading text-2xl font-black text-blue-700 sm:text-3xl tracking-tight">
                    {current.payout}
                  </span>
                  <span className="font-monotech text-[11px] text-blue-900 block mt-0.5 font-medium">
                    {current.payoutMethod}
                  </span>
                </div>

                <Link
                  to="/jual/form"
                  className="font-heading inline-flex items-center gap-1.5 rounded-xl bg-blue-600 px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-sm transition-all hover:bg-blue-500"
                >
                  <span>Punya Barang Serupa? Jual Di Sini</span>
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
