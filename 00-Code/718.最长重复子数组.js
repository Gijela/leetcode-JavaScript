/*
 * @lc app=leetcode.cn id=718 lang=javascript
 *
 * [718] 最长重复子数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findLength = function(nums1, nums2) {
  let map = new Map()
  let res = []
  for (let i = 0; i < nums1.length; i++) {
    if (map.has(nums1[i]) == false) {
      map.set(nums1[i], 1)
    } else {
      let value = map.get(nums1[i])
      value++
      map.set(nums1[i], value)
    }
  }
   
  for (let j = 0; j < nums2.length; j++) {
    let value = map.get(nums2[j])
    if (value > 0) {
      res.push(nums2[j])
      value--
      map.set(nums2[j], value)
    } else {
      continue
    }
  }
  return res.length
};

// @lc code=end

