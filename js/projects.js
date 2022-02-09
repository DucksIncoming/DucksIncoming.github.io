cards = document.getElementsByClassName("project-card")

card1 = document.getElementById("taser-chess");

$(document).ready(function(){
    $(".project-card").hover(function(event){
        var x = event.clientX;
        var y = event.clientY;
        var leftDist = $(this).offsetHeight;
        var topDist = $(this).offsetWidth;

        var relX = (x - leftDist);
        var relY = (y - topDist);

        $(this).css("transform", "rotateX(" + (x/2) + "deg)");
    }, function() {
        $(this).css("transform", "rotateX(0deg)")
    });
});