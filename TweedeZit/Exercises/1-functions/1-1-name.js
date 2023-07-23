"use strict";

   let canvas = document.querySelector("canvas");
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	let context = canvas.getContext("2d");

drawLine();

function drawLine() {
	

   context.beginPath();
	context.lineWidth = 5;
	context.strokeStyle = "Blue";
	context.beginPath();
	context.moveTo(50, 50);
	context.lineTo(200, 50);
	context.lineTo(50, 200);
	context.lineTo(200, 200);
	context.stroke();

   context.beginPath();
   context.lineWidth = 5;
	context.strokeStyle = "grey";
	context.beginPath();
	context.moveTo(250, 50);
	context.lineTo(250, 200);
	context.stroke();

   context.beginPath();
   context.lineWidth = 5;
	context.strokeStyle = "lightblue";
	context.beginPath();
	context.moveTo(300, 200);
	context.lineTo(300, 50);
	context.lineTo(400, 200);
	context.lineTo(400, 50);
	context.stroke();

   context.beginPath();
   context.lineWidth = 5;
	context.strokeStyle = "lightgrey";
	context.beginPath();
	context.moveTo(550, 200);
	context.lineTo(500, 200);
	context.lineTo(450, 100);
	context.lineTo(500, 50);
   context.lineTo(550, 100);
   context.lineTo(450, 100);
	context.stroke();
   
   context.beginPath();
   context.lineWidth = 5;
	context.strokeStyle = "red";
	context.beginPath();
	context.moveTo(600, 50);
   context.lineTo(600, 200);
   context.lineTo(700, 200); 
   context.lineTo(700, 150);
   context.lineTo(600, 150);
	context.stroke();

}
