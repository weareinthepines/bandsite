// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
$(document).ready(function() {
    $('.logos').hover(function() {
        $('#bottom').animate({top: '75%'}, 1000, function(){

        });
    },function(){
        $('#bottom').animate({top:"100%"}, 1000, function(){
     });
 });
});


