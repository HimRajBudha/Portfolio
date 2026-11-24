
// =================================
// WELCOME BUTTON
// =================================

const welcomeBtn = document.getElementById("welcomeBtn");

const welcomeMessage = document.getElementById("welcomeMessage");

welcomeBtn.addEventListener("click", function() {

    welcomeMessage.textContent =
        "Welcome to my personal portfolio website!";

});


// =================================
// MOBILE MENU
// =================================

const menuBtn = document.getElementById("menuBtn");

const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", function() {

    navbar.classList.toggle("active");

});


// =================================
// CLOSE MOBILE MENU AFTER CLICK
// =================================

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        navbar.classList.remove("active");

    });

});
