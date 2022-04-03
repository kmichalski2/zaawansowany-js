//regexp task

// function findWords(text) {
//     let pattern = /\b\w{1,3}\b/g;
    
//     return text.match(pattern);
// }

// function removeWords(text) {
//     let pattern = /\b\w{1,3}\b/g;
    
//     return text.replace(pattern, "");
// }

/*
Napisz funkcję która znajdzie wszystkie słowa krótsze niż 4 litery w podanym tekście.
Zmodyfikuj funkcję tak aby usuwała wszystkie znalezione słowa z tekstu.
*/

let string = "This 1234 is the sample sentence for RegExp testing.";

function findWords(text) {
    const pattern  = /\b[a-z]{1,3}\b/g;

    return text.match(pattern);
}

console.log(findWords(string));
// // is the for

function removeWords(text) {
    const pattern  = /\b[a-z]{1,3}\b/g;

    return text.replace(pattern, '');
}

console.log(removeWords(string));
// "This 1234 sample sentence RegExp testing.";