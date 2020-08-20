function Foo(name) {
  this.name = name;
  return { age: 12 };
}

const foo = new Foo('marin');
console.log(foo);
