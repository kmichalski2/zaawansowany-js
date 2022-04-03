//CANVAS EXERCISES

//we will be ready when whole document is loaded
window.onload = function() {
    
    //initial values to let us start drawing
    var canvas = document.getElementById("c1");
    var context = canvas.getContext("2d");

    
    //Exercise: loop
    var size = 40;
    var startX = 200;
    var startY = 100;
    var x = startX;
    var y = startY;
    
    for(let i = 1; i <= 5; i ++) {
        for(let j = 1; j <= 5; j ++) {
            
            let red = 100 + 20 * i;
            let blue = 100 + 20 * j;
            let green = 10;
            let alpha = 2 / (j + i);
            let style = `rgba(${red},${green},${blue},${alpha})`;
            
            context.fillStyle = style;
            context.fillRect(x, y, size, size);  
            x += (size * 1.5);
        }
        y += (size * 1.5);
        x = startX;
    }
    
    
    
}