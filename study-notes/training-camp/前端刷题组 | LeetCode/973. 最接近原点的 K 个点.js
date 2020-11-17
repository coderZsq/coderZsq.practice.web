/**
 * https://leetcode-cn.com/problems/k-closest-points-to-origin/
 */

let kClosest = function (points, K) {
  const heap = new MaxHeap(K, (p1, p2) => (p1[0] ** 2 + p1[1] ** 2) - (p2[0] ** 2 + p2[1] ** 2));

  for (let i = 0; i < points.length; i++) {
    heap.add(points[i]);
  }
  return heap.data.slice(1);
}

class MaxHeap {
  constructor(maxSize, compare) {
    this.data = [null]
    this.maxSize = maxSize
    this.compare = compare
  }

  compareIndex(n1, n2) {
    return this.compare(this.data[n1], this.data[n2])
  }

  size() {
    return this.data.length - 1
  }


  add(val) {
    if (this.size() === 0) {
      this.data[1] = val
    } else if (this.size() < this.maxSize) {
      this.data.push(val)
      this.up(this.size())
    } else {
      if (this.compare(val, this.data[1]) < 0) {
        this.data[1] = val
        this.down(1)
      }
    }
  }

  up(index) {
    const parent = Math.floor(index / 2)
    if (index > 1 && this.compareIndex(index, parent) > 0) {
      this.swap(index, parent)
      this.up(parent)
    }
  }

  down(index) {
    const left = index * 2
    const right = left + 1
    if (left > this.size()) {
      return
    } else if (right > this.size()) {
      if (this.compareIndex(left, index) > 0) {
        this.swap(left, index)
      }
    } else {
      const max = this.compareIndex(left, right) > 0 ? left : right
      if (this.compareIndex(max, index) > 0) {
        this.swap(max, index)
        this.down(max)
      }
    }
  }

  swap(n1, n2) {
    [this.data[n1], this.data[n2]] = [this.data[n2], this.data[n1]]
  }
}