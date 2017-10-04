function keyAlert(event) {
	if(event.keyCode == 67){
		window.alert("c was pressed.");
	}
}

document.addEventListener('keydown', function() { keyAlert(event) });
