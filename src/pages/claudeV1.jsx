

const services = [
    {
        id: 1,
        icon: '📜',
        title: 'Malamulo a SMAM',
        subtitle: 'The Sacred Decrees',
        description:
            'Ma decree opangidwa ndi ma chairman akuluakulu. Malamulowa ndi oyera monga mafuta a motor — osabvomera kubwetuka. Iwo akukuthandizani kukhala chairman wangwiro.',
        features: [
            'Decree #1 — Osabweza ndalama',
            'Decree #7 — Kupanda WiFi ya oyipa',
            'Decree #13 — Kusiya kupita ku birthday wa oyipa',
        ],
        link: '/decrees',
        linkText: 'Werengani Malamulo →',
        tag: 'Core Doctrine',
        color: '#c9a84c',
    },
    {
        id: 2,
        icon: '📡',
        title: 'Ma Updates',
        subtitle: 'Intelligence & News',
        description:
            'Ma chairman akudziwa zonse zimene zikuchitika padziko lapansi. Kuyambira njira zatsopano zothanilana ndi ma oyipa mpaka ma award a chairman wa year.',
        features: [
            'Weekly Stinginess Reports',
            'New Tactics & Loopholes',
            'Chairman of the Month Awards',
        ],
        link: '/updates',
        linkText: 'Onani Updates →',
        tag: 'Stay Informed',
        color: '#4caf74',
    },
    {
        id: 3,
        icon: '🗣️',
        title: 'Forum',
        subtitle: 'The Council of Chairmen',
        description:
            'Malo opezera anzanu a chairman kugawana nzelu. Funsani mafunso, gawanani njira zanu, ndikupeza chithandizo mu nthawi ya zovuta — monga akakukamba kuti "unangoipa ayi".',
        features: [
            'Ask the Council',
            'Share Survival Stories',
            'Rate Your Enemies (Free)',
        ],
        link: '/forum',
        linkText: 'Lowani Forum →',
        tag: 'Community',
        color: '#e05c5c',
    },
];

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Syne:wght@400;600;800&family=IBM+Plex+Mono:wght@400;600&display=swap');

  :root {
    --bg-dark: #0e0c09;
    --bg-card: #161410;
    --bg-card-hover: #1e1b15;
    --gold: #c9a84c;
    --gold-light: #f0cc72;
    --cream: #f5f0e8;
    --muted: #6b6458;
    --border: #2a2620;
    --font-display: 'Bebas Neue', sans-serif;
    --font-body: 'Syne', sans-serif;
    --font-mono: 'IBM Plex Mono', monospace;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  .sv-page {
    background-color: var(--bg-dark);
    color: var(--cream);
    font-family: var(--font-body);
    min-height: 100vh;
    overflow-x: hidden;
  }

  /* ── HERO ─────────────────────────────── */
  .sv-hero {
    position: relative;
    padding: 7rem 1.5rem 5rem;
    text-align: center;
    overflow: hidden;
  }

  .sv-hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 60% 40% at 50% 0%, rgba(201,168,76,0.18) 0%, transparent 70%),
      repeating-linear-gradient(
        0deg,
        transparent,
        transparent 39px,
        rgba(201,168,76,0.04) 40px
      ),
      repeating-linear-gradient(
        90deg,
        transparent,
        transparent 39px,
        rgba(201,168,76,0.04) 40px
      );
    pointer-events: none;
  }

  .sv-hero-eyebrow {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    letter-spacing: 0.25em;
    color: var(--gold);
    text-transform: uppercase;
    margin-bottom: 1rem;
    opacity: 0;
    animation: fadeUp 0.6s ease 0.1s forwards;
  }

  .sv-hero h1 {
    font-family: var(--font-display);
    font-size: clamp(4rem, 12vw, 9rem);
    line-height: 0.9;
    letter-spacing: 0.02em;
    color: var(--cream);
    margin-bottom: 1.5rem;
    opacity: 0;
    animation: fadeUp 0.6s ease 0.25s forwards;
  }

  .sv-hero h1 span {
    color: var(--gold);
    display: block;
  }

  .sv-hero-sub {
    max-width: 500px;
    margin: 0 auto 2rem;
    font-size: 1rem;
    line-height: 1.7;
    color: #a09880;
    opacity: 0;
    animation: fadeUp 0.6s ease 0.4s forwards;
  }

  .sv-hero-badge {
    display: inline-block;
    background: var(--gold);
    color: var(--bg-dark);
    font-family: var(--font-mono);
    font-size: 0.7rem;
    font-weight: 600;
    letter-spacing: 0.15em;
    padding: 0.4rem 1rem;
    border-radius: 2px;
    opacity: 0;
    animation: fadeUp 0.6s ease 0.55s forwards;
  }

  /* ── SERVICES GRID ─────────────────────── */
  .sv-grid-section {
    padding: 3rem 1.5rem 6rem;
    max-width: 1100px;
    margin: 0 auto;
  }

  .sv-section-label {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    letter-spacing: 0.3em;
    color: var(--muted);
    text-transform: uppercase;
    margin-bottom: 3rem;
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .sv-section-label::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--border);
  }

  .sv-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1.5px;
    background: var(--border);
    border: 1px solid var(--border);
  }

  /* ── SERVICE CARD ──────────────────────── */
  .sv-card {
    background: var(--bg-card);
    padding: 2.5rem 2rem;
    position: relative;
    overflow: hidden;
    transition: background 0.3s ease;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    opacity: 0;
    animation: fadeUp 0.5s ease forwards;
  }

  .sv-card:nth-child(1) { animation-delay: 0.1s; }
  .sv-card:nth-child(2) { animation-delay: 0.25s; }
  .sv-card:nth-child(3) { animation-delay: 0.4s; }

  .sv-card:hover {
    background: var(--bg-card-hover);
  }

  .sv-card::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: var(--accent, var(--gold));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.35s ease;
  }

  .sv-card:hover::before {
    transform: scaleX(1);
  }

  .sv-card-top {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;
  }

  .sv-card-icon {
    font-size: 2.2rem;
    line-height: 1;
  }

  .sv-card-tag {
    font-family: var(--font-mono);
    font-size: 0.65rem;
    letter-spacing: 0.2em;
    padding: 0.25rem 0.6rem;
    border: 1px solid;
    border-color: var(--accent, var(--gold));
    color: var(--accent, var(--gold));
    text-transform: uppercase;
    white-space: nowrap;
  }

  .sv-card-title {
    font-family: var(--font-display);
    font-size: 2rem;
    letter-spacing: 0.04em;
    color: var(--cream);
    line-height: 1;
  }

  .sv-card-subtitle {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    letter-spacing: 0.2em;
    color: var(--accent, var(--gold));
    text-transform: uppercase;
    margin-top: -0.5rem;
  }

  .sv-card-desc {
    font-size: 0.88rem;
    line-height: 1.75;
    color: #9a9080;
  }

  .sv-card-features {
    list-style: none;
    border-top: 1px solid var(--border);
    padding-top: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .sv-card-features li {
    font-family: var(--font-mono);
    font-size: 0.75rem;
    color: #7a7060;
    display: flex;
    align-items: center;
    gap: 0.6rem;
  }

  .sv-card-features li::before {
    content: '—';
    color: var(--accent, var(--gold));
    flex-shrink: 0;
  }

  .sv-card-link {
    margin-top: auto;
    display: inline-block;
    font-family: var(--font-mono);
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.1em;
    color: var(--accent, var(--gold));
    text-decoration: none;
    padding: 0.6rem 0;
    border-bottom: 1px solid var(--accent, var(--gold));
    transition: opacity 0.2s;
    align-self: flex-start;
  }

  .sv-card-link:hover { opacity: 0.7; }

  /* ── BOTTOM BANNER ─────────────────────── */
  .sv-banner {
    border-top: 1px solid var(--border);
    padding: 3rem 1.5rem;
    text-align: center;
    background: #0b0a07;
  }

  .sv-banner p {
    font-family: var(--font-mono);
    font-size: 0.8rem;
    color: var(--muted);
    letter-spacing: 0.1em;
    margin-bottom: 1.5rem;
  }

  .sv-banner-cta {
    display: inline-block;
    background: var(--gold);
    color: var(--bg-dark);
    font-family: var(--font-display);
    font-size: 1.1rem;
    letter-spacing: 0.1em;
    padding: 0.75rem 2.5rem;
    text-decoration: none;
    transition: background 0.2s, transform 0.2s;
  }

  .sv-banner-cta:hover {
    background: var(--gold-light);
    transform: translateY(-2px);
  }

  /* ── STATS STRIP ───────────────────────── */
  .sv-stats {
    display: flex;
    justify-content: center;
    gap: 0;
    flex-wrap: wrap;
    border-top: 1px solid var(--border);
    border-bottom: 1px solid var(--border);
    background: #0d0b09;
  }

  .sv-stat {
    padding: 2rem 3rem;
    text-align: center;
    border-right: 1px solid var(--border);
    flex: 1;
    min-width: 150px;
  }

  .sv-stat:last-child { border-right: none; }

  .sv-stat-number {
    font-family: var(--font-display);
    font-size: 3rem;
    color: var(--gold);
    line-height: 1;
    display: block;
  }

  .sv-stat-label {
    font-family: var(--font-mono);
    font-size: 0.65rem;
    letter-spacing: 0.2em;
    color: var(--muted);
    text-transform: uppercase;
    display: block;
    margin-top: 0.4rem;
  }

  /* ── ANIMATIONS ────────────────────────── */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ── RESPONSIVE ────────────────────────── */
  @media (max-width: 600px) {
    .sv-hero { padding: 5rem 1rem 3rem; }
    .sv-stat  { padding: 1.5rem 1.5rem; }
    .sv-grid-section { padding: 2rem 1rem 4rem; }
  }
`;

export default function OurServicesPage() {
    return (
        <>
            <style>{styles}</style>
            <div className="sv-page">
                <header style={{ padding: '1rem 1.5rem', borderBottom: '1px solid #2a2620' }}>
                    <div className="wrapper">
                        <a href="/" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.5rem', color: '#c9a84c', textDecoration: 'none', letterSpacing: '0.1em' }}>SMAM</a>
                    </div>
                </header>

                {/* ── HERO */}
                <section className="sv-hero">
                    <p className="sv-hero-eyebrow">Stingy Men Association of Malawi</p>
                    <h1>
                        Zomwe
                        <span>Timapereka</span>
                    </h1>
                    <p className="sv-hero-sub">
                        SMAM ikupereka zinthu zitatu zofunikira kwambiri — kwa chairman aliyense
                        wofuna kuteteza chuma chake ndi ulemu.
                    </p>
                    <span className="sv-hero-badge">3 Core Services · Est. 2024</span>
                </section>

                {/* ── STATS STRIP */}
                <div className="sv-stats">
                    <div className="sv-stat">
                        <span className="sv-stat-number">13+</span>
                        <span className="sv-stat-label">Ma Decree</span>
                    </div>
                    <div className="sv-stat">
                        <span className="sv-stat-number">∞</span>
                        <span className="sv-stat-label">Oyipa Atetheredwa</span>
                    </div>
                    <div className="sv-stat">
                        <span className="sv-stat-number">100%</span>
                        <span className="sv-stat-label">Chuma Chosungika</span>
                    </div>
                    <div className="sv-stat">
                        <span className="sv-stat-number">0</span>
                        <span className="sv-stat-label">Ndalama Zabwezedwa</span>
                    </div>
                </div>

                {/* ── SERVICES GRID */}
                <main className="sv-grid-section">
                    <p className="sv-section-label">Our Services</p>

                    <div className="sv-grid">
                        {services.map((s) => (
                            <div
                                className="sv-card"
                                key={s.id}
                                style={{ '--accent': s.color }}
                            >
                                <div className="sv-card-top">
                                    <span className="sv-card-icon">{s.icon}</span>
                                    <span className="sv-card-tag">{s.tag}</span>
                                </div>

                                <div>
                                    <h2 className="sv-card-title">{s.title}</h2>
                                    <p className="sv-card-subtitle">{s.subtitle}</p>
                                </div>

                                <p className="sv-card-desc">{s.description}</p>

                                <ul className="sv-card-features">
                                    {s.features.map((f, i) => (
                                        <li key={i}>{f}</li>
                                    ))}
                                </ul>

                                <a href={s.link} className="sv-card-link">
                                    {s.linkText}
                                </a>
                            </div>
                        ))}
                    </div>
                </main>

                {/* ── BOTTOM CTA BANNER */}
                <div className="sv-banner">
                    <p>// MULI WOKONZEKA KUDZIWITSA DZIKO KUTI NDINU CHAIRMAN? //</p>
                    <a href="/sign-up" className="sv-banner-cta">
                        PANGANI SIGN UP IYINO
                    </a>
                </div>

                <footer style={{ padding: '1.5rem', textAlign: 'center', borderTop: '1px solid #2a2620', fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.7rem', color: '#6b6458', letterSpacing: '0.15em' }}>
                    © 2024 SMAM — Stingy Men Association of Malawi
                </footer>
            </div>
        </>
    );
}
