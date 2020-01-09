window.onload = function () {
    // 1.选中商品
    selectProduct();
};

/**
 * 选中商品
 */
function selectProduct() {
    // 1.获取所有的按钮
    var checkeds = document.querySelectorAll('.cart-checked');

    // 2.给每一个按钮添加点击事件
    mjd.each(checkeds,function (ele,index) {
        mjd.tap(ele,function () {
            var parent = ele.parentNode;
            if (parent.className == 'cart-order-title') {
                // 获取section
                var p = parent.parentNode;
                var list = p.querySelectorAll('.cart-checked');
                // 点击了全选
                // 判断当前是否选中
                if (ele.hasAttribute('checked')){
                    // 当前选中了 清空列表的选中
                    mjd.each(list,function (e) {
                        e.removeAttribute('checked');
                    })
                }else {
                    // 不选中
                    // 让当前列表里面的所有的商品选中
                    mjd.each(list,function (e) {
                        e.setAttribute('checked','');
                    })
                }
            }else {
                // 单个商品选中
                // 如果当前是选中状态让它不选中
                if (ele.hasAttribute('checked')){
                    // 当前是选中状态
                    // 移除这个属性
                    ele.removeAttribute('checked');
                }else {
                    // 当没有这个属性
                    // 没有选中
                    // 如果是不选中状态让它选中
                    // 添加属性
                    ele.setAttribute('checked','');
                }
            }
        })
    })
}