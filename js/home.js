// Animation handling

navbar = document.getElementById("navbar-container");
navIcon = document.getElementById("navbar-icon");

function navbarOpen() {
    navbar.style.transitionDuration = "0.25s";
    navbar.style.transform = "translateX(0%)";

    navIcon.style.transitionDuration = "0.25s";
    navIcon.style.transform = "rotate(90deg)";
}

function navbarClose() {
    navbar.style.transitionDuration = "0.25s";
    navbar.style.transform = "translateX(-100%)";

    navIcon.style.transitionDuration = "0.25s";
    navIcon.style.transform = "rotate(0deg)";
}