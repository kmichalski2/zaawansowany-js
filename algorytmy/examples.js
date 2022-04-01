function power(a, b) {
    let x = 1;

    while(x < b) {
        a *= a;
        x++;
    }

    return a;
}

console.log(Math.pow(2,3));