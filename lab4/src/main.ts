import './style.css'
import { setupCalculator } from './calculator.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>FP + TS</h1>
    <div class="output-card">
      <h2 id="output">5 + 7 = 12</h2>
    </div>
    <div class="buttons">
      <button id="clear" class="operation">C</button>
      <button id="n7">7</button>
      <button id="n8">8</button>
      <button id="n9">9</button>
      <button id="div" class="operation">/</button>
      <button id="square" class="operation">x<sup>2</sup></button>
      <button id="n4">4</button>
      <button id="n5">5</button>
      <button id="n6">6</button>
      <button id="mul" class="operation">*</button>
      <button id="square-root" class="operation"><sup>2</sup>&radic;</button>
      <button id="n1">1</button>
      <button id="n2">2</button>
      <button id="n3">3</button>
      <button id="sub" class="operation">-</button>
      <button id="log" class="operation">log</button>
      <button id="n0">0</button>
      <button id="dot">.</button>
      <button id="eq" class="operation">=</button>
      <button id="plus" class="operation">+</button>
    </div>
  </div>
`

const { handleClick } = setupCalculator(document.querySelector<HTMLButtonElement>('#output')!);
for (let i = 0; i < 10; i++) {
  const button = document.querySelector<HTMLButtonElement>(`#n${i}`);
  if (button) {
    button.addEventListener('click', () => handleClick(i.toString()));
  }
}
const div = document.querySelector<HTMLButtonElement>(`#div`);
if (div) {
  div.addEventListener('click', () => handleClick('/'));
}
const mul = document.querySelector<HTMLButtonElement>(`#mul`);
if (mul) {
  mul.addEventListener('click', () => handleClick('*'));
}
const sub = document.querySelector<HTMLButtonElement>(`#sub`);
if (sub) {
  sub.addEventListener('click', () => handleClick('-'));
}
const plus = document.querySelector<HTMLButtonElement>(`#plus`);
if (plus) {
  plus.addEventListener('click', () => handleClick('+'));
}
const eq = document.querySelector<HTMLButtonElement>(`#eq`);
if (eq) {
  eq.addEventListener('click', () => handleClick('='));
}
const dot = document.querySelector<HTMLButtonElement>(`#dot`);
if (dot) {
  dot.addEventListener('click', () => handleClick('.'));
}
const clear = document.querySelector<HTMLButtonElement>(`#clear`);
if (clear) {
  clear.addEventListener('click', () => handleClick('C'));
}
const square = document.querySelector<HTMLButtonElement>(`#square`);
if (square) {
  square.addEventListener('click', () => handleClick('sqr'));
}
const squareRoot = document.querySelector<HTMLButtonElement>(`#square-root`);
if (squareRoot) {
  squareRoot.addEventListener('click', () => handleClick('sqrt'));
}
const log = document.querySelector<HTMLButtonElement>(`#log`);
if (log) {
  log.addEventListener('click', () => handleClick('log'));
}
