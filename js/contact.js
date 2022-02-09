name = document.getElementById("name-input");
email = document.getElementById("email-input");
org = document.getElementById("org-input");
msg = document.getElementById("msg-input");
sendButton = document.getElementById("send-button")
confirmBanner = document.getElementById("confirm-banner");
form = document.getElementById("contact-form");
invalidEntry = document.getElementById("invalid-box");

$('#send-button').click(function () {
    send();
    return false;
   });

function send() {
    if (name.value != "" && email.value != "" && msg.value != ""){
        confirmBanner.style.transitionDuration = "0.5";
        confirmBanner.style.opacity = "1";
        confirmBanner.style.transform = "translateY(0%)";
        name.value = "";
        email.value = "";
        org.value = "";
        msg.value = "";
        invalidEntry.style.transform = "translateY(-100%)";
    }
    else {
        invalidEntry.style.transform = "translateY(0%)";
    }
}

function closeBanner() {
    confirmBanner.style.transitionDuration = "0.5";
    confirmBanner.style.opacity = "0";
    confirmBanner.style.transform = "translateY(100%)";
}