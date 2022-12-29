function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyEl = document.querySelector(`body`);
const colorSpan = document.querySelector(`.color`);
const buttonColor = document.querySelector(`.change-color`);

buttonColor.addEventListener('click', changecolor);

function changecolor() {
  const color = getRandomHexColor(); //один раз вызываем и всё

  colorSpan.textContent = color;
  bodyEl.style.backgroundColor = color;

  // `${getRandomHexColor()}`;
}
