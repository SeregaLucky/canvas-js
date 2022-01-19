'use strict';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.style.display = 'block';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// ===============

ctx.moveTo(50, 50);
ctx.quadraticCurveTo(175, 250, 300, 50);
ctx.stroke();
// ctx.closePath();

// ctx.beginPath();
ctx.moveTo(50, 400);
ctx.quadraticCurveTo(175, 250, 300, 400);
ctx.stroke();

// ctx.moveTo(190, 280);
// ctx.quadraticCurveTo(200, 300, 210, 280);
// ctx.stroke();

ctx.moveTo(290, 600);
ctx.quadraticCurveTo(200, 300, 210, 280);
ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(190, 280);
// ctx.bezierCurveTo(190, 280, 200, 300, 210, 320);
// ctx.stroke();
