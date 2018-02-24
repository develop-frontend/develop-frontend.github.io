$(document).ready(function (){

    var $menu = $('.nav__menu.hide-on-med'); 
    $('.navbar-toggle').on('click', function(){

        $menu.toggleClass('active');
    })

});