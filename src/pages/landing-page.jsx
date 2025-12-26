
import { Link } from 'react-router-dom';
import Footer from '../components/footer.jsx';
import Nav from '../components/nav-dropdown.jsx';

export default function LandingPage() {
    return (
        <>
      
            <header>
                <div className="wrapper">
                    <Nav />
                    <img src="/Images/smam_logoj.webp" alt="SMAM Logo" />
                    <p><q>... musatitengele ife kokatiyesa, koma mutipulumuse ife kwa oyipayo</q></p>
                </div>
            </header>
            <main>
                <div className="wrapper">
                    <article>
                        <h1>Kusamala ndalama <br /> za chair.</h1>
                        <p>Ndalama za chair sizikuyenela kumangotha mopusa ayi. Ndichifukwa chake bungwe la <a href="#"><abbr
                            title="Stingy Men Association of Malawi"><b>SMAM</b></abbr></a> imawonesesa kuti chuma cha
                            chairman
                            chisawonengeke mwanjila
                            iliyonse.</p>
                    </article>
                </div>
                <div className="main-background">
                    <div className="post-article">
                        <div className="wrapper">
                            <hr />
                            <h2>Mbili ya SMAM</h2>
                            <p>Bungweli linayambisidwa ndi ma chairman okwiya ndi khalidwe losakaza chuma ndipo linayambila pa
                                <a href="#">FaceBook</a> ndipo linazitolela kenako linakafika pa <a href="">WhasApp</a>. Mu
                                Chaka cha
                                2024
                                linahakidwa ndi amalumbwana ena amitima ya anyani ndipo linasowa. Izi zinabwezelesa mbuyo ma
                                chairman ambili.
                                Komabe, ma
                                chairman ena sanawonese ntima ofooka mapeto ake analiyambisaso bungweli ndipo linayamba ndi
                                mphanvu.
                            </p>
                            <p>Bungweli likutukuka n'chifukwa chake tinaganiza zopanga website yake kuti ena athe kutipeza
                                mosavuta. Kmanso kuti ma chairman ambili tizipasana ma updates mwachangu.
                            </p>

                            <section>
                                <h2>Onani ma service athu ⬇</h2>
                                <p>Ma services </p>
                                <div className="services-div-wrapper">
                                    <Link to="/decrees">
                                        <div className="services-div first">
                                            <div className="services-div-text">
                                                <h3>Malamulo a SMAM</h3>
                                                <p>Malamulo ali motele...</p>
                                            </div>
                                        </div>
                                    </Link>
                                    <div className="services-div second">
                                        <div className="services-div-text">
                                            <h3>Ma Updates</h3>
                                            <p>News...</p>
                                        </div>
                                    </div>
                                    <div className="services-div third">
                                        <div className="services-div-text">
                                            <h3>Forum</h3>
                                            <p>Anzanu akugawana nzelu...</p>
                                        </div>
                                    </div>
                                </div>
                                <p>Check</p>
                            </section>
                        </div>
                        <section id="week-tips">
                            <div className="wrapper">
                                <h4>Mawu anzelu</h4>
                                <p>Mwaswera bwanji? Tiyeni tikambilane za phunzilo la week ino</p>

                                <h5>Njira yamakono yothanilana ndi oyipayo</h5>

                                Oyipayo akakupemphani ndalama chitani izi:
                                <ol type="I">
                                    <li>Muuzeni kuti mumtumizira koma musamuuze nthawi,</li>
                                    <li> Nthawi yomwe mwaona kuti Ali busy tumizani ndalama ku number yake (mu phone mwake
                                        mufika
                                        msg ya
                                        trans id kuti wasanja)</li>
                                    <li> Mkangomaliza kutumiza nthawi yomweyo ipangeni reverse (msg so imfika kuti yatulukamo)
                                    </li>
                                    <li>Musamuimbile mungomuuza kuti mwatumiza,</li>
                                    <li>Akamaimba osamuyankha Kaye muuzeni kuti muli busy </li>
                                    <li>Kenako after kanthawi mulembereni msg kuti ayimbe, (inuyo osaimba ndikusakaza chuma
                                        kumeneko)
                                    </li>
                                    <li>Akaimba mkumadandaula muuzeni kuti inuyo simukudziwapo kanthu cos mwatumiza komaso mu
                                        phone
                                        mwanu akudulan moti apa simunasaleso kanthu, kenako muduleni kuopa kupanga confess </li>
                                </ol>
                                <p>Zikatero mwathana nazo,,,</p>
                                <p>Masana abwino tiotche Kaye mbatata yodya pankhomaliro yi,</p>
                            </div>
                        </section>
                        <section id="sign-up">
                            <div className="tooltip-wrapper">
                                <p><a href="#join" id="cta-button">Tapangani sign in chairman</a></p>
                                <div className="tooltip">
                                    <span className="star">⭐</span>
                                    <span className="star">⭐</span>
                                    <span className="star">⭐</span>
                                    😉 Oops, page tikadakonzabe 🚧
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
