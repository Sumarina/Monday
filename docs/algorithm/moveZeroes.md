# 移动零

给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

输入: [0,1,0,3,12]
输出: [1,3,12,0,0]

说明:

必须在原数组上操作，不能拷贝额外的数组。
尽量减少操作次数。

双指针:时间复杂度 O(n),空间复杂度 O(1)

```js
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function(nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[j] = nums[i];
      if (i != j) {
        nums[i] = 0;
      }
      j++;
    }
  }
};
```

滚雪球的解法:时间复杂度 O(n),空间复杂度 O(1)

```js
var moveZeroes = function(nums) {
  let size = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      size++;
    } else if (size > 0) {
      nums[i - size] = nums[i];
      nums[i] = 0;
    }
  }
};
```
