(function () {
const cardsContainer = document.querySelector('.solutions__content-container')

const solutionCards = document.querySelectorAll('.solutions__item');
const solutionLinks = document.querySelectorAll('.solutions__link');

const subNavLinks = document.querySelectorAll('.main-nav__subitem');
const footerNavLinks = document.querySelectorAll('.page-footer__nav-item');

// Убираем классы '--nojs'
cardsContainer.classList.remove('solutions__content-container--nojs');

// Переключение слайдов по клику на контролы
for (let buttonLink of solutionLinks) {
  cardsContainer.classList.remove('solutions__content-container--nojs');
    buttonLink.addEventListener('click', function() {
      noneActive();
      let dataItem = buttonLink.dataset.item;
      for (let card of solutionCards) {
        if(card.getAttribute("id") === dataItem) {
          card.classList.add('solutions__item--active');
          buttonLink.classList.add('solutions__link--active');
        }
      }
    });
  }

// Переключение слайдов по клику на пункты меню/подменю и контролы
checkSlide(subNavLinks, solutionCards, solutionLinks);
checkSlide(footerNavLinks, solutionCards, solutionLinks);

// Функция переключения слайдов по клику на пункты меню и контролы
function checkSlide (links, slides, controls) {
  for (let link of links) {
    link.addEventListener('click', function(evt) {
      noneActive();
      let target = evt.target;
      let dataHref = target.getAttribute("href").slice(1);
      for (let slide of slides) {
        if(slide.getAttribute("id") === dataHref) {
          slide.classList.add('solutions__item--active');
          for (let control of controls) {
            if(control.dataset.item === dataHref) {
              control.classList.add('solutions__link--active');
            }
          }
        }
      }
    });
  }
}

// Функция снятия активации слайдов и контролов
function noneActive () {
  solutionCards.forEach(function(item) {
    if (item.classList.contains('solutions__item--active')) {
      item.classList.remove('solutions__item--active');
    };
  });
  solutionLinks.forEach(function(link) {
    if (link.classList.contains('solutions__link--active')) {
      link.classList.remove('solutions__link--active');
    };
  });
};
})();
