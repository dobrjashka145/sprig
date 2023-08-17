const navSite = document.querySelector('.main-nav');
const contactsHeader = document.querySelector('.page-header__contacts');
const navToggle = document.querySelector('.page-header__nav-toggle');
const navbar = document.querySelector('.page-header');
const navLinks = document.querySelectorAll('.main-nav__item');
const navLogo = document.querySelector('.page-header__logo');

// Убираем классы '--nojs'
navSite.classList.remove('main-nav--nojs');
contactsHeader.classList.remove('page-header__contacts--nojs');
navToggle.classList.remove('page-header__nav-toggle--nojs');
navbar.classList.remove('page-header--nojs');

// Открываем/закрываем мобильное меню по клику на переключатель-"гамбургер"
navToggle.addEventListener('click', function () {
  navSite.classList.contains('main-nav--closed') ? navOpen() : navClose();
});

// Закрываем мобильное меню по клику на логотип при переходе на главную страницу
navLogo.addEventListener('click', function () {
  if (navSite.classList.contains('main-nav--opened')) navClose();
});

// Закрываем мобильное меню по клику при выборе пункта меню
for (let link of navLinks) {
  link.addEventListener('click', navClose);
};

// Делаем десктопное меню фиксированным при прокрутке
window.addEventListener('scroll', function() {
  if(scrollY > 0) {
    navbar.classList.add('page-header--fixed');
  }
  else {
    navbar.classList.remove('page-header--fixed');
  }
});

// Выделяем активный пункт меню при клике на него (планшет, десктоп)
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].addEventListener('click', function() {
    activeNone();
    this.classList.add('main-nav__item--active');
  });
};

/* Убираем выделение активного пункта меню по клику
 на логотип при переходе на главную страницу (планшет, десктоп)*/
navLogo.addEventListener('click', activeNone);

// Выделяем активный пункт меню при прокрутке (планшет, десктоп)
window.addEventListener('scroll', function() {
  const scrollDistance = window.scrollY;
  const sections = document.querySelectorAll('section');
  sections.forEach(function(section, i) {
    if (section.offsetTop - navbar.clientHeight <= scrollDistance) {
      activeNone();
      navLinks[i].classList.add('main-nav__item--active');
    }
  });
});

// Функция "Открыть мобильное меню"
function navOpen () {
  navbar.classList.add('page-header--opened');
  navSite.classList.remove('main-nav--closed');
  navSite.classList.add('main-nav--opened');
  contactsHeader.classList.remove('page-header__contacts--closed');
  contactsHeader.classList.add('page-header__contacts--opened');
  navToggle.classList.remove('page-header__nav-toggle--closed');
  navToggle.classList.add('page-header__nav-toggle--opened');
};

// Функция "Закрыть мобильное меню"
function navClose () {
  navbar.classList.remove('page-header--opened');
  navSite.classList.add('main-nav--closed');
  navSite.classList.remove('main-nav--opened');
  contactsHeader.classList.add('page-header__contacts--closed');
  contactsHeader.classList.remove('page-header__contacts--opened');
  navToggle.classList.add('page-header__nav-toggle--closed');
  navToggle.classList.remove('page-header__nav-toggle--opened');
};

// Функция "Убрать выделение активного пункта меню"
function activeNone () {
  navLinks.forEach(function(item) {
    if (item.classList.contains('main-nav__item--active')) {
      item.classList.remove('main-nav__item--active');
    };
  });
};
