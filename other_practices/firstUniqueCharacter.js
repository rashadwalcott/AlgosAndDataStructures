/*
Given a string, find the first non-repeating character in it and return its index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode"
return 2.

*/


//One solution using hashtables
var firstUniqChar = function(s) {
    const hashTable = {}
    
    for( let char of s){
        if( hashTable[char]) hashTable[char]++
        else hashTable[char] = 1
    }
    
    for( let i = 0; i < s.length; i++){
        const char = s[i]
        if(hashTable[char] === 1) return i
    }
    
    return -1
};

//Second Solution using indexOf
var firstUniqChar = function(s) {
    for (let i = 0; i < s.length; i++){
        const char = s[i]
        
        if(s.indexOf(char) === s.lastIndexOf(char)){
            return i
        }
    }
     
     return -1
 };