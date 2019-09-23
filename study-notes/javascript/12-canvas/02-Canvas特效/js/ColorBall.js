// 1.提供一个构造函数
function ColorBall(option) {
    this._init(option);
}
// 2.设置原型对象
ColorBall.prototype = {
    constructor : ColorBall,
    // 初始化的方法
    _init : function (option) {
        option = option || {};
        // 圆心的坐标
        this.x = option.x || 0;
        this.y = option.y || 0;
        // 半径
        this.r = option.r || 0;
        // 颜色
        this.color = option.color || 'black';
        // 变化的量
        this.dx = Math.random()*20 - 10; // 0~1 -> 0~20 -> -10~10
        this.dy = Math.random()*20 - 10;
        this.dr = Math.random() + 1; // 1~2
    },
    // 绘制
    render : function (ctx) {
        ctx.save();
        ctx.beginPath();

        // 绘制小球
        ctx.arc(this.x,this.y,this.r,0,2*Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();

        ctx.restore();
    },

    // 更新
    update : function () {
        this.x += this.dx;
        this.y += this.dy;
        this.r -= this.dr;
        // 删除小球
        if(this.r <= 0){
            // this.r = 0;
            // without:删除数组中指定的额元素
            // 参数1:要操作的数组 参数2:要删除的元素
            ballArray = _.without(ballArray,this);
        }
    }
}