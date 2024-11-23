/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

import { data } from './data.js';

const buttons = document.querySelectorAll('.nav button');
const liElements = document.querySelectorAll('li');

function setBgcolor(colorA, colorB) {
  const body = document.body;
  const setBg = `linear-gradient(to bottom, ${colorA}, ${colorB})`;

  body.style.background = setBg;
}
function setImage(name, alt) {
  const target = document.querySelector('.container .visual div img');
  target.src = `./assets/${name}.jpeg`;
  target.alt = alt;
}
function setNameText(name) {
  const target = document.querySelector('.container .nickName');
  target.textContent = name;
}

buttons.forEach((button) => {
  button.addEventListener('click', function () {
    liElements.forEach((li) => li.classList.remove('is-active'));
    const li = this.closest('li');
    li.classList.add('is-active');

    const index = li.dataset.index - 1;
    const {
      color: [colorA, colorB],
      name,
      alt,
    } = data[index];
    // let colorA, colorB, name, alt;
    // colorA = data[index].color[0];
    // colorB = data[index].color[1];
    // name = data[index].name;
    // alt = data[index].alt;
    setBgcolor(colorA, colorB);
    setImage(name, alt);
    setNameText(name);
  });
});
