/*
Given an integer n, return whether it is equal to the 
sum of its own digits raised to the power of the number of digits.

*/

let n = 153;

function narcissistic(n) {
  let exponent = n.toString().length;
  const arr = n.toString().split("");
  let sum = 0;

  for (let i = 0; i < exponent; i++) {
    sum += arr[i] ** exponent;
  }

  return sum === n;
}

narcissistic(n);
