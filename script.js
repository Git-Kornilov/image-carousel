'use strict';

const imgs = document.getElementById('imgs');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

// all images in imgs-container
const img = document.querySelectorAll('#imgs img');

let indx = 0;

const changeImage = function () {
  if (indx > img.length - 1) indx = 0;
  if (indx < 0) indx = img.length - 1;

  imgs.style.transform = `translateX(${indx * -500}px)`;
};

const run = function () {
  indx++;
  changeImage();
};

let interval = setInterval(run, 2000);

const resetInterval = () => {
  clearInterval(interval);
  interval = setInterval(run, 2000);
};

// buttons
leftBtn.addEventListener('click', () => {
  indx--;
  changeImage();
  resetInterval();
});

rightBtn.addEventListener('click', () => {
  indx++;
  changeImage();
  resetInterval();
});
