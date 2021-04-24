/*Счетчик состоит из спана и кнопок, 
которые должны увеличивать и уменьшать значение счетчика на 1.

Создай переменную counterValue в которой будет хранится 
текущее значение счетчика.
Создай функции increment и decrement 
для увеличения и уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций 
и обновление интерфейса.*/

const incrementBtn = document.querySelector("[data-action = 'increment']");
const decrementBtn = document.querySelector("[data-action = 'decrement']");

let counterValue = 0;
const valueOfCounter = document.querySelector("#value");

function incrementBtnClick() {
  counterValue += 1;
  valueOfCounter.textContent = counterValue;
}

function decrementBtnClick() {
  counterValue -= 1;
  valueOfCounter.textContent = counterValue;
}

incrementBtn.addEventListener("click", incrementBtnClick);
decrementBtn.addEventListener("click", decrementBtnClick);
