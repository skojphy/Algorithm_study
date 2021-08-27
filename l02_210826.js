// 704. Binary Search(Easy)
// https://leetcode.com/problems/binary-search/


const search = (nums, target) => {
    let lt = 0;
    let rt = nums.length - 1;

    while(lt <= rt){
        let mid = Math.floor((lt + rt) / 2);
        if(nums[mid] === target){
            return mid;
        }
        nums[mid] <= target ? lt = mid + 1 : rt = mid - 1;
    }
    return -1;
}


const nums = [-1,0,3,5,9,12];
const target = 9;

// const nums = [-1,0,3,5,9,12];
// const target = 2;

console.log(search(nums, target));