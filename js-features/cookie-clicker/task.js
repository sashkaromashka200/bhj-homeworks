const cookie = document.getElementById('cookie');
const counterElement = document.getElementById('clicker__counter');

let clickCount = 0;
let lastClickTime = null;

cookie.addEventListener('click', function() {
    clickCount++;
    counterElement.textContent = clickCount;
    
    if (cookie.width === 200) {
        cookie.width = 180;
    } else {
        cookie.width = 200;
    }
});