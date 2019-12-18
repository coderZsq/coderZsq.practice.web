/**
 * Created by liujun on 2018/3/2.
 */
/**1.定义普通的GenericNumber1类*/
var GenericNumber1 = (function () {
    function GenericNumber1(val) {
        this.value = val;
    }
    GenericNumber1.prototype.show = function (val) {
        console.log(this.value + val);
    };
    return GenericNumber1;
}());
var genericNumber1 = new GenericNumber1(100);
genericNumber1.show(200);
/**2.定义一个泛型类GenericNumber2*/
var GenericNumber2 = (function () {
    function GenericNumber2(t) {
        this.value = t;
    }
    GenericNumber2.prototype.show = function (t) {
        console.log(this.value, t);
    };
    return GenericNumber2;
}());
var genericNumber2 = new GenericNumber2(1000);
genericNumber2.show(2000);
var genericNumber3 = new GenericNumber2('lose');
genericNumber3.show('lili');
