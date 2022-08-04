function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const boxesEl = document.querySelector('#boxes');

const createBox = size => `<div style="background-color: ${getRandomHexColor()}; width: ${size}px; height: ${size}px"></div>`;
const createBoxes = amount => {
  let boxesHTML = '';
  let size = 30;
  for (let i=0; i<amount; ++i) {
    boxesHTML += createBox(size);
    size += 10;
  }
  return boxesHTML;
};

const numberInput = document.querySelector('input[type="number"]');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');

createButton.addEventListener('click', () => {
  const amount = +numberInput.value || 1;
  boxesEl.innerHTML = '';
  boxesEl.insertAdjacentHTML('afterbegin', createBoxes(amount));
});

destroyButton.addEventListener('click', () => {
  boxesEl.innerHTML = '';
});
