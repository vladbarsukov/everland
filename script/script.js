/*

let offset = 0;
const track = document.querySelector('.about__slider-track');
const btnPrev = document.querySelector('#btnPrev');
const btnNext = document.querySelector('#btnNext');

btnNext.addEventListener('click', () => {
  offset += 1440;
  if (offset > 7200) {
    offset = 0
  }
  track.style.left = -offset + "px";
});

btnPrev.addEventListener('click', () => {
  offset -= 1440;
  if (offset < 0) {
    offset = 7200
  }
  track.style.left = offset + "px";
});

*/

const items = document.querySelectorAll('.about__slider-item');
const btnPrev = document.querySelector('#btnPrev');
const btnNext = document.querySelector('#btnNext');
const switcher = document.querySelectorAll('.about__switcher-text');
let i = 0;


btnNext.addEventListener('click', () => {
  ++i;
  if (i >= items.length) {
    items[i-1].classList.remove("block");
    i = 0;
    items[i].classList.add("block");
  } else {
    items[i-1].classList.remove("block");
    items[i].classList.add("block");
  }
});

btnPrev.addEventListener('click', () => {
  --i;
  if (i >= items.length) {
    items[i+1].classList.remove("block");
    i = 0;
    items[i].classList.add("block");
  } else {
    items[i+1].classList.remove("block");
    items[i].classList.add("block");
  }

});



/*
btnNext.addEventListener('click', () => {
  items.forEach(function (item) {
    ++i
    items[i+1].classList.remove("block");
    i = 0;
    items[i].classList.add("block");
  });
});
*/



const subMenu = document.querySelector('.sub-menu_hidden')
const subMenuBtn = document.querySelector('#menuBtn')
function openMenu(subMenu) {
  subMenu.classList.remove("sub-menu_hidden");
}
subMenuBtn.addEventListener('click', () => {
  subMenu.classList.toggle("sub-menu_hidden");

});
