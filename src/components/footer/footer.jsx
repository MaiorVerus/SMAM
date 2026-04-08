
import { Link } from 'react-router-dom';
import './footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="footer-wrapper">

        {/* Column 1 — Brand */}
        <div className="footer-col footer-brand">
          <Link to="/">
            <img src="./public/smam_logoj.webp" alt="SMAM Logo" />
          </Link>

          <p className="footer-tagline"><q>tipulumusen ife kwa oipayo</q></p>
          <p className="footer-desc">Protecting chairman's wealth and interests.</p>
        </div>

        {/* Column 2 — Quick Links */}
        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">

            <Link to="/">Home</Link>
            <Link to="/decrees">Statutes</Link>
            <Link to="/services">Services</Link>
            <Link to="/">Updates</Link>



          </ul>
        </div>

        {/* Column 3 — Contact */}
        <div className="footer-col">
          <h4 className="footer-heading">Contact</h4>
          <ul className="footer-links">
            <li><a href="mailto:info@smam.org">email us</a></li>
            <li><a href="tel:+265991150007">+265 99 115 007</a></li>
          </ul>
        </div>

        {/* Column 4 — Community */}
        <div className="footer-col">
          <h4 className="footer-heading">Community</h4>
          <div className="footer-socials">
            <a href="https://web.facebook.com/smam.official" className="social-btn facebook">
              <i className="fa-brands fa-facebook"></i> Facebook Page
            </a>
            <a  className="social-btn whatsapp">
              <i className="fa-brands fa-whatsapp"></i> WhatsApp Group
            </a>
            {/** href="https://chat.whatsapp.com/HJri4Uf7BBO4UE9bTmASiZ"*/}
          </div>
        </div>

      </div>

      <hr />

      <div className="footer-bottom">
        <p className="copyright">&copy; SMAM {new Date().getFullYear()}. All rights reserved.</p>
        <div className="footer-bottom-links">
          <Link to="/">Privacy Police</Link>
          <span>|</span>
          <Link to="/">Terms of Use</Link>

        </div>
      </div>
    </footer>
  );
}