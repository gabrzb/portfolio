import type { ReactNode } from "react";

interface CommandLinkButtonProps {
  href: string;
  label: string;
  icon: ReactNode;
  className?: string;
  target?: "_self" | "_blank";
  rel?: string;
}

export default function CommandLinkButton({
  href,
  label,
  icon,
  className = "",
  target = "_self",
  rel,
}: CommandLinkButtonProps) {
  const safeRel =
    target === "_blank"
      ? [rel, "noopener noreferrer"].filter(Boolean).join(" ")
      : rel;
  return (
    <a
      href={href}
      target={target}
      rel={safeRel}
      className={`group relative inline-flex items-center gap-2 px-6 md:px-8 py-2 md:py-3 border border-white text-white font-mono text-sm md:text-base hover:bg-white hover:text-black transition-all duration-300 overflow-hidden animate-pulse-glow ${className}`.trim()}
    >
      <span className="relative z-10 flex items-center gap-2">
        {label} {icon}
      </span>
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 -z-0"
      />
    </a>
  );
}
