var options = [



    {selector: '.purp', offset: 500, callback: function(el) {
        $(function(){
            $(".typed_animated_part1").typed({
                strings: ["Food"],
                typeSpeed: 200,
                callback: function() {
                    $('.typed_animated_part1').next().remove()
                    $(".typed_animated_part2").typed({
                        strings: ["+"],
                        typeSpeed: 200,
                        callback: function() {
                            $('.typed_animated_part2').next().remove()
                            $(".typed_animated_part3").typed({
                                strings: ["Us"],
                                typeSpeed: 200,
                                callback: function() {
                                    $('.typed_animated_part3').next().remove()
                                    $(".typed_animated_part4").typed({
                                        strings: ["="],
                                        typeSpeed: 200,
                                        callback: function() {
                                            $('.typed_animated_part4').next().remove()
                                            $(".typed_animated_part5").typed({
                                                strings: ["Soulmates"],
                                                typeSpeed: 200,
                                            });
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });

            /*$(".element2").typed({
             strings: ["First sentence."],
             typeSpeed: 100
             });

             $(".element3").typed({
             strings: ["First sentence."],
             typeSpeed: 100
             });

             $(".element4").typed({
             strings: ["First sentence."],
             typeSpeed: 100
             });*/
        });
    }},

    {selector: '.activate_zoomIn', offset: 500, callback: function(el) {
        $('.activate_zoomIn').addClass('animated zoomIn');
        $('.activate_zoomIn').css('opacity','1')
    }}
];
Materialize.scrollFire(options);

$(document).ready(function() {
    $('.activate_zoomIn').on('hover', function () {
        $('.activate_zoomIn').addClass('animated zoomIn');
    });
});

