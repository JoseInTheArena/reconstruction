// Given a string `s` find the length of the longest substring without repeating characters.
// Examples:

// 1. Given s = "abcabcbb", the answer is "abc", which the length is 3.
// 2. Given s = "bbbbb", the answer is "b", with the length of 1.
// 3. Given s = "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.


export function solution(s) {
    let longest = 0, left = 0, right = 0, window = 0;
    const set = new Set();
    for (let char of s){
        while (set.has(char)){
            set.delete(s[left]);
            left++
        }
        window = right - left + 1;
        longest = Math.max(longest, window);
        set.add(char);
        right++;
    }
    return longest;
}