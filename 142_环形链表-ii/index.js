//空间复杂度O（n）
var hasCycle1 = function (head) {
  let cache = new Set();
  while (head) {
    if (cache.has(head)) {
      return head;
    } else {
      cache.add(head);
    }
    head = head.next;
  }
  return null;
};

//空间复杂度O(1)    快慢指针
var hasCycle2 = function (head) {
  let slow = head;
  let fast = head;
  let start = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      while (slow && start) {
        if (slow === start) {
          return slow;
        }
        slow = slow.next;
        start = start.next;
      }
    }
  }
  return null;
};
