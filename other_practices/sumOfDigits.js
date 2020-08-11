//Given a positive integer num, return the sum of its digits.

//Bonus: Can you do it without using strings?

class Solution {
  solve(num) {
    // Write your code here
    let numbers = [];
    while (num > 0) {
      numbers.push(num % 10);
      num = parseInt(num / 10);
    }
    const addNumbers = numbers.reduce((a, b) => a + b, 0);
    return addNumbers;
  }
}
