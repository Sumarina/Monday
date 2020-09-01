// Function.prototype.call2 = function(ctx, ...params) {
//   if (typeof ctx == 'object') {
//     ctx = ctx || window;
//   } else {
//     ctx = Object(ctx);
//   }
//   ctx.fn = this;
//   ctx.fn(...params);
//   delete ctx.fn;
// };
// var name = 'windowName';
// var obj = {
//   name: 'obgMarin',
// };

// function getName(age, name) {
//   console.log(this.name);
//   console.log(age, name);
// }
// getName.call2(null, 12, '123');

// Array.prototype.uniq = function() {
//   var resArr = [];
//   var flag = true;
//   for (var i = 0; i < this.length; i++) {
//     if (resArr.indexOf(this[i]) == -1) {
//       if (this[i] != this[i]) {
//         if (flag) {
//           resArr.push(this[i]);
//           flag = false;
//         }
//       } else {
//         resArr.push(this[i]);
//       }
//     }
//   }

//   return resArr;
// };

// console.log(['marin', 'judy', 'zoe', {}, {}, NaN, NaN].uniq());

// function fibonacci(n) {
//   var pre = 1;
//   var next = 2;
//   for (var i = 3; i <= n; i++) {
//     var sum = next + pre;
//     pre = next;
//     next = sum;
//   }
//   return next;
// }
// console.log(fibonacci(5));

// const WEEKS = ['日', '一', '二', '三', '四', '五', '六'];

// const formatFlags = {
//   yyyy: function(dateObj) {
//     return dateObj.getFullYear();
//   },
//   yy: function(dateObj) {
//     return String(dateObj.getFullYear()).substr(2);
//   },
//   M: function(dateObj) {
//     return dateObj.getMonth() + 1;
//   },
//   MM: function(dateObj) {
//     return pad(dateObj.getMonth() + 1);
//   },
//   d: function(dateObj) {
//     return dateObj.getDate();
//   },
//   dd: function(dateObj) {
//     return pad(dateObj.getDate());
//   },
//   H: function(dateObj) {
//     return dateObj.getHours();
//   },
//   HH: function(dateObj) {
//     return pad(dateObj.getHours());
//   },
//   h: function(dateObj) {
//     return dateObj.getHours() % 12 || 12;
//   },
//   hh: function(dateObj) {
//     return pad(dateObj.getHours() % 12 || 12);
//   },
//   m: function(dateObj) {
//     return dateObj.getMinutes();
//   },
//   mm: function(dateObj) {
//     return pad(dateObj.getMinutes());
//   },
//   s: function(dateObj) {
//     return dateObj.getSeconds();
//   },
//   ss: function(dateObj) {
//     return pad(dateObj.getSeconds());
//   },
//   w: function(dateObj) {
//     return WEEKS[dateObj.getDay()];
//   },
// };

// function formatDate(date, format) {
//   if (Object.prototype.toString.call(date).indexOf('Date') == -1) {
//     throw Error('Invalid date');
//   }
//   const token = /yy(?:yy)?|MM?|([dHhms])\1?|w/g;
//   return format.replace(token, ($0) => {
//     return $0 in formatFlags ? formatFlags[$0](date) : '';
//   });
// }

// function pad(str) {
//   str = String(str);
//   if (str.length < 2) {
//     return `0${str}`;
//   }
//   return str;
// }
// console.log(formatDate(new Date(), 'yyyy-M-d HH:mm:ss 星期w'));

function getUrlParams() {}
