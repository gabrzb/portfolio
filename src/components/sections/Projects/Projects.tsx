import "./Projects.css";
import { ExternalLink, Users, Zap } from "lucide-react";
import { useInView } from "../../../hooks/useInView";
import { projects } from "../../../data/projects";
import AnimatedBackground from "../../ui/FX/AnimatedBackground";
import TerminalSectionHeader from "../../shared/TerminalSectionHeader";
import CommandLinkButton from "../../shared/CommandLinkButton";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.5, triggerOnce: true });

  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section className="projects-section w-full py-20 md:py-32 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      <AnimatedBackground particleCount={50} particleColor="rgba(100, 200, 255, 0.3)" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div ref={headerRef}>
          <TerminalSectionHeader title="$ ls projects/" isInView={headerInView} />
        </div>

        <div className="mb-16 md:mb-24">
          <h3 className="text-xl md:text-2xl font-mono text-white mb-8 flex items-center gap-2">
            <Zap size={20} className="animate-pulse" /> Featured Projects
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} isFeatured />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl md:text-2xl font-mono text-white mb-8 flex items-center gap-2">
            <Users size={20} className="animate-pulse" /> More Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {otherProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} isFeatured={false} />
            ))}
          </div>
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <p className="text-gray-400 font-mono text-sm mb-4">
            <span className="text-white animate-blink-cursor">&gt;</span> Veja todos os meus projetos no GitHub
          </p>
          <CommandLinkButton
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            label="open_github()"
            icon={<ExternalLink size={18} />}
          />
        </div>
      </div>
    </section>
  );
}
