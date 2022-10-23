/*
 * @lc app=leetcode.cn id=1002 lang=javascript
 *
 * [1002] 查找共用字符
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {
  let arr = new Array(26).fill(0)

  // words[0] 元素
  for (const n1 of words[0]) {
    // 找到对应索引下标
    let index = n1.charCodeAt() - 'a'.charCodeAt()
    arr[index]++
  }

  // words[1] - words[最后一个]元素
  let i = 1
  while (i <= words.length - 1) {
    let tempStr = words[i]
    let tempArr = new Array(26).fill(0)
    for (const n2 of tempStr) {
      let index = n2.charCodeAt() - 'a'.charCodeAt()
      tempArr[index]++
    }
    for (let k = 0; k < 26; k++) {
      arr[k] = Math.min(arr[k], tempArr[k])
    }
    i++
  }

  let res = []
  for (let j = 0; j < 26; j++) {
    while (arr[j] > 0) {
      res.push(String.fromCharCode(j + 'a'.charCodeAt()))
      arr[j]--
    } 
  }
  
  return res
};
// @lc code=end

