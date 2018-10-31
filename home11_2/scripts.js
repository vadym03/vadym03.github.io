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

for (var i = 1; i <= 100; i++) {
	var item = document.createElement("div");
	var image = document.createElement("div");
	var title = document.createElement("h3");

	item.className = 'col-md-4 col-sm-6 item';
	image.className = 'image';
	title.className = 'title';

	title.innerHTML = '<a href="#">Запис '+i+'</a>';
	image.innerHTML = '<img src="https://picsum.photos/400?image='+i+'" alt="Запис '+i+'">';

	$(item).append(image);
	$(item).append(title);
	$('.gallery .row').append(item);
}