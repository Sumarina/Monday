class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
class BST {
  constructor() {
    this.root = null;
    this.count = 0;
  }
  add(key, value) {
    this.root = this.insert(this.root, key, value);
  }
  insert(node, key, value) {
    if (node == null) {
      this.count++;
      return new Node(key, value);
    }
    if (key == node.key) {
      node.value = value;
    } else if (key > node.key) {
      node.right = this.insert(node.right, key, value);
    } else if (key < node.key) {
      node.left = this.insert(node.left, key, value);
    }
    return node;
  }

  contain(key) {
    if (this.root == null) return false;
    return this.isContain(this.root, key);
  }
  isContain(node, key) {
    if (node == null) return false;
    if (node.key == key) return true;
    else if (node.key < key) {
      return this.isContain(node.right, key);
    } else {
      return this.isContain(node.left, key);
    }
  }

  search(key) {
    if (this.root == null) return -1;
    return this.searchKey(this.root, key);
  }
  searchKey(node, key) {
    if (node == null) return -1;
    if (node.key == key) return node.value;
    else if (node.key > key) {
      return this.searchKey(node.left, key);
    } else {
      return this.searchKey(node.right, key);
    }
  }

  preOrder(node) {
    if (node == null) return;
    console.log('preOrder:', node.key);
    this.preOrder(node.left);
    this.preOrder(node.right);
  }
  inOrder(node) {
    if (node != null) {
      this.inOrder(node.left);
      console.log('inOrder:', node.key);
      this.inOrder(node.right);
    }
  }
  postOrder(node) {
    if (node == null) return;
    this.postOrder(node.left);
    this.postOrder(node.right);
    console.log('postOrder:', node.key);
  }

  // 层序遍历(广度优先遍历)
  levelOrder() {
    const queues = [];
    if (this.root == null) return 0;
    queues.push(this.root);
    while (queues.length) {
      const node = queues.shift();
      console.log('levelOrder:', node.key);
      if (node.left != null) {
        queues.push(node.left);
      }
      if (node.right != null) {
        queues.push(node.right);
      }
    }
  }

  removeMin() {
    this.root = this.removeMinNode(this.root);
  }
  removeMinNode(node) {
    if (node.left == null) {
      let rightNode = node.right;
      this.count--;
      node = null;
      return rightNode;
    }
    node.left = this.removeMinNode(node.left);
    return node;
  }
  removeMax() {
    this.root = this.removeMaxNode(this.root);
  }
  removeMaxNode(node) {
    if (node.right == null) {
      let leftNode = node.left;
      node = null;
      this.count--;
      return leftNode;
    }
    node.right = this.removeMaxNode(node.right);
    return node;
  }

  getMinNode(node) {
    if (node.left == null) {
      return node;
    }
    this.getMinNode(node.left);
  }

  remove(key) {
    this.root = this.removeNode(this.root, key);
  }
  removeNode(node, key) {
    if (node == null) return null;
    if (key < node.key) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.key) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else {
      if (node.left == null) {
        const right = node.right;
        node = null;
        return rightNode;
      }
      if (node.right == null) {
        const left = node.left;
        node = null;
        return left;
      }
      //左右孩子都存在的情况下 需要找到后继节点最小值占据当前需要删除的节点的位置。
      const minRightNode = this.getMinNode(node.right);
      minRightNode.right = this.removeMinNode(node.right);
      minRightNode.left = node.left;
      node = null;
      return minRightNode;
    }
  }

  order() {
    this.preOrder(this.root);
  }
}

const bst = new BST();
bst.add(40, 40);
bst.add(36, 36);
bst.add(50, 50);
bst.add(30, 30);
bst.add(48, 48);
bst.add(96, 96);
bst.add(22, 22);
bst.add(10, 10);
bst.add(46, 46);
bst.add(80, 80);
bst.add(85, 85);
bst.add(70, 70);
bst.add(100, 100);
bst.add(102, 102);
bst.remove(96);
console.log(bst.order());
