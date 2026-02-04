import { Briefcase, Calendar, MapPin } from "lucide-react";
import { useInView } from "../../../hooks/useInView";
import type { Job } from "../../../types/content";

interface JobCardProps {
  job: Job;
  index: number;
}

export default function JobCard({ job, index }: JobCardProps) {
  const { ref: jobRef, isInView: jobInView } = useInView({ threshold: 0.3, triggerOnce: true });

  return (
    <div ref={jobRef} className="job-item relative">
      <div
        className={`hidden md:block absolute left-0 lg:left-1/2 top-8 -translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-black transition-all duration-500 ${
          jobInView ? "scale-100 opacity-100 animate-pulse-dot" : "scale-0 opacity-0"
        }`}
      />

      <div
        className={`${index % 2 === 0 ? "md:mr-auto md:w-1/2 md:pr-12" : "md:ml-auto md:w-1/2 md:pl-12"} transition-all duration-700 ${
          jobInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
        style={{ transitionDelay: `${index * 200}ms` }}
      >
        <div className="p-6 md:p-8 border border-white/30 bg-black/60 hover:bg-black/80 transition-all duration-300 backdrop-filter backdrop-blur-10px relative overflow-hidden group hover:scale-105 hover:border-white/50">
          <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur" />
          <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-0 animate-scanline" />
          </div>

          {job.current && (
            <div className="inline-block mb-4 px-3 py-1 bg-white/20 border border-white rounded text-white font-mono text-xs animate-pulse-glow">
              $ active_job
            </div>
          )}

          <div className="flex items-start gap-3 mb-4">
            <Briefcase className="text-white flex-shrink-0 mt-1 animate-float" size={20} />
            <div className="flex-1">
              <h3 className="text-lg md:text-xl font-bold text-white font-mono mb-1 group-hover:text-shadow-glow transition-all">
                {job.title}
              </h3>
              <p className="text-white font-mono text-sm">@ {job.company}</p>
            </div>
          </div>

          <div className="flex flex-col gap-2 mb-4 text-gray-400 text-sm">
            <div className="flex items-center gap-2">
              <Calendar size={16} className="text-white/70" />
              <span className="font-mono text-xs">{job.period}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={16} className="text-white/70" />
              <span className="font-mono text-xs">{job.location}</span>
            </div>
          </div>

          <div className="mb-4 space-y-2">
            {job.description.map((desc, descriptionIndex) => (
              <div
                key={descriptionIndex}
                className="text-gray-300 text-sm flex gap-2 animate-slide-in-right"
                style={{ animationDelay: `${descriptionIndex * 100}ms` }}
              >
                <span className="text-white/70 flex-shrink-0">→</span>
                <span>{desc}</span>
              </div>
            ))}
          </div>

          <div className="border-t border-white/20 pt-4">
            <p className="text-gray-400 text-xs font-mono mb-2">
              <span className="text-white animate-blink-cursor">&gt;</span> stack_used:
            </p>
            <div className="flex flex-wrap gap-2">
              {job.technologies.map((tech, techIndex) => (
                <span
                  key={tech}
                  className="px-3 py-1 text-xs font-mono bg-white/10 border border-white/40 text-white rounded hover:border-white hover:bg-white/20 transition-all duration-300 cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${techIndex * 50}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
