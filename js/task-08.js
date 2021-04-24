/*Напиши скрипт создания и очистки коллекции элементов. 
Пользователь вводит количество элементов в input 
и нажимает кнопку Создать, после чего рендерится коллекция. 
При нажатии на кнопку Очистить, коллекция элементов очищается.

Создай функцию createBoxes(amount), 
которая принимает 1 параметр amount - число. 
Функция создает столько div, 
сколько указано в amount и добавляет их в div#boxes.

Каждый созданный div:

Имеет случайный rgb цвет фона
Размеры самого первого div - 30px на 30px
Каждый следующий div после первого, должен быть шире и выше предыдущего 
на 10px
Создай функцию destroyBoxes(), которая очищает div#boxes.*/

const inputQuantity = document.querySelector("#controls").firstElementChild;
// console.log(inputQuantity);
const createBtn = document.querySelector('[data-action="render"]');
// console.log(createBtn);
const clearBtn = document.querySelector('[data-action = "destroy"]');
// console.log(clearBtn);
const boxes = document.querySelector("#boxes");
// console.log(boxes);

createBtn.addEventListener("click", onCreateBoxes);
clearBtn.addEventListener("click", onClearInput);

function onCreateBoxes() {
  let quantity = inputQuantity.value;
  //   console.log(quantity);
  const boxArray = [];
  for (let i = 0; i < quantity; i += 1) {
    const boxElem = document.createElement("div");
    let boxSize = 30 + i * 10;
    boxElem.style.width = `${boxSize}px`;
    boxElem.style.height = `${boxSize}px`;
    boxElem.style.backgroundColor = randomRGB();
    boxArray.push(boxElem);
  }
  boxes.append(...boxArray);
}

function randomRGB() {
  const r = Math.round(Math.random() * (255 - 1) + 1);
  const g = Math.round(Math.random() * (255 - 1) + 1);
  const b = Math.round(Math.random() * (255 - 1) + 1);
  return `rgb(${r},${g},${b})`;
}

function onClearInput() {
  inputQuantity.value = 0;
  boxes.innerHTML = "";
}
