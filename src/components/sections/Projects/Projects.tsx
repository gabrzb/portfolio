import "./Projects.css";
import { Github, ExternalLink, Code, Zap, Users } from "lucide-react";
import { useInView } from "../../../hooks/useInView";
import { useState, useEffect } from "react";
import AnimatedBackground from "../../ui/AnimatedBackground";
import TypingEffect from "../../ui/TypingEffect";

interface Project {
    id: number;
    title: string;
    description: string;
    longDescription: string;
    image: string;
    technologies: string[];
    features: string[];
    github: string;
    live: string;
    featured: boolean;
}

const projects: Project[] = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "Plataforma de e-commerce completa com sistema de pagamento e admin dashboard",
        longDescription: "Uma plataforma de e-commerce de alto desempenho construída com React, Node.js e PostgreSQL. Inclui integração com Stripe, painel administrativo em tempo real, gerenciamento de inventário e sistema de recomendação baseado em IA.",
        image: "https://images.unsplash.com/photo-1460925895917-adf4e0e359d2?w=500&h=300&fit=crop",
        technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Redux", "Tailwind CSS"],
        features: [
            "Sistema de pagamento integrado",
            "Painel administrativo em tempo real",
            "Recomendação de produtos",
            "Geolocalização de pedidos"
        ],
        github: "https://github.com",
        live: "https://example.com",
        featured: true
    },
    {
        id: 2,
        title: "Analytics Dashboard",
        description: "Dashboard de analytics em tempo real com visualizações de dados complexos",
        longDescription: "Dashboard responsivo para visualização de dados em tempo real. Utiliza WebSockets para atualizações instantâneas, gráficos interativos com Chart.js e D3.js, e suporta múltiplos formatos de exportação.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
        technologies: ["React", "Node.js", "Chart.js", "WebSockets", "MongoDB", "Express"],
        features: [
            "Atualizações em tempo real",
            "Múltiplos gráficos interativos",
            "Exportação de dados",
            "Filtros avançados"
        ],
        github: "https://github.com",
        live: "https://example.com",
        featured: true
    },
    {
        id: 3,
        title: "Task Management App",
        description: "Aplicação de gerenciamento de tarefas com colaboração em tempo real",
        longDescription: "Aplicativo colaborativo de gerenciamento de tarefas com suporte a múltiplos usuários, comentários em tempo real, anexos de arquivos e notificações push. Construído com React, Firebase e Tailwind CSS.",
        image: "https://images.unsplash.com/photo-1540350881767-4e5e7b1883e5?w=500&h=300&fit=crop",
        technologies: ["React", "Firebase", "Tailwind CSS", "Framer Motion"],
        features: [
            "Colaboração em tempo real",
            "Comentários e discussões",
            "Anexo de arquivos",
            "Notificações push"
        ],
        github: "https://github.com",
        live: "https://example.com",
        featured: false
    },
    {
        id: 4,
        title: "Mobile App Backend",
        description: "API robusta para aplicação mobile com autenticação e segurança avançada",
        longDescription: "Backend escalável e seguro para aplicação mobile. Implementa autenticação JWT, validação de dados, rate limiting, logging centralizado e monitoramento de performance com APM.",
        image: "https://images.unsplash.com/photo-1633356022997-36dff1e1f18e?w=500&h=300&fit=crop",
        technologies: ["Node.js", "Express", "PostgreSQL", "JWT", "Docker", "Redis"],
        features: [
            "Autenticação JWT",
            "Rate limiting",
            "Logging centralizado",
            "Monitoramento APM"
        ],
        github: "https://github.com",
        live: "https://example.com",
        featured: false
    },
    {
        id: 5,
        title: "Design System",
        description: "Sistema de design completo com documentação Storybook interativa",
        longDescription: "Design System completo com mais de 50 componentes reutilizáveis, tema dark/light, documentação Storybook, testes automatizados e integração com Figma.",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Storybook", "Jest"],
        features: [
            "50+ componentes",
            "Tema dark/light",
            "Documentação Storybook",
            "Testes automatizados"
        ],
        github: "https://github.com",
        live: "https://example.com",
        featured: false
    },
    {
        id: 6,
        title: "CLI Tool",
        description: "Ferramenta CLI para automação de desenvolvimento com suporte a plugins",
        longDescription: "Ferramenta CLI poderosa para automação de fluxos de desenvolvimento. Suporta plugins customizáveis, scaffolding de projetos, integração com Git e automação de tarefas repetitivas.",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=300&fit=crop",
        technologies: ["Node.js", "TypeScript", "Commander.js", "Inquirer.js"],
        features: [
            "Sistema de plugins",
            "Scaffolding de projetos",
            "Integração com Git",
            "Configuração customizável"
        ],
        github: "https://github.com",
        live: "https://example.com",
        featured: false
    }
];

