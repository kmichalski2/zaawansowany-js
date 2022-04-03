//CANVAS EXERCISES

//we will be ready when whole document is loaded
window.onload = function() {
    
    //initial values to let us start drawing
    var canvas = document.getElementById("c1");
    var context = canvas.getContext("2d");
    
    //Task: parametrized
    function triangle(x, y, a, h, color){
        context.fillStyle = color;
        context.beginPath();
        context.moveTo(x, y);
        context.lineTo(x + a, y);
        context.lineTo(x + (a / 2), y + h);
        context.fill();
        
    }
    
    triangle(100, 100, 100, 200, "red");
    triangle(500, 100, 100, 200, "magenta");
    triangle(325, 300, 50, -50, "black");
    
}