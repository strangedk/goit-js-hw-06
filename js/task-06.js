const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', ({target: {value}}) => {
  const {length} = inputEl.dataset;
  console.log(`${value.length} : ${length}`);

  if (value.length == length) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.add('invalid');
    inputEl.classList.remove('valid');
  }
});
