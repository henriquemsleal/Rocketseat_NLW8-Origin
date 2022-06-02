const navigation = document.getElementById('navigation');
const backToTopButton = document.getElementById('backToTopButton');

window.addEventListener('scroll', onScroll);
onScroll();
function onScroll() {
  // console.log(scrollY);
  showNavOnScroll();
  showBackToTopButtonOnScroll();
}

function showNavOnScroll() {
  if (scrollY > 50) {
    navigation.classList.add('scroll');
  } else {
    navigation.classList.remove('scroll');
  }
}
function showBackToTopButtonOnScroll() {
  if (scrollY > 250) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded');
}

function closeMenu() {
  document.body.classList.remove('menu-expanded');
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
}).reveal(
  `
    #home, 
    #home img, 
    #home .stats, 
    #services,
    #services header,
    #services .card
    #about, 
    #about header, 
    #about .content`,
  {
    delay: 150,
    duration: 300,
    reset: true,
  }
);
