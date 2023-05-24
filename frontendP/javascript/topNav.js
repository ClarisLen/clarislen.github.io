$( document ).ready(function() {
    const hamburger = document.getElementById('hamburger');
    const navContainer = document.getElementById('nav-link');

    // REMOVE
    document.onclick = function(e){
        if(!$(e.target).closest(hamburger).length && !$(e.target).closest(navContainer).length){
            hamburger.classList.remove('active');
            navContainer.classList.remove('active');
        }
    }

    hamburger.onclick = function(){
        hamburger.classList.toggle('active');
        navContainer.classList.toggle('active');
    }
    
})
