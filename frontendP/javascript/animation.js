function reveal() {
    var animated = document.querySelectorAll(".hidden");

    for (var i = 0; i < animated.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = animated[i].getBoundingClientRect().top;
        var elementVisible = 0;

        if (elementTop < windowHeight + elementVisible) {
        animated[i].classList.add("show");
        } else {
        animated[i].classList.remove("show");
        }
    }
}

window.addEventListener("scroll", reveal);