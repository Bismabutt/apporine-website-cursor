"use client";

import { useInViewOnce } from "./use-in-view-once";

/** A citrine line that draws in from the left once it is in view. Decorative. */
export function SignatureLine({ className = "mb-8" }: { className?: string }) {
  const [ref, shown] = useInViewOnce<HTMLDivElement>();
  return <div ref={ref} data-shown={shown || undefined} aria-hidden="true" className={`signature-line w-full ${className}`} />;
}
