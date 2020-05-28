/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let obj = {}
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]
    if (obj[complement] !== undefined) {
      return [obj[complement], i]
    }
    obj[nums[i]] = i
  }
}

console.log(twoSum([1,5,4,8,6], 6))