// 78. Subsets(Medium)
// https://leetcode.com/problems/subsets/

const subsets = nums => {
  const answer = [];
  const temp = [];
  const DFS = L => {
    if (L === nums.length) {
      answer.push([...temp]);
    } else {
      temp.push(nums[L]);
      DFS(L + 1);
      temp.pop();
      DFS(L + 1);
    }
  };
  DFS(0);
  return answer;
};

const nums = [1, 2, 3];

console.log(subsets(nums));
