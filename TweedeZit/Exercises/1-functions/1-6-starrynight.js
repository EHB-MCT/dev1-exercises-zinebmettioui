"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

drawStarryNight();

function drawStarryNight() {
	context.lineWidth = 10;
	context.fillStyle = "orange";

	// guides lines
	context.strokeStyle = "blue";
	context.beginPath();
	context.moveTo(50, 50);
	context.lineTo(450, 450);
	context.moveTo(100, 50);
	context.lineTo(450, 400);
	context.moveTo(150, 50);
	context.lineTo(450, 350);
	context.moveTo(50, 100);
	context.lineTo(400, 450);
	context.moveTo(50, 150);
	context.lineTo(350, 450);

	context.moveTo(450, 50);
	context.lineTo(50, 450);
	context.moveTo(400, 50);
	context.lineTo(50, 400);
	context.moveTo(350, 50);
	context.lineTo(50, 350);
	context.moveTo(100, 450);
	context.lineTo(450, 100);
	context.moveTo(150, 450);
	context.lineTo(450, 150);
	context.stroke();

	// Center square
	context.beginPath();
	context.moveTo(225, 175);
	context.lineTo(275, 225);
	context.lineTo(225, 275);
	context.lineTo(175, 225);
	context.fill();

	//
	context.beginPath();
	context.arc(50, 50, 170, 0, Math.PI / 2);


	context.fill();

	// square
	context.strokeStyle = "orange";
	context.strokeRect(50, 50, 400, 400);

	// text
	context.textAlign = "center";
	context.font = "normal 40pt Arial";
	context.fillText(" STARRY NIGHT", 250, 500);
}
