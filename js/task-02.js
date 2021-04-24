/*Напиши скрипт, который для каждого элемента массива ingredients 
создаст отдельный li, 
после чего вставит все li за одну операцию в список ul.ingredients. 
Для создания DOM-узлов используй document.createElement().*/

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ingredientsRef = document.querySelector("#ingredients");

const elementOfIngredients = ingredients.map((elem) => {
  const ingredient = document.createElement("li");
  ingredient.textContent = elem;
  return ingredient;
});

ingredientsRef.append(...elementOfIngredients);

// ______________________________________________________________________
// ingredients.forEach((ingredient) => {
//   const ingredientsItems = document.createElement("li");
//   ingredientsItems.textContent = `${ingredient}`;
//   document.getElementById("ingredients").appendChild(ingredientsItems);
// });
