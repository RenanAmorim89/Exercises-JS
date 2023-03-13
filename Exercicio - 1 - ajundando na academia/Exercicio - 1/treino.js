function average(numbers) {
  let sum = 0;

  numbers.forEach((numbers) => {
    sum += numbers;
  });
  const average = sum / numbers.length;
  return average;
}

console.log(average([10, 9, 6, 8, 9, 1, 5, 7]));
console.log(average([2, 7, 1, -2]));
console.log(average([10, 10, 10, 10, 9]));
console.log(average([25, 75]));

//Segundo Modelo de Resolução

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

//Terceiro metodo

function average(...numbers) {
  const sum = numbers.reduce((accum, num) => accum + num, 0);
  return sum / numbers.length;
}
