// 管道类
(function () {
    window.Pipe = Class.extend({
        init : function () {
            // 1.方向 0:向下 1向上
            this.dir = _.random(0,1);
            // 2.宽高
            this.width = 148;
            this.height = _.random(100,(game.canvas.height-48) / 2);
            // 3.坐标
            this.x = game.canvas.width;
            this.y = this.dir == 0 ? 0 : game.canvas.height - this.height - 48;
            // 4.速度
            this.speed = 4;
        },
        // 绘制
        render : function () {
            // 根据管道的方向绘制管道
            if(this.dir == 0){ // 管道向下
                game.ctx.drawImage(game.allImageObj['pipe1'],0,1664-this.height,this.width,this.height,this.x,this.y,this.width,this.height);
            } else if(this.dir == 1){ // 管道向上
                game.ctx.drawImage(game.allImageObj['pipe0'],0,0,this.width,this.height,this.x,this.y,this.width,this.height);
            }
        },
        // 更新
        update : function () {
            this.x -= this.speed;
            // 移除离开屏幕的管道(性能优化)
            if(this.x <= -this.width){
                game.pipeArr = _.without(game.pipeArr,this);
            }
        },
        // 暂停
        pause : function () {
            this.speed = 0;
        }
    })
})();