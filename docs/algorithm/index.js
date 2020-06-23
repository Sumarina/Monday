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
  const v = arr[Math.floor((l + r) / 2)];
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
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
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
  const v = arr[Math.floor((l + r) / 2)];
  //arr[l+1,lt]<v; arr[gt,r]>v;[lt+1,i)===v
  let lt = l,
    gt = r + 1,
    i = l + 1;
  while (i < gt) {
    if (arr[i] < v) {
      let temp = arr[lt];
      arr[lt] = arr[i];
      arr[i] = temp;
      lt++;
      i++;
    } else if (arr[i] > v) {
      let temp = arr[gt - 1];
      arr[gt - 1] = arr[i];
      arr[i] = temp;
      gt--;
    } else {
      i++;
    }
  }
  let temp = arr[l];
  arr[l] = arr[lt];
  arr[lt] = temp;
  _quickSort3(arr, l, lt - 1);
  _quickSort3(arr, gt, r);
}

function generateArray(num = 10000, min = 0, max = 10000) {
  const result = [];
  for (let i = min; i < num; i++) {
    result.push(Math.floor(Math.random() * max));
  }
  return result;
}

function testDemo() {
  const arr = generateArray(10, 0, 10);
  console.log('arr', arr);
  //   console.log('arr', arr);
  //   const start1 = new Date().getTime();
  //   insertionSort(arr);
  //   console.log('insertionSort...', new Date().getTime() - start1);

  //   const start2 = new Date().getTime();
  //   selectionSort(arr);
  //   console.log('selectionSort...', new Date().getTime() - start2);

  //   const start3 = new Date().getTime();
  //   console.log('sort result', mergeSort(arr));
  //   console.log('mergeSort...', new Date().getTime() - start3);

  //   const start4 = new Date().getTime();
  //   console.log('sort result', mergeSortBU(arr));
  //   console.log('mergeSort...', new Date().getTime() - start4);

  //   const start5 = new Date().getTime();
  //   console.log('sort result', quickSort(arr));
  //   console.log('mergeSort...', new Date().getTime() - start5);

  //   const start6 = new Date().getTime();
  //   console.log('sort result', quickSort2(arr));
  //   console.log('mergeSort...', new Date().getTime() - start6);

  const start7 = new Date().getTime();
  console.log('sort result', quickSort3(arr));
  console.log('mergeSort...', new Date().getTime() - start7);
}

testDemo();
