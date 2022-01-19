'use strict';

const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.style.display = 'block';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// ===============

let x = window.innerWidth / 2;
let y = window.innerHeight / 2;

let stepCount = 0; // количество шагов в одном направлении
let direction = null; // направление движения

let myX = null;
let myY = null;

const dotMove = () => {
  switch (direction) {
    case 0:
      // вверх
      y = y - 1;
      break;

    case 1:
      // вправо
      x = x + 1;
      break;

    case 2:
      // вниз
      y = y + 1;
      break;

    case 3:
      // влево
      x = x - 1;
      break;

    case 4:
      // вправо вверх
      x = x + 1;
      y = y - 1;
      break;

    case 5:
      // вправо вниз
      x = x + 1;
      y = y + 1;
      break;

    case 6:
      // влево вниз
      x = x - 1;
      y = y + 1;
      break;

    case 7:
      // влево вверх
      x = x - 1;
      y = y - 1;
      break;
  }
};

const lineMove = () => {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(myX, myY);
  ctx.stroke();
};

const drawDot = () => {
  const { innerWidth, innerHeight } = window;

  ctx.clearRect(0, 0, innerWidth, innerHeight);

  if (stepCount === 0) {
    stepCount = Math.floor(15 * Math.random());
    direction = Math.floor(8 * Math.random());
  } else {
    stepCount -= 1;
  }

  dotMove();

  if (x < 0 || x > innerWidth || y < 0 || y > innerHeight) stepCount = 0;

  ctx.fillRect(x - 3, y - 3, 6, 6);

  lineMove();

  // setTimeout(drawDot, 100);
  window.requestAnimationFrame(drawDot);
};
drawDot();

canvas.onmousemove = ({ offsetX, offsetY }) => {
  myX = offsetX;
  myY = offsetY;
};
