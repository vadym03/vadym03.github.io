// var items = document.getElementsByClassName('item');

// var count = items.length;
// var i = 0;
// var refreshIntervalId = setInterval(function(){
// 	items[i].style.opacity = '1';
// 	i++;

// 	if(items.length == i){
// 		clearInterval(refreshIntervalId);
// 	}
// }, 1000);

var items = $('.item');

// $('.item').on('click', function(){
// 	$(this).css('opacity', '1');
// });

$('.faq h3').on('click', function(){
	// $(this).siblings('p').show();
	// $(this).siblings('p').hide();
	// $(this).siblings('p').fadeIn();
	// $(this).siblings('p').fadeOut();
	// $(this).siblings('p').slideUp();
	// $(this).siblings('p').slideDown();

	// $(this).siblings('p').toggle();
	// $(this).siblings('p').fadeToggle();
	$(this).parent().siblings().find('p').slideUp();
	$(this).siblings('p').slideToggle();

	// $(this).parents('.faq');
	// $('.faq').find('.item');d
});


