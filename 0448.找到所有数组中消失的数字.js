/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    let result = []
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[nums[i]-1]) {
            nums[nums[i]-1+nums.length] = nums[i]
        }
    }
    for (let i = nums.length; i < nums.length * 2; i++) {
        if (nums[i] !== i+1-nums.length) {
            result.push(i+1)
        }
    }
    return result
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));