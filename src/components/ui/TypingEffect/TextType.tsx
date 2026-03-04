import { useEffect, useRef, useState, createElement, useMemo, useCallback, type HTMLAttributes, type JSX } from 'react';
import { gsap } from 'gsap';
import './TextType.css';

interface VariableSpeed {
	min: number;
	max: number;
}

interface TextTypeProps extends HTMLAttributes<HTMLElement> {
	text?: string | string[];
	texts?: string[];
	as?: keyof JSX.IntrinsicElements;
	typingSpeed?: number;
	initialDelay?: number;
	pauseDuration?: number;
	deletingSpeed?: number;
	loop?: boolean;
	className?: string;
	showCursor?: boolean;
	hideCursorWhileTyping?: boolean;
	cursorCharacter?: string;
	cursorClassName?: string;
	cursorBlinkDuration?: number;
	textColors?: string[];
	variableSpeed?: VariableSpeed;
	variableSpeedEnabled?: boolean;
	variableSpeedMin?: number;
	variableSpeedMax?: number;
	onSentenceComplete?: (sentence: string, index: number) => void;
	startOnVisible?: boolean;
	reverseMode?: boolean;
}

const TextType = ({
	text,
	texts,
	as: Component = 'div',
	typingSpeed = 50,
	initialDelay = 0,
	pauseDuration = 2000,
	deletingSpeed = 30,
	loop = true,
	className = '',
	showCursor = true,
	hideCursorWhileTyping = false,
	cursorCharacter = '|',
	cursorClassName = '',
	cursorBlinkDuration = 0.5,
	textColors = [],
	variableSpeed,
	variableSpeedEnabled,
	variableSpeedMin,
	variableSpeedMax,
	onSentenceComplete,
	startOnVisible = false,
	reverseMode = false,
	...props
}: TextTypeProps) => {
	const [displayedText, setDisplayedText] = useState('');
	const [currentCharIndex, setCurrentCharIndex] = useState(0);
	const [isDeleting, setIsDeleting] = useState(false);
	const [currentTextIndex, setCurrentTextIndex] = useState(0);
	const [isVisible, setIsVisible] = useState(!startOnVisible);
	const cursorRef = useRef<HTMLSpanElement | null>(null);
	const containerRef = useRef<HTMLElement | null>(null);
	const skipNextInitialDelayRef = useRef(false);

	const resolvedVariableSpeed = useMemo(() => {
		if (typeof variableSpeedEnabled === 'boolean') {
			if (!variableSpeedEnabled) return undefined;

			const min = variableSpeedMin ?? variableSpeed?.min ?? typingSpeed;
			const max = variableSpeedMax ?? variableSpeed?.max ?? typingSpeed;

			return {
				min: Math.min(min, max),
				max: Math.max(min, max)
			};
		}

		return variableSpeed;
	}, [variableSpeedEnabled, variableSpeedMin, variableSpeedMax, variableSpeed, typingSpeed]);

	const textArray = useMemo(() => {
		const source = texts && texts.length > 0 ? texts : text;

		if (Array.isArray(source)) {
			return source.length > 0 ? source : [''];
		}

		return [source ?? ''];
	}, [text, texts]);

	const textArraySignature = useMemo(() => JSON.stringify(textArray), [textArray]);

	const getRandomSpeed = useCallback(() => {
		if (!resolvedVariableSpeed) return typingSpeed;
		const { min, max } = resolvedVariableSpeed;
		return Math.random() * (max - min) + min;
	}, [resolvedVariableSpeed, typingSpeed]);

	const getCurrentTextColor = () => {
		if (textColors.length === 0) return 'inherit';
		return textColors[currentTextIndex % textColors.length];
	};

	useEffect(() => {
		if (!startOnVisible || !containerRef.current) return;

		const observer = new IntersectionObserver(
			(entries: IntersectionObserverEntry[]) => {
				entries.forEach(entry => {
					if (entry.isIntersecting) {
						setIsVisible(true);
					}
				});
			},
			{ threshold: 0.1 }
		);

		observer.observe(containerRef.current);
		return () => observer.disconnect();
	}, [startOnVisible]);

	useEffect(() => {
		const cursorElement = cursorRef.current;

		if (showCursor && cursorElement) {
			// Evita múltiplos tweens concorrendo no cursor após re-renders.
			gsap.killTweensOf(cursorElement);
			gsap.set(cursorElement, { opacity: 1 });
			gsap.to(cursorElement, {
				opacity: 0,
				duration: cursorBlinkDuration,
				repeat: -1,
				yoyo: true,
				ease: 'power2.inOut'
			});
		}

		return () => {
			if (cursorElement) {
				gsap.killTweensOf(cursorElement);
			}
		};
	}, [showCursor, cursorBlinkDuration]);

	useEffect(() => {
		// Quando o conjunto de textos muda (ex.: troca de idioma), reinicia imediatamente a máquina de digitação.
		skipNextInitialDelayRef.current = true;
		setDisplayedText('');
		setCurrentCharIndex(0);
		setIsDeleting(false);
		setCurrentTextIndex(0);
	}, [textArraySignature]);

	useEffect(() => {
		if (!isVisible) return;

		let timeout: ReturnType<typeof setTimeout> | undefined;
		const currentText = textArray[currentTextIndex] ?? '';
		const processedText = reverseMode ? currentText.split('').reverse().join('') : currentText;

		const executeTypingAnimation = () => {
			if (isDeleting) {
				if (displayedText === '') {
					if (currentTextIndex === textArray.length - 1 && !loop) {
						return;
					}

					timeout = setTimeout(() => {
						setIsDeleting(false);

						if (onSentenceComplete) {
							onSentenceComplete(textArray[currentTextIndex] ?? '', currentTextIndex);
						}

						setCurrentTextIndex(prev => (prev + 1) % textArray.length);
						setCurrentCharIndex(0);
					}, pauseDuration);
				} else {
					timeout = setTimeout(() => {
						setDisplayedText(prev => prev.slice(0, -1));
					}, deletingSpeed);
				}
			} else {
				if (currentCharIndex < processedText.length) {
					timeout = setTimeout(
						() => {
							setDisplayedText(prev => prev + processedText[currentCharIndex]);
							setCurrentCharIndex(prev => prev + 1);
						},
						resolvedVariableSpeed ? getRandomSpeed() : typingSpeed
					);
				} else if (textArray.length >= 1) {
					if (!loop && currentTextIndex === textArray.length - 1) return;
					timeout = setTimeout(() => {
						setIsDeleting(true);
					}, pauseDuration);
				}
			}
		};

		if (currentCharIndex === 0 && !isDeleting && displayedText === '') {
			// Na primeira escrita após troca de textos, ignora o delay inicial para refletir a mudança na hora.
			const nextDelay = skipNextInitialDelayRef.current ? 0 : initialDelay;
			skipNextInitialDelayRef.current = false;
			timeout = setTimeout(executeTypingAnimation, nextDelay);
		} else {
			executeTypingAnimation();
		}

		return () => clearTimeout(timeout);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [
		currentCharIndex,
		displayedText,
		isDeleting,
		typingSpeed,
		deletingSpeed,
		pauseDuration,
		textArray,
		currentTextIndex,
		loop,
		initialDelay,
		isVisible,
		reverseMode,
		resolvedVariableSpeed,
		onSentenceComplete
	]);

	const shouldHideCursor =
		hideCursorWhileTyping && (currentCharIndex < (textArray[currentTextIndex] ?? '').length || isDeleting);

	return createElement(
		Component,
		{
			ref: containerRef,
			className: `text-type ${className}`,
			...props
		},
		<span className="text-type__content" style={{ color: getCurrentTextColor() || 'inherit' }}>
			{displayedText}
		</span>,
		showCursor && (
			<span
				ref={cursorRef}
				aria-hidden="true"
				role="presentation"
				className={`text-type__cursor ${cursorClassName} ${shouldHideCursor ? 'text-type__cursor--hidden' : ''}`}
			>
				{cursorCharacter}
			</span>
		)
	);
};

export default TextType;
