/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  // 法一: 数组
  // let arr = new Array(26).fill(0), right = 0
  // while (right <= magazine.length - 1) {
  //   let index = magazine[right].charCodeAt() - 'a'.charCodeAt()
  //   arr[index]++
  //   right++
  // }

  // let r = 0
  // while (r <= ransomNote.length - 1) {
  //   let index = ransomNote[r].charCodeAt() - 'a'.charCodeAt()
  //   if (arr[index]) {
  //     arr[index]--
  //   } else {
  //     return false
  //   }
  //   r++
  // }

  // return true

  // 法二：map
  if (magazine.length < ransomNote.length) return false;
  let resMap = new Map()
  for (let i = 0; i <= magazine.length - 1; i++) {
    let ele = magazine[i]
    ele in resMap ? resMap[ele]++ : resMap[ele] = 1
  }

  for (let j = 0; j <= ransomNote.length - 1; j++) {
    let ele = ransomNote[j]
    if (ele in resMap && resMap[ele] - 1 >= 0) {
      resMap[ele]--
    } else {
      return false
    }
  }
  return true
};
// @lc code=end

