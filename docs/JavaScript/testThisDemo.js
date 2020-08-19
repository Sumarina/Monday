function foo() {
  console.log(this);
}

var name = 'globalName';
var bar = {
  name: 'barName',
  getName: function() {
    console.log('this in getName:', this, this.name);
  },
  getName2: function() {
    return function() {
      console.log('this in getName2:', this, this.name);
    };
  },
};

foo();
bar.getName();
bar.getName2()();

function Person(name, age) {
  this.name = name;
  this.age = age;
  getName = function() {
    console.log('1');
  };
}
Person.prototype = function() {
  this.getName = function() {
    console.log('2');
  };
};
// 在这里可以把Person当作一个构造函数
// 所以在new Person的时候就相当于把它的作用域指向了p
// 所以Person中的this是指向p的
const p = new Person();

var a = { a: 'window' };
function foo() {
  var a = { a: 'foo' };
  console.log(this);
  bar();
}
function bar() {
  console.log(this.a);
}
foo();

var name = 'marin02';
function getName() {
  console.log(this.name);
}

var obj = {
  name: 'marin01',
  getName: getName,
};
obj.getName();
var fn = obj.getName;
getName();
fn();
