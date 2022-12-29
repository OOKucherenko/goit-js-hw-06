function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const ref = {
  inputEl: document.querySelector('input'),
  createBtn: document.querySelector('button[data-create]'),
  destroyBtn: document.querySelector('button[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};

ref.boxes.style.display = 'flex';
ref.boxes.style.gap = '30px';
ref.boxes.style.marginTop = '20px';
ref.boxes.style.alignItems = 'center';

ref.inputEl.value = 0;
ref.inputEl.onFocus = 'this.select()';
ref.createBtn.addEventListener('click', () => {
  const amount = ref.inputEl.value;
  createBoxes(amount);
});

const createBoxes = amount => {
  const elements = [];
  let itemElem;
  for (let i = 0; i < amount; i += 1) {
    itemElem = document.createElement('div');
    itemElem.style.width = `${30 + i * 10}px`;
    itemElem.style.height = `${30 + i * 10}px`;
    itemElem.style.backgroundColor = getRandomHexColor();
    elements.push(itemElem);
  }
  boxes.append(...elements);
};

ref.destroyBtn.addEventListener('click', () => {
  destroyBoxes();
});

const destroyBoxes = () => {
  const childBoxes = document.querySelectorAll('div>div');
  [...childBoxes].map(i => i.remove());
  ref.inputEl.value = 0;
};
