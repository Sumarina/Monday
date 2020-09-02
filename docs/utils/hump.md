# 将字符串转化为驼峰格式

```js
function cssStyle2DomStyle(sName) {
  return sName
    .replace(/(?!^)(?:-)+(.)?/g, function(match, $1) {
      return $1 ? $1.toUpperCase() : '';
    })
    .replace(/^-/, '');
}
console.log(cssStyle2DomStyle('font-size'));
console.log(cssStyle2DomStyle('font-size-'));
console.log(cssStyle2DomStyle('-webkit-border-image'));

// result
/**
* fontSize
* fontSize
* webkitBorderImage
 * /
```
