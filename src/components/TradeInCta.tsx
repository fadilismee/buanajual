import { Reveal } from "./Reveal";
import { Link } from "@tanstack/react-router";
import { Recycle, MessageCircle } from "lucide-react";

const WA_TRADEIN =
  "https://wa.me/6285979220599?text=" +
  encodeURIComponent("Halo Gudang Komputer, saya ingin tukar tambah hardware lama");

export function TradeInCta() {
  return (
    <Reveal from="bottom" delay={0} className="mx-auto w-full max-w-7xl px-4 pb-10 sm:pb-14">
      <Reveal
        from="left"
        delay={0}
        className="flex flex-col items-center justify-between gap-6 rounded-2xl bg-gradient-to-r from-pri via-pri-container to-sec p-6 text-on-pri shadow-xl lg:flex-row lg:p-10"
      >
        <div className="max-w-2xl space-y-2">
          <div className="font-monotech inline-flex items-center gap-1.5 rounded-full bg-on-pri/20 px-3 py-0.5 text-[11px] font-semibold uppercase tracking-wider">
            <Recycle size={14} />
            Program Tukar Tambah (Trade-In Upgrade)
          </div>
          <h3 className="font-heading text-2xl font-bold sm:text-3xl">
            Bawa Laptop / PC Lama Rusak Anda, Bawa Pulang Rakitan Baru Bergaransi!
          </h3>
          <p className="text-on-pri/90">
            Hardware lama atau laptop rusak Anda langsung dipotongkan sebagai uang muka (DP) tukar
            tambah PC kantor, PC gaming, maupun laptop normal bergaransi di 3 cabang resmi Gudang
            Komputer (Gunungkidul, Lampung, Cikarang).
          </p>
        </div>
        <div className="flex w-full shrink-0 flex-col items-center gap-3 sm:w-auto sm:flex-row lg:flex-col xl:flex-row">
          <Link
            to="/jual/form"
            className="font-heading flex w-full items-center justify-center gap-2 rounded-xl bg-surface-lowest px-6 py-3 text-center font-bold text-pri shadow-md transition-colors hover:bg-surface-high sm:w-auto"
          >
            Konsultasi Trade-In <span aria-hidden>→</span>
          </Link>
          <a
            href={WA_TRADEIN}
            target="_blank"
            rel="noreferrer"
            className="font-heading flex w-full items-center justify-center gap-2 rounded-xl border border-on-pri/30 bg-on-pri/10 px-5 py-3 text-center text-on-pri transition-colors hover:bg-on-pri/20 sm:w-auto"
          >
            <MessageCircle size={18} /> Hubungi Tim Sales
          </a>
        </div>
      </Reveal>
    </Reveal>
  );
}
