import "./Education.css";
import { useInView } from "../../../hooks/useInView";
import { useI18n } from "../../../context/I18nContext";
import AnimatedBackground from "../../ui/FX/AnimatedBackground";
import TerminalSectionHeader from "../../shared/TerminalSectionHeader";
import CertificateCard from "./CertificateCard";

export default function Education() {
  const { content } = useI18n();
  const { education } = content;

  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.5, triggerOnce: true });

  return (
    <section className="education-section w-full py-20 md:py-24 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      <AnimatedBackground particleCount={28} particleColor="rgba(120, 220, 255, 0.22)" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div ref={headerRef}>
          <TerminalSectionHeader title={education.sectionTitle} isInView={headerInView} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {education.certificates.map((certificate, index) => (
            <CertificateCard key={certificate.id} certificate={certificate} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
