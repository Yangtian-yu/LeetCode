var preorderTraversal = function (root, arr = []) {
  if (rrot) {
    // 先处理自己，再处理左右
    arr.push(root.val);
    preorderTraversal(root.left, arr);
    preorderTraversal(root.right, arr);
  }
  return arr;
};

var preorderTraversal1 = function (root) {
  //1.开始遍历 有一个stack存储
  //left入栈 直到left为空
  //节点出栈 右孩子为目标节点
  let result = [];
  let stack = [];
  let cur = root;
  while (cur || stack.length > 0) {
    while (cur) {
      result.push(cur.val);
      stack.push(cur);
      cur = cur.left;
    }
    cur = stack.pop();
    cur = cur.right;
  }
  return result;
};
