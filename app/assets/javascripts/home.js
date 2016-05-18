// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
var INITIAL_LOAD = true;

$(document).ready(function() {
    $('.menu').addClass('original').clone().insertAfter('.menu').addClass('cloned').css('position', 'fixed').css('top', '0').css('margin-top', '0').css('z-index', '500').removeClass('original').hide();

    scrollIntervalID = setInterval(stickIt, 10);


    function stickIt() {


        var orgElementPos = $('.original').offset();
        orgElementTop = orgElementPos.top;

        if ($(window).scrollTop() >= (orgElementTop)) {
            // scrolled past the original position; now only show the cloned, sticky element.

            // Cloned element should always have same left position and width as original element.
            orgElement = $('.original');
            coordsOrgElement = orgElement.offset();
            leftOrgElement = coordsOrgElement.left;
            widthOrgElement = orgElement.css('width');
            $('.cloned').css('left', leftOrgElement + 'px').css('top', 0).css('width', widthOrgElement).show();
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

    $(window).resize(function(){
        logoHeight();
    });
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

    $(window).resize(function(){
        showHeight();
    });
});

