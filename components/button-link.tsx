import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: string;
  /** `primaryOnLight` is the plum button with citrine text, for Pearl and Ivory. */
  variant: "primary" | "secondary" | "primaryOnLight";
  size?: "default" | "nav" | "card";
  className?: string;
  onClick?: () => void;
};

const base =
  "group inline-flex shrink-0 items-center justify-center gap-2 rounded-pill font-sans font-semibold tracking-[0.01em] whitespace-nowrap " +
  "transition-[background-color,border-color,scale] duration-(--dur-micro) ease-brand active:scale-[0.98] " +
  "focus-visible:outline-3 focus-visible:outline-offset-3";

const variants = {
  primary: "bg-citrine text-plum-800 hover:bg-citrine-hover active:bg-citrine-pressed focus-visible:outline-citrine",
  secondary: "border border-plum-600 text-plum-50 hover:border-plum-300 focus-visible:outline-citrine",
  primaryOnLight: "bg-plum-800 text-citrine hover:bg-plum-700 active:bg-plum-900 focus-visible:outline-orchid-deep",
};

const sizes = {
  default: "h-[52px] px-7 text-[15px]",
  // Navigation capsule (05-navigation-spec.md section 2) and panel feature card (section 5).
  nav: "h-12 px-[22px] text-sm",
  card: "h-10 px-[18px] text-sm",
};

/**
 * Pill shaped link styled as a button (spec section 5).
 * Primary buttons carry a trailing arrow that slides 4px on hover.
 */
export function ButtonLink({
  href,
  children,
  variant,
  size = "default",
  className = "",
  onClick,
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      // Destinations are mostly placeholders for now: no prefetch on load.
      prefetch={false}
      onClick={onClick}
      // The custom cursor steps aside: the button shows its own hover style.
      data-cursor="button"
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
      {variant !== "secondary" && (
        <span
          aria-hidden="true"
          className="inline-block transition-transform duration-[180ms] ease-brand group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1"
        >
          →
        </span>
      )}
    </Link>
  );
}
