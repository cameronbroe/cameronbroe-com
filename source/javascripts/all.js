// This is where it all goes :)
var elements = $(".cr-section");
if(elements.length == 0) {
	elements = $(".cr-blog-article-container");
}
var pos = 1;
console.log(elements);
$(elements[0]).toggleClass("fade-in");
$(document).ready(function() {
	var fadeInQueue = setInterval(function() {
		var ele = elements[pos];
		$(ele).toggleClass("fade-in");
		pos++;
		if(pos > elements.length) {
			clearInterval(fadeInQueue);
		}
	}, 50);
});

// Disable clicking of disabled a tags
var pagination = $(".disabled a");
pagination.click(function(event) {
	event.preventDefault();
	event.stopPropagation();
	return false;
});