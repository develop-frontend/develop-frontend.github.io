$(document).ready(function (){

    var dateNames = {
        weekday: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
        month:   ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
    };

    var date = new Date();
    var thisDay = dateNames.weekday[date.getDay()];
    var thisMonth = dateNames.month[date.getMonth()];
    var thisDate = thisMonth + ' ' + date.getDate() + ',' + ' ' + date.getFullYear();
    
    $(".c-day-week").text(thisDay);
    $(".c-full-date").text(thisDate);
    
    $('.cal_days td').on('click', function(){
        $('.cal_days td').removeClass('active');
        var cell = $(this).text();
        if(cell.length === 0){
            return;
        }else{
            $(this).toggleClass('active');
        }
    });

    

    var $menu = $('.nav__menu.hide-on-med'); 
    $('.navbar-toggle').on('click', function(){

        $menu.toggleClass('active');
    })

});