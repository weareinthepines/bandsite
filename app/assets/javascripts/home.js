// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
var INITIAL_LOAD = true;

$(document).ready(function() {
    $('.social').addClass('original').clone().insertAfter('.menu').addClass('cloned').css('position', 'fixed').css('top', '0').css('margin-top', '0').css('z-index', '500').removeClass('original').hide();

    scrollIntervalID = setInterval(stickIt, 10);


    function stickIt() {


        var orgElementPos = $('.original').offset();
        orgElementTop = orgElementPos.top;

        if ($(window).scrollTop() >= (orgElementTop)) {
            // scrolled past the original position; now only show the cloned, sticky element.

            // Cloned element should always have same left position and width as original element.
            orgElement = $('.original');
            coordsOrgElement = orgElement.offset();
            widthOrgElement = orgElement.css('width');
            $('.cloned').css('top', 0).css('width', widthOrgElement).show();
            $('.original').css('visibility', 'hidden');
        } else {
            // not scrolled past the menu; only show the original menu.
            $('.cloned').hide();
            $('.original').css('visibility', 'visible');
        }
    }


});

$(document).ready(function() {
    function logoHeight() {
        var $logo = $(".logos"),
            $header = $("#bnbutton"),
            windowHeight = $(window).height(),
            heightDifference = windowHeight - $logo.height(),
            anotherHeight = heightDifference/2,
            finalHeight = anotherHeight - $header.height();

        $logo.css({
            top: finalHeight
        })
    }

    logoHeight();
});

$(document).ready(function() {
    function showHeight() {
        var $show = $(".showslist"),
            windowHeight = $(window).height(),
            heightDifference = windowHeight - $show.height();


        $show.css({
            top: heightDifference/4
        })
    }

    showHeight();

});

$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
});

