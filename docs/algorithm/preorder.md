# N 叉树的前序遍历

给定一个 N 叉树，返回其节点值的前序遍历。

来源:[https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/](https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/)

```js
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
  const res = [];
  helper(root, res);
  return res;
};

var helper = function(node, res) {
  if (node != null) {
    res.push(node.val);
    if (node.children != null) {
      node.children.forEach((c) => {
        helper(c, res);
      });
    }
  }
};
```
