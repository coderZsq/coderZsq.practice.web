$(function () {
   $('#fullpage').fullpage({
       navigation: true,
       // navigationPosition: 'left'
       // loopBottom: true
       scrollSpeed: 1200,
       afterLoad: function (anchorLink, index) {
           if (index === 2) {
                $('.search').show().animate({
                    'right': 370
                }, 1500, function () {
                    $('.search-words').animate({
                        'opacity': 1
                    }, 500, function () {
                        $('.search').hide();
                        $('.search-02-1').show().animate({
                            'height': 30,
                            'right': 250,
                            'bottom': 452
                        }, 1000);
                        $('.goods-02').show().animate({
                            'height': 218
                        }, 1000);
                        $('.words-02').animate({
                            'opacity': 1
                        }, 500)
                    });
                });
           }
       }
   });
});