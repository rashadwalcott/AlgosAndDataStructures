/*
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Follow up: Could you solve it without converting the integer to a string?

 

Example 1:

Input: x = 121
Output: true
*/

//Solution

var isPalindrome = function(x) {
    
    if( x < 0) return false
    if(x < 10) return true
    x = x+''
    let right = x.length - 1
     for(let i = 0; i < x.length; i++){
            if(x[i] !== x[right]){
                return false

            }
            right--
        }
        return true
};