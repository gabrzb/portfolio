import { useEffect, useMemo, useState } from "react";
import { ExternalLink, Terminal, X } from "lucide-react";
import { useI18n } from "../../../context/I18nContext";
import { projectTechnologies } from "../../../data/projectTechnologies";
import "./TechTerminalModal.css";

export default function TechTerminalModal() {
  const { content } = useI18n();
  const [isOpen, setIsOpen] = useState(false);

  const technologies = useMemo(() => projectTechnologies, []);

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        className="tech-terminal-trigger"
        onClick={() => setIsOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        <Terminal size={16} aria-hidden="true" />
        <span className="tech-terminal-trigger__prompt">$</span>
        <span>{content.techModal.launcherLabel}</span>
      </button>

      <div className={`tech-terminal-modal ${isOpen ? "is-open" : ""}`.trim()} aria-hidden={!isOpen}>
        <button
          type="button"
          className="tech-terminal-modal__backdrop"
          aria-label={content.techModal.closeLabel}
          onClick={() => setIsOpen(false)}
        />

        <section
          className="tech-terminal-modal__panel"
          role="dialog"
          aria-modal="true"
          aria-labelledby="tech-terminal-modal-title"
        >
          <header className="tech-terminal-modal__header">
            <div className="tech-terminal-modal__title-row">
              <span className="tech-terminal-modal__dot" aria-hidden="true" />
              <span className="tech-terminal-modal__dot" aria-hidden="true" />
              <span className="tech-terminal-modal__dot" aria-hidden="true" />
              <h3 id="tech-terminal-modal-title">{content.techModal.modalTitle}</h3>
            </div>
            <button
              type="button"
              className="tech-terminal-modal__close"
              onClick={() => setIsOpen(false)}
              aria-label={content.techModal.closeLabel}
            >
              <X size={16} aria-hidden="true" />
            </button>
          </header>

          <p className="tech-terminal-modal__subtitle">
            <span className="tech-terminal-modal__prompt">&gt;</span> {content.techModal.modalSubtitle}
          </p>

          {technologies.length === 0 ? (
            <p className="tech-terminal-modal__empty">{content.techModal.emptyStateLabel}</p>
          ) : (
            <ul className="tech-terminal-modal__list">
              {technologies.map((technology) => {
                const title = technology.title;

                return (
                  <li key={technology.id} className="tech-terminal-modal__item">
                    {technology.iconSrc ? (
                      <img
                        src={technology.iconSrc}
                        alt={title}
                        width={20}
                        height={20}
                        loading="lazy"
                      />
                    ) : (
                      <span className="tech-terminal-modal__fallback-icon" aria-hidden="true">
                        &gt;_
                      </span>
                    )}
                    <span>{title}</span>
                    {technology.href ? (
                      <a href={technology.href} target="_blank" rel="noopener noreferrer">
                        {content.techModal.docsLinkLabel} <ExternalLink size={12} aria-hidden="true" />
                      </a>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      </div>
    </>
  );
}
