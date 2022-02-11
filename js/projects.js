cards = document.getElementsByClassName("project-card")

card1 = document.getElementById("taser-chess");

$(document).ready(function(){
    
    $(".project-card").each( function() {
        this.style.transitionDuration = "0.5s";
        this.style.transform = "translateY(0%)"
        this.style.opacity = "1";
    });

    $(".project-card").hover( function() {
        $(this).children(".background-text-container").css("opacity", "1");
        $(this).children(".card-graphic").css("filter", "drop-shadow(30px 30px 12px)");

        $(this).children(".card-title").css("opacity", "1");
        $(this).children(".card-title").css("filter", "drop-shadow(0px 0px 12px)");
    }, function() {
        $(this).children(".background-text-container").css("opacity", "0");
        $(this).children(".card-graphic").css("filter", "none");

        $(this).children(".card-title").css("opacity", "0");
        $(this).children(".card-title").css("filter", "none");
    });

    VanillaTilt.init(document.querySelectorAll(".project-card"))
}); 