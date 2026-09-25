import { useCallback, useEffect, useRef } from "react";
import { Camera, ChevronLeft, ChevronRight } from "lucide-react";
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
    <section className="mx-auto w-full max-w-7xl px-4 py-12">
      <Reveal from="bottom">
        <div className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xs">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-2xl space-y-2">
              <div className="font-monotech inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-0.5 text-[11px] font-bold uppercase tracking-wider text-blue-700">
                <Camera size={14} />
                Dokumentasi Barang Masuk
              </div>
              <h2 className="font-heading text-2xl font-bold text-slate-900 sm:text-3xl">
                Contoh Nyata Kondisi Barang yang Pernah Kami Beli
              </h2>
              <p className="text-xs sm:text-sm text-slate-600">
                Dari laptop mati total bertahun-tahun, VGA artefak, hingga unit normal. Semua ada
                nilainya dan dibayar tunai.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prev}
                aria-label="Geser galeri ke kiri"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 shadow-2xs transition-colors hover:bg-blue-600 hover:text-white hover:border-blue-600"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Geser galeri ke kanan"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 shadow-2xs transition-colors hover:bg-blue-600 hover:text-white hover:border-blue-600"
              >
                <ChevronRight size={18} />
              </button>
            </div>
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
              className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 -mx-2 px-2"
              role="region"
              aria-label="Galeri foto barang masuk"
              aria-roledescription="carousel"
            >
              {items.map((g, i) => (
                <div
                  key={`${g.img}-${i}`}
                  data-gal-card
                  className="shrink-0 w-72 sm:w-80 flex-shrink-0"
                >
                  <div className="group overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-3 transition-all hover:border-blue-300 hover:shadow-md">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-200">
                      <img
                        src={g.img}
                        alt={g.title}
                        loading="lazy"
                        draggable={false}
                        className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="font-monotech absolute top-2.5 left-2.5 rounded-lg bg-slate-900/80 backdrop-blur-xs px-2.5 py-0.5 text-[10px] font-bold text-white shadow-xs">
                        {g.chip}
                      </span>
                    </div>
                    <div className="p-2">
                      <h4 className="font-heading text-sm font-bold text-slate-900 line-clamp-1">
                        {g.title}
                      </h4>
                      {g.note && (
                        <p className="mt-1 text-xs text-slate-500 line-clamp-2 leading-relaxed">
                          {g.note}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
