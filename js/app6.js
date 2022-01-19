'use strict';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.style.display = 'block';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// ===============

// let x = 0;
// let y = 0;

// const draw = () => {
//   y = 100 + 20 * Math.sin(x);

//   x = x + 0.3;
//   ctx.fillRect(x * 5, y, 2, 2);
//   setTimeout(draw, 50);
// };
// draw();

// ===============

ctx.beginPath();
ctx.moveTo(20, 20);
// ctx.bezierCurveTo(20, 100, 200, 100, 200, 20);
ctx.bezierCurveTo(50, 100, 100, 50, 200, 20);
ctx.stroke();

// ===============

{
  // function gradient(a, b) {
  //   return (b.y - a.y) / (b.x - a.x);
  // }
  // function bzCurve(points, f, t) {
  //   //f = 0, will be straight line
  //   //t suppose to be 1, but changing the value can control the smoothness too
  //   if (typeof f == 'undefined') f = 0.3;
  //   if (typeof t == 'undefined') t = 0.6;
  //   ctx.beginPath();
  //   ctx.moveTo(points[0].x, points[0].y);
  //   let m = 0;
  //   let dx1 = 0;
  //   let dy1 = 0;
  //   var preP = points[0];
  //   for (let i = 1; i < points.length; i++) {
  //     let curP = points[i];
  //     let dx2 = null;
  //     let dy2 = null;
  //     const nexP = points[i + 1];
  //     if (nexP) {
  //       m = gradient(preP, nexP);
  //       dx2 = (nexP.x - curP.x) * -f;
  //       dy2 = dx2 * m * t;
  //     } else {
  //       dx2 = 0;
  //       dy2 = 0;
  //     }
  //     ctx.bezierCurveTo(
  //       preP.x - dx1,
  //       preP.y - dy1,
  //       curP.x + dx2,
  //       curP.y + dy2,
  //       curP.x,
  //       curP.y,
  //     );
  //     dx1 = dx2;
  //     dy1 = dy2;
  //     preP = curP;
  //   }
  //   ctx.stroke();
  // }
  // // Generate random data
  // var lines = [];
  // var X = 10;
  // var t = 40; //to control width of X
  // for (let i = 0; i < 100; i++) {
  //   const Y = Math.floor(Math.random() * 300 + 50);
  //   const p = { x: X, y: Y };
  //   lines.push(p);
  //   X = X + t;
  // }
  // //draw straight line
  // ctx.beginPath();
  // ctx.setLineDash([5]);
  // ctx.lineWidth = 1;
  // bzCurve(lines, 0, 1);
  // //draw smooth line
  // ctx.setLineDash([0]);
  // ctx.lineWidth = 2;
  // ctx.strokeStyle = 'blue';
  // bzCurve(lines, 0.3, 1);
}
