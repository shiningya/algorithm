/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let prev = 0
    let curr = 0
    let result = 0
    for (let i = 0; i < nums.length; i++) {
        result = Math.max(prev + nums[i], curr)
        prev = curr
        curr = result
    }
    return result
}

console.log(rob([2, 7,9,33,5]));