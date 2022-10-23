/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// map
var twoSum = function(nums, target) {
  let map = new Map(), right = 0
  while (right <= nums.length - 1) {
    let diffe = target - nums[right]
    if (map.has(diffe)) {
      return [map.get(diffe), right]
    } else {
      map.set(nums[right], right)
    }
    right++
  }

};
// @lc code=end

