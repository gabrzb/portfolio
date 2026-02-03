import "./About.css";
import { Code2, Database, Terminal } from "lucide-react";

export default function About() {
    return (
        <>
        {/* Transição entre Hero e About */}
        <div className="transition-divider"></div>
        
        <section className="about-section w-full py-20 md:py-32 px-4 md:px-8 lg:px-16">
            <div className="max-w-6xl mx-auto">
                {/* Terminal Header */}
                <div className="terminal-header mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-mono mb-2">
                        $ about_me
                    </h2>
                    <div className="border-b border-white/30"></div>
                </div>

                {/* About Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {/* Left Column - Bio */}
                    <div className="space-y-6">
                        <div className="text-gray-300 space-y-4">
                            <p className="text-sm md:text-base leading-relaxed">
                                <span className="text-white">~/</span>
                                <span className="text-white font-mono">Desenvolvedor Full Stack</span> com paixão por criar
                                experiências digitais inovadoras e performáticas.
                            </p>
                            <p className="text-sm md:text-base leading-relaxed">
                                Possuo expertise em desenvolvimento web moderno, arquitetura de sistemas e
                                otimização de performance. Trabalho com as tecnologias mais atuais
                                do mercado para entregar soluções escaláveis e robustas.
                            </p>
                            <p className="text-sm md:text-base leading-relaxed">
                                Sou apaixonado por código limpo, boas práticas de engenharia de software
                                e estou sempre explorando novas tecnologias e padrões de design.
                            </p>
                        </div>

                        <a href="#contact" className="inline-block mt-4">
                            <button className="group relative px-6 md:px-8 py-2 md:py-3 border border-white text-white font-mono text-sm md:text-base 
                                hover:bg-white hover:text-black transition-all duration-300 overflow-hidden">
                                <span className="relative z-10 flex items-center gap-2">
                                    get_in_touch() <Terminal size={18} />
                                </span>
                                <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 -z-0"></div>
                            </button>
                        </a>
                    </div>

                    {/* Right Column - Skills Cards */}
                    <div className="space-y-4">
                        {/* Frontend Card */}
                        <div className="skill-card p-4 md:p-6 border border-white/20 bg-black/40 hover:bg-black/60 transition-colors duration-300">
                            <div className="flex items-center gap-3 mb-4">
                                <Code2 className="text-white" size={24} />
                                <h3 className="text-white font-mono text-sm md:text-base font-bold">
                                    Frontend Development
                                </h3>
                            </div>
                            <p className="text-gray-400 text-xs md:text-sm mb-3">
                                React, TypeScript, Tailwind CSS, Next.js, Vue.js
                            </p>
                            <div className="border-t border-white/20 pt-3">
                                <div className="text-gray-500 font-mono text-xs">
                                    <span className="text-white">&gt;</span> Component-driven development
                                </div>
                            </div>
                        </div>

                        {/* Backend Card */}
                        <div className="skill-card p-4 md:p-6 border border-white/20 bg-black/40 hover:bg-black/60 transition-colors duration-300">
                            <div className="flex items-center gap-3 mb-4">
                                <Database className="text-white" size={24} />
                                <h3 className="text-white font-mono text-sm md:text-base font-bold">
                                    Backend & DevOps
                                </h3>
                            </div>
                            <p className="text-gray-400 text-xs md:text-sm mb-3">
                                Node.js, Express, Python, PostgreSQL, MongoDB
                            </p>
                            <div className="border-t border-white/20 pt-3">
                                <div className="text-gray-500 font-mono text-xs">
                                    <span className="text-white">&gt;</span> RESTful & GraphQL APIs
                                </div>
                            </div>
                        </div>

                        {/* Tools Card */}
                        <div className="skill-card p-4 md:p-6 border border-white/20 bg-black/40 hover:bg-black/60 transition-colors duration-300">
                            <div className="flex items-center gap-3 mb-4">
                                <Terminal className="text-white" size={24} />
                                <h3 className="text-white font-mono text-sm md:text-base font-bold">
                                    Tools & Environment
                                </h3>
                            </div>
                            <p className="text-gray-400 text-xs md:text-sm mb-3">
                                Git, Docker, Linux, VS Code, CI/CD Pipelines
                            </p>
                            <div className="border-t border-white/20 pt-3">
                                <div className="text-gray-500 font-mono text-xs">
                                    <span className="text-white">&gt;</span> Terminal ninja
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    <div className="stat-card text-center p-4 border border-white/20 bg-black/40">
                        <div className="text-white font-bold text-2xl md:text-3xl font-mono">5+</div>
                        <div className="text-gray-400 text-xs md:text-sm mt-2">Anos Experiência</div>
                    </div>
                    <div className="stat-card text-center p-4 border border-white/20 bg-black/40">
                        <div className="text-white font-bold text-2xl md:text-3xl font-mono">50+</div>
                        <div className="text-gray-400 text-xs md:text-sm mt-2">Projetos Completos</div>
                    </div>
                    <div className="stat-card text-center p-4 border border-white/20 bg-black/40">
                        <div className="text-white font-bold text-2xl md:text-3xl font-mono">100%</div>
                        <div className="text-gray-400 text-xs md:text-sm mt-2">Satisfação Cliente</div>
                    </div>
                    <div className="stat-card text-center p-4 border border-white/20 bg-black/40">
                        <div className="text-white font-bold text-2xl md:text-3xl font-mono">∞</div>
                        <div className="text-gray-400 text-xs md:text-sm mt-2">Sempre Aprendendo</div>
                    </div>
                </div>
            </div>
        </section>
        </>
    );
}
