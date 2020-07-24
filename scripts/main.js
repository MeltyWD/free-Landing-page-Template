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

// Плавный скролл
$(document).ready(function() {
  $(document).on("scroll", onScroll);

  $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $(document).off("scroll");

      $('a').each(function () {
          $(this).removeClass('active');
      })
      $(this).addClass('active');

      var target = this.hash,
          menu = target;
      $target = $(target);
      $('html, body').stop().animate({
          'scrollTop': $target.offset().top+2
      }, 500, 'swing', function () {
          window.location.hash = target;
          $(document).on("scroll", onScroll);
      });
  });
});

function onScroll(event){
  var scrollPos = $(document).scrollTop();
  $('#menu-center a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
          $('#menu-center ul li a').removeClass("active");
          currLink.addClass("active");
      }
      else{
          currLink.removeClass("active");
      }
  });
}


$(document).ready(function(){ //Вызов функции по загрузке интерфейса
  var tempScrollTop, currentScrollTop = $(window).scrollTop(); //объявление переменных и присвоение им значений
  $(window).scroll(function(){ //Вызов функции при прокрутке страницы
    currentScrollTop = $(window).scrollTop(); //присвоение переменной нового значения
      if (currentScrollTop > $('header__burger-circle').height()) { //Проверка условия 'переменная больше высоты шапки'
        $('root').addClass('fixed-header'); // создание класса 'fixed-header' в селекторе 'body'
        if ( tempScrollTop > currentScrollTop ) { //Проверка условия 'значение переменной до вызова функции больше значения после её вызова'
          $('header__burger-circle').addClass('show'); //создание класса 'show' в селекторе 'header'
        } else { // выполнение, если второе условие не прошло проверку
          $('header__burger-circle').removeClass('show'); //удаление класса 'show' в селекторе 'header'
        }
      } else { // выполнение, если первое условие не прошло проверку
        $('root').removeClass('fixed-header'); // удаление класса 'fixed-header' в селекторе 'body'
        $('header__burger-circle').removeClass('show'); //удаление класса 'show' в селекторе 'header'
      }
        tempScrollTop = currentScrollTop; //присвоение одной переменной значение другой
  });
});


// Сдвиг кнопки меню в верх при скроле
// p.s сам сделал =(
$(document).ready(function(){
  var paralax = document.getElementById("paralax");
  $(window).scroll(function(){
    paralax.style.top = 48 + pageYOffset * -0.2 + "px";
    if (paralax.style.top < "0px") {
      paralax.style.top = "0px"
    }
  });
});
