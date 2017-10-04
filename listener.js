function keyAlert(event) {
	if(event.keyCode == 67){
		window.alert("key pressed");
	}
}

document.addEventListener("keydown", function() { keyAlert(event); });
