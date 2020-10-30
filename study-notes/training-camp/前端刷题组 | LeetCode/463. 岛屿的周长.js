/**
 * https://leetcode-cn.com/problems/island-perimeter/
 */

{
  let islandPerimeter = function (grid) {
    let result = 0
    for (let y = 0; y < grid.length; y++) {
      for (let x = 0; x < grid[0].length; x++) {
        if (grid[y][x] === 1) {
          result += ((grid, x, y) => {
            let sides = 0
            if (x === 0 || grid[y][x - 1] === 0) sides++
            if (y === 0 || grid[y - 1][x] === 0) sides++
            if (x === grid[0].length - 1 || grid[y][x + 1] === 0) sides++
            if (y === grid.length - 1 || grid[y + 1][x] === 0) sides++
            return sides
          })(grid, x, y)
        }
      }
    }
    return result
  }
}

{
  let islandPerimeter = function (grid) {
    let result = 0
    for (let y = 0; y < grid.length; y++) {
      for (let x = 0; x < grid[0].length; x++) {
        if (grid[y][x] === 1) {
          result += 4
          if (x > 0 && grid[y][x - 1] === 1) result -= 2
          if (y > 0 && grid[y - 1][x] === 1) result -= 2
        }
      }
    }
    return result
  }
}