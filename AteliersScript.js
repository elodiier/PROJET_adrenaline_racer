    function openPopup(popupId) {
        document.getElementById(popupId).style.display = 'block';
        document.getElementById('overlay').style.display = 'block';
    }
    /* Affiche la pop up (élément HTML avec l'id popupId)
    Affiche également un fond sombre (#overlay)*/

    function closePopup() {
        const popups = document.querySelectorAll('.popup');
        popups.forEach(popup => {
            popup.style.display = 'none';
        });
        document.getElementById('overlay').style.display = 'none';
    }
    /* Cache toutes les popups ayant la classe .popup */

    const burgerMenuButton = document.querySelector('.burger-menu-button')
    /* burgerMenuButton : bouton pour ouvrir/fermer le menu */
    const burgerMenuButtonIcon = document.querySelector('.burger-menu-button i')
    /* icone (<i>) à l'intérieur du bouton */
    const burgerMenu = document.querySelector('.burger-menu')
    /* menu déroulant */

    burgerMenuButton.onclick =function(){
    /* Quand on clique */
       
    burgerMenu.classList.toggle('open')
    /* on bascule la classe open sur le menu */
      
    const isOpen = burgerMenu.classList.contains('open')
    /* on vérifie si le menu est ouvert */
    burgerMenuButtonIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
    /*si ouvert : croix fa-xmark si fermer : hamburger fa-bars */
    }
    

