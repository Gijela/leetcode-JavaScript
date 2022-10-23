/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 将字母顺序和数组下标的顺序联系起来的方法如下：
//  数组下标 =  x.charCodeAt() - a.charCodeAt()

var isAnagram = function(s, t) {
  if (s.length != t.length) return false // 元素个数不相同，不能一一对应
  let arr = new Array(26).fill(0)
  for (const n1 of s) {
    let index = n1.charCodeAt() - 'a'.charCodeAt()
    arr[index]++
  }  
  for (const n2 of t) {
    let index = n2.charCodeAt() - 'a'.charCodeAt()
    if (!arr[index]) return false // t字符串有的字母，但是s没有，就直接返回false
    arr[index]--
  }

  return true
};
// @lc code=end

