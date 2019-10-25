$(function () {

    /*当前选中的页面*/
    var index=0;
    var timerId;
    console.log(index)
    /*1.滚动切换*/
    $(window).mousewheel(function(event) {
        /*deltaY 如果是正数代表向上滚动鼠标,如果是负数代表是向下滚动*/
        /*节流*/
        clearTimeout(timerId)
        timerId=setTimeout(function () {
            var dY = event.deltaY > 0 ? 1 :-1;
            index = index - dY;  // 1
            // console.log(index)
            /*处理index的临界点*/
            if(index >  $('.gps li').length-1 ){
                index=4;
            }else if(index<0){
                index=0;
            }
            /*切换每一屏*/
            switchTab(index)
            hideOrShowElm(index);
        },500)

    });


    /*2.点击切换*/
    $('.gps li').on('click',function () {
        index= $(this).index();
        // alert(index)
        switchTab(index)
        hideOrShowElm(index);

    })

    /**
     * 切换每一屏
     * @param index
     */
   function switchTab(index) {
       /*1.修改点的颜色*/
       $('.gps li').eq(index).addClass('current')
           .siblings('li').removeClass('current');

       /*2.切换每一屏*/
       $('section').eq(index).show()
           .siblings('section').hide();
   }


    /**
     * 显示获取隐藏其它的标签
     */
    function hideOrShowElm(index) {
        /*第一屏*/
        if(index==0){
            $('.header').hide()
            $('.scroll').show()
        }else {
            $('.header').show()
            $('.scroll').hide()
        }
    }






})