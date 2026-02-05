import { useEffect, useRef } from 'react';

interface AnimatedBackgroundProps {
    particleCount?: number;
    particleColor?: string;
    lineColor?: string;
}

interface Particle {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
}

function createParticle(width: number, height: number): Particle {
    return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
    };
}

export default function AnimatedBackground({ 
    particleCount = 50,
    particleColor = 'rgba(255, 255, 255, 0.5)',
    lineColor = 'rgba(255, 255, 255, 0.1)'
}: AnimatedBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size
        const setCanvasSize = () => {
            canvas.width = canvas.offsetWidth;
            canvas.height = canvas.offsetHeight;
        };
        setCanvasSize();
        window.addEventListener('resize', setCanvasSize);

        // Create particles
        const particles: Particle[] = Array.from({ length: particleCount }, () =>
            createParticle(canvas.width, canvas.height)
        );

        // Animation loop
        let animationId: number;
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw grid
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
            ctx.lineWidth = 1;
            const gridSize = 50;
            
            for (let x = 0; x < canvas.width; x += gridSize) {
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvas.height);
                ctx.stroke();
            }
            
            for (let y = 0; y < canvas.height; y += gridSize) {
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
                ctx.stroke();
            }

            // Update and draw particles
            particles.forEach(particle => {
                particle.x += particle.vx;
                particle.y += particle.vy;

                if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
                ctx.fillStyle = particleColor;
                ctx.fill();
            });

            // Draw lines between nearby particles
            ctx.strokeStyle = lineColor;
            ctx.lineWidth = 0.5;
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 150) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.globalAlpha = 1 - distance / 150;
                        ctx.stroke();
                        ctx.globalAlpha = 1;
                    }
                }
            }

            animationId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', setCanvasSize);
            cancelAnimationFrame(animationId);
        };
    }, [particleCount, particleColor, lineColor]);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none opacity-30"
            style={{ mixBlendMode: 'screen' }}
        />
    );
}
