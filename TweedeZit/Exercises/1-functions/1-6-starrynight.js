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
	context.lineTo(350, 350);
	context.moveTo(100, 50);
	context.lineTo(350, 300);
	context.moveTo(150, 50);
	context.lineTo(350, 250);
	context.moveTo(50, 100);
	context.lineTo(300, 350);
	context.moveTo(50, 150);
	context.lineTo(250, 350);

	context.moveTo(350, 50);
	context.lineTo(50, 350);
	context.moveTo(300, 50);
	context.lineTo(50, 300);
	context.moveTo(250, 50);
	context.lineTo(50, 250);
	context.moveTo(100, 350);
	context.lineTo(350, 100);
	context.moveTo(150, 350);
	context.lineTo(350, 150);
	context.stroke();

	// Center square
	context.beginPath();
	context.moveTo(200, 150);
	context.lineTo(250, 200);
	context.lineTo(200, 250);
	context.lineTo(150, 200);
	context.fill();

    // 
    context.beginPath();
    context.arc(50, 50, 160, 0, Math.PI / 2);
    context.arc(50, 50, 160, 0, Math.PI / 2);
    context.fill();

	// square
	context.strokeStyle = "orange";
	context.strokeRect(50, 50, 300, 300);

	// text
	context.textAlign = "center";
	context.font = "normal 30pt Arial";
	context.fillText(" STARRY NIGHT", 200, 400);
}
