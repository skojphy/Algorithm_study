// 배달(Level 2)
// https://programmers.co.kr/learn/courses/30/lessons/12978

const solution = (N, road, K) => {
  let graph = new Array(N)
    .fill()
    .map((el, i) => new Array(N).fill().map((el, j) => (i === j ? 0 : Number.MAX_SAFE_INTEGER)));

  road.forEach(
    el =>
      (graph[el[0] - 1][el[1] - 1] = graph[el[1] - 1][el[0] - 1] =
        Math.min(graph[el[1] - 1][el[0] - 1], el[2]))
  );

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      for (let k = 0; k < N; k++) {
        graph[j][k] = Math.min(graph[j][k], graph[j][i] + graph[i][k]);
      }
    }
  }
  return graph[0].filter(el => el <= K).length;
};

const N = 5;
const road = [
  [1, 2, 1],
  [2, 3, 3],
  [5, 2, 2],
  [1, 4, 2],
  [5, 3, 1],
  [5, 4, 2],
];
const K = 3;

console.log(solution(N, road, K)); // 출력
