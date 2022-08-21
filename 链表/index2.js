class Node {
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

class LinkNodeList {
  constructor() {
    //链表
    //链表相关的操作
    this.heard = null;
    this.lenght = 0;
  }
  //增删改查
  //增
  append(element) {
    let node = new Node(element);
    let cur;
    //两种情况 1.链表是空的， 2.不是空的
    if (this.heard === null) {
      //head 是第一个
      this.heard = node;
    } else {
      //遍历链表
      cur = this.heard;
      while (cur.next) {
        cur = cur.next;
      }
      cur.next = node;
    }
    this.lenght += 1;
  }
  //查看
  //print
  print() {
    let cur = this.heard;
    let ret = [];
    while (cur) {
      ret.push(cur.element);
      cur = cur.next;
    }
    console.log(ret.join("==>"));
    return ret.join("==>");
  }
  removeAt(index) {
    let cur = this.heard;
    let prev;
    let i = 0;
    if (index === 0) {
      this.heard = cur.next;
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
linknode.append("dddd");
linknode.removeAt(1);
linknode.append("嘿嘿");
linknode.print();
