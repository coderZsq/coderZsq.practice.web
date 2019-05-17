let common = {
    tap: function (dom, callback) {
        if (!dom || typeof dom != 'object') {
            return;
        }
        let startTime, startX, startY;
        dom.addEventListener('touchstart', function (e) {
            if (e.targetTouches.length > 1) {
                return;
            }
            startTime = Date.now();
            startX = e.targetTouches[0].clientX;
            startY = e.targetTouches[0].clientY;
        });
        dom.addEventListener('touchend', function (e) {
            if (e.changedTouches.length > 1) {
                return;
            }
            if (Date.now() - startTime > 150) {
                return;
            }
            let endX = e.changedTouches[0].clientX;
            let endY = e.changedTouches[0].clientY;
            if (Math.abs(endX - startX) < 6 && Math.abs(endY - startY) < 6) {
                callback && callback(e);
            }
        });
    }  
};