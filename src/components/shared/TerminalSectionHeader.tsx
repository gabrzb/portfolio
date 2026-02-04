import TypingEffect from "../ui/FX/TypingEffect";

interface TerminalSectionHeaderProps {
  title: string;
  isInView: boolean;
}

export default function TerminalSectionHeader({ title, isInView }: TerminalSectionHeaderProps) {
  return (
    <div
      className={`terminal-header mb-12 md:mb-16 transition-all duration-1000 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-mono mb-2">
        <TypingEffect text={title} speed={80} isInView={isInView} />
      </h2>
      <div className="border-b border-white/30 animate-expand" />
    </div>
  );
}
