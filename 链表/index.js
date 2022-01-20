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
    //链表的第一个元素
    this.heard = null;
    this.length = 0;
  }
  //增删改查
  //增
  append(element) {
    let node = new Node(element);
    let cur;
    //两种情况，1.链表是空的，2.不是空的
    if (this.heard === null) {
      this.heard = node;
    } else {
      //遍历链表
      cur = this.heard;
      while (cur.next) {
        cur = cur.next;
      }
      cur.next = node;
    }
    this.length += 1;
  }
  //删除
  removeAt(index) {
    //你的上一个节点，只想下一个节点
    //把自己下一个节点指向取消
    let cur = this.heard;
    let pre;
    let i = 0;
    if (index === 0) {
      //删除第一项
      this.heard = cur.next;
    } else {
      while (i < index) {
        //上一个和当前都要保存
        pre = cur;
        cur = cur.next;
        i++;
      }
      pre.next = cur.next;
      cur.next = null;
    }
    this.length -= 1;
  }
  //查看
  print() {
    let cur = this.heard;
    let ret = [];
    while (cur) {
      ret.push(cur.element);
      cur = cur.next;
    }
    console.log(ret.join("===>"));
    return ret.join("===>");
  }
}

let linknode = new LinkNodeList();
linknode.append("hello");
linknode.append("dddd");
linknode.append("嘿嘿");
linknode.print();
linknode.removeAt(1);
linknode.print();
