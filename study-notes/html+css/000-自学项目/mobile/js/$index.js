$(function () {
    let banner = $('.jd_banner');
    let bannerWidth = banner.width();
    let imgBox = banner.find('ul:first-of-type');
    let indicators = banner.find('ul:eq(1)').find("li");
    console.log(indicators);
    let first = imgBox.find('li:first-of-type');
    let last = imgBox.find('li:last-of-type');
    imgBox.append(first.clone());
    last.clone().insertBefore(first);
    let lis = imgBox.find('li');
    let count = lis.length;
    imgBox.width(count * bannerWidth);
    lis.each(function (index, value) {
        $(lis[index]).width(bannerWidth);
    });
    imgBox.css('left', -bannerWidth);
    let index = 1;
    let imgAnimation = function() {
        imgBox.animate({
            'left': -index * bannerWidth
        }, 200, 'ease-in-out', function () {
            if (index === count - 1) {
                index = 1;
                imgBox.css('left', -index * bannerWidth);
            } else  if (index === 0) {
                index = count - 2;
                imgBox.css('left', -index * bannerWidth);
            }
            indicators.removeClass('active').eq(index - 1).addClass('active');
        });
    };
    let timerId = setInterval(function () {
        index++;
        imgAnimation()
    }, 2000);
    imgBox.on('swipeLeft', function () {
        clearInterval(timerId);
        index++;
        imgAnimation();
    });
    imgBox.on('swipeRight', function () {
        clearInterval(timerId);
        index--;
        imgAnimation();
    });
});