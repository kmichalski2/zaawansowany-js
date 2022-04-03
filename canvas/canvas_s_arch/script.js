//CANVAS EXERCISES

//we will be ready when whole document is loaded
window.onload = function() {
    
    //initial values to let us start drawing
    var canvas = document.getElementById("c1");
    var context = canvas.getContext("2d");
    
    //Task: arch
    context.lineWidth = 10;
    context.strokeStyle = "rgb(255, 0, 0)";
    context.beginPath();
    context.arc(300,300,150,0,Math.PI,true);
    context.stroke();
    context.strokeStyle = "rgb(0, 255, 0)";
    context.beginPath();
    context.arc(300,300,140,Math.PI * 0.5, Math.PI * 1.5,true);
    context.stroke();
    context.strokeStyle = "rgb(0, 0, 255)";
    context.beginPath();
    context.arc(300,300,130, Math.PI, Math.PI * 2,true);
    context.stroke();
    context.strokeStyle = "rgb(255, 255, 0)";
    context.beginPath();
    context.arc(300,300,120, Math.PI * 1.5, Math.PI * 0.5,true);
    context.stroke();
    
}