/*Напиши скрипт, 
который реагирует на изменение значения input#font-size-control 
(событие input) и изменяет инлайн-стиль span#text,
обновляя свойство font-size. 
В результате при перетаскивании ползунка будет меняться размер текста.*/

const fontSizeChange = document.querySelector("#font-size-control");
const textToChange = document.querySelector("#text");

function changeFontSize() {
  textToChange.style.fontSize = fontSizeChange.value + "px";
}

fontSizeChange.addEventListener("input", changeFontSize);
