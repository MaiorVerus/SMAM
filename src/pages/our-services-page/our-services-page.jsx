import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../components/nav/dropdown.jsx';
import Footer from '../../components/footer/footer.jsx';
import styles from './our-services.module.css';

export default function OurServicesPage() {
    return (
        <>
            <div className={styles.servicesContainer}>
                <header>
                    <Nav />
                    <div className={styles.servicesHeader}>
                        <img src="./public/smam_logoj.webp" alt="SMAM Logo" />
                        <h1>SMAM Services</h1>
                        <p>“Kuteteza chuma cha chairman”</p>
                    </div>
                </header>

                <main>
                    <div className="wrapper">
                        <h2 className={styles.sectionTitle}>Zomwe timapereka</h2>

                        <div className={styles.servicesGrid}>
                            <article className={styles.serviceCard}>
                                <h2><span className={styles.iconBox}> <i className="fa-solid fa-scale-balanced"></i>
                                </span> Malamulo a SMAM</h2>
                                <p>Our strict constitution ensures your pocket stays heavy and your stress stays low.</p>
                                <ul className={styles.serviceList}>
                                    <li><strong>Tactical Seen:</strong> Advanced training on how to read messages without replying.</li>
                                    <li><strong>The "No" Power:</strong> Psychological training to say "Let me see what I can do" with a straight face.</li>
                                    <li><strong>Airtime Defense:</strong> Protecting your data bundles.</li>
                                </ul>
                            </article>

                            <article className={styles.serviceCard}>
                                <h2><span className={styles.iconBox}><i className="fa-solid fa-shield-halved"></i></span> Expense Shield</h2>
                                <p>A digital and mental protection from financial requests.</p>
                                <ul className={styles.serviceList}>
                                    <li><strong>Emergency Filter:</strong> Kuziwa nthawi yeni yeni yothandiza</li>
                                    <li><strong>Budget Mastery:</strong> Tools to help you track how much you've saved by being a Chairman.</li>
                                    <li><strong>Scripted Responses:</strong> Pre-written Malawian excuses for all seasons when she begs money.</li>
                                </ul>
                            </article>

                            <article className={styles.serviceCard}>
                                <h2><span className={styles.iconBox}><i className="fa-solid fa-handshake"></i></span> Mentorship</h2>
                                <p>Learn from Executive Chairmen who have mastered the art of stinginess.</p>
                                <ul className={styles.serviceList}>
                                    <li><strong>Investment Tips:</strong> What to do with the money you saved.</li>
                                    <li><strong>Chairman Alerts:</strong> Real-time news on emergencies in your area.</li>
                                    <li><strong>Community Forum:</strong> A safe place to ask for advice.</li>
                                </ul>
                            </article>
                        </div>

                        <h2 className={styles.sectionTitle}>Chairman Membership</h2>
                        <div className={styles.idPreview}>
                            <div className={styles.idText}>
                                <h3>Get Your Official ID</h3>
                                <p>Unlock the full power of SMAM with a certified membership card. Digital and physical copies available for verified Chairmen.</p>
                            </div>
                            <Link to="/id-generator">
                                <div className={styles.idBadge}>
                                    SMAM ELITE <i className="fa-solid fa-check fa-beat"></i>
                                </div>
                            </Link>
                        </div>

                        <h2 className={styles.sectionTitle}>Testimonials</h2>
                        <div className={styles.testimonials}>
                            <div className={styles.testimonialCard}>
                                "Since I joined SMAM, my savings account has finally seen a full stop. Kaja komati ndione kaye penapake kaja, kandisintha moyo nambala heavy"
                                <b>— Chairman Jere, Lilongwe</b>
                            </div>
                            <div className={styles.testimonialCard}>
                                "I used to be the 'Yes Man'. Now, oipayo knows better ndipo sayelekeza kundipempha or K5. I am free!"
                                <b>— Chairman Phiri, Blantyre</b>
                            </div>
                        </div>

                        <section className={styles.ctaBox}>
                            <h3>Join the Brotherhood Today</h3>
                            <p>Secure your future. Secure your wealth.</p>
                            <Link to="/id-generator" className={styles.btnGold}>BECOME A CHAIRMAN</Link>
                            <br />

                            <Link to="/" style={{ color: '#aaa', marginTop: '30px', display: 'inline-block', textDecoration: 'none' }}>
                                ← Back to Homepage
                            </Link>
                        </section>
                    </div>
                </main>
            </div>
            <Footer />
        </>
    );
}