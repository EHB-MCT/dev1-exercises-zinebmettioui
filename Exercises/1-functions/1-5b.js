"use strict";

drawLine();

function drawLine() {

   let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let context = canvas.getContext("2d");

   

   context.beginPath();
   context.fillStyle = 'orange';
   context.beginPath();
   context.rect(50,50,330,300);
   context.fill();

   context.beginPath();
   context.fillStyle = 'blue';
   context.beginPath();
   context.rect(50,250,330,100);
   context.fill();

   context.beginPath();
   context.fillStyle = 'yellow';
   context.ellipse(220,250,100,50, Math.PI / 1, 0, Math.PI);
   context.fill();


}