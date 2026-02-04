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
    const [displayedText, setDisplayedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showCursor, setShowCursor] = useState(true);

    useEffect(() => {
        if (!isInView) {
            setDisplayedText('');
            setCurrentIndex(0);
            return;
        }

        const timeout = setTimeout(() => {
            if (currentIndex < text.length) {
                setDisplayedText(text.slice(0, currentIndex + 1));
                setCurrentIndex(currentIndex + 1);
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
            {displayedText}
            {currentIndex < text.length && (
                <span className={`inline-block w-0.5 h-5 ml-1 bg-white ${showCursor ? 'opacity-100' : 'opacity-0'}`} />
            )}
        </span>
    );
}
