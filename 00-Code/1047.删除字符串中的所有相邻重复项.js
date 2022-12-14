/*
 * @lc app=leetcode.cn id=1047 lang=javascript
 *
 * [1047] 删除字符串中的所有相邻重复项
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
  let stack = []
  for (let i = 0; i < s.length; i++) {
    if (stack.length == 0) {
      stack.push(s[i])
      continue
    }
    if (s[i] == stack[stack.length - 1]) {
      stack.pop()
      continue
    } else {
      stack.push(s[i])
    }
  }
  return stack.join('')
};
// @lc code=end

