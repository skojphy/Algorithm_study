// 39. Combination Sum(Medium)
// https://leetcode.com/problems/combination-sum/

const combinationSum = (candidates, target) => {
  const dy = Array(target + 1).fill([]);
  candidates.forEach(el => {
    for (let i = el; i <= target; i++) {
      dy[i] = i === el ? [...dy[i], [el]] : [...dy[i], ...dy[i - el].map(el2 => [...el2, el])];
    }
  });
  return dy[target];
};

const candidates = [2, 3, 6, 7];
const target = 8;

console.log(combinationSum(candidates, target));
