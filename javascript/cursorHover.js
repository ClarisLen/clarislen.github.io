document.addEventListener("DOMContentLoaded", () => {
    const homeLinks = document.querySelectorAll("#homeTab .cardSec .cardWrapper");
    const projectLinks = document.querySelectorAll("#projectTab .customCursor a");
    const graphicLinks = document.querySelectorAll("#graphicTab a");
    const cursor = document.querySelector(".cursor");

    // ENABLE JAVASCRIPT SHOW CURSOR
    cursor.classList.remove("hidden");

    // HOVER ADD CLASS
    function mouseHover(e) {
        this.style.cursor = "none";
        cursor.classList.remove("hidden");
        return cursor.setAttribute("style", "top: " + (e.pageY - 50) + "px; left: " + (e.pageX - 50) + "px");
    }

    // NO HOVER REMOVE
    function mouseExit() {
        this.style.cursor = "all";
        return cursor.classList.add("hidden");
    }

    // CLASS ARRAY LOOP EVENTS
    function arrAddEvent() {
        const classArr = [...homeLinks, ...projectLinks, ...graphicLinks];
        for (let i = 0; i < classArr.length; i++) {
            classArr[i].addEventListener("mousemove", mouseHover);
            classArr[i].addEventListener("mouseout", mouseExit);
        }
    }

    arrAddEvent();
});
