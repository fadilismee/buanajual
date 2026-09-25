import { useEffect, useState } from "react";
import { BadgeCheck, Banknote, Recycle, Store } from "lucide-react";
import { Reveal } from "./Reveal";
import jualAssets from "@/data/jualAssets.json";
import { stats } from "./JualHero.data";

export function JualHero() {
  const slides = [
    ...jualAssets.heroStack.map((src, i) => ({
      src,
      chip: "LAB GUDANG",
      title: jualAssets.heroCaption + (i > 0 ? ` #${i + 1}` : ""),
    })),
    ...jualAssets.gallery.map((g) => ({ src: g.img, chip: g.chip, title: g.title })),
    { src: jualAssets.hero, chip: "WORKSHOP", title: jualAssets.heroCaption },
  ];

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion || slides.length <= 1) return;
    const id = window.setInterval(() => {
      if (!document.hidden) setIndex((i) => (i + 1) % slides.length);
    }, 3800);
    return () => window.clearInterval(id);
  }, [paused, reducedMotion, slides.length]);

  const current = slides[index] ?? slides[0]!;

  return (
    <section className="relative w-full overflow-hidden bg-surface-lowest">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-pri/5 via-transparent to-sec-container/10" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-8 px-4 py-10 sm:py-14 lg:grid-cols-12">
        <Reveal from="left" delay={0}>
          <div className="space-y-4 lg:col-span-8">
            <div className="font-monotech inline-flex items-center gap-2 rounded-full border border-pri/15 bg-pri/5 px-3 py-1 text-[11px] text-pri">
              <span className="h-2 w-2 animate-pulse rounded-full bg-tertiary" />
              <span>Update Harga Pasar: Minggu Ini</span>
              <span className="mx-1 text-outline">•</span>
              <span className="font-medium text-on-surface-variant">Bantul & D.I. Yogyakarta</span>
            </div>
            <div className="space-y-2">
              <p className="font-monotech text-[13px] uppercase tracking-wider text-sec">
                Katalog Terima & Buyback Komponen
              </p>
              <h1 className="font-heading text-2xl sm:text-4xl lg:text-5xl font-bold leading-[1.15] tracking-tight text-on-surface">
                Jual Hardware Bekas & Rusak Jadi{" "}
                <span className="text-pri underline decoration-sec-container decoration-wavy underline-offset-8">
                  Rupiah
                </span>{" "}
                — Gudang Komputer Bantul
              </h1>
            </div>
            <p className="max-w-2xl text-base leading-relaxed text-on-surface-variant sm:text-lg">
              Gudang Komputer menerima laptop second, PC rakitan, motherboard mati/rusak, VGA
              artefak, monitor bergaris, prosesor, SSD/HDD bad sector, hingga rongsokan limbah
              elektronik kantor. Taksiran akurat, cek teknis transparan di tempat, dan pembayaran
              instan.
            </p>
            <div className="font-monotech flex flex-wrap items-center gap-2 pt-1 text-[11px] text-on-surface">
              <div className="flex items-center gap-1.5 rounded border border-outline-variant/40 bg-surface-low px-3 py-1.5">
                <BadgeCheck size={16} className="text-pri" />
                <span>Estimasi Transparan</span>
              </div>
              <div className="flex items-center gap-1.5 rounded border border-outline-variant/40 bg-surface-low px-3 py-1.5">
                <Recycle size={16} className="text-sec" />
                <span>Terima Normal, Rusak, & Matot</span>
              </div>
              <div className="flex items-center gap-1.5 rounded border border-outline-variant/40 bg-surface-low px-3 py-1.5">
                <Banknote size={16} className="text-tertiary" />
                <span>Cair Instan Cash / BCA / QRIS</span>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal from="right" delay={120}>
          <div className="lg:col-span-4">
            <HeroSlideshow
              slides={slides}
              index={index}
              setIndex={setIndex}
              setPaused={setPaused}
              reducedMotion={reducedMotion}
              current={current}
            />
          </div>
        </Reveal>
      </div>
      <Reveal from="bottom" delay={200}>
        <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-2.5 px-4 pb-10 sm:gap-4 sm:pb-14 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="hover-lift flex items-center gap-2.5 rounded-xl border border-outline-variant/50 bg-surface-low p-3 sm:p-4"
            >
              <span
                className={`font-heading text-xl sm:text-2xl font-bold tracking-tight ${s.valueClass}`}
              >
                {s.value}
              </span>
              <p className="text-xs sm:text-sm leading-tight text-on-surface-variant">{s.label}</p>
            </div>
          ))}
          <Reveal from="bottom" delay={300}>
            <div className="col-span-2 sm:col-span-1 flex items-center gap-2.5 rounded-xl border border-outline-variant/50 bg-surface-low p-3 sm:p-4">
              <Store size={20} className="shrink-0 text-sec" />
              <p className="text-xs sm:text-sm leading-tight text-on-surface-variant">
                Mertosan Kulon, Banguntapan, Bantul DIY (COD Jogja)
              </p>
            </div>
          </Reveal>
          <Reveal from="bottom" delay={380}>
            <a
              href="#tabel-harga"
              className="col-span-2 sm:col-span-1 hover-lift hover-glow font-heading flex items-center justify-center gap-2 rounded-xl bg-pri px-4 py-3 text-xs sm:text-sm font-semibold text-on-pri shadow-sm transition-all hover:bg-pri-container text-center"
            >
              Jelajahi Price List Lengkap <span aria-hidden>↓</span>
            </a>
          </Reveal>
        </div>
      </Reveal>
    </section>
  );
}

