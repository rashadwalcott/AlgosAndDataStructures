// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

//   One solution
function reverse(str) {
  const arr = str.split("");
  arr.reverse();
  return arr.join("");

  // Cleanup Code for first solution
  return str.split("").reverse().join("");
}

module.exports = reverse;

// //Second Solution
// function reverse(str) {
// let reversed = '';
//
// for(let character of str){
//   reversed = character + reversed;
// }
// return reversed;
// }

// //Third Solution
// function reverse(str) {

//     return str.split('').reduce((rev, char) => char + rev,'');
//     }
