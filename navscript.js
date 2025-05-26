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