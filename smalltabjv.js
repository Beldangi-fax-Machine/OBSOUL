let isDragging = false;
let offsetX, offsetY;

const resizableBox = document.getElementById('resizableBox');
const topBar = document.querySelector('.top-bar');

topBar.addEventListener('mousedown', (e) => {
    isDragging = true;
    offsetX = e.clientX - resizableBox.getBoundingClientRect().left;
    offsetY = e.clientY - resizableBox.getBoundingClientRect().top;
});

document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    resizableBox.style.left = e.clientX - offsetX + 'px';
    resizableBox.style.top = e.clientY - offsetY + 'px';
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

function closeBox() {
    resizableBox.style.display = 'none';
}

function hideBox() {
    resizableBox.classList.toggle('hidden');
}
