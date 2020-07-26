class Subject {
  constructor() {
    this.status = 0; //保存当前的状态
    this.observers = []; //保存所有观察者
  }
  getStatus() {
    return this.status;
  }
  setStatus(status) {
    this.status = status;
    //修改了状态值后应及时通知所有观察者
    this.emit();
  }
  emit() {
    //执行所有观察者的run方法
    this.observers.forEach((observer) => {
      observer.run();
    });
  }
  push(observer) {
    //保存
    this.observers.push(observer);
  }
}

class Observer {
  constructor(name) {
    this.name = name;
  }
  on(subject) {
    this.subject = subject;
    this.subject.push(this);
  }
  run() {
    console.log(`${this.name} updated , status:${this.subject.getStatus()}`);
  }
}

const subject = new Subject();
const o1 = new Observer('o1');
o1.on(subject);
const o2 = new Observer('o2');
o2.on(subject);
subject.setStatus(1);
subject.setStatus(2);
subject.setStatus(3);
