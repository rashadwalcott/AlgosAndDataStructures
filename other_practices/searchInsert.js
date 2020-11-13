/*
Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

 

Example 1:

Input: nums = [1,3,5,6], target = 5
Output: 2
Example 2:

Input: nums = [1,3,5,6], target = 2
Output: 1

*/


//One Solution
var searchInsert = function(nums, target) {
    
    let lo = 0;
    let hi = nums.length - 1
    
    while( lo <= hi){
        let mid = Math.floor((hi + lo) / 2)
        let midVal = nums[mid]
        if (target === midVal){
            return mid;
        } else if (target > midVal){
            lo = mid + 1
        } else {
            hi = mid - 1
        }
    }
    return lo
};