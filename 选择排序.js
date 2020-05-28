function selectSort(nums) {
    for (let i = 0; i < nums.length; i++) {
        let min = i
        for (let j = i+1; j < nums.length; j++) {
            if (nums[j] < nums[min]) {
                min = j
            }
        }
        if (i !== min) {

            let temp = nums[i]
            nums[i] = nums[min]
            nums[min] = temp
        }
    }
    return nums
}

console.log(selectSort([8,5,4,7,9,1,3,6,2]))