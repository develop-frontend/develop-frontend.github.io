$(document).ready(function() {

    $('.menu_top_left .menu_switch').on('click', function() {

        var modal = $('#main-modal');
        $(this).children('.hamburger').toggleClass('is-active');
        modal.toggleClass('sidebar-appear');
    });

    // ********change language *******
    $('#change_lang').on('change', function() {

        var url = $(this).val();
        if (url) { // require a URL
            window.location = url; // redirect
        }
        return false;
    });

    // *********** left side menu *********
    $('#switch_button').on('click', function() {

        $('nav').toggleClass('newWidth');
        $('.content, header').toggleClass('push_left');
        $(this).toggleClass('move_right');

    });
    //************    CHANGE COLOR    ****************
   //  $(window).mousemove(function(e) {
   //      //  var win = window.innerHeight;
   //      var win = $(window).height();
   //      opacity = (e.pageY / win * 1);
   //      $('.yellow').css('opacity', opacity);
    //
   //  });


    $(window).mousemove(function(e) {

        var h = $('nav').height();
         var opacity = 0;
         var cursor = e.pageY;

        if(cursor > h){
           cursor = h;
        }
        opacity =  (e.pageY / h);
      //   console.log(' cursor = ', e.pageY);
        $('.yellow').css('opacity', opacity);

    });


    //************** hide and show navbar on scroll *********
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $('header').outerHeight();

    $(window).scroll(function(event) {
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();

        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta)
            return;

        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            $('header').stop().slideUp();
        } else {
            // Scroll Up
            if (st + $(window).height() < $(document).height()) {
                $('header').stop().slideDown();
            }
        }

        lastScrollTop = st;
    };

    //  **** parallax animation ****
    $('#prlx_container').jKit('parallax', {
        'strength': '1',
        'axis': 'both',
        'scope': 'local'
    });

    // **** accordion menu animation ****
    $('.collapsible').collapsible();


});
