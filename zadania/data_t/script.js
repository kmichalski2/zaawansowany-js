//data structures exercise

/*
Wykonaj kolejkę obiektów reprezentujących samochody 
(na przykład kolejkę do jakiegoś serwisu).
Każdy samochód powinien mieć markę, model, numer rejestracyjny.
Kolejka powinna być klasą, z metodami do dodania samochodu na koniec 
kolejki i pobrania go z początku kolejki.
*/


class Element{
    
    //constructor for Element
    constructor(brand, model, number) {
        this.brand = brand;
        this.model = model;
        this.number = number;
    }

    toString() {
        return `${this.brand} ${this.model}, ${this.number}`;
    }
    
}

class Queue {
    
    //constructor for Queue
    constructor() {
        this.elements = [];
    }

    add(element) {
        this.elements.push(element);
    }

    get() {
        return this.elements.shift();
    }

    //TODO queue methods
    
}

//let's try if it works
var p1 = new Element("Ford", "Fiesta", "111");
var p2 = new Element("Nissan", "Almera", "222");
var p3 = new Element("Opel", "Insignia", "333");

var q = new Queue();

q.add(p1);
q.add(p2);
q.add(p3);

const firstElement = q.get();

console.log(firstElement.toString()); //should return Ford Fiesta and remove it from the beginning...








