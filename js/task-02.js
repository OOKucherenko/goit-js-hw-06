const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsElem = document.querySelector("#ingredients"); 

for (const item of ingredients) {
  const itemElem = document.createElement('li');
  itemElem.textContent = item;
  ingredientsElem.append(itemElem);
}