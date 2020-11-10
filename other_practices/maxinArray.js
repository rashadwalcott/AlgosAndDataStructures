//Find the max in an array using reduce

let arr = [25, 10, 15, 45, 32]

function arrayMax (arr){
    return arr.reduce(function(a, b) {
        console.log(a)
        return ( a > b ? a : b )
    })
}

arrayMax(arr)
