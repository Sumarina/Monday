# 爬梯子

You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Input: 3
Output: 3
Explanation: There are three ways to climb to the top.

1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step

暴力法 无法提交 n 为 44 执行会超过时间限制。 复杂度为 O(2 的 n 次方)

```js
var climbStairs = function(n) {
  return climb_stairs(0, n);
};

function climb_stairs(i, n) {
  if (i > n) {
    return 0;
  }
  if (i === n) {
    return 1;
  }
  return climb_stairs(i + 1, n) + climb_stairs(i + 2, n);
}
```

记忆化递归 减少冗余

```js
var climbStairs = function(n) {
  const memoriesArr = [];
  return climb_stairs(0, n, memoriesArr);
};

function climb_stairs(i, n, memoriesArr) {
  if (i > n) {
    return 0;
  }
  if (i === n) {
    return 1;
  }
  if (memoriesArr[i] > 0) {
    return memoriesArr[i];
  }
  memoriesArr[i] = climb_stairs(i + 1, n, memoriesArr) + climb_stairs(i + 2, n, memoriesArr);
  return memoriesArr[i];
}
```

动态规划
到达第 n 阶的方法有两种方式：第一种是第 n-1 阶向上爬一步。第二种方式是第 n-2 阶向上爬两步。
令 dp 表示能到达第 n 阶的方法总数：dp(n)=dp(n-1)+dp(n-2);

```js
var climbStairs = function(n) {
  let dp = [];
  dp[0] = 0;
  dp[1] = 1;
  dp[2] = 2;
  if (n >= 3) {
    for (let i = 3; i <= n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2];
    }
  }
  return dp[n];
};
```

使用斐波那契数

```js
var climbStairs = function(n) {
  let first = 1;
  let second = 2;
  if (n === 1) return first;
  for (let i = 3; i <= n; i++) {
    let third = first + second;
    first = second;
    second = third;
  }
  return second;
};
```
