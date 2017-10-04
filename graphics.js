function move(event, obj) {
	if(event.keyCode == 115){
		obj.animate("1s", { fillColor : "blue" });
	}
	else{
		console.log(event.keyCode);
	}
}

var square = new Rect(10, 10, 100, 100).addTo(stage)
	.attr("fillColor", "white");

stage.on("key", function(e) { 
			move(e, square);
		});
