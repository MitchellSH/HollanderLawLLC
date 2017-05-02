var SCREEN_HEIGHT = window.innerHeight;

$(document).ready(initialize);

function initialize(){
  $('.button-collapse').sideNav();
  $('.parallax').parallax();
  $("#index-banner").css("min-height", SCREEN_HEIGHT);
  $('.smoothScroll').click(smoothScroll);
}

function smoothScroll(){
  if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top
      }, 2000);
      return false;
    }
  }
}
