//Essa função precisa receber um arrey de numeros como parametro.
function average(numbers) {
  // soma de todos od numeros
  let sum = 0;
  // Vamos fazer uma repetição, a cada numero essa variavel sam é incrementada por esse numero.
  numbers.forEach((numbers) => {
    sum += numbers; // sum = sum + number
  });
  //Sabendo o total de Numeros
  const average = sum / numbers.length;

  return average;
}
console.log(average([10, 9, 6, 8, 9, 1, 5, 7]));
console.log(average([2, 7, 1, -2]));
console.log(average([10, 10, 10, 10, 9]));
console.log(average([25, 75]));