function HeroSlideshow({
  slides,
  index,
  setIndex,
  setPaused,
  reducedMotion,
  current,
}: {
  slides: { src: string; chip?: string; title?: string }[];
  index: number;
  setIndex: (i: number) => void;
  setPaused: (v: boolean) => void;
  reducedMotion: boolean;
  current: { src: string; chip?: string; title?: string };
}) {
  return (
    <div
      className="group relative aspect-[3/4] w-full max-w-[260px] overflow-hidden rounded-xl border border-outline-variant/40 bg-surface-container shadow-lg sm:max-w-xs mx-auto lg:max-w-none"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      role="region"
      aria-label="Slideshow lab dan barang masuk Gudang Komputer"
      aria-roledescription="carousel"
    >
      {slides.map((s, i) => {
        const active = i === index;
        const prev = (index - 1 + slides.length) % slides.length;
        const visible = i === index || i === prev;
        if (!visible) return null;
        return (
          <img
            key={active ? `active-${index}-${s.src}` : `out-${i}-${s.src}`}
            src={s.src}
            alt={s.title ?? "Foto Gudang Komputer"}
            loading={i === 0 ? "eager" : "lazy"}
            aria-hidden={!active}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ease-in-out ${
              active ? "z-10 opacity-100" : "z-0 opacity-0"
            }`}
            style={
              active && !reducedMotion ? { animation: "kenburns 7s ease-out forwards" } : undefined
            }
          />
        );
      })}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-1/3 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 z-30 p-3">
        {current.chip && (
          <span className="font-monotech inline-block rounded bg-white/90 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-on-surface">
            {current.chip}
          </span>
        )}
        <p className="font-heading mt-1 line-clamp-2 text-xs font-semibold text-white drop-shadow">
          {current.title}
        </p>
      </div>

      <div className="absolute right-2 bottom-2 z-30 flex items-center gap-1">
        {slides.map((s, i) => (
          <button
            key={`dot-${i}-${s.src}`}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Tampilkan foto ${i + 1}: ${s.title ?? ""}`}
            aria-current={i === index}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === index ? "w-4 bg-white" : "w-1.5 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

      {!reducedMotion && (
        <div className="absolute inset-x-0 top-0 z-30 h-0.5 bg-black/10">
          <div
            key={index}
            className="h-full bg-white"
            style={{ animation: "slide-progress 3.8s linear forwards" }}
          />
        </div>
      )}
    </div>
  );
}
