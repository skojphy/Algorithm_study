// Longest Arithmetic Subsequence(Medium)
// https://leetcode.com/problems/longest-arithmetic-subsequence/

const longestArithSeqLength = nums => {
  let target = 0;
  let max = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      let cnt = 0;
      const d = nums[j] - nums[i];
      target = nums[j] + d;
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[k] === target) {
          target += d;
          cnt++;
        }
      }
      max = Math.max(cnt, max);
    }
  }
  return max + 2;
};

const nums = [3, 6, 9, 12];

console.log(longestArithSeqLength(nums));

// const longestArithSeqLength = nums => {
//   const dist = Math.max(...nums) - Math.min(...nums);

//   let dy = new Array(nums.length).fill().map(a => new Array(dist * 2 + 1).fill(1));

//   for (let i = 0; i < nums.length; i++) {
//     for (let k = 0; k < i; k++) {
//       dy[i][nums[i] - nums[k] + dist] = dy[k][nums[i] - nums[k] + dist] + 1;
//     }
//   }

//   let max = 0;
//   for (let i = 0; i < nums.length; i++) {
//     max = dy.reduce((a, b) => Math.max(a, Math.max(...b)), 0);
//   }
//   return max;
// };
