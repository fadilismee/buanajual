import { useEffect, useState, type ReactNode } from "react";
import { Outlet, useLocation, useRouter } from "@tanstack/react-router";

type PageTransitionProps = {
  children?: ReactNode;
  /** Custom enter animation class */
  enterClass?: string;
  /** Custom exit animation class */
  exitClass?: string;
  /** Transition duration in ms */
  duration?: number;
};

const DEFAULT_ENTER = "page-transition-enter";
const DEFAULT_EXIT = "page-transition-exit";

export function PageTransition({
  children,
  enterClass = DEFAULT_ENTER,
  exitClass = DEFAULT_EXIT,
  duration = 400,
}: PageTransitionProps) {
  const location = useLocation();
  const router = useRouter();
  const [key, setKey] = useState(0);
  const [isExiting, setIsExiting] = useState(false);
  const [exitPath, setExitPath] = useState<string | null>(null);

  // Navigasi manual untuk animasi exit
  const navigateWithTransition = (to: string, opts?: { replace?: boolean }) => {
    if (isExiting) return;
    setIsExiting(true);
    setExitPath(to);
    setTimeout(() => {
      router.navigate({ to, replace: opts?.replace ?? false });
      setIsExiting(false);
      setExitPath(null);
      setKey((k) => k + 1); // force remount
    }, duration);
  };

  // Auto-handle browser back/forward
  useEffect(() => {
    const handlePopState = () => {
      if (!isExiting) setKey((k) => k + 1);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, [isExiting]);

  const contentClass = isExiting ? exitClass : enterClass;

  return (
    <>
      <div
        key={key}
        className={contentClass}
        style={{ animationDuration: `${duration}ms` }}
        role="main"
        aria-live="polite"
      >
        {children ?? <Outlet />}
      </div>
      {/* Expose navigate function via context if needed */}
    </>
  );
}

/** Hook untuk navigasi dengan transisi halaman */
export function usePageTransition() {
  const router = useRouter();
  const [isExiting, setIsExiting] = useState(false);
  const duration = 400;

  const navigate = (to: string, opts?: { replace?: boolean }) => {
    if (isExiting) return;
    setIsExiting(true);
    setTimeout(() => {
      router.navigate({ to, replace: opts?.replace ?? false });
      setIsExiting(false);
    }, duration);
  };

  return { navigate, isExiting };
}

/** Link wrapper yang otomatis pakai transisi halaman */
import { Link } from "@tanstack/react-router";

interface AnimatedLinkProps {
  to: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  replace?: boolean;
  [key: string]: React.ComponentPropsWithoutRef<"a">[keyof React.ComponentPropsWithoutRef<"a">];
}

export function AnimatedLink({ className = "", onClick, ...props }: AnimatedLinkProps) {
  const { navigate, isExiting } = usePageTransition();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey || // new tab/window
      e.button !== 0 || // not left click
      e.currentTarget.target === "_blank" || // target blank
      e.currentTarget.href.startsWith("mailto:") ||
      e.currentTarget.href.startsWith("tel:") ||
      (e.currentTarget.href.startsWith("http") &&
        !e.currentTarget.href.startsWith(window.location.origin))
    ) {
      // Biarkan default behavior
      return;
    }

    e.preventDefault();
    if (onClick) onClick(e);
    if (!isExiting) {
      if (props.replace) {
        navigate(props.to as string, { replace: true });
      } else {
        navigate(props.to as string);
      }
    }
  };

  return (
    <Link
      {...props}
      onClick={handleClick as React.EventHandler<React.MouseEvent<HTMLAnchorElement>>}
      className={className}
    />
  );
}

/** Staggered page content wrapper — masuk berurutan */
export function StaggeredPageContent({
  children,
  containerClass = "",
  itemClass = "",
  baseDelay = 0,
  stepDelay = 80,
  from = "bottom",
}: {
  children: ReactNode[];
  containerClass?: string;
  itemClass?: string;
  baseDelay?: number;
  stepDelay?: number;
  from?: "bottom" | "left" | "right" | "scale" | "rotate" | "flip" | "blur";
}) {
  return (
    <div className={`stagger-container ${containerClass}`}>
      {children.map((child, i) => (
        <Reveal key={i} delay={baseDelay + i * stepDelay} from={from} once className={itemClass}>
          {child}
        </Reveal>
      ))}
    </div>
  );
}

// Re-export Reveal for convenience (avoid circular import)
import { Reveal, StaggeredReveal, TextReveal, Parallax, CountUp } from "./Reveal";
export { Reveal, StaggeredReveal, TextReveal, Parallax, CountUp };
