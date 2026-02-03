import FaultyTerminal from "../../ui/Background/FaultyTerminal";
import { Github, Linkedin } from "lucide-react";

export default function Hero() {
    return (
        <>
        <div className="w-full h-screen relative overflow-hidden">
            {/* FaultyTerminal Background */}
            <div className="absolute inset-0 z-10">
                <FaultyTerminal
                        scale={1}
                        digitSize={2}
                        scanlineIntensity={0.15}
                        glitchAmount={1.6}
                        flickerAmount={1.2}
                        noiseAmp={0.15}
                        chromaticAberration={0}
                        dither={0.7}
                        curvature={0}
                        tint="#ffffff"
                        mouseReact
                        mouseStrength={0.2}
                        brightness={1.4} className={undefined} style={undefined}            
                />
            </div>

            {/* Dark Overlay no Centro */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 md:w-[600px] lg:w-[800px] h-80 md:h-96 lg:h-[500px] bg-gradient-to-r from-black/85 to-transparent rounded-full z-20 pointer-events-none"
                style={{background: 'radial-gradient(circle, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 75%)'}}></div>

            {/* Conteúdo - Nome, Profissão e Ícones */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 text-center text-white">
                <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-1 md:mb-2 lg:mb-2.5" style={{letterSpacing: '-1px'}}>
                    Seu Nome
                </h1>
                
                <h2 className="text-sm md:text-lg lg:text-2xl font-light mb-5 md:mb-7 lg:mb-10 text-gray-200" style={{letterSpacing: '1px'}}>
                    Desenvolvedor Full Stack
                </h2>

                {/* Ícones */}
                <div className="flex gap-3 md:gap-5 justify-center mt-5 md:mt-7 lg:mt-8">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
                       className="flex items-center justify-center w-10 md:w-12 lg:w-[50px] h-10 md:h-12 lg:h-[50px] border-2 border-white/30 rounded-full cursor-pointer transition-all duration-300 text-white hover:border-white hover:bg-white/10">
                        <Github size={24} />
                    </a>

                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                       className="flex items-center justify-center w-10 md:w-12 lg:w-[50px] h-10 md:h-12 lg:h-[50px] border-2 border-white/30 rounded-full cursor-pointer transition-all duration-300 text-white hover:border-white hover:bg-white/10">
                        <Linkedin size={24} />
                    </a>
                </div>

            </div>

        </div>
        </>
    )
}