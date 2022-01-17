// 斐波那契数，通常用 F(n) 表示，形成的序列称为 斐波那契数列 。
// 该数列由 0 和 1 开始，后面的每一项数字都是前面两项数字的和。也就是：

// F(0) = 0，F(1) = 1
// F(n) = F(n - 1) + F(n - 2)，其中 n > 1
// 给你 n ，请计算 F(n) 。

// 示例 1：
// 输入：2
// 输出：1
// 解释：F(2) = F(1) + F(0) = 1 + 0 = 1

// 示例 2：

// 输入：3
// 输出：2
// 解释：F(3) = F(2) + F(1) = 1 + 1 = 2

//递归
var fib = function (n) {
  if (n <= 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
};

//递推
function fiB(n) {
  let cache = [];
  for (let i = 0; i <= n; i++) {
    if (i == 1 || i == 0) {
      cache[i] = i;
    } else {
      cache[i] = cache[i - 1] + cache[i - 2];
    }
  }
  return cache[n];
}

//动态规划
function Fib(n) {
  if (n <= 1) {
    return n;
  }
  let p = 0;
  let q = 0;
  let r = 1;
  for (let i = 2; i <= n; i++) {
    p = q;
    q = r;
    r = p + q;
  }
  return r;
}

console.log(fiB(6));
