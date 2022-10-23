/*
 * @lc app=leetcode.cn id=150 lang=javascript
 *
 * [150] 逆波兰表达式求值
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  let stack = []
  for (let i = 0; i < tokens.length; i++) {
    switch(tokens[i]) {
      case '+' :
        let top1 = stack.pop()
        let top2 = stack.pop()
        stack.push(top1 + top2)
        break
      case '-' :
        let top3 = stack.pop()
        let top4 = stack.pop()
        stack.push(top4 - top3)
        break
      case '*' :
        let top5 = stack.pop()
        let top6 = stack.pop()
        stack.push(top5 * top6)
        break
      case '/' :
        let top7 = stack.pop()
        let top8 = stack.pop()
        stack.push(parseInt(top8 / top7))
        break
      default: 
        stack.push(tokens[i] - 0)
        break
    }
  }
  return stack[0]
};
// @lc code=end

