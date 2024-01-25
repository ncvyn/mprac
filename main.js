document.querySelector('#app').innerHTML = /*html*/ `
  <h1 id="numbers">...</h1>
  <input autofocus autocomplete="off" type="number" pattern="[0-9]*" id="input">
`;

let input = document.getElementById('input');
let numbersEle = document.getElementById('numbers');

let numbers = Array.from(Array(5), (_) => randomInteger(10, 50));
numbersEle.innerHTML = numbers.join('+');

let correctAnswer = numbers.reduce((acc, x) => {
  return acc + x;
});

input.addEventListener('input', (_) => {
  input.value = input.value.replace('e', '');

  if (input.value == correctAnswer) {
    alert('good job');
  }
});

/**
 *
 * @param {int} min
 * @param {int} max
 * @returns {int}
 */
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
