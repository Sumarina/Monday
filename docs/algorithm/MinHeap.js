class MinHeap {
  constructor(arr, capacity) {
    this.data = [];
    for (let i = 0; i < capacity; i++) {
      this.data[i + 1] = arr[i];
    }
    this.count = capacity;
    for (let k = Math.floor(this.count / 2); k >= 1; k--) {
      this.shiftDown(k);
    }
  }
  shiftDown(k) {
    while (k * 2 <= this.count) {
      let j = k * 2;
      if (j <= this.count && this.data[j + 1] && this.data[j] > this.data[j + 1]) {
        j = j + 1;
      }
      if (data[k] <= this.data[j]) break;
      swap(this.data, k, j);
      k = j;
    }
  }
  swap(arr, index1, index2) {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  }
}
