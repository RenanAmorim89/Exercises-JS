//1- Vamos coverter esse numero para uma string, pois nela conseguimos percorrer ela toda com o toString.
//2- Vamos criar uma variavel que vai começar vazia, vai ser acresentado cada resultado das poneciaçoes.
//3- Vamos usar o "for" para percorrer a string
//4- result += isso é result = result + alguma coisa. concatenando de forma abreviada.
//5- Vamos elevar ao quadrado com o "Math.pow" ele recebe 2 parametros
//6- Agora temos que comverter novamento a string para numero com o construtor "Number"
//7- Mas para salar na nossa variavel "result" precisamos comverter novamente para string
//8- Então mais uma vez converter a string para numero no "return"
function square(num) {
  const str = num.toString();
  let result = "";

  for (let i = 0; i < str.length; i++) {
    result += Math.pow(Number(str[i]), 2).toString();
  }

  return Number(result);
}

console.log(square(3514));
console.log(square(94571));
console.log(square(24));
console.log(square(755821698));
