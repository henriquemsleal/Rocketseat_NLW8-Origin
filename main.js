const navigation = document.getElementById('navigation');
const backToTopButton = document.getElementById('backToTopButton');

window.addEventListener('scroll', onScroll);
onScroll();
function onScroll() {
  // console.log(`scrollY: ${scrollY}`);
  showNavOnScroll();
  showBackToTopButtonOnScroll();
  activateMenuAtCurrentSection(home);
  activateMenuAtCurrentSection(services);
  activateMenuAtCurrentSection(about);
  activateMenuAtCurrentSection(contact);
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2;
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  const sectionTopReacheOrPassedTargetLine = targetLine >= sectionTop;
  // console.log(sectionTopReacheOrPassedTargetLine);
  const sectionEndsAt = sectionTop + sectionHeight;
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine;
  const sectionBoundaries = sectionTopReacheOrPassedTargetLine && !sectionEndPassedTargetLine;
  const sectionId = section.getAttribute('id');
  // console.log(sectionId);
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`);
  // console.log(menuElement);
  menuElement.classList.remove('active');
  if (sectionBoundaries) {
    menuElement.classList.add('active');
  }
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
  if (scrollY > footer.offsetTop - innerHeight) {
    backToTopButton.classList.remove('show');
    backToTopButton.classList.add('show2');
  } else {
    backToTopButton.classList.remove('show2');
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
