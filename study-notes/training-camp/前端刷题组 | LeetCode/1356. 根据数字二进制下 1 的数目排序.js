/**
 * https://leetcode-cn.com/problems/sort-integers-by-the-number-of-1-bits/
 */

{
  let sortByBits = function (arr) {
    return arr.sort((a, b) => a - b).map(n => {
      let count = 0, tmp = n
      while (tmp > 0) tmp = tmp & (tmp - 1), count++
      return [n, count]
    }).sort((a, b) => a[1] - b[1]).map(item => item[0])
  }
}