var items = $('.item');
var gallery = [
	{
		image: 'https://picsum.photos/400?image=1',
		title: 'Запис 1'
	},
	{
		image: 'https://picsum.photos/400?image=2',
		title: 'Запис 2'
	},
	{
		image: 'https://picsum.photos/400?image=3',
		title: 'Запис 3'
	},
	{
		image: 'https://picsum.photos/400?image=4',
		title: 'Запис 4'
	},
	{
		image: 'https://picsum.photos/400?image=5',
		title: 'Запис 5'
	},
	{
		image: 'https://picsum.photos/400?image=6',
		title: 'Запис 6'
	},
	{
		image: 'https://picsum.photos/400?image=7',
		title: 'Запис 7'
	},
	{
		image: 'https://picsum.photos/400?image=8',
		title: 'Запис 8'
	},
	{
		image: 'https://picsum.photos/400?image=9',
		title: 'Запис 9'
	}
];

$('.faq h3').on('click', function(){
	$(this).parent().siblings().find('p').slideUp();
	$(this).siblings('p').slideToggle();
});

for (var i = 0; i < 9; i++) {
	var item = document.createElement("div");
	var image = document.createElement("div");
	var title = document.createElement("h3");

	item.className = 'col-md-4 col-sm-6 item';
	image.className = 'image';
	title.className = 'title';

	title.innerHTML = '<a href="#">' + gallery[i].title + '</a>';
	image.innerHTML = '<img src="' + gallery[i].image + '" alt="' + gallery[i].title + '">';

	$(item).append(image);
	$(item).append(title);
	$('.gallery .row').append(item);
}