(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{380:function(t,s,a){"use strict";a.r(s);var v=a(43),e=Object(v.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"js-的事件循环是个怎样的过程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js-的事件循环是个怎样的过程"}},[t._v("#")]),t._v(" JS 的事件循环是个怎样的过程")]),t._v(" "),a("p",[t._v("在回答这个问题前，先大概的了解下关于浏览器进程的事。")]),t._v(" "),a("h2",{attrs:{id:"浏览器是一个多进程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器是一个多进程"}},[t._v("#")]),t._v(" 浏览器是一个多进程")]),t._v(" "),a("ol",[a("li",[t._v("Browser 进程:浏览器的主进程，负责浏览器界面显示，和用户交互、各个 tab 页的管理，创建和销毁进程、将 render 进程得到的内存中的 Bitmap 绘制到用户界面上以及网络资源管理下载等。")]),t._v(" "),a("li",[t._v("GPU 进程:用于 3D 绘制，最多一个。")]),t._v(" "),a("li",[t._v("插件进程:浏览器的每一个插件分别对应一个进程，只有当使用插件的时候才会创建插件进程。")]),t._v(" "),a("li",[t._v("浏览器的渲染进程(浏览器的内核)(render 进程，内部是多线程的):负责页面的渲染、执行 js、"),a("strong",[t._v("事件处理")]),t._v("等。(每打开一个 tab 页，则会创建一个渲染进程，但是，有时候浏览器有自己的优化机制，可能会将多个 tab 页合并成一个进程。)")])]),t._v(" "),a("h2",{attrs:{id:"浏览器多进程的优势"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#浏览器多进程的优势"}},[t._v("#")]),t._v(" 浏览器多进程的优势")]),t._v(" "),a("ol",[a("li",[t._v("避免单个 page crash 影响到整个浏览器")]),t._v(" "),a("li",[t._v("避免第三方插件 crash 影响整个浏览器")]),t._v(" "),a("li",[t._v("多进程充分利用多核优势")]),t._v(" "),a("li",[t._v("方便使用沙盒模型隔离插件等进程，提高浏览器稳定性。")])]),t._v(" "),a("p",[t._v("简而言之，如果浏览器是单进程，那么某个 tab 页或者插件崩溃都会影响到浏览器。")]),t._v(" "),a("p",[t._v("浏览器的进程各司其职，我们前端渲染页面用到的就是"),a("strong",[t._v("渲染进程")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"渲染进程是多线程的"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#渲染进程是多线程的"}},[t._v("#")]),t._v(" 渲染进程是多线程的")]),t._v(" "),a("ol",[a("li",[t._v("GUI 渲染线程:解析 html 和 css，构建 DOM 树、CSSOM 树，合并成 render 树，最终完成布局绘制等。回流和重绘也会引起该线程的执行。")]),t._v(" "),a("li",[t._v("JS 引擎线程:负责解析处理 js 脚本并执行。")]),t._v(" "),a("li",[t._v("事件触发线程:将符合触发条件的事件添加到事件队列的队尾，等待 JS 引擎的处理。")]),t._v(" "),a("li",[t._v("定时触发器线程:处理 setTimeout 等(计时完毕后，添加到事件队列)。")]),t._v(" "),a("li",[t._v("异步 http 请求线程:异步请求检测到状态变更，该线程则会产生状态变更事件，并将事件添加到事件队列的队尾，等待执行。")])]),t._v(" "),a("p",[a("strong",[t._v("特别注意：GUI 线程和 JS 线程是互斥的，是有你没我有我没你的一种状态。所以任何一方执行时间过长都会造成对面那一方的堵塞，导致页面渲染时间过长或者直接不出来的问题。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" 浏览器输入url，browser进程接管，开一个下载线程，然后进行http请求（等等省略），然后等待响应，获取内容，随后将内容通过RendererHost接口转交给Render进程\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" 浏览器开始渲染\n")])])]),a("p",[t._v("渲染流程：")]),t._v(" "),a("ol",[a("li",[t._v("解析 html 建立 dom 树")]),t._v(" "),a("li",[t._v("解析 css 构建 CSSOM 树，再结合 dom 合并成 render 树")]),t._v(" "),a("li",[t._v("布局 render 树（layout/reflow），负责各元素尺寸、位置的计算。")]),t._v(" "),a("li",[t._v("绘制 render 树（paint），绘制页面像素信息。")]),t._v(" "),a("li",[t._v("浏览器会将各层的信息发送给 GPU，GPU 会将各层合成（composite），显示在屏幕上。")])]),t._v(" "),a("p",[t._v("渲染完毕后就是"),a("code",[t._v("load")]),t._v("事件，之后就是自己的 JS 逻辑处理")]),t._v(" "),a("p",[a("strong",[t._v("注意：load 事件和 DOMContentLoaded 事件的先后顺序：DOMContentLoaded 事件触发时机是 DOM 加载完成，不包括样式、图片等。load 事件触发是所有都加载完成。")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" css是单独的下载线程异步下载的，所以不会阻塞"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DOM")]),t._v("树的解析，但是会阻塞render树的渲染。\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" js会阻塞"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DOM")]),t._v("树的解析，因为"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JS")]),t._v("线程和"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("GUI")]),t._v("线程是互斥的。\n")])])]),a("h2",{attrs:{id:"从-event-loop-探讨-js-的运行机制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#从-event-loop-探讨-js-的运行机制"}},[t._v("#")]),t._v(" 从 Event Loop 探讨 JS 的运行机制")]),t._v(" "),a("p",[t._v("基于以上，再来探讨从 Event Loop 探讨 JS 的运行机制。")]),t._v(" "),a("p",[t._v("从上文得知，JS 引擎是单线程。")]),t._v(" "),a("ol",[a("li",[t._v("JS 引擎分同步和异步任务。")]),t._v(" "),a("li",[t._v("同步任务都在主线程上执行，形成一个"),a("code",[t._v("执行栈")]),t._v("。")]),t._v(" "),a("li",[t._v("主线程之外，"),a("code",[t._v("事件触发线程")]),t._v("管理着一个任务队列，只要异步任务有了运行结果，或者说满足触发条件，就在"),a("code",[t._v("任务队列")]),t._v("放置一个事件。")]),t._v(" "),a("li",[t._v("一旦"),a("code",[t._v("执行栈")]),t._v("中所有的同步任务执行完毕，系统就会读取"),a("code",[t._v("任务队列")]),t._v("，将可运行的异步任务添加到执行栈中，开始执行。")])]),t._v(" "),a("p",[a("strong",[t._v("上述事件循环机制的核心是：JS 引擎线程和事件触发线程。")])]),t._v(" "),a("p",[t._v("but 在事件上还有一些隐藏的细节，譬如调用"),a("code",[t._v("setTimeout")]),t._v("后，是什么时候添加到事件队列中？")]),t._v(" "),a("p",[t._v("这里有必要提到上文说过的"),a("code",[t._v("定时器线程")]),t._v("。没错，是"),a("code",[t._v("定时器线程")]),t._v("控制。JS 引擎是单线程，如果一直处于阻塞状态，会影响计时的准确，所以很有必要单独开启一个线程来处理计时任务。")]),t._v(" "),a("p",[t._v("当使用"),a("code",[t._v("setTimeout")]),t._v("和"),a("code",[t._v("setInterval")]),t._v("时，需要"),a("code",[t._v("定时器线程")]),t._v("，计时完成后，将回调函数推入到事件队列中，等待执行。")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//在1000毫秒后，将回调函数推入到事件队列，等待执行")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("'"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" setTimeout"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"settimeout和setinterval的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#settimeout和setinterval的区别"}},[t._v("#")]),t._v(" "),a("code",[t._v("setTimeout")]),t._v("和"),a("code",[t._v("setInterval")]),t._v("的区别")]),t._v(" "),a("p",[a("code",[t._v("setTimeout")]),t._v("计时到后就执行，执行一段时间后才会继续执行"),a("code",[t._v("setTimeout")]),t._v("。")]),t._v(" "),a("p",[a("code",[t._v("setInterval")]),t._v("每次都精确的隔一段时间推入一个事件。（事件实际执行的时间不一定就准确，有可能当前这个事件还未执行完毕，下一个事件就来了）")]),t._v(" "),a("h3",{attrs:{id:"macro-task和micro-task"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#macro-task和micro-task"}},[t._v("#")]),t._v(" "),a("code",[t._v("macro task")]),t._v("和"),a("code",[t._v("micro task")])]),t._v(" "),a("p",[t._v("在 JS 中分为两种任务类型："),a("code",[t._v("macro task")]),t._v("和"),a("code",[t._v("micro task")]),t._v("。在 ECMAScript 中"),a("code",[t._v("micro task")]),t._v("称为"),a("code",[t._v("jobs")]),t._v("，"),a("code",[t._v("macro task")]),t._v("称为"),a("code",[t._v("task")]),t._v("。")]),t._v(" "),a("p",[a("code",[t._v("macro task")]),t._v("(宏任务)，可以理解是每次执行栈中执行的代码就是一个宏任务（包括每次从事件队列获取一个事件回调并放到执行栈中执行）\n浏览器为了能够使得 JS 内部 task 与 DOM 任务能够有序的执行，会在一个 task 执行结束后，下一个 task 执行前对页面进行重新渲染。")]),t._v(" "),a("p",[a("code",[t._v("macro task")]),t._v("："),a("code",[t._v("setTimeout")]),t._v("、"),a("code",[t._v("setInterval")]),t._v("。")]),t._v(" "),a("p",[a("code",[t._v("micro task")]),t._v("(微任务)，在当前 task 执行结束后立即执行的任务。\n在当前 task 任务后，下一个 task 前，在渲染之前。所以响应速度比 setTimeout 更快，无需等待渲染。")]),t._v(" "),a("p",[a("code",[t._v("micro task")]),t._v("："),a("code",[t._v("Promise")]),t._v("、"),a("code",[t._v("process.nextTick")]),t._v("。")]),t._v(" "),a("p",[t._v("总结一下：")]),t._v(" "),a("ol",[a("li",[t._v("执行一个宏任务。当前宏任务执行完毕后，立即执行微任务队列中的所有微任务。")]),t._v(" "),a("li",[t._v("当前宏任务执行完毕后，开始检查渲染，然后 GUI 线程接管渲染。")]),t._v(" "),a("li",[t._v("渲染完毕后，JS 线程继续接管，开始下一个任务。（从事件队列取）")])])])}),[],!1,null,null,null);s.default=e.exports}}]);