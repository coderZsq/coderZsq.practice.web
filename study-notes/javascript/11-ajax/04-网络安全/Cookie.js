(function (window) {
    window.Cookie = {
        keys:function () {
            var keyArr = [];
            var cookieString = document.cookie;
            var arrM = cookieString.split("; ");
            for(var i = 0;i<arrM.length;i++)
            {
                var data = arrM[i].split("=");
                keyArr.push(data[0]);
            }
            return keyArr;
        },
        setCookie:function (key,value,count) {
            if (arguments.length == 2)
            {
                document.cookie = key +"="+value;
            }else if(arguments.length ==3)
            {
                var date = new Date();
                date.setDate(date.getDate() + count);
                document.cookie = key +"="+value+"; expires="+date;
            }

        },
        getCookie:function (key) {
            var cookieString = document.cookie;
            var arrM = cookieString.split("; ");
            for(var i = 0;i<arrM.length;i++)
            {
                var data = arrM[i].split("=");
                if(data[0] == key)
                {
                    return data[1];
                }
            }
            return "null";
        },
        removeCookie:function (key) {
            Cookie.setCookie(key,"",-1);
        },
        clearCookie:function () {
            var keys = Cookie.keys();
            for(var i = 0;i<keys.length;i++)
            {
                var key = keys[i];
                Cookie.removeCookie(key);
            }
        }
    }
})(window)