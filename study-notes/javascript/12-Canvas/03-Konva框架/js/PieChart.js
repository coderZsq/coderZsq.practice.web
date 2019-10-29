// 1.提供一个构造函数
function PieChart(option) {
    this._init(option);
}
// 2.设置原型对象
PieChart.prototype = {
    constructor : PieChart,
    // 初始化的方法
    _init : function (option) {
        option = option || {};
        // 圆心的坐标
        this.x = option.x || 0;
        this.y = option.y || 0;
        // 半径
        this.innerRadius = option.innerRadius || 0;
        this.outerRadius = option.outerRadius || 0;
        // 外圆的颜色和宽度
        this.outerColor = option.outerColor || 'black';
        this.outerWidth = option.outerWidth || 'black';
        // 数据
        this.dataArray = option.dataArray || [];
        // 动画的索引
        this.animationIndex = 0;
    },
    
    // 绘制
    render : function (layer) {
        // 0.备份this
        var self = this;
        // 1.创建总组
        this.group = new Konva.Group();
        layer.add(this.group);
        // 2.创建扇区组
        this.wedgeGroup = new Konva.Group();
        this.group.add(this.wedgeGroup);
        // 3.创建文字组
        this.valueTextGroup = new Konva.Group();
        this.group.add(this.valueTextGroup);
        // 4.创建区域组
        this.areaGroup = new Konva.Group();
        this.group.add(this.areaGroup);
        // 5.绘制外圆
        var outerCircle = new Konva.Circle({
            x: this.x,
            y: this.y,
            radius: this.outerRadius,
            stroke: this.outerColor,
            strokeWidth: this.outerWidth
        });
        this.group.add(outerCircle);

        // 开始的角度
        var beginAngle = -90;

        this.dataArray.forEach(function (item,index) {
            // 6.绘制扇区
            // 计算扇形的角度
            var tempAngle = 360 * item.value;
            // 创建扇形
            var wedge = new Konva.Wedge({
                x: self.x,
                y: self.y,
                radius: self.innerRadius,
                fill: item.color,
                angle: tempAngle, // 扇区的角度
                rotation: beginAngle // 开启的角度
            });
            self.wedgeGroup.add(wedge);

            // 7.绘制文字
            // 文字的角度
            var textAngle = beginAngle + tempAngle / 2;
            // 文字的坐标
            var textX = self.x + (self.outerRadius + 20)*Math.cos(textAngle*Math.PI/180);
            var textY = self.y + (self.outerRadius + 20)*Math.sin(textAngle*Math.PI/180);
            // 创建文字
            var text = new Konva.Text({
                x: textX,
                y: textY,
                text: item.value*100 + '%',
                fontSize: 18,
                fill: item.color
            });
            // 特殊的处理
            if(textAngle > 90 && textAngle < 270) {
                var newX =  textX - text.width();
                text.x(newX);
            }
            self.valueTextGroup.add(text);

            // 8.绘制区域组
            var areaW = 60;
            var areaH = 20;
            var areaX = self.x + self.outerRadius + 80;
            var areaY = self.y + (areaH + 10)*index;
            // 绘制区域组的矩形
            var areaRect = new Konva.Rect({
                x: areaX,
                y: areaY,
                width: areaW,
                height: areaH,
                fill: item.color
            });
            self.areaGroup.add(areaRect);
            // 绘制区域组的文字
            var areaText = new Konva.Text({
                x: areaX + areaW + 20,
                y: areaY,
                text: item.name,
                fontSize: 20,
                fill: item.color
            });
            self.areaGroup.add(areaText);

            // 9.更新起始的角度(下一个扇区开启的角度是上一个扇区结束的角度)
            beginAngle += tempAngle;
        });
    },
    
    // 做动画
    playAnimation : function () {
        // 0.备份this
        var self = this;
        // 1.开始的状态->动画开始的时候才需要让所有扇区的角度为0
        if(this.animationIndex == 0){
            this.wedgeGroup.getChildren().forEach(function (item,index) {
                item.angle(0);
            });
        }

        var wedge = this.wedgeGroup.getChildren()[this.animationIndex];

        wedge.to({
            angle : this.dataArray[this.animationIndex].value * 360,
            duration: this.dataArray[this.animationIndex].value,
            onFinish: function() {
                // 累加索引
                self.animationIndex++; // 1
                if(self.animationIndex == self.dataArray.length){
                    self.animationIndex = 0;
                    return;
                }
                // 递归调用
                self.playAnimation();
            }
        });
    }
}