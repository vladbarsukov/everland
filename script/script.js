/*

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
*/



//Шторка меню

const header = document.querySelector('.header')
const subMenuHidden = document.querySelector('.sub-menu_hidden')
const subMenuBtn = document.querySelector('#menuBtn')
const subMenu = document.querySelector('.sub-menu')
const MenuIcon = document.querySelector('.header__menu-icon')

const toggleMenu = function () {
  subMenuHidden.classList.toggle("sub-menu_hidden");
  MenuIcon.classList.toggle("header__menu-icon_close");
}

subMenuBtn.addEventListener("click", function (e) {
  e.stopPropagation();
  toggleMenu();
});

document.addEventListener("click", function (e) {
  const target = e.target;
  const its_menu = target === subMenu || subMenu.contains(target);
  const its_btnMenu = target === header || header.contains(target);
  const menu_is_active = !subMenu.classList.contains("sub-menu_hidden");

  if (!its_menu && !its_btnMenu && menu_is_active) {
    toggleMenu();
  }
});


//Аккорденон мобилный

const column = document.querySelectorAll('.sub-menu__column-links')
const titleBtn = document.querySelectorAll('.sub-menu__title')




function click () {
  titleBtn.forEach(() => this.nextElementSibling.classList.toggle("sub-menu__column-links_hide"));
}

titleBtn.forEach(e => {
  e.addEventListener('click', click)
})




// Слайдер с анимациями
const items = document.querySelectorAll('.about__slider-item');
const btnPrev = document.querySelector('#btnPrev');
const btnNext = document.querySelector('#btnNext');
// счетчик
let btnPagination =  document.querySelector('#pagination');

let savedIndex = 0;

function printPagination() {
  btnPagination.textContent = `${savedIndex + 1}/${items.length}`;
}

function calcSlideNext() {
  savedIndex = savedIndex += 1
  savedIndex = items.length === savedIndex ? 0 : savedIndex;
  items.forEach(el => el.classList.remove('block'));
  items.forEach(el => el.classList.remove('block_prev'));
  items[savedIndex].classList.add('block');
}

function calcSlidePrev() {
  savedIndex = savedIndex -= 1
  savedIndex = savedIndex < 0 ? items.length - 1 : savedIndex;
  items.forEach(el => el.classList.remove('block_prev'));
  items.forEach(el => el.classList.remove('block'));
  items[savedIndex].classList.add('block_prev');
}

const clickSliderHandlerNext = () => {
  calcSlideNext();
  printPagination();
};


const clickSliderHandlerPrev = () => {
  calcSlidePrev();
  printPagination();
};

btnPrev.addEventListener('click', clickSliderHandlerPrev);
btnNext.addEventListener('click', clickSliderHandlerNext);



//СЛАЙДЕР БЕЗ АНИМАЦИИ


/*

const items = document.querySelectorAll('.about__slider-item');
const btnPrev = document.querySelector('#btnPrev');
const btnNext = document.querySelector('#btnNext');
let btnPagination =  document.querySelector('#pagination');
let savedIndex = 0;

const clickSliderHandler = (operation) => {

  !function calcSlide() {

    savedIndex = operation === 'plus' ? savedIndex += 1 : savedIndex -= 1;

    savedIndex = items.length === savedIndex ? 0 : savedIndex;

    savedIndex = savedIndex < 0 ? items.length - 1 : savedIndex;

    items.forEach(el => el.classList.remove('block'));

    items[savedIndex].classList.add('block');

  }();

  !function printPagination() {
    btnPagination.textContent = `${savedIndex + 1}/${items.length}`;
  }();

};



btnNext.addEventListener('click', () => {clickSliderHandler('plus')});
btnPrev.addEventListener('click', clickSliderHandler);

*/

