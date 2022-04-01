function swap(arr, indexA, indexB) {
    const temp = arr[indexA];
    arr[indexA] = arr[indexB];
    arr[indexB] = temp;
}

function selectionSort(arr) {
    let minIndex;

    for (let i = 0; i < arr.length - 1; i++) {
        minIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }

            swap(arr, minIndex, i);
        }
    }

    return arr;
}

const tab = [1, 3, 2, 5, 4] // 1, 2, 3, 4, 5

console.log(selectionSort(tab));

// O(1) Pobierz pierwszy element tablicy
tab[0] => 2

// Dodaj element do tablicy
tab.push(2) // O(1)

// Znajdz element o wartosci 2 O(n)
// n => ilosc elementow naszego zbioru
n = tab.length;
for (let i = 0; i < n; i++) {
    if (tab[i] === 2) {
        return i;
    }
}