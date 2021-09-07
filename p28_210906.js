// 순위 검색(Level 2)
// https://programmers.co.kr/learn/courses/30/lessons/72412

const solution = (info, query) => {
  const arrInfo = info.map(el => el.split(' '));
  const arrQuery = query.map(el => el.split(' ').filter((v, i) => !(i % 2) || i === 7));
  const answer = [];

  for (let x of arrQuery) {
    const arr = arrInfo
      .filter(
        el =>
          (x[0] === '-' || el[0] === x[0]) &&
          (x[1] === '-' || el[1] === x[1]) &&
          (x[2] === '-' || el[2] === x[2]) &&
          (x[3] === '-' || el[3] === x[3])
      )
      .map(el => el[4]);
    arr.sort((a, b) => b - a);
    answer.push(numFilter(arr, x[4]));
  }
  return answer;
};

const numFilter = (nums, score) => {
  let lt = 0;
  let rt = nums.length - 1;
  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    if (Number(nums[mid]) >= score && (mid === nums.length - 1 || Number(nums[mid + 1]) < score)) {
      return mid + 1;
    } else if (Number(nums[mid]) < score) {
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }
  return lt;
};

const info = [
  'java backend junior pizza 150',
  'python frontend senior chicken 210',
  'python frontend senior chicken 150',
  'cpp backend senior pizza 260',
  'java backend junior chicken 80',
  'python backend senior chicken 50',
];
const query = [
  'java and backend and junior and pizza 100',
  'python and frontend and senior and chicken 200',
  'cpp and - and senior and pizza 250',
  '- and backend and senior and - 150',
  '- and - and - and chicken 100',
  '- and - and - and - 150',
];

console.log(solution(info, query));
