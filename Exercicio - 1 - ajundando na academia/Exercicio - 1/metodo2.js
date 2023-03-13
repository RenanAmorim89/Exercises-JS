// A função reduce do JavaScript serve para iterar sobre um array e utilizar o valor de cada
// item para criar um objeto final com base em alguma regra. Como o próprio nome da função
// sugere, ela “reduz” os itens de um vetor a um valor único. Por exemplo, podemos utilizá-la
// para obter a soma ou produto dos itens de um vetor numérico.

function average(numbers) {
  const sum = numbers.reduce((accum, num) => {
    return accum + num;
  }, 0);

  return sum / numbers.length;
}

console.log(average([10, 9, 6, 8, 9, 1, 5, 7]));
console.log(average([2, 7, 1, -2]));
console.log(average([10, 10, 10, 10, 9]));
console.log(average([25, 75]));
