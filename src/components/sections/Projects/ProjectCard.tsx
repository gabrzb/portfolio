import { type MouseEvent, type ReactNode, useState } from "react";
import { Code, ExternalLink, Github } from "lucide-react";
import { useInView } from "../../../hooks/useInView";
import type { Project } from "../../../types/content";

interface ProjectCardProps {
  project: Project;
  index: number;
  isFeatured: boolean;
  stackLabel: string;
  codeLabel: string;
  demoLabel: string;
  codeAriaLabelPrefix: string;
  demoAriaLabelPrefix: string;
}

interface ProjectActionLinkProps {
  href: string;
  className: string;
  children: ReactNode;
  ariaLabel?: string;
}

function ProjectActionLink({ href, className, children, ariaLabel }: ProjectActionLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}

export default function ProjectCard({
  project,
  index,
  isFeatured,
  stackLabel,
  codeLabel,
  demoLabel,
  codeAriaLabelPrefix,
  demoAriaLabelPrefix,
}: ProjectCardProps) {
  const { ref, isInView } = useInView({ threshold: 0.2, triggerOnce: true });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const featuredLinkClassName =
    "flex-1 flex items-center justify-center gap-2 py-2 px-3 text-sm font-mono transition-all duration-300";
  const compactLinkClassName =
    "flex-1 flex items-center justify-center py-1.5 px-3 text-xs font-mono transition-all duration-300";

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };

  return (
    <div
      ref={ref}
      className={`project-card group relative transition-all duration-700 transform ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      } hover:scale-105`}
      style={{ transitionDelay: `${index * 150}ms` }}
      onMouseMove={handleMouseMove}
    >
      {isFeatured ? (
        <>
          <div className="relative overflow-hidden h-48 md:h-64 mb-4">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              style={{
                transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`,
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />

            <div
              className="absolute inset-0 bg-white/5 pointer-events-none transition-transform duration-200"
              style={{
                transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`,
              }}
            />
          </div>

          <div className="p-6 md:p-8 border border-white/30 bg-black/60 hover:bg-black/80 transition-all duration-300 backdrop-filter backdrop-blur-10px relative overflow-hidden">
            <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur" />

            <div className="flex items-start gap-2 mb-3">
              <Code className="text-white flex-shrink-0 mt-1 animate-float" size={20} />
              <h3 className="text-lg md:text-xl font-bold text-white font-mono group-hover:text-shadow-glow transition-all">
                {project.title}
              </h3>
            </div>

            <p className="text-gray-300 text-sm md:text-base mb-4">{project.longDescription}</p>

            <div className="mb-4 space-y-1">
              {project.features.slice(0, 3).map((feature, featureIndex) => (
                <div
                  key={featureIndex}
                  className="text-gray-400 text-xs flex gap-2 animate-slide-in-right"
                  style={{ animationDelay: `${featureIndex * 100}ms` }}
                >
                  <span className="text-white/70">→</span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="mb-4 border-t border-white/20 pt-4">
              <p className="text-gray-400 text-xs font-mono mb-2">
                <span className="text-white animate-blink-cursor">&gt;</span> {stackLabel}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech, techIndex) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs font-mono bg-white/10 border border-white/40 text-white rounded hover:bg-white/20 hover:border-white transition-all duration-300 animate-fade-in"
                    style={{ animationDelay: `${techIndex * 50}ms` }}
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-2 py-1 text-xs font-mono text-gray-500">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
            </div>

            <div className="flex gap-3 pt-4 border-t border-white/20">
              <ProjectActionLink
                href={project.github}
                className={`${featuredLinkClassName} border border-white text-white hover:bg-white hover:text-black`}
                ariaLabel={`${codeAriaLabelPrefix} ${project.title}`}
              >
                <Github size={16} /> {codeLabel}
              </ProjectActionLink>
              <ProjectActionLink
                href={project.live}
                className={`${featuredLinkClassName} bg-white text-black hover:bg-gray-200`}
                ariaLabel={`${demoAriaLabelPrefix} ${project.title}`}
              >
                <ExternalLink size={16} /> {demoLabel}
              </ProjectActionLink>
            </div>
          </div>
        </>
      ) : (
        <div className="p-4 md:p-6 border border-white/20 bg-black/40 hover:bg-black/60 transition-all duration-300 backdrop-filter backdrop-blur-10px relative overflow-hidden">
          <div className="absolute -inset-1 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur" />

          <div className="flex items-start gap-2 mb-3">
            <Code className="text-white flex-shrink-0 mt-1 animate-float" size={18} />
            <h4 className="text-base md:text-lg font-bold text-white font-mono">{project.title}</h4>
          </div>

          <p className="text-gray-400 text-xs md:text-sm mb-4">{project.description}</p>

          <div className="mb-4 pb-4 border-b border-white/20">
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.slice(0, 2).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-xs font-mono bg-white/10 border border-white/40 text-white rounded hover:bg-white/20 transition-all"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 2 && (
                <span className="px-2 py-0.5 text-xs font-mono text-gray-500">
                  +{project.technologies.length - 2}
                </span>
              )}
            </div>
          </div>

          <div className="flex gap-2">
            <ProjectActionLink
              href={project.github}
              className={`${compactLinkClassName} border border-white/50 text-white hover:border-white hover:bg-white/10`}
              ariaLabel={`${codeAriaLabelPrefix} ${project.title}`}
            >
              <Github size={14} />
            </ProjectActionLink>
            <ProjectActionLink
              href={project.live}
              className={`${compactLinkClassName} bg-white/20 border border-white/50 text-white hover:bg-white/30`}
              ariaLabel={`${demoAriaLabelPrefix} ${project.title}`}
            >
              <ExternalLink size={14} />
            </ProjectActionLink>
          </div>
        </div>
      )}
    </div>
  );
}
