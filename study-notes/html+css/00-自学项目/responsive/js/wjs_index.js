$(function () {
    $('[data-toggle="tooltip"]').tooltip();
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
    let ul = $('.wjs_product .nav-tabs');
    let lis = ul.find('li');
    let totalWidth = 0;
    lis.each(function (index, value) {
       totalWidth = totalWidth + $(value).innerWidth();
    });
    ul.width(totalWidth);
    let myScroll = new IScroll('.tab_parent', {
        scrollX: true,
        scrollY: false
    });
});