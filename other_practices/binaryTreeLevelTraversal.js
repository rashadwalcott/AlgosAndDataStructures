/*
Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],
*/

//Solution
var levelOrder = function(root) {
    if(!root) return []
    const queue = [root]
    const levels = []
    while(queue.length){
        let size = queue.length
        const currentLevel = []
        while(size > 0){
            size -=1
            const item = queue.shift()
            currentLevel.push(item.val)
            if(item.left) queue.push(item.left)
            if( item.right) queue.push(item.right)
        }
        levels.push(currentLevel)
    }
    return levels
};