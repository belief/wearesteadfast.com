$(document).ready( function(){

	$('#more-about-edith').on('click',function(){
		$('.header-info').slideDown();
	});

	$('#less-about-edith').on('click', function() {
		$('.header-info').slideUp();
	});

	$('#play-btn').on('click', function() {
		$('.play-btn-wrapper').css('display','none');
		$('.video-wrapper').fadeIn();
		$('.main-content').animate({
			marginTop: 0
		}, 200)
	});

	console.log('main loaded');
});