function ProjectCard({ project, index, isFeatured }: { project: Project; index: number; isFeatured: boolean }) {
    const { ref, isInView } = useInView({ threshold: 0.2, triggerOnce: true });
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        setMousePosition({ x, y });
    };

    return (
        <div
            ref={ref}
            className={`project-card group relative transition-all duration-700 transform ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            } hover:scale-105`}
            style={{ transitionDelay: `${index * 150}ms` }}
            onMouseMove={handleMouseMove}
        >
            {isFeatured && (
                <>
                    {/* Image */}
                    <div className="relative overflow-hidden h-48 md:h-64 mb-4">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            style={{
                                transform: `translate(${mousePosition.x * 10}px, ${mousePosition.y * 10}px)`
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"></div>
                        
                        {/* Parallax overlay */}
                        <div 
                            className="absolute inset-0 bg-white/5 pointer-events-none transition-transform duration-200"
                            style={{
                                transform: `translate(${mousePosition.x * -20}px, ${mousePosition.y * -20}px)`
                            }}
                        ></div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8 border border-white/30 bg-black/60 hover:bg-black/80 transition-all duration-300 backdrop-filter backdrop-blur-10px relative overflow-hidden">
                        <div className="absolute -inset-1 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur"></div>

                        <div className="flex items-start gap-2 mb-3">
                            <Code className="text-white flex-shrink-0 mt-1 animate-float" size={20} />
                            <h3 className="text-lg md:text-xl font-bold text-white font-mono group-hover:text-shadow-glow transition-all">
                                {project.title}
                            </h3>
                        </div>

                        <p className="text-gray-300 text-sm md:text-base mb-4">
                            {project.longDescription}
                        </p>

                        {/* Features */}
                        <div className="mb-4 space-y-1">
                            {project.features.slice(0, 3).map((feature, idx) => (
                                <div key={idx} className="text-gray-400 text-xs flex gap-2 animate-slide-in-right"
                                     style={{ animationDelay: `${idx * 100}ms` }}>
                                    <span className="text-white/70">→</span>
                                    <span>{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* Technologies */}
                        <div className="mb-4 border-t border-white/20 pt-4">
                            <p className="text-gray-400 text-xs font-mono mb-2">
                                <span className="text-white animate-blink-cursor">&gt;</span> stack:
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.slice(0, 3).map((tech, techIdx) => (
                                    <span
                                        key={tech}
                                        className="px-2 py-1 text-xs font-mono bg-white/10 border border-white/40 text-white rounded hover:bg-white/20 hover:border-white transition-all duration-300 animate-fade-in"
                                        style={{ animationDelay: `${techIdx * 50}ms` }}
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

                        {/* Links */}
                        <div className="flex gap-3 pt-4 border-t border-white/20">
                            <a href={project.github} target="_blank" rel="noopener noreferrer"
                               className="flex-1 flex items-center justify-center gap-2 py-2 px-3 border border-white text-white text-sm font-mono hover:bg-white hover:text-black transition-all duration-300">
                                <Github size={16} /> Code
                            </a>
                            <a href={project.live} target="_blank" rel="noopener noreferrer"
                               className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-white text-black text-sm font-mono hover:bg-gray-200 transition-all duration-300">
                                <ExternalLink size={16} /> Demo
                            </a>
                        </div>
                    </div>
                </>
            )}

            {!isFeatured && (
                <div className="p-4 md:p-6 border border-white/20 bg-black/40 hover:bg-black/60 transition-all duration-300 backdrop-filter backdrop-blur-10px relative overflow-hidden">
                    <div className="absolute -inset-1 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur"></div>

                    <div className="flex items-start gap-2 mb-3">
                        <Code className="text-white flex-shrink-0 mt-1 animate-float" size={18} />
                        <h4 className="text-base md:text-lg font-bold text-white font-mono">
                            {project.title}
                        </h4>
                    </div>

                    <p className="text-gray-400 text-xs md:text-sm mb-4">
                        {project.description}
                    </p>

                    {/* Technologies */}
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

                    {/* Links */}
                    <div className="flex gap-2">
                        <a href={project.github} target="_blank" rel="noopener noreferrer"
                           className="flex-1 flex items-center justify-center py-1.5 px-3 border border-white/50 text-white text-xs font-mono hover:border-white hover:bg-white/10 transition-all duration-300">
                            <Github size={14} />
                        </a>
                        <a href={project.live} target="_blank" rel="noopener noreferrer"
                           className="flex-1 flex items-center justify-center py-1.5 px-3 bg-white/20 border border-white/50 text-white text-xs font-mono hover:bg-white/30 transition-all duration-300">
                            <ExternalLink size={14} />
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}

export default function Projects() {
    const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.5, triggerOnce: true });
    const featuredProjects = projects.filter(p => p.featured);
    const otherProjects = projects.filter(p => !p.featured);

    return (
        <section className="projects-section w-full py-20 md:py-32 px-4 md:px-8 lg:px-16 relative overflow-hidden">
            {/* Animated Background */}
            <AnimatedBackground particleCount={50} particleColor="rgba(100, 200, 255, 0.3)" />
            
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Terminal Header */}
                <div ref={headerRef} className={`terminal-header mb-12 md:mb-16 transition-all duration-1000 ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-mono mb-2">
                        <TypingEffect text="$ ls projects/" speed={80} isInView={headerInView} />
                    </h2>
                    <div className="border-b border-white/30 animate-expand"></div>
                </div>

                {/* Featured Projects */}
                <div className="mb-16 md:mb-24">
                    <h3 className="text-xl md:text-2xl font-mono text-white mb-8 flex items-center gap-2">
                        <Zap size={20} className="animate-pulse" /> Featured Projects
                    </h3>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                        {featuredProjects.map((project, index) => (
                            <ProjectCard key={project.id} project={project} index={index} isFeatured={true} />
                        ))}
                    </div>
                </div>

                {/* Other Projects */}
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

                {/* CTA */}
                <div className="mt-12 md:mt-16 text-center">
                    <p className="text-gray-400 font-mono text-sm mb-4">
                        <span className="text-white animate-blink-cursor">&gt;</span> Veja todos os meus projetos no GitHub
                    </p>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="inline-block">
                        <button className="group relative px-6 md:px-8 py-2 md:py-3 border border-white text-white font-mono text-sm md:text-base 
                            hover:bg-white hover:text-black transition-all duration-300 overflow-hidden animate-pulse-glow">
                            <span className="relative z-10 flex items-center gap-2">
                                open_github() <ExternalLink size={18} />
                            </span>
                            <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 -z-0"></div>
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
}
