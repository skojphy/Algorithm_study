// 최대 부분 증가수열

const solution = nums => {
  const dp = new Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp);
};

const nums = [5, 3, 7, 8, 6, 2, 9, 4]; // 배열 입력

console.log(solution(nums));
