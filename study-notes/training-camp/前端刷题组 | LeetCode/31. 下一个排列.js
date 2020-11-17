/**
 * https://leetcode-cn.com/problems/next-permutation/
 */

let nextPermutation = function (nums) {
  if (nums.length < 2) return nums;
  let len = nums.length;
  let i = len - 2;
  let j = len - 1, k = len - 1;
  while (i >= 0 && nums[i] >= nums[j]) i--, j--;
  if (i < 0) return nums.sort((a, b) => a - b);
  while (k > i && nums[i] >= nums[k]) k--;
  [nums[i], nums[k]] = [nums[k], nums[i]];
  while (len > j) {
    [nums[j], nums[len - 1]] = [nums[len - 1], nums[j]];
    len--;
    j++;
  }
};