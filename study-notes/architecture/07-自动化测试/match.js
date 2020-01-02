/**
 * Created by admin on 2019/7/24.
 */
let a = {
    name:'xmg',
    age:20
}
let b = {
    name:'xmg',
    age:20
}
test('equal',()=>{
    expect(a.name).toBe('xmg');
    expect(a).toEqual(b);
    expect(a.xx).toBeUndefined();
    expect(null).toBeNull();
})

/*设置其他断言*/
test('contain',()=>{
    expect(a).hasOwnProperty('name');
    expect(['a','b','c']).toContain('a')
    expect('1988').toMatch(/\d{4}/)

})
/*设置逻辑断言*/
test('logic',()=>{
    expect(1==1).toBeTruthy();
    expect(1).not.toBeGreaterThan(2);
})
