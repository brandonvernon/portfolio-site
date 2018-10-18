let overlay = document.querySelector('.modal-overlay');
let aboutMe = document.querySelector('.nav-aboutme');
let portfolio = document.querySelector('.nav-portfolio');
let contact = document.querySelector('.nav-contact');
let aboutMeModal = document.querySelector('.aboutme-modal');
let portfolioModal = document.querySelector('.portfolio-modal');
let contactModal = document.querySelector('.contact-modal');
let header = document.querySelector('.header-wrapper');

function init() {
  aboutMe.addEventListener("click", function(event) {
    header.classList.add('hide');
    aboutMeModal.style.display = "block";
    overlay.style.display = "block";
    close();
  })
  portfolio.addEventListener("click", function(event) {
    header.classList.add('hide');
    portfolioModal.style.display = "flex";
    overlay.style.display = "block";
    close();
  })
  contact.addEventListener("click", function(event) {
    header.classList.add('hide');
    contactModal.style.display = "block";
    overlay.style.display = "block";
    close();
  })
}

function close() {
  overlay.addEventListener("click", function(event) {
      header.classList.remove('hide');
      aboutMeModal.style.display = "none";
      portfolioModal.style.display = "none";
      contactModal.style.display = "none";
      overlay.style.display = "none";
  })
}

function check() {
  window.addEventListener("resize", noModals);
}

function noModals(){
  let width = window.innerWidth;
  console.log(width);
  if (width <= "824"){
    header.classList.remove('hide');
    aboutMeModal.style.display = "none";
    portfolioModal.style.display = "none";
    contactModal.style.display = "none";
    overlay.style.display = "none";
  }
}

init();
check();
