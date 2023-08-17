const questionToggles = document.querySelectorAll('.questions__toggle');
const questionAnswers = document.querySelectorAll('.questions__answer');

for (let answer of questionAnswers) {
  answer.classList.remove('questions__answer--nojs');
}

for (let toggle of questionToggles) {
  toggle.classList.remove('questions__toggle--nojs');
}

for (let i = 0; i < questionToggles.length; i++) {
  toggleAnswer(questionToggles[i], questionAnswers[i]);
}

function toggleAnswer (toggleCurrent, answerCurrent) {
  toggleCurrent.addEventListener('click', function () {
    toggleCurrent.classList.contains('questions__toggle--closed') ?
      answerOpen(toggleCurrent, answerCurrent) :
      answerClose(toggleCurrent, answerCurrent);
  });
}

function answerOpen(toggle, answer) {
  toggle.classList.remove('questions__toggle--closed');
  toggle.classList.add('questions__toggle--opened');
  answer.classList.remove('questions__answer--closed');
  answer.classList.add('questions__answer--opened');
}

function answerClose(toggle, answer) {
  toggle.classList.remove('questions__toggle--opened');
  toggle.classList.add('questions__toggle--closed');
  answer.classList.remove('questions__answer--opened');
  answer.classList.add('questions__answer--closed');
}
