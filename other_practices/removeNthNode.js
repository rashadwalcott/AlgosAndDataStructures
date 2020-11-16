/*
Given the head of a linked list, remove the nth node from the end of the list and return its head.

Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
*/


//Solution
var removeNthFromEnd = function(head, n) {
    //1. measure the length of the list
    let on = head;
    let length = 1
    while(on){
        length++
        on = on.next
    }
    let leftIndex = length - n - 1
    //1.5. handle head deleted
    
    if( leftIndex === 0) {
        return head.next
    }
    //2. point around to delete node
    on = head;
    while(leftIndex -- > 1){
        on = on.next
    }
    on.next = on.next.next
    return head
};