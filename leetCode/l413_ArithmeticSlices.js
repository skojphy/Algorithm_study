// 413. Arithmetic Slices(medium)
// https://leetcode.com/problems/arithmetic-slices/

const numberOfArithmeticSlices = nums => {
  if (nums.length < 3) return 0;
  let cnt = 0;
  let answer = 0;
  let diff = nums[1] - nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] - nums[i - 1] === diff) {
      cnt++;
      if (i === nums.length - 1) {
        answer += (cnt * (cnt - 1)) / 2;
      }
    } else {
      answer += (cnt * (cnt - 1)) / 2;
      cnt = 1;
    }
    diff = nums[i] - nums[i - 1];
  }
  return answer;
};

// const nums = [1, 2, 3, 8, 9, 10];

const nums = [1, 2, 3, 4];

console.log(numberOfArithmeticSlices(nums));
