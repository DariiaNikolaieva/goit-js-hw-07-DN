/*Напиши скрипт, который бы при потере фокуса на инпуте, 
проверял его содержимое на правильное количество символов.

- Сколько символов должно быть в инпуте, 
указывается в его атрибуте data-length.
- Если введено подходящее количество, 
то border инпута становится зеленым, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid.*/

const inputText = document.querySelector("#validation-input");
const inputLength = inputText.getAttribute("data-length");

function inputChangeColor() {
  if (Number(inputLength) === inputText.value.length) {
    inputText.classList.add("valid");
    inputText.classList.remove("invalid");
  } else {
    inputText.classList.add("invalid");
    inputText.classList.remove("valid");
  }
}

inputText.addEventListener("blur", inputChangeColor);
