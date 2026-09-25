import { Reveal } from "./Reveal";
import { Link } from "@tanstack/react-router";
import { Recycle } from "lucide-react";

const WA_TRADEIN =
  "https://wa.me/6285979220599?text=" +
  encodeURIComponent("Halo Gudang Komputer, saya ingin tukar tambah hardware lama");

export function PromoBonus() {
  return (
    <Reveal from="bottom" delay={0} className="mx-auto w-full max-w-7xl px-4 pt-8">
      <div className="flex flex-col items-center gap-6 rounded-2xl border border-pri/20 bg-gradient-to-br from-pri/10 via-surface-lowest to-sec/10 p-5 shadow-md lg:flex-row lg:p-7">
        <div className="w-full shrink-0 overflow-hidden rounded-xl border border-outline-variant/30 shadow-lg lg:w-3/5">
          <img
            src="https://picsum.photos/seed/buana-promo-buyback/900/420"
            alt="Promo tebus hardware bekas Gudang Komputer"
            loading="lazy"
            className="h-auto w-full object-cover transition-transform duration-300 hover:scale-[1.01]"
          />
        </div>
        <div className="flex w-full flex-col justify-center space-y-3 lg:w-2/5">
          <div className="font-monotech inline-flex items-center gap-1.5 self-start rounded-full bg-tertiary-container px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-on-tertiary-container">
            <span className="h-2 w-2 animate-ping rounded-full bg-tertiary" />
            Promo Bulan Ini
          </div>
          <h3 className="font-heading text-2xl font-bold leading-tight text-on-surface lg:text-3xl">
            Bonus Taksir +10% untuk Motherboard & VGA Rusak/Artefak
          </h3>
          <p className="text-sm leading-relaxed text-on-surface-variant">
            Khusus penyerahan via COD Jemput Barang dan Drop langsung ke Lab Gudang Komputer minggu
            ini. Ekstra nilai kompensasi tunai tanpa potongan tersembunyi!
          </p>
          <div className="flex flex-wrap items-center gap-2 pt-1">
            <Link
              to="/jual/form"
              className="font-heading inline-flex items-center gap-1.5 rounded-lg bg-pri px-4 py-2 text-sm font-semibold text-on-pri shadow-sm transition-colors hover:bg-pri-container"
            >
              Klaim Bonus Promo <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
