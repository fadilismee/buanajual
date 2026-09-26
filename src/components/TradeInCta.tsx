import { MessageCircle } from "lucide-react";
import { Reveal } from "./Reveal";

const WA_DIRECT =
  "https://wa.me/6285979220599?text=" +
  encodeURIComponent("Halo Gudang Komputer, saya mau jual hardware komputer bekas/rusak");

export function TradeInCta() {
  return (
    <section className="relative w-full bg-surface-container py-16 border-t border-surface-container-high text-center overflow-hidden">
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-primary-container/15 blur-[120px] rounded-full" />

      <div className="relative w-full max-w-[800px] mx-auto px-4 flex flex-col items-center gap-4">
        <Reveal from="bottom">
          <div className="space-y-3">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl uppercase text-on-surface font-extrabold tracking-tight">
              Siap Ubah Hardware Menjadi Uang Tunai?
            </h2>
            <p className="text-xs sm:text-base text-on-surface-variant max-w-lg mx-auto leading-relaxed">
              Hubungi tim teknisi kami via WhatsApp sekarang untuk estimasi penawaran instan dalam
              15 menit di 3 cabang resmi.
            </p>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              className="inline-flex items-center gap-2 bg-primary-container hover:bg-secondary-container text-white px-8 py-3.5 rounded font-heading text-xs sm:text-sm uppercase tracking-wider font-bold transition-all duration-300 shadow-lg shadow-primary-container/25 hover:shadow-[0_0_25px_rgba(255,94,20,0.5)] hover:scale-[1.02]"
              href={WA_DIRECT}
              rel="noopener noreferrer"
              target="_blank"
            >
              <MessageCircle size={18} />
              <span>Konsultasi Penjualan via WhatsApp</span>
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 font-monotech text-[11px] text-on-surface-variant">
            <span>✓ Cek Lab Gratis 15 Menit</span>
            <span>•</span>
            <span>✓ 3 Cabang Resmi (DIY, Lampung, Cikarang)</span>
            <span>•</span>
            <span>✓ Dana Cair Detik Itu Juga</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
