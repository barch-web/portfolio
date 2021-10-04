$(document).ready(function(){

  $('#menu').click(function(){
    $(this).toggleClass("fa-times");
    $('header').toggleClass('toggle');
  });

  $(window).on('scroll load', function(){

    $('#menu').removeClass("fa-times");
    $('header').removeClass('toggle');

    if($(window).scrollTop() > 0){
      $('.top').show();
    }else{
      $('.top').hide();
    }

  });

  var typed = new Typed('.typing', {
    strings: ["Web Developer", "WordPress Designer", "Graphic Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    showCursor: true,
    cursorChar: '|',
    loop: true,
  });

  var typed = new Typed('.typing-1', {
    strings: ["Web Developer", "WordPress Designer", "Graphic Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    showCursor: true,
    cursorChar: '|',
    loop: true,
  });

  var typed = new Typed('.typing-2', {
    strings: ["Web Developer", "WordPress Designer", "Graphic Designer"],
    typeSpeed: 100,
    backSpeed: 60,
    showCursor: true,
    cursorChar: '|',
    loop: true,
  });

  //smooth scroller

  $('a[href*="#"]').on('click',function(e){

    e.preventDefault();

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500,
      'linear'
    );

  });

});