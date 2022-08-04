const outputEl = document.querySelector('#name-output');
const inputEl = document.querySelector('#name-input');

inputEl.addEventListener('input', ({target: {value}}) => {
  outputEl.textContent = value || 'Anonymous';
});
