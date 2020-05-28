/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let ans = 0;
    for (const num of nums) {
        // ans ^= num;
        console.log('ans ^= num: ', ans ^= num);
    }
    return ans;
};

console.log(singleNumber([2,4,6,4,5,6,5]))