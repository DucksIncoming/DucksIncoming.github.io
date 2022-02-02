cards = document.getElementsByClassName("project-card")

for (i = 0; i < cards.length; i++){
    cards[i].style.transform = "translateY(-30%)"
    cards[i].style.transitionDuration = 0.5;
    cards[i].style.transitionDelay = (0.25 * i);
}