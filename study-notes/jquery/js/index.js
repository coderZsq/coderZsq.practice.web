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


    window.test = test4;
})();

test();