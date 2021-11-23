// 45. Jump Game II(Medium)
// https://leetcode.com/problems/jump-game-ii/

const jump = nums => {
  const arr = Array(nums.length).fill(Number.MAX_SAFE_INTEGER);
  arr[0] = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = 1; j <= nums[i]; j++) {
      arr[i + j] = Math.min(arr[i + j], arr[i] + 1);
      if (i + j === nums.length - 1) {
        return arr[i + j];
      }
    }
  }
  return arr[arr.length - 1];
};

// const nums = [2, 3, 1, 1, 4];
const nums = [2, 1];

console.log(jump(nums));
