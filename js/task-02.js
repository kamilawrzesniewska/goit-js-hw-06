const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingrList = document.querySelector("#ingredients");

const items = ingredients.map(element => {
  const liList = document.createElement("li");
  liList.textContent = element;
  liList.classList.add("item");
  return liList;
});
    ingrList.append(...items);
