//1-Vamos usar o metodo "toLowerCase" para transformar nossa string toda em miniscula.
//2-O "split" separa a nossa string em um arrey, que vai ser sepadado em letras.Teremos um array de varios caracter.
//3- Vamos ordenar nossas letras com o metodo "sort", ele funciona recebendo uma função de calbeck dizer pra gente qual elemento
// fica na frente de qual, por padraõ o "sort" ordena da na tabela ask, se passar ele vazio por padrão ele ja vai organizar em ordem alfabetica.
//4-Vamos retornar a ultima letra
function highestLetter(str) {
  const lowerCaseString = str.toLowerCase();
  const lettersArray = lowerCaseString.split("");
  const sortedArray = lettersArray.sort();
  return sortedArray[sortedArray.length - 1];
}
console.log(highestLetter("Lorem ipsum dolore sec avant"));
console.log(highestLetter("Hello"));
console.log(highestLetter("May the force be with you"));
console.log(highestLetter("it s over nine thousand"));
