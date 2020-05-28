/**
 * @param {number} n
 * @return {number}
 */
// 动态规划算法
var climbStairs = function (n) {
    if (n === 1) {
        return 1
    }
    let dp = []
    dp[1] = 1
    dp[2] = 2
    for (let i = 3; i <= n+1; i++) {
        dp[i] = dp[i-1] + dp[i-2]
    }
    return dp[n]
};

// 斐波那契数
var climbStairs2 = function (n) {
    if (n === 1) {
        return 1
    }
    let first = 1
    let second = 2
    for (let i = 3; i <= n; i++) {
        let third = first + second
        first = second
        second = third
    }
    return second
};

console.log(climbStairs(6));
console.log(climbStairs2(6));