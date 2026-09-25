import { useEffect, useState, type ReactNode } from "react";
import { Link, Outlet, useRouter } from "@tanstack/react-router";
import { Reveal, StaggeredReveal, TextReveal, Parallax, CountUp } from "./Reveal";

export { Reveal, StaggeredReveal, TextReveal, Parallax, CountUp };

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
  const [key, setKey] = useState(0);
  const [isExiting] = useState(false);

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
    <div
      key={key}
      className={contentClass}
      style={{ animationDuration: `${duration}ms` }}
      role="main"
      aria-live="polite"
    >
      {children ?? <Outlet />}
    </div>
  );
}

interface AnimatedLinkProps {
  to: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  replace?: boolean;
  [key: string]: React.ComponentPropsWithoutRef<"a">[keyof React.ComponentPropsWithoutRef<"a">];
}

export function AnimatedLink({ className = "", onClick, ...props }: AnimatedLinkProps) {
  const router = useRouter();
  const [isExiting, setIsExiting] = useState(false);
  const duration = 400;

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
      setIsExiting(true);
      setTimeout(() => {
        router.navigate({ to: props.to, replace: props.replace ?? false });
        setIsExiting(false);
      }, duration);
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
