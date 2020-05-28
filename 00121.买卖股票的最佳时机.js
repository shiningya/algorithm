/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let min = Number.MAX_VALUE
    let profit = 0
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i]
        } else if (prices[i] - min > profit) {
            profit = prices[i] -min
        }
    }
    return profit
};

console.log(maxProfit([9,3,8,1,4,5]));