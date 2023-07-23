"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

drawEllips();

function drawEllips() {
	context.beginPath();
	context.fillStyle = "orange";
	context.fillRect(50, 50, 300, 300);

	context.beginPath();
	context.fillStyle = "blue";
	context.fillRect(50, 250, 300, 100);

	context.beginPath();
	context.fillStyle = "yellow";
	context.arc(200, 2
	context.fill();
}
