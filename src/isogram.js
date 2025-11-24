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

export function solution(str){
    const lowerStr = str.toLowerCase();
    return new Set(lowerStr).size === lowerStr.length;
}
