


$(document).ready(function () {



$("#btn-nav").click(function () {
    $(".button-toggler:first-child").toggleClass("animation-toggler-1")
    $(".button-toggler:nth-child(2)").toggleClass("animation-toggler-2")
    $(".button-toggler:nth-child(3)").toggleClass("animation-toggler-3")
      ;
  });
  // navbar
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('header').addClass('shadow');
    } else {
      $('header').removeClass('shadow');
    }
  });


});