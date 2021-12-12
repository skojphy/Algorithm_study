// 56. Merge Intervals
// https://leetcode.com/problems/merge-intervals/

const merge = intervals => {
  intervals.sort((a, b) => a[1] - b[1]);
  const answer = [];
  intervals.forEach(interval => {
    answer.push(interval);
    if (answer.length > 1) {
      while (answer.length > 1 && answer[answer.length - 2][1] >= answer[answer.length - 1][0]) {
        const temp1 = answer[answer.length - 2];
        const temp2 = answer[answer.length - 1];
        answer.pop();
        answer.pop();
        answer.push([Math.min(temp1[0], temp2[0]), temp2[1]]);
        console.log(answer);
      }
    }
  });
  return answer;
};

// const intervals = [
//   [1, 3],
//   [2, 6],
//   [8, 10],
//   [15, 18],
// ];

// const intervals = [
//   [2, 3],
//   [4, 5],
//   [6, 7],
//   [8, 9],
//   [1, 10],
// ];

// const intervals = [
//   [1, 4],
//   [4, 5],
// ];

const intervals = [
  [2, 3],
  [2, 2],
  [3, 3],
  [1, 3],
  [5, 7],
  [2, 2],
  [4, 6],
];

console.log(merge(intervals));
