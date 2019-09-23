// 1.提供一个构造函数
function Ball(option) { // $var$
    this._init(option);
}
// 2.设置原型对象
Ball.prototype = {
    constructor : Ball,
    // 初始化的方法
    _init : function (option) {
        option = option || {};
        this.x = option.x || 0;
        this.y = option.y || 0;
        this.r = option.r || 0;
        this.color = option.color || 'black';
        this.speed = option.speed || 1;
    },
    // 绘制
    render : function (ctx) {
        ctx.save(); // 保存状态
        ctx.beginPath(); // 开启路径

        // 绘制小球
        ctx.arc(this.x,this.y,this.r,0,2*Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();

        ctx.restore();// 还原状态
    },

    // 更新
    update :function () {
        this.x += this.speed;
    }
}