// 행렬의 덧셈Level1)
// https://programmers.co.kr/learn/courses/30/lessons/12950

const solution = (arr1, arr2) => Array(arr1.length).fill().map((e, v1) => Array(arr1[0].length).fill().map((e, v2) => arr1[v1][v2] + arr2[v1][v2]));

const arr1 = [[1,2],[2,3]];
const arr2 = [[3,4],[5,6]];

console.log(solution(arr1, arr2));