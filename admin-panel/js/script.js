$(document).ready(function (){

    var weekday = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
    var month = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    var date = new Date();
    var thisDay = weekday[date.getDay()];
    var thisMonth = month[date.getMonth()];
    var thisDate = thisMonth + ' ' + date.getDate() + ',' + ' ' + date.getFullYear();
    
    $(".c-day-week").text(thisDay);
    $(".c-full-date").text(thisDate);
    
    $('.cal_days td').on('click', function(){
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