'use strict';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.style.display = 'block';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// ===============

ctx.moveTo(50, 50);
ctx.quadraticCurveTo(100, 150, 300, 50);
ctx.stroke();
