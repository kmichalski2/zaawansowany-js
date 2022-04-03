//CANVAS EXERCISES

//we will be ready when whole document is loaded
window.onload = function() {
    
    //initial values to let us start drawing
    var canvas = document.getElementById("c1");
    var context = canvas.getContext("2d");
    
    //Exercise: text
    function boxes(m, n, howmany, size){
        
        let textSize = size / 2.5;
        
        context.font = `${textSize}px Arial`;
        context.textAlign = "center";
        for(let i = 0; i < howmany; i ++) {
            let boxPosition =  n + (1.2 * size * i);
            context.fillStyle = "blue";
            context.fillRect(m, boxPosition, size, size);
            context.fillStyle = "white";
            context.fillText("box " + (i + 1), m + size * 0.5, boxPosition + size * 0.6);
        }
    }
    
    boxes(100, 100, 2, 40);
    boxes(300, 100, 3, 50);
    boxes(500, 100, 4, 60);
    
}