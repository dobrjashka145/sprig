(function () {
const navbar = document.querySelector('.page-header');
const navLogo = document.querySelector('.page-header__logo');

const navToggle = document.querySelector('.page-header__toggle-gamburger');
const navSite = document.querySelector('.page-header__main-nav');
const navLinks = navSite.querySelectorAll('.main-nav__item');

const subNavs = navSite.querySelectorAll('.main-nav__sublist');
const subNavLinks = navSite.querySelectorAll('.main-nav__subitem');

// Убираем классы '--nojs'
navSite.classList.remove('page-header__main-nav--nojs');
navToggle.classList.remove('page-header__toggle-gamburger--nojs');
for (subList of subNavs) {
  subList.classList.remove('main-nav__sublist--nojs');
}

// Открываем/закрываем мобильное меню по клику на переключатель-"гамбургер"
navToggle.addEventListener('click', function () {
  navSite.classList.contains('page-header__main-nav--closed') ? navOpen() : navClose();
});

// Закрываем мобильное меню по клику на логотип
navLogo.addEventListener('click', function () {
  if (navSite.classList.contains('page-header__main-nav--opened')) navClose();
});

// Закрываем мобильное меню по клику при выборе пункта меню/подменю
for (let link of navLinks) {
  link.addEventListener('click', function(evt) {
    var currentLink = link;
    var target = evt.target;
    if (!target.classList.contains('button-toggle__icon')) {
      navClose();
    } else {
      subActiveNone();
      currentLink.classList.add('main-nav__item--first');
      currentLink.querySelector('.main-nav__sublist').classList.add('main-nav__sublist--opened')
      for (let subLink of subNavLinks) {
        subLink.addEventListener('click', navClose);
      }
    }
  });
}

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

// Убираем выделение активного пункта меню по клику на логотип (планшет, десктоп)
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
  navSite.classList.remove('page-header__main-nav--closed');
  navSite.classList.add('page-header__main-nav--opened');
  navToggle.classList.remove('page-header__toggle-gamburger--closed');
  navToggle.classList.add('page-header__toggle-gamburger--opened');
};

// Функция "Закрыть мобильное меню"
function navClose () {
  navSite.classList.add('page-header__main-nav--closed');
  navSite.classList.remove('page-header__main-nav--opened');
  navToggle.classList.add('page-header__toggle-gamburger--closed');
  navToggle.classList.remove('page-header__toggle-gamburger--opened');
  subActiveNone();
};

// Функция "Убрать выделение активного пункта меню"
function activeNone () {
  navLinks.forEach(function(item) {
    if (item.classList.contains('main-nav__item--active')) {
      item.classList.remove('main-nav__item--active');
    };
  });
};

// Функция "Убрать мобильное подменю"
function subActiveNone () {
  navLinks.forEach(function(item) {
    if (item.classList.contains('main-nav__item--first')) {
      item.classList.remove('main-nav__item--first');
    };
  });
  subNavs.forEach(function(item) {
    if (item.classList.contains('main-nav__sublist--opened')) {
      item.classList.remove('main-nav__sublist--opened');
    };
  });
};
})();
