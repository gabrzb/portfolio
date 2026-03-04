import "./Footer.css";
import { useI18n } from "../../../context/I18nContext";

export default function Footer() {
  const { content } = useI18n();
  const { contact: profileContact } = content.profile;

  return (
    <footer id="contact" className="site-footer">
      <div className="site-footer__row">
        <a className="site-footer__mail" href={`mailto:${profileContact.email}`}>
          {profileContact.email}
        </a>
        <p className="site-footer__copyright">
          © {new Date().getFullYear()} {content.footer.rightsReservedLabel}
        </p>
      </div>
    </footer>
  );
}
