// 40. Combination Sum II(Medium)
// https://leetcode.com/problems/combination-sum-ii/

const combinationSum2 = (candidates, target) => {
  let flag = 1;
  candidates.sort((a, b) => a - b);
  const dy = Array(target + 1).fill([]);
  const temp = Array(target + 1).fill([]);

  candidates.forEach((el, idx) => {
    idx !== 0 && el === candidates[idx - 1] ? flag++ : (flag = 1);
    if (target >= flag * el) {
      for (let i = target; i >= flag * el; i--) {
        if (flag === 1) {
          dy[i] =
            i === flag * el
              ? [...dy[i], Array(flag).fill(el)]
              : [...dy[i], ...dy[i - el].map(el2 => [...el2, el])];
          temp[i] = i === flag * el ? [Array(flag).fill(el)] : dy[i - el].map(el2 => [...el2, el]);
        } else {
          dy[i] =
            i === flag * el
              ? [...dy[i], Array(flag).fill(el)]
              : [...dy[i], ...temp[i - el].map(el2 => [...el2, el])];
          temp[i] =
            i === flag * el ? [Array(flag).fill(el)] : temp[i - el].map(el2 => [...el2, el]);
        }
      }
    }
  });
  return dy[target];
};

const candidates = [4, 1, 1, 4, 4, 4, 4, 2, 3, 5];
const target = 10;

console.log(combinationSum2(candidates, target));
