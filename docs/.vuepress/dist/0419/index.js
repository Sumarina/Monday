const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

class MyPromise {
  static resolve(value) {
    if (value && value.then) {
      return value;
    }
    return new MyPromise((resolve) => resolve(value));
  }

  constructor(fn) {
    this.status = PENDING;
    this.value = null;
    this.reason = null;
    this.onResolvedCallback = [];
    this.onRejectedCallback = [];
    const resolve = (value) => {
      if (this.status === PENDING) {
        setTimeout(() => {
          this.status = RESOLVED;
          this.value = value;
          this.onResolvedCallback.forEach(({ fn, resolve, reject }) => {
            return resolve(fn(value));
          });
        });
      }
    };
    const reject = (e) => {
      if (this.status === PENDING) {
        setTimeout(() => {
          this.status = REJECTED;
          this.reason = e;
          this.onRejectedCallback.forEach(({ fn, resolve, reject }) => {
            return reject(fn(this.reason));
          });
        });
      }
    };
    fn(resolve, reject);
  }

  then(fn) {
    const status = this.status;
    if (PENDING === status) {
      return new MyPromise((resolve, reject) => {
        this.onResolvedCallback.push({ fn, resolve, reject });
      });
    } else if (RESOLVED === status) {
      return MyPromise.resolve(fn(this.value));
    }
  }

  catch(fn) {
    const status = this.status;
    if (PENDING === status) {
      return new MyPromise((resolve, reject) => {
        this.onRejectedCallback.push({ fn, resolve, reject });
      });
    } else if (REJECTED === status) {
      return MyPromise.resolve(fn(this.value));
    }
  }
}

MyPromise.resolve(10)
  .then((res) => {
    console.log('first called', res);
    return res * 2;
  })
  .then((res) => {
    console.log('second called', res);
  });

new MyPromise((resolve, reject) => reject('null')).catch((e) => {
  console.log('error', e);
});
