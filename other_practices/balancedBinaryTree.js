/*
Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as:

a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

 

Example 1:


Input: root = [3,9,20,null,null,15,7]
Output: true
*/

//Solution
var isBalanced = function(root) {
    if(!root) return true
    const leftDepth = getDepth(root.left)
    const rightDepth = getDepth(root.right)
    const balanced = Math.abs(leftDepth - rightDepth) <= 1
    return balanced && isBalanced(root.left) && isBalanced(root.right)
};

var getDepth = function(root){
    if(!root) return 0
    return 1 + Math.max(getDepth(root.left), getDepth(root.right))
}