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
            // 4.变化的量
            this.dy = 0;
            // 5.记录下落时的帧数
            this.dropFrame = game.frameUtil.currentFrame;
            // 6.旋转的角度
            this.rotateAngle = 0;
            // 8.小鸟的状态 0:下落 1:上升
            this.state = 0;
            // 9.绑定事件
            this.bindClick();
            // 10.空气的阻力
            this.deleteY = 1;

        },
        // 绑定事件
        bindClick : function () {
            // 备份this
            var self = this;
            game.canvas.onmousedown = function () {
                // 1.改变小鸟的状态
                self.state = 1;
                // 2.设置仰角
                self.rotateAngle = -25;
                // 3.复位空气的阻力
                self.deleteY = 1;
            }
        },
        // 绘制
        render : function () {
            game.ctx.save(); // 保存状态
            // 位移
            game.ctx.translate(this.x + this.width/2,this.y+this.height/2);
            // 旋转
            game.ctx.rotate(this.rotateAngle*Math.PI/180);
            // 位移回去
            game.ctx.translate(-(this.x + this.width/2),-(this.y+this.height/2));
            // 绘制小鸟
            game.ctx.drawImage(game.allImageObj['bird'],this.wing*this.width,0,this.width,this.height,this.x,this.y,this.width,this.height);
            game.ctx.restore(); // 还原状态
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

            // 根据小鸟的状态去更新位置
            if(this.state == 0) { // 小鸟下落
                // 更新小鸟下落的角度
                this.rotateAngle ++;
                // Math.pow(t,2) t^2  1/2*g*t^2
                this.dy = 0.01 * Math.pow((game.frameUtil.currentFrame - this.dropFrame),2);
            } else if(this.state == 1){ // 小鸟上升
                this.deleteY++;
                this.dy = -15 + this.deleteY;
                if(this.dy >= 0){ // 小鸟再次下落
                    // 改变小鸟的状态为下落
                    this.state = 0;
                    // 更新下落时的帧数
                    this.dropFrame = game.frameUtil.currentFrame;
                }
            }
            // 更新小鸟的位置
            this.y += this.dy;

            // 封锁上空
            if(this.y <= 0){
                this.y = 0;
            }

            // 碰到地板,游戏结束
            if(this.y >= game.canvas.height-this.height-48){
                game.gameOver();
            }

        }
    })
})();