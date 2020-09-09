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

// function isAvailableEmail(sEmail) {
//   const regex = /^[\w\d\.\-]+@([\w\d\-]+\.)+[\w\d]+$/g;
//   return regex.test(sEmail);
// }

// console.log(isAvailableEmail('marinzoo@hotmail.com'));

// function decimalToBinary(num) {
//   const mod = [];
//   while (num) {
//     const m = num % 2;
//     mod.unshift(m);
//     num = (num - m) / 2;
//   }
//   return mod.join('');
// }

// function decimalToOctal(num) {
//   const mod = [];
//   while (num) {
//     const m = num % 8;
//     mod.unshift(m);
//     num = (num - m) / 8;
//   }
//   return mod.join('');
// }
// function decimalToHexadecimal(num) {
//   const map = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
//   const mod = [];
//   while (num) {
//     const m = num % 16;
//     mod.unshift(map[m]);
//     num = (num - m) / 16;
//   }
//   return mod.join('');
// }
// console.log(decimalToOctal(255));

// function binaryToOctal(num) {
//   num = String(num);
//   let sum = 0;
//   for (let i = 0; i < num.length; i++) {
//     sum += Math.pow(2, i);
//   }
//   return decimalToOctal(sum);
// }
// console.log(binaryToOctal(11111111));

// function binaryToHexadecimal(num) {
//   num = String(num);
//   let sum = 0;
//   for (let i = 0; i < num.length; i++) {
//     sum += Math.pow(2, i);
//   }
//   return decimalToHexadecimal(sum);
// }
// console.log(binaryToHexadecimal(11111111));

// function rgb2hex(sRGB) {
//   const reg = /^(rgb|RGB)\(\s*(\d{1,3})\s*\,\s*(\d{1,3})\s*\,\s*(\d{1,3})\s*\)$/;
//   if (!reg.test(sRGB)) return sRGB;
//   return sRGB.replace(reg, function() {
//     return `#${hex(RegExp.$2)}${hex(RegExp.$3)}${hex(RegExp.$4)}`;
//   });

//   function hex(num) {
//     return num < 16 ? `0${Number(num).toString(16)}` : Number(num).toString(16);
//   }
// }
// console.log(rgb2hex('rgb(255,230,23)'));

// function cssStyle2DomStyle(sName) {
//   return sName
//     .replace(/(?!^)(?:-)+(.)?/g, function(match, $1) {
//       return $1 ? $1.toUpperCase() : '';
//     })
//     .replace(/^-/, '');
// }
// console.log(cssStyle2DomStyle('font-size'));
// console.log(cssStyle2DomStyle('font-size-'));
// console.log(cssStyle2DomStyle('-webkit-border-image'));

// function count(str) {
//   const obj = {};
//   str.replace(/\S/g, function(match) {
//     obj[match] = obj[match] ? obj[match] + 1 : 1;
//   });
//   return obj;
// }
// console.log(count('hello world'));

// function sum(arr) {
//   return arr.reduce((acc, item) => acc + item);
// }

// console.log(sum([1, 2, 3]));

// function remove(arr, item) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === item) {
//       arr.splice(i, 1);
//       i--;
//     }
//   }
//   return arr;
// }

// function prepend(arr, item) {
//   return arr
//     .reverse()
//     .concat(item)
//     .reverse();
// }

// function insert(arr, item, index) {
//   return arr
//     .slice(0, index)
//     .concat(item)
//     .concat(arr.slice(index ));
// }

// function duplicates(arr) {
//   const res = [];
//   arr.forEach((element) => {
//     if (arr.indexOf(element) != arr.lastIndexOf(element) && res.indexOf(element) == -1) {
//       res.push(element);
//     }
//   });
//   return res;
// }
// console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3]));

// function square(arr) {
//   return arr.map((value) => Math.pow(value, 2));
// }
// console.log(square([1, 2, 3, 4, 5]));

// function findAllOccurrences(arr, target) {
//   const res = [];
//   arr.forEach((value, index) => {
//     if (value == target) {
//       res.push(index);
//     }
//   });
//   return res;
// }
// console.log(findAllOccurrences(['a', 'b', 'c', 'd', 'e', 'f', 'a', 'b', 'c'], 'b'));

// function count(start, end) {
//   let timer = null;
//   if (start <= end) {
//     console.log(start++);
//     timer = setTimeout(() => {
//       count(start, end);
//     }, 100);
//   }

//   return {
//     cancel: () => {
//       clearTimeout(timer);
//     },
//   };
// }
// count(1, 10);

// function fizzBuzz(num) {
//   let r = '';
//   if (isNaN(num)) return false;
//   else {
//     !(num % 3) && (r += 'fizz');
//     !(num % 5) && (r += 'buzz');
//   }
//   return r === '' ? num : r;
// }

// console.log(fizzBuzz(4));

// function functionFunction(str) {
//   return (s) => {
//     return `${str},${s}`;
//   };
// }

// console.log(functionFunction('hello')('world'));

// function makeClosures(arr, fn) {
//   const result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result[i] = function() {
//       return fn(arr[i]);
//     };
//   }
//   return result;
// }

// console.log(makeClosures([1, 2, 3], (i) => i * i));

// function valueAtBit(num) {
//   return num.toString(10);
// }
// console.log(valueAtBit(11000000));

// function captureThreeNumbers(str) {
//   return str.replace(/\d{3}/, function(match) {
//     console.log(match);
//     return match;
//   });
// }
// console.log(captureThreeNumbers('78910'));

// function shadowCopy(obj) {
//   var newObj = {};
//   for ([key, value] of Object.entries(obj)) {
//     newObj[key] = value;
//   }
//   return newObj;
// }
// var obj = { a: 'something', b: { c: 1 } };
// const newObj = shadowCopy(obj);
// newObj.a = 'hello world';
// newObj.b.c = 2;
// console.log(newObj, obj);

function deepCopy(obj, map = new WeakMap()) {
  //是否为基本类型数据
  if (isObject(obj)) {
    //判断是否为循环引用
    if (map.get(obj)) {
      return map.get(obj);
    }
    let type = [RegExp, Date, Set, Map, WeakMap, WeakSet];
    if (type.includes(obj.constructor)) {
      return new obj.constructor(obj);
    }
    let allDes = Object.getOwnPropertyDescriptors(obj);
    let cloneObj = Object.create(Object.getPrototypeOf(obj), allDes);
    for (const prop of Reflect.ownKeys(obj)) {
      cloneObj[prop] = isObject(obj[prop]) && typeof obj[prop] !== 'function' ? deepCopy(obj[prop], map) : obj[prop];
    }
    return cloneObj;
  } else {
    return obj;
  }
}

function isObject(obj) {
  return obj != null && (typeof obj === 'object' || typeof obj === 'function');
}

let obj = {
  fun: function() {},
  syb: Symbol('foo'),
  a: undefined,
  b: NaN,
  c: Infinity,
  reg: /^abc$/,
  date: new Date(),
  set: new Set([1, 2, 3, 4, 4]),
  map: new Map([
    ['name', '张三'],
    ['title', 'Author'],
  ]),
  text: 'aaa',
  value: {
    a: {
      b: 2,
    },
  },
};
let cloneObj = deepCopy(obj);

obj.value.a.b = 3;

console.log('cloneObj', cloneObj);
console.log('obj', obj);
