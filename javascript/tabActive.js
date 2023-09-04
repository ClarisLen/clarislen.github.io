document.addEventListener("DOMContentLoaded", () => {
    // DIRECT TO OTHER TAB
    let links = document.querySelectorAll("#homeTab .cardSec .cardWrapper");

    links[0].addEventListener("click", () => {
        document.querySelector("ul .tabItem #project").click();
    });

    links[1].addEventListener("click", () => {
        document.querySelector("ul .tabItem #graphicDesign").click();
    });

    // TOP NAVBAR EXPAND IN MOBILE
    let hamburger = document.querySelector(".navbar-toggler");
    let sidebarShow = document.querySelector(".sidebar");

    hamburger.addEventListener("click", () => {
        sidebarShow.classList.toggle("show");
    });

    // FROM MOBILE TO DESKTOP EXPAND
    window.addEventListener("resize", () => {
        // MOBILE
        if (window.innerWidth < 991.5) {
            if (sidebarShow.classList.contains("show")) {
                sidebarShow.classList.remove("show");
            }
        }

        // DESKTOP
        else {
            if (!sidebarShow.classList.contains("show")) {
                sidebarShow.classList.add("show");
            }
        }
    });
});
