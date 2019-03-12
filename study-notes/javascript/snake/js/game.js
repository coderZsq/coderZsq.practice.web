;(function (window, undefined) {
    let that;


   function Game(map) {
       this.food = new Food();
       this.snake = new Snake();
       this.map = map;
       that = this;
   } 
   
   
   Game.prototype.start = function () {
       this.food.render(this.map);
       this.snake.render(this.map);
       runSnake();
       bindKey();
   };


   function bindKey() {
       document.addEventListener('keydown', function (e) {
           if (e.key === 'ArrowLeft') {
               this.snake.direction = 'left';
           } else if (e.key === 'ArrowUp') {
               this.snake.direction = 'top';
           } else if (e.key === 'ArrowRight') {
               this.snake.direction = 'right';
           } else if (e.key === 'ArrowDown') {
               this.snake.direction = 'bottom';
           }
       }.bind(that), false);
   }
   
   
   function runSnake() {
       let timerId = setInterval(function () {
            this.snake.move(this.food, this.map);
            this.snake.render(this.map);
            let maxX = this.map.offsetWidth / this.snake.width;
            let maxY = this.map.offsetHeight / this.snake.height;
            let headX = this.snake.body[0].x;
            let headY = this.snake.body[0].y;
            if (headX < 0 || headX >= maxX) {
                alert('Game Over');
                clearInterval(timerId);
            }
            if (headY < 0 || headY >= maxY) {
                alert('Game Over');
                clearInterval(timerId);
            }
       }.bind(that), 150);
   }


   window.Game = Game;
})(window, undefined);
