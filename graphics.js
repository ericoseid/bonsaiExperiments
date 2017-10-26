function paddle(x, y, width, height) {
	this.square = new Rect(x, y, width, height).addTo(stage)
						   .attr("fillColor", "white");

	this.x = x;
	this.y = y;
	this.width = width;
	this.height = height;
}

var keyStates = {
	upKey : false,
	downKey : false,
	rightKey : false,
	leftKey : false
};

//stage.on("keydown", 
//	 function(e) {
//		switch(e.keyCode) {
//			case 87:
//				keyStates.upKey = !keyStates.upKey;
//				break;
//			case 83:
//				keyStates.downKey = !keyStates.downKey;
//				break;
//			case 68:
//				keyStates.rightKey = !keyStates.rightKey;
//				break;
//			case 65:
//				keyStates.leftKey = !keyStates.leftKey;
//				break;
//		}
//	 }
//);
while (1) {
	var player = new paddle(10, 10, 100, 100);
}
