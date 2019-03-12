;(function (window, undefined) {
    let position = 'absolute';
    let elements = [];


    function Snake(options) {
        options = options || {};
        Parent.call(this, options);
        this.direction = options.direction || 'right';
        this.body = [
            {x: 3, y: 2, color: 'red'},
            {x: 2, y: 2, color: 'blue'},
            {x: 1, y: 2, color: 'blue'}
        ];
    }


    Snake.prototype = new Parent();
    Snake.prototype.constructor = Snake;


    Snake.prototype.render = function (map) {
        remove();
        for (let i = 0, len = this.body.length; i < len; i++) {
            let object = this.body[i];
            let div = document.createElement('div');
            map.appendChild(div);
            elements.push(div);
            div.style.position = position;
            div.style.width = this.width + 'px';
            div.style.height = this.height + 'px';
            div.style.left = object.x * this.width + 'px';
            div.style.top = object.y * this.height + 'px';
            div.style.backgroundColor = object.color;
        }
    };


    function remove() {
        for (let i = elements.length - 1; i >= 0; i--) {
            elements[i].parentNode.removeChild(elements[i]);
            elements.splice(i, 1);
        }
    }


    Snake.prototype.move = function(food, map) {
        for (let i = this.body.length - 1; i > 0; i--) {
            this.body[i].x = this.body[i - 1].x;
            this.body[i].y = this.body[i - 1].y;
        }
        let head = this.body[0];
        switch (this.direction) {
            case 'right':
                head.x += 1;
                break;
            case 'left':
                head.x -= 1;
                break;
            case 'top':
                head.y -= 1;
                break;
            case 'bottom':
                head.y += 1;
                break;
        }
        let headX = head.x * this.width;
        let headY = head.y * this.height;
        if (headX === food.x && headY === food.y) {
            let last = this.body[this.body.length - 1];
            // this.body.push({
            //     x: last.x,
            //     y: last.y,
            //     color: last.color
            // });
            let obj = {};
            extend(last, obj);
            this.body.push(obj);
            food.render(map);
        }
    };


    function extend(parent, child) {
        for (let key in parent) {
            if (child[key]) {
                continue;
            }
            child[key] = parent[key];
        }
    }


    window.Snake = Snake;
})(window, undefined);
