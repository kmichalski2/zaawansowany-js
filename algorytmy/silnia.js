function calculate(x) {
    let score = 1;

    while(x > 1) {
        score = score * x;
        x = x - 1;
    }

    return score;
}

// 1! => 1
// 0! => 1
// 3! => 3 * 2 * 1 => x * (x - 1) * (x - 2)
// 3! => 3 * 2! => 3 * (x - 1)!

function factorial(x) {
    if (x <= 1) {
        return 1;
    }

    return x * factorial(x - 1);
}

// factorial(3) return => factorial(x - 1) -> factorial(2)

// Zaimplementuj algorytm silni za pomocą rekurencji


console.log(calculate(1)); // 1
console.log(calculate(0)); // 1
console.log(calculate(4)); // 24
console.log(calculate(5)); // 120
console.log(calculate(6));