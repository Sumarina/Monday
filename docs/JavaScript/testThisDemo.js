function foo() {
  console.log(this);
}

var name = 'global';
var bar = {
  name: 'bar',
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
