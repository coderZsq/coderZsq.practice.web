module.exports = function (...rest) {
  var sum = 0;
  for (let i of rest) {
    sum += i;
  }
  return sum;
}