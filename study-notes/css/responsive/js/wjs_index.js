$(function () {
    let items = $('.carousel-inner .item');
    $(window).on('resize', function () {
       let width = $(window).width();
       if (width >= 768) {
            $(items).each(function (index, value) {
                let item = $(this);
                let imgSrc = item.data('largeImage');
                item.html($('<a href="javascript:;" class="pcImg"></a>').css("backgroundImage","url('"+imgSrc+"')"));
            });
        } else  {
            $(items).each(function (index, value) {
                let item = $(this);
                let imgSrc = item.data('smallImage');
                item.html('<a href="javascript:;" class="mobileImg"><img src="' + imgSrc +'" alt="..."></a>');
            });
        }
    }).trigger('resize');
    let startX, endX;
    let carousel_inner = $(".carousel-inner")[0];
    let carousel = $(".carousel");
    carousel_inner.addEventListener("touchstart", function(e) {
        startX = e.targetTouches[0].clientX;
    });
    carousel_inner.addEventListener("touchend", function(e) {
        endX = e.changedTouches[0].clientX;
        if (endX-startX > 0) {
            carousel.carousel('prev');
        }
        else if (endX-startX < 0) {
            carousel.carousel('next');
        }
    });
});