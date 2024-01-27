import Alpine from 'alpinejs';
window.Alpine = Alpine;

let numbers = Array.from(Array(5), (_) => randomInteger(1, 50));

Alpine.data('data', () => ({
  numbers: numbers,
  numbersText: numbers.join('+'),
  answer: numbers.reduce((acc, x) => {
    return acc + x;
  }),

  onInput(element) {
    if (element.value == this.answer) {
      element.value = '';

      numbers = Array.from(Array(5), (_) => randomInteger(1, 50));
      this.numbers = numbers;
      this.numbersText = this.numbers.join('+');
      this.answer = numbers.reduce((acc, x) => {
        return acc + x;
      });
    }
  },
}));

Alpine.start();

/**
 *
 * @param {int} min
 * @param {int} max
 * @returns {int}
 */
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
