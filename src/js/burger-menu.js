const btnBurger = document.querySelector('[data-menu-button]');
const modal = document.querySelector('[data-menu]');

btnBurger.addEventListener('click', () => {
  modal.classList.toggle('is-open');

});
