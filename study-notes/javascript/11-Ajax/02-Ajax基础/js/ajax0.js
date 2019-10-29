function get(url,obj,successCallBack,errorCallBack,timeout) {

    //01 创建网络请求的对象
    var xhr;
    if (window.XMLHttpRequest)
    {
        xhr = new XMLHttpRequest();
    }else
    {
        xhr = new ActiveXObject("Microsoft.XMLHTTP")
    }

    //02 设置请求对象
    //发送GET请求的时候添加随机数或者是时间戳来解决缓存的问题
    //var str = "?t="+Math.random();
    //{username:"wc", password:"321"}  --> "username=zs&password=123456"
    var arrM = [];
    for(var key in obj)
    {
        arrM.push(key + "=" + obj[key]);
    }
    url += "?t=" + (new Date()).getTime() + "&" + arrM.join("&");
    //对URL进行转码处理
    //console.log("前" + url);
    url = encodeURI(url);
    //console.log("后" + url);
    xhr.open("get",url,true);

    //03 发送请求
    xhr.send();

    //04 监听网络请求的状态
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4)
        {
            clearTimeout(timer);

            //05 处理服务器返回的数据
            //请求成功
            if(xhr.status == 200)
            {
                //console.log("请求成功"+xhr.responseText);
                successCallBack(xhr);
            }
            //请求失败
            else {
                //console.log("请求失败"+xhr.statusText);
                errorCallBack(xhr);
            }
        }
    }

    //06 请求超时的处理
    timeout = timeout || 15000;
    var timer = setTimeout(function () {
        xhr.abort();  //先取消网络请求
        alert("请检查你周围是否有胖子挡住了信号");
    },timeout);
}

function post(url,obj,successCallBack,errorCallBack,timeout) {

    //01 创建网络请求的对象
    var xhr;
    if (window.XMLHttpRequest)
    {
        xhr = new XMLHttpRequest();
    }else
    {
        xhr = new ActiveXObject("Microsoft.XMLHTTP")
    }

    //02 设置请求对象
    var arrM = [];
    for(var key in obj)
    {
        arrM.push(key + "=" + obj[key]);
    }
    xhr.open("post",url,true);
    //03设置请求头信息
    xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    //04 发送请求
    xhr.send(arrM.join("&"));

    //05 监听网络请求的状态
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4)
        {
            clearTimeout(timer);

            //05 处理服务器返回的数据
            //请求成功
            if(xhr.status == 200)
            {
                //console.log("请求成功"+xhr.responseText);
                successCallBack(xhr);
            }
            //请求失败
            else {
                //console.log("请求失败"+xhr.statusText);
                errorCallBack(xhr);
            }
        }
    }

    //06 请求超时的处理
    timeout = timeout || 15000;
    var timer = setTimeout(function () {
        xhr.abort();  //先取消网络请求
        alert("请检查你周围是否有胖子挡住了信号");
    },timeout);
}