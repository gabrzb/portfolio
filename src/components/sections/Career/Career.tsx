import "./Career.css";
import { ArrowRight } from "lucide-react";
import { useInView } from "../../../hooks/useInView";
import { jobs } from "../../../data/career";
import AnimatedBackground from "../../ui/FX/AnimatedBackground";
import TerminalSectionHeader from "../../shared/TerminalSectionHeader";
import CommandLinkButton from "../../shared/CommandLinkButton";
import JobCard from "./JobCard";

export default function Career() {
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.5, triggerOnce: true });
  const { ref: timelineRef, isInView: timelineInView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="career-section w-full py-20 md:py-32 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      <AnimatedBackground particleCount={40} particleColor="rgba(0, 255, 100, 0.3)" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div ref={headerRef}>
          <TerminalSectionHeader title="$ career_history" isInView={headerInView} />
        </div>

        <div ref={timelineRef} className="career-timeline relative">
          <div
            className={`hidden md:block absolute left-8 lg:left-1/2 top-0 w-0.5 bg-gradient-to-b from-white via-white/50 to-transparent transition-all duration-2000 ${
              timelineInView ? "h-full opacity-100" : "h-0 opacity-0"
            }`}
          />

          <div className="space-y-8 md:space-y-12">
            {jobs.map((job, index) => (
              <JobCard key={job.id} job={job} index={index} />
            ))}
          </div>
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <p className="text-gray-400 font-mono text-sm mb-4">
            <span className="text-white animate-blink-cursor">&gt;</span> Quer saber mais sobre minha jornada?
          </p>
          <CommandLinkButton href="#contact" label="download_cv()" icon={<ArrowRight size={18} />} />
        </div>
      </div>
    </section>
  );
}
