// Recuperation du contexte
let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const resolution = 10;
canvas.width = 700;
canvas.height = 700;
const COLONNES = canvas.width / resolution;
const LIGNES = canvas.height / resolution;

// Variables
let isMouseDown = false;
let couleur = "black";
let grosseur = document.getElementById("myRange").value;

ctx.beginPath();
ctx.rect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "white";
ctx.fill();

canvas.addEventListener('mousedown', function () { mousedown(canvas, event); });
canvas.addEventListener('mousemove', function () { mousemove(canvas, event); });
canvas.addEventListener('mouseup', mouseup);
document.getElementById("resetCanvas").addEventListener("click", function () {
    clearCanvas();
});

document.getElementById("myRange").addEventListener("click", function () {
    grosseur = document.getElementById("myRange").value;
});

document.getElementById("color").addEventListener("change", function () {
    couleur = document.getElementById("color").value;
});

document.getElementById("gomme").addEventListener("click", function () {
    couleur = "white";
});

document.getElementById("crayon").addEventListener("click", function () {
    couleur = document.getElementById("color").value;
});


// Lorsque le clique souris est en bas
function mousedown(canvas, evt) {
    var mousePos = getMousePos(canvas, evt);
    isMouseDown = true
    var currentPosition = getMousePos(canvas, evt);
    ctx.moveTo(currentPosition.x, currentPosition.y)
    ctx.beginPath();
    ctx.lineWidth = grosseur;
    ctx.lineCap = "round";
    ctx.strokeStyle = couleur;
}

// Lorsque l'on bouge la souris, 
function mousemove(canvas, evt) {
    if (isMouseDown) {
        var currentPosition = getMousePos(canvas, evt);
        ctx.lineTo(currentPosition.x, currentPosition.y)
        ctx.stroke();
    }
}

// Recuperer la position de la souris
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function mouseup() {
    isMouseDown = false
}

function clearCanvas() {
    ctx.beginPath();
    ctx.rect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.fill();
}