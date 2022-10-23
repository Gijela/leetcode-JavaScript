/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
// 栈天生就是用来做匹配题的
var isValid = function(s) {
  if (s.length % 2 == 1) return false // 边界情况1： 奇数个字符
  let stack = []
  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "(":
        stack.push(')')
        break;
      case "[":
        stack.push(']')
        break;
      case "{":
        stack.push('}')
        break;
      default:
        if (stack.indexOf(s[i]) == -1) return false // 边界情况2： 栈中没有该元素
        let end = stack.length - 1
        if (s[i] == stack[end]) stack.pop()
        break;
    }
  }  
  return stack.length == 0
};
// @lc code=end

