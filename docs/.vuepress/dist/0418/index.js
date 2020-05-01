/**
 * 触发事件后在 n 秒内函数只能执行一次，如果在 n 秒内又触发了事件，则会重新计算函数执行时间
 * @param {*} fn
 * @param {*} wait
 */
// const debounce = (fn, wait) => {
//   console.log('haha', fn, wait);
//   let timer = null;
//   return () => {
//     if (timer) {
//       clearTimeout(timer);
//       console.log('clearTimer', timer);
//     } else {
//       timer = setTimeout(() => {
//         fn.apply(this);
//       }, wait);
//       console.log('setTimeout', timer);
//     }
//   };
// };

const debounce = (fn, wait) => {
  let timer = null;
  return () => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this);
    }, wait);
  };
};

const throttle = (fn, wait) => {
  let timer = 0;
  return () => {
    const now = new Date().getTime();
    if (now - timer >= wait) {
      fn.apply(this);
      timer = now;
    }
  };
};
