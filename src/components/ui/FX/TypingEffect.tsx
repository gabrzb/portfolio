import { useEffect, useState } from 'react';

interface TypingEffectProps {
    text: string;
    speed?: number;
    isInView?: boolean;
    className?: string;
    delay?: number;
}

export default function TypingEffect({ 
    text, 
    speed = 50, 
    isInView = true, 
    className = '',
    delay = 0 
}: TypingEffectProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        if (isInView) return;

        const resetFrame = window.requestAnimationFrame(() => {
            setCurrentIndex(0);
        });

        return () => window.cancelAnimationFrame(resetFrame);
    }, [isInView]);

    useEffect(() => {
        const resetFrame = window.requestAnimationFrame(() => {
            setCurrentIndex(0);
        });

        return () => window.cancelAnimationFrame(resetFrame);
    }, [text]);

    useEffect(() => {
        if (!isInView) return;
        const timeout = setTimeout(() => {
            if (currentIndex < text.length) {
                setCurrentIndex((prev) => prev + 1);
            }
        }, currentIndex === 0 ? delay : speed);

        return () => clearTimeout(timeout);
    }, [currentIndex, text, speed, isInView, delay]);

    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setShowCursor(prev => !prev);
        }, 500);

        return () => clearInterval(cursorInterval);
    }, []);

    return (
        <span className={className}>
            {text.slice(0, currentIndex)}
            {currentIndex < text.length && (
                <span className={`inline-block w-0.5 h-5 ml-1 bg-white ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
            )}
        </span>
    );
}
