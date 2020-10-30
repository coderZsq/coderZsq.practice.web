/**
 * https://leetcode-cn.com/problems/sum-root-to-leaf-numbers/
 */

{
  let sumNumbers = function (root) {
    if (root === null) return 0
    let sum = 0
    const helper = function (node, sub) {
      if (node.left === null && node.right === null) {
        return sum += sub * 10 + node.val
      }
      if (node.left) {
        helper(node.left, sub * 10 + node.val)
      }
      if (node.right) {
        helper(node.right, sub * 10 + node.val)
      }
    }
    helper(root, 0)
    return sum
  }
}

{
  let sumNumbers = function (root) {
    if (root === null) return 0
    let sum = 0
    const helper = function (node, sub) {
      if (node.left === null && node.right === null) {
        sub.push(node.val)
        return sum += Number(sub.join(''))
      }
      if (node.left) {
        helper(node.left, [...sub, node.val])
      }
      if (node.right) {
        helper(node.right, [...sub, node.val])
      }
    }
    helper(root, [])
    return sum
  }
}

{
  let sumNumbers = function (root) {
    return function dfs(root, sum) {
      if (root === null) return 0
      sum = sum * 10 + root.val
      if (!root.left && !root.right) return sum
      return dfs(root.left, sum) + dfs(root.right, sum)
    }(root, 0)
  }
}