$(document).ready(function() {   
  var activPage =  $('body').data('page');   
  var activMenu = '.nav_menu_' + activPage;   
  $(activMenu).addClass('nav_menu_page_activ');});
