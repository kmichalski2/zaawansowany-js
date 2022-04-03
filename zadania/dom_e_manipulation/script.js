//Simple DOM manipulation
window.onload = function(){
    
    //connecting to DOM elements with querySelector
    var button1 = document.querySelector("#button1");
    var button2 = document.querySelector("#button2");
    var button3 = document.querySelector("#button3");
    
    //function triggered when button is clicked
    button1.onclick = function(){
        
        //change color of a div
        var div = document.querySelector("#div1");
        div.style.backgroundColor = ("#EEEEAA");
        
    }
    
    //function triggered when button is clicked
    button2.onclick = function(){
        
        //removing a div
        var body = document.querySelector("body");
        var div = document.querySelector("#div2");
        body.removeChild(div);
        
    }
    
    //function triggered when button is clicked
    button3.onclick = function(){
        
        //creating new div
        var body = document.querySelector("body");
        var div = document.createElement("div");
        
        //giving div a text + some extra properties
        div.innerText = "new div!";
        div.style.backgroundColor = "#AAAAEE";
        
        //adding div to DOM as a next child
        body.appendChild(div);
        
    }
}