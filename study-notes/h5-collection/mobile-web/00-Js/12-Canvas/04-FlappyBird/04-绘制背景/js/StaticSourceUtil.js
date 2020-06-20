// 加载本地数据 图片 音频 视频
(function () {
    window.StaticSourceUtil  = Class.extend({
        init : function () {
            // 保存所有图片对象
            this.allImageObj = {};
        },
        // 加载数据
        // 所有图片对象,图片的总个数,已经加载好的图片个数
        loadImage : function (jsonUrl,callBack) {
            // 0.备份this
            var self = this;
            // 1.创建请求对象
            var xhr = new XMLHttpRequest();
            // 2.Ajax三步走
            xhr.open('get',jsonUrl);
            xhr.send();
            // 3.当 readyState 等于 4 且状态为 200 时，表示请求成功
            xhr.onreadystatechange=function()
            {
                if (xhr.readyState==4 && xhr.status==200)
                {
                    // 3.0记录已经加载好的图片个数
                    var loadImgCount = 0;
                    // 3.1获取请求到的数据(json数据->字符串)
                    var responseText = xhr.responseText;
                    // 3.2json解析(json数据->对象)
                    var responseJson = JSON.parse(responseText);
                    // 3.3获取数组
                    var dataList = responseJson.images;
                    // 3.4遍历数据
                    for (var i = 0; i < dataList.length; i++) {
                         // 创建图片对象
                        var image = new Image();
                        image.src = dataList[i].src;
                        image.index = i;
                        // 图片加载完毕返回
                        image.onload = function () {
                            // 累加已经加载好的图片个数
                            loadImgCount++;
                            var key = dataList[this.index].name;
                            // 保存图片对象
                            self.allImageObj[key] = this;
                            // 返回数据
                            callBack(self.allImageObj,dataList.length,loadImgCount);
                        }
                    }
                }
            }
        }
    });
})();