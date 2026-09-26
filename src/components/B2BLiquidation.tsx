import { Building2, Handshake } from "lucide-react";
import { Reveal } from "./Reveal";

const WA_B2B =
  "https://wa.me/6285979220599?text=" +
  encodeURIComponent(
    "Halo Gudang Komputer, kami ingin mengajukan likuidasi aset hardware kantor B2B",
  );

export function B2BLiquidation() {
  return (
    <section className="w-full bg-surface py-12 relative" id="b2b-liquidation">
      <div className="w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal from="bottom">
          <div className="bg-surface-container border border-surface-container-high hover:border-primary-container/40 transition-all duration-300 rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 shadow-xl">
            <div className="flex flex-col gap-2 max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-surface-container-lowest px-2.5 py-1 rounded w-fit border border-surface-container-high/60">
                <Building2 className="text-primary-container w-4 h-4" />
                <span className="font-monotech text-[10px] text-primary-fixed uppercase font-bold tracking-wider">
                  LAYANAN B2B &amp; ASSET DISPOSAL
                </span>
              </div>
              <h3 className="font-heading text-xl md:text-2xl uppercase text-on-surface font-bold tracking-tight">
                Punya 20+ Unit Komputer Kantor Mau Dilelang?
              </h3>
              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                Appraisal on-site ke kantor Anda (area DIY, Lampung, dan Jabodetabek), dokumen BAST
                resmi, faktur, dan sertifikat penghapusan data permanen berstandar militer DoD
                5220.22-M.
              </p>
            </div>
            <a
              className="shrink-0 inline-flex items-center gap-2 bg-primary-container hover:bg-secondary-container text-white px-6 py-3 rounded font-heading text-xs sm:text-sm uppercase tracking-wider font-bold transition-all duration-300 shadow-md hover:shadow-[0_0_25px_rgba(255,94,20,0.4)] hover:scale-[1.02]"
              href={WA_B2B}
              rel="noopener noreferrer"
              target="_blank"
            >
              <Handshake size={18} />
              <span>Ajukan Appraisal Kantor</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
