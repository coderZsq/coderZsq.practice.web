{
  let uniqueOccurrences = function (arr) {
    arr.sort((a, b) => a - b)
    let count = 1
    let set = new Set()
    for (let i = 1; i < arr.length; i++) {
      if (arr[i - 1] !== arr[i]) {
        if (set.size === set.add(count).size) return false
        count = 1
      } else {
        count++
      }
    }
    if (set.size === set.add(count).size) return false
    return true
  }
}

{
  let uniqueOccurrences = function (arr) {
    let map = new Map()
    for (let x of arr) {
      map.set(x, (map.get(x) ? map.get(x) : 0) + 1)
    }
    let set = new Set()
    for (let x of map.values()) {
      set.add(x)
    }
    return map.size === set.size
  }
}

{
  let uniqueOccurrences = function (arr) {
    let obj = {}
    for (let x of arr) {
      if (obj[x]) {
        obj[x]++
      } else {
        obj[x] = 1
      }
    }
    let times = {}
    for (let x in obj) {
      if (times[obj[x]]) return false
      times[obj[x]] = true
    }
    return true
  }
}
