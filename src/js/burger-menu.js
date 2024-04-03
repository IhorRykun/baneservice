const btnBurger = document.querySelector('.nav__span-button');
const modal = document.querySelector('.nav');
const btnClose = document.querySelector('.svg--close');
const body = document.querySelector('body');

btnBurger.addEventListener('click', () => {
  modal.classList.toggle('display-nan');
  btnClose.classList.toggle('display-nan');
  btnBurger.classList.toggle('display-nan');
  body.classList.add('scroll');
});

btnClose.addEventListener('click', () => {
  modal.classList.toggle('display-nan');
  btnClose.classList.toggle('display-nan');
  btnBurger.classList.toggle('display-nan');
  body.classList.remove('scroll');
});
