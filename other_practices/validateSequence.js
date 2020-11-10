
//Given two non empty arrays, write a function that determines whether the second array is a subsequenceof the first one. 
//For instance, the numbers [1, 3, 4] are a subsequence of [1,2,3,4]. Note that a single number in an array and the array itself are both validsubsequences of the array.


function isValidSubsequence(array, sequence) {
    // Write your code here.
      let seqIdx = 0
      for (const value of array){
          if(seqIdx === sequence.length) break;
          if(sequence[seqIdx] === value ) seqIdx++
      }
      return seqIdx === sequence.length
  }