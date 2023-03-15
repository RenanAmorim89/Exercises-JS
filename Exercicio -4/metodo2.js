//1- Vamos coverter esse numero para uma string, pois nela conseguimos percorrer ela toda com o toString.
//2-Vamos encadiar uma função, ele vai executar a função anterior e jogar o resultado para a proxima funcão, que é o "split"
// O "split" separa a nossa string em um arrey, passamos o caracter que quermos encontrar e cada vez que ele encontrar esse caracter
//mas como na nossa string so temos numeros e não queremos separar, entaõ vamos passar ele vazio.
//3- Vamos Ultizar o "map" com ele nos podemos criar um arrey apartir do arrey anterior. o map recebe uma função de calbck que vai percorrer os elementos do arrey, cada retono dessa funçao ele vai criar o novo array.
//4- Vamos coverter o "digit" para numero.
//5- Vamos usar "**" ele é um operador mair moderno. Vamos usar ele para fazer a potenciação.
//6- Vamos usar o "join" para juntar o array. Ele converte o array devolta para a string
//7- Agora temos que comverter novamento a string para numero com o construtor "Number"
function square(num) {
  const digitsArray = num.toString().split("");
  const squareArray = digitsArray.map((digit) => Number(digit) ** 2).join("");

  return Number(squareArray);
}
console.log(square(3514));
console.log(square(94571));
console.log(square(24));
console.log(square(755821698));
