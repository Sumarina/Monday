# How to Capitalize the First Letter of Each Word in a String Using JavaScript

```js
const titleCase = (str) => {
  const splitArr = str.toLowerCase().split(' ');
  for (const [i, str] of splitArr.entries()) {
    splitArr[i] = str[0].toUpperCase() + str.substring(1);
  }
  return splitArr.join(' ');
};
```

知识点：
`slice()` 方法提取某个字符串的一部分，并返回一个新的字符串，且不会改动原字符串。两个入参，[startIndex,endIndex)。

1. 入参为负数，则使用 字符串 length + 入参。
1. endIndex 省略，则默认到字符串结尾。
1. 入参为正负整数。

`substring()` 方法返回一个字符串在开始索引到结束索引之间的一个子集，或从开始索引直到字符串的末尾的一个子集。两个入参，[startIndex,endIndex)。

1. 入参不是正整数，统一处理为 0。
1. 不管入参顺序，比较大的 index 认为是 endIndex。
1. startIndex == endIndex 返回空字符串。
1. 任意参数大于 字符串 length，统一处理为 字符串 length。
   **`sub`已经废弃，`subStr`即将废弃**

从 string 类型的字符串中获取任意单个字符，有两种方式：

1. 使用`marin.charAt(0)`。
1. 把字符串当作一个类似数组的对象，其中每个字符对应一个索引，如`marin[0]`。
