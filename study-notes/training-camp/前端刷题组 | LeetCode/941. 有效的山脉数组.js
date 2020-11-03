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
    return left > 0 && right < len - 1 && left == right
  }
}

{
  let validMountainArray = function (A) {
    let peak = 0
    if (A[1] < A[0]) return false
    for (let i = 1; i < A.length; i++) {
      if (peak === 0 && A[i - 1] >= A[i]) peak++
      if (peak === 1 && A[i - 1] <= A[i]) return false
    }
    return peak === 1
  }
}
