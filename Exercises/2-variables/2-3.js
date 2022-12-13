"use strict";

    let canvas = document.querySelector("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let context = canvas.getContext("2d");

     let canvasWidth = context.canvas.width;
    let canvasHeight = context.canvas.height;

drawPattern();

function drawPattern() {
    context.fillStyle = "darkblue";
    context.fillRect(0, 0, canvasWidth, canvasHeight);
    context.fillStyle = "lightblue";
    context.fillRect(0, canvasHeight * 2 / 3, canvasWidth, canvasHeight * 1 / 3);
    context.fillStyle = "lightgray";
    context.fillRect(canvasWidth * 1 / 3, 0, canvasWidth * 1 / 3, canvasHeight);
    context.fillStyle = "red";
    context.fillRect(0, canvasHeight * 1 / 6, canvasWidth, canvasHeight * 1 / 3);
}
