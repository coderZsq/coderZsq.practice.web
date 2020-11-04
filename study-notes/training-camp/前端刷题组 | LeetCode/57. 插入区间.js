/**
 * https://leetcode-cn.com/problems/insert-interval/
 */

{
  let insert = function (intervals, newInterval) {
    intervals.push(newInterval)
    intervals = intervals.sort((a, b) => { return a[0] - b[0] })
    const ret = [intervals[0]]
    for (let i = 1; i < intervals.length; i++) {
      const last = ret[ret.length - 1]
      if (last[1] < intervals[i][0]) {
        ret.push(intervals[i])
      } else if (last[1] < intervals[i][1]) {
        last[1] = intervals[i][1]
      }
    }
    return ret
  }
}

{
  let insert = function (intervals, newInterval) {
    let len = intervals.length
    if (len === 0 || intervals[len - 1][1] < newInterval[0]) {
      let ret = []
      ret[len] = newInterval
      for (let i = 0; i < len; i++)
        ret[i] = intervals[i]
      return ret
    }
    if (newInterval[1] < intervals[0][0]) {
      let ret = []
      ret[0] = newInterval
      for (let i = 1; i < len + 1; i++)
        ret[i] = intervals[i - 1]
      return ret
    }
    let left = 0, right = len - 1
    while (intervals[left][1] < newInterval[0]) left++
    while (newInterval[1] < intervals[right][0]) right--
    let begin = Math.min(intervals[left][0], newInterval[0])
    let end = Math.max(intervals[right][1], newInterval[1])
    let ret = []
    let i = 0
    while (i < left) {
      ret[i] = intervals[i]
      i++
    }
    ret[i++] = [begin, end]
    while (i < len - right + left) {
      ret[i] = intervals[i - left + right]
      i++
    }
    return ret
  }
}