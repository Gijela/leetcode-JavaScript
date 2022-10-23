/*
 * @lc app=leetcode.cn id=232 lang=javascript
 *
 * [232] 用栈实现队列
 */

// @lc code=start

var MyQueue = function() {
  this.inStack = []
  this.outStack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.inStack.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  if (this.outStack.length) {
    return this.outStack.pop()
  } 
  while (this.inStack.length) {
    let top = this.inStack.pop()
    this.outStack.push(top)
  }
  return this.outStack.pop()

};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  if (this.outStack.length) {
    return this.outStack[this.outStack.length - 1]
  } 
  while (this.inStack.length) {
    let top = this.inStack.pop()
    this.outStack.push(top)
  }
  return this.outStack.length ?  this.outStack[this.outStack.length - 1] : null
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  if (this.outStack.length || this.inStack.length) {
    return false
  } 
  return true
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
// @lc code=end

