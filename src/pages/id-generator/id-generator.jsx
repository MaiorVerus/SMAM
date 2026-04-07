import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import html2canvas from 'html2canvas';
import Nav from "../../components/nav/dropdown.jsx";
import Footer from "../../components/footer/footer.jsx";

import css from './id.module.css';

export default function IdGenerator() {
    // State to hold the ID card data. Defaults are for the initial display.
    const [cardData, setCardData] = useState({
        name: ": CHING'ANING'ANI",
        position: ": MSUNGI CHUMA",
        location: ": BLANTYRE",
        idNumber: ": KU2/502",
        photoUrl: ""
    });

    // State to manage the form inputs
    const [formData, setFormData] = useState({
        name: '',
        position: '',
        location: '',
        photo: null
    });

    // State to control the visibility of the download button
    const [showDownloadBtn, setShowDownloadBtn] = useState(false);

    // Ref to get the DOM node of the ID card for html2canvas
    const idCardRef = useRef(null);

    // Handles changes in the form text inputs
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Handles the file input change
    const handlePhotoChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setFormData(prev => ({ ...prev, photo: file }));
        }
    };

    // Generates the random SMAM ID
    const generateSMAMId = () => {
        const prefixes = ['BT', 'LL', 'MZ', 'ZB', 'KU', 'NK', 'KS'];
        const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        const number = Math.floor(Math.random() * 999) + 1;
        const suffix = Math.floor(Math.random() * 999) + 1;
        return `${prefix}${String(number).padStart(3, '0')}/${String(suffix).padStart(3, '0')}`;
    };

    // Handles the form submission to generate the ID
    const handleGenerateId = (e) => {
        e.preventDefault();
        setCardData({
            name: `: ${formData.name.toUpperCase()}`,
            position: `: ${formData.position.toUpperCase()}`,
            location: `: ${formData.location.toUpperCase()}`,
            idNumber: `: ${generateSMAMId()}`,
            photoUrl: formData.photo ? URL.createObjectURL(formData.photo) : ""
        });
        setShowDownloadBtn(true);
    };

    // Handles downloading the ID card as a PNG image
    const downloadIdCardAsImage = () => {
        if (idCardRef.current) {
            html2canvas(idCardRef.current, {
                scale: 2,
                useCORS: true,
                backgroundColor: null,
                removeContainer: true,
                logging: false,
                letterRendering: true
            }).then(canvas => {
                const link = document.createElement('a');
                link.href = canvas.toDataURL('image/png');
                link.download = 'SMAM_ID_Card.png';
                link.click();
            });
        }
    };


    const promptText = `
    Using the attached reference image as a strict visual template, recreate the SMAM ID card with the following substitutions only:

1. Replace the default portrait photo with the second attached photo of me, positioned and cropped to match the original.
2. Replace the default NAME value with: [YOUR NAME]
3. Replace the default POSITION value with: [YOUR POSITION]
4. Replace the default BRANCH value with: [YOUR BRANCH]

Preserve everything else exactly — the monochrome card background, font style (monospace/courier), font sizes, all label positions, the Malawi flag graphic, the barcode, the QR placeholder, the signature text, and all spacing. The result must be indistinguishable in layout from the reference. Do not add decorative elements, improve the design, or take creative liberties.


    `;
    const [copied, setCopied] = useState(false);
    const handleCopyPrompt = () => {
        navigator.clipboard.writeText(promptText);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <>
            <header>
                <div className="wrapper">
                    <Nav />
                    <h1>Chairman weni weni amakhala nd ID</h1>

                </div>
            </header>
            <main>
                <section>
                    <div className="wrapper">
                        <h2>SMAM ID CARD</h2>
                        <p>This is your identity card</p>
                        <div className={css["id-container"]} ref={idCardRef}>
                            <div className={css["id-card"]}>
                                <div className={css["header"]}>
                                    <img src="./smam_logoj.webp" alt="SMAM Logo" />
                                    <div className={css["header-text"]}>
                                        <h2>STINGY MEN ASSOCIATION  OF <br /><span>MALAWI</span> </h2>
                                        <div className={css["motto"]}>#MOTTO : Give them nothing </div>
                                    </div>
                                </div>
                                <div className={css["content"]}>
                                    <div className={css["left-section"]}>
                                        <div className={css["id-title"]}>IDENTITY CARD</div>
                                        <div className={css["info-row"]}>
                                            <div className={css["info-label"]}>NAME</div>
                                            <div className={css["info-value"]}>{cardData.name}</div>
                                        </div>
                                        <div className={css["info-row"]}>
                                            <div className={css["info-label"]}>POSITION</div>
                                            <div className={css["info-value"]}>{cardData.position}</div>
                                        </div>
                                        <div className={css["info-row"]}>
                                            <div className={css["info-label"]}>BRANCH</div>
                                            <div className={css["info-value"]}>{cardData.location}</div>
                                        </div>
                                        <div className={css["info-row"]}>
                                            <div className={css["info-label"]}>ID NO.</div>
                                            <div className={css["info-value"]}>{cardData.idNumber}</div>
                                        </div>
                                        <div className={css["smam-flag"]}>
                                            <strong>SMAM</strong>
                                            <div className={css["flag"]}></div>
                                            <span>This property is dedicated to Malawian<br />Men who are Stingy enough</span>
                                        </div>
                                        <div className={css["codes"]}>
                                            <div className={css["code-box"]}>
                                                <div className={css["qr-code"]}>
                                                    <img src="./qr-code-smam.webp" alt="Smam qr code" />
                                                </div>
                                                <div className={css["code-label"]}>Scan QR Code</div>
                                            </div>
                                            <div className={css["code-box"]}>
                                                <div className={css["barcode"]}>scan this</div>
                                                <div className={css["code-label"]}>Scan Bar Code</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className={css["right-section"]}>
                                        <div className={css["photo"]}>
                                            {cardData.photoUrl ? <img src={cardData.photoUrl} alt="Applicant" /> : <span>PHOTO</span>}
                                        </div>
                                        <div className={css["signature-box"]}>
                                            <span className={css["signature-label"]}>SIGNATURE</span>
                                            <div className={css["signature-line"]}>
                                                <div className={css["tagline"]}>Chaka chatha kale ichi ndikwatira next year</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="url">make your id at <a href="#"></a></div> */}
                        </div>
                    </div>
                </section>
                <section>
                    <div className="wrapper">
                        <h2>Instructions to get your ID card</h2>
                        <ol>
                            <li>Fill in the form with accurate details</li>
                            <li>Upload a clear passport size photo of yourself</li>
                            <li>Ensure all details are correct before submitting the form</li>
                            <li>Click on the "Generate ID Card" button</li>
                            <li>Your ID card will be generated and displayed on the screen</li>
                            <li>Download and print your ID card for your records</li>
                        </ol>
                        <p><i><b>NOTE:</b> The ID card is valid for one year from the date of issue.</i></p>
                    </div>
                    {/* ── OFFICIAL DISCLAIMER + INSTRUCTIONS ── */}
                    <section>
    

                        <div className={css["disclaimer-notice"]}>
                            <div className="wrapper">
                                <span className={css["disclaimer-tag"]}>OFFICIAL DISCLAIMER</span>
                                <p>
                                    Please be advised that the automated ID generation system, whilst highly sophisticated
                                    and built with great dedication, may occasionally fail to render certain visual details
                                    with the precision they deserve — particularly barcodes, which have chosen to live their
                                    best life as invisible elements.
                                </p>
                                <p>
                                    Should you require a version of your SMAM identity card that actually resembles something
                                    a functioning institution would issue, kindly follow the premium (read: manual) process outlined below.
                                </p>
                            </div>
                        </div>

                        <div className={css["premium-steps"]}>
                        <div className="wrapper">
                                <h3>High-Detail Version — Manual Process</h3>
                                <ol>
                                    <li>
                                        Proceed to your preferred AI image generation platform —{" "}
                                        <a href="https://chatgpt.com" target="_blank" rel="noopener noreferrer">ChatGPT</a>,{" "}
                                        <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer">Gemini</a>,
                                        or any tool capable of following instructions (unlike certain barcode renderers).
                                    </li>
                                    <li>
                                        Upload your personal photo alongside the reference card.{" "}
                                        <a href="/smam-reference-card.png" download>Download reference here.</a>
                                    </li>
                                    <li>
                                        Paste the prompt below into the image generator. Read it carefully — it is doing
                                        the heavy lifting on your behalf.
                                    </li>
                                    <li>
                                        Download your result. If the output is unsatisfactory, repeat until your standards
                                        are met or you give up — whichever comes first.
                                    </li>
                                    <li>
                                        Should you encounter any difficulties, our support team is allegedly available.{" "}
                                        <Link to="/contact">Contact us.</Link> Good luck, brother.
                                    </li>
                                </ol>
                            </div>
                        </div>
                        <div className={css["prompt-section"]}>
                            <div className="wrapper">
                                <h3>Image Generator Prompt</h3>
                                <p className={css["prompt-hint"]}>Copy and paste this directly into your chosen AI image tool:</p>
                                <div className={css["prompt-box"]}>
                                    <button
                                        className={css["copy-btn"]}
                                        onClick={handleCopyPrompt}
                                    >
                                        {copied ? "✔ Prompt Copied!" : "📋 Copy Prompt"}
                                    </button>
                                    <pre className={css["ai-prompt"]}>{promptText}</pre>
                                </div>
                            </div>
                        </div>

                        {/* </div> */}
                    </section>
                    <div className="wrapper">
                        <p>If you encounter any issues, please contact our support team for assistance.</p>

                    </div>
                    <div className={css["applicant-form"]}>
                        <form onSubmit={handleGenerateId}>
                            <label htmlFor="name">Full Name:</label>
                            <input type="text" id="name" name="name" placeholder="e.g Ndione kaye pena pake" value={formData.name} onChange={handleInputChange} required />

                            <label htmlFor="position">Position:</label>
                            <input type="text" id="position" name="position" placeholder="e.g Oona za free mode" value={formData.position} onChange={handleInputChange} />

                            <label htmlFor="location">Branch Location:</label>
                            <input type="text" id="location" name="location" placeholder="e.g Brantyre" value={formData.location} onChange={handleInputChange} />

                            <label htmlFor="photo">Upload Photo:</label>
                            <input type="file" id="photo" name="photo" accept="image/*" onChange={handlePhotoChange} />

                            <button type="submit">Generate ID Card</button>
                        </form>
                    </div>
                    {showDownloadBtn && (
                        <button type="button" className={css["download-btn"]} onClick={downloadIdCardAsImage}><span>Download ID Card as Image</span></button>
                    )}

                </section>
            </main>
            <Footer />
        </>
    );
}


