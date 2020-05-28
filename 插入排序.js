function insertSort(nums) {
    for (let i = 1; i < nums.length; i++) {
        let curr = nums[i]
        let j = i - 1
        while (j >= 0 && nums[j] > curr) {
            nums[j+1] = nums[j]
            j--
        }
        nums[j+1] = curr
    }
    return nums
}

console.log(insertSort([8,5,4,7,9,1,3,6,2]))