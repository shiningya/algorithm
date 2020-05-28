/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let pre = 0
    let max = nums[0]
    nums.forEach(x => {
        pre = Math.max(pre + x, x)
        max = Math.max(pre, max)
    })
    return max
}