'use strict';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.style.display = 'block';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// ===============

ctx.moveTo(100, 50);
ctx.lineTo(150, 150);
ctx.lineTo(200, 150);
ctx.strokeStyle = 'orange';
ctx.stroke();

ctx.beginPath();
ctx.moveTo(200, 100);
ctx.lineTo(300, 150);
ctx.strokeStyle = 'red';
ctx.lineWidth = 10;
ctx.lineCap = 'round';
ctx.stroke();

// ctx.fill();
