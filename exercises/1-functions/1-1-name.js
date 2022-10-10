"use strict";

drawLine();

function drawLine() {

   let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let context = canvas.getContext("2d");

   context.lineWidth = 6;
   context.strokeStyle = 'red';
   context.beginPath();
   context.moveTo(100, 100);
   context.lineTo(250,100);
   context.lineTo(100,300);
   context.lineTo(250,300)
   context.stroke();

   context.lineWidth = 6;
   context.strokeStyle = 'yellow';
   context.beginPath();
   context.moveTo(300, 300);
   context.lineTo(300,100);
   context.stroke();


   context.lineWidth = 6;
   context.strokeStyle = 'green';
   context.beginPath();
   context.moveTo(400, 300);
   context.lineTo(400,100);
   context.lineTo(500,300)
   context.lineTo(500,100)
   context.stroke();

   context.lineWidth = 6;
   context.strokeStyle = 'blue';
   context.beginPath();
   context.moveTo(600,300)
   context.lineTo(600,100)
   context.stroke();

}
 

   
   