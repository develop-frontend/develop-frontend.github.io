$(document).ready(function() {
    var html = $('#wrapper').html();
    var setData;
    var modal;
   //  var availableTutorials = ["Bird", "Water", "Grid", "Girl", "Dog", "Cat", "Ball", "Man", "Old", "Young", "Sweet","Spider","Rain"];
   var availableTutorials = [];

    $('.voice').hover(function() {
        $(this).siblings('#popup').stop().fadeIn(200);
    }, function() {
        $(this).siblings('#popup').stop().fadeOut(200);
    });
//////////////////////
    function getImg() {

        $('.result').remove();
        setData = $('.main_search').val();
        $.ajax({
            url: 'https://pixabay.com/api/?key=4697858-6e5dfa77924d476695f1b4913&image_type=photo&per_page=24&lang=en,ru',
            data: {
                q: setData
            },
            dataType: 'jsonp',
            success: function(data) {
                console.log(data);
                var content = tmpl(html, data);
                $('body').append(content);
            }
        })
    };
////////////////////////
   $('.textarea').on('input', function () {

      PartialText = $('.main_search').val();
      $.ajax({
          url: 'https://pixabay.com/api/?key=4697858-6e5dfa77924d476695f1b4913&image_type=photo&per_page=200&lang=en,ru',
          data: {
             q: PartialText
          },
          dataType: 'jsonp',
          success: function(data) {
            availableTutorials.length=0;

            for(i=0;i<20;i++)
               if(i<data.hits.length)
            for(i=0;i<20;i++) {
               if(i<data.hits.length)
                  availableTutorials.push(data.hits[i].tags)
            }
          }
      })
   });

    $('.button_search').on('click', getImg);
    $('.textarea').keyup(function(e) {
        if (e.keyCode == 13) {
            getImg();
        }
    });

////////////////////////// fancybox;
    $('body').on('click', '.link', function(e) {
        e.preventDefault();
        var href = $(this).attr('href');
        modal = $('<div id="overlay"><div id="modal"><img src="' + href + '"></div></div>');
        modal.one('click', hideModal);
        $('body').append(modal);
    });

    function hideModal() {
        modal.remove();
    };
/////////////////////////////////////
    $("#automplete-1").autocomplete({
        source: availableTutorials,
        minLength:2
    });
//////
   $('.grid').masonry({

      itemSelector: '.grid-item',
      columnWidth: 150
   });

});
