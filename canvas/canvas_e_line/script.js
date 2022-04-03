//CANVAS EXERCISES

//we will be ready when whole document is loaded
window.onload = function() {
    
    //initial values to let us start drawing
    var canvas = document.getElementById("c1");
    var context = canvas.getContext("2d");

    //Exercise: line
    context.strokeStyle = "#33DD33";
    context.beginPath();
    context.moveTo(100, 100);
    context.lineTo(200, 400);
    context.lineTo(300, 100);
    context.closePath();
    context.stroke();

    //shape
    context.strokeStyle = "#3333DD";
    context.beginPath();
    context.moveTo(300, 100);
    context.lineTo(400, 400);
    context.lineTo(500, 100);
    context.fill();

    
}