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
  var cF = $('#contactform');
  cF.submit(function(e) {
  	e.preventDefault();
  	$.ajax({
  		url: '//formspree.io/mitchellshollander@gmail.com',
  		method: 'POST',
  		data: $(this).serialize(),
  		dataType: 'json',
  		beforeSend: function() {
  			cF.append('<div class="alert alert--loading">Sending message…</div>');
  		},
  		success: function(data) {
  			cF.find('.alert--loading').hide();
  			cF.append('<div class="alert alert--success">Message sent!</div>');
  		},
  		error: function(err) {
  			cF.find('.alert--loading').hide();
  			cF.append('<div class="alert alert--error">Ops, there was an error.</div>');
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
