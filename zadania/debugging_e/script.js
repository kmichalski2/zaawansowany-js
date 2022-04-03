//DEBUGGING exercise

//finding n-th power of x
function power(x, n) {
    var result = x;
    for(let i = 0; i < n - 1; i++) {
        result *= x;
    }
    return result;
}

debugger;

var p = power(2, 3);

//displays: 256, should be 8
console.log(p);