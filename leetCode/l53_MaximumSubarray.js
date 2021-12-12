// 53. Maximum Subarray
// https://leetcode.com/problems/maximum-subarray/

const maxSubArray = nums => {
  if (nums.length === 1) return nums[0];
  const dy = [...nums];
  let max = nums[0];

  for (let i = 1; i < nums.length; i++) {
    dy[i] = Math.max(dy[i - 1] + dy[i], dy[i]);
    max = Math.max(max, dy[i]);
  }

  return max;
};

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]; // 6

console.log(maxSubArray(nums));
