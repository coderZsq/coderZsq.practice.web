// 帧工具类->专门用来计算FPS和当前总帧数
(function () {
    window.FrameUtil = Class.extend({
        init : function () {
            // 1.开始的时间
            this.sTime = new Date();
            // 2.开始的帧数
            this.sFrame = 0;
            // 3.当前的总帧数
            this.currentFrame = 0;
            // 4.真实的fps
            this.realFps = 0;
        },
        
        // 计算,1帧执行1次
        countFps :function () {
            // 累加当前的帧数
            this.currentFrame++;
            // 当前的时间
            var currentTime = new Date();
            // 判断是否走过了1s
            if(currentTime - this.sTime >= 1000){
                // 走过了1s
                // 计算真实的fps
                this.realFps = this.currentFrame - this.sFrame;
                // 更新起始的时间
                this.sTime = currentTime;
                // 更新起始的帧数
                this.sFrame = this.currentFrame;
            }
        }
    });
})();