
/**
 * Created by admin on 2019/7/24.
 */
/*注意我们必须设置为test这样执行的时候，才可以去找到对应的文件*/
const parse = require('./parse');

/*设置一个测试用例*/
// test('parse',()=>{
//     /*具体的测试用例*/
//     expect(parse.parse('name=xmg').name).toBe('xmg');
//
// })
// test('stringfy',()=>{
//     expect(parse.stringfy({name:'xmg',age:20})).toBe('name=xmg&age=20')
// })
/*设置分组，在一个分组中，我们可以设置多个测试用例*/
describe('parse',()=>{
    test('parse',()=>{
    /*具体的测试用例*/
    expect(parse.parse('name=xmg').name).toBe('xmg1');

})
    test('parse1',()=>{
        /*具体的测试用例*/
        expect(parse.parse('name=xmg&age=20').age).toBe('20');

    })
})