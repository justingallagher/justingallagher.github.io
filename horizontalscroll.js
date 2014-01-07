var scrollHorizontal = function (e) {
	var event = e || window.event;
	if (document.body.doScroll){
		// Internet Explorer
		document.body.doScroll(event.wheelDelta > 0 ? "left":"right");
	} else if ((event.wheelDelta || event.detail) > 0){
		document.body.scrollLeft -= 40;
	} else {
		document.body.scrollLeft += 40;
	}

	return false;
}

if ("onmousewheel" in document.body){
	// Most browsers
	document.body.onmousewheel = scrollHorizontal;
} else {
	// Firefox
	document.body.addEventListener("DOMMouseScroll", scrollHorizontal);
}