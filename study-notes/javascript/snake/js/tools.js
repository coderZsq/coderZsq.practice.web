;(function (window, undefined) {
    window.Tools = {
        getRandom: function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    };
})(window, undefined);
