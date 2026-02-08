import "./Footer.css";
import { useI18n } from "../../../context/I18nContext";

export default function Footer() {
  const { content } = useI18n();
  const { contact: profileContact, socialLinks } = content.profile;

  return (
    <footer id="contact" className="site-footer">
      <div className="site-footer__row">
        <a className="site-footer__mail" href={`mailto:${profileContact.email}`}>
          {profileContact.email}
        </a>
        <div className="site-footer__socials">
          {socialLinks.map((item) => (
            <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer">
              {item.label}
            </a>
          ))}
        </div>
        <p className="site-footer__copyright">
          © {new Date().getFullYear()} {content.footer.rightsReservedLabel}
        </p>
      </div>
    </footer>
  );
}
