var popupwindow = function(url,name,height,width) {
	newwindow=window.open(url,name,'height='+height+',width='+width);
	if (window.focus) {newwindow.focus()}
	return false;
}

$(document).ready( function(){
	var teaserOpened = false;


	$('#more-about-edith').on('click',function(){
		if (teaserOpened) {
			$('.header-info').slideUp();
			teaserOpened = false;
		} else {
			$('.header-info').slideDown();
			teaserOpened = true;
		}
	});

	$('#less-about-edith').on('click', function() {
		$('.header-info').slideUp();
			teaserOpened = false;
	});

	$('#play-btn').on('click', function() {
		var vimeoiFrame = $('#video')[0],
			player = Froogaloop(vimeoiFrame);
		player.api('play');

		$('.play-btn-wrapper').css('display','none');
		$('.video-wrapper').fadeIn();
		$('.main-content').animate({
			marginTop: 0
		}, 200)
	});

	$(window).resize( function() {
		if (teaserOpened) {
			teaserOpened = false;
			$('.header-info').slideUp();
		}
	});

	console.log('main loaded');
});