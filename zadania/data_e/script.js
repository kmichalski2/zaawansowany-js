//data structures exercise

class Element{
    
    //constructor for Element
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    
}

class Stack{
    
    //constructor for Stack
    constructor() {
        //initializes an empty stack with zero elements
        this.items = [];
        this.count = 0;
    }

    //adding an element to the top of the stack
    push(item) {
        this.items.push(item);
        this.count = this.count + 1;
    }

    //removing and returning an element from the top
    pop() {
    if(this.count > 0) {
      this.count = this.count - 1;
    }

    return this.items.pop();
    }

    //viewing an element on top
    view() {
    return this.items.slice(-1)[0];
    }
    
}

//let's try if it works
var p1 = new Element("First", "Test");
var p2 = new Element("Second", "Test");
var p3 = new Element("Third", "Test");

var s = new Stack();

s.push(p1);
s.push(p2);
console.log(s.view()); //currently, Second Test is on top

s.push(p3);
console.log(s.pop()); //we return Third Test and we remove it from the top...
console.log(s.view()); //...which means Second Test is now on top









/*

Zaimplementuj stos ludzkich imion w JavaScript. 
Niech to będzie klasa, która pozwala na dokładanie elementów na wierzchołek stosu.
Powinna też pozwalać na usuwanie i zwracanie elementów z wierzchołka stosu.

Pojedynczy element powinien być obiektem, składającym się z imienia i nazwiska.
 Elementy mogą być wewnątrz stosu przechowywane w tablicy. */

 class Person {
     constructor(firstName, lastName) {
         this.firstName = firstName;
         this.lastName = lastName;
     }
 }

 class Stack {
     constructor() {
         this.elements = [];
     }

     add(element) {
         this.elements.push(element);
     }

     get() {
        return this.elements.pop();
     }
 }

 class SelectedList {
     constructor() {
         this.elements = [];
         this.selected = null;
     }

     select(element) {
         this.selected = element;
     }

     getSelectedItem() {
         return this.elements.find(e => e.id === this.selected);
     }

     isSelected(element) {
         return this.selected.id === element.id;
     }
 }