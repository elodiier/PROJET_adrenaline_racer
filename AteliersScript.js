    function openPopup(popupId) {
        document.getElementById(popupId).style.display = 'block';
        document.getElementById('overlay').style.display = 'block';
    }
    function closePopup() {
        const popups = document.querySelectorAll('.popup');
        popups.forEach(popup => {
            popup.style.display = 'none';
        });
        document.getElementById('overlay').style.display = 'none';
    }

    const burgerMenuButton = document.querySelector('.burger-menu-button')
    const burgerMenuButtonIcon = document.querySelector('.burger-menu-button i')
    const burgerMenu = document.querySelector('.burger-menu')

    burgerMenuButton.onclick =function(){
      burgerMenu.classList.toggle('open')
        const isOpen = burgerMenu.classList.contains('open')
        burgerMenuButtonIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
    }

