const Sliders = document.querySelectorAll('.slider');

for (let slider of Sliders) {
  slider.classList.remove('slider--nojs');
}

for (let i = 0; i < Sliders.length; i++) {
  moveSlide (Sliders[i]);
}

function moveSlide (slider) {
  // let offset = 0;
  const slides = slider.querySelectorAll('.slider__item');
  // const sliderLine = slider.querySelector('.slider__item-wrapper')
  // const viewBox = slider.querySelector('.slider__item-viewbox')
  const buttonNext = slider.querySelector('.slider-controls__button--next');
  const buttonPrev = slider.querySelector('.slider-controls__button--prev');
  const paginationItems = slider.querySelectorAll('.slider__pagination-item')

  let i = 0;
  buttonNext.addEventListener('click', function() {
    // offset = offset + viewBox.offsetWidth;
    //   if (offset > viewBox.offsetWidth * (slides.length - 1)) {
    //   offset = 0;
    //   sliderLine.style.transition = "none";
    // }
    // sliderLine.style.left = -offset + 'px';

    slides[i].classList.remove('slider__item--active');
    paginationItems[i].classList.remove('slider__pagination-item--active');
    i = (i + 1) % slides.length; // Обнуление i при i=slides.length, т.к. тогда остаток от деления =0
    slides[i].classList.add('slider__item--active');
    paginationItems[i].classList.add('slider__pagination-item--active');
  });

  buttonPrev.addEventListener('click', function() {
    // offset = offset - viewBox.offsetWidth;
    // if (offset < 0) {
    //   offset = viewBox.offsetWidth * (slides.length - 1);
    // }
    // sliderLine.style.left = -offset + 'px';

    slides[i].classList.remove('slider__item--active');
    paginationItems[i].classList.remove('slider__pagination-item--active');
    if (i <= 0) {
      i = slides.length - 1;
    } else {
      i = (i - 1);
    }
    slides[i].classList.add('slider__item--active');
    paginationItems[i].classList.add('slider__pagination-item--active');
  });

  for (let j = 0; j < paginationItems.length; j++) {
    paginationItems[j].addEventListener('click', function() {
      activeNone(slides, 'slider__item--active');
      activeNone(paginationItems, 'slider__pagination-item--active');
      this.classList.add('slider__pagination-item--active');
      slides[j].classList.add('slider__item--active');
      return i = j;
    });
  }
}

function activeNone (itemsArray, classNone) {
  itemsArray.forEach(function(item) {
    if (item.classList.contains(classNone)) {
      item.classList.remove(classNone);
    };
  });
};
