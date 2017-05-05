var SCREEN_HEIGHT = window.innerHeight;

$(document).ready(initialize);

function initialize(){
  $('.button-collapse').sideNav();
  $('.parallax').parallax();
  $("#index-banner").css("min-height", SCREEN_HEIGHT);
  $('.smoothScroll').click(smoothScroll);
  initWaypoints();
  $('.intro').addClass('animated fadeInDown');
  $('.intro-des').addClass('animated fadeInUp');
  sendEmail();
}

function sendEmail(){
  // still need to validate form
  // https://gist.github.com/edmundojr/975b08c39ab0a7a1b514
  var cF = $('#contactform');
  cF.submit(function(e) {
  	e.preventDefault();
  	$.ajax({
  		url: '//formspree.io/mitchellshollander@gmail.com',
  		method: 'POST',
  		data: $(this).serialize(),
  		dataType: 'json',
  		beforeSend: function() {
        $('.form-container').addClass('hide');
  			cF.append('<div class="sending notice">Sending message…</div>');
  		},
  		success: function(data) {
  			cF.find('.sending').hide();
  			cF.append('<div class="success notice">Message sent!</div>');
  		},
  		error: function(err) {
  			cF.find('.sending').hide();
        $('.form-container').addClass('hide');
  			cF.append('<div class="error notice">Ops, there was an error.</div>');
  		}
  	});
  });
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

function initWaypoints(){

  $('.wp1').waypoint(function() {
        $('.wp1').addClass('animated fadeInLeft');
    }, {
        offset: '70%'
    });
    $('.wp2').waypoint(function() {
        $('.wp2').addClass('animated fadeIn');
    }, {
        offset: '65%'
    });
    $('.wp3').waypoint(function() {
        $('.wp3').addClass('animated fadeInRight');
    }, {
        offset: '60%'
    });
    $('.wp4').waypoint(function() {
        $('.wp4').addClass('animated fadeIn');
    }, {
        offset: '75%'
    });
    $('.wp5').waypoint(function() {
        $('.wp5').addClass('animated fadeIn');
    }, {
        offset: '75%'
    });
    $('.wp6').waypoint(function() {
        $('.wp6').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });
    $('.wp7').waypoint(function() {
        $('.wp7').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });
    $('.wp8').waypoint(function() {
        $('.wp8').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });
    $('.wp9').waypoint(function() {
        $('.wp9').addClass('animated fadeInUp');
    }, {
        offset: '75%'
    });
    $('.wp10').waypoint(function() {
        $('.wp10').addClass('animated fadeIn');
    }, {
        offset: '75%'
    });
    $('.wp11').waypoint(function() {
        $('.wp11').addClass('animated fadeIn');
    }, {
        offset: '75%'
    });

}
