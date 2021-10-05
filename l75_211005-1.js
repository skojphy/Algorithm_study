const nums = [0, 1, 2];

const sortColors = nums => {
  let lt = 0;
  let rt = 1;
  let flag = 0;
  if (nums.length < 2) {
    return;
  }
  while (flag < 2) {
    if (lt === nums.length - 2) {
      if (nums[lt] > nums[rt]) {
        [nums[lt], nums[rt]] = [nums[rt], nums[lt]];
      }
      break;
    }
    if (nums[lt] > nums[rt]) {
      [nums[lt], nums[rt]] = [nums[rt], nums[lt]];
      if (rt === nums.length - 1) {
        flag++;
        lt++;
        rt = lt + 1;
      } else if (nums[lt] === flag) {
        lt++;
        rt = lt + 1;
      }
    } else {
      rt++;
      if (rt === nums.length) {
        lt++;
        rt = lt + 1;
      }
    }
    console.log(nums, lt, rt);
  }
};

sortColors(nums);

console.log(nums);
