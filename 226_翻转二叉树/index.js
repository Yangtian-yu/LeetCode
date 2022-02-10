/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function (root) {
  //递归
  //终止条件
  if (root == null) {
    return root;
  }
  //递归的逻辑
  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  return root;
};
