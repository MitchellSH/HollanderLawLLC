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
  $('#submitbtn').click(validateForm);
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
        $('.form-container').hide();
  			cF.append('<div class="chip animated fadeIn sending blue darken-4">Sending Message <i class="white-text material-icons notice">send</i></div>');
  		},
  		success: function(data) {
  			cF.find('.sending').removeClass("animated fadeIn").addClass('animated fadeOut').hide();
  			cF.append('<div class="chip animated fadeIn success green darken-1">Message Sent <i class="white-text material-icons notice">done</i></div>');

  		},
  		error: function(err) {
  			cF.find('.sending').removeClass("animated fadeIn").addClass('animated fadeOut').hide();
        $('.form-container').hide();
  			cF.append('<div class="chip animated fadeIn error red darken-1">Ops, there was an error. <i class="white-text material-icons notice">report_problem</i></div>');
  		}
  	});
  });
}

function validateForm(){
  var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
  if($('.valid').length < 3){
    $('.validate').each(function(){
      if($(this).val() == null || $(this).val() == ""){
        $('#fillAllChip').removeClass('hide');
        $(this).removeClass('valid').addClass('invalid');
      } else {
        $(this).removeClass('invalid').addClass('valid');
      }
    });
    if($('.validateEmail').val() == null || $('.validateEmail').val() == "" || !testEmail.test($('.validateEmail').val())){
      $('#fillAllChip').removeClass('hide');
      $('.validateEmail').removeClass('valid').addClass('invalid');
    } else {
      $('.validateEmail').removeClass('invalid').addClass('valid');
    }
    return false;
  } else {
    $('#fillAllChip').addClass('hide');
    sendEmail();
  }
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
