//algorithms task
/*
Mając dwie liczby całkowite (A i B), znajdź najmniejszą liczbę całkowitą podzielną 
zarówno przez A jak i przez B.
Wykonaj algorytm (opisz go, zrób schemat blokowy, zaimplementuj w JavaScript).
*/

// operator modulo %
function lcm2(a, b) {
    const min = Math.min(a, b);
    const max = Math.max(a, b);

    for (let i = max;; i +=max) {
        if (i % min === 0) {
            return i;
        }
    }
}

function lcm(a, b) {
    let n = 1;
    while (n % a !== 0 || n % b !== 0) {
      n++;
    }
    return n;
  }

//some testing
let x = 9;
let y = 12;
console.log(lcm(x, y));
console.log(lcm2(x,y));