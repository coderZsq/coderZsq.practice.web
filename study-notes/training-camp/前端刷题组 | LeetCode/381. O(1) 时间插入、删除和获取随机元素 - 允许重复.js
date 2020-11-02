/**
 * https://leetcode-cn.com/problems/insert-delete-getrandom-o1-duplicates-allowed/
 */

{
  let RandomizedCollection = function () {
    this.map = new Map()
    this.list = []
  }

  RandomizedCollection.prototype.insert = function (val) {
    this.list.push(val)
    const set = this.map.has(val) ? this.map.get(val) : new Set()
    set.add(this.list.length - 1)
    this.map.set(val, set)
    return set.size === 1
  }

  RandomizedCollection.prototype.remove = function (val) {
    if (!this.map.has(val)) return false

    let idx = null
    for (const it of this.map.get(val)) {
      if (!idx) {
        idx = it
        break
      }
    }

    const lastIdx = this.list.length - 1
    const lastVal = this.list[lastIdx]

    this.list[idx] = lastVal
    this.list.pop()

    this.map.get(val).delete(idx)
    this.map.get(lastVal).delete(lastIdx)
    if (idx < lastIdx) this.map.get(lastVal).add(idx)
    if (this.map.get(val).size === 0) this.map.delete(val)

    return true;
  }

  RandomizedCollection.prototype.getRandom = function () {
    return this.list[Math.floor(Math.random() * this.list.length)];
  }
}