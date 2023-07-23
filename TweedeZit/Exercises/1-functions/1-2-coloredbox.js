"use strict";

   let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let context = canvas.getContext("2d");

drawcoloredbox();

function drawcoloredbox() {

   context.beginPath();
   context.lineWidth = 2; 
   context.strokeStyle = 'red'; 
   context.moveTo(50,50);
   context.lineTo(150, 150);
   context.stroke(); 

   context.beginPath();
   context.lineWidth = 2; 
   context.strokeStyle = 'red'; 
   context.moveTo(50,150);
   context.lineTo(150, 50);
   context.stroke(); 

   context.beginPath();
   context.lineWidth = 2; 
   context.strokeStyle = 'black'; 
   context.moveTo(50, 50);
   context.lineTo(150, 50);
   context.lineTo(150, 150);
   context.lineTo(50, 150); 
   context.lineTo(50, 50); 
   context.stroke(); 


}

