/*
If any two numbers in the input array sum up to the target sum, the functionshould return them in an array
, in any order. If no two numbers sum up to the target sum the function should returnan empty array

*/

//Solution 1
function twoNumberSum(array, targetSum) {
    // Write your code here.
      for(let i = 0; i < array.length - 1; i++){
          const firstNum = array[i]
          for(let j = i + 1; j < array.length; j++){
              const secondNum = array[j]
              if(firstNum + secondNum === targetSum){
              return [firstNum, secondNum]
                  
              }
          }
          
      }
      return []
  }

  //Solution 2
  function twoNumberSum(array, targetSum) {
    // Write your code here.
      const nums = {}
      for (const num of array){
          const  potentialMatch = targetSum - num
          if (potentialMatch in nums){
              return [potentialMatch, num]
          }
          else{
              nums[num] = true
          }
      }
      return []
  }

  //Solution 3
  function twoNumberSum(array, targetSum) {
    // Write your code here.
      array.sort((a,b) => a - b)
      let left = 0
      let right = array.length - 1
      while(left < right){
          let currentSum = array[left] + array[right]
          if(currentSum === targetSum){
              return [array[left], array[right]]
          }
          else if(currentSum < targetSum){
              left += 1
          }
          else if (currentSum > targetSum){
              right -= 1
                           
       }
      }
      return []
  }