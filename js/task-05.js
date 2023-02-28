// Задание 5
// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output.
// Если инпут пустой, в спане должна отображаться строка "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const refs = {
  input: document.querySelector('#name-input'),
  spans: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', makeSpanChange);

function makeSpanChange(event) {
  refs.spans.textContent = event.currentTarget.value.trim();
  //   if ((refs.spans.textContent.length = 0)) {
  //     refs.spans.textContent = 'Anonymous';
  //   }
  if (event.currentTarget.value.trim() === '') {
    refs.spans.textContent = 'Anonymous';
  }
}
