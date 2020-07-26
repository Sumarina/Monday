//手写promise

/**
 * simple promise
 */
// class MyPromise {
//   constructor(executor) {
//     this.status = 'pending';
//     this.resolvedQueues = [];
//     this.rejectedQueues = [];
//     const resolved = (value) => {
//       while (this.resolvedQueues.length) {
//         const callback = this.resolvedQueues.shift();
//         callback(value);
//       }
//     };
//     const rejected = (err) => {
//       while (this.resolvedQueues.length) {
//         const callback = this.resolvedQueues.shift();
//         callback(err);
//       }
//     };

//     executor(resolved, rejected);
//   }
//   then(resolvedFn, rejectedFn) {
//     this.resolvedQueues.push(resolvedFn);
//     this.rejectedQueues.push(rejectedFn);
//   }
// }

// new MyPromise((resolve, rejected) => {
//   setTimeout(() => {
//     resolve('execute success !');
//   }, 1000);
//   console.log('this is a executor');
// }).then((res) => {
//   console.log('this is a res:', res);
// });

/**
 * 简易版 Promise A+
 */
// const PENDING = 'pending';
// const FULFILLED = 'fulfilled';
// const REJECTED = 'rejected';
// class MyPromise {
//   constructor(executor) {
//     this.status = PENDING;
//     this.resolvedQueues = [];
//     this.rejectedQueues = [];
//     const resolve = (value) => {
//       if (this.status != PENDING) return;
//       this.status = FULFILLED;
//       while (this.resolvedQueues.length) {
//         const callback = this.resolvedQueues.shift();
//         callback(value);
//       }
//     };
//     const reject = (err) => {
//       if (this.status != PENDING) return;
//       this.status = REJECTED;
//       while (this.rejectedQueues.length) {
//         const callback = this.rejectedQueues.shift();
//         callback(err);
//       }
//     };
//     executor(resolve, reject);
//   }
//   then(resolveFn, rejectFn) {
//     this.resolvedQueues.push(resolveFn);
//     this.rejectedQueues.push(rejectFn);
//   }
// }

// const p1 = new MyPromise((resolve, rejected) => {
//   setTimeout(() => {
//     console.log('callback');
//     resolve('success');
//   }, 1000);
// });
// p1.then((res) => {
//   console.log('result:', res);
// });

/**
 * 完整版 Promise A+
 */
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

class MyPromise {
  constructor(executor) {
    this.status = PENDING;
    this.value = null;
    this.resolvedQueues = [];
    this.rejectedQueues = [];
    const resolve = (value) => {
      if (this.status != PENDING) return;
      this.value = value;
      this.status = FULFILLED;
      while (this.resolvedQueues.length) {
        const callback = this.resolvedQueues.shift();
        callback(value);
      }
    };
    const reject = (err) => {
      if (this.status != PENDING) return;
      this.status = REJECTED;
      while (this.rejectedQueues) {
        const callback = this.rejectedQueues.shift();
        callback(err);
      }
    };
    executor(resolve, reject);
  }

  then(resolveFn, rejectFn) {
    return new MyPromise((resolve, reject) => {
      if (this.status == FULFILLED) {
        resolve(this.value);
      } else if (this.status == REJECTED) {
        reject();
      } else {
        this.resolvedQueues.push(resolveFn);
        this.rejectedQueues.push(rejectFn);
      }
    });
  }
}

const p1 = new MyPromise((resolve) => {
  console.log('print p1 callback');
  resolve(1);
});
p1.then((res) => {
  console.log('first result', res);
  return 2;
}).then((res) => {
  console.log('second result', res);
});
