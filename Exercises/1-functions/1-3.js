"use strict";

drawLine();

function drawLine() {

   let canvas = document.querySelector("canvas");
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   let context = canvas.getContext("2d");

   context.beginPath();
   context.lineWidth = 3;
   context.strokeStyle = 'red';
   context.beginPath();
   context.rect(50,50,350,350);
   context.stroke();

   context.beginPath();
   context.lineWidth = 3;
   context.strokeStyle = 'red';
   context.beginPath();
   context.rect(350,350,350,350);
   context.stroke();

   context.beginPath();
   context.lineWidth = 3;
   context.strokeStyle = 'red';
   context.beginPath();
   context.rect(200,200,350,350);
   context.fill();
   context.stroke();

   context.beginPath();
   context.lineWidth = 3;
   context.strokeStyle = 'red';
   context.beginPath();
   context.rect(550,100,100,100);
   context.stroke();

   context.beginPath();
   context.lineWidth = 3;
   context.strokeStyle = "black";
   context.beginPath();
   context.rect(650,50,50,50);
   context.fill();
   context.stroke();

   context.beginPath();
   context.lineWidth = 3;
   context.strokeStyle = 'red';
   context.beginPath();
   context.rect(100,550,100,100);
   context.stroke();

   context.beginPath();
   context.lineWidth = 3;
   context.strokeStyle = "black";
   context.beginPath();
   context.rect(50,650,50,50);
   context.fill();
   context.stroke();



}
