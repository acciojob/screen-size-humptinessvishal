//your JS code here. If required.
window.addEventListener('resize', updateSize);
function updateSize() {
    const width = document.getElementById('width');
    const height = document.getElementById('height');
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    width.textContent = windowWidth + 'px';
    height.textContent = windowHeight + 'px';
}
updateSize();