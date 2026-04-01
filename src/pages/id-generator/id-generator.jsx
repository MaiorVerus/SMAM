import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';
import Nav from "../components/nav-dropdown";
import Footer from "../components/footer";

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

    return (
        <>
            <header>
                <Nav />
            </header>
            <main>
                <section>
                    <div className="wrapper">
                        <h1>SMAM ID CARD</h1>
                        <p>This is your identity card</p>
                        <div className="id-container" ref={idCardRef}>
                            <div className="id-card">
                                <div className="header">
                                    <img src="/Images/smam_logoj.webp" alt="SMAM Logo" />
                                    <div className="header-text">
                                        <h2>STINGY MEN ASSOCIATION <br /> OF MALAWI</h2>
                                        <div className="motto">#MOTTO : LET ME SEE WHAT I CAN DO</div>
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="left-section">
                                        <div className="id-title">IDENTITY CARD</div>
                                        <div className="info-row">
                                            <div className="info-label">NAME</div>
                                            <div className="info-value">{cardData.name}</div>
                                        </div>
                                        <div className="info-row">
                                            <div className="info-label">POSITION</div>
                                            <div className="info-value">{cardData.position}</div>
                                        </div>
                                        <div className="info-row">
                                            <div className="info-label">BRANCH</div>
                                            <div className="info-value">{cardData.location}</div>
                                        </div>
                                        <div className="info-row">
                                            <div className="info-label">ID NO.</div>
                                            <div className="info-value">{cardData.idNumber}</div>
                                        </div>
                                        <div className="smam-flag">
                                            <strong>SMAM</strong>
                                            <div className="flag"></div>
                                            <span>This property is dedicated to Malawian<br />Men who are Stingy enough</span>
                                        </div>
                                        <div className="codes">
                                            <div className="code-box">
                                                <div className="qr-code">QR CODE</div>
                                                <div className="code-label">Scan QR Code</div>
                                            </div>
                                            <div className="code-box">
                                                <div className="barcode"></div>
                                                <div className="code-label">Scan Bar Code</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="right-section">
                                        <div className="photo">
                                            {cardData.photoUrl ? <img src={cardData.photoUrl} alt="Applicant" /> : <span>PHOTO</span>}
                                        </div>
                                        <div className="signature-box">
                                            <span className="signature-label">SIGNATURE</span>
                                            <div className="signature-line">
                                                <div className="tagline">Chaka chatha kale ichi ndikwatira next year</div>
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
                        <p>If you encounter any issues, please contact our support team for assistance.</p>
                        <div className="applicant-form">
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
                            <button type="button" onClick={downloadIdCardAsImage}>Download ID Card as Image</button>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}


