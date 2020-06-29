# 盛最多水的容器

给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点  (i, ai) 。在坐标内画 n 条垂直线，垂直线 i  的两个端点分别为  (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与  x  轴共同构成的容器可以容纳最多的水
来源[https://leetcode-cn.com/problems/container-with-most-water/](https://leetcode-cn.com/problems/container-with-most-water/)

输入：[1,8,6,2,5,4,8,3,7]
输出：49

暴力法:时间复杂度 O(n 的平方) 空间复杂度 O(1)
在 leetcode 执行时间:1996ms

```js
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  if (height.length < 2) return 0;
  let max_area = 0;
  for (let i = 0; i < height.length - 1; i++) {
    for (let j = 1; j < height.length; j++) {
      let diff = j - i;
      let min = Math.min(height[i], height[j]);
      let area = min * diff;
      max_area = Math.max(area, max_area);
    }
  }
  return max_area;
};
```

双指针:时间复杂度 O(n) 空间复杂度 O(1)
在 leetcode 执行时间:100ms

```js
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  if (height.length < 2) return 0;
  let max_area = 0;
  let i = 0;
  j = height.length - 1;
  while (i <= j) {
    const diff = j - i;
    const min = Math.min(height[i], height[j]);
    const area = min * diff;
    max_area = Math.max(area, max_area);
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }
  return max_area;
};
```
