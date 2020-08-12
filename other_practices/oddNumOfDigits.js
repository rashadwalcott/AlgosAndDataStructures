/*
Given a list of positive integers nums, return the number of integers that have odd number of digits.

Example 1
Input

nums = [1, 800, 2, 10, 3]

*/

let nums = [1, 800, 2, 10, 3];

function oddNumbers(nums) {
  let numCount = [];

  nums.forEach((num) => {
    let numLength = num.toString().length;
    if (numLength % 2 !== 0) {
      numCount.push(num);
    }
  });
  return numCount.length;
}

oddNumbers(nums);
