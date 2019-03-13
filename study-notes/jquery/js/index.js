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


    window.test = test20;
})();

test();