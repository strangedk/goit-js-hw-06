const valueSpan = document.querySelector('#value');
const updateValue = value => valueSpan.textContent = value;

const data = {
  _counterValue: 0,
  set counterValue(value) {
    this._counterValue = value;
    updateValue(value)
  },
  get counterValue() {
    return this._counterValue;
  }
}

const actions = {
  decrement: () => --data.counterValue,
  increment: () => ++data.counterValue,
}

document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', actions[button.dataset.action]);
});
