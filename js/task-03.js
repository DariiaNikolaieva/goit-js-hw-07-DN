/*Напиши скрипт для создания галлереи изображений по массиву данных.
В HTML есть список ul#gallery.
Используй массив объектов images для создания тегов img вложенных в li. 
Для создания разметки используй шаблонные строки и insertAdjacentHTML().

Все элементы галереи должны добавляться в DOM за одну операцию вставки.
Добавь минимальное оформление галереи флексбоксами или гридами 
через css-классы.*/

const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryList = document.querySelector("#gallery");
// console.log(galleryList);

const onGalleryItemCreate = ({ url, alt }) =>
  `<li><img src="${url}" alt="${alt}" height = 150></li>`;

// REDUCE
// const galleryItem = images.reduce(
//   (acc, item) => acc + onGalleryItemCreate(item),
//   ""
// );

// MAP
const galleryItem = images.map((elem) => onGalleryItemCreate(elem)).join("");

galleryList.insertAdjacentHTML("afterbegin", galleryItem);
galleryList.setAttribute(
  "style",
  "display: flex; justify-content: space-around; align-items: center; list-style-type: none"
);

// ________________________________________________________________________
// images.forEach((image) => {
//   document
//     .querySelector("#gallery")
//     .insertAdjacentHTML(
//       "afterbegin",
//       `<li><img src='${image.url}' alt='${image.alt}' width = 200></li>`
//     );
// });

// document
//   .querySelector("#gallery")
//   .setAttribute(
//     "style",
//     "display: flex; justify-content: space-around; align-items: center; list-style-type: none"
//   );
