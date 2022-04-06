# 前端并发多个请求，如何控制只请求一个？

1. 每个请求都返回一个 promise，promise 的 exector 的执行时机，通过一个队列保存。
1. 当队列长度为 1 的时候，执行 exector，如果请求成功，resolve exector 的结果。
1. 如果请求失败 reject exector 的结果。同时出栈，执行下一个 next。
1. 直到队列清空。
