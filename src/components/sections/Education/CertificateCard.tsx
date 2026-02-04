import { Award, Building2, Calendar } from "lucide-react";
import { useInView } from "../../../hooks/useInView";
import type { Certificate } from "../../../types/content";

interface CertificateCardProps {
  certificate: Certificate;
  index: number;
}

export default function CertificateCard({ certificate, index }: CertificateCardProps) {
  const { ref, isInView } = useInView({ threshold: 0.25, triggerOnce: true });

  return (
    <article
      ref={ref}
      className={`education-card p-5 md:p-6 border border-white/20 bg-black/45 transition-all duration-700 transform ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="flex items-start gap-3 mb-4">
        <Award className="text-white mt-0.5 flex-shrink-0" size={20} />
        <div>
          <h3 className="text-white font-mono text-sm md:text-base font-bold">{certificate.title}</h3>
          <p className="text-gray-400 text-xs md:text-sm mt-1">{certificate.duration}</p>
        </div>
      </div>

      <div className="space-y-2 text-xs md:text-sm text-gray-300 mb-4">
        <p className="flex items-center gap-2">
          <Building2 size={14} className="text-white/70" />
          <span>{certificate.provider}</span>
        </p>
        <p className="flex items-center gap-2">
          <Calendar size={14} className="text-white/70" />
          <span>{certificate.year}</span>
        </p>
      </div>

      <div className="border-t border-white/20 pt-3 flex flex-wrap gap-2">
        {certificate.skills.map((skill) => (
          <span
            key={skill}
            className="px-2.5 py-1 text-[11px] md:text-xs font-mono border border-white/35 bg-white/5 text-gray-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}
