const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsElem = document.querySelector("#ingredients"); 

const elem = ingredients.map((item) => {
  const itemElem = document.createElement('li');
  itemElem.textContent = item;
  return itemElem;
});

ingredientsElem.append(...elem);