const btnPopup = document.querySelector('.btnLogin-popup');
/* bouton pour ouvrir la popup*/
const coverBox = document.querySelector('.cover-box');
/* conteneur principal qui couvre l'écran quand la popup est affichée */
const loginLink = document.querySelector('.login-link');
/* lien pour basculer vers le formulaiare de connexion */
const registerLink = document.querySelector('.register-link');
/* lien pour basculer vers le formulaire d'inscription */
const iconClose = document.querySelector('.icon-close');
/* icone pour fermer la popup */

function activateCoverBox(){
    coverBox.classList.add('active');
}
/* active le conteneur principal en ajoutant la classe 'active' */

function deactivateCoverBox() {
    coverBox.classList.remove('active');
    coverBox.classList.remove('active-popup');
}
/* Retire les classes d'activation pour masquer complètement ma popup */

function activatePopup(){
    coverBox.classList.add('active-popup');
}
/* Active uniquement ma fenetre popup (ex:formulaire) */

function deactivateCoverPopup(){
    coverBox.classList.remove('active-popup');
}
/* Cache la fenêtre popup, mais laisse le fond actif */

btnPopup.addEventListener('click', activateCoverBox);
/*Quand on clique sur le bouton de la popup on active l'arrière plan (coverBox) via activateCoverBox ce qui ajoute la classe active */
loginLink.addEventListener('click', deactivateCoverBox);
/* Quand on clique sur le lien 'inscription' de la popup, cela ferme tout (fond et la popup)*/
registerLink.addEventListener('click', activatePopup);
/* Quand on clique sur la popup, celà affiche la fenêtre de la popup (ajoute la classe active-popup a coverBox) */
iconClose.addEventListener('click', deactivateCoverBox);
/* quand on clique sur l'icone fermeture cela désactive tout */