'use strict';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.style.display = 'block';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// ===============

ctx.fillRect(50, 150, 100, 50);

ctx.rect(100, 50, 150, 50);
ctx.fillStyle = 'orange';
ctx.strokeStyle = 'blue';
ctx.lineWidth = 6;
ctx.fill();
ctx.stroke();
