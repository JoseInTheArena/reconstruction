
function solution(A, B) {
    let count = 0;
    for (let i = A; i <= B; i++) {
        if (consecutiveFactors(i).length > 0) {
            count++;
        }
    }
    return count;
}

function consecutiveFactors(n) {
  const result = [];
  const factor = Math.floor(Math.sqrt(n))
  let diff = 0;
    if (n % factor === 0) {
        diff = Math.abs((n / factor) - factor); 
        if(diff === 1){
          result.push(factor);
      }
    }
  return result;
}

// Function to find factors of n that differ by 1
// Hopefully faster than the O(n) version
function consecutiveFactorsStillOofN(n) {
  const result = [];
  for (let i = Math.floor(Math.sqrt(n)); i <= n; i++) {
    let diff = 0;
    if (n % i === 0) {
        diff = Math.abs((n / i) - i); 
        if(diff === 1){
          result.push(i);
          break;
      }
    }
  }
  return result;
}

// Alternative version with O(n) complexity 
function consecutiveFactorsOofN(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    let diff = 0;
    if (n % i === 0) {
        diff = Math.abs((n / i) - i); 
        if(diff === 1){
          result.push(i);
      }
    }
  }
  return result;
}

[,, A, B] = process.argv;
const startTime = Date.now();
const result = solution(Number(A), Number(B));
const endTime = Date.now();
const elapsedMs = endTime - startTime;
if (elapsedMs < 1000) {
  console.log(result); // [1, 2, 4, 7, 14, 28]
  console.log(`Completed in ${elapsedMs} ms`);
} else {
  const seconds = (elapsedMs / 1000).toFixed(3);
  console.log(result); // [1, 2, 4, 7, 14, 28]
  console.log(`Completed in ${seconds} seconds`);
}

