/**
 * 
 * Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
 * 
 * Examples:
 
 * Inputs: "abc", "bc"
 * Output: true

 * Inputs: "abc", "d"
 * Output: false
 * 
 */

function solution(str, ending){  
    return str.endsWith(ending)
}

// Alternative solution that users str.slice
function solution2(str, ending){  
    const endingLength = ending.length;
    return str.slice(-endingLength) === ending;
}

// Alternative solution using str.includes
function solution3(str, ending){  
    const endingLength = ending.length;
    return str.includes(ending, endingLength -1 );
}

// Get command line arguments
const [,, str, ending] = process.argv;

if (!str || !ending) {
    console.error('Please provide both string and ending arguments');
    console.error('Usage: node ending.js <string> <ending>');
    process.exit(1);
}

// Run the solution and print the result
const result = solution3(str, ending);
console.log(result);
