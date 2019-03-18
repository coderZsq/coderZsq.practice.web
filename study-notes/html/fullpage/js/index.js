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
                   $('.t1f-05').show().animate({
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
           if (index === 5 && nextIndex === 6) {
               $('.t1f-05').animate({
                   'bottom': -(k - 500),
                   'left': '40%',
                   'width': 65
               }, 1500, function () {
                   $(this).hide();
               });
               $('.box-06').animate({
                   'left': '38%'
               }, 1500, function () {
                   $(this).animate({
                        'bottom': 40
                   }, 500, function () {
                       $(this).hide();
                       $('.section6').animate({
                           'backgroundPositionX': '100%'
                       }, 4000, function () {
                           $('.boy').animate({
                               'height': 305,
                               'bottom': 116
                           }, 1000, function () {
                               $(this).animate({
                                   'right': 500
                               }, 500, function () {
                                   $('.door').animate({
                                       'opacity': 1
                                   }, 200, function () {
                                       $('.girl').show().animate({
                                           'right': 350,
                                           'height': 306
                                       }, 500, function () {
                                           $('.pop-07').show();
                                       });
                                   });
                               });
                           });
                       });
                       $('.words-06-a').show().animate({
                           'left': '30%'
                       }, 2000, 'easeInOutElastic');
                       $('.pop-06').show();
                   });
               });
           }
       }
   });
});