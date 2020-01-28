// Complete the function scramble(str1, str2) that returns true if a portion of str1 
//characters can be rearranged to match str2, otherwise returns false.

function scramble(str1, str2) {
    //code me
    return str2.split('').every(function(char){
           return str1.includes(char)
       })
   }