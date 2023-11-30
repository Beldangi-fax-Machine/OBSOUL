const box = document.getElementById("box");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const clearButton = document.getElementById("clear-button");
const saveButton = document.getElementById("save-button");

let isDrawing = false;

function startPosition(e) {
    isDrawing = true;
    draw(e);
}

function endPosition() {
    isDrawing = false;
    ctx.beginPath();
}

function draw(e) {
    if (!isDrawing) return;

    // Calculate cursor/touch position relative to the canvas
    const x = e.clientX - canvas.getBoundingClientRect().left - canvas.offsetLeft;
    const y = e.clientY - canvas.getBoundingClientRect().top - canvas.offsetTop;

    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.strokeStyle = "black";

    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(x, y);
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function saveDrawing() {
    const dataURL = canvas.toDataURL();
    const a = document.createElement("a");
    a.href = dataURL;
    a.download = "TAGZ.png";
    a.click();
}

canvas.addEventListener("mousedown", startPosition);
canvas.addEventListener("mouseup", endPosition);
canvas.addEventListener("mousemove", draw);

canvas.addEventListener("touchstart", (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    startPosition(touch);
});

canvas.addEventListener("touchend", endPosition);
canvas.addEventListener("touchmove", (e) => {
    e.preventDefault();
    const touch = e.touches[0];
    draw(touch);
});

clearButton.addEventListener("click", clearCanvas);
saveButton.addEventListener("click", saveDrawing);
