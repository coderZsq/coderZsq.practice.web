// 1.提供一个构造函数
function TextCircle(option) {
    this._init(option);
}
// 2.设置原型对象
TextCircle.prototype = {
    constructor : TextCircle,
    // 初始化的方法
    _init : function (option) {
        option = option || {};
        // 坐标
        this.x = option.x || 0;
        this.y = option.y || 0;
        // 半径
        this.innerRadius = option.innerRadius || 0;
        this.outerRadius = option.outerRadius || 0;
        // 颜色
        this.innerColor  = option.innerColor || 'black';
        this.outerColor = option.outerColor || 'black';
        // 文字和文字的颜色
        this.text = option.text || '默认';
        this.textColor = option.textColor || 'white';
    },
    
    // 绘制
    render : function (layerOrGroup) {
        // 创建组
        this.group = new Konva.Group({
            x: this.x,
            y: this.y
        });
        layerOrGroup.add(this.group);

        // 创建内圆
        var innerCircle = new Konva.Circle({
            radius: this.innerRadius,
            fill: this.innerColor,
        });
        this.group.add(innerCircle);

        // 创建圆环
        var outerRing = new Konva.Ring({
            innerRadius: this.innerRadius,
            outerRadius: this.outerRadius,
            fill: this.outerColor
        });
        this.group.add(outerRing);

        // 创建文字
        // [config.align] can be left, center, or right
        var text = new Konva.Text({
            x: -this.innerRadius,
            y: -8,
            width: 2 * this.innerRadius,
            text: this.text,
            fontSize: 18,
            fill: this.textColor,
            align: 'center'
        });
        this.group.add(text);
    }
}