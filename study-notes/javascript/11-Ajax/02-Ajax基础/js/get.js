/**
 * Created by xmg on 9/9.
 */
function get(url,successCallBack,errorCallBack) {
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
    url = url + "?t=" + (new Date()).getTime();
    xhr.open("get",url,true);

    //03 发送请求
    xhr.send();

    //04 监听网络请求的状态
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4)
        {
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
}