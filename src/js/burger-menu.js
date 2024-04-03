const btnBurger = document.querySelector('.nav__span-button');
const modal = document.querySelector('.nav');

btnBurger.addEventListener('click', () => {
  modal.classList.toggle('display-nan');
});
