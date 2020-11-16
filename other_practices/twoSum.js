/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1]

*/

//First solution
var twoSum = function(nums, target) {
  
    const ht = {}
    for( let i = 0; i < nums.length; i++){
        const num = nums[i]
        const want = target - num
        if(want in ht){
            const leftIndex = ht[want]
            return [leftIndex, i]
        }else {
            ht[num] = i
        }
    }
 };


//Second solution
var twoSum = function(nums, target) {
  
    for(let i = 0; i < nums.length; i++){
        constnum = nums[i]
        const want = target - num
        for(let j = i+1; i < nums.length; j ++){
            if(nums[j] === want) return [i,j]
        }
    }
};