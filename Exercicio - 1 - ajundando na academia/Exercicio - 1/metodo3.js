// O operador Spread, Ele é representado por três pontos, sim, o Spread operator é o
// famoso ‘…’ (três pontinhos para os mais íntimos). Ele basicamente permite que
// expressões expandam o conteúdo de arrays em locais onde múltiplos elementos
// são esperados.

function average(...numbers) {
  const sum = numbers.reduce((accum, num) => accum + num, 0);
  return sum / numbers.length;
}

console.log(average(10, 9, 6, 8, 9, 1, 5, 7));
console.log(average(2, 7, 1, -2));
console.log(average(10, 10, 10, 10, 9));
console.log(average(25, 75));
