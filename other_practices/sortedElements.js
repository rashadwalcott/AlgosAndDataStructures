/*
Give a list of numbers nums, 
return the number of elements that are in the correct indices,
 if the list were to be sorted.

 Example 1
Input

nums = [1, 7, 3, 4, 10]
Output

2
Explanation

Comparing nums and its sorted version we find that elements 1 and 10 are in their correct positions.

[1, 7, 3, 4, 10]
[1, 3, 4, 7, 10]

*/

function sortedElements(nums) {
  let copyArr = [...nums];
  let sortArr = copyArr.sort((a, b) => a - b);
  let myCount = 0;

  for (let i = 0; i < copyArr.length; i++) {
    if (nums[i] === sortArr[i]) {
      myCount++;
    }
  }

  return myCount;
}

sortedElements([1, 7, 3, 4, 10]);
