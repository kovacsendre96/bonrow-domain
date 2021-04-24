
const hamburgerIcon = document.querySelector('.fa-bars');
const menu = document.querySelector('.nav__links-container');
hamburgerIcon.addEventListener('click', () => {
    menu.classList.toggle('open');

})

const bioCards = document.querySelectorAll('.bio__card__left');
let biocard = [...bioCards]
biocard[0].style.background = "url(images/peti.jpg)";
biocard[0].style.backgroundSize = "cover";
biocard[0].style.backgroundPosition = "center";
biocard[1].style.background = "url(images/balazs.jpg)";
biocard[1].style.backgroundSize = "cover";
biocard[1].style.backgroundPosition = "center";
biocard[2].style.background = "url(images/feco.jpg)";
biocard[2].style.backgroundSize = "cover";
biocard[2].style.backgroundPosition = "center";
biocard[3].style.background = "url(images/bogdan.jpg)";
biocard[3].style.backgroundSize = "cover";
biocard[3].style.backgroundPosition = "center";
