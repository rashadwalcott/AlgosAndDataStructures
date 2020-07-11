//I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements.
//I'll appreciate for your help.

//P.S. Each array includes only integer numbers. Output is a number too

function arrayPlusArray(arr1, arr2) {
  const arrSum = (arr) => arr.reduce((a, b) => a + b, 0);

  return arrSum(arr1) + arrSum(arr2); //something went wrong
}
