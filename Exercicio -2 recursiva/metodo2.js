// Podemos reduzir o tamanho do código ao remover as chaves do ifs mais simples e utilizar o
// operador ternário:

function recursiveChunks(num) {
  if (num === 0) return "";
  return num === 1 ? "chunk" : "chunk-" + recursiveChunks(num - 1);
}
console.log(recursiveChunks(4));
console.log(recursiveChunks(1));
console.log(recursiveChunks(8));
console.log(recursiveChunks(2));
