$(function () {
    setTimeout(function () {
        $('.section1').addClass('comein');
    }, 200);
    $('#fullpage').fullpage({
        navigation: true,
        loopBottom: true,
        onLeave: function (index, nextIndex, direction) {
            if (nextIndex !== 1) {
                $('#bg').addClass('rotate');
            } else {
                $('#bg').removeClass('rotate');
            }
            if (nextIndex === 2) {
                $('.p2').css('transform', 'translateX(-50%) translateY(-50%) translateZ(0px) scale(1)');
            } else  {
                $('.p2').css('transform', 'translateX(-50%) translateY(-50%) translateZ(2000px) scale(1)');
            }
            if (nextIndex === 3) {
                $('.p3').css('transform', 'translateZ(-50px) rotateX(30deg)');
                $('.title3').css('transform', 'translateZ(0px) rotateY(0deg)');
            }
            if (nextIndex === 4) {
                $('.p3').css('transform', 'translateZ(-200px) rotateX(-45deg) translateX(3000px)');
                $('.title3').css('transform', 'translateZ(1200px) rotateY(-60deg)');
            }
        }
    });
});