window.onload = function () {
    let ct_cLeft = document.querySelector('.ct_cLeft');
    let leftHeight = ct_cLeft.offsetHeight;
    let ulBox = ct_cLeft.querySelector('ul:first-of-type');
    let ulBoxHeight = ulBox.offsetHeight;
    let maxTop = 0;
    let minTop = leftHeight - ulBoxHeight;
    let maxBounceTop = maxTop + 100;
    let minBounceTop = minTop - 100;
    let startY = 0;
    let moveY = 0;
    let distanceY = 0;
    let currentY = 0;
    ulBox.addEventListener('touchstart', function (e) {
        startY = e.targetTouches[0].clientY;
    });
    ulBox.addEventListener('touchmove', function (e) {
        moveY = e.targetTouches[0].clientY;
        distanceY = moveY - startY;
        if (currentY + distanceY > maxBounceTop || currentY + distanceY < minBounceTop) {
            return;
        }
        ulBox.style.transition = 'none';
        ulBox.style.top = (currentY +  distanceY) + 'px';
    });
    ulBox.addEventListener('touchend', function () {
        currentY += distanceY;
    });
};