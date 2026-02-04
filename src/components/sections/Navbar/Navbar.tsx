import "./Navbar.css";
import { navItems } from "../../../data/navigation";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <a href="#hero" className="logo-text">
                        <span className="prompt">&gt;</span> Portfolio
                    </a>
                </div>
                <ul className="nav-menu">
                    {navItems.map((item) => (
                        <li key={item.label} className="nav-item">
                            <a href={item.href} className="nav-link">
                                {item.label}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
