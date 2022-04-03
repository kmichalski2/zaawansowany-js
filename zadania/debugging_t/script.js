//DEBUGGING task

//Fibonacci sequence
function fibo(n) {
    var a = 0; // F(0)
    var b = 1; // F(1)
    var f = [a, b]; // [0, 1]
    var c = 0;

    // F(3) = F(n-1) + F(n-2) => F(i-1) + F(i-2) =
    // F(3) = F(2) + F(1) = 1 + 1 = 2
    
    //every element of the sequence is the sum of two previous ones
    for(let i = 2; i < n; i++) {
        c = f[i - 1] + f[i - 2];
        f.push(c);
    }
    return f;
}

// Napisz funkcję, która zwróci wartość ciągu fibonacciego
// dla n = 5 => 5 , dla n = 7 => 13
function fibonacci(n) {
    if (n === 0) {
        return 0;
    }

    if (n === 1) {
        return 1;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}



var f = fibo(10);

//displays: [ 0, 1, 1, 1, 1, 1, 1, 1, 1, 1 ]
//should be: [ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]
console.log(f);