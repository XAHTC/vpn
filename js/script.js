$(document).ready(function() {

  $(".menu-header__icon").click(function() {
    $(this).toggleClass("active");
    $(".menu-header__menu").toggleClass("active");
  })

  $(window).resize(function(evt) {
    adaptiveButtons();
  })

  $(".slider").slick({
    variableWidth: true,
    dots: true,
  });


});


function adaptiveButtons() {
  let w = $(window).outerWidth();
  let headerMenu = $('.menu-header__menu');
  let headerButton = $('.buttons');
  if (w < 768) {
    if (!headerButton.hasClass('done')) {
      headerButton.addClass('done').appendTo(headerMenu);
    }
  } else {
    if (headerButton.hasClass('done')) {
      headerButton.removeClass('done').appendTo($('.header__body'));
    }
  }
}