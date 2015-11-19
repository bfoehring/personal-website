$(document).ready(function(){

	$('.menu').click(function(){
		$('.modal-film-hidden').addClass('modal-film');
		$('.modal-pass-hidden').addClass('modal-pass');
	});

	$('.submit-button').click(function(){
		
		var password = $('.pass').text(); 

		if( password == 'Yooooooooo' ){
			$('.modal-pass-hidden').removeClass('modal-pass');
			$('.modal-menu-hidden').addClass('modal-menu');
		} else {
			$('.pass').addClass('pass-error');
			$('.pass').text('Sorry, try again!');
		}
	});

	$('.fa-times').click(function(){

		if ( $('.modal-pass-hidden').hasClass('modal-pass') ) {
				$('.modal-pass-hidden').removeClass('modal-pass');
				$('.modal-film-hidden').removeClass('modal-film');
		} else {
				$('.modal-menu-hidden').removeClass('modal-menu');
				$('.modal-film-hidden').removeClass('modal-film');
		}

	});

	$('.pass').focus(function(){
		$('.pass').removeClass('pass-error');
	});

	$(document).bind('keydown', function(e) { 
        if (e.which == 27) {
            $('.modal-film-hidden').removeClass('modal-film');
			$('.modal-menu-hidden').removeClass('modal-menu');
			$('.modal-pass-hidden').removeClass('modal-pass');
        }
  	});

  	$(document).ready(function(e){
		$(".pass").keydown(function(e) {
		 if (e.keyCode == 13 && e.shiftKey){
		 	  e.preventDefault();
		 } else if(e.keyCode == 13){
		      e.preventDefault();
		 }
		});
	});	

});