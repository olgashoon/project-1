$(function() {



//to top arrow
	$(window).scroll(function() {
        if ($(this).scrollTop() > $(this).height()) {
           $('.to-top').addClass('active');
        } else {
            $('.to-top').removeClass('active');
        }
    });
	$('.to-top').click(function() {
        $('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
    });


// Initialize the sticky scrolling on an item
    $('.sticky').sticky('#my-page',{
        useTransition: false,
        animate: true,
        animTime: 1000
   });

// Main menu
    $("#my-menu").mmenu({
        extensions: ['theme-black', 'fx-menu-slide', 'pagedim-black' ],
        navbar: {
            title: 'iHelp'
        },
        offCanvas: {
            position: 'right'
        }
    });

    var api = $('#my-menu').data('mmenu');
    api.bind('open:finish', function() {
        $('.hamburger').addClass('is-active');
    });
    api.bind('close:finish', function () {
        $('.hamburger').removeClass('is-active');
    });

// Caroucel services
    $('.carousel-services').on('initialized.owl.carousel', function () {
        setTimeout(function () {
            carouselService();
        }, 100);
    })
    $('.carousel-services').owlCarousel({
        loop: true,
        nav: true,
        smartSpeed: 700,
        dots: false,
        navText: ['<i class="fa fa-angle-double-left">','<i class="fa fa-angle-double-right">'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            800: {
                items: 2
            },
            1100: {
                items: 3
            }
        }
    });

    function carouselService() {
        $('.carousel-services-item').each(function() {
            var ths = $(this);
            var thsh = ths.find('.carousel-services-content').outerHeight();
            ths.find('.carousel-services-image').css('min-height', thsh);

        });
    }carouselService();


    $('.carousel-services-composition .h3').each(function() {
        var ths = $(this);
        ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
    });

    $('section .h2').each(function() {
        var ths = $(this);
        ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));
    });

    $('.logo, .mm-title').each(function() {
        var ths = $(this);
        ths.html(ths.html().replace(/(\w)/, '<span>$1</span>'));
    });


// Caroucel reviews
    $('.reviews').owlCarousel({
        loop: true,
        items: 1,
        nav: false,
        smartSpeed: 700,
        autoHeight: true
    });

// Caroucel partners
    $('.partners').owlCarousel({
        loop: true,
        items: 4,
        nav: true,
        dots: false,
        smartSpeed: 700,
        navText: ['<i class="fa fa-angle-left">','<i class="fa fa-angle-right">'],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });

//Styling selects
    $('select').selectize({
        create: true
    });

//E-mail Ajax Send
    $("form.callback").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "mail.php", //Change
            data: th.serialize()
        }).done(function() {
            $(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn()
            setTimeout(function() {
                // Done Functions
                $(th).find('.success').removeClass('active').fadeOut()
                th.trigger("reset");
            }, 3000);
        });
        return false;
    });

//Resize window
    function onResize() {
        $('.carousel-services-content').equalHeights();
    }onResize();
    window.onresize = function () {onResize()};

});

//preloader
$(window).on('load', function() {
    $('.preloader').delay(1000).fadeOut('slow');
});
