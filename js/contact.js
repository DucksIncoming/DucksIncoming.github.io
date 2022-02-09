nameBox = document.getElementById("name-input");
emailBox = document.getElementById("email-input");
orgBox = document.getElementById("org-input");
msgBox = document.getElementById("msg-input");
sendButton = document.getElementById("send-button")
confirmBanner = document.getElementById("confirm-banner");
form = document.getElementById("contact-form");
invalidEntry = document.getElementById("invalid-box");

$('#send-button').click(function () {
    send();
    return false;
   });

function send() {
    if (nameBox.value != "" && emailBox.value != "" && msgBox.value != ""){
        confirmBanner.style.transitionDuration = "0.5";
        confirmBanner.style.opacity = "1";
        confirmBanner.style.transform = "translateY(0%)";
        nameBox.value = "";
        emailBox.value = "";
        orgBox.value = "";
        msgBox.value = "";
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