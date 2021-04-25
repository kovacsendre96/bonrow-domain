
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


function pageAnim() {
    const bio = document.querySelector('.bio');
    const headerContent = document.querySelector('.header__content'); 
   
    setTimeout(() => {
        bio.style.transform = "translateY(0%)"
        bio.style.opacity = "1";
        headerContent.style.transform = "translateY(0%)"
        headerContent.style.opacity = "1"; 

    }, 100)

}


function galleryAnim(){
    const gallery = document.querySelector('.gallery');
    gallery.classList="gallery active";
   
};



function galleryAnimOut(){
    const gallery = document.querySelector('.gallery');
    gallery.style.transform = "translateY(-50%)"
    gallery.style.opacity = "0";
};


/* 
const nav = document.querySelectorAll('.nav__link');
nav.forEach((navTag)=> navTag.addEventListener("click",(e)=>{
    e.preventDefault();
  if (navTag.innerText === e.target.innerText){
      navTag.style.borderBottom="5px solid white"
  }
})) */
