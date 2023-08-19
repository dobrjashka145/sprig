(function () {
const mainNavLinks = document.querySelectorAll('.main-nav__subitem');
const footerNavLinks = document.querySelectorAll('.page-footer__nav-item');
const stories = document.querySelectorAll('.customers__stories');

checkSlide(mainNavLinks, stories);
checkSlide(footerNavLinks, stories);

// Переключение слайдов по клику по текущему слайду
for (let i = 0; i < stories.length; i++) {
  stories[i].addEventListener('click', function() {
    this.classList.remove('customers__stories--active');
    i = (i + 1) % stories.length; // Обнуление i при i=stories.length, т.к. тогда остаток от деления =0
    stories[i].classList.add('customers__stories--active');
  });
}

// Функция переключения слайдов по клику на пункт меню
function checkSlide (links, slides) {
  for (let link of links) {
    link.addEventListener('click', function(evt) {
      noneActive();
      let target = evt.target;
      let dataHref = target.getAttribute("href").slice(1);
      for (let slide of slides) {
        if(slide.getAttribute("id") === dataHref) {
          slide.classList.add('customers__stories--active');
        }
      }
    });
  }
}

// Функция снятия активации слайдов
function noneActive () {
  stories.forEach(function(item) {
    if (item.classList.contains('customers__stories--active')) {
      item.classList.remove('customers__stories--active');
    };
  });
}
})();
