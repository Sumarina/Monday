# 二叉树的前序遍历

给定一个二叉树，返回它的   前序   遍历。

示例:

输入: [1,null,2,3]  
 1
\
 2
/
3

输出: [1,2,3]

递归:时间复杂度 O(n),空间复杂度 O(n)

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  const res = [];
  helper(root, res);
  return res;
};
var helper = function(node, res) {
  if (node != null) {
    res.push(node.val);
    if (node.left != null) {
      helper(node.left, res);
    }
    if (node.right != null) {
      helper(node.right, res);
    }
  }
};
```
