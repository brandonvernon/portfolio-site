let contact = document.querySelector('.navContact');
let portfolio = document.querySelector('.navPortfolio');
let aboutMe = document.querySelector('.navAboutMe');

let contactModal = document.querySelector('.contactModal');
let portfolioModal = document.querySelector('.portfolioModal');
let aboutMeModal = document.querySelector('.aboutMeModal');

let name = document.querySelector('.name');
let role = document.querySelector('.role');


function clear() {
  contact.addEventListener("click", function(event) {
    name.classList.add('clear');
    role.classList.add('clear');
    unclear();
  })
  portfolio.addEventListener("click", function(event) {
    name.classList.add('clear');
    role.classList.add('clear');
    unclear();
  })
  aboutMe.addEventListener("click", function(event) {
    name.classList.add('clear');
    role.classList.add('clear');
    unclear();
  })
}

function unclear() {
  contactModal.addEventListener("click", function(event) {
      name.classList.remove('clear');
      role.classList.remove('clear');
  })
  portfolioModal.addEventListener("click", function(event) {
      name.classList.remove('clear');
      role.classList.remove('clear');
  })
  aboutMeModal.addEventListener("click", function(event) {
      name.classList.remove('clear');
      role.classList.remove('clear');
  })
}

clear();
