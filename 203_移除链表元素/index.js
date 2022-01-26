var removeElements = function (head, val) {
  let ele = {
    next: head,
  };
  let cur = ele;
  while (cur.next) {
    if (cur.next.val === val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
  }
  return ele.next;
};
