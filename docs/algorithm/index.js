class MaxHeap {
  // constructor(capacity) {
  //   this.data = new Array(capacity + 1);
  //   this.count = 0;
  // }
  constructor(arr, length) {
    this.data = new Array(length + 1);
    for (let i = 0; i < arr.length; i++) {
      this.data[i + 1] = arr[i];
    }
    this.count = length;
    for (let k = Math.floor(this.count / 2); k >= 1; k--) {
      this.shiftDown(k);
    }
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

function mergeSort(arr) {
  const length = arr.length;
  const result = _mergeSort(arr, 0, length - 1);
  return result;
}
function _mergeSort(arr, leftIndex, rightIndex) {
  // if (leftIndex >= rightIndex) return;
  if (rightIndex - leftIndex <= 15) {
    insertionSort(arr.slice(leftIndex, rightIndex));
    return;
  }
  const mid = Math.floor((leftIndex + rightIndex) / 2);
  _mergeSort(arr, leftIndex, mid);
  _mergeSort(arr, mid + 1, rightIndex);
  if (arr[mid] > arr[mid + 1]) {
    return merge(arr, leftIndex, mid, rightIndex);
  } else {
    return arr;
  }
}
function merge(arr, leftIndex, mid, rightIndex) {
  const length = rightIndex - leftIndex + 1;
  const result = Array(length);
  for (let i = leftIndex; i <= rightIndex; i++) {
    result[i - leftIndex] = arr[i];
  }
  let i = leftIndex,
    j = mid + 1;
  for (let k = leftIndex; k <= rightIndex; k++) {
    if (i > mid) {
      arr[k] = result[j - leftIndex];
      j++;
    } else if (j > rightIndex) {
      arr[k] = result[i - leftIndex];
      i++;
    } else if (result[i - leftIndex] < result[j - leftIndex]) {
      arr[k] = result[i - leftIndex];
      i++;
    } else {
      arr[k] = result[j - leftIndex];
      j++;
    }
  }
  return arr;
}
function mergeSortBU(arr) {
  const { length } = arr;
  for (let size = 1; size <= Math.floor(length / 2); size = size * 2) {
    for (let i = 0; i < length; i += size * 2) {
      //对arr[i....i+size-1]和[i+size...i+2*size-1]进行归并
      merge(arr, i, i + size - 1, Math.min(i + size * 2 - 1, length - 1));
    }
  }
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentValue = arr[i];
    for (var j = i; j > 0 && arr[j - 1] > currentValue; j--) {
      arr[j] = arr[j - 1];
    }
    //循环终止时j的位置是合适的位置。
    arr[j] = currentValue;
  }
  return arr;
}

function quickSort(arr) {
  _quickSort(arr, 0, arr.length - 1);
  return arr;
}
function _quickSort(arr, l, r) {
  if (l >= r) return;
  const p = partition(arr, l, r);
  _quickSort(arr, l, p - 1);
  _quickSort(arr, p + 1, r);
}
function partition(arr, l, r) {
  const v = arr[l];
  let j = l;
  for (let i = l + 1; i <= r; i++) {
    if (arr[i] < v) {
      let temp = arr[j + 1];
      arr[j + 1] = arr[i];
      arr[i] = temp;
      j++;
    }
  }
  let temp = arr[l];
  arr[l] = arr[j];
  arr[j] = temp;
  return j;
}

//双路排序
function quickSort2(arr) {
  _quickSort2(arr, 0, arr.length - 1);
  return arr;
}
function _quickSort2(arr, l, r) {
  if (l >= r) return;
  const p = partition2(arr, l, r);
  _quickSort2(arr, l, p - 1);
  _quickSort2(arr, p, r);
}

function partition2(arr, l, r) {
  const vi = Math.floor((l + r) / 2);
  swap(l, vi);
  const v = arr[l];
  //arr[l+1,i)<=v; arr(j,r]>=v
  let i = l,
    j = r;
  while (i <= j) {
    while (arr[i] < v) {
      i++;
    }
    while (arr[j] > v) {
      j--;
    }
    if (i > j) break;
    swap(arr, i, j);
    i++;
    j--;
  }
  return i;
}
//三路排序
function quickSort3(arr) {
  _quickSort3(arr, 0, arr.length - 1);
  return arr;
}
function _quickSort3(arr, l, r) {
  if (l >= r) return;
  const obj = partition3Ways(arr, l, r);
  _quickSort3(arr, l, obj.lt);
  _quickSort3(arr, obj.gt, r);
}

function partition3Ways(arr, l, r) {
  const vi = Math.floor((l + r) / 2);
  swap(l, vi);
  const v = arr[l];
  //arr[l+1,lt]<v; arr[gt,r]>v;[lt+1,i)===v
  let lt = l,
    gt = r + 1,
    i = l + 1;
  while (i < gt) {
    if (arr[i] < v) {
      swap(arr, lt + 1, i);
      lt++;
      i++;
    } else if (arr[i] > v) {
      swap(arr, gt - 1, i);
      gt--;
    } else {
      i++;
    }
  }
  swap(arr, l, lt);
  lt--;
  return { lt: lt, gt: gt };
}

function heapSort(arr) {
  // const maxHeap = new MaxHeap(arr.length + 1);
  // for (let i = 0; i < arr.length; i++) {
  //   maxHeap.insert(arr[i]);
  // }
  // for (let i = arr.length; i > 0; i--) {
  //   const v = maxHeap.extractMax();
  //   arr[i - 1] = v;
  // }
  // return arr;
  const maxHeap = new MaxHeap(arr, arr.length);

  for (let i = arr.length; i > 0; i--) {
    const v = maxHeap.extractMax();
    arr[i - 1] = v;
  }
  return arr;
}
function generateArray(num = 10000, min = 0, max = 10000) {
  const result = [];
  for (let i = min; i < num; i++) {
    result.push(Math.floor(Math.random() * max));
  }
  return result;
}

function swap(arr, index1, index2) {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

function testDemo() {
  const arr = generateArray(1000000, 0, 10);
  const [arr1, arr2, arr3, arr4, arr5, arr6, arr7, arr8] = [[...arr], [...arr], [...arr], [...arr], [...arr], [...arr], [...arr], [...arr]];
  // const start1 = new Date().getTime();
  // insertionSort(arr1);
  // console.log('插入排序:', new Date().getTime() - start1);
  // console.log('结果', arr1);

  // const start2 = new Date().getTime();
  // selectionSort(arr2);
  // console.log('选择排序:', new Date().getTime() - start2);
  // console.log('结果', arr2);

  const start3 = new Date().getTime();
  mergeSort(arr3);
  console.log('归并排序-自顶而下:', new Date().getTime() - start3);
  // console.log('结果', arr3);

  const start4 = new Date().getTime();
  mergeSortBU(arr4);
  console.log('归并排序-自底向上:', new Date().getTime() - start4);
  // console.log('结果', arr4);

  // const start5 = new Date().getTime();
  // quickSort(arr5);
  // console.log('普通快速排序:', new Date().getTime() - start5);
  // console.log('结果', arr5);

  // const start6 = new Date().getTime();
  // quickSort2(arr6);
  // console.log('快速排序-双路并排:', new Date().getTime() - start6);
  // console.log('结果', arr6);

  const start7 = new Date().getTime();
  quickSort3(arr7);
  console.log('快速排序-三路快排', new Date().getTime() - start7);
  // console.log('结果', arr7);

  const start8 = new Date().getTime();
  heapSort(arr8);
  console.log('堆排序', new Date().getTime() - start8);
}

testDemo();
