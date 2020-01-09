/**
 * Created by admin on 2019/7/24.
 */
const dom = require('./dom');
/*设置一个测试用例*/
// test('domtest',()=>{
//     /*设置对应的innerhtml*/
//     document.body.innerHTML = '<div id="container"><span id="hello">hello</span></div>'
//     /*我们可以使用document应为内置可以处理dom节点*/
//     let hello = document.querySelector('#hello');
//     expect(hello.nodeName.toLowerCase()).toBe('span');
//     dom.remove(hello);
//     let hello2 = document.querySelector('#hello');
//     expect(hello2).toBeNull();
// })

test('on',()=>{
    document.body.innerHTML ='<button id="clickMe">click</button>'
    let clickMe = document.querySelector('#clickMe');
    dom.on(clickMe,'click',function () {
        clickMe.innerHTML='clicked';
    })
    /*模拟点击*/
    clickMe.click();
    expect(clickMe.innerHTML).toBe('clicked')


})