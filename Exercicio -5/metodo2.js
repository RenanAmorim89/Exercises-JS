//1-Vamos usar o metodo "toLowerCase" para transformar nossa string toda em miniscula.
//2- O resultado do "toLowerCase" podemos jogar para o "split" que vai separar essa string.
//3- O Resultado do "split" que é um array, podemos jogar no metodo "sort" que vai ordenar o array
function highestLetter(str) {
  const sortedArray = str.toLowerCase().split("").sort();
  return sortedArray[sortedArray.length - 1];
}
console.log(highestLetter("Lorem ipsum dolore sec avant"));
console.log(highestLetter("Hello"));
console.log(highestLetter("May the force be with you"));
console.log(highestLetter("it s over nine thousand"));
