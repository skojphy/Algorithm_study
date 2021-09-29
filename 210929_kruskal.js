const solution = (n, edges) => {
  edges.sort((a, b) => a[2] - b[2]);
  console.log(edges);
  const connection = new Array(n + 1).fill().map((_, i) => i);
  console.log(connection);

  let cost = 0;

  const find = a => {
    if (a === connection[a]) {
      return a;
    } else {
      return (connection[a] = find(connection[a]));
    }
  };

  const union = (a, b) => {
    connection[find(a)] = find(b);
  };

  edges.forEach(el => {
    if (find(el[0]) !== find(el[1])) {
      union(el[0], el[1]);
      console.log(el[0], el[1]);
      cost += el[2];
    }
  });
  return cost;
};

const n = 9;
const edges = [
  [1, 2, 12],
  [1, 9, 25],
  [2, 3, 10],
  [2, 8, 17],
  [2, 9, 8],
  [3, 4, 18],
  [3, 7, 55],
  [4, 5, 44],
  [5, 6, 60],
  [5, 7, 38],
  [7, 8, 35],
  [8, 9, 15],
];

console.log(solution(n, edges));
