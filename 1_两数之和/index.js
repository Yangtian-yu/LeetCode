// 给定一个整数数组 nums 和一个整数目标值 target，
// 请你在该数组中找出 和为目标值 target  的那 两个 整数，
// 并返回它们的数组下标。
// 你可以假设每种输入只会对应一个答案。
// 但是，数组中同一个元素在答案里不能重复出现。
// 示例 1：

// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//暴力枚举
function twoSum(nums, target) {
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    for (let j = index + 1; j < nums.length; j++) {
      const newelement = nums[j];
      if (element + newelement === target && index != j) {
        return [index, j];
      }
    }
  }
}
// [2,7,11,15]
// 9
//hash表
function twosum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.has(diff)) {
      const newmap = [map.get(diff), i];
      return newmap;
    }
    map.set(nums[i], i);
  }
}

const nums = [2, 7, 11, 15];
const target = 9;
console.log(twosum(nums, target));
