name = document.getElementById("name-input");
email = document.getElementById("email-input");
org = document.getElementById("org-input");
msg = document.getElementById("msg-input");
sendButton = document.getElementById("send-button")
confirmBanner = document.getElementById("confirm-banner");
form = document.getElementById("contact-form");

function send() {
    
    confirmBanner.style.opacity = "1";
}

function closeBanner() {
    confirmBanner.style.opacity = "0";
}