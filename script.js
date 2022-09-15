// access the following classes
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// when hamburger menu is clicked, turn it to an "X"
// and then show the menu 
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
})

// when a link has been clicked
// return hamburger menu to previous status
document.querySelectorAll('.nav-link')
.forEach(n => n.addEventListener('click', () => {
  // remove active class from hamburger
  hamburger.classList.remove('active');
  // remove active class from nav menu
  navMenu.classList.remove('active');
}))