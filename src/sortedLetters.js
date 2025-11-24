
// Given a word, calculate the smallest number of letters that must be removed in order for the letters of the remaining word to be sorted in lexicographical order. The resulting word need not appear in the dictionary of any particular language.

// Write a function:

// int solution(char *S);

// that, given string S, returns the minimum number of letters that must be removed.

// For example, given "banana" the function should return 3, because we can remove three letters (the 1st, 3rd and 6th) to get the word "aan", which is sorted. Please note that it is not possible to remove fewer than three letters.

// Write an efficient algorithm for the following assumptions:

// the length of string S is within the range [1..100,000];
// string S consists only of lower-case letters (a−z).



export function solution(S) {
    for(let i = 0; i < S.length; i++){
        if (S[i] > S[i + 1]){
            return 1 + solution(S.slice(0, i) + S.slice(i + 1));
        }
    }
    return 0;
}
