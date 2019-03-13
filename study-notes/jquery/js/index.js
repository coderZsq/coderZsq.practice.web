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


    function test28() {
        $(function () {
            $('#btn').click(function () {
                let aObj = $('<a href="https://www.google.com">Google</a>')
                // $('div:eq(1)').append(aObj);
                // $('div:eq(1)').prepend(aObj);
                // $('div:eq(1)').after(aObj);
                $('div:eq(1)').before(aObj);
            });
        });
    }


    function test29() {
        $(function () {
           $('#btn').click(function () {
               let dv = $('#dv *');
               $('#dv').append($('#dv1>img'));
               // $('#dv1').append(dv);
               dv.appendTo($('#dv1'));
           });
        });
    }


    function test30() {
        $(function () {
            $('#btn').click(function () {
                $('#dv').html('<p>tag - p</p>')
            });
        });
    }


    function test31() {
        $(function () {
           $('#btn').click(function () {
               // $('#dv').html('');
               // $('#dv').empty();
               $('#dv').remove();
           });
           $('#btn1').click(function () {
              let obj = $('#dv *').clone();
              obj.css('fontSize', '6px');
              $('#dv2').append(obj);
           });
        });
    }


    function test32() {
        $(function () {
           $('#btn').click(function () {
               console.log($(this).val());
               console.log($('#txt').val());
               console.log($('#rad').val());
               console.log($('#ck').val());
               console.log($('#sm').val());
               console.log($('#tt').val());
               console.log($('#tt').text());
               $(this).val('input - button');
               $('#txt').val('input - text');
               $('#rad').val('input - radio');
               $('#ck').val('input - checkbox');
               $('#sm').val('input - submit');
               $('#se').val(4);
           });
        });
    }


    function test33() {
        $(function () {
           $('#btn').click(function () {
               let aObj= $('<a></a>');
               aObj.attr('title', 'Castie!');
               aObj.attr('href', 'https://github.com/coderZsq');
               aObj.text('coderZsq - GitHub');
               $('#dv2').append(aObj);
               console.log(aObj.attr('href'));
           });
        });
    }


    function test34() {
        $(function () {
            $('#btn').click(function () {
                $('#dv :checkbox').prop('checked', true);
            });
            $('#btn1').click(function () {
                $('#dv :checkbox').prop('checked', false);
            });
        });
    }


    function test35() {
        $(function () {
            $('#btn').click(function () {
                // let width = parseInt($('#dv').css('width'));
                // let height = parseInt($('#dv').css('height'));
                // console.log(width + '\n' + height);
                let width = $('#dv').width() * 2;
                let height = $('#dv').height() * 2;
                $('#dv').width(width);
                $('#dv').height(height);
            });
        });
    }


    function test36() {
        $(function () {
            $('#btn').click(function () {
                $('#dv').css({
                    'position': 'absolute',
                    'left': '100px',
                    'top': '50px'
                });
                console.log($('#dv').offset().left);
                console.log($('#dv').offset().top);
            });
            $('#btn1').click(function () {
                $('#dv').offset({
                    'left': 200,
                    'top': 200
                });
            });
        });
    }


    function test37() {
        $(function () {
           $(document).click(function () {
               console.log($(this).scrollLeft() + '\n' + $(this).scrollTop());
           });
        });
    }


    function test38() {
        $(window).scroll(function () {
            console.log($(this).scrollLeft() + '\n' + $(this).scrollTop());
        });
    }


    function test39() {
        // $('#btn').bind('click', function () {
        //    
        // });
        $('#btn').bind({
            'click': function () {
                console.log('click');
            },
            'mouseover': function () {
                console.log('mouseover');
            },
            'mouseout': function () {
                console.log('mouseout');
            }
        })
    }


    function test40() {
        $(function () {
           let i = 0;
           $('#btn').bind('mouseover mouseout', function () {
              i++;
              console.log(i);
           });
        });
    }


    function test41() {
        $('#btn').bind('click', function () {
           $('<p>tag - p</p>').appendTo($('#dv'));
           $('#dv').delegate('p', 'click', function () {
              alert(1);
           });
        });
    }


    function test42() {
        $('#btn').on('click', function () {
           $('#dv').append($('<p>tag - p</p>'));
           $('#dv').on('click', 'p', function () {
               alert(1);
           });
        });
    }


    function test43() {
        $('#btn').on('click', function () {
           alert(1);
        });
        $('#btn1').on('click', function () {
           $('#btn').off('click');
        });
    }


    function test44() {
        $('#btn').bind('click', function () {
           alert(1);
        });
        $('#btn1').bind('click', function () {
           $('#btn').unbind('click');
        });
    }


    function test45() {
        $('#btn').click(function () {
           $('#dv').delegate('p', 'click', function () {
                alert(1);
           });
        });
        $('#btn1').click(function () {
           $('#dv').undelegate('p', 'click');
        });
    }


    function test46() {
        // $('#dv>p').click(function () {
        //     alert(1);
        // });
        $('#dv').delegate('p', 'click', function () {
            alert(1);
        });
        $('#dv').click(function () {
            alert(2);
        });
        $('#btn1').click(function () {
            $('#dv').off('click'); //解绑父级
            $('#dv').off('click', '**'); //解绑子级
            $('#dv').off(); //解绑父子级
        });
    }


    function test47() {
        $('#btn').click(function () {
            $(this).css('backgroundColor', 'red');
        });
        $('#btn1').click(function () {
            // $('#btn').click();
            // $('#btn').trigger('click');
            $('#btn').triggerHandler('click');
        });
    }


    function test48() {
        $('#btn').click(function () {
            // $('#txt').focus();
            // $('#txt').trigger('focus');
            $('#txt').triggerHandler('focus'); //不触发浏览器默认行为
            $('#sp').text('focus - span');
        });
    }


    function test49() {
        $('#dv').on('click', 'input', function (event) {
            // console.log(arguments[0]);
            console.log(event);
            console.log(event.delegateTarget);
            console.log(event.currentTarget);
            console.log(event.target);
        });
    }


    function test50() {
        $(document).keydown(function (e) {
            let key = e.key;
            if (key === 'a') {
                $('#dv').css('backgroundColor', 'red');
            } else if (key === 'b') {
                $('#dv').css('backgroundColor', 'yellow');
            }
        });
    }


    function test51() {
        $('#dv2').click(function () {
            alert('dv2 >' + $(this).attr('id'));
        });
        $('#dv22').click(function () {
            alert('dv22 >' + $(this).attr('id'));
            $('body').css('backgroundColor', 'black');
        });
        $('#dv222').click(function () {
            alert('dv222 >' + $(this).attr('id'));
            return false;
        });
    }


    function test52() {
        $('#uu2>li').each(function (index, element) {
            // console.log(arguments.length);
            $(element).css('opacity', (index + 1) / 10);
        });
    }


    function test53() {
        let xy = $.noConflict();
        xy('#btn').click(function () {
            alert(1);
        });
    }


    function test54() {
        $.fn.changeBackgroundColor = function (color) {
            $(this).css('backgroundColor', color);
        };
        $('input[type=button]').click(function () {
            $('.cls').changeBackgroundColor('skyblue');
        });
    }


    window.test = test54;
})();

test();