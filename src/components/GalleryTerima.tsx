import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";
import jualAssets from "@/data/jualAssets.json";

export function GalleryTerima() {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const pausedRef = useRef(false);
  const items = jualAssets.gallery;

  const step = () => {
    const el = trackRef.current;
    if (!el) return 296;
    const card = el.querySelector<HTMLElement>("[data-gal-card]");
    return (card?.offsetWidth ?? 280) + 16;
  };

  const next = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 24;
    if (atEnd) el.scrollTo({ left: 0, behavior: "smooth" });
    else el.scrollBy({ left: step(), behavior: "smooth" });
  }, []);

  const prev = () => {
    const el = trackRef.current;
    if (!el) return;
    if (el.scrollLeft <= 24) el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
    else el.scrollBy({ left: -step(), behavior: "smooth" });
  };

  useEffect(() => {
    const id = window.setInterval(() => {
      if (!pausedRef.current && !document.hidden) next();
    }, 3500);
    return () => window.clearInterval(id);
  }, [next]);

  return (
    <Reveal from="bottom" delay={0} className="mx-auto w-full max-w-7xl px-4 pb-10">
      <div className="space-y-6 rounded-2xl border border-outline-variant/40 bg-surface-lowest p-6 shadow-sm lg:p-10">
        <div className="max-w-2xl space-y-2">
          <div className="font-monotech flex items-center gap-2 text-[11px] uppercase tracking-widest text-pri">
            <span aria-hidden>📸</span>
            Foto Nyata Barang Masuk
          </div>
          <h2 className="font-heading text-2xl font-bold text-on-surface sm:text-3xl lg:text-4xl">
            Foto nyata kondisi barang yang sudah kami terima & bayar — biar Anda tahu persis apa
            yang kami terima.
          </h2>
        </div>
        <div className="relative">
          <div
            ref={trackRef}
            onMouseEnter={() => {
              pausedRef.current = true;
            }}
            onMouseLeave={() => {
              pausedRef.current = false;
            }}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4 -mx-4 px-4"
            role="region"
            aria-label="Galeri foto barang masuk"
            aria-roledescription="carousel"
          >
            {items.map((g, i) => (
              <div
                key={`${g.img}-${i}`}
                data-gal-card
                className="shrink-0 w-72 sm:w-80 lg:w-96 flex-shrink-0"
              >
                <div className="space-y-3">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-surface-container shadow-sm">
                    <img
                      src={g.img}
                      alt={g.title}
                      loading="lazy"
                      draggable={false}
                      className="h-full w-full object-cover object-center transition-all duration-300 hover:scale-[1.01]"
                    />
                  </div>
                  <div className="px-0.5 pb-2">
                    <span className="font-monotech inline-block rounded bg-pri/10 px-2 py-0.5 text-[11px] font-semibold text-pri">
                      {g.chip}
                    </span>
                    <h4 className="font-heading mt-1 line-clamp-1 text-sm font-semibold text-on-surface">
                      {g.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            type="button"
            onClick={() => {
              const el = trackRef.current;
              if (!el) return;
              if (el.scrollLeft <= 24) el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
              else
                el.scrollBy({
                  left: -(
                    (el.querySelector<HTMLElement>("[data-gal-card]")?.offsetWidth ?? 280) + 16
                  ),
                  behavior: "smooth",
                });
            }}
            aria-label="Geser galeri ke kiri"
            className="absolute top-1/2 left-0 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-outline-variant/50 bg-surface-lowest text-on-surface shadow-md transition-colors hover:bg-pri hover:text-on-pri"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={() => {
              const el = trackRef.current;
              if (!el) return;
              const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 24;
              const card = el.querySelector<HTMLElement>("[data-gal-card]");
              const stepSize = (card?.offsetWidth ?? 280) + 16;
              if (atEnd) el.scrollTo({ left: 0, behavior: "smooth" });
              else el.scrollBy({ left: stepSize, behavior: "smooth" });
            }}
            aria-label="Geser galeri ke kanan"
            className="absolute top-1/2 right-0 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-outline-variant/50 bg-surface-lowest text-on-surface shadow-md transition-colors hover:bg-pri hover:text-on-pri"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </Reveal>
  );
}
