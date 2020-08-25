# nodejs 从入门到放弃（一）

## CommonJs 的规范

1. 通过 require 引用模块
2. 模块定义：一个文件就是一个模块
3. 模块标识：传递给 require 方法的参数名必须是小驼峰命名的字符串或相对路径、绝对路径。

## NodeJs 实现 CommonJs 规范

先看下面这段代码，有没有考虑过为什么直接可以调用 require 方法？为什么只有通过 exports 属性导出方法？module 是什么？module 和 exports 是什么关系？

```js
var fs = require('fs');
// console.log(module.paths);
//模块定义
function read() {
  fs.readFile('readme.md', function(err, file) {
    console.log('read finished...');
  });
  console.log('read start...');
}
function write() {
  console.log('write');
}

module.exports.readFiles = read;
module.exports.writeFiles = write;
```

实际上，在编译过程中，Node 对获取的 js 文件内容会有一个封装，怎么封装？就是在内容头部加`(function(require,exports,module,__dirname,__filename){/n`,尾部会加上`})/n`。也就是说我们能用的 require,exports,module,**dirname,**filename 都是通过参数传递进来的。封装后，每个模块都有了隔离的作用域。
包装之后的代码通过原生模块 vm 的 runInThisContext()方法得到一个具体的 function 对象，把当前文件的 exports,module,require，路径以及完整路径传递给这个 function，返回 exports 以及挂在这个属性的方法和属性。所以我们只能访问到 exports 上的属性和方法，其余未挂在这个对象上的则不能访问。
看下面这段代码：

```js
function Module(id, parent) {
  this.id = id;
  this.exports = {};
  this.parent = parent;
  if (parent && parent.children) {
    parent.children.push(this);
  }
  this.filename = null;
  this.loaded = false;
  this.children = [];
}
```

在 Node 中每个文件都是一个对象。Module 就是模块本身。从上面代码不难看出 exports 是 module 的属性，这意味着我们可以用`module.exports.readFiles=read;`或者`exports.readFiles=read;`的方式导出方法或属性。
可能又会有好奇宝宝问为什么用`exports.readFiles=read`的方式，而不是`exports=read`的方式？因为 exports 是作为形参传入，直接赋值形参是不会改变方法以外的 exports 的内容。来，看看下面这段代码有木有些许明白了呢？

```js
var a = 10;
function change(a) {
  a = 20;
}
change(a);
console.log(a); //10
```

以上奏是 NodeJs 对 CommonJs 规范的实现。

---

ps:参考朴灵的《深入浅出》
