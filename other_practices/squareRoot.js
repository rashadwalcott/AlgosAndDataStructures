// Create a Function that takes one parameter and returns its square root rounded to 5 decimal places. 
//You are not allowed to use the Math.sqrt() or the Math.pow() methods.

function squareRoot(num) {
    let square = 1, i=0;
    while (true){
        i = i + 1;
        square = (num / square + square) / 2;
        if ( i == num + 1) {break;}
    }
    return parseFloat(square.toFixed(5));
 }