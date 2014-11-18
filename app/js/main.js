$(document).ready( function(){

	$('#more-about-edith').on('click',function(){
		$('.header-info').slideDown();
	});

	$('#less-about-edith').on('click', function() {
		$('.header-info').slideUp();
	});

	console.log('main loaded');
});