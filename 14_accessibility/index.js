// swiper
const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,

  a11y: {
    paginationBulletMessage: 'Выбрать слайд {{index}}',
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

// burger-menu
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header-nav');
let menuLinks = menu.querySelectorAll('.header-nav__link');

burger.addEventListener('click',

  function () {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('header-nav--active');

    document.body.classList.toggle('stop-scroll');
  })

menuLinks.forEach(function (el) {
  el.addEventListener('click',
    function () {

      burger.classList.remove('burger--active');

      menu.classList.remove('header-nav--active');

      document.body.classList.remove('stop-scroll');

    })
})

// search field
let searchOpen = document.querySelector('.header__btn-search');
let searchArea = document.querySelector('.search-form');
let searchInput = document.querySelector('.search-form__input');
let searchSubmit = document.querySelector('.search-form__btn_search');
let searchClose = document.querySelector('.search-form__btn_close');
let headerNav = document.querySelector('.header-nav__list ');
let headerLogo = document.querySelector('.header-logo__svg');
let headerLeft = document.querySelector('.header-left');

searchOpen.addEventListener('click', function () {
  searchOpen.querySelector('.header__icon_search').classList.add('header__icon_search--active');
  searchArea.classList.add('search-form--active');
  searchInput.classList.add('search-form__input--active');
  searchInput.focus();
  searchSubmit.querySelector('.search-form__icon_search').classList.add('search-form__icon--active');
  searchClose.querySelector('.search-form__icon_close').classList.add('search-form__icon--active');
  headerNav.classList.add('header-nav__list--active');
  headerLogo.classList.add('header-logo--active');
  burger.classList.add('burger--hide');
  headerLeft.classList.add('header-left--active');
  document.getElementById('search-form__input').tabIndex = '0';
  document.getElementById('search-form__btn_search').tabIndex = '0';
  document.getElementById('search-form__btn_close').tabIndex = '0';
  document.getElementById('header__btn-search').tabIndex = '-1';
  document.getElementById('search-form__input').ariaHidden = 'false';
  document.getElementById('search-form__btn_search').ariaHidden = 'false';
  document.getElementById('search-form__btn_close').ariaHidden = 'false';
  document.getElementById('header__btn-search').ariaHidden = 'true';
})

searchClose.addEventListener('click', function () {
  searchInput.classList.remove('search-form__input--active');
  searchArea.classList.remove('search-form--active');
  searchSubmit.querySelector('.search-form__icon_search').classList.remove('search-form__icon--active');
  searchClose.querySelector('.search-form__icon_close').classList.remove('search-form__icon--active');
  searchOpen.querySelector('.header__icon_search').classList.remove('header__icon_search--active');
  searchOpen.focus();
  headerNav.classList.remove('header-nav__list--active');
  headerLogo.classList.remove('header-logo--active');
  burger.classList.remove('burger--hide');
  headerLeft.classList.remove('header-left--active');
  document.getElementById('search-form__input').tabIndex = '-1';
  document.getElementById('search-form__btn_search').tabIndex = '-1';
  document.getElementById('search-form__btn_close').tabIndex = '-1';
  document.getElementById('header__btn-search').tabIndex = '0';
  document.getElementById('search-form__input').ariaHidden = 'true';
  document.getElementById('search-form__btn_search').ariaHidden = 'true';
  document.getElementById('search-form__btn_close').ariaHidden = 'true';
  document.getElementById('header__btn-search').ariaHidden = 'false';
})

// we-work tabs

let tabsBtn = document.querySelectorAll('.we-work-steps__btn');
let tabsItem = document.querySelectorAll('.we-work-body');

tabsBtn.forEach(function (el) {
  el.addEventListener('click', function (e) {
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function (btn) {
      btn.classList.remove('we-work-steps__btn--active');
    })

    e.currentTarget.classList.add('we-work-steps__btn--active');

    tabsItem.forEach(function (el) {
      el.classList.remove('we-work-body--active')
    })

    document.querySelector(`[data-target="${path}"]`).classList.add('we-work-body--active');
  })
})

// accordion

new Accordion('.accordion-container', {
  showMultiple: true,
});


