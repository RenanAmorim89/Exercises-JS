function squareDigits(num) {
  const digitsArray = num.toString().split("");
  return Number(digitsArray.map((number) => number ** 2).join(""));
}
console.log(square(3514));
console.log(square(94571));
console.log(square(24));
console.log(square(755821698));
