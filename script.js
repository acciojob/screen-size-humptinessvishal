//your JS code here. If required.
window.addEventListener('resize', updateSize);
function updateSize() {
    var div = document.getElementById("sizeInfo");
    var h1 = div.firstChild;
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    h1.textContent = `Width : ${windowWidth} and Height : ${windowHeight}`;
}
updateSize();