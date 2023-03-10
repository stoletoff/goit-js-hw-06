// Задание 7
// Напиши скрипт, который реагирует на изменение значения
// input#font-size-control (событие input) и изменяет
// инлайн-стиль span#text обновляя свойство font-size.
// В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const refs = {
  input: document.querySelector('#font-size-control'),
  span: document.querySelector('#text'),
};

console.log(refs.input);
console.log(refs.span);

refs.input.addEventListener('input', changeFontSizeText);
function changeFontSizeText() {
  // console.log(refs.input.value);
  refs.span.style.fontSize = `${refs.input.value}px`;
}
