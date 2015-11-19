$(document).ready(function(){

	$('.menu').click(function(){
		$('.modal-film-hidden').addClass('modal-film');
		$('.modal-menu-hidden').addClass('modal-menu');
	});

	$('.fa-times').click(function(){
		$('.modal-film-hidden').removeClass('modal-film');
		$('.modal-menu-hidden').removeClass('modal-menu');
	});

	$(document).bind('keydown', function(e) { 
        if (e.which == 27) {
            $('.modal-film-hidden').removeClass('modal-film');
			$('.modal-menu-hidden').removeClass('modal-menu');
        }
  });

});