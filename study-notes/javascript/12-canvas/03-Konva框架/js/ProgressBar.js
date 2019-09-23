// 1.提供一个构造函数
function ProgressBar(option) {
    this._init(option);
}
// 2.设置原型对象
ProgressBar.prototype = {
    constructor : ProgressBar,
    // 初始化的方法
    _init : function (option) {
        option = option || {};
        // 坐标
        this.x = option.x || 0;
        this.y = option.y || 0;
        // 宽高
        this.width = option.width || 0;
        this.height = option.height || 0;
        // 颜色
        this.strokeColor = option.strokeColor || 'black';
        this.fillColor = option.fillColor || 'balck';
        // 描边的宽度
        this.strokeWidth = option.strokeWidth || 1;
        // 进度值
        this.value = option.value || 0.1;
    },
    
    // 绘制
    render : function (layer) {
        // 创建组
        this.group = new Konva.Group();
        layer.add(this.group);

        // 创建里面的矩形
        var innerRect = new Konva.Rect({
            x: this.x,
            y: this.y,
            width: this.width * this.value,
            height: this.height,
            fill: this.fillColor,
            id : 'innerRect'
        });
        this.group.add(innerRect);

        // 创建外面的矩形
        var outerRect = new Konva.Rect({
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
            stroke: this.strokeColor,
            strokeWidth: this.strokeWidth,
            cornerRadius : 5 // 圆角半径
        });
        this.group.add(outerRect);
    },
    
    update : function () {
        // 获取里面的矩形
        var rect = this.group.findOne("#innerRect");
        // 做动画
        rect.to({
            width : this.width, // 要做动画的属性
            duration: 3, // 动画的时间
            // easing: Konva.Easings.EaseInOut,
            // yoyo: true,
            onFinish: function() {
                // 动画执行完毕后会自动执行这个方法
                console.log('动画执行完毕后会自动执行这个方法');
            }
        });
    }
}