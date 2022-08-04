const textSpan = document.querySelector('#text');
const inputRange = document.querySelector('#font-size-control');

inputRange.addEventListener('input', ({target: {value}}) => {
  textSpan.style.fontSize = `${value}px`;
});
