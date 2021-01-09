const navElem = document.querySelector('.nav');
const navToggle = document.querySelector('.js-toggle');
const navIcon = document.querySelector('.nav__icon');

navToggle.addEventListener('click', () => {
  navElem.classList.toggle('nav_opened');
  if(navElem.classList.contains('nav_opened')) {
    navIcon.setAttributeNS(
      'http://www.w3.org/1999/xlink',
      'xlink:href',
      '#icon-cross'
    ) 
  } else {
    navIcon.setAttributeNS(
      'http://www.w3.org/1999/xlink',
      'xlink:href',
      '#icon-menu'
    ) 
  }
});