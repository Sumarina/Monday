/**
 * es5的对象属性名都是字符串，容易属性冲突。
 * 比如：你使用第三方提供的对象，但是又想为这个对象添加一个方法（mixin的模式）。
 * 新方法的名字就可能和现有方法产生冲突。
 * 但是如果有一种机制，能够保证每个属性独一无二。
 * 那么这就是es6引入symbol的原因。
 */

/**
 * symbol值是通过调用symbol函数生成。
 * 1.不能使用new的方式
 */

const SymbolPolyfill = function Symbol(description) {
  //如果使用new的方式 抛出异常
  if (this instanceof SymbolPolyfill) throw new TypeError('Symbol is not a constructor');
  //如果description是一个对象 则转化为string类型
  const descString = description === undefined ? undefined : String(description);

  const symbol = Object.create(null);

  Object.defineProperty(symbol, {
    __Description__: {
      value: descString,
      writable: false,
      enumerable: false,
      configure: false,
    },
  });
  //每次返回一个新对象，只要引用值不同，就不会相等。
  return symbol;
};
