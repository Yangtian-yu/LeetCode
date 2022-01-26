class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkNodeList {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  //增加
  append(element) {
    let node = new Node(element);
    let cur;
    if (this.head === null) {
      this.head = node;
    } else {
      cur = this.head;
      while (cur.next) {
        cur = cur.next;
      }
      cur.next = node;
    }
    this.length += 1;
  }
  //展示
  print() {
    let cur = this.head;
    let ret = [];
    while (cur) {
      ret.push(cur.element);
      cur = cur.next;
    }
    console.log(ret.join("==>"));
    return ret.join("==>");
  }
  //remove
  removeAt(index) {
    let cur = this.head;
    let prev;
    let i = 0;
    if (index === 0) {
      this.head = cur.next;
    } else {
      while (i < index) {
        prev = cur;
        cur = cur.next;
        i++;
      }
      prev.next = cur.next;
      cur.next = null;
    }
  }
}

let linknode = new LinkNodeList();
linknode.append("hello");
linknode.append("你愁啥");
linknode.append("嘿嘿");
linknode.print();
linknode.removeAt(1);
linknode.print();
