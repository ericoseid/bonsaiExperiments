function movie() {
	new Rect(0, 0, 100, 100)
	.addTo(stage)
	.attr('fillColor', 'white')
	.animate("20s", {
		x:200,
		y:200
	});
}

movie();
