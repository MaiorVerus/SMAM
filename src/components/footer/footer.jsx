

import './footer.css';

export default function Footer() {
  return (
    <footer>
      <div className="footer-wrapper">

        {/* Column 1 — Brand */}
        <div className="footer-col footer-brand">
          <img src="./public/smam_logoj.webp" alt="SMAM Logo" />
          <p className="footer-tagline">"tipulumusen ife kwa oipayo"</p>
          <p className="footer-desc">Protecting chairman's wealth and interests.</p>
        </div>

        {/* Column 2 — Quick Links */}
        <div className="footer-col">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="/decrees">Statutes</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/">Updates</a></li>
          </ul>
        </div>

        {/* Column 3 — Contact */}
        <div className="footer-col">
          <h4 className="footer-heading">Contact</h4>
          <ul className="footer-links">
            <li><a href="mailto:info@smam.org">info@smam.org</a></li>
            <li><a href="tel:+265000000000">+265 XXX XXX XXX</a></li>
          </ul>
        </div>

        {/* Column 4 — Community */}
        <div className="footer-col">
          <h4 className="footer-heading">Community</h4>
          <div className="footer-socials">
            <a href="#facebook" className="social-btn facebook">
              <i className="fa-brands fa-facebook"></i> Facebook Page
            </a>
            <a href="https://chat.whatsapp.com/HJri4Uf7BBO4UE9bTmASiZ" className="social-btn whatsapp">
              <i className="fa-brands fa-whatsapp"></i> WhatsApp Group
            </a>
          </div>
        </div>

      </div>

      <hr />

      <div className="footer-bottom">
        <p className="copyright">&copy; SMAM {new Date().getFullYear()}. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="/privacy">Privacy Policy</a>
          <span>|</span>
          <a href="/terms">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
}