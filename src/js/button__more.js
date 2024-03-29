(() => {
  const container = document.querySelector('.whats__item__img--leptop');
  const textSpan = document.querySelector('#span-more');

  container.addEventListener('click', e => {
    const targetValue = textSpan.classList.toggle('display-nan');
    if (e.currentTarget.nodeName === 'BUTTON') {
      console.log(e.currentTarget.nodeName);
      return targetValue;
    }
    return;
  });
})();
