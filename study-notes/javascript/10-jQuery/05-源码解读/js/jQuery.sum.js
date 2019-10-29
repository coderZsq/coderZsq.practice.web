/**
 * Created by Administrator on 2018/7/14.
 */
(function ($) {
    $.extend({
        sum:function () {
            var res = 0;
            for(var i = 0;i<arguments.length;i++)
            {
                res += arguments[i]
            }
            return res;
        }
    })
})(jQuery);