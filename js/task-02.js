const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsEl = document.querySelector(`#ingredients`);
console.log(ingredientsEl);

const makeIngredientsList = date =>
  date.map(element => {
    const ingredientsList = document.createElement('li');
    ingredientsList.textContent = element;
    ingredientsList.classList.add(`item`);
    return ingredientsList;
  });

const ingredientsAdder = makeIngredientsList(ingredients);
// console.log(ingredientsAdder);
ingredientsEl.append(...ingredientsAdder);
console.log(ingredientsEl);
