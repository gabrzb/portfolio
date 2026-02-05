import "./Career.css";
import { ArrowRight } from "lucide-react";
import { useInView } from "../../../hooks/useInView";
import { useI18n } from "../../../context/I18nContext";
import AnimatedBackground from "../../ui/FX/AnimatedBackground";
import TerminalSectionHeader from "../../shared/TerminalSectionHeader";
import CommandLinkButton from "../../shared/CommandLinkButton";
import JobCard from "./JobCard";

export default function Career() {
  const { content } = useI18n();
  const { career } = content;

  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.5, triggerOnce: true });
  const { ref: timelineRef, isInView: timelineInView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="career-section w-full py-20 md:py-32 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      <AnimatedBackground particleCount={40} particleColor="rgba(0, 255, 100, 0.3)" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div ref={headerRef}>
          <TerminalSectionHeader title={career.sectionTitle} isInView={headerInView} />
        </div>

        <div ref={timelineRef} className="career-timeline relative">
          <div
            className={`hidden md:block absolute left-8 lg:left-1/2 top-0 w-0.5 bg-gradient-to-b from-white via-white/50 to-transparent transition-all duration-2000 ${
              timelineInView ? "h-full opacity-100" : "h-0 opacity-0"
            }`}
          />

          <div className="space-y-8 md:space-y-12">
            {career.jobs.map((job, index) => (
              <JobCard
                key={job.id}
                job={job}
                index={index}
                activeJobLabel={career.activeJobLabel}
                stackUsedLabel={career.stackUsedLabel}
              />
            ))}
          </div>
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <p className="text-gray-400 font-mono text-sm mb-4">
            <span className="text-white animate-blink-cursor">&gt;</span> {career.prompt}
          </p>
          <CommandLinkButton href="#contact" label={career.ctaLabel} icon={<ArrowRight size={18} />} />
        </div>
      </div>
    </section>
  );
}
