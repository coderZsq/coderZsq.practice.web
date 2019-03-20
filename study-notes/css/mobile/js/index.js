window.onload = function () {
    searchEffect();
    timeBack();
    bannerEffect();
};


function searchEffect() {
    let banner = document.querySelector('.jd_banner');
    let bannerHeight = banner.offsetHeight;
    let search = document.querySelector('.jd_search');
    window.onscroll = function () {
        let offsetTop = document.documentElement.scrollTop || document.body.scrollTop;
        let opacity = 0;
        if (opacity < bannerHeight) {
            opacity = offsetTop / bannerHeight;
            search.style.backgroundColor = 'rgba(233, 35, 34,'+ opacity +')';
        }
    }
}


function timeBack() {
    let spans = document.querySelector('.jd_sk_time').querySelectorAll('span');
    let totalTime = 3700;
    let timerId = setInterval(function () {
        totalTime--;
        if (totalTime < 0) {
            clearInterval(timerId);
            return;
        }
        let hour = Math.floor(totalTime / 3600);
        let minute = Math.floor(totalTime % 3600 / 60);
        let second = Math.floor(totalTime % 60);
        spans[0].innerHTML = Math.floor(hour / 10);
        spans[1].innerHTML = Math.floor(hour % 10);
        spans[3].innerHTML = Math.floor(minute / 10);
        spans[4].innerHTML = Math.floor(minute % 10);
        spans[6].innerHTML = Math.floor(second / 10);
        spans[7].innerHTML = Math.floor(second % 10);
    }, 1000);
}


function bannerEffect() {
    let banner = document.querySelector('.jd_banner');
    let imgBox = banner.querySelector('ul:first-of-type');
    let first = imgBox.querySelector('li:first-of-type');
    let last = imgBox.querySelector('li:last-of-type');
    imgBox.appendChild(first.cloneNode(true));
    imgBox.insertBefore(last.cloneNode(true), imgBox.firstChild);
    let lis = imgBox.querySelectorAll('li');
    let count = lis.length;
    let bannerWidth = banner.offsetWidth;
    imgBox.style.width = count * bannerWidth + 'px';
    for (let i = 0; i < lis.length; i++) {
        lis[i].style.width = bannerWidth + 'px';
    }
    let index = 1;
    imgBox.style.left = -bannerWidth + 'px';
    window.onresize = function () {
        bannerWidth = banner.offsetWidth;
        imgBox.style.width = count * bannerWidth + 'px';
        for (let i = 0; i < lis.length; i++) {
            lis[i].style.width = bannerWidth + 'px';
        }
        imgBox.style.left = -index * bannerWidth + 'px';
    };
    let setIndicator = function(index) {
        let indicators = banner.querySelector('ul:last-of-type').querySelectorAll('li');
        for (let i = 0; i < indicators.length; i++) {
            indicators[i].classList.remove('active');
        }
        indicators[index - 1].classList.add('active');
    };
    let timerId;
    let startTime = function() {
        timerId = setInterval(function () {
            index++;
            imgBox.style.transition = 'left 0.5s ease-in-out';
            imgBox.style.left = (-index * bannerWidth) + 'px';
            setTimeout(function () {
                if (index === count - 1) {
                    index = 1;
                    imgBox.style.transition = 'none';
                    imgBox.style.left = (-index * bannerWidth) + 'px';
                }
            }, 500);
        }, 2000);
    };
    startTime();
    let startX, moveX, distanceX;
    let isEnd = true;
    imgBox.addEventListener('touchstart', function (e) {
        clearInterval(timerId);
        startX = e.targetTouches[0].clientX;
    });
    imgBox.addEventListener('touchmove', function (e) {
        if (isEnd === true) {
            moveX = e.targetTouches[0].clientX;
            distanceX = moveX - startX;
            imgBox.style.transition = 'none';
            imgBox.style.left = (-index * bannerWidth + distanceX) + 'px';
        }
    });
    imgBox.addEventListener("touchend",function(e){
        isEnd = false;
        if (Math.abs(distanceX) > 100) {
            if(distanceX > 0){
                index--;
            }
            else{
                index++;
            }
            imgBox.style.transition = "left 0.5s ease-in-out";
            imgBox.style.left = -index * bannerWidth + "px";
        }
        else if (Math.abs(distanceX) > 0) {
            imgBox.style.transition ="left 0.5s ease-in-out";
            imgBox.style.left = -index * bannerWidth + "px";
        }
        startX = 0;
        moveX = 0;
        distanceX = 0;
    });
    imgBox.addEventListener('webkitTransitionEnd', function () {
        if (index === count - 1) {
            index = 1;
            imgBox.style.transition = 'none';
            imgBox.style.left = -index * bannerWidth + 'px';
        } else if (index === 0) {
            index = count - 2;
            imgBox.style.transition = 'none';
            imgBox.style.left = -index * bannerWidth + 'px';
        }
        setIndicator(index);
        setTimeout(function(){
            isEnd=true;
            clearInterval(timerId);
            startTime();
        },500);
    });
}