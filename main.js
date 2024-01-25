import Alpine from 'alpinejs';
window.Alpine = Alpine;

/**
 *
 * @param {int} min
 * @param {int} max
 * @returns {int}
 */
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let numbers = Array.from(Array(5), (_) => randomInteger(1, 50));

Alpine.data('data', () => ({
  numbers: numbers,
  numbersText: numbers.join('+'),
  answer: numbers.reduce((acc, x) => {
    return acc + x;
  }),

  onInput(element) {
    if (element.value == this.answer) {
      numbers = Array.from(Array(5), (_) => randomInteger(1, 50));
      this.numbers = numbers;
      this.numbersText = this.numbers.join('+');
      this.answer = numbers.reduce((acc, x) => {
        return acc + x;
      });
    }
  },
}));

document.querySelector('#app').innerHTML = /*html*/ `
  <div x-data="data">
    <h1 x-text="numbersText" id="numbers">...</h1>
    <input id="input" @input="onInput($el)" autofocus autocomplete="off" type="number" pattern="[0-9]*" >
  </div>
`;

Alpine.start();
