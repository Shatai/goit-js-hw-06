const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listEl = document.querySelector('ul');
const el = [];

for(let i = 0; i < ingredients.length; i += 1) {
  const ing = ingredients[i];
  const element = document.createElement("li");
  element.textContent = ing;
  element.classList.add('item');
  el.push(element);
}

listEl.append(...el);

