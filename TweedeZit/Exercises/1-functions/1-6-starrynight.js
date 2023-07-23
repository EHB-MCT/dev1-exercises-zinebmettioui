"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

drawStarryNight();

function drawStarryNight() { 

context.lineWidth = 5; 
context.strokeStyle = "orange"; 
context.strokeRect(50, 50, 300, 300); 






}
