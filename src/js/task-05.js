/*Напиши скрипт который, 
при наборе текста в инпуте input#name-input 
(событие input), 
подставляет его текущее значение 
в span#name-output. Если инпут пустой, 
в спане должна отображаться строка 'незнакомец'.*/

const inputEl = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");

inputEl.addEventListener("input", inputTextChange);

function inputTextChange(event) {
  if (event.currentTarget.value === "") {
    outputText.textContent = "незнакомец";
  } else {
    outputText.textContent = event.currentTarget.value;
  }
}
