import "./About.css";
import { Code2, Database, Terminal } from "lucide-react";
import { useInView } from "../../../hooks/useInView";
import { useCounter } from "../../../hooks/useCounter";
import AnimatedBackground from "../../ui/AnimatedBackground";
import TypingEffect from "../../ui/TypingEffect";

export default function About() {
    const { ref: sectionRef, isInView } = useInView({ threshold: 0.2, triggerOnce: true });
    const { ref: headerRef, isInView: headerInView } = useInView({ threshold: 0.5, triggerOnce: true });
    const { ref: statsRef, isInView: statsInView } = useInView({ threshold: 0.5, triggerOnce: true });
    const { ref: skillsRef, isInView: skillsInView } = useInView({ threshold: 0.3, triggerOnce: true });
    
    const yearsCount = useCounter({ end: 5, duration: 2000, isInView: statsInView });
    const projectsCount = useCounter({ end: 50, duration: 2500, isInView: statsInView });
    const satisfactionCount = useCounter({ end: 100, duration: 2000, isInView: statsInView });

    return (
        <>
        {/* Transição entre Hero e About */}
        <div className="transition-divider"></div>
        
        <section ref={sectionRef} className="about-section w-full py-20 md:py-32 px-4 md:px-8 lg:px-16 relative overflow-hidden">
            {/* Animated Background */}
            <AnimatedBackground particleCount={30} />
            
            <div className="max-w-6xl mx-auto relative z-10">
                {/* Terminal Header */}
                <div ref={headerRef} className={`terminal-header mb-12 md:mb-16 transition-all duration-1000 ${headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-mono mb-2">
                        <TypingEffect text="$ about_me" speed={80} isInView={headerInView} />
                    </h2>
                    <div className="border-b border-white/30 animate-expand"></div>
                </div>

                {/* About Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {/* Left Column - Bio */}
                    <div className={`space-y-6 transition-all duration-1000 delay-300 ${isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                        <div className="text-gray-300 space-y-4">
                            <p className="text-sm md:text-base leading-relaxed animate-fade-in-up">
                                <span className="text-white">~/</span>
                                <span className="text-white font-mono">Desenvolvedor Full Stack</span> com paixão por criar
                                experiências digitais inovadoras e performáticas.
                            </p>
                            <p className="text-sm md:text-base leading-relaxed animate-fade-in-up animation-delay-200">
                                Possuo expertise em desenvolvimento web moderno, arquitetura de sistemas e
                                otimização de performance. Trabalho com as tecnologias mais atuais
                                do mercado para entregar soluções escaláveis e robustas.
                            </p>
                            <p className="text-sm md:text-base leading-relaxed animate-fade-in-up animation-delay-400">
                                Sou apaixonado por código limpo, boas práticas de engenharia de software
                                e estou sempre explorando novas tecnologias e padrões de design.
                            </p>
                        </div>

                        <a href="#contact" className="inline-block mt-4">
                            <button className="group relative px-6 md:px-8 py-2 md:py-3 border border-white text-white font-mono text-sm md:text-base 
                                hover:bg-white hover:text-black transition-all duration-300 overflow-hidden animate-pulse-glow">
                                <span className="relative z-10 flex items-center gap-2">
                                    get_in_touch() <Terminal size={18} />
                                </span>
                                <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 -z-0"></div>
                            </button>
                        </a>
                    </div>

                    {/* Right Column - Skills Cards */}
                    <div ref={skillsRef} className="space-y-4">
                        {/* Frontend Card */}
                        <div className={`skill-card p-4 md:p-6 border border-white/20 bg-black/40 hover:bg-black/60 transition-all duration-500 transform ${skillsInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                             style={{ transitionDelay: '0ms' }}>
                            <div className="flex items-center gap-3 mb-4">
                                <Code2 className="text-white animate-float" size={24} />
                                <h3 className="text-white font-mono text-sm md:text-base font-bold">
                                    Frontend Development
                                </h3>
                            </div>
                            <p className="text-gray-400 text-xs md:text-sm mb-3">
                                React, TypeScript, Tailwind CSS, Next.js, Vue.js
                            </p>
                            <div className="border-t border-white/20 pt-3">
                                <div className="text-gray-500 font-mono text-xs">
                                    <span className="text-white animate-blink-cursor">&gt;</span> Component-driven development
                                </div>
                            </div>
                        </div>

                        {/* Backend Card */}
                        <div className={`skill-card p-4 md:p-6 border border-white/20 bg-black/40 hover:bg-black/60 transition-all duration-500 transform ${skillsInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                             style={{ transitionDelay: '200ms' }}>
                            <div className="flex items-center gap-3 mb-4">
                                <Database className="text-white animate-float animation-delay-200" size={24} />
                                <h3 className="text-white font-mono text-sm md:text-base font-bold">
                                    Backend & DevOps
                                </h3>
                            </div>
                            <p className="text-gray-400 text-xs md:text-sm mb-3">
                                Node.js, Express, Python, PostgreSQL, MongoDB
                            </p>
                            <div className="border-t border-white/20 pt-3">
                                <div className="text-gray-500 font-mono text-xs">
                                    <span className="text-white animate-blink-cursor">&gt;</span> RESTful & GraphQL APIs
                                </div>
                            </div>
                        </div>

                        {/* Tools Card */}
                        <div className={`skill-card p-4 md:p-6 border border-white/20 bg-black/40 hover:bg-black/60 transition-all duration-500 transform ${skillsInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
                             style={{ transitionDelay: '400ms' }}>
                            <div className="flex items-center gap-3 mb-4">
                                <Terminal className="text-white animate-float animation-delay-400" size={24} />
                                <h3 className="text-white font-mono text-sm md:text-base font-bold">
                                    Tools & Environment
                                </h3>
                            </div>
                            <p className="text-gray-400 text-xs md:text-sm mb-3">
                                Git, Docker, Linux, VS Code, CI/CD Pipelines
                            </p>
                            <div className="border-t border-white/20 pt-3">
                                <div className="text-gray-500 font-mono text-xs">
                                    <span className="text-white animate-blink-cursor">&gt;</span> Terminal ninja
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div ref={statsRef} className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    <div className={`stat-card text-center p-4 border border-white/20 bg-black/40 transition-all duration-700 transform ${statsInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                         style={{ transitionDelay: '0ms' }}>
                        <div className="text-white font-bold text-2xl md:text-3xl font-mono animate-number-glow">
                            {yearsCount}+
                        </div>
                        <div className="text-gray-400 text-xs md:text-sm mt-2">Anos Experiência</div>
                    </div>
                    <div className={`stat-card text-center p-4 border border-white/20 bg-black/40 transition-all duration-700 transform ${statsInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                         style={{ transitionDelay: '100ms' }}>
                        <div className="text-white font-bold text-2xl md:text-3xl font-mono animate-number-glow">
                            {projectsCount}+
                        </div>
                        <div className="text-gray-400 text-xs md:text-sm mt-2">Projetos Completos</div>
                    </div>
                    <div className={`stat-card text-center p-4 border border-white/20 bg-black/40 transition-all duration-700 transform ${statsInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                         style={{ transitionDelay: '200ms' }}>
                        <div className="text-white font-bold text-2xl md:text-3xl font-mono animate-number-glow">
                            {satisfactionCount}%
                        </div>
                        <div className="text-gray-400 text-xs md:text-sm mt-2">Satisfação Cliente</div>
                    </div>
                    <div className={`stat-card text-center p-4 border border-white/20 bg-black/40 transition-all duration-700 transform ${statsInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                         style={{ transitionDelay: '300ms' }}>
                        <div className="text-white font-bold text-2xl md:text-3xl font-mono animate-infinity">∞</div>
                        <div className="text-gray-400 text-xs md:text-sm mt-2">Sempre Aprendendo</div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
