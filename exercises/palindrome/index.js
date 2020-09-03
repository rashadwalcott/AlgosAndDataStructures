// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//First Solution
function palindrome(str) {
  const rev = str.split("").reverse().join("");

  return str === rev;
}
module.exports = palindrome;

//Best Solution
// function palindrome(s) {
//   let lastElement = s.length - 1;

//   for (let i = 0; i < s.length; i++) {
//     if (s[i] !== s[lastElement]) {
//       return false;
//     }
//     lastElement--;
//   }
//   return true;
// }

// //Second Solution
// function palindrome(str) {
//   return str.split("").every((char, index) => {
//     return char === str[str.length - index - 1];
//   });
// }
