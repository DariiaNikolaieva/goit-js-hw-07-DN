/*Напиши скрипт, который выполнит следующие операции.

Посчитает и выведет в консоль количество категорий в ul#categories, 
то есть элементов li.item. Получится 'В списке 3 категории.'.

Для каждого элемента li.item в списке ul#categories, найдет 
и выведет в консоль текст заголовка элемента (тега h2) 
и количество элементов в категории (всех вложенных в него элементов li).

Например для первой категории получится:

Категория: Животные
Количество элементов: 4
*/

const categoryListItem = document.querySelectorAll(".item");
// console.log(categoryListItem);

console.log(`В списке ${categoryListItem.length} категории.`);

categoryListItem.forEach((elem) => {
  const titleOfCategory = elem.querySelector("h2").textContent;
  console.log(`Категория: ${titleOfCategory}`);

  const quantityOfItems = elem.querySelectorAll(".item li");
  console.log(`Количество элементов: ${quantityOfItems.length}`);
});

// __________________________________________________________________
// const countQuantityOfCategories = (categories) => {
//   return `В списке ${categories.children.length} категории.`;
// };

// const getTitleOfCategoryItem = (index) => {
//   const titleArray = document.querySelectorAll("h2");
//   return `Категория: ${titleArray[index].textContent}`;
// };

// const getQuantityOfItemEl = (index) => {
//   const itemEl = document.querySelectorAll(".item");
//   const quantityOfItems = itemEl[index].querySelectorAll("li");
//   return `Количество элементов: ${quantityOfItems.length}`;
// };

// console.log(countQuantityOfCategories(document.querySelector("ul#categories")));

// console.log(getTitleOfCategoryItem(0));
// console.log(getQuantityOfItemEl(0));

// console.log(getTitleOfCategoryItem(1));
// console.log(getQuantityOfItemEl(1));

// console.log(getTitleOfCategoryItem(2));
// console.log(getQuantityOfItemEl(2));
