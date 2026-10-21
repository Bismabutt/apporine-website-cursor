import type { Tone } from "./tone";

type SilentQuestionProps = {
  tone: Tone;
  children: string;
  className?: string;
};

/**
 * The question a visitor is already asking, set in Instrument Serif between
 * the eyebrow and the headline that answers it. Orchid Deep on light: Orchid
 * itself is just under 4.5:1 on Pearl at this size.
 */
export function SilentQuestion({ tone, children, className = "mb-6" }: SilentQuestionProps) {
  const colour = tone === "dark" ? "text-citrine" : "text-orchid-deep";
  return (
    <p className={`max-w-[40rem] font-serif text-[clamp(22px,2.4vw,34px)] leading-[1.25] italic ${colour} ${className}`}>
      {children}
    </p>
  );
}
