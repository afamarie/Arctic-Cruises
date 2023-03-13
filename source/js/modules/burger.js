const button = document.querySelector('.burger');
const body = document.querySelector('body');

const onClockToggleMenu = () => {
  body.classList.toggle('menu-opened');
};

button.addEventListener('click', onClockToggleMenu);
