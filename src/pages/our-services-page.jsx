import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/nav-dropdown.jsx';
import Footer from '../components/footer.jsx';

import '../css/global-smam.css';
import '../css/our-services.css';


export default function OurServicesPage() {
    return (
        <div className="services-container">
            <Nav />

            <header className="services-header">
                <div className="wrapper">
                    <h1>SMAM Services</h1>
                    <p>“Protecting the Chairman's Wealth Since 2010”</p>
                </div>
            </header>

            <main className="wrapper">
                <h2 className="section-title">Zomwe timapereka</h2>

                <div className="services-grid">
                    <article className="service-card">
                        <h2><span className="icon-box">📜</span> Malamulo a SMAM</h2>
                        <p>Our strict constitution ensures your pocket stays heavy and your stress stays low.</p>
                        <ul className="service-list">
                            <li><strong>Tactical Seen:</strong> Advanced training on how to read messages without replying.</li>
                            <li><strong>The "No" Power:</strong> Psychological coaching to say "I don't have" with a straight face.</li>
                            <li><strong>Airtime Defense:</strong> Protecting your data bundles from "Please call me" requests.</li>
                        </ul>
                    </article>

                    <article className="service-card">
                        <h2><span className="icon-box">🛡️</span> Expense Shield</h2>
                        <p>A digital and mental barrier against unplanned financial requests from "oyipayo".</p>
                        <ul className="service-list">
                            <li><strong>Emergency Filter:</strong> Distinguishing between a real emergency and a "wanting a pizza" emergency.</li>
                            <li><strong>Budget Mastery:</strong> Tools to help you track how much you've saved by being a Chairman.</li>
                            <li><strong>Scripted Responses:</strong> Pre-written Malawian excuses for all seasons.</li>
                        </ul>
                    </article>

                    <article className="service-card">
                        <h2><span className="icon-box">🤝</span> Mentorship</h2>
                        <p>Learn from Executive Chairmen who have mastered the art of stinginess.</p>
                        <ul className="service-list">
                            <li><strong>Investment Tips:</strong> What to do with the money you saved.</li>
                            <li><strong>Chairman Alerts:</strong> Real-time news on financial traps in the city.</li>
                            <li><strong>Community Forum:</strong> A safe place to vent about "requests" without judgment.</li>
                        </ul>
                    </article>
                </div>

                <h2 className="section-title">Chairman Membership</h2>
                <div className="id-preview">
                    <div className="id-text">
                        <h3>Get Your Official ID</h3>
                        <p>Unlock the full power of SMAM with a certified membership card. Digital and physical copies available for verified Chairmen.</p>
                    </div>
                    <Link to="/membership">
                    <div className="id-badge">
                        SMAM ELITE ✅
                    </div>
                    </Link>
                </div>

                <h2 className="section-title">Testimonials</h2>
                <div className="testimonials">
                    <div className="testimonial-card">
                        "Since I joined SMAM, my savings account has finally seen a comma. The 'Tactical Seen' technique changed my life!"
                        <b>— Chairman Jere, Lilongwe</b>
                    </div>
                    <div className="testimonial-card">
                        "I used to be the 'Yes Man'. Now, oipayo knows better ndipo sayelekeza kundipempha or K5. I am free!"
                        <b>— Chairman Phiri, Blantyre</b>
                    </div>
                </div>

                <section className="cta-box">
                    <h3>Join the Brotherhood Today</h3>
                    <p>Secure your future. Secure your wealth.</p>
                    <a href="#" className="btn-gold">BECOME A CHAIRMAN</a>
                    <br />
                    
                    <Link to="/landing" style={{ color: '#aaa', marginTop: '30px', display: 'inline-block', textDecoration: 'none' }}>
                        ← Back to Homepage
                    </Link>
                </section>
                <Footer />
            </main>
        </div>
    );
}