function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, 0)}`;
}

const buttonChangeColor = document.querySelector('.change-color');
const spanColor = document.querySelector('.color');

buttonChangeColor.addEventListener('click', () => {
  const color = getRandomHexColor();

  document.body.style.backgroundColor = color;
  spanColor.textContent = color;
});
