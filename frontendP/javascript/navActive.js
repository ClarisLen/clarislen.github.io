$( document ).ready(function() {
    $(window).scroll(function() {
        var windscroll = $(window).scrollTop();
        if (windscroll >= 0 ) {
            $('section').each(function(i) {
                if ($(this).position().top <= windscroll + 50) {
                    $('.nav').removeClass('active');
                    $('.nav').eq(i).addClass('active');
                }
            });

        } else {

            $('.nav').removeClass('active');
            $('nav li:first').addClass('active');
        }

    }).scroll();
    
});