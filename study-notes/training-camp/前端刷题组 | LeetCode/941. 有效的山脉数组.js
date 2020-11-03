/**
 * https://leetcode-cn.com/problems/valid-mountain-array/
 */

{
  let validMountainArray = function (A) {
    let len = A.length
    let left = 0
    let right = len - 1
    while (left + 1 < len && A[left] < A[left + 1]) left++
    while (right > 0 && A[right - 1] > A[right]) right--
    return left > 0 && right < len - 1 && left == right;
  }
}