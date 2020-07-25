// Бургер меню
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

//Выделение секции в меню при загрузке
$(document).ready(function(){
  var $sections = $('section');
  $sections.each(function(i,el){
    var top  = $(el).offset().top-250;
    var bottom = top +$(el).height();
    var scroll = $(window).scrollTop();
    var id = $(el).attr('id');
    if( scroll > top && scroll < bottom){
      $('a.header__menu-link_selected').removeClass('header__menu-link_selected');
      $('a[href="#'+id+'"]').addClass('header__menu-link_selected');
    }
  })
});
//Выделение секции в меню при скроле
jQuery(window).scroll(function(){
  var $sections = $('section');
  $sections.each(function(i,el){
    var top  = $(el).offset().top-250;
    var bottom = top +$(el).height();
    var scroll = $(window).scrollTop();
    var id = $(el).attr('id');
    if( scroll > top && scroll < bottom){
      $('a.header__menu-link_selected').removeClass('header__menu-link_selected');
      $('a[href="#'+id+'"]').addClass('header__menu-link_selected');
    }
  })
});

// Плавный скролл
$("nav").on("click","a", function (event) {
  // исключаем стандартную реакцию браузера
  event.preventDefault();
  // получем идентификатор блока из атрибута href
  var id  = $(this).attr('href'),
  // находим высоту, на которой расположен блок
      top = $(id).offset().top;
  // анимируем переход к блоку, время: 500 мс
  $('body,html').animate({scrollTop: top}, 500);
});

// Сдвиг кнопки меню в верх при скроле
// p.s сам сделал =(
$(document).ready(function(){
  var burger_scroll = document.getElementById("header__burger-circle");
  burger_scroll.style.top = 48 + pageYOffset * -0.2 + "px";
  $(window).scroll(function(){
    burger_scroll.style.top = 48 + pageYOffset * -0.2 + "px";
    if (burger_scroll.style.top < "0px") {
      burger_scroll.style.top = "0px"
    }
  });
});
// Отключение меню при клике на ссылку
function addClass() {
  var id = $(this).attr('href');
  $("a").removeClass('active');
  $("div").removeClass('active');
  $(this).addClass('active');
  $(id).addClass('active');
}

var nodeList = document.querySelectorAll('a');

for( var i = 0; i < nodeList.length; i++) {
  nodeList[i].addEventListener('click', addClass);
}
