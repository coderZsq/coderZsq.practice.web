/**
 * Created by wenya on 2017/7/29.
 */

// 构造函数
function ColorBall(option) {
    this._init(option);
}
ColorBall.prototype = {
    // 获取当前的构造函数
    constructor:ColorBall,
    _init:function (option) {
        var option = option || {};

        // 1.必要的属性
        this.parentId = option.parentId;
        // top值
        this.x = option.x || 0;
        // left值
        this.y = option.y || 0;
        // 半径
        this.r = 40;
        this.bgColor = option.bgColor || 'blue';

        // 2.变化的属性
        this.dX = _.random(-5,5);
        this.dY = _.random(-5,5);
        this.dR = _.random(1,3);
    },

    // 绘制
    render:function () {
        // 1.添加子节点
        var parentNode = document.getElementById(this.parentId);
        var childNode = document.createElement('div');
        parentNode.appendChild(childNode);

        // 2.设置样式
        parentNode.style.position = 'relative';
        childNode.style.position = 'absolute';

        childNode.style.left = this.x + 'px';
        childNode.style.top = this.y + 'px';
        childNode.style.width = this.r + 'px';
        childNode.style.height = this.r + 'px';
        childNode.style.borderRadius = '50%';
        // 背景颜色
        childNode.style.backgroundColor = this.bgColor;
    },
    // 动画
    update:function () {
        // x
        this.x += this.dX;
        this.y += this.dY;
        this.r -= this.dR;

        if(this.r <= 0){
            this.r = 0;
            // 当小球的半径变为0时,从数组中移除
            // 把小球从数组中移除
            ballArray = _.without(ballArray,this);
        }
    }
};