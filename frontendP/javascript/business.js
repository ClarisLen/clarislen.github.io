function tabContentLoad () {
    document.querySelectorAll(".tabButton").forEach(button => {
        button.addEventListener("click", () => {
            // event.preventDefault();
            const tabButtonContainer = button.parentElement;
            const tabsContainer = tabButtonContainer.parentElement;
            const tabWrapper = tabsContainer.parentElement;
            const tabNumber = button.dataset.forTab;
            const tabActive = tabWrapper.querySelector(`.tabContent[data-tab="${tabNumber}"]`);
            // const business = document.querySelector('#business');
            // const scrollPosition = business.getBoundingClientRect().top + window.scrollY;

            tabButtonContainer.querySelectorAll(".tabButton").forEach(button => {
                button.classList.remove('active');
            });

            tabWrapper.querySelectorAll(".tabContent").forEach(tab => {
                if(tab.classList.contains('active')){
                    tab.classList.remove('active');
                }
            });

            button.classList.add("active");
            tabActive.classList.add("active");

            // window.scrollTo(0,scrollPosition);

        });
    });
}

document.addEventListener("DOMContentLoaded", function () {
    tabContentLoad();
})