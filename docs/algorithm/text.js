/**
 * var obj = [
  { "id": 3, "parent": 2 },
  { "id": 1, "parent": null },
  { "id": 2, "parent": 1 }
]
 */

function array2Tree(arr) {
  const result = [];
  let obj = {};
  if (!Array.isArray(arr)) return arr;
  arr.map((item) => {
    obj[item.id] = Object.assign(item, obj[item.id] || {});
    if (item.parent) {
      const parent = obj[item.parent] || {};
      parent.children = parent.children || [];
      parent.children.push(item);
      obj[item.parent] = parent;
    } else {
      result.push(obj[item.id]);
    }
  });
  return result;
}

const arr = [
  { id: 3, parent: 2 },
  { id: 1, parent: null },
  { id: 2, parent: 1 },
];

array2Tree(arr);

/**
 * var arr = [["1","2"],["3","4","5"]];
 * @param {*} params
 */
function doCombination(params) {}

const permutate = (arr) => {
  let res = arr[0].slice();

  for (let i = 1; i < arr.length; i++) {
    const pre = res.slice();
    res = [];
    pre.forEach((item) => {
      arr[i].forEach((item2) => {
        res.push([item, item2]);
      });
    });
  }
  return res;
};

const result = permutate([
  ['1', '2'],
  ['3', '4', '5'],
]);
console.log(result);
