/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let obj = {}
    let max = 0
    let num
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]]) {
            obj[nums[i]]++
        } else {
            obj[nums[i]] = 1
        }
        if (obj[nums[i]] > max) {
            max = obj[nums[i]]
            num = nums[i]
        }
    }
    return num
};

console.log(majorityElement([2, 2,3,3,3,3, 1, 2,3,3,3,3, 2, 1, 1,3,3,3,3,3]));