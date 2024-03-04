const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})


window.addEventListener('scroll', () => {
  var navbar = document.querySelector('.navbar');
  if(window.scrollY > 0) {
    navbar.style.backgroundColor = '#2980b9'; // Change background color when scrolling down
  } else {
    navbar.style.backgroundColor = '#3498db'; // Revert to original background color when scrolling up
  }
});
