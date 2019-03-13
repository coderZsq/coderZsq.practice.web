;(function () {
    function test1() {
        // window.onload = function () {
        //     document.getElementById('btn').onclick = function () {
        //         let divObj = document.getElementById('dv');
        //         divObj.style.width = '200px';
        //         divObj.style.height = '100px';
        //         divObj.style.backgroundColor = 'red';
        //     };
        // };
        $(function () {
            $('#btn').click(function () {
                $('#dv').css({
                    'width': '200px',
                    'height': '100px',
                    'backgroundColor': 'green'
                });
            });
        });
    }


    function test2() {
        // window.onload = function () {
        //     console.log('hello world!');
        // };
        $(window).load(function () {
            console.log('hello world! - 1');
        });
        $(window).load(function () {
            console.log('hello world! - 2');
        });
        $(document).ready(function () {
            console.log('hello world! - 3');
        })
        $(document).ready(function () {
            console.log('hello world! - 4');
        })
        jQuery(function () {
            console.log('hello world! - 5');
        });
        jQuery(function () {
            console.log('hello world! - 6');
        });
        $(function () {
            console.log('hello world! - 7');
        });
        $(function () {
            console.log('hello world! - 8');
        });
    }


    function test3() {
        // window.onload = function () {
        //     let btnObj = document.getElementById('btn');
        //     btnObj.onclick = function () {
        //         this.style.backgroundColor = 'red';
        //     };
        //     $(btnObj).click(function () {
        //         $(this).css({
        //             'backgroundColor': 'green'
        //         })
        //     });
        //     let obj = $(btnObj).get(0);
        //     let obj = $(btnObj)[0];
        //     obj.onclick = function () {
        //         this.style.backgroundColor = 'blue';
        //     };
        // }
        $(function () {
            // $('#btn')[0].onclick = function() {
            //     this.style.backgroundColor = 'red';
            // };
            $('#btn').click(function () {
               $(this).css({
                  'backgroundColor': 'yellow'
               });
            }) ;
        });
    }


    function test4() {
        // window.onload = function () {
        //     document.getElementById('btn').onclick = function () {
        //         if (this.value === 'Off') {
        //             document.body.style.backgroundColor = 'black';
        //             this.value = 'On';
        //         } else {
        //             document.body.style.backgroundColor = 'white';
        //             this.value = 'Off';
        //         }
        //     }
        // }
        $(function () {
           $('#btn').click(function () {
               if ($(this).val() === 'Off') {
                   $('body').css('backgroundColor', 'black');
                   $(this).val('On');
               } else {
                   $('body').css('backgroundColor', 'white');
                   $(this).val('Off');
               }
           });
        });
    }


    function test5() {
        $(function () {
           $('#btn').click(function () {
               $('#dv').text('innerText, textContent').css('backgroundColor', 'yellow');
           });
        });
    }


    function test6() {
        $(function () {
           $('#btn').click(function () {
               $('p').text('tag - p');
           });
        });
    }


    function test7() {
        $(function () {
           $('#btn').click(function () {
               $('p.cls').css('backgroundColor', 'yellow');
           });
        });
    }


    function test8() {
        $(function () {
           $('#btn').click(function () {
               $('div, p.cls, span').css('backgroundColor', 'yellow');
           });
        });
    }


    function test9() {
        $(function () {
            $('#btn').click(function () {
                // $('#dv p').css('backgroundColor', 'red');
                $('#dv>p').css('backgroundColor', 'red');
            });
        });
    }


    function test10() {
        $(function () {
            $('#btn').click(function () {
                $('#txt').val('placeholder');
                console.log($('#txt').val());
            });
        });
    }


    function test11() {
        $(function () {
            $('#uu>li').mouseover(function () {
                $(this).css('backgroundColor', 'red');
            }).mouseout(function () {
                $(this).css('backgroundColor', '');
            });
        });
    }


    function test12() {
        $(function () {
           $('#btn').click(function () {
               $('#dv *').css('backgroundColor', 'yellow');
           });
        });
    }


    function test13() {
        $(function () {
           $('#btn').click(function () {
               $('#uu>li:even').css('backgroundColor', 'yellow');
               $('#uu>li:odd').css('backgroundColor', 'red');
           });
        });
    }


    function test14() {
        $(function () {
           $('#btn').click(function () {
               $('#uu>li:gt(0)').css('backgroundColor', 'skyblue');
               // $('#uu>li:eq(1)').css('backgroundColor', 'skyblue');
               // $('#uu>li:lt(2)').css('backgroundColor', 'skyblue');
           });
        });
    }


    function test15() {
        $(function () {
           $('#btn').click(function () {
               // $('#dv').addClass('cls').addClass('cls2');
               $('#dv').addClass('cls cls2');
           });
        });
    }


    function test16() {
        $(function () {
           $('#btn').click(function () {
               // $('span').removeClass('cls');
               $('span').removeClass();
           });
        });
    }


    function test17() {
        $(function () {
            $('#btn').click(function () {
                // if ($('body').hasClass('cls')) {
                //     $('body').removeClass('cls');
                //     $(this).val('Off');
                // } else {
                //     $('body').addClass('cls');
                //     $(this).val('On');
                // }
                $('body').toggleClass('cls');
            });
        });
    }


    function test18() {
        $(function () {
            $('#btn').click(function () {
                console.log($('#dv').html());
                $('#dv').html('<p>p</p>').css('backgroundColor', 'red');
            });
        });
    }


    function test19() {
        $(function () {
           $('#uu>li').mouseover(function () {
               $(this).css('backgroundColor', 'red').siblings('li').css('backgroundColor', '');
           }).click(function () {
               $(this).css('fontSize', '50px').css('color', 'green');
           });
        });
    }


    function test20() {
        $(function () {
           $('#btn').click(function () {
               $(this).val('alter');
           }).mouseover(function () {
               $(this).css({
                  'width': '200px',
                  'height': '100px'
               });
           }).mouseout(function () {
               $(this).css('backgroundColor', 'green');
           });
        });
    }


    function test21() {
        $(function () {
           $('#uu>li').mouseenter(function () {
               // $(this).next().css('backgroundColor', 'green');
               // $(this).nextAll().css('backgroundColor', 'green');
               //  $(this).prev().css('backgroundColor', 'green');
               // $(this).prevAll().css('backgroundColor', 'green');
               $(this).siblings().css('backgroundColor', 'green');
           });
        });
    }


    function test22() {
        $(function () {
           $('#uu>li').mouseenter(function () {
               $(this).css('backgroundColor', 'red').siblings().css('backgroundColor', '');
           }).mouseleave(function () {
               $(this).css('backgroundColor', '').siblings().css('backgroundColor', '')
           }).click(function () {
               $(this).prevAll().css('backgroundColor', 'yellow').end().nextAll().css('backgroundColor', 'blue');
           });
        });
    }


    function test23() {
        $(function () {
            $('#btn1').click(function () {
               $('#dv').hide(1000);
            });
            $('#btn2').click(function () {
                $('#dv').show('fast'); //slow normal fast
            });
        });
    }


    function test24() {
        $(function () {
           $('#btn1').click(function () {
               $('div>img').last('img').hide(800, function () {
                   $(this).prev().hide(800, arguments.callee);
               });
           });
            $('#btn2').click(function () {
                $('div>img').first('img').show(800, function () {
                    $(this).next().show(800, arguments.callee);
                });
            });
        });
    }


    function test25() {
        $(function () {
            $('#btn').click(function () {
                $('#dv').slideToggle(1000);
            });
            $('#btn1').click(function () {
                $('#dv').slideUp('fast');
            });
            $('#btn2').click(function () {
                $('#dv').slideDown('slow');
            });
        });
    }


    function test26() {
        $(function () {
            $('#btn').click(function () {
                $('#dv').fadeToggle(1000);
            });
            $('#btn1').click(function () {
                $('#dv').fadeOut('fast');
            });
            $('#btn2').click(function () {
                $('#dv').fadeIn('slow');
            });
            $('#btn3').click(function () {
                $('#dv').fadeTo(1000, 0.3);
            });
        });
    }


    function test27() {
        $(function () {
            $('#btn').click(function () {
               $('#dv').css('position', 'absolute').animate({
                   'width': '300px',
                   'height': '300px',
                   'left': '300px'
               }, 1000, function () {
                   $('#dv').animate({
                       'width': '50px',
                       'height': '30px',
                       'left': '800px',
                       'top': '300px',
                       'opacity': 0.2
                   });
               });
            });
        });
    }


    window.test = test27;
})();

test();