//小鸟类
(function () {
    window.Bird = Class.extend({
        init : function () {
            // 1.宽高
            this.width = 85;
            this.height = 60;
            // 2.坐标
            this.x = (game.canvas.width - this.width) / 2;
            this.y = 100;
            // 3.翅膀的状态 合法值: 0,1,2
            this.wing = 0;
        },
        // 绘制
        render : function () {
            game.ctx.drawImage(game.allImageObj['bird'],this.wing*this.width,0,this.width,this.height,this.x,this.y,this.width,this.height);
        },
        // 更新
        update : function () {
            // 每隔5帧更新翅膀的状态
            if(game.frameUtil.currentFrame % 5 == 0){
                this.wing++;
                if(this.wing > 2){
                    this.wing = 0;
                }
            }

            
        }
    })
})();