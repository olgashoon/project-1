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

//preloader
    $(window).on('load', function() {
        $('.preloader').delay(1000).fadeOut('slow');
    });


    function onResize() {
        $('.carousel-services-content').equalHeights();
    }onResize();
    window.onresize = function () {onResize()};



});
