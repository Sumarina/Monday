# 二分查找法

```js
function binarySearch(arr, target) {
  let l = 0,
    r = arr.length - 1;

  while (l <= r) {
    let mid = Math.floor(l + (r - l) / 2); //注意：如果是(l+r)/2，l和r都是整数最大值则相加后发生溢出bug。
    if (arr[mid] == target) return mid;
    else if (target > arr[mid]) l = mid + 1;
    else r = mid - 1;
  }
  return -1;
}
```
