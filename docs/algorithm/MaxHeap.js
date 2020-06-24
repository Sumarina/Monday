class MaxHeap {
  constructor(capacity) {
    this.data = new Array(capacity + 1);
    this.count = 0;
  }
  getSize() {
    return this.count;
  }
  isEmpty() {
    return this.count === 0;
  }
  insert(value) {
    this.data[this.count + 1] = value;
    this.count++;
    this.shiftUp(this.count);
  }
  extractMax() {
    if (this.count <= 0) return;
    const ret = this.data[1];
    this.swap(this.data, 1, this.count);
    this.count--;
    this.shiftDown(1);
    return ret;
  }
  shiftUp(k) {
    while (k >= 1 && this.data[k] > this.data[Math.floor(k / 2)]) {
      this.swap(this.data, k, Math.floor(k / 2));
      k = Math.floor(k / 2);
    }
  }
  shiftDown(k) {
    //判断有左孩子
    while (2 * k <= this.count) {
      let j = 2 * k;
      if (j + 1 <= this.count && this.data[j] < this.data[j + 1]) {
        //判断是否有右孩子并且值大
        j += 1;
      }
      if (this.data[k] >= this.data[j]) break;
      this.swap(this.data, k, j);
      k = j;
    }
  }
  swap(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  }
}

const maxHeap = new MaxHeap(20);
for (let i = 0; i < 20; i++) {
  maxHeap.insert(Math.floor(Math.random() * 10));
}
console.log(maxHeap.data);
while (!maxHeap.isEmpty()) {
  console.log(maxHeap.extractMax());
}
