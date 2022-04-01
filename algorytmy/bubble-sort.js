function swap(arr, indexA, indexB) {
    const temp = arr[indexA];
    arr[indexA] = arr[indexB];
    arr[indexB] = temp;
}

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j =0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
            }
        }
    }

    return arr;
}

const tab = [1, 3, 2, 5, 4] // 1, 2, 3, 4, 5

console.log(bubbleSort(tab));