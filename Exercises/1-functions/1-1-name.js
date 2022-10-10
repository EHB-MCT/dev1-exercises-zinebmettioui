"use strict";

drawLine();

function drawLine() {

   let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let context = canvas.getContext("2d");


   context.lineWidth = 8;
   context.strokeStyle = 'pink';
   context.beginPath();
   context.moveTo(50,50)
   context.lineTo(200,50)
   context.lineTo(50,200)
   context.lineTo(200,200)
   context.stroke();

   context.beginPath();
   context.lineWidth = 10;
   context.strokeStyle = 'lightblue';
   context.moveTo(250,50);
   context.lineTo(250,200);
   context.stroke();

   context.beginPath();
   context.lineWidth = 8;
   context.strokeStyle = 'purple';
   context.moveTo(300,200);
   context.lineTo(300,50);
   context.lineTo(400,200);
   context.lineTo(400,50);
   context.stroke();

   context.beginPath();
   context.lineWidth = 8;
   context.strokeStyle = 'grey';
   context.moveTo(550,200);
   context.lineTo(500,200);
   context.lineTo(450,150);
   context.lineTo(500,100);
   context.lineTo(550,150);
   context.lineTo(450,150);
   context.stroke();

   context.beginPath();
   context.lineWidth = 8;
   context.strokeStyle = 'black';
   context.moveTo(600,50);
   context.lineTo(600,200);
   context.lineTo(700,200);
   context.lineTo(700,150);
   context.lineTo(600,150);
   context.stroke();
   
}