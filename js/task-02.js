const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsEl = document.querySelector(`#ingredients`);
console.log(ingredientsEl);

const makeIngredientsList = ingredients =>
  ingredients.map(element => {
    const ingredientsList = document.createElement('li');
    ingredientsList.textContent = element;
    ingredientsList.classList.add(`item`);
    return ingredientsList;
  });

const ingredientsAdder = makeIngredientsList(ingredients);
ingredientsEl.append(...ingredientsAdder);





