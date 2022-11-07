
// Circular list (30 mins)

// Write a function that receives the head of a linked list,
// and returns a boolean reflecting whether the list is circular or not.
// A list is considered linear when its last node "next" property
// is undefined (or null), and circular when instead
// it points back to one of the previous nodes.
// As a constraint, to solve this problem you are not allowed
// to keep track of the nodes you visit (or their values).
// You need to think out of the box.

function circularDetector (head) {
  if (head == null) return true;
  let slow = head;
  let fast = head.next;
  while (slow != fast) {
    if (!fast || !fast.next) return false;
    slow = slow.next;
    fast = fast.next.next;
  }
  return true;
}

module.exports = circularDetector;
