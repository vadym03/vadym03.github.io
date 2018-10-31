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










for (var i = 1; i <= 10; i++) {
	var newDiv = document.createElement('div');
	var title = document.createElement('h3');
	var image = document.createElement('div');

	newDiv.className = 'item item2 item3';
	image.className = 'image';
	title.innerText = 'Запис';
	image.innerHTML = '<img src="https://picsum.photos/400?image='+i+'" alt="Запис '+i+'">';

	$(newDiv).append(image);
	$(newDiv).append(title);
	
	$('.others').append(newDiv);
}