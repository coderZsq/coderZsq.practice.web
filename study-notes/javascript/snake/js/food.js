;(function(window, undefined) {
    let position = 'absolute';
    let elements = [];


    function Food(options) {
        options = options || {};
        this.x = options.x || 0;
        this.y = options.y || 0;
        Parent.call(this, options);
        this.color = options.color || 'green';
    }


    Food.prototype = new Parent();
    Food.prototype.constructor = Food;


    Food.prototype.render = function (map) {
        remove();
        this.x = Tools.getRandom(0, map.offsetWidth / this.width - 1) * this.width;
        this.y = Tools.getRandom(0, map.offsetHeight / this.height - 1) * this.height;
        let div = document.createElement('div');
        map.appendChild(div);
        elements.push(div);
        div.style.position = position;
        div.style.left = this.x + 'px';
        div.style.top = this.y + 'px';
        div.style.width = this.width + 'px';
        div.style.height = this.height + 'px';
        div.style.backgroundColor = this.color;
    };


    function remove() {
        for (let i = elements.length - 1; i >= 0; i--) {
            elements[i].parentNode.removeChild(elements[i]);
            elements.splice(i, 1);
        }
    }


    window.Food = Food;
})(window, undefined);