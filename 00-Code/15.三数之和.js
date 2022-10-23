/*
 * @lc app=leetcode.cn id=15 lang=javascript
 *
 * [15] 三数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 大体上的思路: 先排序(实现从小到大排序), 然后遍历排序后的数组, 定义左指针在i位的下一位, 右指针在最后一位(length - 1), 三个数(第i位, 左指针位, 右指针位)相加得和sum. 判断sum的值, 如果是0直接返回结果, 如果sum<0, 左指针往右一位, 如果是正值, 右指针往左一位
var threeSum = function(nums) {
  let res = []

  // 数组长度小于三, 不合要求, 直接返回空数组
  if(nums.length < 3) return res

  nums.sort((a, b) => a - b) // 排序, 会实现从小到大排序

  for(let i = 0; i < nums.length; i++) {
    if(nums[i] > 0) break // 如果第i位大于0, 后面的左指针右指针指向的值也必大于0, 直接结束循环, 后面的都不合适

    // (去重)第i位和第i-1位相同, 那么返回的情况也会是一样的,会使得结果重复.直接跳过这个元素即可
    if(i > 0 && nums[i] == nums[i-1]) continue
    
    // 定义指针
    let L = i + 1
    let R = nums.length - 1

    while(L < R) {
      // 先判断三数的和
      let sum = nums[i] + nums[L] + nums[R]
      
      // 判断三数和的情况
      if(sum == 0) { // 三数和为 0
        res.push([nums[i], nums[L], nums[R]])

        // 这是去重要做的操作
        while(L < R && nums[L] == nums[L+1]) { // 左指针的下一位和当前位的值相同, 那么情况返回的情况也是相同的,跳过即可.
          L++
        } 

        while(L < R && nums[R] == nums[R-1]) { // 右指针的前一位和当前位相同, 那么情况返回的情况也是相同的,跳过即可
          R--
        }

        // 这里是常规的操作
        L++
        R--

      }else if(sum < 0) { // 和小于 0 
        // 左指针向右一位
        L++
      }else {
        R--
      }

    }

  }

  return res
};
// @lc code=end

