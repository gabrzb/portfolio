import "./Navbar.css";
import { useI18n } from "../../../context/I18nContext";

export default function Navbar() {
    const { content, locale, setLocale, locales } = useI18n();
    const { navigation } = content;

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <a href="#hero" className="logo-text">
                        <span className="prompt">&gt;</span> {navigation.logoText}
                    </a>
                </div>
                <ul className="nav-menu">
                    {navigation.items.map((item) => (
                        <li key={item.label} className="nav-item">
                            <a href={item.href} className="nav-link">
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="language-switcher" aria-label={navigation.languageSwitcherLabel}>
                    {locales.map((language) => (
                        <button
                            key={language}
                            type="button"
                            className={`language-switcher__button ${language === locale ? "is-active" : ""}`.trim()}
                            onClick={() => setLocale(language)}
                            aria-pressed={language === locale}
                        >
                            {navigation.languageNames[language]}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
}
