$(function () {
   let k = $(window).height();
   let flag = false;
   $('#fullpage').fullpage({
       navigation: true,
       // navigationPosition: 'left'
       // loopBottom: true
       scrollSpeed: 1200,
       afterLoad: function (anchorLink, index) {
           if (index === 2 && flag === false) {
                $('.search').show().animate({
                    'right': 370
                }, 1500, 'easeOutBack', function () {
                    $('.search-words').animate({
                        'opacity': 1
                    }, 500, function () {
                        $('.search').hide();
                        $('.search-02-1').show().animate({
                            'height': 30,
                            'right': 250,
                            'bottom': 452
                        }, 1000, function () {
                            flag = true;
                        });
                        $('.goods-02').show().animate({
                            'height': 218
                        }, 1000);
                        $('.words-02').animate({
                            'opacity': 1
                        }, 500);
                    });
                });
           }
       },
       onLeave: function (index, nextIndex, direction) {
           if (index === 2 && nextIndex === 3 && flag === true) {
               $('.shirt-02').show().animate({
                   'bottom': -(k - 250),
                   'width': 207,
                   'left': 260
               }, 2000, function () {
                   $('.img-01-a').animate({
                       'opacity': 1
                   }, 500, function () {
                       $('.btn-01-a').animate({
                            'opacity': 1
                       }, 500);
                   });
               });
               $('.cover').show();
           }
           if (index === 3 && nextIndex === 4) {
               $('.shirt-02').hide();
               $('.t1f').show().animate({
                   'bottom': -((k - 250) + 50),
                   'left': 260
               }, 2000, function () {
                   $(this).hide();
                   $('.car-img').show();
                   $('.car').animate({
                      'left': '150%'
                   }, 3000, 'easeInElastic', function () {
                       $('.note').show();
                       $('.note-img, .words-04-a').animate({
                           'opacity': 1
                       }, 1000);

                   });
               });
           }
           if (index === 4 && nextIndex === 5) {
               $('.hand-05').animate({
                   'bottom': 0
               }, 2000, function () {
                   $('.mouse-05-a').animate({
                        'opacity': 1
                   });
                   $('.t1f-05').animate({
                       'bottom': 70
                   }, 1000, function (keyframes, options) {
                       $('.order-05').animate({
                           'bottom': 390
                       }, 390, function () {
                            $('.words-05').addClass('words-05-a');
                       });
                   });
               });
           }
       }
   });
});