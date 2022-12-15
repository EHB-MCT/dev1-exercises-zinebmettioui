"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

drawBrick();

function drawBrick() {
    let rows = 6; 
    let colums = 6; 
    let w = 100;
    let h = 50; 
    let margin = 50; 
    context.fillStyle = "darkred"; 
    for (let i = 0; i < colums; i++) {
        for (let j = 0; j < rows; j++) {
            let x = margin + i * (w + 5) + j % 2 * 50;
            let y = margin + j * (h + 5);
            context.fillRect(x, y, w, h);
        }
    }

}