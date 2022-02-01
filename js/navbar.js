// Animation handling

navbar = document.getElementById("navbar-container");
navIcon = document.getElementById("navbar-icon");

homeText = document.getElementById("home-text");
aboutText = document.getElementById("about-text");
projectsText = document.getElementById("projects-text");
linksText = document.getElementById("links-text");
contactText = document.getElementById("contact-text");

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


function homeHover() {
    homeText.style.transitionDuration = "0.5";
    homeText.style.opacity = 1;
}
function homeUnhover() {
    homeText.style.transitionDuration = "0.5";
    homeText.style.opacity = 0;
}

function aboutHover() {
    aboutText.style.transitionDuration = "0.5";
    aboutText.style.opacity = 1;
}
function aboutUnhover() {
    aboutText.style.transitionDuration = "0.5";
    aboutText.style.opacity = 0;
}

function projectsHover() {
    projectsText.style.transitionDuration = "0.5";
    projectsText.style.opacity = 1;
}
function projectsUnhover() {
    projectsText.style.transitionDuration = "0.5";
    projectsText.style.opacity = 0;
}

function linksHover() {
    linksText.style.transitionDuration = "0.5";
    linksText.style.opacity = 1;
}
function linksUnhover() {
    linksText.style.transitionDuration = "0.5";
    linksText.style.opacity = 0;
}

function contactHover() {
    contactText.style.transitionDuration = "0.5";
    contactText.style.opacity = 1;
}
function contactUnhover() {
    contactText.style.transitionDuration = "0.5";
    contactText.style.opacity = 0;
}

function openHome() {
    window.open("home.html", "_self");
}

function openAbout() {
    window.open("about.html", "_self");
}

function openProjects() {
    window.open("projects.html", "_self");
}

function openLinks() {
    window.open("links.html", "_self");
}

function openContact() {
    window.open("contact.html", "_self");
}

function buttonWipe(button){
    wipePercent = 0;
    while (button.style.background != "linear-gradient(90deg, rgba(30,30,30,1) 100%, rgba(30, 30, 30, 0 ) 100%)"){
        button.style.background = "linear-gradient(90deg, rgba(30,30,30,1)" + wipePercent.toString() + "%, rgba(30, 30, 30, 0 ) 100" + wipePercent.toString() + "%)";
        wipePercent += 1
    }
}