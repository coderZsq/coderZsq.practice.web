/**
 * Created by admin on 2019/7/24.
 */
function remove(node) {
    node.parentNode.removeChild(node);

}
function on(node,type,callback) {
    node.addEventListener(type,callback);

}
exports.on = on;
exports.remove = remove;