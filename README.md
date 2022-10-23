# 方法

和次数相关的，用哈希表
和匹配相关的， 用栈

## (数组)二分法

题目：1,2,3,4,7,9,10 中查找元素 2

![二分法](https://camo.githubusercontent.com/dbfc30d134666df6ff7fab7e2170677ca966ac3718779e61184dc2d26b79631c/68747470733a2f2f696d672d626c6f672e6373646e696d672e636e2f32303231303331313135333035353732332e6a7067)

## (数组、字符串、链表)双指针法

（1）删除元素  
给定 nums = [0,1,2,2,3,0,4,2], val = 2, 函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。

![删除元素](https://tva1.sinaimg.cn/large/008eGmZEly1gntrds6r59g30du09mnpd.gif)

（2）反转简单的字符串
输入：["h","e","l","l","o"]
输出：["o","l","l","e","h"]

![](https://tva1.sinaimg.cn/large/008eGmZEly1gp0fvi91pfg30de0akwnq.gif)

（3）隔 k 位反转 k 位
输入: s = "abcdefg", k = 2
输出: "bacdfeg"

```js
var reverseStr = function (s, k) {
  const len = s.length;
  let resArr = s.split(""); // 将一个英文字符串分隔开一个个字母的字符串

  for (let i = 0; i < len; i += 2 * k) {
    let l = i - 1,
      r = i + k > len ? len : i + k;

    // i 至 i+k 之间互换元素的位置(实现反转)
    while (++l < --r) [resArr[l], resArr[r]] = [resArr[r], resArr[l]];
  }

  return resArr.join(""); // join() 方法将数组作为字符串返回
};
```

（4）替换空格
请实现一个函数，把字符串 s 中的每个空格替换成"%20"。

示例 1： 输入：s = "We are happy."

![](https://tva1.sinaimg.cn/large/e6c9d24ely1go6qmevhgpg20du09m4qp.gif)

（5）反转多个单词组成的字符串
示例 1：
输入: "the sky is blue"
输出: "blue is sky the"

解题思路如下：

移除多余空格
将整个字符串反转
将每个单词反转
举个例子，源字符串为："the sky is blue "

移除多余空格 : "the sky is blue"
字符串反转："eulb si yks eht"
单词反转："blue is sky the"

（6）反转字符串 II(左旋转)
字符串的左旋转操作是把字符串前面的若干个字符转移到字符串的尾部。

示例 1： 输入: s = "abcdefg", k = 2 输出: "cdefgab"

![](https://code-thinking.cdn.bcebos.com/pics/%E5%89%91%E6%8C%87Offer58-II.%E5%B7%A6%E6%97%8B%E8%BD%AC%E5%AD%97%E7%AC%A6%E4%B8%B2.png)

## (数组)滑动窗口

（1）给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的 连续 子数组，并返回其长度。如果不存在符合条件的子数组，返回 0。

示例：

输入：s = 7, nums = [2,3,1,2,4,3] 输出：2 解释：子数组 [4,3] 是该条件下的长度最小的子数组。

![](https://code-thinking.cdn.bcebos.com/gifs/209.%E9%95%BF%E5%BA%A6%E6%9C%80%E5%B0%8F%E7%9A%84%E5%AD%90%E6%95%B0%E7%BB%84.gif)

## (链表)虚拟头节点

[点击跳转](./02-链表篇/readme.md)

## (哈希表)数组、set、map

[点击跳转](./04-哈希表篇/01-数组、set、map)

## (栈与队列)匹配

[点击跳转](./05-栈与队列/01-匹配)
