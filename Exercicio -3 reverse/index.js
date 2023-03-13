// O ponto chave aqui é uma estrutura de repetição básica para iterar sobre uma cópia
// do array original, evitando que ele seja modificado.

// Para resolver basta utilizar uma nova variável para armazenar o array invertido e
// uma estrutura de repetição como o for referenciando o tamanho do array:

function reverse(arr) {
  //criando um novo arrey
  const reversedArray = [];
  //repetição
  for (let i = 0; i < arr.length; i++) {
    reversedArray[i] = arr[arr.length - i - 1];
  }

  return reversedArray;
}
//reversedArray[i] Essa posição vai ficar aumentanto a cada repetição7
console.log(reverse([0, 9, 6, 8, 9, 1, 5, 7]));
console.log(reverse(["Oh", "hi", "mark"]));
console.log(reverse([false, true, true, true]));
console.log(reverse(["it1s", "not", true, 0]));
