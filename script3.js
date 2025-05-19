const btnPopup = document.querySelector('.btnLogin-popup');
const coverBox = document.querySelector('.cover-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const iconClose = document.querySelector('.icon-close');

function openPopup(){
    coverBox.classList.add('active');
}

function closePopup() {
    coverBox.classList.remove('active');
}

if (registerLink) registerLink.addEventListener('click', openPopup);
if (loginLink) loginLink.addEventListener('click', closePopup);
if (btnPopup) btnPopup.addEventListener('click', openPopup);
if (iconClose) iconClose.addEventListener('click', closePopup);