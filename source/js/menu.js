'use strict';

var navMain = document.querySelector('.main-nav');
var toggler = navMain.querySelector('.main-nav__toggler');

navMain.classList.remove('main-nav--nojs');
navMain.classList.add('main-nav--closed');

toggler.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});
