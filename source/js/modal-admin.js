const enrollButtons = document.querySelectorAll('[class*="__enroll-button"]');
const enrollCard = document.querySelector('.enrollment-card-container');
const enrollCardToggle = document.querySelector('.enrollment-card__toggle');

const enrollForm = document.querySelector('.enrollment-form');
const enrollName = enrollForm.querySelector('input[name="name"]');
const enrollEmail = enrollForm.querySelector('input[name="email"]');
const enrollTel = enrollForm.querySelector('input[name="tel"]');

for (let i = 0; i < enrollButtons.length; i++) {
  enrollButtons[i].addEventListener('click', function(event) {
    event.preventDefault();
    if(enrollCard.classList.contains('modal-opened')) {
      enrollCard.classList.remove('modal-opened');
    } else {
      enrollCard.classList.add('modal-opened');
      enrollName.value = '';
      enrollEmail.value = '';
      enrollTel.value = '';

      console.log(enrollTel.value);
    }
  });
}

enrollCardToggle.addEventListener('click', function() {
  enrollCard.classList.remove('modal-opened');
});
