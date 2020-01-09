window.onload = function () {
    // 1.选中商品
    selectProduct();
    // 2.删除商品
    deleProduct();
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

/**
 * 删除商品
 */
function deleProduct() {
    // 1.获取列表
    var transhs = document.querySelectorAll('.cart-order .trash');
    // 获取所有的订单列表
    var orderList = document.querySelectorAll('.cart-order .cart-order-list');
    var panel = document.querySelector('.panel');
    var panel_main = panel.children[0];
    // 取消按钮
    var cancel = document.querySelector('.panel .cancel');
    // 垃圾桶盖子
    var up = null;
    // 确定按钮
    var submit = document.querySelector('.panel .submit');

    // 2.添加点击事件
    mjd.each(transhs,function (ele,index) {
        mjd.tap(ele,function () {
            // 1.垃圾桶的盖子要打开
            // 获取第一个子元素
            up = ele.firstElementChild;
            // 调整形变中心点
            up.style.transformOrigin = '0 3px';
            // 记录索引
            up.index = index;

            // 2.旋转
            up.style.transform = 'rotate(-45deg)';
            up.style.webkitTransform = 'rotate(-45deg)';

            // 3.动画
            // 3.1 面板显示
            panel.style.display = 'block';
            panel_main.className = 'panel-main jump';
        })
    })

    // 3.点击取消按钮
    mjd.tap(cancel,function () {
        // 1.隐藏动画
        panel.style.display = 'none';
        panel_main.className = 'panel-main';

        // 2.盖子复位
        up.style.transform = 'none';
        up.style.webkitTransform = 'none';
    })

    // 4.监听确定按钮的点击
    mjd.tap(submit,function () {
        // 1.隐藏动画
        panel.style.display = 'none';
        panel_main.className = 'panel-main';

        // 2.盖子复位
        up.style.transform = 'none';
        up.style.webkitTransform = 'none';


        // 2.点击确定要删除点击的那个商品

        // 获取当前订单
        var order = orderList[up.index];

        var p = order.parentNode;
        // 从section中获取订单数量
        var orders = p.querySelectorAll('.cart-order-list');

// 3.判断 如果当前列表中是最后一个元素要删除整个区块
        if (orders.length == 1){
            // 删除区块
            var cart_order = document.querySelector('.cart-order');
            cart_order.removeChild(p);
        }else {
            p.removeChild(order);
        }
    })
}