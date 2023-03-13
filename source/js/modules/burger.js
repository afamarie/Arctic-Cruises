const button = document.querySelector('.burger');
const header = document.querySelector('.header');
const body = document.querySelector('body');
const links = header.querySelectorAll('a');

header.classList.remove('header--no-js');

const onClickToggleMenu = () => {
  header.classList.toggle('header--menu-opened');
  if (body.style.overflow === 'hidden') {
    body.style.overflow = '';
  } else {
    body.style.overflow = 'hidden';
  }
};

const onClickCloseMenu = () => {
  header.classList.remove('header--menu-opened');
  body.style.overflow = '';
};

button.addEventListener('click', onClickToggleMenu);
links.forEach((link) => {
  link.addEventListener('click', onClickCloseMenu);
});
