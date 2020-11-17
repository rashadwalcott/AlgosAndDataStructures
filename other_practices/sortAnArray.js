/*
Given an array of integers nums, sort the array in ascending order.

 

Example 1:

Input: nums = [5,2,3,1]
Output: [1,2,3,5]
*/

//Solution
var sortArray = function(nums) {
    return mergeSort(nums)
};

var mergeSort = function(nums){
    if(nums.length <= 1) return nums
    let mid = Math.floor(nums.length/2)
    let left = nums.slice(0, mid)
    let right = nums.slice(mid)
    
   left =  mergeSort(left)
   right =  mergeSort(right)
    
    let block = []
    let l = 0
    let r = 0
    
    while(l < left.length && r < right.length){
        if(left[l] < right[r]){
            block.push(left[l])
            l++
        }else {
            block.push(right[r])
            r++
        }
    }
    
    if(l < left.length){
        block = block.concat(left.slice(l))
        
    }else if(r < right.length){
        block = block.concat(right.slice(r))
    }
    return block
}