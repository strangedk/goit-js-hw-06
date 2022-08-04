const categoriesEl = document.querySelector('#categories');
const itemsEl = categoriesEl.querySelectorAll('.item');

console.log(`Number of categories: ${itemsEl.length}\n`);

itemsEl.forEach(itemEl => {
  const titleEl = itemEl.querySelector('h2');
  const listItemsEl = itemEl.querySelectorAll('li');

  console.log(`Category: ${titleEl.textContent}`);
  console.log(`Elements: ${listItemsEl.length}`);
});
