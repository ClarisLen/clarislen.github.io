document.addEventListener("DOMContentLoaded", () => {
    const imagesContainer = document.querySelector(".galleryWrapper");
    const btnLoad = document.querySelector(".btnLoad");
    const imageContainer = imagesContainer.children;

    btnLoad.addEventListener("click", () => {
        for (let i in imageContainer) {
            try {
                if (imageContainer[i].classList.contains("hidden")) {
                    imageContainer[i].classList.remove("hidden");
                }
            } catch (e) {
                btnLoad.classList.add("hidden");
                return false;
            }
        }
    });
});
