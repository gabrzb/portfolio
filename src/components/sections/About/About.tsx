import "./About.css";
import { Code2, Database, Terminal } from "lucide-react";
import { useInView } from "../../../hooks/useInView";
import { useCounter } from "../../../hooks/useCounter";
import { useI18n } from "../../../context/I18nContext";
import { techLogos } from "../../../data/techLogos";
import AnimatedBackground from "../../ui/FX/AnimatedBackground";
import LogoLoop from "../../ui/LogoLoop/LogoLoop";
import TerminalSectionHeader from "../../shared/TerminalSectionHeader";
import CommandLinkButton from "../../shared/CommandLinkButton";

const skillIcons = [Code2, Database, Terminal];

export default function About() {
  const { content } = useI18n();
  const { about: aboutContent } = content;

  const { ref: sectionRef, isInView } = useInView({ threshold: 0.2, triggerOnce: true });
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.5, triggerOnce: true });
  const { ref: statsRef, isInView: statsInView } = useInView({ threshold: 0.5, triggerOnce: true });
  const { ref: skillsRef, isInView: skillsInView } = useInView({ threshold: 0.3, triggerOnce: true });

  const yearsCount = useCounter({ end: 5, duration: 2000, isInView: statsInView });
  const projectsCount = useCounter({ end: 50, duration: 2500, isInView: statsInView });
  const satisfactionCount = useCounter({ end: 100, duration: 2000, isInView: statsInView });

  const counterValues = [yearsCount, projectsCount, satisfactionCount];

  return (
    <>
      <div className="transition-divider" />

      <section
        ref={sectionRef}
        className="about-section w-full py-20 md:py-32 px-4 md:px-8 lg:px-16 relative overflow-hidden"
      >
        <AnimatedBackground particleCount={30} />

        <div className="max-w-6xl mx-auto relative z-10">
          <div ref={headerRef}>
            <TerminalSectionHeader title={aboutContent.sectionTitle} isInView={headerInView} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div
              className={`space-y-6 transition-all duration-1000 delay-300 ${
                isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="text-gray-300 space-y-4">
                <p className="text-sm md:text-base leading-relaxed animate-fade-in-up">
                  <span className="text-white">~/</span>
                  <span className="text-white font-mono">{aboutContent.introRole}</span> {aboutContent.introLead}
                </p>
                <p className="text-sm md:text-base leading-relaxed animate-fade-in-up animation-delay-200">
                  {aboutContent.paragraphs[0]}
                </p>
                <p className="text-sm md:text-base leading-relaxed animate-fade-in-up animation-delay-400">
                  {aboutContent.paragraphs[1]}
                </p>
              </div>

              <CommandLinkButton
                href="#contact"
                label={aboutContent.ctaLabel}
                icon={<Terminal size={18} />}
                className="mt-4"
              />
            </div>

            <div ref={skillsRef} className="space-y-4">
              {aboutContent.skills.map((skill, index) => {
                const Icon = skillIcons[index];
                return (
                  <div
                    key={skill.title}
                    className={`skill-card p-4 md:p-6 border border-white/20 bg-black/40 hover:bg-black/60 transition-all duration-500 transform ${
                      skillsInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                    }`}
                    style={{ transitionDelay: `${skill.delayMs}ms` }}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Icon className={`text-white ${skill.iconAnimationClassName}`} size={24} />
                      <h3 className="text-white font-mono text-sm md:text-base font-bold">{skill.title}</h3>
                    </div>
                    <p className="text-gray-400 text-xs md:text-sm mb-3">{skill.description}</p>
                    <div className="border-t border-white/20 pt-3">
                      <div className="text-gray-500 font-mono text-xs">
                        <span className="text-white animate-blink-cursor">&gt;</span> {skill.command}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div ref={statsRef} className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {aboutContent.stats.map((stat, index) => {
              const isInfinity = stat.value === "infinity";
              const displayValue = isInfinity ? "∞" : `${counterValues[index]}${stat.suffix ?? ""}`;

              return (
                <div
                  key={stat.label}
                  className={`stat-card text-center p-4 border border-white/20 bg-black/40 transition-all duration-700 transform ${
                    statsInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
                  }`}
                  style={{ transitionDelay: `${stat.delayMs}ms` }}
                >
                  <div
                    className={`text-white font-bold text-2xl md:text-3xl font-mono ${
                      isInfinity ? "animate-infinity" : "animate-number-glow"
                    }`}
                  >
                    {displayValue}
                  </div>
                  <div className="text-gray-400 text-xs md:text-sm mt-2">{stat.label}</div>
                </div>
              );
            })}
          </div>

          <div className="about-tech-loop mt-12 md:mt-16">
            <p className="about-tech-loop__title">
              <span className="text-white animate-blink-cursor">&gt;</span> {aboutContent.techLoopLabel}
            </p>
            <LogoLoop
              logos={techLogos}
              speed={90}
              logoHeight={34}
              gap={28}
              fadeOut
              fadeOutColor="#000000"
              ariaLabel={aboutContent.techLoopAriaLabel}
            />
          </div>
        </div>
      </section>
    </>
  );
}
