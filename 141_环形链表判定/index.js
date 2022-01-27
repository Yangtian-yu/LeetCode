//被骂解法
var hasCycle = function (head) {
  let count = 1;
  while (head) {
    if (count > 10000000) {
      return true;
    }
    count += 1;
    head = head.next;
  }
  return false;
};

//空间复杂度O（n）
var hasCycle1 = function (head) {
  let cache = new Set();
  while (head) {
    if (cache.has(head)) {
      return true;
    } else {
      cache.add(head);
    }
    head = head.next;
  }
  return false;
};

//空间复杂度O(1)    快慢指针
var hasCycle2 = function (head) {
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      return true;
    }
  }
  return false;
};
