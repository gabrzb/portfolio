import FaultyTerminal from "../../ui/Background/FaultyTerminal";
import { profileContact, socialLinks } from "../../../data/profile";
import type { SocialPlatform } from "../../../types/content";

const iconifySimpleIcon = (name: string) =>
  `https://api.iconify.design/simple-icons:${name}.svg?color=%23ffffff`;

const socialIconSources: Record<SocialPlatform, string> = {
  github: iconifySimpleIcon("github"),
  linkedin: iconifySimpleIcon("linkedin"),
};

export default function Hero() {
  return (
    <div className="w-full h-screen relative overflow-hidden">
      {/* FaultyTerminal Background */}
      <div className="absolute inset-0 z-10">
        <FaultyTerminal
          scale={1}
          digitSize={2.3}
          scanlineIntensity={0.15}
          glitchAmount={1.6}
          flickerAmount={1.2}
          noiseAmp={1}
          chromaticAberration={0}
          dither={0.7}
          curvature={0}
          tint="#ffffff"
          mouseReact
          mouseStrength={0.2}
          brightness={1.4}
        />
      </div>

      {/* Dark Overlay no Centro */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 md:w-[600px] lg:w-[800px] h-80 md:h-96 lg:h-[500px] bg-gradient-to-r from-black/85 to-transparent rounded-full z-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 75%)" }}
      />

      {/* Conteúdo - Nome, Profissão e Ícones */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 text-center text-white">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-1 md:mb-2 lg:mb-2.5" style={{ letterSpacing: "-1px" }}>
          {profileContact.name}
        </h1>

        <h2 className="text-sm md:text-lg lg:text-2xl font-light mb-5 md:mb-7 lg:mb-10 text-gray-200" style={{ letterSpacing: "1px" }}>
          {profileContact.role}
        </h2>

        {/* Ícones */}
        <div className="flex gap-3 md:gap-5 justify-center mt-5 md:mt-7 lg:mt-8">
          {socialLinks.map(({ href, label, platform }) => {
            const iconSrc = socialIconSources[platform];
            return (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center justify-center w-10 md:w-12 lg:w-[50px] h-10 md:h-12 lg:h-[50px] border-2 border-white/30 rounded-full cursor-pointer transition-all duration-300 text-white hover:border-white hover:bg-white/10"
              >
                <img src={iconSrc} alt="" aria-hidden="true" width={24} height={24} className="w-5 h-5 md:w-6 md:h-6" />
              </a>
            );
          })}
        </div>
      </div>

    </div>
  );
}
