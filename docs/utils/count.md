# 统计字符串中每个字符的出现的个数

```js
function count(str) {
  const obj = {};
  str.replace(/\S/g, function(match) {
    obj[match] = obj[match] ? obj[match] + 1 : 1;
  });
  return obj;
}
console.log(count('hello world'));
// result
// { h: 1, e: 1, l: 3, o: 2, w: 1, r: 1, d: 1 }
```
