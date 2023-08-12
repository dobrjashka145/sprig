const Slides = document.querySelectorAll('.slider__item--reviews')
const Videos = document.querySelectorAll('.slider__item--reviews video');
const playButton = document.querySelector('.slider__play-button');

const Slider = document.querySelector('.reviews__slider')
const buttonNext = Slider.querySelector('.slider-controls__button--next');
const buttonPrev = Slider.querySelector('.slider-controls__button--prev');
const paginationItems = Slider.querySelectorAll('.slider__pagination-item')

playButton.classList.remove('slider__play-button--hidden');

// убираем у видео атрибут controls
for (let video of Videos) {
  video.removeAttribute("controls");
}


// запускаем воспроизведение кликом по кнопке
playButton.addEventListener('click', function () {
  for (let i = 0; i < Slides.length; i++) {
    if (Slides[i].classList.contains('slider__item--active')) {
      Videos[i].play();
      playButton.classList.add('slider__play-button--hidden');
    }
  }
});


// останавливаем воспроизведение кликом по слайду
for (let i = 0; i < Slides.length; i++) {
  Slides[i].addEventListener('click', function () {
    if (Slides[i].classList.contains('slider__item--active')) {
      Videos[i].pause();
      playButton.classList.remove('slider__play-button--hidden');
    }
  });
}

// останавливаем воспроизведение переключение слайда
buttonNext.addEventListener('click', pauseVideoAll);
buttonPrev.addEventListener('click', pauseVideoAll);
for (let dot of paginationItems) {
  dot.addEventListener('click', pauseVideoAll);
};

// ищем окончание воспроизведения
for (let i = 0; i < Slides.length; i++) {
  Videos[i].addEventListener('ended', function () {
      Videos[i].load();
      playButton.classList.remove('slider__play-button--hidden');
    });
}

function pauseVideoAll() {
  for (let video of Videos) {
    video.pause();
    playButton.classList.remove('slider__play-button--hidden');
  }
}
