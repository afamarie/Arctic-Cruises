const button = document.querySelector('.burger');
const header = document.querySelector('.header');
const body = document.querySelector('body');
const links = header.querySelectorAll('a');
const overlay = header.querySelector('.header__overlay');
const intro = header.querySelector('.container--intro-content');

header.classList.remove('header--no-js');

const onClickToggleMenu = () => {
  header.classList.toggle('header--menu-opened');
  if (body.style.overflow === 'hidden') {
    body.style.overflow = '';
    intro.style.marginTop = '';
  } else {
    body.style.overflow = 'hidden';
    intro.style.marginTop = '68px';
  }
};

const onClickCloseMenu = () => {
  header.classList.remove('header--menu-opened');
  body.style.overflow = '';
  intro.style.marginTop = '';
};

button.addEventListener('click', onClickToggleMenu);
links.forEach((link) => {
  link.addEventListener('click', onClickCloseMenu);
});

overlay.addEventListener('click', onClickCloseMenu);
