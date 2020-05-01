/**
 * 知识点：数组的遍历函数会自动跳过undefined和未被初始化的项
 * Array(100)  创建一个长度为100的数组(稀疏数组) 这种方式创建的数组是没有下标的，也就是未被初始化的项
 */
const arr = Array(100);
console.log('arr', arr);
const newArr = arr.map((x) => 1);
console.log('newArray', newArr); //[empty*100]
