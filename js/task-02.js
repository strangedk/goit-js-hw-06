const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const createElement = text => {
  const ingredientEl = document.createElement('li');
  ingredientEl.innerText = text;
  ingredientEl.classList.add('item');
  return ingredientEl;
}

const ingredientsElements = ingredients.map(createElement);
const ingredientsListEl = document.querySelector('#ingredients');
ingredientsListEl.append(...ingredientsElements);
