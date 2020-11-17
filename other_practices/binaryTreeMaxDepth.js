/*
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],
*/

function TreeNode(val){
    this.val = val;
    this.left = this.right = null
}
//One Solution
var maxDepth = function(root) {
    if(!root) return 0
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right))
};

//Second Solution
var maxDepth = function(root) {
    if(!root) return 0
   const queue = [root]
   let depth = 0
   while(queue.length){
       let size = queue.length
       depth++
       while(size--){
           let item = queue.shift()
           if(item.left) queue.push(item.left)
           if(item.right) queue.push(item.right)
           
       }
   }
    return depth
   
};