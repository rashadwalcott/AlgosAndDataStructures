/*
You are given an array of length n + 1 picked from the range 1, 2, ..., n. By the pigeonhole principle,
there must be a duplicate. Find and return it. There is guaranteed to be exactly one duplicate.

Bonus: Can you do this in linear time and constant space?
*/

class Solution {
  solve(nums) {
    // Write your code here
    let result = [];

    nums.forEach((element, index) => {
      if (nums.indexOf(element, index + 1) > -1) {
        if (result.indexOf(element) === -1) {
          result.push(element);
        }
      }
    });

    return parseInt(result);
  }
}
