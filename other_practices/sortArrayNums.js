let nums = [-9, -2, 0, 2, 3];
function sort(nums) {
  const newArr = [];

  for (let i = 0; i < nums.length; i++) {
    newArr.push(nums[i] ** 2);
  }
  return newArr.sort((a, b) => a - b);
}

sort(nums);
