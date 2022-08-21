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
  append(element) {
    let node = new Node(element);
    if (this.head === null) {
      this.head = node;
    } else {
      let cur = this.head;
      while (cur.next) {
        cur = cur.next;
      }
      cur.next = node;
    }
    this.length += 1;
  }
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
  removeAt(index) {
    let cur = this.head;
    if (index === 0) {
      this.head = cur.next;
    } else {
      let prev;
      let i = 0;
      while (i < index) {
        prev = cur;
        cur = cur.next;
        i++;
      }
      prev.next = cur.next;
      cur.next = null;
    }
    this.length -= 1;
  }
}

let linknode = new LinkNodeList();
linknode.append("hello");
linknode.append("你愁啥");
linknode.append("嘿嘿1");
linknode.append("嘿嘿2");
linknode.print();
linknode.removeAt(1);
linknode.print();
console.log(linknode.length);
