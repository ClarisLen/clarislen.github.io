document.addEventListener("DOMContentLoaded", function () {
    var owlService = $('.owl-carousel').owlCarousel({
        loop:false,
        margin:250,
        nav:true,
        lazyLoad:true,
        responsive:{
            0:{
                items:1,
                margin:16,
                slideBy:1,
                dotsEach:true
            },
            1000:{
                items:3,
                margin:320
            },
            1200:{
                items:3
            },
            1400:{
                items:3,
                margin:100
            },
            1920:{
                items:3,
                margin:160
            } 
            }
        })

    var owlComp4 = $('.owl-carousel-items4').owlCarousel({
        loop:false,
        nav:true,
        mouseDrag: false,
        margin:250,
        touchDrag: false,
        responsive:{
            0:{
                items:1,
                slideBy:1,
                dotsEach:true,
                mouseDrag:true,
                touchDrag:true
            },
            1000:{
                items:4,
                slideBy:4,
                margin:204
            },
            1200:{
                items:4,
                slideBy:4
            }
        },
        scrollPerPage: true,
        navigation: true
      })//.css("z-index", 0)



      var owlComp = $('.owl-carousel-item').owlCarousel({
        loop:false,
        nav:true,
        mouseDrag: false,
        margin:250,
        slideBy:1,
        touchDrag: false,
        responsive:{
            0:{
                items:1,
                dotsEach:true,
                mouseDrag:true,
                touchDrag:true
            },
            1000:{
                items:1
            }
        },
        scrollPerPage: true,
        navigation: true
      })
      
        owlComp4.on('resized.owl.carousel', function(event) {
            window.dispatchEvent(new Event('resize'));
        })

        owlComp.on('resized.owl.carousel', function(event) {
            window.dispatchEvent(new Event('resize'));
        })

        owlService.on('resized.owl.carousel', function(event) {
            window.dispatchEvent(new Event('resize'));
        })
      
      //.css("z-index", 0)
      
    //   function loop(){
    //     var win = $(this);
    //     for(;;){
    //         while (win.width() >= 1024 || win.width() >= 1440 || win.width() >= 1920) {
    //             for (let i = 0; i < 1; i++){
    //                 $('.owl-carousel-items4').trigger('refresh.owl.carousel');
    //             }
    //         }
    //     }
    //   }


    //   $(window).on('resize', function(){
    //     setTimeout(loop,5);
    // });
    
    })