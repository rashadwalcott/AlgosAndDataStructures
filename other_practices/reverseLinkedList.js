/*
Reverse a singly linked list.

Example:

Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
*/

//One Solution
var reverseList = function(head) {
    let prev = null
    let on = head;
    while( on !== null){
        let temp = on.next
        on.next = prev
        prev = on
        on = temp
    }
    return prev
};

//Second Solution
var reverseList = function(on, prev = null) {
    if( on === null) return prev
    let temp = on.next
    on.next = prev
    return reverseList(temp, on)
};