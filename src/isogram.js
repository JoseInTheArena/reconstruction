/**
 * Description:
 * An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
 * 
 * Example: (Input --> Output)

 * "Dermatoglyphics" --> true
 * "aba" --> false
 * "moOse" --> false (ignore letter case)
 * 
 */

function isIsogram(str){
    const map = new Map();
    for (let char of str.toLowerCase()) {
        if (map.has(char)) {
            return false;
        }
        map.set(char, true);
    }
    return true;
}

function isIsogram2(str){
    const lowerStr = str.toLowerCase();
    return new Set(lowerStr).size === lowerStr.length;
}

// Get command line arguments
const [,, str] = process.argv;

if (!str) {
    console.error('Please provide a string argument');
    console.error('Usage: node ending.js <string>');
    process.exit(1);
}

// Run the solution and print the result
const result = isIsogram2(str);
console.log(result);
