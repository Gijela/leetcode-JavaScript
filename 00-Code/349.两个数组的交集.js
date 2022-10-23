/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 思路：把大数组作为对照数组，然后将小数组的元素与之对比，如果大数组中也有该元素，就可以保存到结果数组中。
var intersection = function(nums1, nums2) {
  // 确定nums1是长度最大的数组，如果不是，就将两个数组互换。
  if (nums1.length < nums2.length) {
    let temp = nums1
    nums1 = nums2
    nums2 = temp
  }

  const comparisonSet = new Set(nums1)
  let res = new Set()
  for (let i = 0; i < nums2.length; i++) {
    if (comparisonSet.has(nums2[i])) {
      res.add(nums2[i])
    }
  }
  return [...res]
};
// @lc code=end

