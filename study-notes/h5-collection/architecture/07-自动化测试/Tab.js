/**
 * Created by admin on 2019/7/24.
 */

/*设置一个类，用来创建对应的结构*/
class Tab{
    constructor(options) {
        let { id, button, panel } = options;
        let tab = this.tab = document.getElementById(id);
        let buttons = this.buttons = Array.from(tab.querySelectorAll('.' + button));
        let panels = this.panels = Array.from(tab.querySelectorAll('.' + panel));
        this.select(0);
        this.bindEvent();
    }

    select(current) {
        this.buttons.forEach((item, index) => {
            if (current == index) {
                item.style.backgroundColor = 'red';
                this.panels[index].style.display = 'block';
            } else {
                item.style.backgroundColor = '';
                this.panels[index].style.display = 'none';
            }
        });
    }
    bindEvent() {
        for (let i = 0; i < this.buttons.length; i++) {
            this.buttons[i].addEventListener('click', () => {
                this.select(i);
            });
        }
    }
    /*设置对应的选中
    * 遍历所所有的按钮，如果要是这个按钮和传过来的值相等，我们就设置当前按钮的颜色为红色
    * 设置对应的div的display为block*/

    /*设置对应的绑定点击,遍历对应的按钮，然后设置天机点击事件的会回调中调用对应的select方法*/

}
module.exports = Tab;
