// Modals
let contact = document.getElementById('contact');
let portfolio = document.getElementById('portfolio-section');
let aboutMe = document.getElementById('about-me');

// Links to Modals
let contactLink = document.getElementById("contactLink");
let portfolioLink = document.getElementById("portfolioLink");
let aboutMeLink = document.getElementById("aboutMeLink");

// Opens the Modals
contactLink.onclick = function() {
    contact.style.display = "block";
}
portfolioLink.onclick = function() {
    portfolio.style.display = "block";
}
aboutMeLink.onclick = function() {
    aboutMe.style.display = "block";
}

// Click anywhere outside of the modal to close
window.onclick = function(event) {
    if (event.target == contact || portfolio || aboutMe) {
        contact.style.display = "none";
        portfolio.style.display = "none";
        aboutMe.style.display = "none";
        let backdrop = document.querySelector('.modal-backdrop');
        backdrop.parentNode.removeChild(backdrop);
    }
}
