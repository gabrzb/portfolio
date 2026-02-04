import "./Career.css";
import { Briefcase, Calendar, MapPin, ArrowRight } from "lucide-react";
import { useInView } from "../../../hooks/useInView";
import AnimatedBackground from "../../ui/AnimatedBackground";
import TypingEffect from "../../ui/TypingEffect";

interface Job {
    id: number;
    title: string;
    company: string;
    location: string;
    period: string;
    description: string[];
    technologies: string[];
    current: boolean;
}

const jobs: Job[] = [
    {
        id: 1,
        title: "Senior Full Stack Developer",
        company: "TechCorp Solutions",
        location: "São Paulo, SP",
        period: "2022 - Presente",
        current: true,
        description: [
            "Liderança técnica em projetos de grande escala com milhões de usuários",
            "Arquitetura e desenvolvimento de microserviços em Node.js",
            "Implementação de CI/CD pipelines e práticas DevOps",
            "Mentoria de junior developers e code reviews"
        ],
        technologies: ["React", "Node.js", "PostgreSQL", "Docker", "AWS", "TypeScript"]
    },
    {
        id: 2,
        title: "Full Stack Developer",
        company: "Digital Innovations",
        location: "São Paulo, SP",
        period: "2020 - 2022",
        current: false,
        description: [
            "Desenvolvimento de aplicações web responsivas com React",
            "APIs RESTful com Express.js e Node.js",
            "Otimização de performance e SEO",
            "Implementação de testes automatizados e E2E"
        ],
        technologies: ["React", "Express.js", "MongoDB", "Jest", "Vite", "JavaScript"]
    },
    {
        id: 3,
        title: "Frontend Developer",
        company: "WebStudio Pro",
        location: "São Paulo, SP",
        period: "2019 - 2020",
        current: false,
        description: [
            "Desenvolvimento de interfaces responsivas e acessíveis",
            "Integração com APIs externas",
            "Implementação de design systems",
            "Testes unitários com Jest e React Testing Library"
        ],
        technologies: ["React", "CSS3", "JavaScript", "Redux", "Webpack"]
    }
];

export default function Career() {
    const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.5, triggerOnce: true });
    const { ref: timelineRef, isInView: timelineInView } = useInView({ threshold: 0.2, triggerOnce: true });
    
    return (
        <section className="career-section w-full py-20 md:py-32 px-4 md:px-8 lg:px-16 relative overflow-hidden">
            {/* Animated Background */}
            <AnimatedBackground particleCount={40} particleColor="rgba(0, 255, 100, 0.3)" />
            
            <div className="max-w-6xl mx-auto relative z-10">
                {/* Terminal Header */}
                <div ref={headerRef} className={`terminal-header mb-12 md:mb-16 transition-all duration-1000 ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-mono mb-2">
                        <TypingEffect text="$ career_history" speed={80} isInView={headerInView} />
                    </h2>
                    <div className="border-b border-white/30 animate-expand"></div>
                </div>

                {/* Timeline */}
                <div ref={timelineRef} className="career-timeline relative">
                    {/* Vertical Line with animation */}
                    <div className={`hidden md:block absolute left-8 lg:left-1/2 top-0 w-0.5 bg-gradient-to-b from-white via-white/50 to-transparent transition-all duration-2000 ${timelineInView ? 'h-full opacity-100' : 'h-0 opacity-0'}`}></div>

                    {/* Jobs */}
                    <div className="space-y-8 md:space-y-12">
                        {jobs.map((job, index) => {
                            const { ref: jobRef, isInView: jobInView } = useInView({ threshold: 0.3, triggerOnce: true });
                            
                            return (
                                <div key={job.id} ref={jobRef} className={`job-item relative`}>
                                    {/* Timeline Dot with pulse animation */}
                                    <div className={`hidden md:block absolute left-0 lg:left-1/2 top-8 -translate-x-1/2 w-4 h-4 bg-white rounded-full border-4 border-black transition-all duration-500 ${jobInView ? 'scale-100 opacity-100 animate-pulse-dot' : 'scale-0 opacity-0'}`}></div>

                                    {/* Card */}
                                    <div className={`${index % 2 === 0 ? 'md:mr-auto md:w-1/2 md:pr-12' : 'md:ml-auto md:w-1/2 md:pl-12'} transition-all duration-700 ${jobInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                         style={{ transitionDelay: `${index * 200}ms` }}>
                                        <div className="p-6 md:p-8 border border-white/30 bg-black/60 hover:bg-black/80 transition-all duration-300 backdrop-filter backdrop-blur-10px relative overflow-hidden group hover:scale-105 hover:border-white/50">
                                            {/* Glow effect on hover */}
                                            <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur"></div>

                                            {/* Scanline effect */}
                                            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div className="absolute inset-0 animate-scanline"></div>
                                            </div>

                                            {/* Current Badge */}
                                            {job.current && (
                                                <div className="inline-block mb-4 px-3 py-1 bg-white/20 border border-white rounded text-white font-mono text-xs animate-pulse-glow">
                                                    $ active_job
                                                </div>
                                            )}

                                            {/* Header */}
                                            <div className="flex items-start gap-3 mb-4">
                                                <Briefcase className="text-white flex-shrink-0 mt-1 animate-float" size={20} />
                                                <div className="flex-1">
                                                    <h3 className="text-lg md:text-xl font-bold text-white font-mono mb-1 group-hover:text-shadow-glow transition-all">
                                                        {job.title}
                                                    </h3>
                                                    <p className="text-white font-mono text-sm">
                                                        @ {job.company}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Meta Info */}
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

                                            {/* Description */}
                                            <div className="mb-4 space-y-2">
                                                {job.description.map((desc, idx) => (
                                                    <div key={idx} className="text-gray-300 text-sm flex gap-2 animate-slide-in-right"
                                                         style={{ animationDelay: `${idx * 100}ms` }}>
                                                        <span className="text-white/70 flex-shrink-0">→</span>
                                                        <span>{desc}</span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Technologies */}
                                            <div className="border-t border-white/20 pt-4">
                                                <p className="text-gray-400 text-xs font-mono mb-2">
                                                    <span className="text-white animate-blink-cursor">&gt;</span> stack_used:
                                                </p>
                                                <div className="flex flex-wrap gap-2">
                                                    {job.technologies.map((tech, techIdx) => (
                                                        <span
                                                            key={tech}
                                                            className="px-3 py-1 text-xs font-mono bg-white/10 border border-white/40 text-white rounded hover:border-white hover:bg-white/20 transition-all duration-300 cursor-pointer animate-fade-in"
                                                            style={{ animationDelay: `${techIdx * 50}ms` }}
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
                        })}
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-12 md:mt-16 text-center">
                    <p className="text-gray-400 font-mono text-sm mb-4">
                        <span className="text-white animate-blink-cursor">&gt;</span> Quer saber mais sobre minha jornada?
                    </p>
                    <a href="#contact" className="inline-block">
                        <button className="group relative px-6 md:px-8 py-2 md:py-3 border border-white text-white font-mono text-sm md:text-base 
                            hover:bg-white hover:text-black transition-all duration-300 overflow-hidden animate-pulse-glow">
                            <span className="relative z-10 flex items-center gap-2">
                                download_cv() <ArrowRight size={18} />
                            </span>
                            <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 -z-0"></div>
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
}
