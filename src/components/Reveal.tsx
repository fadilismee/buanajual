import { useEffect, useRef, useState, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Delay dalam ms sebelum transisi mulai (untuk efek stagger). */
  delay?: number;
  className?: string;
  /** Sisi asal animasi. Default: dari bawah. */
  from?:
    "bottom" | "left" | "right" | "scale" | "rotate" | "flip" | "blur" | "slide-up" | "slide-down";
  /** Once = true: animasi sekali saja (default). false = ulang setiap masuk viewport. */
  once?: boolean;
  /** Threshold IntersectionObserver (0-1). Default 0.12. */
  threshold?: number;
  /** Root margin untuk trigger lebih awal/terlambat. Default "0px 0px -32px 0px". */
  rootMargin?: string;
  /** Custom transition duration (ms). Default 700. */
  duration?: number;
  /** Custom easing. Default "ease-out". */
  easing?: string;
};

/**
 * Scroll-reveal: elemen masuk viewport (IntersectionObserver),
 * lalu fade + translate dengan halus. Hormati prefers-reduced-motion.
 */
export function Reveal({
  children,
  delay = 0,
  className = "",
  from = "bottom",
  once = true,
  threshold = 0.05,
  rootMargin = "60px 0px 60px 0px",
  duration = 550,
  easing = "cubic-bezier(0.16, 1, 0.3, 1)",
}: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }

    // Jika sudah ada di viewport saat load, langsung tampilkan
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight + 60 && rect.bottom > -60) {
      setVisible(true);
      setHasAnimated(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            setHasAnimated(true);
            if (once) io.disconnect();
          } else if (!once && hasAnimated) {
            setVisible(false);
          }
        }
      },
      { threshold, rootMargin },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once, hasAnimated, threshold, rootMargin]);

  const offset =
    from === "left"
      ? "-translate-x-6"
      : from === "right"
        ? "translate-x-6"
        : from === "scale"
          ? "scale-[0.97]"
          : from === "rotate"
            ? "rotate-2 scale-[0.97]"
            : from === "flip"
              ? "scale-[0.97]"
              : from === "blur"
                ? "scale-[0.97] blur-sm"
                : from === "slide-down"
                  ? "-translate-y-6"
                  : "translate-y-6";

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: easing,
      }}
      className={`transition-[opacity,transform,filter] ${visible ? "translate-x-0 translate-y-0 scale-100 rotate-0 opacity-100 blur-0" : `opacity-0 ${offset}`} ${className}`}
    >
      {children}
    </div>
  );
}

/** Stagger children helper — wrap array of children dengan delay increment. */
export function StaggeredReveal({
  children,
  baseDelay = 0,
  stepDelay = 80,
  from = "bottom",
  className = "",
  wrapperClassName = "",
  ...props
}: {
  children: ReactNode[];
  baseDelay?: number;
  stepDelay?: number;
  from?: RevealProps["from"];
  className?: string;
  wrapperClassName?: string;
} & Omit<RevealProps, "children" | "delay" | "from">) {
  return (
    <div className={wrapperClassName}>
      {children.map((child, i) => (
        <Reveal
          key={i}
          delay={baseDelay + i * stepDelay}
          from={from}
          className={className}
          {...props}
        >
          {child}
        </Reveal>
      ))}
    </div>
  );
}

/** Angka berjalan (count-up) sekali saat masuk viewport. */
export function CountUp({
  value,
  duration = 1400,
  format,
}: {
  value: number;
  duration?: number;
  format?: (n: number) => string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(value);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDisplay(value);
      return;
    }

    setDisplay(0);

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting || started.current) continue;
          started.current = true;
          io.disconnect();

          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - t, 3);
            setDisplay(Math.round(value * eased));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.1 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value, duration]);

  return <span ref={ref}>{format ? format(display) : display.toLocaleString("id-ID")}</span>;
}

/** Text reveal per character/word/line — cocok untuk heading hero. */
export function TextReveal({
  text,
  splitBy = "word", // "char" | "word" | "line"
  baseDelay = 0,
  stepDelay = 30,
  from = "bottom",
  className = "",
  as: Component = "span",
  ...props
}: {
  text: string;
  splitBy?: "char" | "word" | "line";
  baseDelay?: number;
  stepDelay?: number;
  from?: RevealProps["from"];
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
} & Omit<RevealProps, "children" | "delay" | "from">) {
  const parts =
    splitBy === "char"
      ? text.split("")
      : splitBy === "word"
        ? text.split(/(\s+)/)
        : text.split("\n");

  return (
    <Component
      className={`inline-flex ${splitBy === "word" ? "flex-wrap" : ""} ${className}`}
      {...props}
    >
      {parts.map((part, i) => (
        <Reveal key={i} delay={baseDelay + i * stepDelay} from={from} once>
          <span style={{ display: splitBy === "char" ? "inline-block" : "inline" }}>{part}</span>
        </Reveal>
      ))}
    </Component>
  );
}

/** Parallax scroll effect — elemen bergerak lebih lambat dari scroll. */
export function Parallax({
  children,
  speed = 0.3, // 0-1, semakin kecil semakin lambat
  className = "",
}: {
  children: ReactNode;
  speed?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [transform, setTransform] = useState("translateY(0px)");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollProgress = (viewportHeight - rect.top) / (viewportHeight + rect.height);
      const clamped = Math.max(0, Math.min(1, scrollProgress));
      const offset = (clamped - 0.5) * 100 * speed;
      setTransform(`translateY(${offset}px)`);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [speed]);

  return (
    <div ref={ref} className={className} style={{ transform, willChange: "transform" }}>
      {children}
    </div>
  );
}
