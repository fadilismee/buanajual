import { Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, Zap } from "lucide-react";
import { Reveal } from "./Reveal";

const WA_DIRECT =
  "https://wa.me/6285979220599?text=" +
  encodeURIComponent("Halo Gudang Komputer, saya mau cek estimasi harga hardware bekas/rusak");

export function JualHero() {
  return (
    <section className="relative w-full overflow-hidden bg-surface-container-lowest/90 py-14 lg:py-20 border-b border-surface-container tech-grid-bg">
      {/* Multi-layered Ambient Glows (from jual/DESIGN.md) */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[400px] bg-primary-container/15 blur-[140px] rounded-full" />
      <div className="pointer-events-none absolute -top-10 right-10 w-[350px] h-[350px] bg-amber-500/10 blur-[110px] rounded-full" />

      <div className="relative mx-auto max-w-[1280px] px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <Reveal from="bottom">
          {/* Status Ping Badge */}
          <div className="inline-flex items-center gap-2 bg-surface-container/90 backdrop-blur-sm px-3.5 py-1.5 rounded-full mb-4 border border-surface-container-high shadow-[0_0_15px_rgba(255,94,20,0.15)]">
            <div className="relative flex h-2 w-2 items-center justify-center">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary-container" />
            </div>
            <span className="font-monotech text-[11px] text-primary-fixed uppercase tracking-widest font-bold">
              ESTIMASI &lt; 15 MENIT • DANA CAIR INSTAN
            </span>
          </div>

          {/* Display Headline */}
          <h1 className="font-heading text-3xl sm:text-5xl lg:text-6xl uppercase text-on-surface tracking-tight font-extrabold leading-tight mb-3">
            JUAL HARDWARE.{" "}
            <span className="bg-gradient-to-r from-primary-container via-[#ff7836] to-secondary-container bg-clip-text text-transparent">
              CAIR SEKARANG.
            </span>
          </h1>

          <p className="font-heading text-base sm:text-lg text-on-surface-variant max-w-xl mx-auto mb-6">
            Laptop, GPU, Motherboard, PC &amp; Server mati total atau normal dibeli langsung di
            tempat.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-12">
            <a
              href={WA_DIRECT}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary-container hover:bg-secondary-container text-white px-7 py-3.5 rounded font-heading text-xs sm:text-sm uppercase tracking-wider font-bold transition-all duration-300 shadow-lg shadow-primary-container/25 hover:shadow-[0_0_30px_rgba(255,94,20,0.5)] hover:scale-[1.02]"
            >
              <Zap size={18} />
              <span>CEK HARGA INSTAN VIA WHATSAPP</span>
            </a>

            <Link
              to="/jual/form"
              className="inline-flex items-center gap-2 bg-surface-container hover:bg-surface-container-high border border-surface-container-high hover:border-primary-container/40 text-on-surface px-6 py-3.5 rounded font-heading text-xs sm:text-sm uppercase tracking-wider font-bold transition-all"
            >
              <span>Isi Form Taksiran</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>

        {/* Hero Visual Showcase Banner with Hardware Collages */}
        <Reveal from="bottom" delay={100} className="w-full">
          <div className="w-full relative rounded-2xl overflow-hidden border border-surface-container-high/90 shadow-2xl bg-surface-container-low group hover:border-primary-container/40 transition-all duration-500">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-0 relative">
              {/* Left Showcase: Live Hardware Diagnosa Display */}
              <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-between md:col-span-7 text-left space-y-6">
                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span className="font-monotech text-[10px] bg-primary-container/10 border border-primary-container/30 text-primary-fixed uppercase px-2.5 py-1 rounded font-bold">
                      DIAGNOSA TERBUKA LIVE
                    </span>
                    <span className="font-monotech text-[10px] bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 uppercase px-2.5 py-1 rounded font-bold flex items-center gap-1">
                      <CheckCircle2 size={11} />
                      ISO 14001 WIPE CERTIFIED
                    </span>
                  </div>

                  <h3 className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold uppercase tracking-tight text-white mb-2">
                    Bukan Sekadar Jual Beli — Nilai Adil Berdasarkan Komponen
                  </h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    Setiap unit bekas atau rusak di-uji di hadapan Anda. Layar, RAM, NVMe, IC power,
                    dan tembaga heatsink yang masih berfungsi tetap bernilai tunai.
                  </p>
                </div>

                {/* 3 Branch Hubs in Hero */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-surface-container-high/80">
                  <div className="space-y-1">
                    <span className="font-monotech text-[10px] text-primary-fixed font-bold block">
                      CABANG 01
                    </span>
                    <p className="font-heading text-xs font-bold text-white">Gunungkidul (DIY)</p>
                    <p className="text-[11px] text-on-surface-variant">Drop-off &amp; COD Jogja</p>
                  </div>

                  <div className="space-y-1">
                    <span className="font-monotech text-[10px] text-primary-fixed font-bold block">
                      CABANG 02
                    </span>
                    <p className="font-heading text-xs font-bold text-white">Lampung (Sumatera)</p>
                    <p className="text-[11px] text-on-surface-variant">Hub Regional Sumatera</p>
                  </div>

                  <div className="space-y-1">
                    <span className="font-monotech text-[10px] text-primary-fixed font-bold block">
                      CABANG 03
                    </span>
                    <p className="font-heading text-xs font-bold text-white">Cikarang (Jabar)</p>
                    <p className="text-[11px] text-on-surface-variant">
                      Kawasan Industri &amp; Jabodetabek
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Showcase: Visual Hardware Grid Collage */}
              <div className="relative md:col-span-5 min-h-[260px] md:min-h-full overflow-hidden bg-surface-container">
                <img
                  src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=800&q=80"
                  alt="Hardware Inspection Lab Gudang Komputer"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low via-surface-container-low/30 to-transparent md:bg-gradient-to-r" />

                {/* Floating Metric Tag */}
                <div className="absolute bottom-4 right-4 z-10 bg-surface-container-lowest/90 backdrop-blur-md border border-surface-container-high px-4 py-2.5 rounded-xl text-right shadow-xl">
                  <span className="font-monotech text-[10px] text-primary-fixed uppercase tracking-wider block">
                    Total Unit Diproses
                  </span>
                  <span className="font-heading text-lg font-extrabold text-white">
                    1.240+ Selesai Dicairkan
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
