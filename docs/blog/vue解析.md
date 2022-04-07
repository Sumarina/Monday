# vue 内部运行机制

```js
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
```

使用`new`的方式，获取到一个`Vue`的实例。

::: tip 使用 new 的方式创建实例的过程

1. 创建一个新对象
1. 新对象的`__proto__`指向函数的原型
1. 将构造函数的作用域赋值给新对象，执行构造函数中的代码，为这个对象添加属性。
1. 如果函数没有返回其他对象，则返回这个新对象。

:::

在`init`函数中调用一堆初始化操作的函数之后，再调用`$mount`挂载组件，如果不存在`render function`但是存在`template`，需要进行`编译`步骤。

`compile`分为`parse`、`optimize`和`generate`三个阶段。

1. `parse`阶段：解析 template（指令、css、style 等），生成 AST。
1. `optimize`阶段：标记静态节点，在 patch 过程中，diff 算法会跳过静态节点，减少了比较过程，优化了 patch 性能。
1. `generate`阶段：将 AST 转化为 render function 字符串的过程。

经历过三个阶段后，会拿到渲染 VNode 所需要的 render function。

未完待续
