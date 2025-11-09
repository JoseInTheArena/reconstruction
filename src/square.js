var isSquare = function(n){
  return Number.isInteger(Math.sqrt(n));
}

const [, , n] = process.argv;
console.log(isSquare(Number(n)));