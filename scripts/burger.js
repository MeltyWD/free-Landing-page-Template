$(document).ready(function() {
  $('.header__burger').click(function(event) {
    $('.header__burger,.header__menu').toggleClass('active');
    $('.root').toggleClass('lock');
  });
  $('.header__menu-list').click(function(event) {
    $('.header__burger,.header__menu').removeClass('active');
    $('body').removeClass('lock');
  });
});
