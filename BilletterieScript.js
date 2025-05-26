/* Script bouton Login/inscription */

const btnPopup = document.querySelector('.btnLogin-popup');
const coverBox = document.querySelector('.cover-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const iconClose = document.querySelector('.icon-close');

function activateCoverBox(){
    coverBox.classList.add('active');
}

function deactivateCoverBox() {
    coverBox.classList.remove('active');
    coverBox.classList.remove('active-popup');
}

function activatePopup(){
    coverBox.classList.add('active-popup');
}

function deactivateCoverPopup(){
    coverBox.classList.remove('active-popup');
}

btnPopup.addEventListener('click', activateCoverBox);
loginLink.addEventListener('click', deactivateCoverBox);
registerLink.addEventListener('click', activatePopup);
iconClose.addEventListener('click', deactivateCoverBox);


/* SCRIPT QR CODE */

const container = document.querySelector(".container");
qrInput = container.querySelector(".form input");
generateBtn = container.querySelector(".form button");
qrImg = container.querySelector(".qr-code img");

let preValue;

generateBtn.addEventListener("click", () => {
    let qrValue = qrInput.value.trim();
    if (!qrValue || preValue === qrValue) return;
    preValue = qrValue;
    generateBtn.innerText = "Generating QR Code...";
    qrImg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;

    qrImg.addEventListener("load", () => {
        container.classList.add("active");
        generateBtn.innerText = "Generate QR Code";
    });
});

qrInput.addEventListener("keyup", () => {
    if (!qrInput.value.trim()) {
        container.classList.remove("active");
        preValue = "";
    }
});

