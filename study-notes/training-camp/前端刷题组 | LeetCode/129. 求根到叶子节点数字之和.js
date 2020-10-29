/**
 * https://leetcode-cn.com/problems/sum-root-to-leaf-numbers/
 */

{
  let sumNumbers = function (root) {
    return function dfs(root, prevSum) {
      if (root === null) return 0
      let sum = prevSum * 10 + root.val
      if (!root.left && !root.right) return sum
      return dfs(root.left, sum) + dfs(root.right, sum)
    }(root, 0)
  }
}