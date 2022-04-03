const canvas = document.querySelector('#canvas');
const context = canvas.getContext('2d');
const arcButton = document.querySelector('#arc');
const lineButton = document.querySelector('#line');

let clicked = false;
let mode = 1;

context.strokeStyle = '#000000';

arcButton.addEventListener('click', () => {
    mode = 2;
});

lineButton.addEventListener('click', () => {
    mode = 1;
});

canvas.addEventListener('click', (event) => {
    clicked = !clicked;
    
    if (mode === 1) {
        drawLine(clicked, event);
    }

    if (mode === 2) {
        drawCircle(clicked, event);
    }


});

function drawLine(clicked, event) {
    if (clicked) {
        context.moveTo(event.offsetX, event.offsetY);
    } else {
        context.lineTo(event.offsetX, event.offsetY);
        context.stroke();
    }
}

function drawCircle(clicked, event) {
    context.beginPath();
    context.arc(event.offsetX, event.offsetY, 100, 0, 2 * Math.PI);
    context.fill();
}

// Triangle
// context.strokeStyle = '#000000';
// context.beginPath();
// context.moveTo(50, 50);
// context.lineTo(350, 350);
// context.lineTo(550, 350);
// context.closePath();
// context.stroke();
// context.fill();

// const size = 100;
// function drawSquares(x, y, n) {


//     for (let i = 0; i < n; i++) {
//         const posX = x + 50 * i;
//         const posY = y + 50 * i;
//         const alpha = 1 - (i * 0.1);

//         context.fillStyle = `rgba(200, 100, 50, ${alpha})`;
//         context.fillRect(posX, posY, size, size);
//     }
// }

// drawSquares(0, 0, 10);

// context.fillStyle = "rgba(255, 0, 0, 0.5)";
// context.beginPath();
// context.arc(200, 200, 100, 0, 2 * Math.PI);
// context.fill();

// context.fillStyle = "rgba(0, 255, 0, 0.5)";
// context.beginPath();
// context.arc(350, 200, 100, 0, 2 * Math.PI);
// context.fill();

// context.fillStyle = "rgba(125, 0, 255, 0.5)";
// context.beginPath();
// context.arc(275, 350, 100, 0, 2 * Math.PI);
// context.fill();

// context.font = `48px Arial`;
// context.textAlign = 'center';
// context.fillText("Kółka", 100, 50);