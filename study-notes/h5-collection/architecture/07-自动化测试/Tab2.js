/**
 * Created by admin on 2019/7/24.
 */
let Tab = require('./Tab');
const fs = require('fs');
const path = require('path')
/*设置测试用例*/
test('tab',()=>{
    document.body.innerHTML = fs.readFileSync(path.resolve(__dirname,'tab.html'));
    /*设置一个类*/
    new Tab({
        id:'Tab',
        button:'tab-button',
        panel:'tab-panel'
    })
    /*验证对应的的方法*/

    // let tab = document.getElementById('tab');
    // let buttons = tab.querySelectorAll('.tab-button');
    // let panels = tab.querySelectorAll('.tab-panel');
    // expect(buttons[0].style.backgroundColor).toBe('red');
    // expect(panels[0].style.display).toBe('block');
    let tab = document.getElementById('Tab');
    let buttons = document.querySelectorAll('.tab-button');
    let panles = document.querySelectorAll('.tab-panel');
    expect(buttons[0].style.backgroundColor).toBe('red');
    expect(panles[0].style.display).toBe('block');
    // expect(buttons[0])
    // buttons[1].click();

})