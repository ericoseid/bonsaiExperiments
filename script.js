var canvas = document.createElement("canvas");
canvas.width = 500;
canvas.height = 500;
canvas.style.border = "1px solid #000000";

var context = canvas.getContext("2d");

document.body.insertBefore(canvas, document.body.childNodes[0]);
