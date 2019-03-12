;(function (window, undefined) {
    function Parent(options) {
        options = options || {};
        this.width = options.width || 20;
        this.height = options.height || 20;
    }

    window.Parent = Parent;
})(window, undefined);