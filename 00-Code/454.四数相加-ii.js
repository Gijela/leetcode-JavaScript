/*
 * @lc app=leetcode.cn id=454 lang=javascript
 *
 * [454] 四数相加 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function(nums1, nums2, nums3, nums4) {
  let sumMap = new Map()
  for (const n1 of nums1) {
    for (const n2 of nums2) {
      let sumAB = n1 + n2
      sumMap.set(sumAB, (sumMap.get(sumAB) || 0) + 1)
    }
  }

  let count = 0
  for (const n3 of nums3) {
    for (const n4 of nums4) {
      let sumCD = n3 + n4
      let sumABCount = sumMap.get(-sumCD) || 0
      count += sumABCount
    }
  } 
   return count
};
// @lc code=end

