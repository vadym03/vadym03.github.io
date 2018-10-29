var items = document.getElementsByClassName('item');

var count = items.length;
var i = 0;
var refreshIntervalId = setInterval(function(){
	items[i].style.opacity = '1';
	i++;

	if(items.length == i){
		clearInterval(refreshIntervalId);
	}
}, 1000);