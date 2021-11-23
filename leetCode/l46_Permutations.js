// 46. Permutations(Medium)
// https://leetcode.com/problems/permutations/

const permute = nums => {
  const check = Array(nums.length).fill(0);
  const answer = [];
  const temp = [];
  const DFS = L => {
    if (L === nums.length) {
      answer.push([...temp]);
    } else {
      for (let i = 0; i < nums.length; i++) {
        if (check[i] === 0) {
          check[i] = 1;
          temp.push(nums[i]);
          DFS(L + 1);
          temp.pop();
          check[i] = 0;
        }
      }
    }
  };
  DFS(0);
  return answer;
};

const nums = [1, 2, 3];

console.log(permute(nums));
