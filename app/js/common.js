$(function() {

//preloader
    $(window).on('load', function () {
       $('.preloader').delay(2000).fadeOut('slow')
    });

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






});
