// 1.提供一个构造函数
function XMGRect(option) {
    this._init(option);
}
// 2.设置原型对象
XMGRect.prototype = {
    constructor : XMGRect,
    // 初始化的方法
    _init : function (option) {
        option = option || {};
        // 1.坐标
        // this.x = option.x || 100;
        // 传0就是0,不传默认是100
        this.x = option.x == 0 ? 0 : option.x || 100;
        this.y = option.y == 0 ? 0 : option.y || 100;
        // 2.宽高
        this.width = option.width == 0 ? 0 : option.width || 100;
        this.height = option.height == 0 ? 0 : option.height || 100;
        // 3.颜色
        this.strokeColor = option.strokeColor || 'black';
        this.fillColor = option.fillColor || 'black';
        // 4.描边的宽度
        this.strokeWidth = option.strokeWidth || 1;
        // 5.缩放
        this.scaleX = option.scaleX || 1;
        this.sacleY = option.scaleY || 1;
        // 6.位移
        this.translateX = option.translateX || 0;
        this.translateY = option.translateY || 0;
        // 7.旋转
        this.angle = option.angle || 0; // 角度 20
    },

    // 绘制
    renderStroke : function (ctx) {
        ctx.save(); // 保存状态
        ctx.beginPath();// 开启路径
        // 缩放
        ctx.scale(this.scaleX,this.scaleY);
        // 位移
        ctx.translate(this.translateX,this.translateX);
        // 旋转
        ctx.rotate(this.angle*Math.PI/180);
        // 绘制矩形
        ctx.strokeStyle = this.strokeColor;
        ctx.lineWidth = this.strokeWidth;
        ctx.strokeRect(this.x,this.y,this.width,this.height);
        ctx.restore(); // 还原状态
    },

    // 绘制填充的矩形
    renderFill : function (ctx) {
        ctx.save(); // 保存状态
        ctx.beginPath();// 开启路径
        // 缩放
        ctx.scale(this.scaleX,this.scaleY);
        // 位移
        ctx.translate(this.translateX,this.translateX);
        // 旋转
        ctx.rotate(this.angle*Math.PI/180);
        // 绘制矩形
        ctx.fillStyle = this.fillColor;
        ctx.fillRect(this.x,this.y,this.width,this.height);
        ctx.restore(); // 还原状态
    }
}