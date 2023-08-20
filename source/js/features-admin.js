(function () {
const descriptions = document.querySelectorAll('.feature-card__description-container');

const toggleContainers = document.querySelectorAll('.feature-card__toggle');
const toggles = document.querySelectorAll('.feature-card__toggle .button-toggle__icon');
const cards = document.querySelectorAll('.feature-card__description-container');


for (spec of descriptions) {
  spec.classList.remove('feature-card__description-container--nojs');
}

for (let toggle of toggleContainers) {
  toggle.classList.remove('feature-card__toggle--js');
}

for (let i = 0; i < toggles.length; i++) {
  toggleCard(toggles[i], cards[i]);
}

// Функция открытия/закрытия карточки по клику на переключатель
function toggleCard (toggleCurrent, cardCurrent) {
  toggleCurrent.addEventListener('click', function () {
    toggleCurrent.classList.contains('button-toggle__icon--opened') ?
      cardClose(toggleCurrent, cardCurrent) :
      cardOpen(toggleCurrent, cardCurrent);
  });
}

function cardOpen(toggle, card) {
  toggle.classList.add('button-toggle__icon--opened');
  card.classList.add('feature-card__description-container--opened');
}

function cardClose(toggle, card) {
  toggle.classList.remove('button-toggle__icon--opened');
  card.classList.remove('feature-card__description-container--opened');
}
})();
