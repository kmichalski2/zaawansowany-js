//CANVAS EXERCISES

//we will be ready when whole document is loaded
window.onload = function() {
    
    //initial values to let us start drawing
    var canvas = document.getElementById("c1");
    var context = canvas.getContext("2d");

    let size = 150;

    //Exercise: rectangle
    context.fillStyle = "rgba(200, 100, 50, 0.7)";
    context.fillRect(200, 100, size, size);
    context.fillStyle = "rgba(200, 100, 50, 0.5)";
    context.fillRect(200 + size * 0.4, 100 + size * 0.4, size, size);
    context.fillStyle = "rgba(200, 100, 50, 0.3)";
    context.fillRect(200 + size * 0.8, 100 + size * 0.8, size, size);
    context.fillStyle = "rgba(200, 100, 50, 0.1)";
    context.fillRect(200 + size * 1.2, 100 + size * 1.2, size, size);

    
}