$(function () {


    /*1.大屏加载大图,小屏加载小图*/
    // windowWidthChange();
    /*1.1监听屏幕的变化*/
    $(window).on('resize',windowWidthChange)
    function windowWidthChange() {
        // console.log('re')
        /*1.2获取屏幕的宽度*/
        var windowWidth = $(window).width();
        var isShowSmallImg = windowWidth <= 640; // true
        // console.log(windowWidth,isShowSmallImg)

        /*1.3拿到banners 中的 item*/
        var $items = $('#wjs_banner .item')
        $items.each(function (index,value) {
            // console.log(value)
            /*1.4拿到每一个item*/
            var $item = $(value);

            /*获取图标url*/
            var imgUrl =isShowSmallImg ? $item.data('sm-img') : $item.data('lg-img');
            // console.log(isShowSmallImg,imgUrl)
            $item.removeAttr('style')
            $item.empty();
            /*1.5.如果是小屏*/
            if(isShowSmallImg){
              /*给item对象(div) 添加img*/
                var img ='<img src="'+imgUrl+'" alt="">';
                $item.append(img)
            /*1.6.如果是大屏*/
            }else{
                var src = 'url('+imgUrl+')';
                /*给item对象(div) 添加background*/
                $item.css({
                    backgroundImage:src,
                })

            }

        })


    }
    /*手动触发一个事件(resize)*/
    // $(window).trigger('resize')




    /*2.小屏的时候固定ul宽度,在大屏的时候ul的宽度为100%*/
    $(window).on('resize',changeUlWidth)
    function changeUlWidth() {
        // console.log('sd')
        /*2.1获取ul标签*/
        var $ul = $('#wjs_product .nav-tabs');
        /*2.2找到li标签*/
        // var $lis = $('#wjs_product .nav-tabs li[role="presentation"]');
        // alert($lis.length)
        var $lis = $('li[role="presentation"]', $ul); //在ul的范围中查找对应的li
        // alert($lis.length)
        /*2.3请求选项卡的长度*/
        var tabWidth = 0;
        $lis.each(function (index,value) {
            var $li =$(value);
            tabWidth+=$li.width();
        })
        console.log(tabWidth) // 590

        /*2.3获取屏幕的宽度:parentWidth--> div*/
        var parentWidth = $ul.parent().width();

        //属于小屏
        if(parentWidth <=tabWidth ){
            //小屏的时候固定ul宽度
            $ul.css({
                width:tabWidth,
            })
        }else{
            //ul的宽度为100%
            $ul.css({
                width:'100%',
            })
        }


    }
    $(window).trigger('resize')


    /*3.初始化tips*/
    $('[data-toggle="tooltip"]').tooltip()


})