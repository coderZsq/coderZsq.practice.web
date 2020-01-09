
(function () {
    window.Game = Class.extend({
        init : function (option) {
            option = option || {};
            // 1.fps
            this.fps = option.fps || 60;
        },
        
        // 开始游戏
        run : function () {
            // 备份this
            var self = this;
            // 定时器
            this.timer = setInterval(function () {
                self.runLoop();
            },1000/self.fps); // 1帧需要的时间 fps = 50 1s/50 1000ms/50
        },

        // 运行循环,每一帧执行1次
        runLoop : function () {
            console.log('--');
        },

        // 暂停游戏
        pause : function () {
            clearInterval(this.timer);
        },
        
        // 结束游戏
        gameOver : function () {
            
        }
    });
})();