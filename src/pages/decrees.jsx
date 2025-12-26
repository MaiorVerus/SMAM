
import { useEffect } from "react";
import Nav from "../components/nav-dropdown";
import Footer from "../components/footer";
import '../css/Smam_Decrees.css';

export default function Decrees() {
    // Set the document title when the component mounts
    useEffect(() => {
        document.title = "SMAM Constitution";
    }, []); // The empty dependency array ensures this runs only once

    return (
        <>
            <header>
                <Nav />
                <hr />
                <h1>Malamulo athu 💪🏽</h1>
                <p className="preamble">Tinachiona chabwino ife kukulembelani malamulo athu okomawa. Ngakhale inu
                    mukuziwa kale, ife talemba kuti
                    tikukumbuseni.</p>
            </header>
            <main>
                <div className="main-background">
                    <div className="wrapper">
                        <h2>Kutanthauzila</h2>
                        <p><strong>Chairman:</strong> Awa nd mawu otchulila member. Ziwani kuti sitilola mathanyula kukhala member
                            wathu</p>
                        <p><strong>Oyipayo:</strong> Awa nd mawu otchulila wa nkaz. Ziwani kuti mawu awa sititchulila mayi wa
                            Chairman </p>
                        <hr />
                        <h2>Malamulo</h2>

                        <h3>Section A: Zokamba Milandu</h3>
                        <ol>
                            <li>Chairman ayenera kuyamba kufewetsa moyo pa mulandu wamimba pokhapokha ngati payamba kuveka za police
                            </li>
                        </ol>
                        <h3>Section B: Zosamala chuma</h3>
                        <ol>
                            <li>Chairman kudya pakhomo pake sikwenikweni choncho timamulimbikitsa kukhara ndi abwenzi ochuluka
                                kmanso kuyenda masadaka, maukwati nd mapwando</li>
                            <li>Chairman sayenela kuzola mafuta ngati:
                                <br />(a) wasamba zuwa litalowa kale kapena litayandika kutelo
                                <br />(b) pali dongosolo lovala trouser
                                <br />(c) ngati sakuchokapo
                            </li>
                        </ol>

                        <section className="schedules">
                            {/* the following contains oath */}
                            <p className="schedule"></p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}