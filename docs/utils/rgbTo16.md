# rgb 的十进制值转化为 16 进制值

```js
function rgb2hex(sRGB) {
  const reg = /^(rgb|RGB)\(\s*(\d{1,3})\s*\,\s*(\d{1,3})\s*\,\s*(\d{1,3})\s*\)$/;
  if (!reg.test(sRGB)) return sRGB;
  return sRGB.replace(reg, function() {
    return `#${hex(RegExp.$2)}${hex(RegExp.$3)}${hex(RegExp.$4)}`;
  });

  function hex(num) {
    return num < 16 ? `0${Number(num).toString(16)}` : Number(num).toString(16);
  }
}
console.log(rgb2hex('rgb(255,230,23)'));
```
