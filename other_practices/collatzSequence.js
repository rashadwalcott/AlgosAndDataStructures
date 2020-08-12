/*
Given a positve integer n, find the length of its Collatz sequence. Collatz sequence is generated sequentially where

n = n / 2 if n is even
n = 3 * n + 1 if n is odd
And the sequence ends if n = 1

*/

function collatzSequence(n) {
  const result = [];

  result.push(n);
  while (n !== 1) {
    if (n % 2 === 0) {
      n = n / 2;
      result.push(n);
    } else if (n % 2 !== 0) {
      n = 3 * n + 1;
      result.push(n);
    }
  }
  console.log(result.length);
}
