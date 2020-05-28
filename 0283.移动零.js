/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    if (nums === null || nums.length === 0) return
    let j = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            if (i > j) {
                nums[j] = nums[i]
                nums[i] = 0
            }
            j++
        }
    }
}

console.log(moveZeroes([0, 1, 0, 3, 0,0, 3,  12]));