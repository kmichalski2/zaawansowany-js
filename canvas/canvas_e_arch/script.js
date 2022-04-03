//CANVAS EXERCISES

//we will be ready when whole document is loaded
window.onload = function() {
    
    //initial values to let us start drawing
    var canvas = document.getElementById("c1");
    var context = canvas.getContext("2d");

    //Exercise: arch
    context.fillStyle = "rgba(255, 0, 0, 0.5)";
    context.beginPath();
    context.arc(300,200,100,0,Math.PI*2,true);
    context.fill();
    context.fillStyle = "rgba(0, 255, 0, 0.5)";
    context.beginPath();
    context.arc(450,200,100,0,Math.PI*2,true);
    context.fill();
    context.fillStyle = "rgba(0, 0, 255, 0.5)";
    context.beginPath();
    context.arc(375,325,100,0,Math.PI*2,true);
    context.fill();
    
    
}