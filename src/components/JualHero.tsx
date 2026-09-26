import { Link } from "@tanstack/react-router";
import { ArrowRight, Zap } from "lucide-react";
import { Reveal } from "./Reveal";

const WA_DIRECT =
  "https://wa.me/6285979220599?text=" +
  encodeURIComponent("Halo Gudang Komputer, saya mau cek estimasi harga hardware");

export function JualHero() {
  return (
    <section className="relative w-full overflow-hidden bg-surface-container-lowest/80 py-16 lg:py-20 border-b border-surface-container tech-grid-bg">
      {/* Multi-layered Ambient Glows */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[450px] bg-primary-container/15 blur-[140px] rounded-full" />
      <div className="pointer-events-none absolute -top-10 right-10 w-[350px] h-[350px] bg-amber-500/10 blur-[110px] rounded-full" />

      <div className="relative w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <Reveal from="bottom">
          {/* Status Ping Badge */}
          <div className="inline-flex items-center gap-2 bg-surface-container/90 backdrop-blur-sm px-3.5 py-1.5 rounded-full mb-4 border border-surface-container-high shadow-[0_0_15px_rgba(255,94,20,0.15)]">
            <div className="relative flex h-2 w-2 items-center justify-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary-container" />
            </div>
            <span className="font-monotech text-xs text-primary-fixed uppercase tracking-widest font-bold">
              ESTIMASI &lt; 15 MENIT • DANA CAIR INSTAN
            </span>
          </div>

          {/* Display Headline */}
          <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl uppercase text-on-surface tracking-tight font-bold leading-tight mb-3">
            JUAL HARDWARE.{" "}
            <span className="bg-gradient-to-r from-primary-container via-[#ff7836] to-secondary-container bg-clip-text text-transparent">
              CAIR SEKARANG.
            </span>
          </h1>

          <p className="font-heading text-base md:text-lg text-on-surface-variant max-w-xl mx-auto mb-6">
            Laptop, GPU, PC &amp; Server mati/normal dibeli langsung di 3 cabang resmi.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <a
              href={WA_DIRECT}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-container hover:bg-secondary-container text-white px-8 py-3.5 rounded font-heading text-xs sm:text-sm uppercase tracking-wider font-bold transition-all duration-300 shadow-lg shadow-primary-container/25 hover:shadow-[0_0_30px_rgba(255,94,20,0.5)] hover:scale-[1.02]"
            >
              <Zap size={18} />
              <span>CEK HARGA INSTAN</span>
            </a>

            <Link
              to="/jual/form"
              className="inline-flex items-center gap-2 bg-surface-container hover:bg-surface-container-high border border-surface-container-high hover:border-primary-container/40 text-on-surface px-6 py-3.5 rounded font-heading text-xs sm:text-sm uppercase tracking-wider font-bold transition-all"
            >
              <span>Form Pengajuan</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>

        {/* Hero Showcase Photo */}
        <Reveal from="bottom" delay={120} className="w-full">
          <div className="w-full relative rounded-xl overflow-hidden border border-surface-container-high/90 shadow-2xl bg-surface-container-low group hover:border-primary-container/40 transition-all duration-500">
            <img
              alt="Hardware Buyback Showcase"
              className="w-full h-64 md:h-[440px] lg:h-[500px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
              src="https://lh3.googleusercontent.com/aida/AEtjO1Wc7mrgO28jINYhAENDm2FOg1qnmexVSMZNbQS5aV2aiH68dXwf3yoXchx-PY7WzuZNEq52Zt3CmrpubcxkixgaJGbhAbC9NbHPOpEBBttS9cKZH4vosBAlUvTbps6qbPBBWM32ShUQIJ08FpM1srlaKswP-16jBOOq--7S3pAbdJTD7kbmSWMI9HKVvAPYWn_FeYOu5OhfqVgCL_wSmP0gx5vTWNRY23gAkZv2Q2nBrVKeq3CqvosB340j"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
