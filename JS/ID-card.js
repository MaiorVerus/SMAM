/**when user submits
 * event listener calls func1 to empty placeholders
 * func4 cleans out raw data from the form if any
 * func2 then fills the empty places form func1 with the data from the form
 * func3 generates the SMAM ID and fills it in the ID number placeholder
 */

// const { use } = require("react");

//getting applicants data from the form
const form = document.getElementById('id-form');
const generateIdBtn = document.getElementById('generate-id-btn');
const applicantName = document.getElementById('name');
const applicantPosition = document.getElementById('position');
const applicantLocation = document.getElementById('location');
const applicantPhoto = document.getElementById('photo');

//outputs
let outputName = document.getElementById('user-name');
let outputPosition = document.getElementById('user-position');
let outputLocation = document.getElementById('user-location');
let outputPhoto = document.querySelector('.photo img');
let outputIdNum = document.getElementById('user-id-number');
const downloadBtn = document.getElementById('download-btn');

//Event listener for form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();

    emptyPlaceholders();
    fillEmpties();
}
);

function emptyPlaceholders() {
    outputName.textContent = "";
    outputPosition.textContent = "";
    outputLocation.textContent = "";
    outputIdNum.textContent = "";
    outputPhoto.src = "";
    document.querySelector(".photo span").textContent = "";
}



function fillEmpties() {
    outputName.textContent = applicantName.value;
    outputPosition.textContent = applicantPosition.value;
    outputLocation.textContent = applicantLocation.value;
    outputIdNum.textContent = generateSMAMId();
    const photoFile = applicantPhoto.files[0];

    console.log("Placeholders filled", outputIdNum.textContent, "well");
    const photoURL = URL.createObjectURL(photoFile);
    outputPhoto.src = photoURL;
    
    // Show download button after ID is generated
    downloadBtn.style.display = 'block';
}

function generateSMAMId() {
    const prefixes = ['BT', 'LL', 'MZ', 'ZB', 'KU', 'NK', 'KS'];
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];

    // Generate a random number from 1 to 999
    const number = Math.floor(Math.random() * 999) + 1;
    const suffix = Math.floor(Math.random() * 999) + 1;

    // Convert to string and pad with leading zeros to ensure it's 3 digits
    return `${prefix}${String(number).padStart(3, '0')}/${String(suffix).padStart(3, '0')}`;
}

function downloadIdCardAsImage() {
    const idCard = document.querySelector('.id-container');
    
    html2canvas(idCard, {
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

downloadBtn.addEventListener('click', downloadIdCardAsImage);
