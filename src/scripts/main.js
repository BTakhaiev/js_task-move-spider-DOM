'use strict';

const wall = document.querySelector('.wall');
const spider = document.querySelector('.spider');
const wallRect = wall.getBoundingClientRect();
const initialSpiderX = spider.offsetLeft + spider.offsetWidth / 2;
const initialSpiderY = spider.offsetTop + spider.offsetHeight / 2;

wall.addEventListener('click', (e) => {
  const xInWall = e.clientX - wallRect.left;
  const yInWall = e.clientY - wallRect.top;

  const translateX = xInWall - initialSpiderX;
  const translateY = yInWall - initialSpiderY;

  spider.style.transform = `translate(${translateX}px, ${translateY}px)`;
});
