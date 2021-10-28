const search = (nums, target) => {
  let lt = 0;
  let rt = nums.length - 1;
  if (target >= nums[0]) {
    while (lt <= rt) {
      let mid = Math.floor((lt + rt) / 2);
      if (nums[mid] === target) return mid;
      if (nums[mid] > target || nums[mid] < nums[0]) {
        rt = mid - 1;
      } else lt = mid + 1;
    }
  } else {
    while (lt <= rt) {
      let mid = Math.floor((lt + rt) / 2);
      if (nums[mid] === target) return mid;
      if (nums[mid] < target || nums[mid] > nums[nums.length - 1]) {
        lt = mid + 1;
      } else rt = mid - 1;
    }
  }
  return -1;
};

const nums = [4, 5, 6, 7, 0, 1, 2];
const target = 3;

console.log(search(nums, target));
